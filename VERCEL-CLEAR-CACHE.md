# Clear Vercel Cache and Force Rebuild

## The Problem
Vercel is using cached build configuration from old commits.

## Solution: Clear Cache in Vercel Dashboard

### Step 1: Go to Your Vercel Project

1. Open https://vercel.com/dashboard
2. Click on your `mre-consulting` project

### Step 2: Clear Build Cache

1. Click on **"Settings"** tab
2. Scroll down to **"Build & Development Settings"**
3. Look for **"Build Cache"** section
4. Click **"Clear Build Cache"** button

### Step 3: Trigger New Deployment

**Option A: Redeploy from Dashboard**
1. Go to **"Deployments"** tab
2. Click the three dots (...) on the latest deployment
3. Click **"Redeploy"**
4. Check **"Use existing Build Cache"** should be UNCHECKED
5. Click **"Redeploy"**

**Option B: Force Push**
```bash
git commit --allow-empty -m "Force Vercel rebuild"
git push origin main
```

### Step 4: Monitor Build

Watch the build logs in Vercel. You should see:
```
✓ Building with Vite
✓ Build completed successfully
```

---

## Alternative: Delete and Reimport Project

If cache clearing doesn't work:

### Step 1: Delete Current Project

1. Go to Project **Settings**
2. Scroll to bottom
3. Click **"Delete Project"**
4. Type project name to confirm
5. Click **"Delete"**

### Step 2: Import Fresh

1. Click **"Add New..."** → **"Project"**
2. Select `mre-consulting` repository
3. **Configure Settings:**
   - Framework Preset: **Vite**
   - Root Directory: **client**
   - Build Command: **vite build** (or leave default)
   - Output Directory: **dist**
   - Install Command: **npm install**

4. Click **"Deploy"**

This will start completely fresh without any cache!

---

## Verify Build Command

In Vercel settings, make sure:

**Build Command:**
```bash
vite build
```

NOT:
```bash
tsc && vite build
```

OR:
```bash
npm run build
```

---

## Expected Success Output

```
Installing dependencies...
✓ Dependencies installed

Building...
✓ vite v5.0.8 building for production...
✓ 1234 modules transformed
✓ built in 12.34s

Build completed successfully!
Deployment ready
```

---

## After Successful Deployment

Your site will be live at:
```
https://mre-consulting-xxx.vercel.app
```

Test it:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Images display
- ✅ Chatbot appears

---

## Quick Fix Summary

1. **Clear build cache** in Vercel settings
2. **Redeploy** without cache
3. Or **delete and reimport** project fresh
4. Build should succeed now!

The latest code on GitHub has the correct build configuration - Vercel just needs to use it without cache.
