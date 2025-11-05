import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, Blog } from '../lib/supabase';
import { FaClock, FaUser, FaCalendar, FaTags } from 'react-icons/fa';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        setNotFound(true);
        throw error;
      }

      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | MRE Consulting & Insurance</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <div className="pt-20">
        {/* Featured Image */}
        {blog.featured_image && (
          <div className="w-full h-96 overflow-hidden">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        )}

        <article className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <Link to="/blog" className="text-primary-500 hover:text-primary-600 mb-6 inline-block flex items-center">
              ← Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900" data-aos="fade-up">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b" data-aos="fade-up" data-aos-delay="100">
              <span className="flex items-center">
                <FaUser className="mr-2 text-primary-500" />
                {blog.author}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <FaCalendar className="mr-2 text-primary-500" />
                {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <FaClock className="mr-2 text-primary-500" />
                {blog.read_time} min read
              </span>
            </div>

            {/* Excerpt */}
            <div className="text-xl text-gray-700 mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary-500" data-aos="fade-up" data-aos-delay="150">
              {blog.excerpt}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-a:text-primary-600 prose-strong:text-navy-900" 
              data-aos="fade-up" 
              data-aos-delay="200"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center flex-wrap gap-2">
                  <FaTags className="text-primary-500 mr-2" />
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog CTA */}
            <div className="mt-12 text-center">
              <Link to="/blog" className="btn-primary inline-block">
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
