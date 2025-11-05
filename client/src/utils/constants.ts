import { 
  FaBriefcase, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaChartBar, 
  FaRobot, 
  FaCogs, 
  FaGlobe,
  FaBullseye,
  FaBolt,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaLock,
  FaCalculator,
  FaFileInvoiceDollar,
  FaLandmark
} from 'react-icons/fa';

export const COMPANY_INFO = {
  name: 'MRE Consulting & Insurance',
  phone: '929-919-3574',
  email: 'Matthew@MRECAI.com',
  address: '', // Add if available
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/mrecai-consulting',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1CeUfmRx4F/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/company/mre-consulting-insurance/',
  instagram: 'https://instagram.com/mrecaillc',
  youtube: 'https://youtube.com/@mrecaillc?si=bCbuCrNnc-YpTgr4',
  twitter: 'https://twitter.com/MRECAIllc',
  yelp: 'https://yelp.to/HNkgPbV_w_',
  tiktok: 'https://tiktok.com/@mrecai18'
};

export const SERVICES = [
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business grow and thrive in competitive markets.',
    icon: FaBriefcase,
    features: [
      'Strategic planning and execution',
      'Financial analysis and forecasting',
      'Operational efficiency optimization',
      'Growth strategy development'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions to boost your online presence and reach.',
    icon: FaMobileAlt,
    features: [
      'SEO and content marketing',
      'Social media management',
      'PPC advertising campaigns',
      'Analytics and reporting'
    ]
  },
  {
    id: 'insurance-services',
    title: 'Insurance Services',
    description: 'Expert insurance consulting to protect what matters most to you and your business.',
    icon: FaShieldAlt,
    features: [
      'Comprehensive coverage analysis',
      'Multiple carrier options',
      'Claims support and advocacy',
      'Policy review and optimization'
    ]
  },
  {
    id: 'tax-accounting',
    title: 'Tax & Accounting',
    description: 'Professional tax planning and comprehensive accounting services for individuals and businesses.',
    icon: FaChartBar,
    features: [
      'Tax planning and preparation',
      'Bookkeeping and payroll',
      'Financial statement preparation',
      'IRS representation'
    ]
  },
  {
    id: 'ai-technology',
    title: 'AI & Technology',
    description: 'Cutting-edge AI and technology solutions to modernize your business operations.',
    icon: FaRobot,
    features: [
      'AI implementation consulting',
      'Process automation solutions',
      'Technology stack optimization',
      'Digital transformation strategy'
    ]
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Streamline your workflows with intelligent automation solutions.',
    icon: FaCogs,
    features: [
      'Workflow automation design',
      'Integration with existing systems',
      'Custom automation development',
      'Training and support'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web solutions that drive results and enhance your digital presence.',
    icon: FaGlobe,
    features: [
      'Website Design & Development',
      'E-commerce Solutions',
      'Web Applications',
      'Maintenance & Support'
    ]
  }
];

export const REASONS_TO_CHOOSE = [
  {
    icon: FaBullseye,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success',
    link: '/about'
  },
  {
    icon: FaBolt,
    title: 'Fast Results',
    description: 'Quick turnaround without compromising quality',
    link: '/services'
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge strategies tailored to your needs',
    link: '/services'
  },
  {
    icon: FaHandshake,
    title: 'Personalized Service',
    description: 'One-on-one attention for every client',
    link: '/book-now'
  },
  {
    icon: FaChartLine,
    title: 'Proven Track Record',
    description: 'Consistent results across diverse industries',
    link: '/testimonials'
  },
  {
    icon: FaLock,
    title: 'Trusted Partner',
    description: 'Confidential, reliable, and professional',
    link: '/about'
  }
];

export const BLOG_CATEGORIES = [
  'Business Tips',
  'Insurance Advice',
  'Tax Planning',
  'Technology',
  'AI & Automation',
  'Digital Marketing',
  'General'
];

// Expanded services with comprehensive details for the redesigned Services page
export const SERVICES_EXPANDED = [
  {
    id: 'accounting-services',
    title: 'Accounting Services',
    description: 'Comprehensive accounting operations including bookkeeping and financial management for businesses of all sizes.',
    icon: FaCalculator,
    features: [
      'Full-service bookkeeping',
      'Accounts payable/receivable management',
      'Financial statement preparation',
      'Payroll processing',
      'QuickBooks setup and training'
    ],
    detailedDescription: 'Our accounting services cover all aspects of business accounting operations, from day-to-day bookkeeping to comprehensive financial reporting. We help businesses maintain accurate records, ensure compliance, and gain financial clarity.'
  },
  {
    id: 'tax-preparation-consulting',
    title: 'Tax Preparation & Consulting',
    description: 'Strategic tax planning and preparation services for individuals and businesses to minimize liability and maximize returns.',
    icon: FaFileInvoiceDollar,
    features: [
      'Individual tax return preparation',
      'Business tax return preparation',
      'Tax strategy and planning',
      'IRS audit representation',
      'Tax compliance consulting'
    ],
    detailedDescription: 'We provide comprehensive tax services covering both preparation and strategic consulting. Our experts help individuals and businesses navigate complex tax regulations while identifying opportunities for tax savings.'
  },
  {
    id: 'insurance-consulting',
    title: 'Insurance Consulting',
    description: 'Expert guidance across all insurance needs, from homeowners and auto to life insurance and beyond.',
    icon: FaShieldAlt,
    features: [
      'Homeowners insurance',
      'Auto insurance',
      'Life insurance',
      'Business insurance',
      'Health insurance',
      'Umbrella policies'
    ],
    detailedDescription: 'Our insurance consulting services cover the full spectrum of everyday insurance needs. We help individuals and families find the right coverage for their homes, vehicles, lives, and more, ensuring comprehensive protection at competitive rates.'
  },
  {
    id: 'estate-consulting',
    title: 'Estate Consulting Services',
    description: 'Professional estate planning and consulting to protect your legacy and ensure smooth wealth transfer.',
    icon: FaLandmark,
    features: [
      'Estate planning strategy',
      'Trust establishment',
      'Beneficiary planning',
      'Asset protection strategies',
      'Estate tax planning'
    ],
    detailedDescription: 'Our estate consulting services help individuals and families plan for the future, protect assets, and ensure their wishes are carried out. We work with legal and financial professionals to create comprehensive estate plans.'
  },
  {
    id: 'investment-financial-management',
    title: 'Investment & Financial Management',
    description: 'Professional investment and financial management services delivered through our strategic partner with CFP® and CFA credentials.',
    icon: FaChartLine,
    features: [
      'Investment portfolio management',
      'Retirement planning',
      'Wealth management',
      'Financial planning',
      'Risk assessment and management'
    ],
    detailedDescription: 'Through our strategic partnership with certified financial professionals (CFP® and CFA), we provide comprehensive investment and financial management services. Our partner brings decades of expertise in portfolio management, retirement planning, and wealth preservation.',
    partnerDisclosure: 'Investment and financial management services are provided through our strategic partner, a Certified Financial Planner (CFP®) and Chartered Financial Analyst (CFA).'
  }
];