# Admin Panel Guide - Blog & White Paper Management

## ✅ What's Been Added

### New Admin Features:
1. **White Paper Manager** - View, edit, delete white papers
2. **White Paper Editor** - Upload PDFs and manage white paper details
3. **Navigation** - Easy switching between Blogs and White Papers

## Access Your Admin Panel

### Login URL:
```
https://1d4e5d8ca8eb.ngrok-free.app/admin/login
```

Or locally:
```
http://localhost:5173/admin/login
```

### Login Credentials:
Use your Supabase authentication credentials (the ones you set up in Supabase Dashboard)

## Admin Panel Features

### 1. Blog Management (`/admin/blogs`)
- ✅ View all blog posts
- ✅ Create new blog posts
- ✅ Edit existing posts
- ✅ Delete posts
- ✅ Upload featured images
- ✅ Set categories, tags, status
- ✅ Draft/Published status

### 2. White Paper Management (`/admin/white-papers`) **NEW!**
- ✅ View all white papers
- ✅ Upload PDF files (up to 50MB)
- ✅ Edit white paper details
- ✅ Delete white papers
- ✅ Track download counts
- ✅ Set categories, tags, status
- ✅ Draft/Published/Archived status

## How to Upload a White Paper

### Step 1: Login
1. Go to `/admin/login`
2. Enter your Supabase credentials
3. Click "Login"

### Step 2: Navigate to White Papers
1. Click "White Papers" button in the top navigation
2. Or go directly to `/admin/white-papers`

### Step 3: Create New White Paper
1. Click "New White Paper" button
2. Fill in the form:
   - **Title** (required) - e.g., "The Future of AI"
   - **Slug** (auto-generated) - URL-friendly version
   - **Subtitle** (optional) - Additional context
   - **Description** (required) - Brief summary
   - **PDF File** (required) - Click "Upload PDF" button
   - **Category** (required) - Select from dropdown
   - **Status** (required) - Draft/Published/Archived
   - **Page Count** (optional) - Number of pages
   - **Tags** (optional) - Comma-separated keywords

3. Click "Upload PDF" and select your PDF file
4. Wait for upload to complete
5. Click "Save White Paper"

### Step 4: Verify
1. Go to your website: `/resources`
2. The new white paper should appear
3. Click "Download PDF" to test

## Admin Panel Navigation

```
/admin/login              → Login page
/admin/blogs              → Blog list
/admin/blogs/new          → Create new blog
/admin/blogs/edit/:id     → Edit blog
/admin/white-papers       → White paper list (NEW!)
/admin/white-papers/new   → Upload new white paper (NEW!)
/admin/white-papers/edit/:id → Edit white paper (NEW!)
```

## Features of White Paper Editor

### PDF Upload
- Drag & drop or click to upload
- Automatic upload to Supabase Storage
- File size validation (max 50MB)
- File type validation (PDF only)
- Shows file name and size after upload
- Preview link to view uploaded PDF

### Auto-Generated Fields
- **Slug** - Auto-generated from title
- **File Size** - Automatically captured on upload
- **Published Date** - Set when status changes to "published"

### Status Options
- **Draft** - Not visible on website
- **Published** - Visible on website
- **Archived** - Hidden but not deleted

## Database Integration

All data is stored in Supabase PostgreSQL:

### Tables:
- `blogs` - Blog posts
- `white_papers` - White papers with PDF URLs
- `contacts` - Contact form submissions
- `quotes` - Quote requests
- `newsletter` - Newsletter subscriptions

### Storage Buckets:
- `blog-images` - Blog featured images
- `white-papers` - PDF files

## Security

- ✅ Authentication required for all admin pages
- ✅ Automatic redirect to login if not authenticated
- ✅ Secure file uploads to Supabase Storage
- ✅ Public read access for published content
- ✅ Admin-only write access

## Tips

### For Blogs:
- Use high-quality featured images (recommended: 1200x630px)
- Write clear, engaging excerpts
- Use relevant tags for better discoverability
- Set appropriate read time (auto-calculated from content length)

### For White Papers:
- Use descriptive titles and subtitles
- Write compelling descriptions
- Add relevant tags for SEO
- Set accurate page counts
- Use professional PDF formatting
- Test download before publishing

## Troubleshooting

### Can't Login?
- Check Supabase authentication is set up
- Verify email/password are correct
- Check browser console for errors

### PDF Upload Fails?
- Check file size (must be < 50MB)
- Verify file type is PDF
- Check Supabase Storage bucket exists
- Verify storage policies allow uploads

### White Paper Not Showing?
- Check status is "Published"
- Verify PDF URL is correct
- Check storage bucket is public
- Clear browser cache

## Next Steps

1. Login to admin panel
2. Navigate to White Papers
3. Upload your first PDF
4. Test download on website
5. Repeat for all white papers!

Your admin panel is now fully functional for managing both blogs and white papers! 🎉
