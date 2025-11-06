# Railway Quick Fix - Environment Variables Missing ⚡

## The Issue:
Your app is deployed but crashing because environment variables aren't set in Railway.

---

## Quick Fix (5 minutes):

### 1. Open Railway Dashboard
Go to: https://railway.app → Your Project → **Variables** tab

### 2. Add These Critical Variables First:

**SUPABASE_URL**
- Go to https://supabase.com/dashboard
- Select your project → Settings → API
- Copy "Project URL"
- Paste in Railway

**SUPABASE_SERVICE_KEY**
- Same page in Supabase
- Copy "service_role" key (the secret one, NOT anon)
- Paste in Railway

**NODE_ENV**
- Value: `production`

**CLIENT_URL**
- Value: `https://WajidAliShah2004.github.io/MRECAI`

### 3. Add Email Variables (if you use contact forms):

**EMAIL_HOST**: `smtp.gmail.com`
**EMAIL_PORT**: `587`
**EMAIL_USER**: `your_email@gmail.com`
**EMAIL_PASS**: Get from https://myaccount.google.com/apppasswords
**EMAIL_FROM**: `noreply@mrecai.com`

### 4. Add JWT Secret:

Generate one:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**JWT_SECRET**: Paste the generated value
**JWT_EXPIRE**: `7d`

### 5. Add OpenAI (if you use AI chat):

**OPENAI_API_KEY**: `sk-your_key_here`
**OPENAI_MODEL**: `gpt-3.5-turbo`
**OPENAI_MAX_TOKENS**: `500`
**OPENAI_TEMPERATURE**: `0.7`
**OPENAI_TIMEOUT_MS**: `10000`

---

## After Adding Variables:

1. Railway will **automatically redeploy** (wait 1-2 minutes)
2. Check the **Logs** tab
3. Look for: `✅ Supabase Connected Successfully`
4. Test: `https://your-app.up.railway.app/health`

---

## ⚠️ Important Notes:

- **Don't add PORT** - Railway sets it automatically
- **Use service_role key** - Not the anon key from Supabase
- **Variable names are case-sensitive** - Must match exactly
- **No quotes needed** - Just paste the values directly

---

## Still Not Working?

Check Railway logs for specific errors:
- Dashboard → Your Project → **Deployments** → Click latest → **View Logs**

Common issues:
- Wrong Supabase key (using anon instead of service_role)
- Typo in variable names
- Missing required variables

---

## Test Checklist:

✅ All variables added in Railway
✅ App redeployed automatically
✅ Logs show "Supabase Connected Successfully"
✅ Health endpoint returns 200 OK
✅ No errors in Railway logs

Once all green, your backend is live! 🚀
