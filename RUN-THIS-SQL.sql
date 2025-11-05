-- ============================================
-- STEP 1: Check if white_papers table exists and has data
-- ============================================
SELECT * FROM white_papers;

-- If you get an error or no results, first run the migration file:
-- supabase-whitepapers-migration.sql

-- ============================================
-- STEP 2: Update PDF URLs to match your uploaded files
-- ============================================

-- Update AI Automation Frontier
UPDATE white_papers 
SET 
  pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20New%20Frontier%20of%20Efficiency%20How%20A%20%26%20Automation%20Are%20Transforming%20Every%20Industry.pdf',
  pdf_filename = 'The New Frontier of Efficiency How A & Automation Are Transforming Every Industry.pdf'
WHERE slug = 'ai-automation-frontier';

-- Update Digital Marketing
UPDATE white_papers 
SET 
  pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing%2C%20Reviews%20%26%20Social%20Presence%20Building%20the%20Modern%20Reputation%20Engine.pdf',
  pdf_filename = 'Digital-Marketing, Reviews & Social Presence Building the Modern Reputation Engine.pdf'
WHERE slug = 'digital-marketing-reputation';

-- Update Future of Business
UPDATE white_papers 
SET 
  pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20Future%20of%20Business%20How%20AI%20and%20Automation%20Are%20Transforming%20Operations.pdf',
  pdf_filename = 'The Future of Business How AI and Automation Are Transforming Operations.pdf'
WHERE slug = 'future-of-business';

-- ============================================
-- STEP 3: Verify the updates worked
-- ============================================
SELECT 
  slug, 
  title,
  pdf_filename,
  pdf_url,
  download_count,
  status
FROM white_papers
ORDER BY slug;

-- ============================================
-- STEP 4: Test the increment_download_count function
-- ============================================
-- Get a paper ID first
SELECT id, slug FROM white_papers LIMIT 1;

-- Then test the function (replace 'your-paper-id' with actual ID from above)
-- SELECT increment_download_count('your-paper-id');

-- Check if download count increased
-- SELECT slug, download_count FROM white_papers WHERE id = 'your-paper-id';

-- ============================================
-- EXPECTED RESULTS
-- ============================================
-- After running the UPDATE statements, you should see:
-- 
-- slug                          | pdf_url
-- ------------------------------|--------------------------------------------------
-- ai-automation-frontier        | https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20New%20Frontier...
-- digital-marketing-reputation  | https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing...
-- future-of-business            | https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20Future%20of%20Business...
--
-- All URLs should start with: https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/
