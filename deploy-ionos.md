# IONOS Deployment Guide

## Prerequisites
- IONOS hosting account with FTP access
- FTP client (FileZilla recommended)
- Your IONOS FTP credentials

## Step 1: Prepare Frontend

```bash
# Navigate to client folder
cd client

# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

## Step 2: Configure Environment Variables

Before building, ensure `client/.env` has production values:
```
VITE_API_URL=https://your-backend-url.com/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Step 3: Upload Frontend to IONOS

1. Connect to IONOS via FTP:
   - Host: your-domain.com (or FTP address from IONOS)
   - Username: Your IONOS FTP username
   - Password: Your IONOS FTP password
   - Port: 21 (or 22 for SFTP)

2. Navigate to web root folder (usually `/` or `/public_html`)

3. Upload ALL contents from `client/dist/` folder:
   - index.html
   - assets/ folder
   - All other files and folders

4. Ensure `.htaccess` file is uploaded (for React Router support)

## Step 4: Backend Deployment Options

### Option A: IONOS Node.js Hosting (if available)

1. Build backend:
```bash
cd server
npm install
npm run build
```

2. Upload via FTP:
   - Upload `dist/` folder
   - Upload `package.json`
   - Upload `.env` with production credentials

3. In IONOS control panel:
   - Enable Node.js
   - Set entry point: `dist/server.js`
   - Install dependencies: `npm install --production`

### Option B: External Backend Hosting (Recommended)

Deploy backend to:
- **Railway.app** (easiest, free tier)
- **Render.com** (free tier available)
- **Heroku** (paid)

Then update `VITE_API_URL` in client `.env` to point to external backend.

## Step 5: Verify Deployment

1. Visit your domain: `https://your-domain.com`
2. Test navigation (all routes should work)
3. Test API calls (contact form, blog, etc.)
4. Check browser console for errors

## Troubleshooting

### 404 Errors on Page Refresh
- Ensure `.htaccess` file is uploaded
- Check if mod_rewrite is enabled in IONOS

### API Connection Errors
- Verify `VITE_API_URL` is correct
- Check CORS settings in backend
- Ensure backend is running

### Missing Assets
- Verify all files from `dist/` were uploaded
- Check file permissions (644 for files, 755 for folders)

## FTP Upload Checklist

From `client/dist/` upload:
- [ ] index.html
- [ ] .htaccess
- [ ] assets/ folder (with all CSS, JS files)
- [ ] downloads/ folder (if exists)
- [ ] Any other static files

## Post-Deployment

1. Clear browser cache
2. Test on multiple devices
3. Check SSL certificate is active
4. Set up domain DNS if needed
5. Monitor error logs in IONOS control panel
