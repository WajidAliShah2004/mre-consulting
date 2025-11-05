import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { supabase } from '../config/supabase';
import { sendEmail } from '../services/emailService';

export const createQuote = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, email, phone, company, service, message } = req.body;

    const { data: quote, error } = await supabase
      .from('quotes')
      .insert([{ name, email, phone, company, service, message }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Send notification email
    await sendEmail({
      to: process.env.EMAIL_USER || 'Matthew@MRECAI.com',
      subject: `New Quote Request - ${service}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: 'Quote Request Received - MRE Consulting',
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Hi ${name},</p>
        <p>We've received your request for ${service} and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to call us at 929-919-3574 if you have any questions.</p>
        <br>
        <p>Best regards,</p>
        <p>MRE Consulting & Insurance Team</p>
      `
    });

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully',
      data: quote
    });
  } catch (error) {
    console.error('Quote creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit quote request'
    });
  }
};

export const getAllQuotes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const { data: quotes, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json({
      success: true,
      count: quotes?.length || 0,
      data: quotes
    });
  } catch (error) {
    console.error('Get quotes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quotes'
    });
  }
};
