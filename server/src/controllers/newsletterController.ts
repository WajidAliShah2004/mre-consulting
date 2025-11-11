import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { supabase } from '../config/supabase';
import { sendEmail } from '../services/emailService';

export const subscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('📬 Newsletter subscription attempt:', req.body);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('❌ Newsletter validation failed:', errors.array());
      res.status(400).json({ 
        success: false,
        message: 'Validation failed',
        errors: errors.array() 
      });
      return;
    }

    const { email } = req.body;
    console.log(`📬 Processing newsletter subscription for: ${email}`);

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter')
      .select('*')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.status === 'subscribed') {
        res.status(400).json({
          success: false,
          message: 'Email is already subscribed'
        });
        return;
      } else {
        // Resubscribe
        const { error } = await supabase
          .from('newsletter')
          .update({
            status: 'subscribed',
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null
          })
          .eq('email', email);

        if (error) throw error;
      }
    } else {
      // New subscription
      const { error } = await supabase
        .from('newsletter')
        .insert([{ email }]);

      if (error) throw error;
    }

    // Send welcome email
    await sendEmail({
      to: email,
      subject: 'Welcome to MRE Consulting Newsletter',
      html: `
        <h2>Welcome to our newsletter!</h2>
        <p>Thank you for subscribing to MRE Consulting & Insurance updates.</p>
        <p>You'll receive valuable tips, insights, and updates about:</p>
        <ul>
          <li>Business consulting strategies</li>
          <li>Insurance planning advice</li>
          <li>Tax optimization tips</li>
          <li>AI and technology trends</li>
          <li>And much more!</li>
        </ul>
        <br>
        <p>Best regards,</p>
        <p>MRE Consulting & Insurance Team</p>
      `
    });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe'
    });
  }
};

export const unsubscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email } = req.body;

    const { data: subscriber } = await supabase
      .from('newsletter')
      .select('*')
      .eq('email', email)
      .single();

    if (!subscriber) {
      res.status(404).json({
        success: false,
        message: 'Email not found'
      });
      return;
    }

    const { error } = await supabase
      .from('newsletter')
      .update({
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email);

    if (error) throw error;

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed'
    });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe'
    });
  }
};
