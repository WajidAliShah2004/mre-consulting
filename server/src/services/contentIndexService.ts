// Content Indexing Service for AI and Search
// This service indexes all website content for AI systems and search engines

interface PageContent {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  lastModified: Date;
  priority: number;
}

interface ServiceContent {
  id: string;
  name: string;
  description: string;
  features: string[];
  keywords: string[];
}

class ContentIndexService {
  private pages: PageContent[] = [];
  private services: ServiceContent[] = [];
  
  constructor() {
    this.initializeIndex();
  }
  
  private initializeIndex() {
    // Index all pages
    this.pages = [
      {
        url: '/',
        title: 'MRECAI | Business Consulting & Insurance Services',
        description: 'Expert business consulting, insurance, and AI technology solutions. 15+ years experience, 500+ clients served, 4.9/5 rating.',
        keywords: ['business consulting', 'insurance services', 'digital marketing', 'tax accounting', 'AI technology'],
        content: 'MRE Consulting & Insurance provides comprehensive business consulting, insurance services, digital marketing, tax & accounting, AI technology, and automation solutions. Founded in 2009 with 15+ years of experience serving 500+ clients with a 98% success rate.',
        lastModified: new Date('2025-10-28'),
        priority: 1.0
      },
      {
        url: '/about',
        title: 'About MRECAI | Our Story & Mission',
        description: 'Learn about MRECAI - Founded in 2009, 15+ years of experience, 500+ satisfied clients, 98% success rate.',
        keywords: ['about mrecai', 'company history', 'mission', 'values', 'experience'],
        content: 'MRECAI was founded in 2009 by Matthew Epstein. We have 15+ years of experience serving individuals, families, and businesses with expert consulting and insurance solutions. Our mission is to empower our clients with innovative solutions and personalized service.',
        lastModified: new Date('2025-10-28'),
        priority: 0.9
      },
      {
        url: '/about/founder',
        title: 'Meet Our Founder | Matthew Epstein',
        description: 'Matthew Epstein - President & Founder of MRECAI with 15+ years of experience in business consulting and insurance.',
        keywords: ['matthew epstein', 'founder', 'president', 'leadership'],
        content: 'Matthew Epstein is the President and Founder of MRE Consulting & Insurance. With 15+ years of experience in business consulting, insurance services, and technology implementation, Matthew is committed to client success and innovative solutions.',
        lastModified: new Date('2025-10-28'),
        priority: 0.8
      },
      {
        url: '/about/partners',
        title: 'Strategic Partners | MRECAI Partnerships',
        description: 'Our strategic partners: GIA (Global Insurance Accelerator) and NovaEdge Solutions for comprehensive service delivery.',
        keywords: ['strategic partners', 'GIA', 'NovaEdge Solutions', 'partnerships'],
        content: 'MRECAI partners with industry leaders including GIA (Global Insurance Accelerator) for insurance solutions and NovaEdge Solutions for AI and technology services, ensuring comprehensive and cutting-edge solutions for our clients.',
        lastModified: new Date('2025-10-28'),
        priority: 0.8
      },
      {
        url: '/services',
        title: 'Our Services | Business Consulting & Insurance | MRECAI',
        description: 'Comprehensive services: Business Consulting, Digital Marketing, Insurance, Tax & Accounting, AI Technology, Automation, Web Development.',
        keywords: ['services', 'business consulting', 'insurance', 'digital marketing', 'tax accounting', 'AI technology', 'automation'],
        content: 'MRECAI offers 7 comprehensive services: Business Consulting, Digital Marketing, Insurance Services, Tax & Accounting, AI & Technology, Automation, and Web Development. Each service is tailored to meet your unique needs.',
        lastModified: new Date('2025-10-28'),
        priority: 0.9
      },
      {
        url: '/intake-forms',
        title: 'Intake Forms | Get a Quote | MRECAI',
        description: '7 intake forms for insurance quotes and client onboarding. Fast response within 24 hours.',
        keywords: ['intake forms', 'quote request', 'insurance quote', 'application'],
        content: 'Access our 7 intake forms for Homeowners, Auto, Umbrella, Condo, Commercial, Professional Liability insurance, and General Client Intake. We respond within 24 hours.',
        lastModified: new Date('2025-10-28'),
        priority: 0.8
      },
      {
        url: '/testimonials',
        title: 'Client Testimonials | Success Stories | MRECAI',
        description: '500+ satisfied clients, 4.9/5 rating, 98% success rate. Read real client testimonials and success stories.',
        keywords: ['testimonials', 'reviews', 'client success', 'ratings'],
        content: 'Our clients love us! With 500+ satisfied clients, a 4.9/5 average rating, and 98% success rate, we deliver proven results. Read real testimonials from individuals and businesses we\'ve helped.',
        lastModified: new Date('2025-10-28'),
        priority: 0.8
      },
      {
        url: '/blog',
        title: 'Blog | Insights & Tips | MRECAI',
        description: 'Expert insights on business, insurance, tax planning, technology, AI, and digital marketing.',
        keywords: ['blog', 'articles', 'business tips', 'insurance advice', 'tax planning'],
        content: 'Stay informed with our blog featuring expert insights on business strategies, insurance advice, tax planning, technology trends, AI innovations, and digital marketing tips.',
        lastModified: new Date('2025-10-28'),
        priority: 0.7
      },
      {
        url: '/contact',
        title: 'Contact Us | MRECAI | 929-919-3574',
        description: 'Contact MRECAI 24/7. Phone: 929-919-3574, Email: Matthew@MRECAI.com. Free consultations available.',
        keywords: ['contact', 'phone', 'email', 'consultation', '24/7'],
        content: 'Contact MRECAI anytime. Phone: 929-919-3574 (24/7), Email: Matthew@MRECAI.com. We offer free consultations and respond within 24 hours. Multiple contact methods available.',
        lastModified: new Date('2025-10-28'),
        priority: 0.9
      },
      {
        url: '/book-now',
        title: 'Book Consultation | Schedule a Call | MRECAI',
        description: 'Book a FREE consultation with MRECAI. Flexible scheduling, expert guidance, no obligation.',
        keywords: ['book consultation', 'schedule', 'appointment', 'free consultation'],
        content: 'Schedule a FREE consultation with MRECAI. Choose a time that works for you. No obligation, just expert guidance. Available 24/7 for your convenience.',
        lastModified: new Date('2025-10-28'),
        priority: 0.9
      }
    ];
    
    // Index all services
    this.services = [
      {
        id: 'business-consulting',
        name: 'Business Consulting',
        description: 'Strategic guidance to help your business grow and thrive',
        features: [
          'Strategic planning and execution',
          'Financial analysis and forecasting',
          'Operational efficiency optimization',
          'Growth strategy development'
        ],
        keywords: ['business consulting', 'strategic planning', 'business growth', 'operational efficiency']
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        description: 'Comprehensive digital marketing solutions to boost your online presence',
        features: [
          'SEO and content marketing',
          'Social media management',
          'PPC advertising campaigns',
          'Analytics and reporting'
        ],
        keywords: ['digital marketing', 'SEO', 'social media', 'PPC', 'content marketing']
      },
      {
        id: 'insurance-services',
        name: 'Insurance Services',
        description: 'Expert insurance consulting to protect what matters most',
        features: [
          'Comprehensive coverage analysis',
          'Multiple carrier options',
          'Claims support and advocacy',
          'Policy review and optimization'
        ],
        keywords: ['insurance', 'coverage', 'homeowners', 'auto', 'commercial', 'liability']
      },
      {
        id: 'tax-accounting',
        name: 'Tax & Accounting',
        description: 'Professional tax planning and comprehensive accounting services',
        features: [
          'Tax planning and preparation',
          'Bookkeeping and payroll',
          'Financial statement preparation',
          'IRS representation'
        ],
        keywords: ['tax', 'accounting', 'bookkeeping', 'payroll', 'IRS', 'tax planning']
      },
      {
        id: 'ai-technology',
        name: 'AI & Technology',
        description: 'Cutting-edge AI and technology solutions to modernize your business',
        features: [
          'AI implementation consulting',
          'Process automation solutions',
          'Technology stack optimization',
          'Digital transformation strategy'
        ],
        keywords: ['AI', 'artificial intelligence', 'technology', 'automation', 'digital transformation']
      },
      {
        id: 'automation',
        name: 'Automation',
        description: 'Streamline your workflows with intelligent automation solutions',
        features: [
          'Workflow automation design',
          'Integration with existing systems',
          'Custom automation development',
          'Training and support'
        ],
        keywords: ['automation', 'workflow', 'efficiency', 'integration', 'process automation']
      },
      {
        id: 'web-development',
        name: 'Web Development',
        description: 'Custom web solutions that drive results',
        features: [
          'Website Design & Development',
          'E-commerce Solutions',
          'Web Applications',
          'Maintenance & Support'
        ],
        keywords: ['web development', 'website design', 'e-commerce', 'web applications']
      }
    ];
  }
  
