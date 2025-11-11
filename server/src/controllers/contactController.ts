import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { supabase } from '../config/supabase';
import { sendEmail, emailTemplates } from '../services/emailService';

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ 
        success: false,
        message: 'Validation failed',
        errors: errors.array() 
      });
      return;
    }

    const { name, email, phone, subject, message } = req.body;

    // Save to database
    const { data: contact, error } = await supabase
      .from('contacts')
      .insert([{ 
        name: name.trim(), 
        email: email.trim().toLowerCase(), 
        phone: phone?.trim() || null, 
        subject: subject.trim(), 
        message: message.trim(),
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Send notification email to admin (non-blocking)
    const notificationEmail = emailTemplates.contactNotification({
      name,
      email,
      phone,
      subject,
      message
    });

    sendEmail({
      to: process.env.ADMIN_EMAIL || 'matthew@mrecai.com',
      subject: notificationEmail.subject,
      html: notificationEmail.html
    }).catch(err => console.error('Admin notification email failed:', err));

    // Send confirmation email to customer (non-blocking)
    const confirmationEmail = emailTemplates.contactConfirmation(name);
    
    sendEmail({
      to: email,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html
    }).catch(err => console.error('Customer confirmation email failed:', err));

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        created_at: contact.created_at
      }
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or contact us directly at Matthew@MRECAI.com'
    });
  }
};
