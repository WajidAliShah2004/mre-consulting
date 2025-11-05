-- Get the EXACT full file names from storage
SELECT 
  name as filename,
  LENGTH(name) as name_length
FROM storage.objects
WHERE bucket_id = 'white-papers'
ORDER BY name;

-- This will show the complete file names without truncation
