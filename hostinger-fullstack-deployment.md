# Full Stack Deployment on Hostinger (VPS/Cloud)

## Prerequisites
- Hostinger VPS or Cloud Hosting plan
- SSH access to your server
- Basic Linux command knowledge

---

## Option 1: Hostinger Cloud Hosting (Easiest)

### Step 1: Set Up Node.js
1. Log into Hostinger hPanel
2. Go to **Advanced** → **Node.js**
3. Enable Node.js (version 18 or higher)
4. Note your application path

### Step 2: Upload Your Code
```bash
# Via Git (recommended)
cd /home/your-username/domains/yourdomain.com
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Or upload via FTP/File Manager
```

### Step 3: Install Dependencies
```bash
# Install all dependencies
npm run install-all

# Or separately
npm install
cd client && npm install
cd ../server && npm install
```

### Step 4: Build Frontend
```bash
cd client
npm run build
# This creates client/dist folder
```

### Step 5: Configure Environment Variables

**Client `.env`:**
```env
VITE_API_URL=https://yourdomain.com/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

**Server `.env`:**
```env
NODE_ENV=production
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_key
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
# Add all your other env variables
```

### Step 6: Set Up Node.js Application in hPanel
1. Go to **Node.js** section in hPanel
2. Click **Create Application**
3. Set:
   - **Application root**: `/domains/yourdomain.com/your-repo/server`
   - **Application URL**: `yourdomain.com`
   - **Application startup file**: `dist/server.js`
   - **Node.js version**: 18.x or higher
4. Click **Create**

### Step 7: Build Backend
```bash
cd server
npm run build
```

### Step 8: Configure Web Server (Nginx)

Hostinger will auto-configure, but verify:

**For serving frontend + proxying backend:**

Create/edit nginx config (usually auto-managed by hPanel):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Serve frontend static files
    location / {
        root /home/username/domains/yourdomain.com/your-repo/client/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Proxy API requests to Node.js backend
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 9: Start Application
In hPanel Node.js section:
- Click **Start** on your application
- Monitor logs for any errors

### Step 10: Enable SSL
1. Go to **SSL** in hPanel
2. Click **Install SSL** for your domain
3. Hostinger provides free Let's Encrypt SSL

---

## Option 2: Hostinger VPS (More Control)

### Step 1: Connect via SSH
```bash
ssh root@your-vps-ip
```

### Step 2: Update System
```bash
apt update && apt upgrade -y
```

### Step 3: Install Node.js
```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Verify installation
node -v
npm -v
```

### Step 4: Install Nginx
```bash
apt install -y nginx
systemctl start nginx
systemctl enable nginx
```

### Step 5: Install PM2 (Process Manager)
```bash
npm install -g pm2
```

### Step 6: Clone Your Repository
```bash
cd /var/www
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### Step 7: Install Dependencies
```bash
npm run install-all
```

### Step 8: Configure Environment Variables
```bash
# Create client .env
nano client/.env
# Paste your client env variables

# Create server .env
nano server/.env
# Paste your server env variables
```

### Step 9: Build Application
```bash
# Build frontend
cd client
npm run build

# Build backend
cd ../server
npm run build
```

### Step 10: Configure Nginx
```bash
nano /etc/nginx/sites-available/yourdomain.com
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Frontend
    location / {
        root /var/www/your-repo/client/dist;
        try_files $uri $uri/ /index.html;
        
        # Enable gzip compression
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    }
    
    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### Step 11: Start Backend with PM2
```bash
cd /var/www/your-repo/server
pm2 start dist/server.js --name mre-backend

# Make PM2 start on boot
pm2 startup
pm2 save
```

### Step 12: Install SSL Certificate
```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
```

### Step 13: Configure Firewall
```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

---

## Deployment Scripts

### Auto-Deploy Script
Create `deploy.sh` in your repo root:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Pull latest code
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install
cd client && npm install
cd ../server && npm install
cd ..

# Build frontend
echo "🏗️  Building frontend..."
cd client
npm run build
cd ..

# Build backend
echo "🏗️  Building backend..."
cd server
npm run build
cd ..

# Restart backend
echo "🔄 Restarting backend..."
pm2 restart mre-backend

echo "✅ Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run deployment:
```bash
./deploy.sh
```

---

## Monitoring & Maintenance

### Check Backend Logs
```bash
pm2 logs mre-backend
```

### Check Backend Status
```bash
pm2 status
```

### Restart Backend
```bash
pm2 restart mre-backend
```

### Check Nginx Logs
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Monitor Server Resources
```bash
htop
# or
pm2 monit
```

---

## Updating Your Application

### Quick Update Process
```bash
cd /var/www/your-repo
git pull
npm run install-all
cd client && npm run build
cd ../server && npm run build
pm2 restart mre-backend
```

### Or use the deploy script:
```bash
./deploy.sh
```

---

## Troubleshooting

### Backend Not Starting
```bash
# Check logs
pm2 logs mre-backend

# Check if port 5000 is in use
lsof -i :5000

# Restart
pm2 restart mre-backend
```

### Frontend Not Loading
```bash
# Check Nginx config
nginx -t

# Check Nginx logs
tail -f /var/log/nginx/error.log

# Verify files exist
ls -la /var/www/your-repo/client/dist
```

### API Calls Failing
1. Check CORS settings in backend
2. Verify `VITE_API_URL` in client `.env`
3. Check Nginx proxy configuration
4. Verify backend is running: `pm2 status`

### SSL Issues
```bash
# Renew certificate manually
certbot renew

# Check certificate status
certbot certificates
```

---

## Cost Comparison

| Setup | Monthly Cost | Complexity | Performance |
|-------|--------------|------------|-------------|
| Hostinger Shared + Railway | $2-4 | ⭐ Easy | ⭐⭐⭐⭐ |
| Hostinger Cloud (Full Stack) | $9-15 | ⭐⭐ Medium | ⭐⭐⭐⭐ |
| Hostinger VPS (Full Stack) | $4-12 | ⭐⭐⭐ Hard | ⭐⭐⭐⭐⭐ |

---

## Recommended Setup

**For Your Project:**

I recommend **Hostinger Shared + Railway** because:

1. **Cheaper**: $2-4/month vs $9-15/month
2. **Easier**: No server management
3. **Better for Node.js**: Railway is optimized for it
4. **Auto-scaling**: Railway handles traffic spikes
5. **Better DevOps**: Auto-deploy from GitHub
6. **Free SSL**: Both platforms provide it
7. **Better monitoring**: Railway has built-in logs/metrics

**Only use Hostinger VPS/Cloud if:**
- You need everything in one place
- You have Linux/DevOps experience
- You want full control
- You need custom server configurations

---

## Quick Start: Recommended Setup

### 1. Frontend on Hostinger (5 minutes)
```bash
cd client
npm run build
# Upload dist/* to Hostinger via File Manager
```

### 2. Backend on Railway (5 minutes)
1. Go to railway.app
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub"
4. Select your repo
5. Add environment variables
6. Done! Get your URL

### 3. Update API URL (2 minutes)
```bash
# Update client/.env
VITE_API_URL=https://your-app.railway.app/api

# Rebuild
cd client
npm run build

# Re-upload to Hostinger
```

**Total time: 12 minutes**
**Total cost: $2-4/month**

---

## Summary

**Can you host both on Hostinger?** 
✅ Yes, with VPS or Cloud hosting

**Should you?**
❌ Not recommended for your use case

**Better approach:**
- Frontend: Hostinger (static files)
- Backend: Railway (Node.js specialist)
- Database: Supabase (already set up)

This gives you the best performance, easiest management, and lowest cost.
