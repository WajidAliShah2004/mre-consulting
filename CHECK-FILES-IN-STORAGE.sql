-- Check if files actually exist in storage (SIMPLE VERSION)
SELECT 
  name,
  bucket_id,
  created_at
FROM storage.objects
WHERE bucket_id = 'white-papers'
ORDER BY name;

-- This will show you:
-- 1. All files in the white-papers bucket
-- 2. Their exact names
-- 3. When they were uploaded

-- If this returns 0 rows, it means no files are uploaded yet!
