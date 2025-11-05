# Fix Railway Environment Variables Error

## The Problem:
```
SUPABASE_URL: undefined
SUPABASE_SERVICE_KEY: missing
Error: Missing Supabase environment variables
```

This means the environment variables are NOT set in Railway.

---

## Solution: Add Environment Variables in Railway

### Step 1: Go to Railway Dashboard
1. Open https://railway.app
2. Click on your deployed project
3. Click on the **Variables** tab (left sidebar)

### Step 2: Add ALL These Variables

Click **"New Variable"** and add each one:

```
NODE_ENV
production

SUPABASE_URL
https://your-project.supabase.co

SUPABASE_SERVICE_KEY
your_supabase_service_role_key_here

JWT_SECRET
your_strong_random_secret_at_least_32_characters_long

JWT_EXPIRE
7d

EMAIL_HOST
smtp.gmail.com

EMAIL_PORT
587

EMAIL_USER
your_email@gmail.com

EMAIL_PASS
your_gmail_app_password

EMAIL_FROM
noreply@mrecai.com

OPENAI_API_KEY
sk-your_openai_api_key_here

OPENAI_MODEL
gpt-3.5-turbo

OPENAI_MAX_TOKENS
500

OPENAI_TEMPERATURE
0.7

OPENAI_TIMEOUT_MS
10000

CLIENT_URL
https://WajidAliShah2004.github.io/MRECAI
```

### Step 3: Get Your Supabase Credentials

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → Use for SUPABASE_URL
   - **service_role key** (secret) → Use for SUPABASE_SERVICE_KEY

⚠️ **Important:** Use the **service_role** key, NOT the anon key!

### Step 4: Generate JWT Secret

Run this in your terminal to generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and use it as JWT_SECRET.

### Step 5: Get Gmail App Password

1. Go to https://myaccount.google.com/apppasswords
2. Create a new app password
3. Copy it and use as EMAIL_PASS

### Step 6: Save and Redeploy

After adding all variables:
1. Railway will automatically redeploy
2. Wait for the deployment to complete
3. Check the logs - errors should be gone!

---

## How to Check if Variables are Set:

In Railway dashboard:
1. Go to **Variables** tab
2. You should see all variables listed
3. Click the eye icon to reveal values

---

## Common Mistakes:

❌ **Don't add PORT** - Railway sets this automatically
❌ **Don't use anon key** - Use service_role key for SUPABASE_SERVICE_KEY
❌ **Don't use regular Gmail password** - Use App Password
❌ **Don't forget quotes** - Railway handles this, just paste the values

---

## After Adding Variables:

Railway will automatically:
1. Restart your app
2. Inject the variables into process.env
3. Your app should start successfully

Check the logs for:
```
✅ Supabase Connected Successfully
🚀 Server running on port XXXX in production mode
```

---

## Still Getting Errors?

1. **Double-check variable names** - They must match exactly (case-sensitive)
2. **Check for typos** - Especially in SUPABASE_URL
3. **Verify Supabase key** - Make sure it's the service_role key
4. **Check Railway logs** - Look for specific error messages

---

## Test Your Deployment:

Once variables are set and app is running:
```
https://your-app.up.railway.app/health
```

Should return:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```
