import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight, FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaAward, FaBriefcase, FaLightbulb, FaQuoteLeft } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { personSchema, breadcrumbSchema } from '../utils/schemas';
import founderImage from '../../images/Matthew-Founder-1.png';

const AboutFounder = () => {
  return (
    <>
      <SEO
        title="Meet Matthew Epstein | MRECAI Founder & President"
        description="Meet Matthew Epstein, founder of MRECAI. With extensive experience in business consulting and insurance, he leads our team with expertise and vision."
        canonical="/about/founder"
        keywords="Matthew Epstein, MRECAI founder, business consultant, insurance expert, company president"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            personSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
              { name: 'Founder', url: '/about/founder' },
            ]),
          ],
        }}
      />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-600 transition-colors flex items-center">
                <FaHome className="mr-1" />
                Home
              </Link>
              <FaChevronRight className="mx-2 text-gray-400" />
              <Link to="/about" className="hover:text-primary-600 transition-colors">
                About
              </Link>
              <FaChevronRight className="mx-2 text-gray-400" />
              <span className="text-navy-900 font-semibold">About the Founder</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Meet <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Our Founder</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Leadership, vision, and commitment to excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Photo Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2"
                >
                  <div className="relative">
                    {/* Founder photo */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src={founderImage} 
                        alt="Matthew Epstein - Founder & President of MRE Consulting & Insurance"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 15%' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Contact Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-8 bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-6 text-white shadow-xl"
                  >
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <div className="space-y-3">
                      <a href="mailto:Matthew@mrecai.com" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                        <FaEnvelope className="text-primary-400" />
                        <span>Matthew@mrecai.com</span>
                      </a>
                      <a href="tel:929-919-3574" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                        <FaPhone className="text-primary-400" />
                        <span>929-919-3574</span>
                      </a>
                      <a href="https://www.linkedin.com/company/mre-consulting-insurance/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                        <FaLinkedin className="text-primary-400" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bio Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-3"
                >
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">Matthew Epstein</h2>
                    <p className="text-2xl text-primary-600 font-semibold mb-4">President & Founder</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-8">
                      <FaQuoteLeft className="text-primary-500 text-3xl mb-4" />
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        "My vision is to create a consulting and insurance firm that truly puts clients first, 
                        leveraging technology and innovation to deliver exceptional results while maintaining 
                        the personal touch that makes all the difference."
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-navy-900 mb-4">About Matthew Epstein</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      <strong>Matthew Epstein</strong> is an accomplished entrepreneur, consultant, and licensed insurance broker who blends financial expertise with innovative technology solutions. A graduate of the <strong>University at Buffalo</strong>, Matthew earned both his <strong>Bachelor's and Master's degrees in Accounting and Finance</strong>, graduating <strong>Summa Cum Laude</strong> and <strong>Magna Cum Laude</strong>.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Before founding MRE Consulting & Insurance, he worked with industry leaders including <strong>Goldman Sachs</strong>, <strong>PricewaterhouseCoopers (PwC)</strong>, and <strong>Merlin Entertainments</strong>, where he managed multi-site financial operations and drove measurable business growth.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Now, as a <strong>New York–licensed Property & Casualty and Life, Accident & Health Insurance Broker</strong>, Matthew leads MRE Consulting & Insurance full-time — helping individuals and businesses achieve smarter financial decisions, stronger protection, and lasting success through comprehensive, personalized consulting and insurance solutions.
                    </p>

                    <h3 className="text-2xl font-bold text-navy-900 mb-4 mt-8">My Journey — From Numbers to Innovation</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      From the very beginning, I've always believed that success comes from understanding the numbers — and then daring to think beyond them. My journey started at the University at Buffalo, where I earned both my Bachelor's and Master's degrees in Accounting and Finance, graduating Summa Cum Laude and Magna Cum Laude. During my time there, I specialized in <strong>Accounting Systems and Internal Controls</strong>, developing an early passion for how technology could transform financial management and business decision-making.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      While still in school, I competed — and won — several <strong>PwC accounting competitions, technology innovation challenges, and startup pitch competitions</strong>. My entrepreneurial projects gained national recognition and were even featured in national media, reinforcing my belief that technology and finance aren't separate worlds — they're two sides of the same coin.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      After graduation, I refined my skills in the world of high finance and global business. I interned at <strong>Goldman Sachs</strong>, where I learned how large-scale financial systems truly operate, and later worked at <strong>PricewaterhouseCoopers (PwC)</strong>, where I deepened my understanding of audit, compliance, and corporate advisory. From there, I transitioned into the private sector, joining <strong>Merlin Entertainments</strong> as a Finance Manager, where I led financial operations, managed cross-functional teams, and implemented systems that drove efficiency, profitability, and growth.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      But deep down, I always knew I was an entrepreneur at heart. I wanted to build something that didn't just analyze numbers — but used them to empower people and businesses to take control of their futures.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      That's how <strong>MRE Consulting & Insurance</strong> was born — a firm that merges financial expertise, strategic consulting, and modern technology to provide clients with complete, data-driven solutions. I officially founded MRE Consulting & Insurance in 2024, and by 2025, I made the leap to pursue it full-time.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Today, I'm proud to lead a full-service firm that helps individuals and businesses navigate everything from tax planning and accounting to insurance, automation, and AI-driven consulting. What started as a vision to simplify financial decision-making has grown into a mission — to help every client achieve confidence, clarity, and control over their financial world.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
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
                Professional <span className="gradient-text">Background</span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {[
                {
                  icon: FaGraduationCap,
                  title: 'Education',
                  items: [
                    'Master\'s Degree in Accounting & Finance - University at Buffalo (Magna Cum Laude)',
                    'Bachelor\'s Degree in Accounting & Finance - University at Buffalo (Summa Cum Laude)',
                    'Specialized in Accounting Systems and Internal Controls',
                    'Winner of multiple PwC accounting competitions and technology innovation challenges'
                  ],
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaBriefcase,
                  title: 'Professional Experience',
                  items: [
                    'Goldman Sachs - Intern (High finance and large-scale financial systems)',
                    'PricewaterhouseCoopers (PwC) - Audit, compliance, and corporate advisory',
                    'Merlin Entertainments - Finance Manager (Multi-site financial operations)',
                    'Founded MRE Consulting & Insurance in 2024, full-time since 2025'
                  ],
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaAward,
                  title: 'Credentials & Certifications',
                  items: [
                    'New York Licensed Property & Casualty Insurance Broker',
                    'New York Licensed Life, Accident & Health Insurance Broker',
                    'National media recognition for entrepreneurial projects',
                    'Winner of startup pitch competitions'
                  ],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: FaLightbulb,
                  title: 'Areas of Expertise',
                  items: [
                    'Financial Expertise & Strategic Consulting',
                    'Insurance Solutions & Risk Management',
                    'AI & Technology Implementation',
                    'Tax Planning & Accounting Services'
                  ],
                  color: 'from-orange-500 to-red-500'
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <section.icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Philosophy */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Vision & <span className="gradient-text">Philosophy</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Vision for MRECAI</h3>
                  <p className="text-lg leading-relaxed opacity-95 mb-4">
                    To build the most trusted and innovative consulting and insurance firm, recognized for 
                    transforming businesses and protecting families through technology, expertise, and 
                    unwavering commitment to client success.
                  </p>
                  <p className="text-lg leading-relaxed opacity-95">
                    By 2030, we aim to serve over 1,000 clients, expand our service offerings, and become 
                    the go-to partner for businesses seeking to leverage AI and automation for growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Personal Philosophy</h3>
                  <p className="text-lg leading-relaxed opacity-95 mb-4">
                    "Success is not just about achieving goals—it's about building relationships, creating 
                    value, and making a positive impact on the lives of those we serve."
                  </p>
                  <p className="text-lg leading-relaxed opacity-95">
                    I believe in leading with integrity, embracing innovation, and never compromising on 
                    quality. Every client interaction is an opportunity to exceed expectations and build 
                    lasting trust.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Core Leadership Principles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Client-First Mindset', description: 'Every decision is made with client success in mind' },
                    { title: 'Continuous Innovation', description: 'Always seeking better ways to serve and deliver value' },
                    { title: 'Transparent Communication', description: 'Honesty and clarity in all interactions' }
                  ].map((principle, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h4 className="font-bold text-navy-900 mb-2">{principle.title}</h4>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  ))}
                </div>
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
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-200 mb-8">
                I'd love to hear about your goals and discuss how we can help you achieve them
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Schedule a Meeting
                </Link>
                <a
                  href="mailto:Matthew@mrecai.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  <FaEnvelope className="mr-2" />
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutFounder;
