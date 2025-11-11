# 🔧 Fix Vercel Environment Variables

## Problem Detected

The error shows:
```
POST https://mre-consulting.vercel.app/VITE_API_URL=https:/mre-consulting-production.up.railway.app/api/ai-chat/message
```

The environment variable name is being included in the URL! This means Vercel isn't loading the environment variables correctly.

## Solution

### In Vercel Dashboard:

1. Go to your project → **Settings** → **Environment Variables**

2. Make sure you have these variables set correctly:

   **Variable Name:** `VITE_API_URL`  
   **Value:** `https://mre-consulting-production.up.railway.app/api`  
   **Environment:** ✅ Production, ✅ Preview, ✅ Development

   **Variable Name:** `VITE_SUPABASE_URL`  
   **Value:** `https://bneabkaypiypceokadba.supabase.co`  
   **Environment:** ✅ Production, ✅ Preview, ✅ Development

   **Variable Name:** `VITE_SUPABASE_ANON_KEY`  
   **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`  
   **Environment:** ✅ Production, ✅ Preview, ✅ Development

3. **Important:** Make sure:
   - Variable names have NO `=` sign
   - Values have NO quotes
   - All three environments are checked (Production, Preview, Development)

### Redeploy:

After setting variables correctly:

**Option 1: Force Redeploy in Vercel**
1. Go to **Deployments** tab
2. Click **three dots** (...) on latest deployment
3. Click **Redeploy**
4. **UNCHECK** "Use existing Build Cache" (important!)
5. Click **Redeploy**

**Option 2: Push a Commit**
```bash
cd client
git add .
git commit -m "Fix environment variables"
git push origin main
```

### Verify After Deployment:

1. Visit: `https://mre-consulting.vercel.app`
2. Open browser console (F12)
3. Click chatbot
4. Send a message
5. Check the network tab - URL should be:
   ```
   https://mre-consulting-production.up.railway.app/api/ai-chat/message
   ```
   NOT:
   ```
   https://mre-consulting.vercel.app/VITE_API_URL=...
   ```

## Common Mistakes to Avoid:

❌ **Wrong:** Setting variable as `VITE_API_URL=https://...`  
✅ **Correct:** Name: `VITE_API_URL`, Value: `https://...`

❌ **Wrong:** Adding quotes around the value  
✅ **Correct:** No quotes, just the URL

❌ **Wrong:** Only checking "Production" environment  
✅ **Correct:** Check all three: Production, Preview, Development

❌ **Wrong:** Redeploying with "Use existing Build Cache" checked  
✅ **Correct:** Uncheck cache to force fresh build with new env vars

## Test Commands:

After deployment, test in browser console:
```javascript
// Should show the Railway URL
console.log(import.meta.env.VITE_API_URL);

// Should NOT be undefined
console.log(import.meta.env.VITE_SUPABASE_URL);
```

If these show `undefined`, the environment variables aren't being loaded.
