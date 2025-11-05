-- Check if the URLs were updated correctly
SELECT 
  slug, 
  title,
  pdf_filename,
  SUBSTRING(pdf_url, 1, 100) as pdf_url_preview,
  download_count,
  status
FROM white_papers
ORDER BY slug;

-- This will show you:
-- 1. The slug (identifier)
-- 2. The title
-- 3. The filename
-- 4. First 100 characters of the URL (to verify it's correct)
-- 5. Download count
-- 6. Status (should be 'published')
