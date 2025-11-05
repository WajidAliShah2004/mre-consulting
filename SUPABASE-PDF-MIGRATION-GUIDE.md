# Supabase PDF Migration Guide

## Current Status

The code is being migrated from **client-side PDF generation** to **Supabase storage**.

## What Needs to Be Done

### 1. Set Up Supabase (One-Time Setup)

#### Step 1: Run SQL Migration
1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Go to **SQL Editor**
4. Copy and paste the contents of `supabase-whitepapers-migration.sql`
5. Click **Run**

This will create:
- `white_papers` table
- Indexes for performance
- Row Level Security policies
- Download count tracking function

#### Step 2: Create Storage Bucket
1. In Supabase Dashboard, go to **Storage**
2. Click **New Bucket**
3. Name: `white-papers`
4. Make it **Public** (so PDFs can be downloaded)
5. Click **Create**

#### Step 3: Set Up Storage Policies
In the Storage section, click on the `white-papers` bucket, then go to **Policies**:

**Policy 1: Public Read**
```sql
CREATE POLICY "Anyone can download white paper PDFs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');
```

**Policy 2: Authenticated Upload**
```sql
CREATE POLICY "Authenticated users can upload white paper PDFs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'white-papers');
```

### 2. Generate and Upload PDFs

You have two options:

#### Option A: Use Existing Client-Side Generator (Recommended)
1. Keep the current `pdfGenerator.ts` file
2. Run a script to generate all 3 PDFs
3. Upload them to Supabase Storage

#### Option B: Upload Pre-Made PDFs
1. Create PDFs manually or use another tool
2. Upload directly to Supabase Storage

### 3. Upload PDFs to Supabase

#### Using Supabase Dashboard:
1. Go to **Storage** → `white-papers` bucket
2. Click **Upload File**
3. Upload these files:
   - `AI-Automation-Frontier-MRECAI.pdf`
   - `Digital-Marketing-Reputation-MRECAI.pdf`
   - `Future-of-Business-MRECAI.pdf`

#### Using Code (Automated):
Create a script to generate and upload:

```typescript
// scripts/uploadWhitePapers.ts
import { createClient } from '@supabase/supabase-js';
import { generatePDFBlob } from '../client/src/utils/pdfGenerator';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // Use service key for admin access
);

const whitePapers = [
  'ai-automation-frontier',
  'digital-marketing-reputation',
  'future-of-business'
];

async function uploadWhitePapers() {
  for (const paperId of whitePapers) {
    // Generate PDF blob
    const blob = await generatePDFBlob(paperId);
    
    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from('white-papers')
      .upload(`${paperId}.pdf`, blob, {
        contentType: 'application/pdf',
        upsert: true
      });
    
    if (error) {
      console.error(`Error uploading ${paperId}:`, error);
    } else {
      console.log(`✅ Uploaded ${paperId}`);
    }
  }
}

uploadWhitePapers();
```

### 4. Update Database Records

After uploading PDFs, update the `white_papers` table with correct URLs:

```sql
-- Get your Supabase project URL first
-- Format: https://xxxxx.supabase.co

UPDATE white_papers
SET pdf_url = 'https://YOUR-PROJECT.supabase.co/storage/v1/object/public/white-papers/AI-Automation-Frontier-MRECAI.pdf'
WHERE slug = 'ai-automation-frontier';

UPDATE white_papers
SET pdf_url = 'https://YOUR-PROJECT.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing-Reputation-MRECAI.pdf'
WHERE slug = 'digital-marketing-reputation';

UPDATE white_papers
SET pdf_url = 'https://YOUR-PROJECT.supabase.co/storage/v1/object/public/white-papers/Future-of-Business-MRECAI.pdf'
WHERE slug = 'future-of-business';
```

## Testing

### 1. Test Supabase Connection
```typescript
// In browser console
const { data, error } = await supabase
  .from('white_papers')
  .select('*');
console.log(data);
```

### 2. Test PDF Download
1. Go to `/advice-education` page
2. Click "Download PDF"
3. PDF should download from Supabase

### 3. Verify Download Count
```sql
SELECT title, download_count FROM white_papers;
```

## Rollback Plan

If Supabase isn't working, the code will fall back to client-side generation automatically.

## Benefits of Supabase Approach

✅ **Analytics**: Track download counts
✅ **Dynamic**: Update PDFs without redeploying
✅ **Smaller Bundle**: PDFs not embedded in JavaScript
✅ **Centralized**: One source of truth
✅ **Scalable**: Can add unlimited white papers

## Next Steps

1. Complete Supabase setup (Steps 1-2)
2. Generate/upload PDFs (Step 3)
3. Update database URLs (Step 4)
4. Test downloads
5. Monitor download counts

## Current Implementation Status

- ✅ Supabase client configured
- ✅ Database schema ready
- ✅ Download function implemented
- ⏳ PDFs need to be uploaded
- ⏳ Database records need URLs
- ⏳ Frontend needs type fixes

## Estimated Time

- Supabase setup: 10 minutes
- PDF upload: 5 minutes
- Testing: 5 minutes
- **Total: ~20 minutes**
