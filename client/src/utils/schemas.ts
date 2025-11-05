// Schema.org structured data for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MRE Consulting & Insurance',
  alternateName: 'MRECAI',
  url: 'https://mrecai.com',
  logo: 'https://mrecai.com/logo.png',
  description: 'Expert business consulting, insurance services, and AI technology solutions for individuals and businesses.',
  foundingDate: '2009',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-929-919-3574',
    contactType: 'customer service',
    email: 'Matthew@MRECAI.com',
    availableLanguage: ['en'],
    areaServed: 'US',
  },
  sameAs: [
    'https://facebook.com/mreconsulting',
    'https://linkedin.com/company/mreconsulting',
    'https://instagram.com/mreconsulting',
    'https://youtube.com/@mreconsulting',
    'https://twitter.com/mreconsulting',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MRE Consulting & Insurance',
  image: 'https://mrecai.com/logo.png',
  '@id': 'https://mrecai.com',
  url: 'https://mrecai.com',
  telephone: '+1-929-919-3574',
  email: 'Matthew@MRECAI.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MRE Consulting & Insurance',
  url: 'https://mrecai.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mrecai.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchemas = {
  businessConsulting: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Consulting',
    provider: {
      '@type': 'Organization',
      name: 'MRE Consulting & Insurance',
    },
    areaServed: 'United States',
    description: 'Strategic business consulting services including planning, financial analysis, and operational optimization.',
  },
  digitalMarketing: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing',
    provider: {
      '@type': 'Organization',
      name: 'MRE Consulting & Insurance',
    },
    areaServed: 'United States',
    description: 'Comprehensive digital marketing solutions including SEO, social media management, and PPC advertising.',
  },
  insurance: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Insurance Services',
    provider: {
      '@type': 'Organization',
      name: 'MRE Consulting & Insurance',
    },
    areaServed: 'United States',
    description: 'Expert insurance consulting for personal and commercial coverage including auto, home, and business insurance.',
  },
  taxAccounting: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Tax & Accounting',
    provider: {
      '@type': 'Organization',
      name: 'MRE Consulting & Insurance',
    },
    areaServed: 'United States',
    description: 'Professional tax planning, preparation, bookkeeping, and accounting services for individuals and businesses.',
  },
  aiTechnology: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI & Technology Solutions',
    provider: {
      '@type': 'Organization',
      name: 'MRE Consulting & Insurance',
    },
    areaServed: 'United States',
    description: 'Cutting-edge AI implementation, process automation, and technology consulting services.',
  },
  automation: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Automation',
    provider: {
      '@type': 'Organization',
      name: 'MRE Consulting & Insurance',
    },
    areaServed: 'United States',
    description: 'Workflow automation design, system integration, and custom automation development.',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matthew Epstein',
  jobTitle: 'President & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'MRE Consulting & Insurance',
  },
  url: 'https://mrecai.com/about/founder',
  sameAs: [
    'https://linkedin.com/in/matthewepstein',
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://mrecai.com${item.url}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
