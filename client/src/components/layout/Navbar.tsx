import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';
import logoImage from '../../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Advice and Education', path: '/advice-education' },
    { name: 'Intake Forms', path: '/intake-forms' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutLinks = [
    { name: 'Overview', path: '/about' },
    { name: 'About the Company', path: '/about/company' },
    { name: 'Our Founder', path: '/about/founder' },
    { name: 'Strategic Partners', path: '/about/partners' },
  ];

  const servicesLinks = [
    { name: 'All Services', path: '/services' },
    { name: 'AI & Technology Consulting', path: '/ai-consulting' },
  ];

  const isAboutActive = location.pathname.startsWith('/about');
  const isServicesActive = location.pathname === '/services' || location.pathname === '/ai-consulting';

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Top Contact Bar */}
      <div className={`fixed w-full z-50 bg-navy-900 text-white transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <FaPhone className="text-xs flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope className="text-xs flex-shrink-0" />
                <span className="hidden sm:inline truncate max-w-[150px] md:max-w-none">{COMPANY_INFO.email}</span>
              </a>
            </div>
            <div className="text-gray-400 text-xs hidden xl:block">
              24/7 Service Support Available
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-40 bg-white shadow-lg transition-all duration-300 ${
          isScrolled
            ? 'top-0 py-2'
            : 'top-10 py-2'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-1 sm:gap-2 lg:gap-3 xl:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <img 
                  src={logoImage} 
                  alt="MRE Consulting & Insurance" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-10 sm:h-12 md:h-14 lg:h-16 w-auto' : 'h-12 sm:h-14 md:h-16 lg:h-20 w-auto'
                  } object-contain max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-none`}
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-1 xl:mx-2 2xl:mx-4">
              <div className="flex items-center gap-0 lg:gap-0.5 xl:gap-1 2xl:gap-2">
              {/* Home Link */}
              <Link
                to="/"
                className="relative group"
              >
                <motion.div
                  className={`px-1.5 lg:px-2 xl:px-3 2xl:px-5 py-2 lg:py-2.5 font-semibold text-xs lg:text-sm xl:text-base transition-all duration-300 rounded-lg relative ${
                    location.pathname === '/'
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                  {/* Active indicator - bottom border */}
                  {location.pathname === '/' && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
              
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <motion.button
                  className={`px-1.5 lg:px-2 xl:px-3 2xl:px-5 py-2 lg:py-2.5 font-semibold text-xs lg:text-sm xl:text-base transition-all duration-300 rounded-lg flex items-center gap-0.5 lg:gap-1 relative ${
                    isAboutActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>About</span>
                  <motion.div
                    animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.div>
                  {/* Active indicator - bottom border */}
                  {isAboutActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      initial={false}
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      {aboutLinks.map((link, index) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`block px-5 py-3 font-semibold transition-all ${
                            location.pathname === link.path
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                          } ${index !== aboutLinks.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <motion.button
                  className={`px-1.5 lg:px-2 xl:px-3 2xl:px-5 py-2 lg:py-2.5 font-semibold text-xs lg:text-sm xl:text-base transition-all duration-300 rounded-lg flex items-center gap-0.5 lg:gap-1 relative ${
                    isServicesActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.div>
                  {/* Active indicator - bottom border */}
                  {isServicesActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                      initial={false}
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      {servicesLinks.map((link, index) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`block px-5 py-3 font-semibold transition-all ${
                            location.pathname === link.path
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                          } ${index !== servicesLinks.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Remaining Navigation Links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <motion.div
                    className={`px-1.5 lg:px-2 xl:px-3 2xl:px-5 py-2 lg:py-2.5 font-semibold text-xs lg:text-sm xl:text-base transition-all duration-300 rounded-lg relative whitespace-nowrap ${
                      location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    {/* Active indicator - bottom border */}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              </div>
            </nav>
            
            {/* CTA Button - Far Right */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block flex-shrink-0"
            >
              <Link 
                to="/book-now" 
                className={`px-2 lg:px-3 xl:px-4 2xl:px-6 py-1.5 lg:py-2 text-white font-bold text-xs lg:text-sm xl:text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1 xl:gap-2 whitespace-nowrap ${
                  location.pathname === '/book-now'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700'
                }`}
              >
                <span className="hidden 2xl:inline">{location.pathname === '/book-now' ? 'You\'re Here!' : 'Book Now'}</span>
                <span className="2xl:hidden">Book</span>
                {location.pathname !== '/book-now' && (
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                )}
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 text-primary-600 hover:bg-primary-50 bg-white shadow-md border border-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 flex-shrink-0"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes className="text-xl sm:text-2xl" /> : <FaBars className="text-xl sm:text-2xl" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 sm:mt-6 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col p-4 sm:p-6 space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
                  {/* Home Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0 }}
                  >
                    <Link
                      to="/"
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all relative ${
                        location.pathname === '/'
                          ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      Home
                    </Link>
                  </motion.div>
                  
                  {/* Mobile About Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                  >
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all ${
                        isAboutActive
                          ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>About</span>
                      <motion.div
                        animate={{ rotate: mobileAboutOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-xs" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {mobileAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-1"
                        >
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                location.pathname === link.path
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Mobile Services Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.10 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all ${
                        isServicesActive
                          ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>Services</span>
                      <motion.div
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-xs" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-1"
                        >
                          {servicesLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                location.pathname === link.path
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  {/* Remaining Navigation Links */}
                  {navLinks.slice(1).map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 3) * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all relative ${
                          location.pathname === link.path
                            ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <div className="border-t border-gray-100 my-4"></div>
                  
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center space-x-3 px-4 py-3 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all"
                  >
                    <FaPhone />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  
                  {/* CTA Button - Separate from navigation, always prominent */}
                  <Link 
                    to="/book-now" 
                    className={`block text-center px-6 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all mt-2 ${
                      location.pathname === '/book-now'
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : 'bg-gradient-to-r from-primary-500 to-primary-600'
                    }`}
                  >
                    {location.pathname === '/book-now' ? 'You\'re on the Booking Page!' : 'Book Free Consultation'}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
