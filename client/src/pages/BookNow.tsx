import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaClipboardList, FaBullseye, FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO } from '../utils/constants';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const BookNow = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO
        title="Book Free Consultation | Schedule with MRECAI Today"
        description="Schedule your free consultation with MRECAI. Choose a convenient time, get expert advice, and start your journey to business success. Flexible scheduling available."
        canonical="/book-now"
        keywords="book consultation, schedule appointment, free consultation, business consulting appointment, insurance consultation"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Book Now', url: '/book-now' },
            ]),
          ],
        }}
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

      <div className="pt-20">
        {/* Hero */}
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
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold">
                  <FaCalendarAlt className="mr-2" />
                  Free Consultation
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Book Your <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Consultation</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Schedule a free consultation with our experts. Choose a time that works best for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Why Book a <span className="gradient-text">Consultation?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: FaCheckCircle,
                  title: 'Free & No Obligation',
                  description: 'Get expert advice with no strings attached. We\'re here to help, not pressure.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaClock,
                  title: 'Flexible Scheduling',
                  description: 'Choose a time that works for you. We offer appointments throughout the week.',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaBullseye,
                  title: 'Personalized Solutions',
                  description: 'Receive tailored recommendations based on your unique needs and goals.',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <benefit.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Choose Your <span className="gradient-text">Time Slot</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Select a convenient time for your consultation. We'll discuss your needs and how we can help you achieve your goals.
                </p>
              </div>

              {/* Calendly Inline Widget */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div
                  className="calendly-inline-widget"
                  data-url={COMPANY_INFO.calendlyUrl}
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 text-center bg-gradient-to-r from-primary-50 to-white rounded-xl p-8 border border-primary-100">
                <p className="text-gray-700 mb-4 text-lg">
                  Prefer to talk now? Give us a call!
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  <FaPhone className="mr-3" />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Initial Call</h3>
                <p className="text-gray-600">
                  We'll discuss your needs and goals in a friendly, no-pressure conversation.
                </p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClipboardList className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Assessment</h3>
                <p className="text-gray-600">
                  Our experts will analyze your situation and identify opportunities.
                </p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBullseye className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Custom Plan</h3>
                <p className="text-gray-600">
                  Receive a tailored strategy designed specifically for your success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookNow;
