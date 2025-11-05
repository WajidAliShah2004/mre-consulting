# Quick Start - Fix PDF Downloads (5 Minutes)

## You're Here Because...
PDFs are uploaded to Supabase but downloads are failing.

## The Fix (3 Steps)

### Step 1: Run This SQL (1 minute)
Go to Supabase Dashboard → SQL Editor and paste:

```sql
UPDATE white_papers 
SET pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20New%20Frontier%20of%20Efficiency%20How%20A%20%26%20Automation%20Are%20Transforming%20Every%20Industry.pdf',
    pdf_filename = 'The New Frontier of Efficiency How A & Automation Are Transforming Every Industry.pdf'
WHERE slug = 'ai-automation-frontier';

UPDATE white_papers 
SET pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing%2C%20Reviews%20%26%20Social%20Presence%20Building%20the%20Modern%20Reputation%20Engine.pdf',
    pdf_filename = 'Digital-Marketing, Reviews & Social Presence Building the Modern Reputation Engine.pdf'
WHERE slug = 'digital-marketing-reputation';

UPDATE white_papers 
SET pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20Future%20of%20Business%20How%20AI%20and%20Automation%20Are%20Transforming%20Operations.pdf',
    pdf_filename = 'The Future of Business How AI and Automation Are Transforming Operations.pdf'
WHERE slug = 'future-of-business';
```

Click **Run**. Should say "Success. 3 rows affected."

### Step 2: Make Storage Public (30 seconds)
Supabase Dashboard → Storage → white-papers → Policies → New Policy

```sql
CREATE POLICY "Public can download PDFs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');
```

### Step 3: Test (30 seconds)
Click this URL in your browser:
```
https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20New%20Frontier%20of%20Efficiency%20How%20A%20%26%20Automation%20Are%20Transforming%20Every%20Industry.pdf
```

**If it downloads:** ✅ You're done!
**If it doesn't:** See troubleshooting below.

## Test on Website
```bash
cd client
npm run dev
```

Visit http://localhost:5173/resources and click "Download PDF"

## Troubleshooting

**Error: "table white_papers does not exist"**
→ Run `supabase-whitepapers-migration.sql` first

**Error: 403 Forbidden**
→ Storage bucket not public (do Step 2 again)

**Error: 404 Not Found**
→ File name doesn't match (check exact names in Storage)

## Done!
PDFs now download from PostgreSQL/Supabase only. No fallback, no client-side generation.
