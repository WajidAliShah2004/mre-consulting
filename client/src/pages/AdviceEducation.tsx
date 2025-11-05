import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaGraduationCap, FaLightbulb, FaChartLine, FaRocket, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, WhitePaper } from '../lib/supabase';
import { generateAndDownloadPDF } from '../utils/pdfGenerator';

const AdviceEducation = () => {
  const [whitepapers, setWhitepapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState<string | null>(null);

  // Icon mapping for display
  const iconMap: any = {
    'ai-automation-frontier': FaRocket,
    'digital-marketing-reputation': FaChartLine,
    'future-of-business': FaLightbulb
  };

  // Color mapping for display
  const colorMap: any = {
    'ai-automation-frontier': 'from-primary-500 to-primary-600',
    'digital-marketing-reputation': 'from-green-500 to-emerald-600',
    'future-of-business': 'from-purple-500 to-pink-600'
  };

  useEffect(() => {
    fetchWhitePapers();
  }, []);

  const fetchWhitePapers = async () => {
    try {
      const { data, error } = await supabase
        .from('white_papers')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;

      // Map Supabase data to display format
      const mappedData = (data || []).map((paper: WhitePaper) => ({
        id: paper.id,
        slug: paper.slug,
        title: paper.title,
        subtitle: paper.subtitle,
        description: paper.description,
        icon: iconMap[paper.slug] || FaFileAlt,
        pages: paper.page_count ? `${paper.page_count}+ Pages` : '40+ Pages',
        topics: paper.tags || [],
        color: colorMap[paper.slug] || 'from-primary-500 to-primary-600',
        highlights: [], // Can be added to database if needed
        pdf_url: paper.pdf_url,
        pdf_filename: paper.pdf_filename,
        download_count: paper.download_count || 0
      }));

      setWhitepapers(mappedData);
    } catch (error) {
      console.error('Error fetching white papers:', error);
      // Use fallback data if Supabase fails
      setWhitepapers(fallbackWhitepapers);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (paperId: string, pdfUrl: string, filename: string) => {
    setDownloading(paperId);
    try {
      // Increment download count
      await supabase.rpc('increment_download_count', { paper_id: paperId });

      // Download the PDF
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Refresh data to show updated download count
      fetchWhitePapers();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download PDF. Please try again or contact support.');
    } finally {
      setDownloading(null);
    }
  };

  // Fallback data if Supabase is not set up yet
  const fallbackWhitepapers = [
    {
      id: 'ai-automation-frontier',
      title: 'The New Frontier of Efficiency: How AI & Automation Are Transforming Every Industry',
      description: 'A comprehensive 50+ page executive report analyzing AI and automation opportunities across 20+ industries. Includes ROI benchmarks from McKinsey, PwC, Gartner, Deloitte, and IBM.',
      icon: FaRocket,
      pages: '50+ Pages',
      topics: ['AI Implementation', 'Automation ROI', 'Industry Analysis', 'Case Studies', 'Implementation Framework'],
      color: 'from-primary-500 to-primary-600',
      highlights: [
        '$15.7 trillion in global GDP potential by 2030',
        '45% of daily operations are automatable',
        '250-400% ROI over two years for early adopters',
        'Detailed analysis of 20+ industries'
      ]
    },
    {
      id: 'digital-marketing-reputation',
      title: 'Digital Marketing, Reviews & Social Presence: Building the Modern Reputation Engine',
      description: 'A 45+ page flagship white paper on building digital trust, managing online reputation, and implementing the 5 pillars of modern growth for sustainable business success.',
      icon: FaChartLine,
      pages: '45+ Pages',
      topics: ['Digital Marketing', 'Reputation Management', 'SEO Strategy', 'Social Media', 'Analytics'],
      color: 'from-green-500 to-emerald-600',
      highlights: [
        '87% of consumers read reviews before buying',
        'One-star difference = 5-9% revenue shift',
        '70% more inquiries with consistent social posting',
        'Complete implementation framework'
      ]
    },
    {
      id: 'future-of-business',
      title: 'The Future of Business: How AI and Automation Are Transforming Operations',
      description: 'A 40+ page comprehensive guide to implementing ChatGPT, LLMs, and automation systems with detailed security, compliance, and ROI frameworks for modern businesses.',
      icon: FaLightbulb,
      pages: '40+ Pages',
      topics: ['ChatGPT Integration', 'Business Transformation', 'Compliance', 'Implementation', 'Security'],
      color: 'from-purple-500 to-pink-600',
      highlights: [
        'ChatGPT and LLM implementation strategies',
        'Security and compliance guidelines',
        'Industry-specific use cases',
        'Step-by-step implementation roadmap'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Advice & Education | White Papers & Industry Insights | MRECAI"
        description="Download free white papers and industry insights on AI, automation, digital marketing, and business transformation. Expert guidance backed by research from McKinsey, PwC, and Gartner."
        canonical="/advice-education"
        keywords="white papers, business education, AI insights, automation guide, digital marketing education, industry research"
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                  <FaGraduationCap className="mr-2" />
                  Expert Insights & Education
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Advice & <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Education</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive white papers and industry insights to help you make informed decisions about AI, automation, and digital transformation
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <FaFileAlt className="text-primary-400" />
                  <span>3 Flagship White Papers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaDownload className="text-primary-400" />
                  <span>Free PDF Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaChartLine className="text-primary-400" />
                  <span>Research-Backed Insights</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* White Papers Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Download Our <span className="gradient-text">White Papers</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In-depth research and analysis backed by data from McKinsey, PwC, Gartner, Deloitte, and IBM
              </p>
            </motion.div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <FaSpinner className="text-5xl text-primary-500 animate-spin mb-4" />
                <p className="text-gray-600">Loading white papers...</p>
              </div>
            ) : whitepapers.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No white papers available at the moment.</p>
                <p className="text-gray-500 text-sm mt-2">Please complete the Supabase setup.</p>
              </div>
            ) : (
              <div className="space-y-8 max-w-5xl mx-auto">
                {whitepapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    {/* Left: Icon and Title */}
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${paper.color} rounded-xl flex items-center justify-center shadow-md`}>
                          <paper.icon className="text-3xl text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary-600 mb-2">{paper.pages}</div>
                          <h3 className="text-2xl font-bold text-navy-900 mb-3 leading-tight">{paper.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">{paper.description}</p>

                      {/* Key Highlights */}
                      <div className="mb-4">
                        <h4 className="font-bold text-navy-900 mb-2 text-sm">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {(paper.highlights || []).map((highlight: string, i: number) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <span className="text-primary-500 mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {(paper.topics || []).map((topic: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Download Button */}
                    <div className="flex flex-col justify-center items-center md:items-end">
                      <button
                        onClick={() => paper.pdf_url ? handleDownload(paper.id, paper.pdf_url, paper.pdf_filename) : generateAndDownloadPDF(paper.slug || paper.id)}
                        disabled={downloading === paper.id}
                        className={`w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${paper.color} text-white font-bold rounded-xl hover:shadow-xl transition-all group-hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {downloading === paper.id ? (
                          <>
                            <FaSpinner className="mr-2 animate-spin" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <FaDownload className="mr-2" />
                            Download PDF
                          </>
                        )}
                      </button>
                      <p className="text-xs text-gray-500 mt-3 text-center md:text-right">
                        Free • No registration required
                      </p>
                      {paper.download_count > 0 && (
                        <p className="text-xs text-gray-400 mt-1 text-center md:text-right">
                          {paper.download_count} downloads
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                More <span className="gradient-text">Resources</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore additional tools and insights to help your business grow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Link
                  to="/tools/roi-calculator"
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <FaChartLine className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">ROI Calculator</h3>
                  <p className="text-gray-600 mb-4">Calculate your potential savings from AI and automation</p>
                  <span className="text-primary-600 font-semibold">Try Calculator →</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link
                  to="/blog"
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <FaFileAlt className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Blog & Articles</h3>
                  <p className="text-gray-600 mb-4">Read our latest insights and industry updates</p>
                  <span className="text-primary-600 font-semibold">Read Blog →</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link
                  to="/book-now"
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <FaGraduationCap className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-600 mb-4">Get personalized advice for your business</p>
                  <span className="text-primary-600 font-semibold">Book Now →</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Schedule a free consultation to discuss how these insights can be applied to your specific business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Book Free Consultation
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdviceEducation;
