import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { supabase } from '../config/supabase';
import { sendEmail } from '../services/emailService';

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, email, phone, subject, message } = req.body;

    const { data: contact, error } = await supabase
      .from('contacts')
      .insert([{ name, email, phone, subject, message }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Send notification email
    await sendEmail({
      to: process.env.EMAIL_USER || 'Matthew@MRECAI.com',
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: 'Message Received - MRE Consulting',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will respond as soon as possible.</p>
        <p>If you need immediate assistance, please call us at 929-919-3574.</p>
        <br>
        <p>Best regards,</p>
        <p>MRE Consulting & Insurance Team</p>
      `
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
};