  // Search pages by keyword
  searchPages(query: string): PageContent[] {
    const lowerQuery = query.toLowerCase();
    return this.pages.filter(page => 
      page.title.toLowerCase().includes(lowerQuery) ||
      page.description.toLowerCase().includes(lowerQuery) ||
      page.content.toLowerCase().includes(lowerQuery) ||
      page.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
    );
  }
  
  // Search services by keyword
  searchServices(query: string): ServiceContent[] {
    const lowerQuery = query.toLowerCase();
    return this.services.filter(service =>
      service.name.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.features.some(feature => feature.toLowerCase().includes(lowerQuery)) ||
      service.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
    );
  }
  
  // Get all indexed content
  getAllContent() {
    return {
      pages: this.pages,
      services: this.services,
      totalPages: this.pages.length,
      totalServices: this.services.length,
      lastUpdated: new Date()
    };
  }
  
  // Get page by URL
  getPageByUrl(url: string): PageContent | undefined {
    return this.pages.find(page => page.url === url);
  }
  
  // Get service by ID
  getServiceById(id: string): ServiceContent | undefined {
    return this.services.find(service => service.id === id);
  }
  
  // Get sitemap data
  getSitemapData() {
    return this.pages.map(page => ({
      url: `https://mrecai.com${page.url}`,
      lastModified: page.lastModified,
      priority: page.priority
    }));
  }
  
  // Get all keywords for SEO
  getAllKeywords(): string[] {
    const pageKeywords = this.pages.flatMap(page => page.keywords);
    const serviceKeywords = this.services.flatMap(service => service.keywords);
    return [...new Set([...pageKeywords, ...serviceKeywords])];
  }
}

export default new ContentIndexService();
