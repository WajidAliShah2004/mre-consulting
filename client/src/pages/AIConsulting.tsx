import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight, FaRobot, FaCogs, FaLaptopCode, FaPuzzlePiece, FaChartLine, FaUsers, FaCheck, FaArrowRight, FaCalendarAlt, FaLightbulb, FaBrain, FaShieldAlt, FaRocket } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const AIConsulting = () => {
    const aiServices = [
        {
            id: 'ai-consulting',
            icon: FaBrain,
            title: '1. Artificial Intelligence Consulting',
            subtitle: 'Transform the way you think, work, and grow.',
            description: 'Our AI Consulting service helps you identify where artificial intelligence can create the biggest impact in your life or business — and then implements those solutions with precision.',
            gradient: 'from-blue-500 to-blue-600',
            whatWeDo: [
                'AI Readiness & Opportunity Assessment',
                'Intelligent Process Automation (RPA + AI)',
                'Predictive Analytics & Forecasting',
                'Natural Language Processing (NLP) for emails, chats, and documents',
                'AI Chatbots & Virtual Client Service Agents',
                'AI Policy, Tax, and Financial Analysis Models',
                'AI-Driven Risk & Claims Predictions',
                'AI-Based Customer Behavior and Retention Insights'
            ],
            examples: [
                'Automating client intake forms, document uploads, and quote generation',
                'Using AI models to analyze spending, identify savings, or detect potential tax issues before they occur',
                'AI chatbots that answer insurance, tax, and compliance questions 24/7',
                'Intelligent reminders for renewals, audits, or financial milestones'
            ],
            benefits: [
                'Save hours of manual work every week',
                'Identify opportunities before competitors',
                'Improve accuracy, reduce human error',
                'Predict outcomes with confidence',
                'Serve clients and customers instantly, any time of day'
            ],
            whoItsFor: [
                'Small business owners who want smarter workflows',
                'Professionals managing multiple revenue streams',
                'Families managing budgets, insurance, and tax filings',
                'Enterprises looking to optimize operations or client engagement'
            ]
        },
        {
            id: 'ai-automation',
            icon: FaCogs,
            title: '2. AI Automation Consulting',
            subtitle: 'From manual to effortless — we automate the repetitive so you can focus on growth.',
            description: 'MRE Consulting & Insurance specializes in AI Automation — transforming manual, time-consuming tasks into seamless, automated systems that operate around the clock.',
            gradient: 'from-purple-500 to-purple-600',
            whatWeDo: [
                'Workflow Automation (email, intake, CRM, calendar, follow-ups)',
                'Smart Document Processing (OCR + NLP)',
                'AI-Powered Lead Tracking & Client Scoring',
                'Automatic Quote Generation & Renewals',
                'Accounting and Payroll Automation',
                'Marketing Automation & AI-Personalized Outreach',
                'Multi-Platform Integration (Zapier, HubSpot, Google, CRMs, APIs)'
            ],
            examples: [
                'Auto-generating personalized insurance quotes once client data is uploaded',
                'Automating invoice creation, filing, and client communication',
                'Smart daily summaries of new leads, tax filings, or renewal alerts',
                'Email & text follow-ups customized to each client\'s tone, needs, and service history'
            ],
            benefits: [
                'Operate 24/7 without lifting a finger',
                'Cut repetitive workload by 50–80%',
                'Eliminate data entry and human mistakes',
                'Improve response time and client satisfaction',
                'Scale faster — without hiring more staff'
            ],
            whoItsFor: [
                'Businesses seeking to automate client communication',
                'Firms overwhelmed by admin or data tasks',
                'Individuals managing multiple jobs, filings, or policies',
                'Teams aiming for more time and higher-quality service'
            ]
        },
        {
            id: 'technology-consulting',
            icon: FaLaptopCode,
            title: '3. Technology Consulting',
            subtitle: 'Bridging business strategy with digital innovation.',
            description: 'We help clients design, select, and implement technology solutions that are cost-effective, compliant, and custom-built to their unique needs.',
            gradient: 'from-green-500 to-green-600',
            whatWeDo: [
                'Business Process & Technology Audit',
                'Cloud Migration & System Integration',
                'CRM, ERP, and Data Platform Consulting',
                'IT Architecture Planning & Vendor Selection',
                'Compliance & Cybersecurity Alignment',
                'Business Intelligence Dashboarding',
                'System Design for Growth & Automation'
            ],
            examples: [
                'Migrating client files from local storage to a secure cloud-based system',
                'Designing integrated dashboards that show insurance policies, tax filings, and financial summaries in one view',
                'Creating automated internal workflows using Zapier, Google Workspace, or AI agents'
            ],
            benefits: [
                'Unified data for better business insight',
                'Enhanced security and compliance protection',
                'Faster decision-making',
                'Reduced overhead and IT cost',
                'Scalable, future-ready technology foundation'
            ],
            whoItsFor: [
                'Businesses modernizing operations or digital tools',
                'Startups needing a technology roadmap',
                'Enterprises seeking integration across departments',
                'Individuals who want secure, automated financial visibility'
            ]
        },
        {
            id: 'ai-systems-implementation',
            icon: FaPuzzlePiece,
            title: '4. AI Systems Implementation & Integration',
            subtitle: 'We don\'t just advise — we build.',
            description: 'MRECAI and our technology partner NovaEdge Solutions Ltd. provide full implementation of AI-powered systems — from concept to deployment.',
            gradient: 'from-orange-500 to-orange-600',
            whatWeDo: [
                'AI Software Development & Integration',
                'API Connections & System Syncs',
                'Lead Intelligence Engines (AI Scoring, Forecasting)',
                'Custom AI Chatbots & Knowledge Assistants',
                'Automated Reporting & Performance Dashboards',
                'Financial & Risk Modelling Systems'
            ],
            examples: [
                'AI systems that track and score every new lead in real-time',
                'NLP bots that summarize client conversations for compliance',
                'Predictive dashboards showing risk exposure or income trends'
            ],
            benefits: [
                'End-to-end visibility of all operations',
                'Reduced human dependency',
                'Smarter, faster decision-making',
                'Proven ROI through automation and intelligence'
            ],
            whoItsFor: [
                'Businesses ready to implement AI solutions',
                'Companies needing custom AI development',
                'Organizations requiring system integration',
                'Enterprises seeking competitive advantage through AI'
            ]
        },
        {
            id: 'digital-transformation',
            icon: FaChartLine,
            title: '5. Digital Transformation Strategy',
            subtitle: 'Turn disruption into opportunity.',
            description: 'We help you define a digital roadmap that maximizes the use of AI, automation, and cloud technology to create sustainable, competitive advantage.',
            gradient: 'from-pink-500 to-pink-600',
            whatWeDo: [
                'Digital Process Redesign',
                'Legacy System Modernization',
                'AI-Driven Business Strategy',
                'Data Analytics & Visualization Consulting',
                'Cloud Migration & DevOps Planning'
            ],
            examples: [
                'Building a digital-first insurance operation with automated renewals, AI chat support, and client dashboards',
                'Helping an accounting firm automate document processing and lead intake',
                'Designing cross-service client portals for financial and tax management'
            ],
            benefits: [
                'Long-term cost reduction',
                'Future-proof infrastructure',
                'Data-driven growth',
                'Higher scalability with lower stress'
            ],
            whoItsFor: [
                'Companies undergoing digital transformation',
                'Businesses with legacy systems',
                'Organizations seeking modernization',
                'Enterprises planning for the future'
            ]
        },
        {
            id: 'ai-for-individuals',
            icon: FaUsers,
            title: '6. AI for Individuals & Families',
            subtitle: 'Make smarter financial decisions through AI.',
            description: 'We empower individuals and families to leverage artificial intelligence for managing insurance, taxes, and personal finances.',
            gradient: 'from-teal-500 to-teal-600',
            whatWeDo: [
                'Personalized AI budgeting tools',
                'Automated tax filing reminders and tracking',
                'AI-powered insurance policy comparison',
                'Risk prediction and financial health scoring'
            ],
            examples: [
                'AI-powered budget tracking that learns your spending patterns',
                'Automated reminders for tax deadlines and insurance renewals',
                'Smart policy comparison tools that find the best coverage for your needs',
                'Financial health scoring with personalized recommendations'
            ],
            benefits: [
                'Less stress, more clarity',
                'Maximize refunds and coverage',
                'Avoid missed deadlines and overpayments',
                'Build long-term financial intelligence for your household'
            ],
            whoItsFor: [
                'Individuals seeking financial clarity',
                'Families managing complex finances',
                'People wanting to automate personal finance',
                'Anyone looking to optimize their financial decisions'
            ]
        }
    ];

    return (
        <>
            <SEO
                title="AI, Technology & Automation Consulting | MRECAI"
                description="Comprehensive AI consulting services including artificial intelligence, automation, technology consulting, AI systems implementation, digital transformation, and AI for individuals & families."
                canonical="/ai-consulting"
                keywords="AI consulting, artificial intelligence, automation consulting, technology consulting, digital transformation, AI implementation, machine learning"
                schema={{
                    '@context': 'https://schema.org',
                    '@graph': [
                        breadcrumbSchema([
                            { name: 'Home', url: '/' },
                            { name: 'Services', url: '/services' },
                            { name: 'AI Consulting', url: '/ai-consulting' },
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
                            <Link to="/services" className="hover:text-primary-600 transition-colors">
                                Services
                            </Link>
                            <FaChevronRight className="mx-2 text-gray-400" />
                            <span className="text-navy-900 font-semibold">AI Consulting</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                                backgroundSize: '50px 50px'
                            }}></div>
                        </div>
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
                                    <FaRobot className="mr-2" />
                                    Comprehensive AI Solutions
                                </span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                                    AI, Technology & Automation Consulting
                                </span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-semibold mb-4">
                                Reinventing What's Possible with Artificial Intelligence
                            </p>
                            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                                Our AI & Technology Consulting division combines deep technical expertise with MRE's signature business intelligence, tax knowledge, and insurance insight.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    This unique combination makes <strong className="text-primary-600">MRE Consulting & Insurance</strong> a true full-service partner — able to not only implement powerful AI systems but also ensure they're fully aligned with your operational, financial, and regulatory goals.
                                </p>
                            </motion.div>
                        </div>

                        {/* AI Services Grid */}
                        <div className="space-y-16">
                            {aiServices.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
                                >
                                    {/* Service Header */}
                                    <div className="flex items-start space-x-6 mb-8">
                                        <motion.div
                                            className={`flex-shrink-0 w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <service.icon className="text-4xl text-white" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                                                {service.title}
                                            </h2>
                                            <p className="text-xl text-primary-600 font-semibold mb-3">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Service Details Grid */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* What We Do */}
                                        <div>
                                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                                                <FaLightbulb className="text-primary-600 mr-2" />
                                                What We Do
                                            </h3>
                                            <ul className="space-y-2">
                                                {service.whatWeDo.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700">
                                                        <FaCheck className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Examples */}
                                        <div>
                                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                                                <FaRocket className="text-primary-600 mr-2" />
                                                Examples
                                            </h3>
                                            <ul className="space-y-2">
                                                {service.examples.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700">
                                                        <span className="text-primary-500 mr-2 flex-shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Benefits */}
                                        <div>
                                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                                                <FaShieldAlt className="text-primary-600 mr-2" />
                                                Benefits to You
                                            </h3>
                                            <ul className="space-y-2">
                                                {service.benefits.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700">
                                                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Who It's For */}
                                        <div>
                                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                                                <FaUsers className="text-primary-600 mr-2" />
                                                Who It's For
                                            </h3>
                                            <ul className="space-y-2">
                                                {service.whoItsFor.map((item, i) => (
                                                    <li key={i} className="flex items-start text-gray-700">
                                                        <span className="text-primary-500 mr-2 flex-shrink-0">✅</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose MRECAI for AI */}
                <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Why Choose <span className="gradient-text">MRE Consulting & Insurance</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                for AI & Technology Consulting
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary-100"
                            >
                                <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                                    We're not just consultants — we're <strong className="text-primary-600">architects of intelligent systems</strong> designed to save time, improve precision, and drive growth.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { icon: '🎯', text: 'Business-first strategy, technology-second approach' },
                                        { icon: '🔗', text: 'Deep insurance, tax, and finance integration' },
                                        { icon: '👥', text: 'Human oversight with AI-driven intelligence' },
                                        { icon: '🚀', text: 'Full-service: from idea → automation → execution' },
                                        { icon: '🔒', text: 'Secure, compliant, and personalized to you' }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-white p-4 rounded-lg border border-primary-100"
                                        >
                                            <span className="text-3xl flex-shrink-0">{item.icon}</span>
                                            <span className="text-gray-700 font-medium">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-xl text-center text-gray-700 mt-8 italic">
                                    At MRE Consulting & Insurance, we make technology <strong className="text-primary-600">human</strong> — practical, profitable, and purpose-driven.
                                </p>
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
                            <h2 className="text-4xl font-bold mb-6">Let's Build Your Future Together</h2>
                            <p className="text-xl text-gray-200 mb-4">
                                AI isn't the future — it's the present.
                            </p>
                            <p className="text-lg text-gray-300 mb-8">
                                If you're ready to modernize, automate, and grow with confidence, our team at MRE Consulting & Insurance will guide you from strategy to implementation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/book-now"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                                >
                                    <FaCalendarAlt className="mr-2" />
                                    Schedule Consultation
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                                >
                                    View All Services
                                    <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AIConsulting;
