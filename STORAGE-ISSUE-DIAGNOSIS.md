# Storage Issue Diagnosis

## Current Status

✅ **Database** - URLs are correctly stored in white_papers table
❌ **Storage Access** - Getting "Object not found" error

## The Issue

When you try to access:
```
https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/[filename].pdf
```

You get:
```json
{"statusCode":404,"error":"not found","message":"Object not found"}
```

## Possible Causes (in order of likelihood)

### 1. Bucket is Not Public (Most Likely)
**Symptom:** 404 error on all files
**Fix:** Make bucket public in Dashboard

### 2. Files Don't Exist in Storage
**Symptom:** 404 error on all files
**Check:** Go to Storage → white-papers → See if files are listed
**Fix:** Upload the PDF files

### 3. File Names Don't Match
**Symptom:** Some files work, some don't
**Check:** Compare file names in Storage vs. database URLs
**Fix:** Rename files or update database URLs

### 4. Bucket Name is Wrong
**Symptom:** 404 error on all files
**Check:** Bucket should be named `white-papers` (not `white_papers` or `whitepapers`)
**Fix:** Rename bucket or update URLs

### 5. Storage Policies Missing
**Symptom:** 403 Forbidden or 404 error
**Fix:** Add SELECT policy for public access

## Quick Diagnosis Steps

### Step 1: Check if bucket exists
1. Go to Supabase Dashboard → Storage
2. Do you see a bucket named `white-papers`?
   - YES → Go to Step 2
   - NO → Create it and upload files

### Step 2: Check if files exist
1. Click on `white-papers` bucket
2. Do you see 3-4 PDF files?
   - YES → Go to Step 3
   - NO → Upload the PDF files

### Step 3: Check if bucket is public
1. Look for a "Public" badge on the bucket
2. Is it there?
   - YES → Go to Step 4
   - NO → Make bucket public (see FIX-STORAGE-DASHBOARD.md)

### Step 4: Check file names
1. Click on a file in Storage
2. Does the name EXACTLY match what's in the database?
   - YES → Go to Step 5
   - NO → Rename file or update database

### Step 5: Test direct access
1. In Storage, click on a file
2. Click "Copy URL" or "Get URL"
3. Paste in browser
4. Does it download?
   - YES → Database URLs might be wrong
   - NO → Policies are not set correctly

## Most Common Fix

**90% of the time, the issue is that the bucket is not public.**

### Quick Fix:
1. Supabase Dashboard → Storage
2. Click on `white-papers` bucket
3. Click the three dots (...) menu
4. Click "Make public"
5. Confirm

That's it! Test the URL again.

## Alternative: Check Bucket Configuration

Run this SQL to see bucket configuration:

```sql
SELECT 
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
FROM storage.buckets
WHERE name = 'white-papers';
```

The `public` column should be `true`.

If it's `false`, run:

```sql
UPDATE storage.buckets
SET public = true
WHERE name = 'white-papers';
```

## After Fixing

Once the URL works in browser, your website will work automatically because:
1. Database has correct URLs ✅
2. Code is correct ✅
3. Storage is accessible ✅

No code changes needed!
