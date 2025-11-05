import SEO from '../components/common/SEO';
import { serviceSchemas, breadcrumbSchema } from '../utils/schemas';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight, FaStar, FaUsers, FaPhone, FaRocket, FaCalendarAlt } from 'react-icons/fa';
import { SERVICES_EXPANDED } from '../utils/constants';
import { useState } from 'react';

const Services = () => {
  const [, setActiveService] = useState<number | null>(null);
  // Track active service for hover effects

  return (
    <>
      <SEO
        title="Our Services | Business Consulting & Insurance | MRECAI"
        description="Comprehensive business consulting, digital marketing, insurance services, tax & accounting, AI technology, and automation solutions. 500+ clients served with 98% success rate."
        canonical="/services"
        keywords="business consulting services, insurance services, digital marketing, tax accounting, AI technology, business automation, professional services"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.businessConsulting,
            serviceSchemas.digitalMarketing,
            serviceSchemas.insurance,
            serviceSchemas.taxAccounting,
            serviceSchemas.aiTechnology,
            serviceSchemas.automation,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
            ]),
          ],
        }}
      />

      <div className="pt-20">
        {/* Hero Section - Redesigned */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
                  <FaRocket className="mr-2" />
                  Comprehensive Business Solutions
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive solutions designed to help you succeed in today's competitive landscape
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {[
                  { icon: FaUsers, text: '180 Clients Served' },
                  { icon: FaStar, text: '4.9/5 Rating' },
                  { icon: FaCheck, text: '98% Success Rate' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <stat.icon className="text-primary-400 text-xl" />
                    <span className="font-semibold">{stat.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid - Redesigned */}
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
                What We <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored solutions to meet your unique business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {SERVICES_EXPANDED.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onHoverStart={() => setActiveService(index)}
                  onHoverEnd={() => setActiveService(null)}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600"></div>
                  
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div
                        className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="text-3xl text-primary-600" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3 flex items-center">
                        <span className="w-1 h-5 bg-primary-500 rounded-full mr-2"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                            className="flex items-start group/item"
                          >
                            <FaCheck className="text-primary-500 mr-3 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Partner Disclosure (for Investment & Financial Management) */}
                    {service.partnerDisclosure && (
                      <div className="mb-6 p-4 bg-primary-50 border border-primary-100 rounded-lg">
                        <p className="text-sm text-gray-700 italic leading-relaxed">
                          <span className="font-semibold text-primary-700">Note:</span> {service.partnerDisclosure}
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                      <Link
                        to="/book-now"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg group/btn"
                      >
                        <FaCalendarAlt className="mr-2" />
                        <span>Book Now</span>
                      </Link>
                      <Link
                        to="/book-now"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>

            {/* AI Consulting Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-12 text-white">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FaRocket className="text-4xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    AI, Technology & Automation Consulting
                  </h3>
                  <p className="text-xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
                    Discover our comprehensive AI consulting services — from artificial intelligence implementation to automation, digital transformation, and more.
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to="/ai-consulting"
                      className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      Explore AI Consulting Services
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
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
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures exceptional results every time
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We start with a free consultation to understand your needs and goals',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop a customized strategy tailored to your specific requirements',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute the plan with precision and ongoing communication',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  step: '04',
                  title: 'Support',
                  description: 'Provide continuous support and optimization for lasting success',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl font-bold text-white">{process.step}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>

                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 -right-4 text-primary-300">
                      <FaArrowRight className="text-2xl" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our clients say about working with us
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'John Doe',
                  role: 'CEO, Tech Startup',
                  text: 'MRECAI transformed our business operations. Their AI solutions increased our efficiency by 40%.',
                  rating: 5
                },
                {
                  name: 'Sarah Smith',
                  role: 'CFO, Finance Corp',
                  text: 'Outstanding tax planning services. They saved us thousands while ensuring full compliance.',
                  rating: 5
                },
                {
                  name: 'Mike Johnson',
                  role: 'Business Owner',
                  text: 'The insurance solutions provided peace of mind. Highly professional and personalized service.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Redesigned */}
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
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Schedule a free consultation and we'll help you find the perfect solution for your business
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/book-now"
                    className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    Schedule Free Consultation
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:929-919-3574"
                    className="inline-flex items-center px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all font-bold"
                  >
                    <FaPhone className="mr-3" />
                    Call: 929-919-3574
                  </a>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-primary-400" />
                  <span className="text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-primary-400" />
                  <span className="text-gray-300">No Commitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-primary-400" />
                  <span className="text-gray-300">Expert Guidance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
