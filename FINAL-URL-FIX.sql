-- ============================================
-- FINAL FIX - Update database with CORRECT file names from storage
-- ============================================

-- Update AI Automation Frontier (note: it's "AI" not "A")
UPDATE white_papers 
SET 
  pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The New Frontier of Efficiency How AI & Automation Are Transforming Every Industry.pdf',
  pdf_filename = 'The New Frontier of Efficiency How AI & Automation Are Transforming Every Industry.pdf'
WHERE slug = 'ai-automation-frontier';

-- Update Digital Marketing (note: comma after "Marketing")
UPDATE white_papers 
SET 
  pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital Marketing, Reviews & Social Presence Building the Modern Reputation Engine.pdf',
  pdf_filename = 'Digital Marketing, Reviews & Social Presence Building the Modern Reputation Engine.pdf'
WHERE slug = 'digital-marketing-reputation';

-- Update Future of Business (using the one WITHOUT "(1)")
UPDATE white_papers 
SET 
  pdf_url = 'https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The Future of Business How AI and Automation Are Transforming Operations.pdf',
  pdf_filename = 'The Future of Business How AI and Automation Are Transforming Operations.pdf'
WHERE slug = 'future-of-business';

-- Verify the updates
SELECT slug, pdf_filename FROM white_papers ORDER BY slug;
