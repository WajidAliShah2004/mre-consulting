# Fix Railway Build Error

## The Problem
Railway is trying to build from the root directory instead of the `server` folder.

Error: `tsc: not found` - because it's trying to build the client, not the server.

## Solution: Configure Root Directory in Railway

### Step 1: Go to Railway Service Settings

1. Open your Railway project
2. Click on your service (the one that's failing)
3. Click on **"Settings"** tab

### Step 2: Set Root Directory

1. Scroll down to **"Root Directory"**
2. Enter: `server`
3. Click **"Save"** or it auto-saves

### Step 3: Redeploy

1. Go to **"Deployments"** tab
2. Click **"Redeploy"** on the latest deployment
3. Or just push a new commit to trigger deployment

---

## Alternative: Use Railway CLI

If the UI doesn't work, you can configure via Railway CLI:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Set root directory
railway up --service server
```

---

## Verify Configuration

After setting the root directory, Railway should:
1. ✅ Run `npm install` in the `server` folder
2. ✅ Run `npm run build` (which runs `tsc`)
3. ✅ Run `npm start` (which runs `node dist/server.js`)

---

## Expected Build Output

You should see:
```
Building from: server/
Running: npm install
Running: npm run build
> tsc
Build successful!
Starting: npm start
Server running on port 5000
```

---

## If Still Failing

### Check package.json in server folder

Make sure `server/package.json` has:
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts"
  }
}
```

### Check tsconfig.json

Make sure `server/tsconfig.json` exists and is valid.

---

## Quick Fix Checklist

- [ ] Railway service settings opened
- [ ] Root Directory set to: `server`
- [ ] Settings saved
- [ ] Deployment triggered
- [ ] Build logs show "Building from: server/"
- [ ] Build completes successfully
- [ ] Service starts and shows "Server running"

---

## After Successful Deployment

1. Go to **Settings** → **Networking**
2. Click **"Generate Domain"**
3. Copy your Railway URL
4. Test: `https://your-app.up.railway.app/health`
5. Should return: `{"status":"OK","message":"Server is running"}`

---

## Important Notes

- Railway needs to build ONLY the server, not the client
- Client will be deployed separately to Hostinger
- Root directory setting tells Railway where to start
- The `railway.json` file is only used if it's in the root directory Railway is using
