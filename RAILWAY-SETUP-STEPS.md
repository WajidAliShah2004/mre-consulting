# 🚂 Railway Backend Setup - Step by Step

## Current Issue
Your backend is deployed but **missing environment variables** in Railway.

## ✅ Step-by-Step Fix

### 1. Get Your Supabase Credentials

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click **Settings** (gear icon in sidebar)
4. Click **API**
5. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **service_role key** (the secret one, NOT the anon key)

### 2. Add Variables to Railway

1. Go to: https://railway.app
2. Open your backend project
3. Click the **Variables** tab
4. Click **+ New Variable**
5. Add each variable below:

```
SUPABASE_URL=<paste_your_project_url_here>
SUPABASE_SERVICE_KEY=<paste_your_service_role_key_here>
NODE_ENV=production
JWT_SECRET=your_strong_32_character_secret_here_abc123
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=your_email@gmail.com
OPENAI_API_KEY=your_openai_api_key_if_you_have_one
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_MAX_TOKENS=500
OPENAI_TEMPERATURE=0.7
OPENAI_TIMEOUT_MS=10000
CLIENT_URL=https://WajidAliShah2004.github.io/MRECAI
```

### 3. Railway Will Auto-Redeploy

- After adding variables, Railway automatically redeploys
- Wait 2-3 minutes for the build to complete
- Check the logs - you should see: ✅ Supabase Connected Successfully

### 4. Fix Node.js Version (Optional but Recommended)

In Railway Dashboard:
1. Go to **Settings** tab
2. Scroll to **Environment**
3. Add this variable:
   ```
   NIXPACKS_NODE_VERSION=20
   ```
4. This will use Node 20 instead of Node 18

### 5. Test Your Backend

Once deployed, visit:
```
https://your-railway-url.up.railway.app/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

## 🔒 Security Notes

- ✅ Never commit `.env` files to GitHub
- ✅ Only add secrets in Railway Dashboard
- ✅ Use service_role key (not anon key) for backend
- ⚠️ DO NOT add PORT variable (Railway sets it automatically)

## 📧 Gmail App Password

If you don't have a Gmail App Password:
1. Go to: https://myaccount.google.com/apppasswords
2. Create a new app password
3. Use that password (not your regular Gmail password)

## Need Help?

If you see errors after adding variables, share the Railway logs and I'll help debug!
