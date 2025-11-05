# Clear GitHub Credentials - Step by Step

## The Issue
Git is still using cached credentials for "murtazajii" account.

## Solution: Clear Windows Credentials Manually

### Step 1: Open Windows Credential Manager

1. Press **Windows Key** on your keyboard
2. Type: **Credential Manager**
3. Click on **"Credential Manager"** app
4. Click on **"Windows Credentials"** tab

### Step 2: Find and Remove GitHub Credentials

Look for entries that contain:
- `git:https://github.com`
- `github.com`
- Any entry with "murtazajii"

For each entry:
1. Click the **arrow** to expand it
2. Click **"Remove"**
3. Confirm the removal

### Step 3: Try Pushing Again

Open your terminal and run:
```bash
git push -u origin main
```

It will prompt you for:
- **Username:** WajidAliShah2004
- **Password:** [Use Personal Access Token - see below]

---

## Alternative: Use Personal Access Token in URL

### Step 1: Generate Token (if you don't have one)

1. Go to **https://github.com** (login as WajidAliShah2004)
2. Click your profile picture → **Settings**
3. Scroll down → **Developer settings**
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **"Generate new token (classic)"**
6. Name: "MRE Consulting"
7. Check: **repo** (full control)
8. Click **"Generate token"**
9. **COPY THE TOKEN** immediately!

### Step 2: Push with Token

```bash
# Remove old remote
git remote remove origin

# Add remote with token
git remote add origin https://WajidAliShah2004:YOUR_TOKEN_HERE@github.com/WajidAliShah2004/mre-consulting.git

# Push
git push -u origin main
```

Replace `YOUR_TOKEN_HERE` with your actual token.

---

## Easiest Solution: Use GitHub Desktop

If the above doesn't work:

1. **Download GitHub Desktop:** https://desktop.github.com/
2. **Install and open it**
3. **Sign in** with WajidAliShah2004 account
4. Click **File** → **Add Local Repository**
5. Browse to your project folder
6. Click **"Publish repository"** or **"Push origin"**

---

## Quick Test

After clearing credentials, test with:
```bash
# This should prompt for username/password
git ls-remote https://github.com/WajidAliShah2004/mre-consulting.git
```

---

## Important Notes

1. **Never use your GitHub password** - Always use Personal Access Token
2. **Token is like a password** - Keep it secret
3. **Token expires** - You may need to regenerate it later
4. **Save your token** - You won't see it again after generation

---

## After Successful Push

Once pushed, you can:
1. Go to **https://railway.app**
2. Sign in with GitHub (as WajidAliShah2004)
3. Connect your repository
4. Deploy your backend!
