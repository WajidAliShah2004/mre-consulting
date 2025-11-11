# SMTP2GO Email Configuration

The contact form now uses SMTP2GO for reliable email delivery.

## Environment Variables Required

Add these to your Railway environment variables:

```env
# SMTP2GO Configuration
SMTP2GO_HOST=mail.smtp2go.com
SMTP2GO_PORT=2525
SMTP2GO_USER=your-smtp2go-username
SMTP2GO_PASS=your-smtp2go-password
SMTP2GO_FROM=MRE Consulting <ai@mrecai.com>
ADMIN_EMAIL=matthew@mrecai.com
```

## Setup Steps

### 1. Create SMTP2GO Account
1. Go to https://www.smtp2go.com/
2. Sign up for a free account (1,000 emails/month free)
3. Verify your email address

### 2. Get SMTP Credentials
1. Log in to SMTP2GO dashboard
2. Go to **Settings** → **Users**
3. Click **Add SMTP User**
4. Create a username and password
5. Save these credentials

### 3. Verify Sender Domain (Optional but Recommended)
1. Go to **Settings** → **Sender Domains**
2. Add your domain (mrecai.com)
3. Follow DNS verification steps
4. Once verified, you can send from any @mrecai.com address

### 4. Configure Railway
1. Go to your Railway project
2. Navigate to **Variables** tab
3. Add the environment variables listed above
4. Use the SMTP credentials from step 2

## SMTP2GO Ports

SMTP2GO supports multiple ports:
- **2525** (recommended) - Standard SMTP with STARTTLS
- **587** - Alternative SMTP with STARTTLS  
- **8025** - Alternative port
- **465** - SMTP with SSL (not recommended)

## Testing

After deployment, test the contact form:
1. Submit a test message through the contact form
2. Check Railway logs for email confirmation
3. Verify admin receives notification email
4. Verify customer receives confirmation email

## Troubleshooting

### Emails not sending
- Check Railway logs for error messages
- Verify SMTP2GO credentials are correct
- Ensure sender email is verified in SMTP2GO
- Check SMTP2GO dashboard for blocked/failed emails

### Authentication failed
- Double-check SMTP2GO_USER and SMTP2GO_PASS
- Ensure no extra spaces in environment variables
- Try regenerating SMTP user password

### Emails going to spam
- Verify your sender domain in SMTP2GO
- Add SPF and DKIM records to your DNS
- Use a verified sender email address

## Benefits of SMTP2GO

✅ **Reliable Delivery** - Better than Gmail SMTP  
✅ **No Gmail Security Issues** - No "less secure apps" problems  
✅ **Free Tier** - 1,000 emails/month free  
✅ **Detailed Analytics** - Track email delivery  
✅ **Better Deliverability** - Proper email infrastructure  
✅ **Railway Compatible** - Works perfectly on Railway

## Migration from Gmail

The old Gmail SMTP variables are no longer used:
- ~~EMAIL_HOST~~
- ~~EMAIL_PORT~~
- ~~EMAIL_USER~~
- ~~EMAIL_PASS~~
- ~~EMAIL_FROM~~

You can safely remove these from Railway.
