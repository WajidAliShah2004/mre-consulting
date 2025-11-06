import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter, 
  FaPhone, 
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaHeart,
  FaYelp
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';
import logoImage from '../../../images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'About the Company', path: '/about/company' },
    { name: 'Our Founder', path: '/about/founder' },
    { name: 'Strategic Partners', path: '/about/partners' },
    { name: 'Services', path: '/services' },
    { name: 'AI Consulting', path: '/ai-consulting' },
    { name: 'Intake Forms', path: '/intake-forms' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Advice & Education', path: '/advice-education' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/book-now' }
  ];

  const services = [
    'Business Consulting',
    'Digital Marketing',
    'Insurance Services',
    'Tax & Accounting',
    'AI & Technology',
    'Automation Solutions'
  ];

  const socialLinks = [
    { icon: FaFacebook, url: SOCIAL_LINKS.facebook, name: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, name: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram, name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaYoutube, url: SOCIAL_LINKS.youtube, name: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaTwitter, url: SOCIAL_LINKS.twitter, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaYelp, url: SOCIAL_LINKS.yelp, name: 'Yelp', color: 'hover:text-red-600' },
    { icon: SiTiktok, url: SOCIAL_LINKS.tiktok, name: 'TikTok', color: 'hover:text-gray-300' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="inline-block mb-6 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-xl inline-block border-2 border-white/20"
                >
                  <img 
                    src={logoImage} 
                    alt="MRE Consulting & Insurance" 
                    className="h-28 w-auto object-contain drop-shadow-md"
                    style={{ filter: 'contrast(1.15) brightness(1.1)' }}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering individuals, families, and businesses with expert consulting and insurance solutions.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                    aria-label={social.name}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300"
                    >
                      <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                Contact Us
              </h4>
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="group flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                    <FaPhone className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Call Us</div>
                    <div className="font-semibold">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="group flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                    <FaEnvelope className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Email Us</div>
                    <div className="font-semibold break-all">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Service Support</div>
                    <div className="font-semibold">24/7 Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p className="flex items-center justify-center md:justify-start flex-wrap">
                <span>&copy; {currentYear} MRE Consulting & Insurance. All rights reserved.</span>
                <span className="mx-2 hidden md:inline">|</span>
                <span className="flex items-center">
                  Made with <FaHeart className="text-red-500 mx-1 text-xs" /> by{' '}
                  <a 
                    href="https://www.upwork.com/agencies/1913615184399103598/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-1 text-primary-400 hover:text-primary-300 transition-colors underline"
                  >
                    NovaEdge Solution
                  </a>
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
