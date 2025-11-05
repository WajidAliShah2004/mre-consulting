-- ============================================
-- SIMPLE FIX FOR STORAGE ACCESS
-- Run this in Supabase SQL Editor
-- ============================================

-- Method 1: Just make the bucket public (EASIEST)
UPDATE storage.buckets
SET public = true
WHERE name = 'white-papers';

-- Verify it worked
SELECT name, public FROM storage.buckets WHERE name = 'white-papers';
-- Should show: white-papers | true

-- ============================================
-- If Method 1 doesn't work, try Method 2:
-- ============================================

-- First, drop any existing policies (ignore errors if they don't exist)
DROP POLICY IF EXISTS "Public can download white papers" ON storage.objects;
DROP POLICY IF EXISTS "Public can download PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can download white paper PDFs" ON storage.objects;

-- Create the public read policy
CREATE POLICY "Public can download white papers"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');

-- Verify the policy was created
SELECT policyname, cmd 
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
  AND policyname = 'Public can download white papers';
