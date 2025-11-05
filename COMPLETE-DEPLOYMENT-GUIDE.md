# ========================================
# COMPLETE DEPLOYMENT CHECKLIST
# ========================================

## ✅ PREREQUISITES (Do these first!)

1. Install Git for Windows
   - Download: https://git-scm.com/download/win
   - Install with default settings
   - Close and reopen your terminal

2. Create GitHub Account
   - Go to: https://github.com/signup
   - Remember your username!

3. Create Railway Account
   - Go to: https://railway.app
   - Click 'Login with GitHub' (easiest)

---

## 📋 PART 1: DEPLOY BACKEND TO RAILWAY

### Step 1: Create GitHub Repository for Backend

1. Go to: https://github.com/new
2. Repository name: **mre-backend**
3. Description: MRE Consulting Backend API
4. Keep it **Private** (recommended)
5. **DO NOT** initialize with README
6. Click 'Create repository'
7. **Copy the repository URL** (looks like: https://github.com/YOUR_USERNAME/mre-backend.git)

### Step 2: Push Backend Code to GitHub

Open terminal in your project root and run:

```bash
cd server
git init
git add .
git commit -m 'Initial backend commit - ready for Railway'
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mre-backend.git
git push -u origin main
```

**Replace YOUR_USERNAME with your actual GitHub username!**

### Step 3: Deploy on Railway

1. Go to: https://railway.app/dashboard
2. Click **'New Project'**
3. Select **'Deploy from GitHub repo'**
4. If asked, authorize Railway to access your GitHub
5. Select **'mre-backend'** repository
6. Railway will automatically detect Node.js and start deploying!
7. Wait for deployment to complete (2-3 minutes)

### Step 4: Add Environment Variables in Railway

1. In Railway dashboard, click on your project
2. Go to **'Variables'** tab
3. Click **'+ New Variable'** and add each of these:

**IMPORTANT: Copy these from your server/.env file!**

```
NODE_ENV=production
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
EMAIL_FROM=noreply@mrecai.com
OPENAI_API_KEY=your_openai_key_here
CLIENT_URL=https://YOUR_USERNAME.github.io/mre-frontend
```

**Note:** Don't add PORT - Railway sets this automatically!

4. Click **'Deploy'** to restart with new variables

### Step 5: Get Your Railway Backend URL

1. In Railway dashboard, go to **'Settings'** tab
2. Scroll to **'Domains'** section
3. Click **'Generate Domain'**
4. Copy the URL (looks like: https://mre-backend-production-xxxx.up.railway.app)
5. **SAVE THIS URL!** You'll need it for the frontend

### Step 6: Test Your Backend

Open these URLs in your browser:
- Health check: https://YOUR-RAILWAY-URL/health
- Should return: {\"status\": \"OK\", \"message\": \"Server is running\"}

---

## 📋 PART 2: DEPLOY FRONTEND TO GITHUB PAGES

### Step 1: Create GitHub Repository for Frontend

1. Go to: https://github.com/new
2. Repository name: **mre-frontend**
3. Description: MRE Consulting Website
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README
6. Click 'Create repository'

### Step 2: Update Frontend Configuration

**I'll help you with this after you complete Part 1!**

We need to:
1. Update your frontend to use the Railway backend URL
2. Configure Vite for GitHub Pages
3. Add deployment scripts

### Step 3: Push Frontend to GitHub

```bash
cd client
git init
git add .
git commit -m 'Initial frontend commit'
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mre-frontend.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
npm run deploy
```

Your site will be live at: https://YOUR_USERNAME.github.io/mre-frontend

---

## 🎯 QUICK SUMMARY

1. **Install Git** → Create GitHub account → Create Railway account
2. **Backend**: Push to GitHub → Deploy on Railway → Add env variables → Get Railway URL
3. **Frontend**: Update config with Railway URL → Push to GitHub → Deploy to GitHub Pages
4. **Done!** Frontend on GitHub Pages talks to Backend on Railway

---

## �� NEED HELP?

After you:
1. Install Git
2. Create your GitHub repositories
3. Deploy backend to Railway and get the URL

Come back and tell me your Railway URL, and I'll configure your frontend!

---

## 🔗 IMPORTANT LINKS

- Git Download: https://git-scm.com/download/win
- GitHub: https://github.com
- Railway: https://railway.app
- Your Backend Repo: https://github.com/YOUR_USERNAME/mre-backend
- Your Frontend Repo: https://github.com/YOUR_USERNAME/mre-frontend

