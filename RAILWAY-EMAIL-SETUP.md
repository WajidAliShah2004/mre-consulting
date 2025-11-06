# Railway Email Setup - Ready to Copy & Paste

## 📧 Your Email Configuration

Copy these EXACT values to Railway Dashboard → Variables:

---

### EMAIL_HOST
```
smtp.gmail.com
```

### EMAIL_PORT
```
587
```

### EMAIL_USER
```
ai@mrecai.com
```

### EMAIL_PASS
```
Mrecai1234$
```

### EMAIL_FROM
```
ai@mrecai.com
```

---

## 🚀 How to Add to Railway:

1. Go to https://railway.app
2. Click on your project
3. Click **"Variables"** tab (left sidebar)
4. Click **"New Variable"** button
5. For each variable above:
   - Enter the variable name (e.g., EMAIL_HOST)
   - Enter the value
   - Click "Add"
6. Railway will automatically redeploy

---

## ✅ What Will Happen:

After adding these variables:
- ✅ Railway redeploys your app (1-2 minutes)
- ✅ Email service activates
- ✅ Contact form sends emails to: **ai@mrecai.com**
- ✅ Customers receive confirmation emails from: **ai@mrecai.com**

---

## 🧪 Test It:

1. Wait for Railway deployment to complete
2. Go to your live website
3. Fill out the contact form
4. Submit
5. Check **ai@mrecai.com** inbox for notification
6. Customer should receive confirmation email

---

## 📨 Email Flow:

**When someone submits contact form:**

1. **You receive** (at ai@mrecai.com):
   - Subject: "New Contact Form Submission - [Subject]"
   - Contains: Name, Email, Phone, Message
   - Professional HTML template

2. **Customer receives**:
   - Subject: "Thank You for Contacting MRE Consulting"
   - Contains: Confirmation message, your contact info
   - Professional HTML template

---

## 🔍 Verify It's Working:

**Check Railway Logs:**
```
✅ Email service is ready
✅ Email sent to ai@mrecai.com - Message ID: <abc123>
✅ Email sent to customer@email.com - Message ID: <def456>
```

**Check Your Inbox:**
- New email with contact details
- Professional formatting
- All customer information

---

## ⚠️ Important Notes:

- **Regular Gmail Password**: You're using a regular password (not App Password)
- **Security**: If Gmail blocks it, you may need to:
  1. Enable "Less secure app access" in Gmail settings
  2. OR generate an App Password instead
  3. OR use 2FA and create App Password

- **Backup Plan**: If Gmail blocks, the form still works:
  - ✅ Saves to Supabase database
  - ✅ Shows success to user
  - ⚠️ Email just won't send
  - You can check submissions in Supabase

---

## 🔐 Gmail Security Settings:

If emails don't send, try:

### Option 1: Enable Less Secure Apps
1. Go to https://myaccount.google.com/lesssecureapps
2. Turn ON "Allow less secure apps"
3. Redeploy on Railway

### Option 2: Use App Password (Recommended)
1. Enable 2-Factor Authentication on Gmail
2. Go to https://myaccount.google.com/apppasswords
3. Generate new app password
4. Replace EMAIL_PASS with the generated password

---

## 📊 Monitor Submissions:

**Supabase Dashboard:**
- All submissions saved in "contacts" table
- Even if email fails, you can see them here

**Railway Logs:**
- Real-time email sending status
- Error messages if something fails

---

## 🎯 Quick Checklist:

- [ ] Add EMAIL_HOST to Railway
- [ ] Add EMAIL_PORT to Railway
- [ ] Add EMAIL_USER to Railway
- [ ] Add EMAIL_PASS to Railway
- [ ] Add EMAIL_FROM to Railway
- [ ] Wait for Railway to redeploy
- [ ] Test contact form
- [ ] Check ai@mrecai.com inbox
- [ ] Verify customer receives confirmation

---

Your email is ready to go! Just add these variables to Railway and you're live! 🚀
