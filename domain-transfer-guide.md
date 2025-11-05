# Domain Transfer Guide: IONOS to Hostinger

## Overview
Transferring a domain typically takes 5-7 days. Your website will stay online during the transfer.

---

## Step 1: Prepare Your Domain at IONOS (Current Registrar)

### 1.1 Disable Domain Transfer Lock
✅ **You're already here!** (I can see the IONOS page)

1. In IONOS, go to **Domains & SSL**
2. Click on your domain
3. Find **Domain transfer lock** section
4. Click **Disable Private Registration** (if enabled)
5. Click to **Disable transfer lock**
6. Confirm the action

**Important**: Wait 5-10 minutes after disabling the lock.

### 1.2 Get Authorization Code (EPP Code)
1. On the same IONOS domain page
2. Look for **"Change provider"** or **"Show authorization Code"**
3. Click to reveal the authorization code
4. Copy this code (usually 10-16 characters)
5. Save it somewhere safe - you'll need it for Hostinger

**Example format**: `AbCd1234EfGh5678`

### 1.3 Verify Domain Contact Email
1. Check that your domain's admin email is accessible
2. You'll receive transfer approval emails here
3. Update if needed in IONOS domain settings

### 1.4 Check Domain Age
- Domain must be at least **60 days old** to transfer
- Cannot be transferred within 60 days of registration or previous transfer

---

## Step 2: Initiate Transfer at Hostinger (New Registrar)

### 2.1 Start Transfer Process
1. Log into your **Hostinger account**
2. Go to **Domains** section
3. Click **Transfer Domain**
4. Enter your domain name (e.g., `yourdomain.com`)
5. Click **Check availability**

### 2.2 Enter Authorization Code
1. Hostinger will ask for the **EPP/Authorization code**
2. Paste the code you got from IONOS
3. Click **Continue**

### 2.3 Complete Payment
1. Review transfer price (usually $9-15/year)
2. **Note**: Transfer includes 1 year extension of your domain
3. Complete payment
4. Hostinger will start the transfer process

---

## Step 3: Approve Transfer

### 3.1 Check Your Email
Within a few hours, you'll receive emails from:
- **IONOS**: Asking to confirm transfer away
- **Hostinger**: Confirming transfer initiation

### 3.2 Approve at IONOS
**Option A: Approve Immediately (Recommended)**
1. Open the email from IONOS
2. Click the approval link
3. Confirm you want to transfer
4. Transfer completes in 1-2 hours

**Option B: Wait (Slower)**
- If you don't respond, transfer auto-approves after 5 days
- Not recommended - just approve it immediately

### 3.3 Confirm at Hostinger
1. Check email from Hostinger
2. Click confirmation link if required
3. Monitor transfer status in Hostinger dashboard

---

## Step 4: Update DNS Settings (After Transfer)

Once transfer is complete:

### 4.1 Point Domain to Hostinger Hosting
1. In Hostinger hPanel, go to **Domains**
2. Click your transferred domain
3. Go to **DNS / Name Servers**
4. Hostinger will auto-configure if you have hosting with them

### 4.2 Manual DNS Configuration (if needed)
If you need custom DNS:
```
Type: A Record
Name: @
Points to: [Your Hostinger server IP]

Type: A Record  
Name: www
Points to: [Your Hostinger server IP]
```

Get your server IP from: hPanel → Hosting → Details

### 4.3 Wait for Propagation
- DNS changes take 24-48 hours to propagate globally
- Your site might be intermittently accessible during this time
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation

---

## Timeline

| Step | Time |
|------|------|
| Disable transfer lock | Immediate |
| Get auth code | Immediate |
| Initiate transfer at Hostinger | 5-10 minutes |
| Receive approval emails | 1-4 hours |
| Approve transfer | Immediate |
| Transfer completes | 1 hour - 5 days |
| DNS propagation | 24-48 hours |
| **Total** | **1-7 days** |

---

## Important Notes

### ✅ DO:
- Disable transfer lock first
- Keep your domain contact email accessible
- Approve transfer emails immediately
- Keep website files backed up
- Note down current DNS settings (just in case)

