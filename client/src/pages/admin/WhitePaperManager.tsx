import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, WhitePaper } from '../../lib/supabase';
import { FaDownload, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const WhitePaperManager = () => {
  const [whitePapers, setWhitePapers] = useState<WhitePaper[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchWhitePapers();
  }, [navigate]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
    }
  };

  const fetchWhitePapers = async () => {
    try {
      const { data, error } = await supabase
        .from('white_papers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWhitePapers(data || []);
    } catch (error) {
      console.error('Error fetching white papers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this white paper?')) return;

    try {
      const { error } = await supabase
        .from('white_papers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setWhitePapers(whitePapers.filter(wp => wp.id !== id));
      alert('White paper deleted successfully');
    } catch (error) {
      console.error('Error deleting white paper:', error);
      alert('Failed to delete white paper');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'N/A';
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(2)} KB`;
    return `${(kb / 1024).toFixed(2)} MB`;
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">White Paper Manager</h1>
            <button
              onClick={() => navigate('/admin/blogs')}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Blogs
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/admin/white-papers/new')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
            >
              <FaPlus /> New White Paper
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pages</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Downloads</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {whitePapers.map((paper) => (
                <tr key={paper.id}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium">{paper.title}</div>
                      <div className="text-sm text-gray-500">{paper.subtitle}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{paper.category}</td>
                  <td className="px-6 py-4">{paper.page_count || '-'}</td>
                  <td className="px-6 py-4">{formatFileSize(paper.file_size)}</td>
                  <td className="px-6 py-4">{paper.download_count}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      paper.status === 'published' ? 'bg-green-100 text-green-800' : 
                      paper.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {paper.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <a
                        href={paper.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                        title="Download"
                      >
                        <FaDownload />
                      </a>
                      <button
                        onClick={() => navigate(`/admin/white-papers/edit/${paper.id}`)}
                        className="text-green-600 hover:text-green-800"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(paper.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {whitePapers.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No white papers found. Create your first one!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhitePaperManager;
