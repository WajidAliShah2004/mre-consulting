# 🤖 Fix Chatbot on Vercel

## Current Status

Your chatbot has two modes:
1. **OpenAI Mode** - Uses GPT for intelligent responses (requires API key)
2. **Knowledge Base Mode** - Uses built-in responses (always works)

## Why It Might Not Be Working

### Check 1: OpenAI API Key in Railway

In **Railway Dashboard** → Your Backend → **Variables**:

Check if you have:
```
OPENAI_API_KEY=sk-...your_key_here
```

**If missing or empty:**
- The chatbot will still work using the knowledge base
- But it won't have AI-powered responses

**To add OpenAI API key:**
1. Get your key from: https://platform.openai.com/api-keys
2. Add to Railway Variables: `OPENAI_API_KEY=sk-...`
3. Railway will auto-redeploy

### Check 2: CORS Configuration

Make sure in **Railway Variables** you have:
```
CLIENT_URL=https://mre-consulting.vercel.app
```

### Check 3: API URL in Vercel

In **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**:

Verify:
```
VITE_API_URL=https://mre-consulting-production.up.railway.app/api
```

## Test the Chatbot

### Test 1: Check Backend API

Visit this URL in your browser:
```
https://mre-consulting-production.up.railway.app/health
```

Should return: `{"status":"OK","message":"Server is running"}`

### Test 2: Check Chatbot Endpoint

Open browser console (F12) on your Vercel site, then run:
```javascript
fetch('https://mre-consulting-production.up.railway.app/api/ai-chat/message', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'hello' })
})
.then(r => r.json())
.then(console.log)
```

Should return a response with a message.

### Test 3: Check Browser Console

1. Open your Vercel site: https://mre-consulting.vercel.app
2. Open browser console (F12)
3. Click the chatbot icon
4. Send a message
5. Look for any errors in console

## Common Issues & Fixes

### Issue 1: CORS Error
**Error:** "Access to fetch... has been blocked by CORS policy"

**Fix:**
- Update `CLIENT_URL` in Railway to: `https://mre-consulting.vercel.app`
- Wait for Railway to redeploy (1-2 minutes)

### Issue 2: 404 Not Found
**Error:** "404 Not Found" when sending messages

**Fix:**
- Check `VITE_API_URL` in Vercel environment variables
- Should be: `https://mre-consulting-production.up.railway.app/api`
- Redeploy Vercel after updating

### Issue 3: Chatbot Not Responding
**Symptoms:** Loading forever, no response

**Possible Causes:**
1. OpenAI API key invalid or expired
2. OpenAI API rate limit reached
3. Network timeout

**Fix:**
- Check Railway logs for errors
- Chatbot will automatically fall back to knowledge base
- If OpenAI key is the issue, it will still work with built-in responses

### Issue 4: "Failed to process message"
**Error:** Generic error message

**Fix:**
- Check Railway logs for specific error
- Verify all environment variables are set
- Check if backend is running: `/health` endpoint

## Chatbot Features

Even without OpenAI, your chatbot has extensive knowledge about:
- ✓ All your services (insurance, consulting, marketing, etc.)
- ✓ Contact information
- ✓ Booking consultations
- ✓ Getting quotes
- ✓ Company information
- ✓ Pricing and payment options
- ✓ And much more!

## OpenAI Configuration (Optional)

If you want AI-powered responses, add these to **Railway Variables**:

```
OPENAI_API_KEY=sk-...your_key_here
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_MAX_TOKENS=500
OPENAI_TEMPERATURE=0.7
OPENAI_TIMEOUT_MS=10000
```

**Get OpenAI API Key:**
1. Go to: https://platform.openai.com/api-keys
2. Sign up or log in
3. Create new API key
4. Copy and add to Railway

**Cost:** GPT-3.5-turbo is very cheap (~$0.002 per 1K tokens)

## Verify It's Working

1. Visit: https://mre-consulting.vercel.app
2. Click the chatbot icon (bottom left)
3. Type: "hello"
4. You should get a response within 1-2 seconds

If you get a response, it's working! 🎉

## Still Not Working?

Share the following info:
1. What error message do you see?
2. What's in the browser console (F12)?
3. What's in Railway logs?

I'll help you debug!
