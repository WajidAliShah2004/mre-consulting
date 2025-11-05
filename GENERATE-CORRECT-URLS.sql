-- This will generate UPDATE statements with the correct URLs based on actual files in storage

-- First, let's see what we have
SELECT 
  name,
  'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/' || name as url
FROM storage.objects
WHERE bucket_id = 'white-papers'
ORDER BY name;

-- Copy the URLs from above and use them in the UPDATE statements below
-- Replace the URLs with the ones shown above

-- Example UPDATE (you'll need to match the slug to the correct file):
-- UPDATE white_papers SET pdf_url = '[URL from above]' WHERE slug = 'ai-automation-frontier';
