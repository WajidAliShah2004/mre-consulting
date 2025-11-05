# Add White Papers to Your Existing Supabase

## ✅ You Already Have Supabase!

Since blogs and forms are already working with Supabase, you just need to add the white papers feature.

## Quick Setup (15 minutes)

### Step 1: Add White Papers Table (3 min)

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your existing project
3. Go to **SQL Editor**
4. Copy and paste this SQL:

```sql
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_white_papers_slug ON white_papers(slug);
CREATE INDEX IF NOT EXISTS idx_white_papers_status ON white_papers(status);
CREATE INDEX IF NOT EXISTS idx_white_papers_published_at ON white_papers(published_at DESC);

-- Enable RLS
ALTER TABLE white_papers ENABLE ROW LEVEL SECURITY;

-- Anyone can view published white papers
CREATE POLICY "Anyone can view published white papers"
  ON white_papers FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Authenticated users can manage
CREATE POLICY "Authenticated users can manage white papers"
  ON white_papers FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Updated_at trigger
CREATE TRIGGER update_white_papers_updated_at
  BEFORE UPDATE ON white_papers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Download count function
CREATE OR REPLACE FUNCTION increment_download_count(paper_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE white_papers
  SET download_count = download_count + 1
  WHERE id = paper_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

5. Click **Run**

### Step 2: Create Storage Bucket (2 min)

1. Go to **Storage** in your Supabase Dashboard
2. Click **New Bucket**
3. Settings:
   - Name: `white-papers`
   - Public: ✅ **YES**
4. Click **Create**

### Step 3: Set Storage Policies (2 min)

1. Click on `white-papers` bucket
2. Go to **Policies** tab
3. Click **New Policy** → **For full customization**
4. Add this policy:

```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');
```

5. Add another policy for uploads:

```sql
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'white-papers');
```

### Step 4: Generate PDFs (3 min)

Open your browser console (F12) on your website and run:

```javascript
// This will download 3 PDFs to your Downloads folder
import('./src/utils/pdfGenerator.js').then(module => {
  ['ai-automation-frontier', 'digital-marketing-reputation', 'future-of-business'].forEach(id => {
    module.generateAndDownloadPDF(id);
  });
});
```

Or just click the current "Download PDF" buttons to get the files!

### Step 5: Upload PDFs (2 min)

1. Go to **Storage** → `white-papers` bucket
2. Click **Upload File**
3. Upload these 3 files from your Downloads folder:
   - `AI-Automation-Frontier-MRECAI.pdf`
   - `Digital-Marketing-Reputation-MRECAI.pdf`
   - `Future-of-Business-MRECAI.pdf`

### Step 6: Insert Database Records (3 min)

1. Go to **SQL Editor**
2. Get your Supabase URL (it's in your `.env` file or Settings → API)
3. Run this SQL (replace `YOUR-PROJECT-ID`):

```sql
-- Insert white papers
INSERT INTO white_papers (title, slug, subtitle, description, pdf_url, pdf_filename, category, tags, page_count, status) VALUES
(
  'The New Frontier of Efficiency',
  'ai-automation-frontier',
  'How AI & Automation Are Transforming Every Industry',
  'A comprehensive 50+ page executive report analyzing AI and automation opportunities across 20+ industries. Includes ROI benchmarks from McKinsey, PwC, Gartner, Deloitte, and IBM.',
  'https://YOUR-PROJECT-ID.supabase.co/storage/v1/object/public/white-papers/AI-Automation-Frontier-MRECAI.pdf',
  'AI-Automation-Frontier-MRECAI.pdf',
  'AI & Automation',
  ARRAY['AI', 'Automation', 'ROI', 'Industry Analysis'],
  50,
  'published'
),
(
  'Digital Marketing, Reviews & Social Presence',
  'digital-marketing-reputation',
  'Building the Modern Reputation Engine',
  'A 45+ page flagship white paper on building digital trust, managing online reputation, and implementing the 5 pillars of modern growth for sustainable business success.',
  'https://YOUR-PROJECT-ID.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing-Reputation-MRECAI.pdf',
  'Digital-Marketing-Reputation-MRECAI.pdf',
  'Digital Marketing',
  ARRAY['Digital Marketing', 'SEO', 'Reputation Management'],
  45,
  'published'
),
(
  'The Future of Business',
  'future-of-business',
  'How AI and Automation Are Transforming Operations',
  'A 40+ page comprehensive guide to implementing ChatGPT, LLMs, and automation systems with detailed security, compliance, and ROI frameworks for modern businesses.',
  'https://YOUR-PROJECT-ID.supabase.co/storage/v1/object/public/white-papers/Future-of-Business-MRECAI.pdf',
  'Future-of-Business-MRECAI.pdf',
  'Business Transformation',
  ARRAY['AI', 'ChatGPT', 'Automation', 'Business Strategy'],
  40,
  'published'
);
```

**To find YOUR-PROJECT-ID:**
- Check your `.env` file: `VITE_SUPABASE_URL`
- Or go to Settings → API → Project URL
- Format: `https://xxxxxxxxxxxxx.supabase.co`

### Step 7: Update the Code (Already Done!)

The code I wrote earlier is ready. Just uncomment it:

**In `client/src/pages/AdviceEducation.tsx` and `client/src/pages/Resources.tsx`:**

Replace the current imports and code with the Supabase version I created earlier (it's in the file history).

Or I can do it for you - just say "activate Supabase PDFs" and I'll update the code.

## Test It

1. Go to **SQL Editor** and run:
```sql
SELECT title, slug, pdf_url, download_count FROM white_papers;
```

You should see 3 rows.

2. Visit your website: `/advice-education`
3. Click "Download PDF"
4. PDF should download!

5. Check download count:
```sql
SELECT title, download_count FROM white_papers;
```

Count should increment!

## Quick Reference

**Your Supabase Project:**
- URL: Check `.env` → `VITE_SUPABASE_URL`
- Already has: blogs, contacts, quotes, newsletter
- Adding: white_papers table + storage

**Storage Bucket:**
- Name: `white-papers`
- Public: Yes
- Contains: 3 PDF files

**Database Table:**
- Name: `white_papers`
- Rows: 3 white papers
- Tracks: downloads, status, metadata

## Need Help?

**Can't find Project ID?**
```bash
# Check your .env file
cat client/.env | grep SUPABASE_URL
```

**Test Supabase Connection:**
```sql
-- In SQL Editor
SELECT * FROM blogs LIMIT 1;
```

If this works, your Supabase is connected!

**Storage URL Format:**
```
https://[PROJECT-ID].supabase.co/storage/v1/object/public/white-papers/[FILENAME].pdf
```

## Summary

Since you already have Supabase working:
1. ✅ Add white_papers table (SQL)
2. ✅ Create storage bucket
3. ✅ Upload 3 PDFs
4. ✅ Insert database records
5. ✅ Activate Supabase code (I can do this)

**Total Time:** ~15 minutes

**Want me to activate the Supabase PDF code now?** Just say yes and I'll update the files!
