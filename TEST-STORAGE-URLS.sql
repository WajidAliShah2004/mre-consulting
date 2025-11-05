-- Generate the actual URLs from storage and compare with database
WITH storage_files AS (
  SELECT 
    name,
    'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/' || name as actual_url
  FROM storage.objects
  WHERE bucket_id = 'white-papers'
),
database_urls AS (
  SELECT 
    slug,
    pdf_url as expected_url
  FROM white_papers
)
SELECT 
  s.name as storage_filename,
  s.actual_url,
  d.slug,
  d.expected_url,
  CASE 
    WHEN s.actual_url = d.expected_url THEN '✅ MATCH'
    ELSE '❌ MISMATCH'
  END as status
FROM storage_files s
FULL OUTER JOIN database_urls d ON s.actual_url = d.expected_url
ORDER BY s.name;

-- This will show if the URLs in the database match the actual files in storage
