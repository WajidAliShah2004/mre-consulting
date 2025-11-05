# Railway Backend Deployment Guide

## ✅ Your Backend is Railway-Ready!

I've prepared your backend for Railway deployment. Here's what to do:

---

## Step 1: Push Your Backend to GitHub

1. Create a new GitHub repository (e.g., 'mre-backend')
2. In your server folder, run:

```bash
cd server
git init
git add .
git commit -m "Initial backend commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mre-backend.git
git push -u origin main
```

---

## Step 2: Deploy to Railway

### Option A: Deploy from GitHub (Recommended)

1. Go to https://railway.app and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your backend repository
5. Railway will auto-detect Node.js and deploy!

### Option B: Deploy using Railway CLI

```bash
npm install -g @railway/cli
railway login
cd server
railway init
railway up
```

---

## Step 3: Configure Environment Variables

In Railway dashboard, go to your project → **Variables** tab and add:

### Required Variables:
- **PORT** - Railway sets this automatically, don't add it!
- **NODE_ENV** = production
- **SUPABASE_URL** = your_supabase_url
- **SUPABASE_SERVICE_KEY** = your_supabase_service_key
- **JWT_SECRET** = your_secret_key
- **JWT_EXPIRE** = 7d
- **CLIENT_URL** = https://YOUR_USERNAME.github.io/YOUR_REPO (your GitHub Pages URL)

### Email Configuration:
- **EMAIL_HOST** = smtp.gmail.com
- **EMAIL_PORT** = 587
- **EMAIL_USER** = your_email@gmail.com
- **EMAIL_PASS** = your_app_password
- **EMAIL_FROM** = noreply@mrecai.com

### Optional APIs:
- **OPENAI_API_KEY** = your_openai_key
- **GOOGLE_BUSINESS_API_KEY** = your_key
- **YELP_API_KEY** = your_key

---

## Step 4: Get Your Railway URL

After deployment, Railway will give you a URL like:
```
https://your-app.up.railway.app
```

Copy this URL - you'll need it for your frontend!

---

## Step 5: Test Your Backend

Visit these URLs to test:
- Health check: https://your-app.up.railway.app/health
- API base: https://your-app.up.railway.app/api

---

## Files I Created:

✅ **.gitignore** - Excludes node_modules, dist, .env
✅ **railway.json** - Railway configuration
✅ **Procfile** - Tells Railway how to start your app

---

## Important Notes:

⚠️ **CORS Configuration**: Your backend is already configured to accept requests from CLIENT_URL environment variable. Make sure to set this to your GitHub Pages URL!

⚠️ **Database**: You're using Supabase (cloud), so no database setup needed on Railway!

⚠️ **Build Process**: Railway will automatically run:
1. npm install
2. npm run build (compiles TypeScript)
3. npm start (runs from dist folder)

---

## Next Steps:

Once your backend is deployed on Railway:
1. Copy your Railway URL
2. Update your frontend to use this URL
3. Deploy frontend to GitHub Pages

Need help with the frontend deployment? Just ask!
