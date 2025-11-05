import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { FaUpload, FaSpinner } from 'react-icons/fa';

const categories = [
  'AI & Automation',
  'Digital Marketing',
  'Business Transformation',
  'Insurance',
  'Tax Planning',
  'Technology',
  'General'
];

const WhitePaperEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    subtitle: '',
    description: '',
    pdfUrl: '',
    pdfFilename: '',
    category: 'General',
    tags: '',
    pageCount: 0,
    fileSize: 0,
    status: 'draft'
  });

  useEffect(() => {
    checkAuth();
    if (id) {
      fetchWhitePaper();
    }
  }, [id, navigate]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
    }
  };

  const fetchWhitePaper = async () => {
    try {
      const { data, error } = await supabase
        .from('white_papers')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          subtitle: data.subtitle || '',
          description: data.description,
          pdfUrl: data.pdf_url,
          pdfFilename: data.pdf_filename,
          category: data.category,
          tags: data.tags.join(', '),
          pageCount: data.page_count || 0,
          fileSize: data.file_size || 0,
          status: data.status
        });
      }
    } catch (error) {
      console.error('Error fetching white paper:', error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  const handlePDFUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      alert('PDF size should be less than 50MB');
      return;
    }

    setUploading(true);
    try {
      const fileName = file.name;
      const filePath = fileName;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('white-papers')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('white-papers')
        .getPublicUrl(filePath);

      setFormData({ 
        ...formData, 
        pdfUrl: publicUrl,
        pdfFilename: fileName,
        fileSize: file.size
      });

      alert('PDF uploaded successfully!');
    } catch (error: any) {
      console.error('Error uploading PDF:', error);
      alert(`Failed to upload PDF: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pdfUrl) {
      alert('Please upload a PDF file');
      return;
    }

    setSaving(true);

    try {
      const payload: any = {
        title: formData.title,
        slug: formData.slug,
        subtitle: formData.subtitle || null,
        description: formData.description,
        pdf_url: formData.pdfUrl,
        pdf_filename: formData.pdfFilename,
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        page_count: formData.pageCount || null,
        file_size: formData.fileSize || null,
        status: formData.status,
        published_at: formData.status === 'published' ? new Date().toISOString() : null
      };

      if (id) {
        const { error } = await supabase
          .from('white_papers')
          .update(payload)
          .eq('id', id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('white_papers')
          .insert([payload]);

        if (error) throw error;
      }

      alert('White paper saved successfully!');
      navigate('/admin/white-papers');
    } catch (error: any) {
      console.error('Error saving white paper:', error);
      alert(`Failed to save white paper: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">{id ? 'Edit' : 'New'} White Paper</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Slug *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Subtitle</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description *</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of the white paper content"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">PDF File *</label>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                  {uploading ? <FaSpinner className="animate-spin" /> : <FaUpload />}
                  {uploading ? 'Uploading...' : 'Upload PDF'}
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePDFUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
                {formData.pdfFilename && (
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">{formData.pdfFilename}</div>
                    {formData.fileSize > 0 && (
                      <div className="text-gray-500">{formatFileSize(formData.fileSize)}</div>
                    )}
                  </div>
                )}
              </div>
              {formData.pdfUrl && (
                <div className="flex items-center gap-2">
                  <a
                    href={formData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Current PDF →
                  </a>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, pdfUrl: '', pdfFilename: '', fileSize: 0 })}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              )}
              <p className="text-sm text-gray-500">Max file size: 50MB</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Category *</label>
              <select
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Status *</label>
              <select
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Page Count</label>
            <input
              type="number"
              min="0"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.pageCount}
              onChange={(e) => setFormData({ ...formData, pageCount: parseInt(e.target.value) || 0 })}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="AI, Automation, Business Strategy"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving || uploading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
            >
              {saving && <FaSpinner className="animate-spin" />}
              {saving ? 'Saving...' : 'Save White Paper'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/white-papers')}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhitePaperEditor;
