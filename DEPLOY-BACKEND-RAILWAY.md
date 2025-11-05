# Deploy Backend to Railway - Quick Guide

Your backend is already configured and ready to deploy! Follow these steps:

---

## Step 1: Push Backend to GitHub

If you haven't already pushed your server folder to GitHub:

```bash
cd server
git init
git add .
git commit -m "Backend ready for Railway"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mre-backend.git
git push -u origin main
```

**Note:** Create the GitHub repository first at https://github.com/new

---

## Step 2: Deploy on Railway

### Method 1: Deploy from GitHub (Recommended)

1. Go to https://railway.app
2. Sign in with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your backend repository
6. Railway will automatically detect Node.js and start deploying

### Method 2: Railway CLI

```bash
npm install -g @railway/cli
railway login
cd server
railway init
railway up
```

---

## Step 3: Add Environment Variables

In Railway Dashboard → Your Project → **Variables** tab, add these:

```
NODE_ENV=production
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
JWT_SECRET=your_strong_random_secret_32_chars_minimum
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=noreply@mrecai.com
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_MAX_TOKENS=500
OPENAI_TEMPERATURE=0.7
OPENAI_TIMEOUT_MS=10000
CLIENT_URL=https://WajidAliShah2004.github.io/MRECAI
```

**Important:** 
- Do NOT add PORT - Railway sets it automatically
- Update CLIENT_URL to match your frontend URL
- Use Gmail App Password (not regular password): https://myaccount.google.com/apppasswords

---

## Step 4: Get Your Railway URL

After deployment completes, Railway will provide a URL like:
```
https://your-app-name.up.railway.app
```

Copy this URL - you'll need it for your frontend configuration.

---

## Step 5: Test Your Backend

Visit these endpoints to verify:
- Health: `https://your-app.up.railway.app/health`
- API: `https://your-app.up.railway.app/api`

---

## What's Already Configured:

✅ **railway.json** - Build and deploy configuration
✅ **Procfile** - Start command
✅ **.gitignore** - Excludes node_modules, dist, .env
✅ **package.json** - Build and start scripts
✅ **CORS** - Configured to accept CLIENT_URL

---

## Build Process (Automatic):

Railway will run:
1. `npm install` - Install dependencies
2. `npm run build` - Compile TypeScript to JavaScript
3. `npm start` - Run from dist/server.js

---

## Troubleshooting:

### Build fails?
- Check Railway logs in the dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript compiles locally: `npm run build`

### App crashes?
- Check environment variables are set correctly
- Verify SUPABASE_URL and SUPABASE_SERVICE_KEY
- Check Railway logs for error messages

### CORS errors?
- Ensure CLIENT_URL matches your frontend URL exactly
- Include protocol (https://)
- No trailing slash

---

## Next Steps:

1. Deploy backend to Railway ✓
2. Copy your Railway URL
3. Update frontend API_URL to point to Railway
4. Deploy frontend to Vercel/GitHub Pages

Need help with frontend deployment? Just ask!
