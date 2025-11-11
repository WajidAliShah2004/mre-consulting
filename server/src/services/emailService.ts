import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Create transporter with SMTP2GO configuration
const createTransporter = (): Transporter => {
  const config = {
    host: process.env.SMTP2GO_HOST || 'mail.smtp2go.com',
    port: parseInt(process.env.SMTP2GO_PORT || '2525'), // SMTP2GO uses port 2525, 587, or 8025
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP2GO_USER,
      pass: process.env.SMTP2GO_PASS
    },
    tls: {
      rejectUnauthorized: true // SMTP2GO has valid certificates
    }
  };

  if (!config.auth.user || !config.auth.pass) {
    console.warn('⚠️  SMTP2GO credentials not configured. Emails will not be sent.');
  }

  return nodemailer.createTransport(config);
};

const transporter = createTransporter();

// Verify transporter configuration
export const verifyEmailConfig = async (): Promise<boolean> => {
  try {
    if (!process.env.SMTP2GO_USER || !process.env.SMTP2GO_PASS) {
      console.log('⚠️  SMTP2GO not configured - skipping verification');
      return false;
    }
    
    // Set a timeout for verification (15 seconds for SMTP2GO)
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Verification timeout')), 15000)
    );
    
    await Promise.race([verifyPromise, timeoutPromise]);
    console.log('✅ SMTP2GO email service is ready');
    return true;
  } catch (error) {
    console.warn('⚠️  SMTP2GO verification failed (non-critical):', (error as Error).message);
    console.log('📧 Email sending will be attempted but may fail');
    return false;
  }
};

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    // Check if SMTP2GO is configured
    if (!process.env.SMTP2GO_USER || !process.env.SMTP2GO_PASS) {
      console.warn('⚠️  SMTP2GO not configured. Skipping email send.');
      return;
    }

    const mailOptions = {
      from: process.env.SMTP2GO_FROM || `MRE Consulting <${process.env.SMTP2GO_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, '') // Strip HTML for text version
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent via SMTP2GO to ${options.to} - Message ID: ${info.messageId}`);
  } catch (error) {
    console.error('❌ SMTP2GO email sending failed:', error);
    // Don't throw error to prevent contact form submission from failing
    // Just log it and continue
  }
};

// Email templates
export const emailTemplates = {
  contactNotification: (data: { name: string; email: string; phone?: string; subject: string; message: string }) => ({
    subject: `New Contact Form Submission - ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
          .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #3b82f6; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🔔 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your website contact form</p>
            <p>MRE Consulting & Insurance | <a href="https://mrecai.com">mrecai.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  contactConfirmation: (name: string) => ({
    subject: 'Thank You for Contacting MRE Consulting',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .contact-info { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 3px solid #3b82f6; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">✅ Message Received!</h1>
          </div>
          <div class="content">
            <h2 style="color: #1e3a8a;">Hi ${name},</h2>
            <p>Thank you for reaching out to MRE Consulting & Insurance! We've received your message and our team will review it shortly.</p>
            <p>We typically respond within <strong>24 hours</strong> during business days. If your matter is urgent, please don't hesitate to call us directly.</p>
            
            <div class="contact-info">
              <h3 style="margin-top: 0; color: #1e3a8a;">Need Immediate Assistance?</h3>
              <p style="margin: 10px 0;">📞 <strong>Phone:</strong> <a href="tel:929-919-3574">929-919-3574</a></p>
              <p style="margin: 10px 0;">📧 <strong>Email:</strong> <a href="mailto:Matthew@MRECAI.com">Matthew@MRECAI.com</a></p>
              <p style="margin: 10px 0;">🕐 <strong>Support:</strong> 24/7 Available</p>
            </div>

            <p>In the meantime, feel free to explore our services:</p>
            <div style="text-align: center;">
              <a href="https://mrecai.com/services" class="button">View Our Services</a>
            </div>

            <p>We look forward to helping you achieve your goals!</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The MRE Consulting Team</strong>
            </p>
          </div>
          <div class="footer">
            <p>MRE Consulting & Insurance</p>
            <p>📍 New York, NY | 📞 929-919-3574 | 🌐 <a href="https://mrecai.com">mrecai.com</a></p>
            <p style="margin-top: 20px; font-size: 12px;">
              This email was sent because you submitted a contact form on our website.<br>
              If you didn't submit this form, please ignore this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};
