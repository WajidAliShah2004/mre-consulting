import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight, FaBullseye, FaHeart, FaUsers, FaRocket, FaCheckCircle, FaLightbulb, FaHandshake, FaAward } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/schemas';

const AboutCompany = () => {
  return (
    <>
      <SEO
        title="About Our Company | MRECAI History & Mission"
        description="Learn about MRE Consulting & Insurance - our company history since 2024, mission, core values, and how we operate to serve our clients."
        canonical="/about/company"
        keywords="about our company, company history, mission statement, core values, how we operate"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
              { name: 'Company', url: '/about/company' },
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
              <span className="text-navy-900 font-semibold">About the Company</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Our Company</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Building the future of consulting and insurance services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Who <span className="gradient-text">We Are</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    MRE Consulting & Insurance is a forward-thinking firm dedicated to empowering individuals, 
                    families, and businesses with comprehensive consulting and insurance solutions. Founded in 2024, 
                    we bring together expertise in business consulting, digital marketing, insurance services, 
                    tax and accounting, and cutting-edge AI technology.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our approach combines traditional consulting excellence with innovative technology solutions, 
                    ensuring our clients stay ahead in an ever-evolving business landscape. We believe in building 
                    lasting partnerships based on trust, transparency, and measurable results.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With a commitment to 24/7 service support and personalized attention, we're not just service 
                    providers—we're your strategic partners in success.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    { icon: FaUsers, text: '500+ satisfied clients across multiple industries' },
                    { icon: FaAward, text: 'Expert team with extensive industry experience' },
                    { icon: FaCheckCircle, text: '98% client success rate' },
                    { icon: FaRocket, text: 'Cutting-edge AI and automation solutions' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-4 bg-gradient-to-r from-primary-50 to-white p-4 rounded-lg border border-primary-100"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                        <item.icon className="text-white text-xl" />
                      </div>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
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
                Our <span className="gradient-text">Mission</span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-12 text-white shadow-2xl mb-12"
              >
                <FaBullseye className="text-6xl mb-6 mx-auto opacity-80" />
                <h3 className="text-3xl font-bold mb-6 text-center">Our Mission Statement</h3>
                <p className="text-xl leading-relaxed text-center opacity-95">
                  To empower our clients with innovative, personalized solutions that drive growth, efficiency, 
                  and security. We are committed to delivering exceptional service, leveraging cutting-edge 
                  technology, and building lasting partnerships that create measurable value for individuals, 
                  families, and businesses.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: FaBullseye,
                    title: 'Vision',
                    description: 'To be the most trusted and innovative consulting and insurance partner, recognized for transforming businesses through technology and expertise.'
                  },
                  {
                    icon: FaRocket,
                    title: 'Goals',
                    description: 'Expand our service offerings, embrace emerging technologies, and help 1,000+ clients achieve their business and personal financial goals by 2030.'
                  },
                  {
                    icon: FaLightbulb,
                    title: 'Objectives',
                    description: 'Deliver measurable ROI, maintain 98%+ client satisfaction, and continuously innovate our service delivery through AI and automation.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="text-primary-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision and action we take
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We strive for excellence in everything we do, delivering top-tier service and results.</p>
              </motion.div>

              {/* Integrity */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaHandshake className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Integrity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Honesty and transparency guide our relationships with clients and partners.</p>
              </motion.div>

              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaLightbulb className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We embrace cutting-edge technology and creative solutions to solve challenges.</p>
              </motion.div>

              {/* Client-Focused */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Client-Focused</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Our clients' success is our success. We put their needs first, always.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Operate */}
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
                How We <span className="gradient-text">Operate</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures exceptional results for every client
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Consultation',
                  description: 'We begin by understanding your unique needs, goals, and challenges through in-depth consultation.',
                  icon: FaUsers
                },
                {
                  step: '02',
                  title: 'Strategic Planning',
                  description: 'Our experts develop a customized strategy tailored to your specific situation and objectives.',
                  icon: FaBullseye
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'We execute the plan with precision, leveraging our expertise and technology to deliver results.',
                  icon: FaRocket
                },
                {
                  step: '04',
                  title: 'Ongoing Support',
                  description: 'Our commitment doesn\'t end at implementation. We provide continuous support and optimization.',
                  icon: FaHandshake
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg mb-2">
                      <process.icon className="text-white text-2xl" />
                    </div>
                    <div className="text-center text-2xl font-bold text-primary-600">{process.step}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-4 text-center">Our Quality Standards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FaCheckCircle, text: 'Rigorous quality control at every stage' },
                  { icon: FaAward, text: 'Industry best practices and compliance' },
                  { icon: FaHeart, text: 'Client satisfaction as our top priority' }
                ].map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <standard.icon className="text-primary-600 text-2xl flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{standard.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Timeline</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to industry leaders
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: '2024',
                  quarter: 'Q1',
                  title: 'The Beginning',
                  description: 'MRE Consulting & Insurance was founded with a vision to provide personalized, expert consulting and insurance services to individuals, families, and businesses.',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  year: '2024',
                  quarter: 'Q2',
                  title: 'Strategic Partnerships',
                  description: 'Established key partnerships with Grober Imbey Insurance Agency (50+ years experience) and expanded our insurance service offerings.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  year: '2024',
                  quarter: 'Q3',
                  title: 'Technology Innovation',
                  description: 'Partnered with NovaEdge Solutions to integrate AI and automation capabilities, modernizing our service delivery and client experience.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  year: '2025',
                  quarter: '',
                  title: 'Continued Growth',
                  description: 'Serving 500+ clients with 98% success rate, expanding services across consulting, insurance, technology, and financial solutions.',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className={`flex-shrink-0 w-24 h-24 bg-gradient-to-r ${milestone.color} rounded-2xl flex flex-col items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xl font-bold text-white">{milestone.year}</span>
                      <span className="text-sm text-white/80">{milestone.quarter}</span>
                    </motion.div>

                    <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {index < 3 && (
                    <div className="absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-primary-500 to-primary-300"></div>
                  )}
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
              <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Let's discuss how we can help you achieve your goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Back to About
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutCompany;
