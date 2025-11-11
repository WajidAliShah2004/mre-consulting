# SMTP2GO API Setup (Railway Compatible)

Railway blocks SMTP ports, so we're using SMTP2GO's HTTP API instead.

## Get Your API Key

1. Go to https://www.smtp2go.com/
2. Log in to your account
3. Click **Settings** → **API Keys**
4. Click **Add API Key**
5. Give it a name: "Railway Production"
6. **Copy the API key immediately** (you won't see it again)

## Add to Railway

Go to Railway → Your Backend Project → Variables → Add:

```
SMTP2GO_API_KEY=your-api-key-here
```

Keep the existing variables too:
```
SMTP2GO_FROM=MRE Consulting <ai@mrecai.com>
ADMIN_EMAIL=matthew@mrecai.com
```

You can remove these (no longer needed):
- SMTP2GO_HOST
- SMTP2GO_PORT  
- SMTP2GO_USER
- SMTP2GO_PASS

## How It Works

- ✅ Uses HTTPS API (port 443) - not blocked by Railway
- ✅ More reliable than SMTP
- ✅ Faster delivery
- ✅ Better error reporting
- ✅ Same free tier (1,000 emails/month)

## After Adding API Key

1. Save the variable in Railway
2. Railway will auto-redeploy (2-3 minutes)
3. Test the contact form
4. Check logs for `✅ Email sent successfully via SMTP2GO API`

## Testing

Submit a test contact form and check Railway logs for:
```
📧 Attempting to send email via SMTP2GO API to: matthew@mrecai.com
✅ Email sent successfully via SMTP2GO API to matthew@mrecai.com
```

Emails will now work reliably on Railway!
