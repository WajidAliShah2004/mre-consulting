import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight, FaShieldAlt, FaChartLine, FaCalculator, FaGavel, FaCog, FaHandshake, FaAward, FaGlobe, FaUsers, FaCheckCircle, FaRocket, FaCloud, FaCode, FaDatabase } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const AboutPartners = () => {
  return (
    <>
      <SEO
        title="Strategic Partners | MRECAI Trusted Network"
        description="Discover MRECAI's network of strategic partners including top insurance carriers, financial advisors, accountants, and technology providers."
        canonical="/about/partners"
        keywords="strategic partners, insurance carriers, financial advisors, business partners, technology partners"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
              { name: 'Partners', url: '/about/partners' },
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
              <span className="text-navy-900 font-semibold">Strategic Partners</span>
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
                Our <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Strategic Partners</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Collaborating with industry leaders to deliver exceptional value
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strength in <span className="gradient-text">Collaboration</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At MRE Consulting & Insurance, we believe in the power of strategic partnerships. 
                By collaborating with industry-leading organizations across insurance, finance, technology, 
                and professional services, we're able to provide our clients with comprehensive solutions 
                and unparalleled expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our carefully selected partners share our commitment to excellence, innovation, and 
                client-focused service. Together, we deliver value that goes beyond what any single 
                organization could achieve alone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: FaHandshake, number: '50+', label: 'Strategic Partners' },
                { icon: FaAward, number: '100%', label: 'Vetted & Trusted' },
                { icon: FaGlobe, number: 'National', label: 'Coverage Network' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 text-center border border-primary-100 shadow-md"
                >
                  <stat.icon className="text-4xl text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-navy-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partner: NovaEdge Solutions */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 shadow-lg">
                <FaCog className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Technology <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnership for AI-driven software development and digital transformation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">NovaEdge Solutions</h3>
                  <p className="text-primary-100 text-lg">Empowering Intelligent Digital Transformation</p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Introduction */}
                  <div className="mb-10">
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      MercAI is excited to partner with <strong>NovaEdge Solutions</strong> — a top-rated global 
                      software agency known for building secure, scalable, and high-performance digital solutions 
                      for over 15 years.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This collaboration combines MercAI's cutting-edge artificial intelligence and automation 
                      capabilities with NovaEdge's full-stack engineering and cloud expertise, enabling both 
                      organizations to deliver AI-driven software products and enterprise-grade solutions that 
                      push the boundaries of innovation.
                    </p>
                  </div>

                  {/* Partnership Objectives */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <FaRocket className="text-primary-500 mr-3" />
                      Partnership Objectives
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Integrate advanced AI and machine learning into real-world software products',
                        'Develop smart, data-driven digital platforms tailored to diverse industries',
                        'Accelerate time-to-market through agile, full-cycle product development',
                        'Deliver scalable, secure, and business-impactful technology solutions globally'
                      ].map((objective, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-gradient-to-br from-primary-50 to-white p-4 rounded-lg border border-primary-100">
                          <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why MRE Partnered with NovaEdge */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <FaHandshake className="text-primary-500 mr-3" />
                      Why MRE Partnered with NovaEdge Solutions
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      MRE Consulting & Insurance brings unmatched business, compliance, tax, and insurance expertise — 
                      NovaEdge adds the technical firepower to turn ideas into intelligent, automated systems that scale. 
                      Together, we deliver an end-to-end ecosystem where business strategy meets technical execution.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Rapid communication & personal project attention',
                        'Scalable & flexible engineering teams for projects of any size',
                        'Transparent, documented process with clean, maintainable code',
                        'Deep multi-industry experience across Fintech, Healthcare, E-Commerce, Education, Engineering, Manufacturing, and R&D',
                        'Comfortable with MVPs, long-term builds, and cross-time-zone collaboration'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-gradient-to-br from-primary-50 to-white p-4 rounded-lg border border-primary-100">
                          <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Focus */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <FaCog className="text-primary-500 mr-3" />
                      Collaboration Focus
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-3 flex items-center">
                          <FaRocket className="text-primary-600 mr-2" />
                          MRECAI Leads
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>AI research & model development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Automation solutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Intelligent data systems</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Business strategy & compliance</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-3 flex items-center">
                          <FaCode className="text-primary-600 mr-2" />
                          NovaEdge Solutions Focuses
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Software architecture & full-stack development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Cloud infrastructure & DevOps</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Mobile & desktop applications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>Engineering & embedded systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Core Service Areas - 13 Services */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <FaCloud className="text-primary-500 mr-3" />
                      Core Service Areas Provided by NovaEdge Solutions
                    </h4>
                    <div className="space-y-6">
                      {/* Service 1: AI Integration & Automation */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaRocket className="text-primary-600 mr-2" />
                          1. AI Integration & Automation
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Embedding intelligence across business operations — from data entry and client onboarding to predictive analytics and natural-language interfaces.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Capabilities:</strong> Process automation (RPA), CRM/ERP/cloud AI integration, AI chatbots, predictive lead scoring, OpenAI and LLM-based virtual assistants
                        </p>
                      </div>

                      {/* Service 2: AI & Machine Learning */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaDatabase className="text-primary-600 mr-2" />
                          2. AI & Machine Learning Services
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Full lifecycle ML model development — from dataset design to deployment.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Technologies:</strong> TensorFlow, PyTorch, scikit-learn, NLP, OpenAI APIs, LLM-driven automation, document understanding, OCR, sentiment analysis, predictive modeling
                        </p>
                      </div>

                      {/* Service 3: Web Development */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaGlobe className="text-primary-600 mr-2" />
                          3. Web Development (All Kinds of Websites & Web Applications)
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          End-to-end web engineering — from brochure sites to enterprise SaaS platforms.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Stacks:</strong> React, Angular, Next.js, Vue, Node.js, Laravel, Django, Flask, PHP, Shopify, WordPress, Magento. Corporate websites, e-commerce, client portals, CRMs, PWAs
                        </p>
                      </div>

                      {/* Service 4: Mobile App Development */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCode className="text-primary-600 mr-2" />
                          4. Mobile App Development (iOS & Android)
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Native and cross-platform apps for consumer and enterprise use.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Technologies:</strong> React Native, Flutter, Swift, Kotlin, Android SDK. Insurance apps, financial calculators, customer engagement platforms
                        </p>
                      </div>

                      {/* Service 5: Desktop & UWP */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCog className="text-primary-600 mr-2" />
                          5. Desktop & UWP Application Development
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Custom cross-platform desktop apps for Windows, macOS, and Linux.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Technologies:</strong> Electron.js, .NET, WPF, WinForms, C++, JavaFX, Python. Internal tools, compliance dashboards, offline-ready utilities
                        </p>
                      </div>

                      {/* Service 6: LabVIEW & Embedded */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaDatabase className="text-primary-600 mr-2" />
                          6. LabVIEW, FPGA, Embedded & IoT Development
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Specialized in NI LabVIEW, FPGA, DAQ integration, and custom embedded systems for industrial and research environments.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Solutions:</strong> Automated test systems, FPGA control systems, IoT sensor networks, smart industrial instrumentation
                        </p>
                      </div>

                      {/* Service 7: CAD & Engineering */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCog className="text-primary-600 mr-2" />
                          7. CAD Modeling, Electrical & Avionics Engineering
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Real-world engineering design and prototyping beyond software.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Services:</strong> CAD modeling for product/PCB design, electrical systems engineering, avionics development, embedded electronics for aerospace and robotics
                        </p>
                      </div>

                      {/* Service 8: SEO & AI Indexing */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaGlobe className="text-primary-600 mr-2" />
                          8. SEO & AI Indexing
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Traditional search optimization meets next-generation AI search algorithms.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Services:</strong> SEO strategy, AI-based content indexing for ChatGPT/Gemini/Copilot, structured data optimization
                        </p>
                      </div>

                      {/* Service 9: Copywriting */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCode className="text-primary-600 mr-2" />
                          9. Copywriting & Content Writing
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Expert technical, marketing, and UX copy for websites, apps, ads, and products.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Services:</strong> Landing page copy, technical documentation, SEO-optimized blog content, onboarding flows
                        </p>
                      </div>

                      {/* Service 10: Digital Marketing */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaRocket className="text-primary-600 mr-2" />
                          10. Digital Marketing & Growth Enablement
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Full digital marketing suite designed to amplify brand awareness and generate leads.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Services:</strong> PPC, Google Ads, Meta/LinkedIn campaigns, funnel design, email marketing, retargeting, AI-optimized targeting
                        </p>
                      </div>

                      {/* Service 11: Cloud & DevOps */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCloud className="text-primary-600 mr-2" />
                          11. Cloud & DevOps Engineering
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Scalable backend infrastructure and CI/CD pipelines using AWS, Azure, or GCP.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Solutions:</strong> Containerized microservices (Docker, Kubernetes), CI/CD automation, serverless architecture, infrastructure as code
                        </p>
                      </div>

                      {/* Service 12: UI/UX Design */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCog className="text-primary-600 mr-2" />
                          12. UI/UX Design & Prototyping
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          End-to-end experience design connecting aesthetics with usability.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Tools:</strong> Figma, Adobe XD, Sketch, Miro. Design systems, wireframes, prototypes, accessibility audits
                        </p>
                      </div>

                      {/* Service 13: QA & Testing */}
                      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                        <h5 className="font-bold text-navy-900 mb-2 flex items-center">
                          <FaCheckCircle className="text-primary-600 mr-2" />
                          13. Quality Assurance & Test Automation
                        </h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Comprehensive QA including manual and automated testing.
                        </p>
                        <p className="text-gray-600 text-xs">
                          <strong>Services:</strong> Functional, regression, integration testing, performance/load testing, mobile/API test automation (Postman, Selenium, Cypress, Appium)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technology Stack Summary */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <FaCode className="text-primary-500 mr-3" />
                      Technology Stack Summary
                    </h4>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-navy-900 mb-2">Web & Backend:</p>
                          <p className="text-gray-600">React, Next.js, Angular, Vue, Node.js, Django, Flask, Laravel, PHP, WordPress, Shopify, Magento, Python</p>
                        </div>
                        <div>
                          <p className="font-semibold text-navy-900 mb-2">Mobile:</p>
                          <p className="text-gray-600">React Native, Flutter, Kotlin, Swift, Android/iOS Native</p>
                        </div>
                        <div>
                          <p className="font-semibold text-navy-900 mb-2">Desktop:</p>
                          <p className="text-gray-600">Python, Electron.js, C#, Java, C++, .NET, WPF, WinForms, JavaFX</p>
                        </div>
                        <div>
                          <p className="font-semibold text-navy-900 mb-2">AI & ML:</p>
                          <p className="text-gray-600">Python, TensorFlow, PyTorch, scikit-learn, NLP, LLMs, OpenAI APIs</p>
                        </div>
                        <div>
                          <p className="font-semibold text-navy-900 mb-2">LabVIEW/Embedded:</p>
                          <p className="text-gray-600">NI LabVIEW, FPGA, DAQ, VISA, TCP/Serial, instrument drivers</p>
                        </div>
                        <div>
                          <p className="font-semibold text-navy-900 mb-2">Design & Testing:</p>
                          <p className="text-gray-600">Figma, Sketch, Adobe XD, Miro, Postman, Selenium, Cypress, Appium</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Power of Partnership */}
                  <div className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-8 border border-primary-100">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <FaGlobe className="text-primary-500 mr-3" />
                      The Power of Partnership
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Together, MRE Consulting & Insurance and NovaEdge Solutions Ltd. provide clients with the 
                      ultimate combination of business acumen and technical innovation.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We bridge strategy and execution — combining compliance, accounting, and risk consulting with 
                      AI, automation, and full-scale development.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Whether you need a custom platform, a marketing automation system, AI-driven analytics, or an 
                      engineered hardware-software solution, this partnership delivers results that are intelligent, 
                      compliant, and built to last.
                    </p>
                    <div className="bg-white rounded-lg p-6 border border-primary-200">
                      <h5 className="font-bold text-navy-900 mb-3">Shared Vision</h5>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Both MRECAI and NovaEdge Solutions share a unified vision — to empower global businesses 
                        through intelligent, secure, and scalable digital ecosystems.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We are committed to driving measurable impact by merging AI innovation with software excellence.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary-200">
                      <p className="text-sm text-gray-600 mb-2">Learn more about NovaEdge Solutions:</p>
                      <a 
                        href="https://www.upwork.com/agencies/1913615184399103598/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        Visit NovaEdge on Upwork
                        <FaGlobe className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Financial Advisors */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 shadow-lg">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Financial <span className="gradient-text">Advisors</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trusted financial advisory partners providing wealth management, investment planning, 
                and retirement strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Wealth Management Partners',
                  description: 'Comprehensive wealth management services for high-net-worth individuals and families',
                  services: ['Investment Management', 'Estate Planning', 'Tax Optimization', 'Retirement Planning']
                },
                {
                  name: 'Financial Planning Specialists',
                  description: 'Holistic financial planning services for individuals and businesses at all stages',
                  services: ['Financial Goal Setting', 'Risk Assessment', 'Portfolio Management', 'Insurance Planning']
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FaChartLine className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {partner.services.map((service, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-primary-500 mr-2 mt-0.5">•</span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Financial Partner: Ardis */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 shadow-lg">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Investment & Financial Management <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnership with a CFP® and CFA® credentialed financial advisor
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header with Image */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="/images/Ardis.jpeg" 
                        alt="Ardis - Financial Advisor" 
                        className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl font-bold mb-2">Strategic Financial Partner</h3>
                      <p className="text-green-100 text-lg mb-2">CFP® | CFA® Credentialed</p>
                      <p className="text-green-50">Investment & Financial Management Services</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Introduction */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Professional Credentials & Expertise
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      MRE Consulting & Insurance is proud to partner with a highly credentialed financial professional 
                      holding both the <strong>Certified Financial Planner (CFP®)</strong> and <strong>Chartered Financial 
                      Analyst (CFA®)</strong> designations — two of the most prestigious and rigorous certifications in 
                      the financial services industry.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This strategic partnership enables MRE to offer comprehensive investment and financial management 
                      services to our clients, combining our expertise in business consulting, insurance, and tax strategy 
                      with sophisticated wealth management and investment planning.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Together, we provide a holistic approach to financial success — integrating business operations, 
                      risk management, tax optimization, and investment strategy into a unified wealth-building framework.
                    </p>
                  </div>

                  {/* Credentials Explained */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Understanding the Credentials
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                            <FaAward className="text-white text-xl" />
                          </div>
                          <h5 className="font-bold text-navy-900 text-lg">CFP® - Certified Financial Planner</h5>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          The CFP® certification is the gold standard for comprehensive financial planning. It requires 
                          extensive education, rigorous examination, and ongoing ethical standards.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Holistic financial planning expertise</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Retirement and estate planning</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Tax and insurance strategies</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Fiduciary duty to clients</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                            <FaChartLine className="text-white text-xl" />
                          </div>
                          <h5 className="font-bold text-navy-900 text-lg">CFA® - Chartered Financial Analyst</h5>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          The CFA® charter is globally recognized as the highest distinction in investment management 
                          and financial analysis, requiring mastery of advanced portfolio theory and ethics.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Advanced investment analysis</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Portfolio management expertise</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Risk assessment and mitigation</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Global investment standards</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Services Offered */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Investment & Financial Management Services
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'Comprehensive Financial Planning',
                          description: 'Holistic planning covering retirement, education, major purchases, and life transitions'
                        },
                        {
                          title: 'Investment Portfolio Management',
                          description: 'Professional management of stocks, bonds, ETFs, and alternative investments'
                        },
                        {
                          title: 'Retirement Planning & Analysis',
                          description: '401(k) optimization, IRA strategies, pension analysis, and income planning'
                        },
                        {
                          title: 'Tax-Efficient Investment Strategies',
                          description: 'Asset location, tax-loss harvesting, and coordination with tax planning'
                        },
                        {
                          title: 'Estate & Wealth Transfer Planning',
                          description: 'Strategies to preserve and transfer wealth efficiently across generations'
                        },
                        {
                          title: 'Risk Management & Insurance Analysis',
                          description: 'Comprehensive review of life, disability, and long-term care insurance needs'
                        },
                        {
                          title: 'Education Funding Strategies',
                          description: '529 plans, education savings accounts, and college funding optimization'
                        },
                        {
                          title: 'Business Owner Financial Planning',
                          description: 'Exit planning, succession strategies, and business valuation considerations'
                        }
                      ].map((service, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100">
                          <h5 className="font-bold text-navy-900 mb-2 flex items-center text-sm">
                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                            {service.title}
                          </h5>
                          <p className="text-gray-600 text-xs leading-relaxed ml-6">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why This Partnership Matters */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Why This Partnership Matters
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: 'Integrated Wealth Strategy',
                          description: 'Seamless coordination between business consulting, tax planning, insurance, and investment management'
                        },
                        {
                          title: 'Fiduciary Standard',
                          description: 'CFP® professionals are held to the highest ethical standards, always acting in your best interest'
                        },
                        {
                          title: 'Institutional-Grade Analysis',
                          description: 'CFA® expertise brings Wall Street-level investment analysis to your personal portfolio'
                        },
                        {
                          title: 'Comprehensive Service Model',
                          description: 'One coordinated team managing all aspects of your financial life — from business operations to retirement'
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mt-1">
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                          <div>
                            <h5 className="font-bold text-navy-900 mb-1">{benefit.title}</h5>
                            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How It Works */}
                  <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 border border-green-100">
                    <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                      <FaHandshake className="text-green-500 mr-3" />
                      How the Partnership Works
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you work with MRE Consulting & Insurance, you gain access to our strategic financial partner's 
                      investment and wealth management services as part of a comprehensive financial strategy.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>MRE handles:</strong> Business consulting, tax strategy, insurance planning, accounting services, 
                      and estate consulting.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Our CFP®/CFA® partner handles:</strong> Investment portfolio management, retirement planning, 
                      asset allocation, and wealth accumulation strategies.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      Together, we create a unified financial ecosystem where every decision is coordinated, every strategy 
                      is optimized, and your complete financial picture is managed by a team of credentialed experts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accounting Partners */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 shadow-lg">
                <FaCalculator className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Accounting <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Certified accounting professionals providing tax preparation, bookkeeping, and financial services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'CPA Firms',
                  description: 'Certified Public Accountants specializing in tax planning and compliance',
                  icon: FaCalculator
                },
                {
                  name: 'Bookkeeping Services',
                  description: 'Professional bookkeeping and payroll management for businesses',
                  icon: FaChartLine
                },
                {
                  name: 'Tax Specialists',
                  description: 'Expert tax preparation and IRS representation services',
                  icon: FaAward
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <partner.icon className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Partners */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-xl mb-4 shadow-lg">
                <FaGavel className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Legal <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experienced legal professionals providing business law, estate planning, and contract services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Business Law Firms',
                  description: 'Legal counsel for business formation, contracts, and corporate governance',
                  services: ['Entity Formation', 'Contract Review', 'Compliance', 'M&A Support']
                },
                {
                  name: 'Estate Planning Attorneys',
                  description: 'Comprehensive estate planning and asset protection services',
                  services: ['Wills & Trusts', 'Asset Protection', 'Probate', 'Elder Law']
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
                    <FaGavel className="text-navy-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {partner.services.map((service, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-primary-500 mr-2 mt-0.5">•</span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partner: Grober Imbey Insurance Agency */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 shadow-lg">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Insurance <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnership with a trusted New York-based independent agency
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Grober Imbey Insurance Agency (GIA)</h3>
                  <p className="text-primary-100 text-lg">Over 50 Years of Excellence in Insurance Solutions</p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Who They Are */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      Who GIA Is
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Founded in the early 1970s, Grober Imbey Insurance Agency has spent more than five decades 
                      protecting families and businesses across New York, New Jersey, and the Tri-State region.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a fully independent brokerage, GIA is not tied to any single carrier — instead, they 
                      represent dozens of top-rated national and specialty insurers, allowing them to design highly 
                      competitive, custom-built coverage strategies for even the most complex risk profiles.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Their reputation for personalized service, underwriting precision, and white-glove attention 
                      has made GIA one of the most respected insurance agencies in the region.
                    </p>
                  </div>

                  {/* What They Do */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      Areas of Expertise
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'Private-Client & High-Value Insurance',
                          description: 'Coverage for luxury homes, fine art, jewelry, collectibles, yachts, and exotic vehicles'
                        },
                        {
                          title: 'Personal Insurance Solutions',
                          description: 'Home, auto, condo, umbrella, and flood insurance for complex asset structures'
                        },
                        {
                          title: 'Business & Commercial Insurance',
                          description: 'General liability, workers\' comp, professional liability (E&O, D&O, cyber)'
                        },
                        {
                          title: 'Custom Underwriting Placement',
                          description: 'Partnerships with Chubb, AIG, Pure, Travelers, and The Hartford'
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                          <h5 className="font-bold text-navy-900 mb-2">{item.title}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why GIA */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      Why GIA Is Our Ideal Partner
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: 'Advanced Underwriting for Complex Lives',
                          description: 'Expert handling of multi-state professionals, multiple properties, and sophisticated asset protection'
                        },
                        {
                          title: 'Multi-Carrier Flexibility',
                          description: 'Instant quotes across dozens of carriers for best-fit coverage at competitive rates'
                        },
                        {
                          title: 'High-Net-Worth Precision',
                          description: 'Direct relationships with private-client divisions for sophisticated estate planning structures'
                        },
                        {
                          title: 'Expert Claims & Renewal Management',
                          description: 'In-house service team managing claims, renewals, and policy audits proactively'
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mt-1">
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                          <div>
                            <h5 className="font-bold text-navy-900 mb-1">{benefit.title}</h5>
                            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How Partnership Works */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      How the Partnership Works
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you work with MRE Consulting & Insurance, our team handles the discovery, analysis, and 
                      strategy behind your coverage. Once we've identified your needs, GIA executes the carrier 
                      placement, underwriting, and ongoing servicing — creating a seamless experience that feels 
                      like working with a single full-service firm.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                      Together, MRE + GIA deliver:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'One coordinated team handling all insurance and consulting needs',
                        'Streamlined communication between advisors, underwriters, and carriers',
                        'Annual proactive policy reviews to ensure no gaps in protection',
                        'Access to elite private-client and commercial markets'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-500 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Partnership Benefits */}
                  <div className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-8 border border-primary-100">
                    <h4 className="text-xl font-bold text-navy-900 mb-4">Why It Matters</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This partnership reflects MRE Consulting & Insurance's unwavering commitment to deliver 
                      comprehensive protection and strategic insight — not just policies. With GIA's half-century 
                      of underwriting experience and our consulting expertise, we ensure that every MRE client 
                      receives the right coverage, at the right price, with the right team behind it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
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
                Why Our Partnerships <span className="gradient-text">Matter</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FaUsers,
                  title: 'Comprehensive Solutions',
                  description: 'Access to a full spectrum of services and expertise through our partner network'
                },
                {
                  icon: FaAward,
                  title: 'Best-in-Class Service',
                  description: 'Partnerships with industry leaders ensure top-tier quality and reliability'
                },
                {
                  icon: FaHandshake,
                  title: 'Seamless Integration',
                  description: 'Coordinated service delivery across all partners for a unified client experience'
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
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">Interested in Partnering With Us?</h2>
              <p className="text-xl text-gray-200 mb-8">
                We're always looking to collaborate with exceptional organizations that share our values
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Get in Touch
                </Link>
                <a
                  href="mailto:Matthew@mrecai.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Partnership Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPartners;
