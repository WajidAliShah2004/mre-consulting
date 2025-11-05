# Quick Deployment Checklist

## 🚀 GitHub + Railway Deployment

### Phase 1: Prepare Code (5 minutes)

```powershell
# 1. Remove nested Git repository
Remove-Item -Recurse -Force server\.git

# 2. Check what will be committed
git status

# 3. Make sure these are NOT showing up:
#    - node_modules/
#    - .env files
#    - dist/ folders

# 4. If they appear, they're already tracked. Remove them:
git rm -r --cached server/node_modules
git rm -r --cached client/node_modules
git rm --cached server/.env
git rm --cached client/.env
git commit -m "Remove unnecessary files"
```

### Phase 2: Push to GitHub (2 minutes)

```bash
# If you already have a GitHub repo:
git add .
git commit -m "Prepare for Railway deployment"
git push origin main

# If you need to create a new repo:
# 1. Go to github.com → New Repository
# 2. Create repo (don't initialize with anything)
# 3. Run these commands:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Phase 3: Deploy to Railway (10 minutes)

#### 3.1 Setup Railway
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository

#### 3.2 Configure Service
1. Click on the service card
2. Go to **Settings**
3. Set **Root Directory**: `server`
4. Railway will use your `railway.json` automatically

#### 3.3 Add Environment Variables
Click **Variables** tab and add:

```env
NODE_ENV=production
PORT=5000
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here
JWT_SECRET=generate_a_random_32_character_string_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=noreply@mrecai.com
OPENAI_API_KEY=sk-your_openai_key_here
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_MAX_TOKENS=500
OPENAI_TEMPERATURE=0.7
OPENAI_TIMEOUT_MS=10000
CLIENT_URL=https://yourdomain.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### 3.4 Deploy
1. Click "Deploy" (or it auto-deploys)
2. Wait 2-5 minutes
3. Check **Deployments** tab for "Success"

#### 3.5 Get Your URL
1. Go to **Settings** → **Networking**
2. Click "Generate Domain"
3. Copy your URL: `https://your-app.up.railway.app`

### Phase 4: Update Frontend (5 minutes)

#### 4.1 Create Production Environment File
Create `client/.env.production`:

```env
VITE_API_URL=https://your-app.up.railway.app/api
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

#### 4.2 Update Railway Backend
In Railway Variables, update:
```env
CLIENT_URL=https://yourdomain.com
```

#### 4.3 Rebuild Frontend
```bash
cd client
npm run build
# Upload client/dist to Hostinger
```

### Phase 5: Test Everything (5 minutes)

```bash
# Test backend health
curl https://your-app.up.railway.app/health

# Should return: {"status":"OK","message":"Server is running"}

# Test from browser
# Open: https://your-app.up.railway.app/health
```

---

## 📋 Final Checklist

- [ ] Removed `server/.git` directory
- [ ] Pushed code to GitHub
- [ ] Created Railway account
- [ ] Connected GitHub repo
- [ ] Set root directory to `server`
- [ ] Added all environment variables
- [ ] Deployment shows "Success"
- [ ] Generated Railway domain
- [ ] Updated frontend `.env.production`
- [ ] Updated backend `CLIENT_URL`
- [ ] Tested `/health` endpoint
- [ ] Frontend can connect to backend

---

## 🎯 Your URLs

After deployment:

**Backend API:**
```
https://your-app.up.railway.app/api
```

**Health Check:**
```
https://your-app.up.railway.app/health
```

**Use in Frontend:**
```env
VITE_API_URL=https://your-app.up.railway.app/api
```

---

## 🔧 Quick Fixes

### If Build Fails
```bash
# Test locally first
cd server
npm install
npm run build
npm start
```

### If CORS Errors
Update Railway Variables:
```env
CLIENT_URL=https://yourdomain.com
```

### View Logs
Railway Dashboard → Service → Deployments → Click deployment → Logs

---

## 🚀 You're Done!

Your backend is now:
- ✅ Running on Railway
- ✅ Auto-deploys on git push
- ✅ Has HTTPS automatically
- ✅ Monitored and scalable

Next: Deploy your frontend to Hostinger!
