-- ============================================
-- FIX STORAGE ACCESS - Run this in Supabase SQL Editor
-- ============================================

-- First, check if the storage policies exist
SELECT * FROM pg_policies WHERE tablename = 'objects' AND schemaname = 'storage';

-- If no policies exist, create them:

-- Policy 1: Allow public to SELECT (download) files from white-papers bucket
CREATE POLICY IF NOT EXISTS "Public can download white papers"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');

-- Policy 2: Allow authenticated users to INSERT (upload) files
CREATE POLICY IF NOT EXISTS "Authenticated can upload white papers"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'white-papers');

-- Policy 3: Allow authenticated users to UPDATE files
CREATE POLICY IF NOT EXISTS "Authenticated can update white papers"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'white-papers');

-- Policy 4: Allow authenticated users to DELETE files
CREATE POLICY IF NOT EXISTS "Authenticated can delete white papers"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'white-papers');

-- Verify the policies were created
SELECT 
  policyname,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
  AND policyname LIKE '%white%';
