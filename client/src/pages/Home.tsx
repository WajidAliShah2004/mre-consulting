import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaPhone, FaEnvelope, FaBullseye, FaRocket, FaBriefcase, FaCheck, FaArrowRight } from 'react-icons/fa';
import { SERVICES, REASONS_TO_CHOOSE, COMPANY_INFO } from '../utils/constants';
import SEO from '../components/common/SEO';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../utils/schemas';

// Continuous Typewriter component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const handleType = () => {
        const fullText = text;
        
        if (!isDeleting) {
          // Typing
          if (displayedText.length < fullText.length) {
            setDisplayedText(fullText.slice(0, displayedText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 300);
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(fullText.slice(0, displayedText.length - 1));
          } else {
            // Finished deleting, start typing again
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
        }
      };

      const typingSpeed = isDeleting ? 2 : 5;
      const timer = setTimeout(handleType, typingSpeed);

      return () => clearTimeout(timer);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [displayedText, isDeleting, text, delay, loopNum]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

const Home = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <SEO
        title="MRECAI | Business Consulting & Insurance Services"
        description="Expert business consulting, insurance, and AI technology solutions. 500+ clients served, 4.9/5 rating, 98% success rate. Book your free consultation today."
        canonical="/"
        keywords="business consulting, insurance services, digital marketing, tax accounting, AI technology, business automation, small business consulting"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema,
            localBusinessSchema,
            websiteSchema,
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
        {/* Gradient Background with Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
          
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Orbs - Enhanced Blue Animation */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary-600/25 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Additional Primary Blue Animated Orbs */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '5s' }}></div>
          
          {/* Animated Blue Waves */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary-500/10 to-transparent animate-pulse"></div>
          </div>
        </div>

        <div className="container-custom relative z-10 text-white py-16">
          {/* Centered SVG Logo - Full Width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <motion.svg
              viewBox="0 0 1000 450"
              className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[850px] h-auto"
              animate={prefersReducedMotion ? {} : { 
                y: [0, -8, 0],
              }}
              transition={prefersReducedMotion ? {} : {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: 'drop-shadow(0 0 40px rgba(0, 168, 232, 0.6))',
              }}
              role="img"
              aria-label="MRE Consulting & Insurance - Business Management, Accounting, AI Technology, & Insurance Consulting"
            >
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="mreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00A8E8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#0088C8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#006BA8', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* M Letter */}
              <text
                x="300"
                y="140"
                textAnchor="middle"
                className="font-black"
                style={{
                  fontSize: '160px',
                  fill: 'url(#mreGradient)',
                  fontWeight: '900'
                }}
              >
                M
              </text>
              
              {/* Vertical separator 1 */}
              <line x1="410" y1="30" x2="410" y2="150" stroke="url(#mreGradient)" strokeWidth="8" />
              
              {/* R Letter */}
              <text
                x="500"
                y="140"
                textAnchor="middle"
                className="font-black"
                style={{
                  fontSize: '160px',
                  fill: 'url(#mreGradient)',
                  fontWeight: '900'
                }}
              >
                R
              </text>
              
              {/* Vertical separator 2 */}
              <line x1="590" y1="30" x2="590" y2="150" stroke="url(#mreGradient)" strokeWidth="8" />
              
              {/* E Letter */}
              <text
                x="700"
                y="140"
                textAnchor="middle"
                className="font-black"
                style={{
                  fontSize: '160px',
                  fill: 'url(#mreGradient)',
                  fontWeight: '900'
                }}
              >
                E
              </text>

              {/* Underline below M|R|E */}
              <line x1="180" y1="165" x2="820" y2="165" stroke="#1E3A5F" strokeWidth="4" />

              {/* CONSULTING & INSURANCE */}
              <text
                x="500"
                y="220"
                textAnchor="middle"
                className="font-bold"
                style={{
                  fontSize: '42px',
                  fill: '#1E3A5F',
                  letterSpacing: '6px',
                  fontWeight: '700'
                }}
              >
                CONSULTING & INSURANCE
              </text>

              {/* Tagline */}
              <text
                x="500"
                y="270"
                textAnchor="middle"
                className="font-semibold"
                style={{
                  fontSize: '28px',
                  fill: '#00A8E8',
                  letterSpacing: '2px',
                  fontWeight: '600'
                }}
              >
                BUSINESS MANAGEMENT, ACCOUNTING,
              </text>
              <text
                x="500"
                y="310"
                textAnchor="middle"
                className="font-semibold"
                style={{
                  fontSize: '28px',
                  fill: '#00A8E8',
                  letterSpacing: '2px',
                  fontWeight: '600'
                }}
              >
                AI TECHNOLOGY, & INSURANCE CONSULTING
              </text>

              {/* Contact Info */}
              <text
                x="280"
                y="370"
                textAnchor="start"
                className="font-semibold"
                style={{
                  fontSize: '32px',
                  fill: '#00A8E8',
                  letterSpacing: '1px'
                }}
              >
                ☎ 929-919-3574
              </text>
              
              <text
                x="280"
                y="415"
                textAnchor="start"
                className="font-semibold"
                style={{
                  fontSize: '32px',
                  fill: '#00A8E8',
                  letterSpacing: '1px'
                }}
              >
                ✉ Matthew@MRECAI.com
              </text>
            </motion.svg>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left flex flex-col justify-center space-y-8"
            >

              {/* Benefit-Driven Headline */}
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Your Partner in Business Growth, Financial Security, and Technological Innovation
              </motion.h1>

              {/* Mandatory Opening Statement - VERBATIM */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Empowering success for individuals, families, and businesses with expert consulting and business technology, insurance, and finance.
              </motion.p>
              
              {/* Supporting Copy */}
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Comprehensive solutions for individuals, families, and businesses seeking growth, efficiency, and security.
              </motion.p>

              {/* Enhanced CTA Buttons with High Contrast */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <Link 
                  to="/book-now" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-primary-400/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-navy-900"
                  aria-label="Book a free consultation with MRE Consulting & Insurance"
                >
                  <span className="relative z-10 flex items-center">
                    Book Free Consultation
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
                  aria-label="Explore our services"
                >
                  Explore Services
                </Link>
              </motion.div>

              {/* Contact Info with Enhanced Accessibility */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="flex items-center space-x-3 text-primary-300 hover:text-primary-200 transition-colors group focus:outline-none focus:ring-4 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg p-2"
                  aria-label={`Call us at ${COMPANY_INFO.phone}`}
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <FaPhone className="text-xl text-primary-300" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Call Us Now</div>
                    <div className="text-lg font-semibold">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center space-x-3 text-primary-300 hover:text-primary-200 transition-colors group focus:outline-none focus:ring-4 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg p-2"
                  aria-label={`Email us at ${COMPANY_INFO.email}`}
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <FaEnvelope className="text-xl text-primary-300" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Email Us</div>
                    <div className="text-sm font-semibold">{COMPANY_INFO.email}</div>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:grid grid-cols-2 gap-8 content-center"
            >
              {[
                { icon: FaBullseye, number: '180', label: 'Clients Served', color: 'from-primary-500 to-primary-600', bgColor: 'bg-primary-500/20', link: '/about' },
                { icon: FaStar, number: '4.9/5', label: 'Client Rating', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500/20', link: '/testimonials' },
                { icon: FaBriefcase, number: '2024', label: 'Founded', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/20', link: '/about' },
                { icon: FaRocket, number: '98%', label: 'Success Rate', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/20', link: '/testimonials' },
              ].map((stat, index) => (
                <Link
                  key={index}
                  to={stat.link}
                  className="block"
                >
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    y: 30
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0
                  }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="group relative bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden h-40 w-full hover:z-20"
                >
                  {/* Modern Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-white transform translate-x-3 -translate-y-3"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-white transform -translate-x-2 translate-y-2"></div>
                  </div>

                  {/* Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`}></div>
                  
                  {/* Content Container - Horizontal layout */}
                  <div className="relative z-10 flex items-center h-full space-x-5">
                    {/* Icon Section */}
                    <motion.div 
                      className={`flex-shrink-0 w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6, ease: "easeOut" }
                      }}
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      >
                        <stat.icon className="text-2xl text-white drop-shadow-lg" />
                      </motion.div>
                      
                      {/* Subtle Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                        animate={{
                          opacity: [0, 0.2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.7
                        }}
                      />
                    </motion.div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      {/* Number */}
                      <motion.div 
                        className="text-3xl font-bold text-white mb-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      >
                        <motion.span
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(255,255,255,0)",
                              "0 0 20px rgba(255,255,255,0.3)",
                              "0 0 0px rgba(255,255,255,0)"
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.8
                          }}
                        >
                          {stat.number}
                        </motion.span>
                      </motion.div>
                      
                      {/* Label */}
                      <motion.div 
                        className="text-sm text-gray-200 font-medium leading-tight"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                      >
                        {stat.label}
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                    style={{ transform: 'skewX(-20deg)' }}
                  />

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl transition-all duration-300 group-hover:h-1.5`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>


        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-8" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Who We Are</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MRE Consulting & Insurance stands at the intersection of traditional expertise and cutting-edge innovation. 
              We're not just consultants—we're your strategic partners in navigating the complex landscape of modern business, 
              finance, and technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a foundation built on decades of combined experience and a forward-thinking approach powered by AI and automation, 
              we deliver personalized solutions that drive measurable results. Whether you're an individual planning for the future, 
              a family protecting what matters most, or a business scaling to new heights, we bring the expertise, technology, and 
              dedication to help you succeed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment goes beyond transactions. We build lasting relationships, understand your unique challenges, and craft 
              strategies that align with your goals. From comprehensive insurance coverage to strategic business consulting, from tax 
              optimization to cutting-edge AI implementation—we're here to empower your success at every stage.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto pt-4">
              <Link to="/about" className="text-center group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2 group-hover:scale-110 transition-transform">180</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-primary-600 transition-colors">Clients Served</div>
              </Link>
              <Link to="/about" className="text-center group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2 group-hover:scale-110 transition-transform">2024</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-primary-600 transition-colors">Founded</div>
              </Link>
              <Link to="/testimonials" className="text-center group cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-primary-600 transition-colors">Satisfaction Rate</div>
              </Link>
              <Link to="/book-now" className="text-center group cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-primary-600 transition-colors">Available Support</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI, Technology & Automation Consulting Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-md">
                🚀 The Future is Now
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">AI, Technology & Automation Consulting</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-6">
              Reinventing What's Possible with Artificial Intelligence
            </h3>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 border border-primary-100"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                At MRE Consulting & Insurance, we don't just keep up with technology — <strong className="text-primary-600">we lead with it</strong>.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our <strong>AI, Technology & Automation Consulting Division</strong> empowers individuals, families, and businesses to simplify, streamline, and scale every part of their financial and operational lives through cutting-edge automation and intelligent systems.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                We help you harness AI-powered tools, predictive analytics, intelligent automation, and digital transformation to unlock your next level of growth — while maintaining security, compliance, and complete financial clarity.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Whether you're an individual looking to automate personal finances, a small business owner seeking efficiency and growth, or a corporation aiming to scale smarter, <strong className="text-primary-600">MRECAI gives you the competitive edge you've been waiting for</strong>.
              </p>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: '⚡', text: 'Streamline workflows and reduce manual effort' },
                  { icon: '🎯', text: 'Improve accuracy, security, and decision-making' },
                  { icon: '💰', text: 'Lower costs while increasing productivity' },
                  { icon: '📈', text: 'Unlock growth through automation and intelligence' },
                  { icon: '✅', text: 'Stay compliant while adopting advanced technologies' }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3 bg-gradient-to-r from-primary-50 to-white p-4 rounded-lg border border-primary-100"
                  >
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-10 text-center"
              >
                <p className="text-xl font-semibold text-primary-600 mb-6">
                  Welcome to the future of consulting — built by MRE.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Explore AI Consulting Services
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="gradient-text">MRE Consulting & Insurance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional value and results for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REASONS_TO_CHOOSE.map((reason, index) => (
              <Link
                key={index}
                to={reason.link}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary-200 cursor-pointer overflow-hidden h-full"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.15,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <reason.icon className="text-2xl text-primary-600" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold mb-2 text-navy-900 group-hover:text-primary-600 transition-colors relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  >
                    {reason.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  >
                    {reason.description}
                  </motion.p>
                  
                  {/* Learn More Indicator */}
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all relative z-10">
                    <span>Learn More</span>
                    <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4" data-aos="fade-up">
            <div className="inline-block">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with Background */}
                <div className="relative mb-4">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center shadow-sm"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  >
                    <service.icon className="text-2xl text-primary-600" />
                  </motion.div>
                  {/* Decorative Element */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-500/10 rounded-full blur-lg group-hover:bg-primary-500/20 transition-colors"></div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-navy-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <FaCheck className="text-primary-500 mr-2 mt-1 flex-shrink-0 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-2 transition-all relative z-10"
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </Link>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8" data-aos="fade-up">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our <span className="text-primary-400">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "John Doe", role: "CEO, Tech Company", text: "MRECAI Consulting transformed our business operations. Their expertise in AI and automation helped us increase efficiency by 40%." },
              { name: "Sarah Smith", role: "CFO, Finance Corp", text: "Outstanding service! Their tax planning strategies saved us thousands while ensuring full compliance. Highly professional team." },
              { name: "Mike Johnson", role: "Owner, Retail Business", text: "The insurance solutions they provided gave us peace of mind. Their personalized approach made all the difference." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-navy-800/50 backdrop-blur-sm p-6 rounded-2xl border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-t-2xl"></div>
                
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                >
                  <FaQuoteLeft className="text-primary-400 text-3xl mb-4" />
                </motion.div>
                
                <p className="text-gray-200 mb-4 leading-relaxed min-h-[80px]">
                  "<TypewriterText text={testimonial.text} delay={i * 50 + 50} />"
                </p>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + index * 0.1, duration: 0.3 }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="border-t border-primary-500/20 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-primary-300">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link 
              to="/testimonials" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read More Reviews
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Content Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                {/* Heading */}
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Ready to <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Transform</span> Your Business?
                </motion.h2>

                {/* Description */}
                <motion.p 
                  className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Schedule your free consultation today and discover how our expert solutions can help you achieve your goals
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link 
                    to="/book-now" 
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-navy-900 bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Free Consultation
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                  
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  >
                    <FaPhone className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs font-normal opacity-80">Call Now</div>
                      <div className="text-base font-bold">{COMPANY_INFO.phone}</div>
                    </div>
                  </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaCheck className="text-primary-400" />
                    <span className="text-sm">No Commitment Required</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaCheck className="text-primary-400" />
                    <span className="text-sm">Expert Guidance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaCheck className="text-primary-400" />
                    <span className="text-sm">Personalized Solutions</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
