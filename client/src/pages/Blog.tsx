import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUser, FaArrowRight, FaBookOpen, FaTags, FaFire, FaNewspaper } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';
import { supabase, Blog as BlogType } from '../lib/supabase';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [blogPosts, setBlogPosts] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Posts', icon: FaBookOpen },
    { id: 'Technology', name: 'Technology', icon: FaFire },
    { id: 'Tax Planning', name: 'Tax Planning', icon: FaTags },
    { id: 'Insurance Advice', name: 'Insurance', icon: FaNewspaper },
    { id: 'Business Tips', name: 'Business Tips', icon: FaBookOpen },
    { id: 'AI & Automation', name: 'AI & Automation', icon: FaFire }
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const placeholderPosts: BlogType[] = [
    {
      id: '1',
      title: '5 Ways AI Can Transform Your Business',
      slug: '5-ways-ai-transform-business',
      excerpt: 'Discover how artificial intelligence is revolutionizing business operations and driving growth across industries.',
      content: '',
      category: 'Technology',
      author: 'MRECAI Team',
      read_time: 5,
      featured_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      status: 'published',
      published_at: '2024-01-15',
      created_at: '2024-01-15',
      updated_at: '2024-01-15',
      tags: ['AI', 'Business', 'Innovation']
    },
    {
      id: '2',
      title: 'Tax Planning Strategies for 2024',
      slug: 'tax-planning-strategies-2024',
      excerpt: 'Essential tax planning tips to maximize your savings and minimize liabilities in the new year.',
      content: '',
      category: 'Tax Planning',
      author: 'MRECAI Team',
      read_time: 7,
      featured_image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      status: 'published',
      published_at: '2024-01-10',
      created_at: '2024-01-10',
      updated_at: '2024-01-10',
      tags: ['Tax', 'Finance', 'Planning']
    },
    {
      id: '3',
      title: 'Choosing the Right Business Insurance',
      slug: 'choosing-right-business-insurance',
      excerpt: 'A comprehensive guide to selecting insurance coverage that protects your business and assets.',
      content: '',
      category: 'Insurance Advice',
      author: 'MRECAI Team',
      read_time: 6,
      featured_image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
      status: 'published',
      published_at: '2024-01-05',
      created_at: '2024-01-05',
      updated_at: '2024-01-05',
      tags: ['Insurance', 'Business', 'Protection']
    },
    {
      id: '4',
      title: 'Digital Marketing Trends for Small Businesses',
      slug: 'digital-marketing-trends-small-business',
      excerpt: 'Stay ahead of the curve with these essential digital marketing strategies for 2024.',
      content: '',
      category: 'Technology',
      author: 'MRECAI Team',
      read_time: 8,
      featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      status: 'published',
      published_at: '2023-12-28',
      created_at: '2023-12-28',
      updated_at: '2023-12-28',
      tags: ['Marketing', 'Digital', 'Strategy']
    },
    {
      id: '5',
      title: 'Understanding Business Accounting Basics',
      slug: 'business-accounting-basics',
      excerpt: 'Master the fundamentals of business accounting to make better financial decisions.',
      content: '',
      category: 'Tax Planning',
      author: 'MRECAI Team',
      read_time: 6,
      featured_image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop',
      status: 'published',
      published_at: '2023-12-20',
      created_at: '2023-12-20',
      updated_at: '2023-12-20',
      tags: ['Accounting', 'Finance', 'Business']
    },
    {
      id: '6',
      title: 'Cybersecurity Best Practices for Businesses',
      slug: 'cybersecurity-best-practices',
      excerpt: 'Protect your business from cyber threats with these essential security measures.',
      content: '',
      category: 'Technology',
      author: 'MRECAI Team',
      read_time: 7,
      featured_image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      status: 'published',
      published_at: '2023-12-15',
      created_at: '2023-12-15',
      updated_at: '2023-12-15',
      tags: ['Security', 'Technology', 'Business']
    }
  ];

  // Use placeholder posts if no real blogs exist
  const displayPosts = blogPosts.length > 0 ? blogPosts : placeholderPosts;

  const filteredPosts = selectedCategory === 'all' 
    ? displayPosts 
    : displayPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Blog & Insights | Expert Business Advice | MRECAI"
        description="Expert advice and insights on business consulting, technology, insurance, and tax planning. Stay informed with the latest industry trends and best practices."
        canonical="/blog"
        keywords="business blog, consulting advice, insurance tips, tax planning, technology insights, business strategy"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Blog',
              name: 'MRECAI Blog',
              description: 'Expert advice and insights on business, technology, insurance, and tax planning',
            },
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
            ]),
          ],
        }}
      />

      <div className="pt-20">
        {/* Hero Section - Redesigned */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold">
                  <FaBookOpen className="mr-2" />
                  Expert Insights & Advice
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Advice & <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Tips</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Expert insights to help you make informed decisions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-padding bg-white pt-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Featured Post */}
            {selectedCategory === 'all' && featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <FaFire className="text-orange-500 text-2xl" />
                  <h2 className="text-2xl font-bold text-navy-900">Featured Article</h2>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={featuredPost.featured_image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop'}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="eager"
                          fetchPriority="high"
                          decoding="async"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-primary-500 text-white text-sm font-bold rounded-full shadow-lg">
                            {featuredPost.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <FaUser className="mr-2" />
                              {featuredPost.author}
                            </span>
                            <span className="flex items-center">
                              <FaClock className="mr-2" />
                              {featuredPost.read_time} min read
                            </span>
                          </div>
                          <span>{new Date(featuredPost.published_at || featuredPost.created_at).toLocaleDateString()}</span>
                        </div>

                        {/* CTA */}
                        <div className="inline-flex items-center text-primary-600 font-bold group-hover:gap-3 transition-all">
                          <span>Read Full Article</span>
                          <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
                >
                  <Link to={`/blog/${post.slug}`}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <FaClock className="mr-1" />
                          {post.read_time} min
                        </span>
                        <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                      </div>

                      <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="flex items-center text-sm text-gray-600">
                          <FaUser className="mr-2 text-primary-500" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                          Read More
                          <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
