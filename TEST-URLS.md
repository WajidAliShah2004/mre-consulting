# Test PDF URLs

## Direct Download Links

Click these links in your browser to test if the PDFs are accessible:

### 1. AI Automation Frontier
```
https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20New%20Frontier%20of%20Efficiency%20How%20A%20%26%20Automation%20Are%20Transforming%20Every%20Industry.pdf
```

**Expected:** PDF should download immediately

---

### 2. Digital Marketing & Reputation
```
https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/Digital-Marketing%2C%20Reviews%20%26%20Social%20Presence%20Building%20the%20Modern%20Reputation%20Engine.pdf
```

**Expected:** PDF should download immediately

---

### 3. Future of Business
```
https://bneabkaypiypceokadba.supabase.co/storage/v1/object/public/white-papers/The%20Future%20of%20Business%20How%20AI%20and%20Automation%20Are%20Transforming%20Operations.pdf
```

**Expected:** PDF should download immediately

---

## If URLs Don't Work

### Error: "Access Denied" or "Forbidden"
**Solution:** Make the storage bucket public

1. Go to Supabase Dashboard → Storage → white-papers
2. Click "Policies" tab
3. Add this policy:

```sql
CREATE POLICY "Public can download PDFs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'white-papers');
```

### Error: "File Not Found" or 404
**Solution:** Check the file names match exactly

1. Go to Supabase Dashboard → Storage → white-papers
2. Click on each file to see its exact name
3. Update the URLs in the SQL script to match exactly

### Error: "Invalid URL"
**Solution:** Check your Supabase project URL

Your project URL should be: `https://bneabkaypiypceokadba.supabase.co`

If it's different, update all URLs in the SQL script.

---

## URL Encoding Reference

When files have special characters, they need to be URL-encoded:

| Character | Encoded |
|-----------|---------|
| Space     | `%20`   |
| &         | `%26`   |
| ,         | `%2C`   |
| (         | `%28`   |
| )         | `%29`   |

Example:
- Original: `The New Frontier of Efficiency How A & Automation.pdf`
- Encoded: `The%20New%20Frontier%20of%20Efficiency%20How%20A%20%26%20Automation.pdf`

---

## Quick Test Checklist

- [ ] Test URL 1 in browser - Downloads PDF?
- [ ] Test URL 2 in browser - Downloads PDF?
- [ ] Test URL 3 in browser - Downloads PDF?
- [ ] Run SQL update script in Supabase
- [ ] Verify database has correct URLs
- [ ] Test download on website
- [ ] Check download count increments

If all checkboxes are ✅, you're done!
