import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { sendChatMessage } from '../../services/api';
import type { ChatMessage } from '../../types';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi! I\'m your MRECAI AI assistant. 👋\n\nI can help you with:\n• Insurance quotes & coverage\n• Business consulting services\n• Scheduling consultations\n• Answering questions about our services\n\nHow can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const quickActions = [
    { label: 'Get a Quote', action: 'quote' },
    { label: 'Book a Call', action: 'book' },
    { label: 'View Services', action: 'services' },
    { label: 'Contact Us', action: 'contact' },
  ];
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  
  // Conversation history for OpenAI context (last 5 messages)
  const [conversationHistory, setConversationHistory] = useState<Array<{
    role: 'user' | 'assistant';
    content: string;
  }>>([]);

  // Preserve scroll position during viewport changes
  useEffect(() => {
    const messageContainer = document.querySelector('.message-container');
    if (messageContainer && messages.length > 0) {
      // Scroll to bottom when new messages arrive
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  // Play notification sound
  const playNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('Audio notification not supported');
    }
  };

  // Auto-dismiss notification after 5 seconds and play sound
  useEffect(() => {
    if (showNotification && !isOpen) {
      // Play sound when notification appears
      playNotificationSound();

      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showNotification, isOpen]);

  // Clear unread messages when chat is opened
  useEffect(() => {
    if (isOpen) {
      setHasUnreadMessages(false);
    }
  }, [isOpen]);

  // Comprehensive knowledge base for customer questions
  const getKnowledgeBaseResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();

    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)$/)) {
      return 'Hello! 👋 Welcome to MRECAI. I\'m here to help you with:\n• Insurance quotes & coverage\n• Business consulting\n• Scheduling consultations\n• Answering questions\n\nWhat can I help you with today?';
    }

    // Hours/Availability
    if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('available') || lowerMessage.includes('when')) {
      return 'We offer 24/7 service support! 🕐\n\nYou can reach us anytime:\n📞 Phone: 929-919-3574\n📧 Email: Matthew@MRECAI.com\n📅 Book online: /book-now\n\nOur team is always here to help!';
    }

    // Services - General
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('what do you offer')) {
      return 'We offer comprehensive services:\n\n💼 Business Consulting - Strategic planning & growth\n📱 Digital Marketing - SEO, social media, PPC\n🛡️ Insurance Services - Personal & commercial coverage\n💰 Tax & Accounting - Planning & preparation\n🤖 AI & Technology - Implementation & consulting\n⚙️ Automation - Workflow optimization\n\nVisit /services for detailed information!';
    }

    // Business Consulting
    if (lowerMessage.includes('business consulting') || lowerMessage.includes('business strategy') || lowerMessage.includes('consulting')) {
      return 'Our Business Consulting services include:\n\n✓ Strategic planning & execution\n✓ Financial analysis & forecasting\n✓ Operational efficiency optimization\n✓ Growth strategy development\n✓ Market analysis\n✓ Business process improvement\n\nBook a free consultation at /book-now to discuss your business goals!';
    }

    // Digital Marketing
    if (lowerMessage.includes('marketing') || lowerMessage.includes('seo') || lowerMessage.includes('social media') || lowerMessage.includes('advertising')) {
      return 'Our Digital Marketing services:\n\n📈 SEO & content marketing\n📱 Social media management\n💻 PPC advertising campaigns\n📊 Analytics & reporting\n🎯 Brand strategy\n📧 Email marketing\n\nLet\'s grow your online presence! Book a consultation: /book-now';
    }

    // Insurance - General
    if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage') || lowerMessage.includes('policy')) {
      return 'We offer comprehensive insurance services:\n\n🏠 Homeowners Insurance\n🚗 Auto Insurance (Personal & Commercial)\n🏢 Commercial Insurance\n☂️ Personal Umbrella Coverage\n🏘️ Condo Insurance\n💼 Professional Liability\n\nGet a quote: /intake-forms\nQuestions? Call: 929-919-3574';
    }

    // Home Insurance
    if (lowerMessage.includes('home insurance') || lowerMessage.includes('homeowner')) {
      return 'Homeowners Insurance protects:\n\n✓ Your home structure\n✓ Personal belongings\n✓ Liability coverage\n✓ Additional living expenses\n✓ Medical payments\n\nWe work with top carriers to find you the best coverage at competitive rates. Get a quote: /intake-forms';
    }

    // Auto Insurance
    if (lowerMessage.includes('auto insurance') || lowerMessage.includes('car insurance') || lowerMessage.includes('vehicle')) {
      return 'Auto Insurance options:\n\n🚗 Personal Auto Insurance\n🚚 Commercial Auto Insurance\n✓ Liability coverage\n✓ Collision & comprehensive\n✓ Uninsured motorist\n✓ Medical payments\n\nGet competitive quotes from multiple carriers: /intake-forms';
    }

    // Commercial Insurance
    if (lowerMessage.includes('commercial insurance') || lowerMessage.includes('business insurance')) {
      return 'Commercial Insurance solutions:\n\n✓ General Liability\n✓ Property Insurance\n✓ Workers\' Compensation\n✓ Business Owner\'s Policy (BOP)\n✓ Commercial Auto\n✓ Professional Liability\n\nProtect your business with comprehensive coverage: /intake-forms';
    }

    // Professional Liability
    if (lowerMessage.includes('professional liability') || lowerMessage.includes('e&o') || lowerMessage.includes('errors and omissions')) {
      return 'Professional Liability Insurance (E&O):\n\n✓ Protects against claims of negligence\n✓ Covers legal defense costs\n✓ Essential for consultants & professionals\n✓ Customized to your industry\n\nGet a quote tailored to your profession: /intake-forms';
    }

    // Tax & Accounting
    if (lowerMessage.includes('tax') || lowerMessage.includes('accounting') || lowerMessage.includes('bookkeeping') || lowerMessage.includes('payroll')) {
      return 'Tax & Accounting Services:\n\n💰 Tax planning & preparation\n📊 Bookkeeping & payroll\n📈 Financial statement preparation\n🏛️ IRS representation\n💼 Business tax services\n👤 Individual tax services\n\nLet\'s optimize your finances! Book consultation: /book-now';
    }

    // AI & Technology
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('technology') || lowerMessage.includes('automation')) {
      return 'AI & Technology Solutions:\n\n🤖 AI implementation consulting\n⚙️ Process automation\n🔧 Technology stack optimization\n📱 Digital transformation strategy\n🔄 Workflow automation\n🚀 Custom automation development\n\nModernize your operations! Learn more: /services';
    }

    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee') || lowerMessage.includes('how much')) {
      return 'Our pricing is customized to your specific needs:\n\n✓ Free initial consultation\n✓ Transparent pricing\n✓ No hidden fees\n✓ Competitive rates\n✓ Flexible payment options\n\nBook a FREE consultation to discuss pricing: /book-now\nOr call us: 929-919-3574';
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return 'Contact us anytime:\n\n📞 Phone: 929-919-3574 (24/7)\n📧 Email: Matthew@MRECAI.com\n🌐 Contact Form: /contact\n📅 Book Consultation: /book-now\n\nWe typically respond within 24 hours!';
    }

    // Booking/Appointment
    if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('schedule') || lowerMessage.includes('consultation') || lowerMessage.includes('meeting')) {
      return 'Schedule a FREE consultation:\n\n📅 Online booking: /book-now\n📞 Call us: 929-919-3574\n📧 Email: Matthew@MRECAI.com\n\nChoose a time that works for you - we\'re flexible and here to help!';
    }

    // Quote/Estimate
    if (lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
      return 'Get a personalized quote:\n\n📝 Fill out intake form: /intake-forms\n📞 Call for immediate quote: 929-919-3574\n📅 Book consultation: /book-now\n\nWe\'ll review your needs and provide a customized quote within 24 hours!';
    }

    // About Company
    if (lowerMessage.includes('about') || lowerMessage.includes('who are you') || lowerMessage.includes('company')) {
      return 'About MRECAI:\n\n✓ Founded in 2009\n✓ 15+ years of experience\n✓ 500+ satisfied clients\n✓ 98% success rate\n✓ 24/7 service support\n\nWe empower individuals, families, and businesses with expert consulting and insurance solutions.\n\nLearn more: /about';
    }

    // Founder
    if (lowerMessage.includes('founder') || lowerMessage.includes('owner') || lowerMessage.includes('matthew') || lowerMessage.includes('epstein')) {
      return 'Meet our founder:\n\n👤 Matthew Epstein - President & Founder\n✓ 15+ years of experience\n✓ Expert in consulting & insurance\n✓ Committed to client success\n\nLearn more about Matthew: /about/founder\nContact directly: Matthew@MRECAI.com';
    }

    // Partners
    if (lowerMessage.includes('partner') || lowerMessage.includes('carrier')) {
      return 'Our Strategic Partners:\n\n💻 NovaEdge Solutions - AI & Technology\n🛡️ Grober Imbey Insurance Agency (GIA)\n💰 Financial Advisors\n📊 Accounting Partners\n⚖️ Legal Partners\n\nWe work with industry leaders to provide you the best service. Learn more: /about/partners';
    }

    // Location
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address') || lowerMessage.includes('office')) {
      return 'We serve clients nationwide!\n\n📍 Primary service areas: New York, New Jersey, Tri-State region\n🌎 Remote consultations available\n📞 Phone: 929-919-3574\n📧 Email: Matthew@MRECAI.com\n\nContact us regardless of your location!';
    }

    // Process/How it works
    if (lowerMessage.includes('process') || lowerMessage.includes('how it works') || lowerMessage.includes('how do') || lowerMessage.includes('steps')) {
      return 'Our simple process:\n\n1️⃣ Initial Consultation - Discuss your needs (FREE)\n2️⃣ Assessment - Analyze your situation\n3️⃣ Custom Plan - Tailored strategy for you\n4️⃣ Implementation - Execute the plan\n5️⃣ Ongoing Support - We\'re here 24/7\n\nGet started: /book-now';
    }

    // Reviews/Testimonials
    if (lowerMessage.includes('review') || lowerMessage.includes('testimonial') || lowerMessage.includes('rating') || lowerMessage.includes('feedback')) {
      return 'Our clients love us! ⭐\n\n✓ 4.9/5 average rating\n✓ 500+ satisfied clients\n✓ 98% success rate\n✓ Excellent reviews on Google, Yelp, Facebook\n\nRead testimonials: /testimonials\nSee what clients say about us!';
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('how long') || lowerMessage.includes('years')) {
      return 'Our Experience:\n\n✓ Founded in 2009 (15+ years)\n✓ 500+ clients served\n✓ Multiple industries\n✓ Proven track record\n✓ Expert team\n\nTrust our experience to help you succeed! Learn more: /about';
    }

    // Free consultation
    if (lowerMessage.includes('free') || lowerMessage.includes('no obligation')) {
      return 'Yes! We offer FREE consultations:\n\n✓ No obligation\n✓ No pressure\n✓ Expert advice\n✓ Personalized recommendations\n✓ 24/7 availability\n\nBook your free consultation now: /book-now\nOr call: 929-919-3574';
    }

    // Help/Support
    if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('assist')) {
      return 'I\'m here to help! I can assist with:\n\n✓ Answering questions about our services\n✓ Scheduling consultations\n✓ Getting quotes\n✓ Providing contact information\n✓ Directing you to the right resources\n\nWhat specific question do you have?';
    }

    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! 😊\n\nIs there anything else I can help you with today?\n\nRemember:\n📞 Call: 929-919-3574\n📅 Book: /book-now\n📧 Email: Matthew@MRECAI.com';
    }

    // Goodbye
    if (lowerMessage.match(/^(bye|goodbye|see you|talk later)$/)) {
      return 'Thank you for chatting with us! 👋\n\nFeel free to reach out anytime:\n📞 929-919-3574\n📧 Matthew@MRECAI.com\n\nHave a great day!';
    }

    // Strategic Partners - Specific
    if (lowerMessage.includes('novaedge') || lowerMessage.includes('nova edge')) {
      return 'NovaEdge Solutions Partnership:\n\n✓ 15+ years in software development\n✓ AI-driven digital transformation\n✓ Full-stack development expertise\n✓ Cloud infrastructure & DevOps\n✓ Custom enterprise software\n\nTogether we deliver cutting-edge AI solutions! Learn more: /about/partners';
    }

    if (lowerMessage.includes('gia') || lowerMessage.includes('grober') || lowerMessage.includes('imbey')) {
      return 'Grober Imbey Insurance Agency (GIA):\n\n✓ 50+ years of experience (founded 1970s)\n✓ Independent brokerage\n✓ Represents dozens of top carriers\n✓ Specializes in high-value & complex risks\n✓ Partners: Chubb, AIG, Pure, Travelers, Hartford\n\nLearn more: /about/partners';
    }

    // Intake Forms - Specific
    if (lowerMessage.includes('intake form') || lowerMessage.includes('application')) {
      return 'We have 7 intake forms available:\n\n🏠 Homeowners Insurance\n🚗 Auto Insurance\n☂️ Personal Umbrella\n🏘️ Condo Insurance\n🏢 Commercial Insurance\n💼 Professional Liability\n📋 General Client Intake\n\nAccess all forms: /intake-forms\nWe respond within 24 hours!';
    }

    // Umbrella Insurance
    if (lowerMessage.includes('umbrella')) {
      return 'Personal Umbrella Insurance:\n\n✓ Additional liability coverage\n✓ Protects beyond standard policies\n✓ Coverage for home, auto, and more\n✓ Affordable extra protection\n✓ Essential for asset protection\n\nGet a quote: /intake-forms';
    }

    // Condo Insurance
    if (lowerMessage.includes('condo')) {
      return 'Condo Insurance:\n\n✓ Protects your unit interior\n✓ Personal property coverage\n✓ Liability protection\n✓ Loss assessment coverage\n✓ Complements HOA master policy\n\nGet a quote: /intake-forms';
    }

    // Workers Compensation
    if (lowerMessage.includes('workers comp') || lowerMessage.includes('workers compensation')) {
      return 'Workers\' Compensation Insurance:\n\n✓ Required for most businesses\n✓ Covers employee injuries\n✓ Medical expenses & lost wages\n✓ Protects your business from lawsuits\n✓ State-compliant coverage\n\nGet a quote: /intake-forms';
    }

    // Liability Insurance
    if (lowerMessage.includes('liability') && !lowerMessage.includes('professional')) {
      return 'Liability Insurance options:\n\n✓ General Liability - Business protection\n✓ Personal Liability - Individual coverage\n✓ Umbrella Liability - Extra protection\n✓ Product Liability - For manufacturers\n✓ Cyber Liability - Data breach protection\n\nDiscuss your needs: /book-now';
    }

    // Cyber Insurance
    if (lowerMessage.includes('cyber') || lowerMessage.includes('data breach')) {
      return 'Cyber Liability Insurance:\n\n✓ Data breach protection\n✓ Ransomware coverage\n✓ Business interruption\n✓ Legal & notification costs\n✓ Essential for all businesses\n\nProtect your digital assets! Get a quote: /intake-forms';
    }

    // Web Development
    if (lowerMessage.includes('web') || lowerMessage.includes('website') || lowerMessage.includes('development')) {
      return 'Web Development Services:\n\n✓ Custom website design & development\n✓ E-commerce solutions\n✓ Web applications\n✓ Responsive & mobile-friendly\n✓ SEO optimized\n✓ Maintenance & support\n\nLet\'s build your online presence! Book consultation: /book-now';
    }

    // Workflow Automation
    if (lowerMessage.includes('workflow') || lowerMessage.includes('automate')) {
      return 'Workflow Automation Services:\n\n✓ Process automation design\n✓ Integration with existing systems\n✓ Custom automation development\n✓ Training & support\n✓ Efficiency optimization\n✓ Cost reduction\n\nStreamline your operations! Learn more: /services';
    }

    // Financial Planning
    if (lowerMessage.includes('financial planning') || lowerMessage.includes('wealth')) {
      return 'We partner with financial advisors for:\n\n✓ Wealth management\n✓ Investment planning\n✓ Retirement strategies\n✓ Estate planning\n✓ Risk assessment\n✓ Portfolio management\n\nComprehensive financial solutions! Book consultation: /book-now';
    }

    // IRS/Tax Issues
    if (lowerMessage.includes('irs') || lowerMessage.includes('tax problem') || lowerMessage.includes('audit')) {
      return 'Tax Issue Resolution:\n\n✓ IRS representation\n✓ Audit support\n✓ Tax debt resolution\n✓ Penalty abatement\n✓ Payment plans\n✓ Tax compliance\n\nWe\'ll help resolve your tax issues! Book consultation: /book-now';
    }

    // Small Business
    if (lowerMessage.includes('small business') || lowerMessage.includes('startup')) {
      return 'Small Business Solutions:\n\n✓ Business formation & planning\n✓ Insurance packages\n✓ Tax planning & preparation\n✓ Bookkeeping & payroll\n✓ Digital marketing\n✓ Technology consulting\n\nComplete support for your business! Book consultation: /book-now';
    }

    // Growth Strategy
    if (lowerMessage.includes('growth') || lowerMessage.includes('scale') || lowerMessage.includes('expand')) {
      return 'Business Growth Services:\n\n✓ Strategic planning\n✓ Market analysis\n✓ Financial forecasting\n✓ Operational optimization\n✓ Technology implementation\n✓ Marketing strategy\n\nLet\'s grow your business! Book consultation: /book-now';
    }

    // Claims Support
    if (lowerMessage.includes('claim') || lowerMessage.includes('file a claim')) {
      return 'Insurance Claims Support:\n\n✓ Claims guidance & advocacy\n✓ Documentation assistance\n✓ Carrier communication\n✓ Settlement negotiation\n✓ 24/7 support\n\nWe\'re here to help with your claim! Call: 929-919-3574';
    }

    // Policy Review
    if (lowerMessage.includes('policy review') || lowerMessage.includes('review my policy')) {
      return 'Free Policy Review:\n\n✓ Coverage analysis\n✓ Gap identification\n✓ Cost optimization\n✓ Carrier comparison\n✓ Recommendations\n\nEnsure you have the right coverage! Book free review: /book-now';
    }

    // Multi-state
    if (lowerMessage.includes('multi-state') || lowerMessage.includes('multiple states')) {
      return 'Multi-State Coverage:\n\n✓ Nationwide service available\n✓ Multi-state insurance solutions\n✓ Complex coverage coordination\n✓ Compliance across states\n✓ Expert guidance\n\nWe handle complex multi-state needs! Call: 929-919-3574';
    }

    // High Net Worth
    if (lowerMessage.includes('high net worth') || lowerMessage.includes('wealthy') || lowerMessage.includes('luxury')) {
      return 'High-Net-Worth Solutions:\n\n✓ Private client insurance\n✓ Luxury home coverage\n✓ Fine art & collectibles\n✓ Yacht & exotic vehicle insurance\n✓ Umbrella & excess liability\n✓ Estate planning coordination\n\nSpecialized coverage for high-value assets! Book consultation: /book-now';
    }

    // Real Estate
    if (lowerMessage.includes('real estate') || lowerMessage.includes('property')) {
      return 'Real Estate Services:\n\n✓ Property insurance (residential & commercial)\n✓ Landlord insurance\n✓ Rental property coverage\n✓ Investment property protection\n✓ Multi-property solutions\n\nProtect your real estate investments! Get a quote: /intake-forms';
    }

    // Nonprofit
    if (lowerMessage.includes('nonprofit') || lowerMessage.includes('non-profit') || lowerMessage.includes('charity')) {
      return 'Nonprofit Organization Services:\n\n✓ Nonprofit insurance packages\n✓ Directors & Officers (D&O) coverage\n✓ General liability\n✓ Tax-exempt status support\n✓ Compliance consulting\n\nSpecialized support for nonprofits! Book consultation: /book-now';
    }

    // Healthcare
    if (lowerMessage.includes('healthcare') || lowerMessage.includes('medical') || lowerMessage.includes('health insurance')) {
      return 'Healthcare & Medical Services:\n\n✓ Professional liability (malpractice)\n✓ Healthcare business insurance\n✓ HIPAA compliance consulting\n✓ Practice management\n✓ Risk management\n\nSpecialized healthcare solutions! Book consultation: /book-now';
    }

    // Restaurant/Hospitality
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('hospitality') || lowerMessage.includes('food')) {
      return 'Restaurant & Hospitality Insurance:\n\n✓ General liability\n✓ Property coverage\n✓ Liquor liability\n✓ Workers\' compensation\n✓ Business interruption\n✓ Equipment breakdown\n\nProtect your hospitality business! Get a quote: /intake-forms';
    }

    // Technology Companies
    if (lowerMessage.includes('tech company') || lowerMessage.includes('software company') || lowerMessage.includes('saas')) {
      return 'Technology Company Services:\n\n✓ Tech E&O insurance\n✓ Cyber liability\n✓ IP protection\n✓ Technology consulting\n✓ AI implementation\n✓ Automation solutions\n\nComplete tech company support! Book consultation: /book-now';
    }

    // Response Time
    if (lowerMessage.includes('how fast') || lowerMessage.includes('how quick') || lowerMessage.includes('response time')) {
      return 'Our Response Times:\n\n✓ Phone: Immediate (24/7)\n✓ Email: Within 24 hours\n✓ Quote requests: Within 24 hours\n✓ Intake forms: Within 24 hours\n✓ Consultations: Same or next day\n\nWe prioritize quick responses! Contact us: 929-919-3574';
    }

    // Payment Options
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('billing')) {
      return 'Payment Options:\n\n✓ Flexible payment plans\n✓ Monthly installments\n✓ Annual payments (discounts available)\n✓ Multiple payment methods\n✓ Transparent billing\n\nDiscuss payment options: /book-now or call 929-919-3574';
    }

    // Referral/Recommendation
    if (lowerMessage.includes('referral') || lowerMessage.includes('recommend') || lowerMessage.includes('refer')) {
      return 'Referral Program:\n\n✓ We appreciate referrals!\n✓ Referral rewards available\n✓ Help friends & family\n✓ Grow together\n\nRefer someone or ask about our program: 929-919-3574';
    }

    // Emergency/Urgent
    if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || lowerMessage.includes('asap')) {
      return '🚨 For urgent matters:\n\n📞 Call immediately: 929-919-3574\n✓ 24/7 availability\n✓ Immediate assistance\n✓ Emergency support\n\nWe\'re here to help right now!';
    }

    // Languages
    if (lowerMessage.includes('language') || lowerMessage.includes('spanish') || lowerMessage.includes('bilingual')) {
      return 'Language Support:\n\nWe can assist you in multiple languages!\n\n📞 Call us: 929-919-3574\n📧 Email: Matthew@MRECAI.com\n\nLet us know your language preference and we\'ll accommodate!';
    }

    // Blog/Resources
    if (lowerMessage.includes('blog') || lowerMessage.includes('article') || lowerMessage.includes('tips') || lowerMessage.includes('advice')) {
      return 'Check out our blog for valuable insights:\n\n📝 Business tips & strategies\n📝 Insurance advice\n📝 Tax planning guides\n📝 Technology trends\n📝 AI & automation insights\n\nVisit our blog: /blog';
    }

    // Why Choose Us
    if (lowerMessage.includes('why choose') || lowerMessage.includes('why you') || lowerMessage.includes('what makes you different')) {
      return 'Why Choose MRECAI:\n\n✓ 15+ years of experience (since 2009)\n✓ 500+ satisfied clients\n✓ 98% success rate\n✓ 24/7 service support\n✓ Expert team\n✓ Innovative AI solutions\n✓ Personalized service\n✓ Proven track record\n\nLearn more: /about';
    }

    // Success Rate
    if (lowerMessage.includes('success rate') || lowerMessage.includes('track record')) {
      return 'Our Track Record:\n\n✓ 98% client success rate\n✓ 500+ satisfied clients\n✓ 15+ years in business\n✓ 4.9/5 average rating\n✓ Proven results across industries\n\nSee testimonials: /testimonials';
    }

    // Industries Served
    if (lowerMessage.includes('industry') || lowerMessage.includes('industries') || lowerMessage.includes('who do you serve')) {
      return 'Industries We Serve:\n\n✓ Healthcare & Medical\n✓ Technology & Software\n✓ Real Estate\n✓ Restaurants & Hospitality\n✓ Professional Services\n✓ Retail & E-commerce\n✓ Manufacturing\n✓ Nonprofits\n✓ And many more!\n\nWe have experience across diverse industries!';
    }

    // Comparison/Competitors
    if (lowerMessage.includes('compare') || lowerMessage.includes('difference') || lowerMessage.includes('vs') || lowerMessage.includes('versus')) {
      return 'What Sets Us Apart:\n\n✓ Comprehensive services (consulting + insurance)\n✓ AI & technology expertise\n✓ 24/7 availability\n✓ Personalized attention\n✓ 15+ years experience\n✓ Strategic partnerships\n✓ Proven results (98% success rate)\n\nExperience the MRECAI difference! Book consultation: /book-now';
    }

    // Credentials/Certifications
    if (lowerMessage.includes('credential') || lowerMessage.includes('certification') || lowerMessage.includes('licensed') || lowerMessage.includes('qualified')) {
      return 'Our Credentials:\n\n✓ Licensed insurance professionals\n✓ Certified business consultants\n✓ Google Analytics & Ads certified\n✓ AI & automation specialists\n✓ 15+ years combined experience\n✓ Partnerships with top carriers\n\nTrust our expertise! Learn more: /about/founder';
    }

    // Testimonials/Case Studies
    if (lowerMessage.includes('case study') || lowerMessage.includes('success story') || lowerMessage.includes('example')) {
      return 'Client Success Stories:\n\n✓ 40% efficiency increase for businesses\n✓ Thousands saved in taxes\n✓ Comprehensive coverage at competitive rates\n✓ 500+ satisfied clients\n✓ 4.9/5 average rating\n\nRead real testimonials: /testimonials';
    }

    // Newsletter
    if (lowerMessage.includes('newsletter') || lowerMessage.includes('subscribe') || lowerMessage.includes('updates')) {
      return 'Subscribe to Our Newsletter:\n\n✓ Industry insights & tips\n✓ Exclusive offers\n✓ Service updates\n✓ Expert advice\n✓ No spam, unsubscribe anytime\n\nSign up via our contact form: /contact';
    }

    // Careers/Jobs
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('hiring') || lowerMessage.includes('work for you')) {
      return 'Career Opportunities:\n\nInterested in joining our team?\n\n📧 Send your resume to: Matthew@MRECAI.com\n📞 Call to inquire: 929-919-3574\n\nWe\'re always looking for talented professionals!';
    }

    // Partnership Opportunities
    if (lowerMessage.includes('become a partner') || lowerMessage.includes('partnership opportunity')) {
      return 'Partnership Opportunities:\n\nInterested in partnering with MRECAI?\n\n✓ Strategic alliances\n✓ Referral partnerships\n✓ Co-marketing opportunities\n\nContact us: Matthew@MRECAI.com or visit /about/partners';
    }

    return null;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    // Add user message to conversation history
    const updatedHistory = [
      ...conversationHistory,
      { role: 'user' as const, content: currentMessage }
    ];
    
    // Limit to last 5 messages (remove oldest if exceeding)
    const limitedHistory = updatedHistory.slice(-5);
    setConversationHistory(limitedHistory);

    // Check knowledge base first
    const knowledgeBaseResponse = getKnowledgeBaseResponse(currentMessage);

    if (knowledgeBaseResponse) {
      // Use knowledge base response
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: knowledgeBaseResponse,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        
        // Add bot response to conversation history
        setConversationHistory((prev) => {
          const updated = [...prev, { role: 'assistant' as const, content: knowledgeBaseResponse }];
          return updated.slice(-5); // Limit to last 5 messages
        });
        
        setIsLoading(false);
        // Play notification sound for bot response
        playNotificationSound();
        // Mark as unread if chat is closed
        if (!isOpen) {
          setHasUnreadMessages(true);
        }
      }, 500); // Simulate thinking time
    } else {
      // Try API call
      try {
        const response = await sendChatMessage(currentMessage, limitedHistory);

        const botResponseText = response.data?.message || 'I apologize, but I encountered an error. Please try again.';
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        
        // Add bot response to conversation history
        setConversationHistory((prev) => {
          const updated = [...prev, { role: 'assistant' as const, content: botResponseText }];
          return updated.slice(-5); // Limit to last 5 messages
        });
        
        // Play notification sound for bot response
        playNotificationSound();
        // Mark as unread if chat is closed
        if (!isOpen) {
          setHasUnreadMessages(true);
        }
      } catch (error) {
        const errorText = 'I\'m not sure about that, but I can connect you with our team! Call us at 929-919-3574 or book a consultation at /book-now for personalized assistance.';
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: errorText,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
        
        // Add error response to conversation history
        setConversationHistory((prev) => {
          const updated = [...prev, { role: 'assistant' as const, content: errorText }];
          return updated.slice(-5); // Limit to last 5 messages
        });
        
        // Play notification sound for bot response
        playNotificationSound();
        // Mark as unread if chat is closed
        if (!isOpen) {
          setHasUnreadMessages(true);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* Chat Button with Notification Badge */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-50 transition-all duration-300">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
          aria-label="Open AI Chat"
        >
          {isOpen ? <FaTimes className="text-xl sm:text-2xl" /> : <FaRobot className="text-xl sm:text-2xl" />}

          {/* Notification Badge - shows for initial notification or unread messages */}
          {(showNotification || hasUnreadMessages) && !isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white"
            >
              <span className="absolute inset-0 bg-red-500 rounded-full animate-ping"></span>
            </motion.span>
          )}
        </motion.button>

        {/* Notification Popup */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-20 left-0 sm:bottom-0 sm:left-20 bg-white rounded-lg shadow-2xl p-3 sm:p-4 w-64 sm:w-72 border-2 border-blue-500 transition-all duration-300"
            >
              <button
                onClick={() => setShowNotification(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close notification"
              >
                <FaTimes className="text-sm" />
              </button>
              <div className="flex items-start space-x-3 pr-6">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-navy-900 text-sm mb-1">Need Help?</p>
                  <p className="text-xs text-gray-600 leading-relaxed">Chat with our AI assistant to get started</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window - Redesigned Modern Layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[380px] md:w-[400px] max-h-[85vh] sm:max-h-[600px] z-50 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Modern Header with Gradient */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30">
                      <FaRobot className="text-xl" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">AI Assistant</h3>
                    <p className="text-xs text-white/90 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Online now
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close chat"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Messages Area with Custom Scrollbar */}
            <div 
              className="message-container flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#CBD5E1 #F1F5F9'
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mb-1">
                      <FaRobot className="text-white text-xs" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] sm:max-w-[80%] ${message.sender === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl rounded-br-md'
                        : 'bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-200'
                      } px-4 py-2.5 shadow-sm`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line break-words">
                      {message.sender === 'bot'
                        ? message.text.split(/(\/.+?)(?=\s|$)/g).map((part, index) => {
                          if (part.match(/^\/[a-z-]+(?:\/[a-z-]+)?$/)) {
                            return (
                              <a
                                key={index}
                                href={part}
                                className="underline font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href = part;
                                }}
                              >
                                {part}
                              </a>
                            );
                          }
                          return part;
                        })
                        : message.text
                      }
                    </p>
                    <p className={`text-[10px] mt-1.5 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-end gap-2"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mb-1">
                    <FaRobot className="text-white text-xs" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-2">Quick Actions</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (action.action === 'quote') window.location.href = '/intake-forms';
                        else if (action.action === 'book') window.location.href = '/book-now';
                        else if (action.action === 'services') window.location.href = '/services';
                        else if (action.action === 'contact') window.location.href = '/contact';
                      }}
                      className="px-3 py-2.5 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-xl hover:bg-indigo-100 active:scale-95 transition-all border border-indigo-200"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Modern Input Area */}
            <div className="flex-shrink-0 p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-11 h-11 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                Powered by AI • Always here to help
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
