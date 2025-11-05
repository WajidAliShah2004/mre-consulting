-- Update white_papers table with correct Supabase Storage URLs
-- Run this in your Supabase SQL Editor

-- First, let's check what's currently in the table
SELECT id, title, slug, pdf_url, pdf_filename FROM white_papers;

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

-- Verify the updates
SELECT id, title, slug, pdf_url, pdf_filename FROM white_papers;
