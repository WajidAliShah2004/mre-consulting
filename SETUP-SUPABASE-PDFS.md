# Setup Supabase PDFs - Step by Step Guide

## Current Issue
PDFs are trying to download from placeholder URLs in the database that don't exist.

## Solution: Upload PDFs to Supabase Storage

### Step 1: Generate the PDF Files First

We need to create the actual PDF files to upload. Run this script:

1. Open your browser console (F12)
2. Visit http://localhost:5173/resources
3. Click each "Download PDF" button to generate and download all 3 PDFs
4. Save them to a folder on your computer

OR use the Node.js script below to generate them programmatically.

### Step 2: Create Supabase Storage Bucket

1. Go to your Supabase Dashboard: https://bneabkaypiypceokadba.supabase.co
2. Click on **Storage** in the left sidebar
3. Click **New Bucket**
4. Name it: `white-papers`
5. Make it **Public** (check the box)
6. Click **Create Bucket**

### Step 3: Set Storage Policies

In Supabase Dashboard → Storage → white-papers bucket → Policies:

Click "New Policy" and add these:

**Policy 1: Public Read Access**
```sql
CREATE POLICY "Public can download PDFs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');
```

**Policy 2: Authenticated Upload (for you to upload)**
```sql
CREATE POLICY "Authenticated can upload PDFs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'white-papers');
```

### Step 4: Upload PDFs to Storage

1. In Supabase Dashboard → Storage → white-papers bucket
2. Click **Upload File**
3. Upload these 3 files:
   - `AI-Automation-Frontier-MRECAI.pdf`
   - `Digital-Marketing-Reputation-MRECAI.pdf`
   - `Future-of-Business-MRECAI.pdf`

### Step 5: Update Database with Correct URLs

Go to Supabase Dashboard → SQL Editor and run:

```sql
-- Update with your actual Supabase project URL
UPDATE white_papers 
SET pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/AI-Automation-Frontier-MRECAI.pdf'
WHERE slug = 'ai-automation-frontier';

UPDATE white_papers 
SET pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing-Reputation-MRECAI.pdf'
WHERE slug = 'digital-marketing-reputation';

UPDATE white_papers 
SET pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Future-of-Business-MRECAI.pdf'
WHERE slug = 'future-of-business';
```

### Step 6: Verify the Setup

Test each URL in your browser:
- https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/AI-Automation-Frontier-MRECAI.pdf
- https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing-Reputation-MRECAI.pdf
- https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Future-of-Business-MRECAI.pdf

If they download, you're all set!

## Quick Check: Is the Database Table Created?

Run this in Supabase SQL Editor to check:

```sql
SELECT * FROM white_papers;
```

If you get an error, run the migration file first: `supabase-whitepapers-migration.sql`
