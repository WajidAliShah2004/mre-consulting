-- ============================================
-- WHITE PAPERS TABLE FOR SUPABASE
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- Create white_papers table
CREATE TABLE IF NOT EXISTS white_papers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  subtitle TEXT,
  description TEXT NOT NULL,
  pdf_url TEXT NOT NULL,
  pdf_filename TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  page_count INTEGER,
  file_size INTEGER,
  download_count INTEGER DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_white_papers_slug ON white_papers(slug);
CREATE INDEX IF NOT EXISTS idx_white_papers_status ON white_papers(status);
CREATE INDEX IF NOT EXISTS idx_white_papers_category ON white_papers(category);
CREATE INDEX IF NOT EXISTS idx_white_papers_published_at ON white_papers(published_at DESC);

-- Enable Row Level Security
ALTER TABLE white_papers ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Anyone can view published white papers
CREATE POLICY "Anyone can view published white papers"
  ON white_papers FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Only authenticated users can insert/update/delete
CREATE POLICY "Authenticated users can manage white papers"
  ON white_papers FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add updated_at trigger
CREATE TRIGGER update_white_papers_updated_at
  BEFORE UPDATE ON white_papers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE BUCKET FOR WHITE PAPER PDFs
-- ============================================
-- Note: Create this bucket in Supabase Dashboard → Storage
-- Bucket name: white-papers
-- Public: Yes (for downloads)
-- File size limit: 50MB
-- Allowed MIME types: application/pdf

-- After creating the bucket, set up storage policies:

-- Policy 1: Anyone can download PDFs
-- CREATE POLICY "Anyone can download white paper PDFs"
-- ON storage.objects FOR SELECT
-- TO public
-- USING (bucket_id = 'white-papers');

-- Policy 2: Authenticated users can upload PDFs
-- CREATE POLICY "Authenticated users can upload white paper PDFs"
-- ON storage.objects FOR INSERT
-- TO authenticated
-- WITH CHECK (bucket_id = 'white-papers');

-- Policy 3: Authenticated users can update PDFs
-- CREATE POLICY "Authenticated users can update white paper PDFs"
-- ON storage.objects FOR UPDATE
-- TO authenticated
-- USING (bucket_id = 'white-papers');

-- Policy 4: Authenticated users can delete PDFs
-- CREATE POLICY "Authenticated users can delete white paper PDFs"
-- ON storage.objects FOR DELETE
-- TO authenticated
-- USING (bucket_id = 'white-papers');

-- ============================================
-- INSERT INITIAL WHITE PAPERS
-- ============================================
-- Note: Upload PDFs to Supabase Storage first, then insert records

INSERT INTO white_papers (title, slug, subtitle, description, pdf_url, pdf_filename, category, tags, page_count, status) VALUES
(
  'The New Frontier of Efficiency',
  'ai-automation-frontier',
  'How AI & Automation Are Transforming Every Industry',
  'A comprehensive 50+ page executive report analyzing AI and automation opportunities across 20+ industries. Includes ROI benchmarks from McKinsey, PwC, Gartner, Deloitte, and IBM.',
  'https://your-project.supabase.co/storage/v1/object/public/white-papers/AI-Automation-Frontier-MRECAI.pdf',
  'AI-Automation-Frontier-MRECAI.pdf',
  'AI & Automation',
  ARRAY['AI', 'Automation', 'ROI', 'Industry Analysis', 'Digital Transformation'],
  50,
  'published'
),
(
  'Digital Marketing, Reviews & Social Presence',
  'digital-marketing-reputation',
  'Building the Modern Reputation Engine',
  'A 45+ page flagship white paper on building digital trust, managing online reputation, and implementing the 5 pillars of modern growth for sustainable business success.',
  'https://your-project.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing-Reputation-MRECAI.pdf',
  'Digital-Marketing-Reputation-MRECAI.pdf',
  'Digital Marketing',
  ARRAY['Digital Marketing', 'SEO', 'Reputation Management', 'Social Media', 'Reviews'],
  45,
  'published'
),
(
  'The Future of Business',
  'future-of-business',
  'How AI and Automation Are Transforming Operations',
  'A 40+ page comprehensive guide to implementing ChatGPT, LLMs, and automation systems with detailed security, compliance, and ROI frameworks for modern businesses.',
  'https://your-project.supabase.co/storage/v1/object/public/white-papers/Future-of-Business-MRECAI.pdf',
  'Future-of-Business-MRECAI.pdf',
  'Business Transformation',
  ARRAY['AI', 'ChatGPT', 'Automation', 'Business Strategy', 'Compliance'],
  40,
  'published'
);

-- ============================================
-- FUNCTION TO INCREMENT DOWNLOAD COUNT
-- ============================================
CREATE OR REPLACE FUNCTION increment_download_count(paper_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE white_papers
  SET download_count = download_count + 1
  WHERE id = paper_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
