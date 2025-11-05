# Hostinger Deployment Guide

## Quick Overview
Hostinger is easier than IONOS because it has better Node.js support and GitHub integration.

## Prerequisites
- Hostinger hosting account
- FTP/File Manager access
- Your domain connected to Hostinger

---

## METHOD 1: Static Hosting (Easiest - Recommended)

### Step 1: Build Your Frontend

```bash
cd client
npm install
npm run build
```

This creates `client/dist/` with your production files.

### Step 2: Configure Environment Variables

Update `client/.env` before building:
```env
VITE_API_URL=https://your-backend-url.com/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### Step 3: Upload to Hostinger

**Option A: File Manager (Easiest)**
1. Log into Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. Delete default files (index.html, etc.)
5. Upload ALL files from `client/dist/`:
   - Drag and drop the entire contents
   - Or use "Upload Files" button

**Option B: FTP**
1. Get FTP credentials from hPanel → FTP Accounts
2. Use FileZilla or any FTP client
3. Upload `client/dist/` contents to `public_html`

### Step 4: Add .htaccess for React Router

Create `.htaccess` in `public_html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Step 5: Enable SSL
1. In hPanel, go to **SSL**
2. Click **Install SSL** for your domain
3. Hostinger provides free SSL automatically

### Step 6: Deploy Backend

**Recommended: Use Railway (Free)**

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js
6. Add environment variables in Railway dashboard
7. Copy your Railway URL (e.g., `https://your-app.railway.app`)
8. Update `VITE_API_URL` in client `.env` and rebuild

---

## METHOD 2: GitHub Integration (Advanced)

If you have Hostinger Premium/Business plan:

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 2: Connect in Hostinger
1. Go to hPanel → **Git**
2. Click **Create Repository**
3. Enter your GitHub repo URL
4. Set branch to `main`
5. Set deployment path to `public_html`
6. Add build command: `cd client && npm install && npm run build && cp -r dist/* ../public_html/`

### Step 3: Auto-Deploy
Every time you push to GitHub, Hostinger automatically rebuilds and deploys.

---

## METHOD 3: VPS/Cloud Hosting (Full Stack)

If you have Hostinger VPS or Cloud:

### Frontend + Backend Together

1. SSH into your VPS
2. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Clone your repo:
```bash
cd /var/www
git clone your-repo-url
cd your-repo
```

4. Install dependencies:
```bash
npm run install-all
```

5. Build frontend:
```bash
cd client
npm run build
```

6. Set up Nginx to serve frontend and proxy backend:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # Serve frontend
    location / {
        root /var/www/your-repo/client/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Proxy API requests to backend
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. Start backend with PM2:
```bash
npm install -g pm2
cd server
npm run build
pm2 start dist/server.js --name mre-backend
pm2 startup
pm2 save
```

---

## Comparison: Hostinger vs IONOS

| Feature | Hostinger | IONOS |
|---------|-----------|-------|
| Ease of Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Node.js Support | ⭐⭐⭐⭐ | ⭐⭐ |
| GitHub Integration | ✅ Yes | ❌ Limited |
| Control Panel | Modern hPanel | Traditional |
| Free SSL | ✅ One-click | ✅ Available |
| Price | $ | $$ |
| Documentation | Excellent | Good |

---

## Recommended Setup

**For Your Project:**

1. **Frontend**: Hostinger shared hosting (static files)
2. **Backend**: Railway.app (free Node.js hosting)
3. **Database**: Supabase (already set up)

**Why?**
- Hostinger is great for static files (fast, cheap)
- Railway is perfect for Node.js (free, auto-scaling)
- Supabase handles your database (already configured)
- Total cost: ~$3-10/month (just Hostinger)

---

## Quick Start Commands

```bash
# 1. Build frontend
cd client
npm run build

# 2. The dist folder is ready to upload
# Upload client/dist/* to Hostinger public_html

# 3. Deploy backend to Railway
# (Use Railway's GitHub integration)
```

---

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: Ensure `.htaccess` is uploaded and mod_rewrite is enabled

### Issue: API not connecting
**Solution**: Check CORS settings in backend and verify VITE_API_URL

### Issue: Slow loading
**Solution**: Enable GZIP compression in `.htaccess` (already included above)

### Issue: Images not loading
**Solution**: Check file paths are relative, not absolute

---

## Post-Deployment Checklist

- [ ] Website loads at your domain
- [ ] All pages accessible (no 404s)
- [ ] Contact form works
- [ ] Blog loads correctly
- [ ] White papers download
- [ ] SSL certificate active (https://)
- [ ] Mobile responsive
- [ ] Fast loading (test with PageSpeed Insights)

---

## Support

- **Hostinger Support**: 24/7 live chat in hPanel
- **Railway Support**: Discord community
- **Supabase Support**: Documentation + Discord

---

## Next Steps After Deployment

1. Set up custom domain (if not done)
2. Configure email forwarding in Hostinger
3. Set up Google Analytics
4. Submit sitemap to Google Search Console
5. Monitor with Hostinger analytics
