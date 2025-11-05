# GitHub + Railway Deployment Guide

## Complete Step-by-Step Guide

---

## Part 1: Prepare Your Code for GitHub

### Step 1: Fix the Nested Git Repository Issue

```powershell
# Remove the nested Git repository in server folder
Remove-Item -Recurse -Force server\.git

# Verify it's removed
dir server\.git
# Should show: "cannot find path"
```

### Step 2: Check Your Root .gitignore

Make sure your root `.gitignore` file includes:

```gitignore
# Dependencies
node_modules/
client/node_modules/
server/node_modules/

# Build outputs
client/dist/
server/dist/
dist/

# Environment variables
.env
.env.local
.env.production
client/.env
client/.env.local
client/.env.production
server/.env
server/.env.local
server/.env.production

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Testing
coverage/

# Misc
.cache/
temp/
tmp/
```

### Step 3: Verify What Will Be Committed

```bash
# Check current status
git status

# Check if node_modules is being tracked (should NOT be)
git ls-files | findstr node_modules

# If node_modules appears, remove it:
git rm -r --cached client/node_modules
git rm -r --cached server/node_modules
git commit -m "Remove node_modules from tracking"
```

### Step 4: Check for Sensitive Files

```bash
# Make sure .env files are NOT tracked
git ls-files | findstr .env

# If any .env files appear (except .env.example), remove them:
git rm --cached server/.env
git rm --cached client/.env
git commit -m "Remove .env files from tracking"
```

---

## Part 2: Upload to GitHub

### Option A: If You Already Have a GitHub Repository

```bash
# Add all files
git add .

# Commit
git commit -m "Prepare for Railway deployment"

# Push to GitHub
git push origin main
```

### Option B: If You Need to Create a New GitHub Repository

1. **Go to GitHub.com** and sign in

