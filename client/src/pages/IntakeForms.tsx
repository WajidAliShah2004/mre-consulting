import { motion } from 'framer-motion';
import { FaShieldAlt, FaHome, FaBuilding, FaCar, FaUmbrella, FaFileAlt, FaCheckCircle, FaClock, FaLock, FaEnvelope } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const IntakeForms = () => {
  const insuranceForms = [
    {
      icon: FaUmbrella,
      title: 'Personal Umbrella Insurance',
      description: 'Additional liability coverage beyond your standard policies',
      url: 'https://forms.gle/8ErDqe8PCX9mR2eU7',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: FaHome,
      title: 'Homeowners Insurance',
      description: 'Comprehensive coverage for your home and belongings',
      url: 'https://forms.gle/L9GZoQ9wGNDM31qg9',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaBuilding,
      title: 'Condo Insurance',
      description: 'Protection for your condominium and personal property',
      url: 'https://forms.gle/haZqCSKe8K89j3Gd7',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaBuilding,
      title: 'Commercial Insurance',
      description: 'Business protection and liability coverage',
      url: 'https://forms.gle/Qjru1J6MSHmA2L3E7',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaCar,
      title: 'Auto Insurance',
      description: 'Personal and commercial vehicle coverage',
      url: 'https://forms.gle/w51nuUWXGEcrvz3V8',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Professional Liability',
      description: 'E&O coverage for professionals and businesses',
      url: 'https://forms.gle/D494TQrTWSd85LF98',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <>
      <SEO
        title="Insurance Intake Forms | Quick & Easy | MRECAI"
        description="Complete your insurance intake form online. Personal umbrella, homeowners, auto, commercial, and professional liability forms available. Fast, secure, and easy."
        canonical="/intake-forms"
        keywords="insurance intake forms, insurance application, homeowners insurance form, auto insurance form, commercial insurance form"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Intake Forms', url: '/intake-forms' },
            ]),
          ],
        }}
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
                  Quick & Easy Process
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Client <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Intake Forms</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Get started with personalized service by completing the appropriate intake form below
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our simple 3-step process to get you the coverage you need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FaFileAlt,
                  step: '01',
                  title: 'Complete the Form',
                  description: 'Fill out the appropriate intake form with your information and coverage needs'
                },
                {
                  icon: FaClock,
                  step: '02',
                  title: 'We Review & Respond',
                  description: 'Our team reviews your submission and contacts you within 24 hours'
                },
                {
                  icon: FaCheckCircle,
                  step: '03',
                  title: 'Get Your Coverage',
                  description: 'We provide personalized quotes and help you secure the best coverage'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                      <item.icon className="text-3xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Intake Forms */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Insurance <span className="gradient-text">Intake Forms</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the form that matches your insurance needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {insuranceForms.map((form, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${form.color} rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <form.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {form.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {form.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Complete Form
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* General Client Intake */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 border border-primary-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FaFileAlt className="text-3xl text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">
                      General Client Intake Form
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Not sure which form to use? Start with our general client intake form. 
                      This comprehensive form helps us understand your needs across all our service areas 
                      including consulting, insurance, tax, and technology solutions.
                    </p>
                    <a
                      href="https://forms.gle/NgZ8Y1XjwHgzPimm7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                    >
                      Complete General Intake Form
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                What to <span className="gradient-text">Expect</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaClock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Response Time</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team reviews all submissions within 24 hours. You'll receive a confirmation 
                      email immediately, followed by a personalized response from one of our experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Next Steps</h3>
                    <p className="text-gray-600 leading-relaxed">
                      After reviewing your information, we'll schedule a consultation to discuss your 
                      needs in detail and provide personalized recommendations and quotes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaLock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Your Privacy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All information submitted through our intake forms is encrypted and secure. 
                      We never share your personal information with third parties without your consent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Questions?</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      If you have questions about which form to complete or need assistance, 
                      we're here to help.
                    </p>
                    <a href="mailto:Matthew@mrecai.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                      Matthew@mrecai.com
                    </a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a href="tel:929-919-3574" className="text-primary-600 hover:text-primary-700 font-semibold">
                      929-919-3574
                    </a>
                  </div>
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
              <h2 className="text-4xl font-bold mb-6">Prefer to Talk First?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Schedule a free consultation to discuss your needs before completing a form
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Book Free Consultation
                </a>
                <a
                  href="tel:929-919-3574"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Call Now: 929-919-3574
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IntakeForms;
