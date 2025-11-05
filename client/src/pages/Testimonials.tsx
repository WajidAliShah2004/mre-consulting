import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaYelp, FaQuoteLeft, FaUserCircle, FaAward, FaThumbsUp, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const Testimonials = () => {
  const [filter, setFilter] = useState<'all' | 'google' | 'yelp'>('all');

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      role: 'CEO',
      rating: 5,
      text: 'MRECAI Consulting transformed our business operations with their AI and automation solutions. We saw a 40% increase in efficiency within the first quarter. Their team is professional, knowledgeable, and always available.',
      platform: 'google',
      date: 'January 2024',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Johnson Family Business',
      role: 'Business Owner',
      rating: 5,
      text: 'The insurance consulting services were exceptional. They helped us find the perfect coverage at competitive rates. I highly recommend their services to anyone looking for comprehensive insurance solutions.',
      platform: 'yelp',
      date: 'January 2024',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Chen Enterprises',
      role: 'CFO',
      rating: 5,
      text: 'Outstanding tax and accounting services. Professional, reliable, and always available when we need them. They saved us thousands in taxes while ensuring full compliance.',
      platform: 'google',
      date: 'January 2024',
      avatar: '👨‍💻'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      company: 'Rodriguez Marketing',
      role: 'Marketing Director',
      rating: 5,
      text: 'Their digital marketing expertise helped us triple our online presence. The team is creative, data-driven, and delivers results. Best investment we made this year!',
      platform: 'google',
      date: 'December 2023',
      avatar: '👩‍🎨'
    },
    {
      id: 5,
      name: 'David Thompson',
      company: 'Thompson Construction',
      role: 'Owner',
      rating: 5,
      text: 'MRECAI helped us streamline our business management processes. Their consulting services are top-notch and the ROI has been incredible. Highly recommended!',
      platform: 'yelp',
      date: 'December 2023',
      avatar: '👷‍♂️'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      company: 'Anderson Retail',
      role: 'Store Manager',
      rating: 5,
      text: 'Exceptional service from start to finish. They took the time to understand our needs and delivered solutions that exceeded our expectations. True professionals!',
      platform: 'google',
      date: 'November 2023',
      avatar: '👩‍💼'
    },
    {
      id: 7,
      name: 'Robert Martinez',
      company: 'Martinez Law Firm',
      role: 'Partner',
      rating: 5,
      text: 'Their attention to detail and commitment to excellence is unmatched. We have been working with MRECAI for over 3 years and couldn\'t be happier.',
      platform: 'yelp',
      date: 'November 2023',
      avatar: '⚖️'
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      company: 'Lee Healthcare',
      role: 'Administrator',
      rating: 5,
      text: 'The team at MRECAI is simply outstanding. They helped us navigate complex insurance requirements and saved us both time and money. Highly professional!',
      platform: 'google',
      date: 'October 2023',
      avatar: '👩‍⚕️'
    },
    {
      id: 9,
      name: 'James Wilson',
      company: 'Wilson Automotive',
      role: 'Owner',
      rating: 5,
      text: 'Best consulting firm we\'ve worked with. Their AI solutions revolutionized our inventory management. The results speak for themselves - 35% cost reduction!',
      platform: 'google',
      date: 'October 2023',
      avatar: '🚗'
    }
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.platform === filter);

  return (
    <>
      <SEO
        title="Client Testimonials | 4.9/5 Rating | MRECAI Reviews"
        description="Read what our 500+ clients say about MRECAI. 4.9/5 star rating with 98% satisfaction rate. Real reviews from real businesses and individuals."
        canonical="/testimonials"
        keywords="MRECAI reviews, client testimonials, customer reviews, business consulting reviews, insurance reviews, client satisfaction"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: 'MRE Consulting & Insurance',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500',
                bestRating: '5',
                worstRating: '1',
              },
            },
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Testimonials', url: '/testimonials' },
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
                  <FaHeart className="mr-2" />
                  Trusted by 500+ Clients
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Client <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Testimonials</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Hear from our satisfied clients about their experience with MRECAI
              </p>

              {/* Rating Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center justify-center space-x-2 text-3xl"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                  >
                    <FaStar className="text-yellow-400" />
                  </motion.div>
                ))}
                <span className="text-2xl ml-4 font-bold">4.9/5</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Redesigned */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FaStar, number: '4.9', label: 'Average Rating', color: 'from-yellow-500 to-orange-500' },
                { icon: FaUserCircle, number: '500+', label: 'Happy Clients', color: 'from-primary-500 to-primary-600' },
                { icon: FaThumbsUp, number: '98%', label: 'Satisfaction Rate', color: 'from-green-500 to-emerald-500' },
                { icon: FaAward, number: '250+', label: '5-Star Reviews', color: 'from-purple-500 to-pink-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center"
                >
                  <motion.div
                    className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-2xl text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold text-navy-900 mb-2">{stat.number}</div>
                  {stat.label === 'Average Rating' && (
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  )}
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-gray-50 pt-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 mb-12"
            >
              {[
                { value: 'all', label: 'All Reviews', icon: FaStar },
                { value: 'google', label: 'Google', icon: FaGoogle },
                { value: 'yelp', label: 'Yelp', icon: FaYelp }
              ].map((btn) => (
                <motion.button
                  key={btn.value}
                  onClick={() => setFilter(btn.value as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    filter === btn.value
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <btn.icon className="mr-2" />
                  {btn.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Testimonials Grid - Redesigned */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-primary-200 overflow-hidden"
                >
                  {/* Gradient Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>

                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FaQuoteLeft className="text-6xl text-primary-500" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + i * 0.05, duration: 0.2 }}
                        >
                          <FaStar className="text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {testimonial.platform === 'google' ? (
                        <FaGoogle className="text-2xl text-red-500" />
                      ) : (
                        <FaYelp className="text-2xl text-red-600" />
                      )}
                    </motion.div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed relative z-10 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <p className="font-bold text-navy-900">{testimonial.name}</p>
                        <p className="text-sm text-primary-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{testimonial.date}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave Review CTA - Redesigned */}
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FaHeart className="text-4xl text-white" />
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Share Your <span className="text-primary-400">Experience</span>
              </h2>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                We'd love to hear about your experience with MRE Consulting & Insurance. Your feedback helps us serve you better!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all space-x-3"
                >
                  <FaGoogle className="text-2xl text-red-500" />
                  <span>Review on Google</span>
                </motion.a>

                <motion.a
                  href="https://www.yelp.com/writeareview/biz/YOUR_YELP_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all font-bold space-x-3"
                >
                  <FaYelp className="text-2xl" />
                  <span>Review on Yelp</span>
                </motion.a>
              </div>

              {/* Trust Message */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-gray-300 text-sm"
              >
                Your review takes less than 2 minutes and means the world to us! 🌟
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
