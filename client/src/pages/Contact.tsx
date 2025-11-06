import SEO from '../components/common/SEO';
import { localBusinessSchema, breadcrumbSchema } from '../utils/schemas';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaStar, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    // Comprehensive email validation regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    if (!email) {
      setEmailError('Email address is required');
      return false;
    }
    
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address (e.g., john@example.com)');
      return false;
    }
    
    // Additional validation checks
    if (email.length > 254) {
      setEmailError('Email address is too long');
      return false;
    }
    
    const [localPart, domain] = email.split('@');
    
    if (localPart.length > 64) {
      setEmailError('Email address format is invalid');
      return false;
    }
    
    if (domain.split('.').some(part => part.length > 63)) {
      setEmailError('Email domain format is invalid');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate email on change to provide real-time feedback
    if (name === 'email' && typeof value === 'string') {
      // Clear error when user starts typing
      if (emailError && value.length > 0) {
        setEmailError('');
      }
    }
  };

  const handleEmailBlur = () => {
    // Validate email when user leaves the field
    if (formData.email) {
      validateEmail(formData.email);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      // Scroll to email field to show error
      document.getElementById('email')?.focus();
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setNewsletterStatus('idle');

    try {
      // Handle newsletter subscription if checkbox is checked
      if (formData.newsletter) {
        try {
          const newsletterResponse = await fetch(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: formData.email }),
          });

          const newsletterData = await newsletterResponse.json();

          if (newsletterResponse.ok) {
            setNewsletterStatus('success');
          } else {
            // If already subscribed, treat as success
            if (newsletterData.message?.includes('already subscribed')) {
              setNewsletterStatus('success');
            } else {
              setNewsletterStatus('error');
              console.error('Newsletter subscription failed:', newsletterData);
            }
          }
        } catch (newsletterError) {
          setNewsletterStatus('error');
          console.error('Newsletter subscription error:', newsletterError);
        }
      }

      // Submit contact form to backend
      const contactResponse = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      });

      const contactData = await contactResponse.json();

      if (!contactResponse.ok) {
        throw new Error(contactData.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setNewsletterStatus('idle');
      }, 5000);
    }
  };

  const socialMedia = [
    { icon: FaFacebook, name: 'Facebook', url: SOCIAL_LINKS.facebook, color: 'hover:text-blue-600' },
    { icon: FaLinkedin, name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, color: 'hover:text-blue-700' },
    { icon: FaInstagram, name: 'Instagram', url: SOCIAL_LINKS.instagram, color: 'hover:text-pink-600' },
    { icon: FaYoutube, name: 'YouTube', url: SOCIAL_LINKS.youtube, color: 'hover:text-red-600' },
    { icon: FaTwitter, name: 'Twitter', url: SOCIAL_LINKS.twitter, color: 'hover:text-blue-400' }
  ];

  return (
    <>
      <SEO
        title="Contact MRECAI | Get Your Free Consultation Today"
        description="Contact MRE Consulting & Insurance. Call 929-919-3574 or email Matthew@MRECAI.com. Book your free consultation and get expert advice. 24/7 support available."
        canonical="/contact"
        keywords="contact MRECAI, free consultation, business consulting contact, insurance quote, get in touch"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              ...localBusinessSchema,
              '@type': 'ContactPage',
            },
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Contact', url: '/contact' },
            ]),
          ],
        }}
      />

      <div className="pt-20">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We're here to help. Reach out to us and let's discuss how we can support your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Phone */}
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Call Us</h3>
                      <p className="text-primary-600 font-semibold text-lg">{COMPANY_INFO.phone}</p>
                      <p className="text-sm text-gray-600 mt-1">Click to call</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Email Us</h3>
                      <p className="text-blue-600 font-semibold break-all">{COMPANY_INFO.email}</p>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Service Support</h3>
                      <p className="text-green-600 font-semibold text-lg">24/7 Available</p>
                      <p className="text-sm text-gray-600 mt-1">Always here when you need us</p>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-bold text-navy-900 mb-4 text-lg">Connect With Us</h3>
                  <div className="flex space-x-3">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all shadow-md hover:shadow-lg border border-gray-200`}
                        aria-label={social.name}
                      >
                        <social.icon className="text-xl" />
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Follow us for updates, tips, and industry insights
                  </p>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-navy-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleEmailBlur}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                            emailError 
                              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-300 focus:ring-primary-500 focus:border-transparent'
                          }`}
                          placeholder="john@example.com"
                          aria-invalid={emailError ? 'true' : 'false'}
                          aria-describedby={emailError ? 'email-error' : undefined}
                        />
                        {emailError && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            id="email-error"
                            className="mt-2 text-sm text-red-600 flex items-center"
                            role="alert"
                          >
                            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {emailError}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="insurance">Insurance Services</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="technology">AI & Technology</option>
                        <option value="tax">Tax & Accounting</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    {/* Newsletter Checkbox */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                          <span className="font-semibold">Subscribe to our newsletter</span> for updates, tips, and exclusive offers
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 ml-7">
                        By subscribing, you agree to receive marketing emails. You can unsubscribe at any time. 
                        View our <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200">
                          <FaCheckCircle />
                          <span>Message sent successfully! We'll get back to you soon.</span>
                        </div>
                        {newsletterStatus === 'success' && (
                          <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200">
                            <FaCheckCircle />
                            <span>You've been subscribed to our newsletter!</span>
                          </div>
                        )}
                        {newsletterStatus === 'error' && (
                          <div className="text-amber-600 bg-amber-50 p-4 rounded-lg border border-amber-200">
                            Newsletter subscription failed, but your message was sent. You can subscribe later from our website.
                          </div>
                        )}
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 bg-red-50 p-4 rounded-lg border border-red-200"
                      >
                        Something went wrong. Please try again or email us directly.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews Section - Placeholder */}
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
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our satisfied clients have to say about working with us
              </p>
            </motion.div>

            {/* Review Platforms */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {[
                { platform: 'Google', rating: 4.9, reviews: 150, color: 'from-primary-500 to-primary-600' },
                { platform: 'Yelp', rating: 4.8, reviews: 89, color: 'from-red-500 to-red-600' },
                { platform: 'Facebook', rating: 4.9, reviews: 120, color: 'from-primary-600 to-primary-700' }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <FaStar className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl mb-2">{review.platform}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-primary-600 mb-1">{review.rating}</p>
                  <p className="text-sm text-gray-600">{review.reviews} reviews</p>
                  <button className="mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Write a Review →
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
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Schedule a free consultation to discuss your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Book Free Consultation
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
