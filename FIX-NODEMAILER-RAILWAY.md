# Fix Nodemailer on Railway - Complete Guide

## Problem
Nodemailer is not working on Railway because you're trying to use `ai@mrecai.com` with Gmail SMTP, which only works with actual Gmail addresses.

## Solutions (Choose ONE)

### ✅ Option 1: Use Gmail (Easiest & Free)

**Step 1: Use a Real Gmail Account**
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-app-password-here
EMAIL_FROM=your-actual-gmail@gmail.com
```

**Step 2: Generate Gmail App Password**
1. Go to https://myaccount.google.com/apppasswords
2. Sign in with your Gmail account
3. Create a new app password for "Mail"
4. Copy the 16-character password
5. Use this as `EMAIL_PASS` in Railway

**Step 3: Update Railway Environment Variables**
- Go to Railway Dashboard → Your Project → Variables
- Update these variables:
  - `EMAIL_USER` = your-actual-gmail@gmail.com
  - `EMAIL_PASS` = (the 16-character app password)
  - `EMAIL_FROM` = your-actual-gmail@gmail.com

---

### ✅ Option 2: Use SendGrid (Recommended for Production)

SendGrid offers 100 free emails/day and is more reliable for production.

**Step 1: Sign Up for SendGrid**
1. Go to https://signup.sendgrid.com/
2. Create a free account
3. Verify your email

**Step 2: Create API Key**
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Name it "Railway Production"
4. Select "Full Access"
5. Copy the API key (starts with `SG.`)

**Step 3: Verify Sender Email**
1. Go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Add `ai@mrecai.com` or any email you want to send from
4. Check your email and verify

**Step 4: Update Railway Environment Variables**
```
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=SG.your-actual-sendgrid-api-key-here
EMAIL_FROM=ai@mrecai.com
```

---

### ✅ Option 3: Use Resend (Modern & Developer-Friendly)

Resend offers 3,000 free emails/month and is very easy to set up.

**Step 1: Sign Up for Resend**
1. Go to https://resend.com/signup
2. Create account with GitHub or email

**Step 2: Get API Key**
1. Go to API Keys
2. Click "Create API Key"
3. Copy the key (starts with `re_`)

**Step 3: Add Domain (Optional but Recommended)**
1. Go to Domains
2. Add your domain `mrecai.com`
3. Add DNS records (or use `onboarding@resend.dev` for testing)

**Step 4: Update Code**

Install Resend:
```bash
cd server
npm install resend
```

Update `server/src/services/emailService.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️  Resend API key not configured');
      return;
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: options.to,
      subject: options.subject,
      html: options.html,
    });

    console.log(`✅ Email sent to ${options.to}`);
  } catch (error) {
    console.error('❌ Email sending failed:', error);
  }
};
```

**Step 5: Update Railway Environment Variables**
```
RESEND_API_KEY=re_your-actual-resend-api-key-here
EMAIL_FROM=ai@mrecai.com
```

---

## Testing Locally

Create `server/.env.local`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-gmail@gmail.com
```

Test the contact form:
```bash
cd server
npm run dev
```

Then submit a test message through your contact form.

---

## Troubleshooting

### Gmail Issues
- ✅ Make sure 2-Factor Authentication is enabled
- ✅ Use App Password, not regular password
- ✅ Check "Less secure app access" is OFF (use App Password instead)

### SendGrid Issues
- ✅ Verify your sender email
- ✅ Check API key has "Mail Send" permission
- ✅ Wait 5-10 minutes after verification

### Railway Issues
- ✅ Redeploy after changing environment variables
- ✅ Check Railway logs: `railway logs`
- ✅ Make sure no typos in variable names

---

## Current Status

Your code is already set up correctly! You just need to:
1. Choose one of the options above
2. Update the environment variables in Railway
3. Redeploy (Railway does this automatically)

The email service will work immediately after updating the variables.

---

## Recommended Solution

**For Quick Fix:** Use Option 1 (Gmail) - takes 5 minutes
**For Production:** Use Option 2 (SendGrid) or Option 3 (Resend) - more reliable

Both SendGrid and Resend are free for your volume and more reliable than Gmail for production use.
