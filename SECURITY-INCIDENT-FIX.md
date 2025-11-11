# 🚨 Security Incident - SMTP Password Exposed

GitGuardian detected SMTP password in git history.

## IMMEDIATE ACTIONS REQUIRED

### 1. Change SMTP2GO Password NOW
1. Go to SMTP2GO dashboard: https://www.smtp2go.com/
2. Click **Settings** → **Users**
3. Find user: **mrecai.com**
4. Click **Edit** or **Reset Password**
5. Generate a NEW password
6. **Copy the new password immediately**

### 2. Update Railway Environment Variables
1. Go to Railway → Your Backend Project
2. Click **Variables** tab
3. Update `SMTP2GO_PASS` with the NEW password
4. Click **Save**
5. Railway will auto-redeploy

### 3. Remove Sensitive File from Git History

Run these commands to remove the file from git history:

```bash
# Remove the file from git tracking
git rm --cached RAILWAY-SMTP2GO-ENV.txt

# Commit the removal
git commit -m "Remove sensitive credentials file"

# Push the changes
git push origin main
```

**Note:** The file will still exist in git history. To completely remove it, you would need to rewrite git history (not recommended for shared repos).

### 4. Verify Security

After changing the password:
- ✅ Old password is now invalid
- ✅ New password only in Railway (not in code)
- ✅ File added to .gitignore
- ✅ Future commits won't include credentials

## Prevention for Future

### Files That Should NEVER Be Committed:
- ❌ Any file with passwords or API keys
- ❌ `.env` files (already in .gitignore)
- ❌ `*-ENV.txt` files (now in .gitignore)
- ❌ `*-CREDENTIALS.txt` files (now in .gitignore)

### Safe Practices:
- ✅ Always use environment variables
- ✅ Keep credentials only in Railway/Vercel dashboards
- ✅ Use placeholder values in documentation
- ✅ Double-check before `git add .`

## Current Status

- 🔴 **URGENT**: Change SMTP2GO password
- 🟡 **PENDING**: Update Railway with new password
- 🟢 **DONE**: Added file to .gitignore
- 🟢 **DONE**: Removed credentials from current files

## After Fixing

Test the contact form to ensure emails still work with the new password.
