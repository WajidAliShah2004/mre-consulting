import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaCalculator, FaCheckCircle, FaRocket, FaIndustry, FaBullhorn, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase, WhitePaper } from '../lib/supabase';

const Resources = () => {
  const [whitepapers, setWhitepapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState<string | null>(null);

  // Icon mapping
  const iconMap: any = {
    'ai-automation-frontier': FaRocket,
    'digital-marketing-reputation': FaBullhorn,
    'future-of-business': FaIndustry
  };

  // Color mapping
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

      const mappedData = (data || []).map((paper: WhitePaper) => ({
        id: paper.id,
        slug: paper.slug,
        title: paper.title,
        description: paper.description,
        icon: iconMap[paper.slug] || FaFileAlt,
        pages: paper.page_count ? `${paper.page_count}+` : '40+',
        topics: paper.tags || [],
        color: colorMap[paper.slug] || 'from-primary-500 to-primary-600',
        pdf_url: paper.pdf_url,
        pdf_filename: paper.pdf_filename
      }));

      setWhitepapers(mappedData);
    } catch (error) {
      console.error('Error fetching white papers:', error);
      setWhitepapers(fallbackWhitepapers);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (paperId: string, pdfUrl: string | undefined, filename: string) => {
    setDownloading(paperId);
    try {
      // Check if PDF URL exists
      if (!pdfUrl) {
        throw new Error('PDF URL not found in database. Please contact support.');
      }

      console.log('Downloading PDF from:', pdfUrl);

      // Increment download count (non-blocking)
      try {
        await supabase.rpc('increment_download_count', { paper_id: paperId });
      } catch (countError) {
        console.warn('Could not increment download count:', countError);
      }

      // Download from Supabase Storage
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Download failed with status: ${response.status}. Please check if the file exists in Supabase Storage.`);
      }
      
      const blob = await response.blob();
      
      // Verify it's a PDF
      if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
        console.warn('Downloaded file may not be a PDF. Type:', blob.type);
      }
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('PDF downloaded successfully:', filename);
    } catch (error: any) {
      console.error('Download failed:', error);
      alert(`Failed to download PDF: ${error.message}\n\nPlease ensure:\n1. The PDF is uploaded to Supabase Storage\n2. The storage bucket is public\n3. The URL in the database is correct`);
    } finally {
      setDownloading(null);
    }
  };

  const fallbackWhitepapers = [
    {
      id: 'ai-automation-frontier',
      title: 'The New Frontier of Efficiency: How AI & Automation Are Transforming Every Industry',
      description: 'Comprehensive analysis of AI and automation opportunities across 20+ industries with ROI benchmarks from McKinsey, PwC, Gartner, Deloitte, and IBM.',
      icon: FaRocket,
      pages: '50+',
      topics: ['AI Implementation', 'Automation ROI', 'Industry Analysis', 'Case Studies'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 'digital-marketing-reputation',
      title: 'Digital Marketing, Reviews & Social Presence: Building the Modern Reputation Engine',
      description: 'Complete guide to building digital trust, managing online reputation, and implementing the 5 pillars of modern growth.',
      icon: FaBullhorn,
      pages: '45+',
      topics: ['Digital Marketing', 'Reputation Management', 'SEO Strategy', 'Social Media'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'future-of-business',
      title: 'The Future of Business: How AI and Automation Are Transforming Operations',
      description: 'Strategic guide to implementing ChatGPT, LLMs, and automation systems with security, compliance, and ROI frameworks.',
      icon: FaIndustry,
      pages: '40+',
      topics: ['ChatGPT Integration', 'Business Transformation', 'Compliance', 'Implementation'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const tools = [
    {
      id: 'roi-calculator',
      title: 'AI & Automation ROI Calculator',
      description: 'Calculate your potential savings and efficiency gains from implementing AI and automation in your business.',
      icon: FaCalculator,
      link: '/tools/roi-calculator',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'readiness-assessment',
      title: 'Digital Readiness Assessment',
      description: 'Evaluate your business\'s readiness for digital transformation and identify key opportunities.',
      icon: FaCheckCircle,
      link: '/tools/readiness-assessment',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const guides = [
    {
      title: 'Industry-Specific Automation Guides',
      items: [
        'Accounting & Tax Firms Automation Guide',
        'Insurance Agency Digital Transformation',
        'Real Estate Technology Implementation',
        'Construction Project Management Automation',
        'Healthcare Revenue Cycle Optimization'
      ]
    },
    {
      title: 'Implementation Checklists',
      items: [
        'AI Implementation Checklist (90-Day)',
        'Digital Marketing Launch Checklist',
        'Automation Readiness Assessment',
        'Compliance & Security Checklist'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Resources & Downloads | White Papers, Guides & Tools | MRECAI"
        description="Download free white papers, industry guides, and use our ROI calculators. Expert insights on AI, automation, digital marketing, and business transformation."
        canonical="/resources"
        keywords="white papers, business guides, ROI calculator, automation guide, AI implementation, digital transformation resources"
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
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
                  <FaFileAlt className="mr-2" />
                  Free Resources & Downloads
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Resources & <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Downloads</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Expert insights, white papers, and tools to help you transform your business
              </p>
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
                Flagship <span className="gradient-text">White Papers</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive research and insights backed by data from McKinsey, PwC, Gartner, Deloitte, and IBM
              </p>
            </motion.div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <FaSpinner className="text-5xl text-primary-500 animate-spin mb-4" />
                <p className="text-gray-600">Loading white papers...</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {whitepapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Header with Icon */}
                  <div className={`bg-gradient-to-r ${paper.color} p-8 text-white`}>
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      <paper.icon className="text-3xl text-white" />
                    </div>
                    <div className="text-sm font-semibold mb-2 opacity-90">{paper.pages} Pages</div>
                    <h3 className="text-2xl font-bold leading-tight">{paper.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{paper.description}</p>

                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wide">Key Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {(paper.topics || []).map((topic: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(paper.id, paper.pdf_url, paper.pdf_filename || `${paper.slug}.pdf`)}
                      disabled={downloading === paper.id}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${paper.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all group-hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
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
                  </div>
                </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Interactive Tools Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Interactive <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Free calculators and assessments to help you make informed decisions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={tool.link}
                    className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full"
                  >
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <tool.icon className="text-3xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{tool.description}</p>
                      <div className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Launch Tool →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides & Checklists Section */}
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
                Guides & <span className="gradient-text">Checklists</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Practical resources to guide your implementation journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">{guide.title}</h3>
                  <ul className="space-y-3">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Request Access →
                  </button>
                </motion.div>
              ))}
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
              <h2 className="text-4xl font-bold mb-6">Need Personalized Guidance?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Schedule a free consultation to discuss how these strategies can be applied to your specific business
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

export default Resources;
