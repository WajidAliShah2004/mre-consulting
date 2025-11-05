# Railway Deployment - Ready to Go! 🚀

Your backend has been pushed to GitHub successfully!

Repository: https://github.com/WajidAliShah2004/mre-consulting

---

## Deploy to Railway Now:

### Step 1: Go to Railway
Visit: https://railway.app

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose: **WajidAliShah2004/mre-consulting**
4. Railway will detect your Node.js backend

### Step 3: Configure Root Directory (Important!)
Since your backend is in the `server` folder:
1. In Railway dashboard, go to **Settings**
2. Find **"Root Directory"** or **"Working Directory"**
3. Set it to: `server`
4. Save changes

### Step 4: Add Environment Variables
Go to **Variables** tab and add these:

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

**Don't add PORT** - Railway sets it automatically!

### Step 5: Deploy
Click **"Deploy"** and wait for the build to complete.

### Step 6: Get Your URL
After deployment, Railway will give you a URL like:
```
https://mre-consulting-production.up.railway.app
```

### Step 7: Test Your Backend
Visit:
- Health check: `https://your-url.up.railway.app/health`
- API: `https://your-url.up.railway.app/api`

---

## Alternative: Railway CLI Method

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

Then set the root directory to `server` in the dashboard.

---

## What Happens During Deployment:

1. Railway clones your GitHub repo
2. Navigates to `server` folder
3. Runs `npm install`
4. Runs `npm run build` (compiles TypeScript)
5. Runs `npm start` (starts from dist/server.js)

---

## Next Steps After Deployment:

1. ✅ Backend deployed on Railway
2. Copy your Railway URL
3. Update frontend API configuration to use Railway URL
4. Test all API endpoints
5. Deploy frontend to Vercel/GitHub Pages

---

## Troubleshooting:

**Build fails?**
- Check Railway logs
- Verify root directory is set to `server`
- Ensure all dependencies are in server/package.json

**App crashes?**
- Check environment variables
- Verify Supabase credentials
- Check Railway logs for errors

**CORS errors?**
- Ensure CLIENT_URL matches your frontend URL exactly
- Include https:// protocol
- No trailing slash

---

Ready to deploy? Go to https://railway.app and follow the steps above!
