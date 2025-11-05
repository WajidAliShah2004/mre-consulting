# Fix Vercel Deployment

## The Issue
Vercel was trying to build from the root directory instead of the `client` folder.

## Solution Applied
Added `vercel.json` configuration file to tell Vercel how to build the frontend.

---

## Option 1: Wait for Auto-Redeploy (Easiest)

Vercel will automatically detect the new `vercel.json` and redeploy.

1. Go to your Vercel dashboard
2. Check the deployment status
3. It should succeed now!

---

## Option 2: Reconfigure in Vercel Dashboard

If it still fails, manually configure:

### Step 1: Go to Project Settings

1. Open your Vercel project
2. Click **"Settings"**
3. Go to **"General"** tab

### Step 2: Update Build Settings

**Root Directory:**
- Leave blank OR set to `client`

**Build Command:**
```bash
npm install && npm run build
```

**Output Directory:**
```
dist
```

**Install Command:**
```bash
npm install
```

### Step 3: Override Settings

If using root directory `client`:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Step 4: Redeploy

1. Go to **"Deployments"** tab
2. Click the three dots on the latest deployment
3. Click **"Redeploy"**

---

## Option 3: Delete and Reimport (Clean Start)

If still having issues:

### Step 1: Delete Current Project

1. Go to Project Settings
2. Scroll to bottom
3. Click **"Delete Project"**
4. Confirm deletion

### Step 2: Import Again

1. Click **"Add New..."** → **"Project"**
2. Select `mre-consulting` repository
3. **IMPORTANT:** Configure these settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `client` ← Click "Edit" and set this!
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. Click **"Deploy"**

---

## Expected Build Output

You should see:
```
✓ Installing dependencies
✓ Running "npm run build"
✓ Compiling TypeScript
✓ Building with Vite
✓ Build completed
✓ Deployment ready
```

---

## After Successful Deployment

Your site will be live at:
```
https://mre-consulting-xxx.vercel.app
```

### Test Your Site

Visit the URL and check:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Images display
- ✅ Chatbot appears
- ✅ Styling is correct

---

## Connect to Backend

Once frontend is deployed:

### Step 1: Get Your Vercel URL

Copy your Vercel deployment URL (e.g., `https://mre-consulting-xxx.vercel.app`)

### Step 2: Update Backend CORS

1. Go to Railway dashboard
2. Click your backend service
3. Go to **"Variables"**
4. Update `CLIENT_URL`:
   ```
   CLIENT_URL=https://mre-consulting-xxx.vercel.app
   ```
5. Redeploy backend

### Step 3: Update Frontend Environment

Create `client/.env.production` (if not exists):
```env
VITE_API_URL=https://your-railway-backend.up.railway.app/api
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Then commit and push:
```bash
git add client/.env.production
git commit -m "Add production environment variables"
git push origin main
```

Vercel will auto-redeploy with the new environment variables.

---

## Add Environment Variables in Vercel

1. Go to Project Settings → **"Environment Variables"**
2. Add these variables:
   - `VITE_API_URL` = `https://your-railway-backend.up.railway.app/api`
   - `VITE_SUPABASE_URL` = `https://your-project.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `your_anon_key`
3. Click **"Save"**
4. Redeploy

---

## Troubleshooting

### Build Still Failing?

**Check:**
1. Root directory is set to `client` in Vercel settings
2. `client/package.json` has all dependencies
3. TypeScript is in `client/package.json` devDependencies

**Fix:**
Make sure `client/package.json` includes:
```json
{
  "devDependencies": {
    "typescript": "^5.3.3",
    "vite": "^5.0.8",
    "@vitejs/plugin-react": "^4.2.1"
  }
}
```

### Site Loads but API Calls Fail?

**Check:**
1. Backend is running on Railway
2. `VITE_API_URL` is set correctly in Vercel
3. Backend `CLIENT_URL` includes your Vercel URL
4. CORS is configured properly

---

## Custom Domain (Optional)

Once deployed successfully:

1. Go to Project Settings → **"Domains"**
2. Click **"Add"**
3. Enter your domain (e.g., `mrecai.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## Summary

✅ Added `vercel.json` configuration
✅ Pushed to GitHub
✅ Vercel will auto-redeploy
✅ Frontend will be live in 2-3 minutes

Your frontend should now deploy successfully!
