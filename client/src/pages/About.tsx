import SEO from '../components/common/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/schemas';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBullseye, FaHandshake, FaLightbulb, FaUsers, FaAward, FaRocket, FaChartLine, FaShieldAlt, FaCog, FaCheckCircle, FaClock, FaGlobe, FaPhone, FaUserTie, FaArrowRight, FaCalendarAlt, FaCalculator } from 'react-icons/fa';
import { ScrollReveal, AnimatedCard, StaggerList, StaggerItem, AnimatedBackground, FloatingElement } from '../components/common';

const About = () => {
  return (
    <>
      <SEO
        title="About MRECAI | Expert Business Consulting & Insurance"
        description="Learn about MRE Consulting & Insurance. Founded in 2024, we provide expert consulting, insurance, and technology solutions with a proven track record of 500+ satisfied clients."
        canonical="/about"
        keywords="about MRECAI, business consulting company, insurance agency, company history, our mission"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
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
                  <FaUsers className="mr-2" />
                  Trusted by 500+ Clients
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">MRECAI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Empowering individuals, families, and businesses with expert consulting and insurance solutions
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { number: '2024', label: 'Founded' },
                  { number: '500+', label: 'Happy Clients' },
                  { number: '98%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learn More Navigation */}
        <section className="section-padding bg-white border-b border-gray-200">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore <span className="gradient-text">More</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our founder and discover our strategic partnerships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: FaUserTie,
                  title: 'Meet Our Founder',
                  description: 'Learn about Matthew Epstein, our President and Founder, his vision, and extensive industry experience',
                  link: '/about/founder',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaHandshake,
                  title: 'Strategic Partners',
                  description: 'Discover our network of trusted partners across insurance, finance, and technology',
                  link: '/about/partners',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link
                    to={item.link}
                    className="block bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <FaArrowRight className="ml-2" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission - Redesigned */}
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
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-2xl">
                    <FaRocket className="text-5xl mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">Driving Your Success</h3>
                    <p className="text-lg leading-relaxed opacity-90">
                      At MRE Consulting & Insurance, our mission is to empower our clients with innovative solutions 
                      that drive growth, efficiency, and security. We believe in building lasting partnerships based 
                      on trust, expertise, and measurable results.
                    </p>
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-20 -z-10"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FaUsers className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">For Individuals & Families</h4>
                      <p className="text-gray-600">Personalized financial guidance and protection for your future</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FaChartLine className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">For Growing Businesses</h4>
                      <p className="text-gray-600">Strategic insights and hands-on support to scale your operations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FaAward className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">Excellence in Service</h4>
                      <p className="text-gray-600">Committed to delivering exceptional results and lasting value</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Redesigned */}
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
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-2xl"></div>
                <motion.div
                  className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaBullseye className="text-3xl text-primary-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900 text-center group-hover:text-primary-600 transition-colors">
                  Excellence
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We strive for excellence in everything we do, delivering top-tier service and results that exceed expectations.
                </p>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300"></div>
              </motion.div>

              {/* Integrity */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-2xl"></div>
                <motion.div
                  className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaHandshake className="text-3xl text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900 text-center group-hover:text-primary-600 transition-colors">
                  Integrity
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Honesty and transparency guide our relationships with clients and partners, building trust that lasts.
                </p>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300"></div>
              </motion.div>

              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
                <motion.div
                  className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaLightbulb className="text-3xl text-purple-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900 text-center group-hover:text-primary-600 transition-colors">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We embrace cutting-edge technology and creative solutions to solve complex challenges effectively.
                </p>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section - Redesigned */}
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
                Our <span className="gradient-text">Strategic Partners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with industry-leading partners to provide comprehensive solutions across 
                all service areas. Our strategic alliances enable us to deliver exceptional value and 
                expertise to every client.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: FaCog,
                  title: 'NovaEdge Solutions',
                  description: 'AI-driven software development and digital transformation partner with 15+ years of expertise.',
                  gradient: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaShieldAlt,
                  title: 'Grober Imbey Insurance',
                  description: 'Over 50 years of excellence in personal and commercial insurance solutions.',
                  gradient: 'from-primary-600 to-primary-700'
                },
                {
                  icon: FaChartLine,
                  title: 'Financial Advisors',
                  description: 'Trusted wealth management and financial planning partners.',
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaCalculator,
                  title: 'Accounting Partners',
                  description: 'Certified professionals for tax preparation and bookkeeping services.',
                  gradient: 'from-green-600 to-emerald-600'
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-r ${partner.gradient} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <partner.icon className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-navy-900 group-hover:text-primary-600 transition-colors">
                    {partner.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to industry leaders
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: '2024',
                  title: 'The Beginning',
                  description: 'MRE Consulting & Insurance was founded with a vision to provide personalized, expert consulting and insurance services to individuals, families, and businesses.',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  year: '2024',
                  quarter: 'Q2',
                  title: 'Rapid Growth',
                  description: 'Expanded our client base and service offerings, establishing strategic partnerships with industry leaders including Grober Imbey Insurance Agency.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  year: '2024',
                  quarter: 'Q4',
                  title: 'Technology Integration',
                  description: 'Partnered with NovaEdge Solutions to deliver cutting-edge AI and automation solutions, positioning ourselves as innovation leaders.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  year: '2025',
                  title: 'Continued Excellence',
                  description: 'Serving 500+ satisfied clients with a 98% success rate, committed to delivering exceptional results and expanding our comprehensive service offerings.',
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
                    {/* Year Badge */}
                    <motion.div
                      className={`flex-shrink-0 w-24 h-24 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold text-white">{milestone.year}</span>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < 3 && (
                    <div className="absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-primary-500 to-primary-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                Why Choose <span className="gradient-text">MRECAI</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're more than just consultants - we're your partners in success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: FaCheckCircle,
                  title: 'Proven Track Record',
                  description: '15+ years of delivering exceptional results with a 98% client satisfaction rate',
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaUsers,
                  title: 'Expert Team',
                  description: 'Certified professionals with deep expertise across all service areas',
                  gradient: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaClock,
                  title: '24/7 Support',
                  description: 'Round-the-clock availability to address your needs whenever they arise',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: FaRocket,
                  title: 'Innovative Solutions',
                  description: 'Cutting-edge technology and creative approaches to solve complex challenges',
                  gradient: 'from-orange-500 to-red-500'
                },
                {
                  icon: FaGlobe,
                  title: 'Comprehensive Services',
                  description: 'Full-spectrum solutions from business consulting to insurance and technology',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: FaAward,
                  title: 'Client-Focused',
                  description: 'Personalized approach tailored to your unique goals and requirements',
                  gradient: 'from-pink-500 to-rose-500'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 shadow-md`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-xl text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.4) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Let's discuss how we can help you achieve your goals. Schedule a free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/book-now"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <FaCalendarAlt className="mr-2" />
                  Book Free Consultation
                </motion.a>

                <motion.a
                  href="tel:929-919-3574"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  <FaPhone className="mr-3" />
                  929-919-3574
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