2. **Create a new repository:**
   - Click the "+" icon → "New repository"
   - Name: `mre-consulting` (or your preferred name)
   - Description: "MRE Consulting & Insurance - Full Stack Application"
   - Choose: **Private** (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Connect your local repo to GitHub:**

```bash
# If you haven't initialized git yet
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - MRE Consulting full stack app"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Part 3: Deploy Backend to Railway

### Step 1: Sign Up for Railway

1. Go to **https://railway.app**
2. Click "Login" or "Start a New Project"
3. Sign up with **GitHub** (recommended for easy integration)
4. Authorize Railway to access your GitHub repositories

### Step 2: Create a New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your repository (e.g., `mre-consulting`)
4. Railway will detect your project

### Step 3: Configure Backend Service

1. **Railway will auto-detect your setup**
   - If it doesn't, click "Add Service" → "GitHub Repo"

2. **Configure the service:**
   - Click on the service card
   - Go to **Settings** tab
   - Set **Root Directory**: `server`
   - Set **Build Command**: `npm install && npm run build`
   - Set **Start Command**: `npm start`

3. **Or use railway.json** (already in your server folder):
   - Railway will automatically use the `server/railway.json` configuration

### Step 4: Add Environment Variables

1. Click on your service
2. Go to **Variables** tab
3. Click **"+ New Variable"** or **"Raw Editor"**
4. Add these variables:

```env
NODE_ENV=production
PORT=5000
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
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
CLIENT_URL=https://your-frontend-domain.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Important Notes:**
- Replace all `your_*` values with actual credentials
- For `JWT_SECRET`: Generate a strong random string (min 32 characters)
- For `CLIENT_URL`: Use your actual frontend URL (Hostinger domain)
- For Gmail: Use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password

### Step 5: Deploy

1. Click **"Deploy"** or Railway will auto-deploy
2. Wait for the build to complete (2-5 minutes)
3. Check the **Deployments** tab for progress
4. Look for **"Success"** status

### Step 6: Get Your Backend URL

1. Go to **Settings** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. Copy your Railway URL (e.g., `https://your-app.up.railway.app`)
5. **Save this URL** - you'll need it for your frontend!

---

## Part 4: Update Frontend to Use Railway Backend

### Step 1: Update Frontend Environment Variables

Create or update `client/.env.production`:

```env
VITE_API_URL=https://your-app.up.railway.app/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 2: Update Backend CORS Settings

Make sure your Railway backend URL is in the CORS whitelist:

1. Go to Railway dashboard
2. Click on your service → **Variables**
3. Update `CLIENT_URL` to your frontend domain:
   ```
   CLIENT_URL=https://yourdomain.com
   ```

Or if you want to allow multiple origins, you'll need to update the CORS configuration in `server/src/server.ts`.

### Step 3: Rebuild and Deploy Frontend

```bash
# Build frontend with production env
cd client
npm run build

# Upload to Hostinger
# (Upload the contents of client/dist folder)
```

---

## Part 5: Testing Your Deployment

### Test Backend Health

```bash
# Test health endpoint
curl https://your-app.up.railway.app/health

# Should return:
# {"status":"OK","message":"Server is running"}
```

### Test API Endpoints

```bash
# Test AI chat endpoint
curl -X POST https://your-app.up.railway.app/api/ai-chat/message \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

### Check Railway Logs

1. Go to Railway dashboard
2. Click on your service
3. Go to **"Deployments"** tab
4. Click on the latest deployment
5. View **logs** to see if there are any errors

---

## Part 6: Troubleshooting

### Issue: Build Failed

**Check:**
1. Railway logs for error messages
2. Make sure `server/package.json` has correct scripts
3. Verify `server/tsconfig.json` is correct
4. Check that all dependencies are in `package.json`

**Solution:**
```bash
# Test build locally first
cd server
npm install
npm run build
npm start
```

### Issue: Environment Variables Not Working

**Check:**
1. All variables are set in Railway dashboard
2. No typos in variable names
3. Values don't have extra spaces or quotes

**Solution:**
- Use Railway's "Raw Editor" to paste all variables at once
- Restart the service after adding variables

### Issue: CORS Errors

**Check:**
1. `CLIENT_URL` in Railway matches your frontend domain
2. Frontend is using correct backend URL

**Solution:**
Update `server/src/server.ts` CORS configuration:
```typescript
app.use(cors({
    origin: [
        process.env.CLIENT_URL || 'http://localhost:5173',
        'https://yourdomain.com',
        'https://www.yourdomain.com'
    ],
    credentials: true
}));
```

### Issue: Database Connection Failed

**Check:**
1. Supabase credentials are correct
2. Supabase project is active
3. Service role key (not anon key) is used

**Solution:**
- Verify credentials in Supabase dashboard
- Test connection locally first

---

## Part 7: Continuous Deployment

### Automatic Deployments

Railway automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update backend"
git push origin main

# Railway will automatically:
# 1. Detect the push
# 2. Build your code
# 3. Deploy the new version
```

### Manual Deployment

1. Go to Railway dashboard
2. Click on your service
3. Go to **Deployments** tab
4. Click **"Redeploy"** on any previous deployment

---

## Part 8: Monitoring & Maintenance

### View Logs

```bash
# In Railway dashboard:
# Service → Deployments → Click deployment → View logs
```

### Monitor Usage

```bash
# Railway dashboard → Project → Usage
# Check:
# - CPU usage
# - Memory usage
# - Network usage
# - Build minutes
```

### Free Tier Limits

Railway free tier includes:
- $5 credit per month
- 500 hours of usage
- 100 GB bandwidth
- Unlimited projects

---

## Quick Command Reference

### Prepare for GitHub
```bash
Remove-Item -Recurse -Force server\.git
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Test Backend Locally
```bash
cd server
npm install
npm run build
npm start
# Test at http://localhost:5000/health
```

### Update and Redeploy
```bash
# Make changes
git add .
git commit -m "Your changes"
git push origin main
# Railway auto-deploys
```

---

## Summary Checklist

- [ ] Remove `server/.git` directory
- [ ] Verify `.gitignore` is correct
- [ ] No `node_modules` or `.env` files committed
- [ ] Push code to GitHub
- [ ] Create Railway account
- [ ] Connect GitHub repo to Railway
- [ ] Configure service (root: `server`)
- [ ] Add all environment variables
- [ ] Deploy and get Railway URL
- [ ] Update frontend with Railway URL
- [ ] Test all endpoints
- [ ] Monitor logs for errors

---

## Your Backend URL

After deployment, your backend will be available at:
```
https://your-app-name.up.railway.app
```

Use this URL in your frontend:
```
VITE_API_URL=https://your-app-name.up.railway.app/api
```

---

## Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Check Railway logs for detailed error messages
