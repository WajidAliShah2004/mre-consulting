# Logout and Login to GitHub

## Step 1: Clear Git Credentials

### Option A: Using Git Credential Manager (Recommended)

```bash
# Remove stored credentials
git credential-manager-core erase

# Or try this:
git credential reject
```

Then type:
```
protocol=https
host=github.com
```
Press Enter twice.

### Option B: Using Windows Credential Manager

1. Press **Windows Key + R**
2. Type: `control /name Microsoft.CredentialManager`
3. Press Enter
4. Click **"Windows Credentials"**
5. Find entries with **"git:https://github.com"** or **"github.com"**
6. Click each one and select **"Remove"**

### Option C: Using Command Line

```bash
# Clear all GitHub credentials
cmdkey /list | findstr github
# Note the credential names, then delete them:
cmdkey /delete:git:https://github.com
cmdkey /delete:LegacyGeneric:target=git:https://github.com
```

## Step 2: Configure Git with New User

```bash
# Set your name (WajidAliShah2004's name)
git config --global user.name "WajidAliShah2004"

# Set your email (WajidAliShah2004's GitHub email)
git config --global user.email "wajid@example.com"

# Verify the configuration
git config --global user.name
git config --global user.email
```

## Step 3: Test Push Again

```bash
# Try pushing again
git push -u origin main
```

When prompted:
- **Username:** WajidAliShah2004
- **Password:** Use a Personal Access Token (not your password)

## Step 4: Generate Personal Access Token (If Needed)

1. **Login to GitHub** as WajidAliShah2004
2. Go to **Settings** → **Developer settings**
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **"Generate new token"** → **"Generate new token (classic)"**
5. Give it a name: "MRE Consulting Deployment"
6. Select scopes:
   - ✅ **repo** (full control of private repositories)
7. Click **"Generate token"**
8. **COPY THE TOKEN** (you won't see it again!)

## Step 5: Push Using Token

```bash
# Method 1: Push with token in URL (one-time)
git push https://WajidAliShah2004:YOUR_TOKEN@github.com/WajidAliShah2004/mre-consulting.git main

# Method 2: Let Git prompt you
git push -u origin main
# Username: WajidAliShah2004
# Password: [paste your token]
```

## Alternative: Use GitHub Desktop

If command line is giving issues:

1. **Download GitHub Desktop:** https://desktop.github.com
2. **Login** with WajidAliShah2004 account
3. **Add existing repository** (select your project folder)
4. **Publish repository** or **Push origin**

## Quick Commands Summary

```bash
# 1. Clear credentials (Windows)
cmdkey /delete:git:https://github.com

# 2. Configure Git
git config --global user.name "WajidAliShah2004"
git config --global user.email "your_email@example.com"

# 3. Remove old remote
git remote remove origin

# 4. Add correct remote
git remote add origin https://github.com/WajidAliShah2004/mre-consulting.git

# 5. Push
git push -u origin main
```

## Verify Current User

```bash
# Check who you're configured as
git config user.name
git config user.email

# Check remote URL
git remote -v
```

## Troubleshooting

### Still getting permission denied?

1. **Make sure the repository exists:**
   - Go to https://github.com/WajidAliShah2004/mre-consulting
   - If it doesn't exist, create it first

2. **Use HTTPS with token:**
   ```bash
   git remote set-url origin https://WajidAliShah2004:YOUR_TOKEN@github.com/WajidAliShah2004/mre-consulting.git
   git push -u origin main
   ```

3. **Or use SSH instead:**
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # Add to GitHub: Settings → SSH and GPG keys → New SSH key
   # Copy from: C:\Users\MURTAZAY\.ssh\id_ed25519.pub
   
   # Change remote to SSH
   git remote set-url origin git@github.com:WajidAliShah2004/mre-consulting.git
   git push -u origin main
   ```