### ❌ DON'T:
- Don't let domain expire during transfer
- Don't change domain contact info during transfer
- Don't panic if site is briefly unreachable (DNS propagation)
- Don't cancel hosting at IONOS until transfer is complete

---

## Troubleshooting

### Issue: "Domain is locked"
**Solution**: Go back to IONOS and disable transfer lock, wait 10 minutes

### Issue: "Invalid authorization code"
**Solution**: 
- Get a fresh code from IONOS
- Make sure you copied it correctly (no extra spaces)
- Code might be case-sensitive

### Issue: "Domain not eligible for transfer"
**Solution**: 
- Check domain is at least 60 days old
- Verify domain hasn't been transferred in last 60 days
- Ensure domain isn't expired

### Issue: "Transfer pending for days"
**Solution**: 
- Check your email for approval requests
- Log into IONOS and manually approve
- Contact Hostinger support (24/7 chat)

---

## During Transfer: Keep Website Running

Your website will stay online during transfer, but to be safe:

### Option 1: Point to Hostinger Before Transfer
1. Upload your website to Hostinger hosting
2. Update DNS at IONOS to point to Hostinger servers
3. Wait 24 hours for DNS to propagate
4. Then start domain transfer
5. Zero downtime!

### Option 2: Quick Switch After Transfer
1. Have website ready on Hostinger
2. Complete domain transfer
3. Update DNS immediately
4. Minimal downtime (few hours max)

---

## After Transfer Checklist

- [ ] Domain shows in Hostinger dashboard
- [ ] DNS points to Hostinger servers
- [ ] Website loads correctly
- [ ] SSL certificate is active
- [ ] Email forwarding works (if applicable)
- [ ] All subdomains work
- [ ] Contact forms work
- [ ] No IONOS charges on next billing cycle

---

## Cost Breakdown

**IONOS**: 
- No transfer-out fee
- You keep remaining time on current registration

**Hostinger**:
- Transfer fee: ~$9-15 (includes +1 year)
- Example: If domain expires in 6 months, after transfer it expires in 18 months

---

## Quick Reference: What You Need

From IONOS:
1. ✅ Authorization/EPP code
2. ✅ Transfer lock disabled
3. ✅ Access to domain admin email

For Hostinger:
1. ✅ Hostinger account
2. ✅ Payment method
3. ✅ ~$10-15 for transfer

---

## Support Contacts

**IONOS Support**:
- Phone: Check your IONOS dashboard
- Email: Through IONOS control panel
- Chat: Available in dashboard

**Hostinger Support**:
- 24/7 Live Chat: In hPanel (bottom right)
- Email: support@hostinger.com
- Knowledge Base: support.hostinger.com

---

## Pro Tips

1. **Transfer during low-traffic hours** (e.g., weekend night)
2. **Screenshot your current DNS settings** before transfer
3. **Approve transfer immediately** when you get the email
4. **Upload website to Hostinger first** to avoid downtime
5. **Keep IONOS account active** until transfer fully completes
6. **Test website on Hostinger IP** before updating DNS

---

## Alternative: Point Domain Without Transfer

If you want to use Hostinger hosting but keep domain at IONOS:

1. Keep domain registered at IONOS
2. Get Hostinger hosting
3. Update nameservers at IONOS to:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
4. Configure DNS in Hostinger hPanel

**Pros**: Faster (no 5-day wait), simpler
**Cons**: Manage domain and hosting separately

---

## Next Steps After Transfer

1. Deploy your website (see `deploy-hostinger.md`)
2. Set up email forwarding in Hostinger
3. Configure SSL certificate (free with Hostinger)
4. Set up Google Search Console with new hosting
5. Update any hardcoded URLs in your code
6. Cancel IONOS hosting (keep domain until transfer done)

---

## Summary

**Fastest Path**:
1. Disable lock at IONOS → Get auth code (5 min)
2. Start transfer at Hostinger with auth code (5 min)
3. Approve email from IONOS immediately (1 min)
4. Transfer completes (1-2 hours)
5. Update DNS to Hostinger (5 min)
6. Wait for propagation (24 hours)

**Total active time**: ~15 minutes
**Total wait time**: 1-2 days

Good luck! The process is straightforward - just follow the steps in order.
