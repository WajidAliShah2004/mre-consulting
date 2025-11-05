# Supabase Setup Guide

## 🎯 Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign up / Login
3. Click "New Project"
4. Fill in:
   - **Name**: MRE Consulting Blog
   - **Database Password**: (save this!)
   - **Region**: Choose closest to you
5. Wait for project to be created (~2 minutes)

## 🗄️ Step 2: Create Database Tables

Go to **SQL Editor** in Supabase dashboard and run this:

```sql
-- Create blogs table
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  author TEXT NOT NULL DEFAULT 'MRE Team',
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  read_time INTEGER DEFAULT 5,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_status ON blogs(status);
CREATE INDEX idx_blogs_category ON blogs(category);
CREATE INDEX idx_blogs_published_at ON blogs(published_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## 🔒 Step 3: Set Up Row Level Security (RLS)

Run this in SQL Editor:

```sql
-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Public can read published blogs
CREATE POLICY "Public can read published blogs"
  ON blogs FOR SELECT
  USING (status = 'published');

-- Authenticated users (admins) can do everything
CREATE POLICY "Authenticated users can insert blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users can read all blogs (including drafts)
CREATE POLICY "Authenticated users can read all blogs"
  ON blogs FOR SELECT
  TO authenticated
  USING (true);
```

## 👤 Step 4: Create Admin User

Go to **Authentication** → **Users** → **Add User**

Fill in:
- **Email**: your-admin@email.com
- **Password**: (create a strong password)
- **Auto Confirm User**: ✅ Check this

Save the credentials!

## 📦 Step 5: Set Up Storage (for images)

1. Go to **Storage** in Supabase dashboard
2. Click **New Bucket**
3. Name: `blog-images`
4. **Public bucket**: ✅ Check this
5. Click **Create Bucket**

### Set Storage Policies:

Go to **Storage** → **Policies** → **blog-images** → **New Policy**

**Policy 1: Public Read**
```sql
-- Anyone can view images
CREATE POLICY "Public can view blog images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');
```

**Policy 2: Authenticated Upload**
```sql
-- Authenticated users can upload
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');
```

**Policy 3: Authenticated Delete**
```sql
-- Authenticated users can delete
CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');
```

## 🔑 Step 6: Get Your API Keys

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long string)

## 📝 Step 7: Update Environment Variables

Add to `client/.env`:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**IMPORTANT**: 
- Replace `your_project_url_here` with your actual Project URL
- Replace `your_anon_key_here` with your actual anon key
- Don't commit this file to git!

## ✅ Verification

After setup, you should have:
- ✅ Supabase project created
- ✅ `blogs` table created with RLS policies
- ✅ Admin user created in Authentication
- ✅ `blog-images` storage bucket with policies
- ✅ Environment variables configured

## 🚀 Next Steps

1. Restart your React dev server
2. Go to `http://localhost:5173/admin/login`
3. Login with your admin email/password
4. Start creating blogs!

## 🐛 Troubleshooting

**Can't login?**
- Check admin user is created in Supabase Auth
- Verify email/password are correct
- Check browser console for errors

**Can't create blogs?**
- Verify RLS policies are set up
- Check you're logged in (token in localStorage)
- Check Supabase logs in dashboard

**Images not uploading?**
- Verify storage bucket exists
- Check storage policies are set
- Ensure bucket is public

## 📚 Useful Links

- Supabase Dashboard: https://app.supabase.com
- Supabase Docs: https://supabase.com/docs
- RLS Guide: https://supabase.com/docs/guides/auth/row-level-security
