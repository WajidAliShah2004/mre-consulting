# Design Document

## Overview

This design document outlines the technical approach for implementing a comprehensive website content and structure redesign for MRE Consulting & Insurance (MRECAI). The redesign focuses on enhancing the homepage hero section, improving service content, adding email capture functionality, and restructuring navigation to improve user experience and lead generation.

### Current Technology Stack

- **Frontend**: React with TypeScript, Vite build tool
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: React Icons (Font Awesome)
- **Backend**: Node.js/Express (for form submissions and email capture)
- **Database**: Supabase (PostgreSQL)

### Design Principles

1. **Mobile-First Responsive Design**: All components must work seamlessly across devices
2. **Accessibility Compliance**: WCAG AA standards with keyboard navigation and screen reader support
3. **Performance Optimization**: Lazy loading, optimized assets, minimal bundle size
4. **Progressive Enhancement**: Core functionality works without JavaScript
5. **SEO Optimization**: Semantic HTML, proper meta tags, structured data

## Architecture

### Component Structure

```
client/src/
├── pages/
│   ├── Home.tsx (major updates - hero section, who we are, client metric)
│   ├── Services.tsx (content expansion - add 5 new services)
│   ├── Contact.tsx (email capture addition - integrate with existing form)
│   └── AdviceEducation.tsx (NEW - create or map to existing content)
├── components/
│   ├── layout/
│   │   └── Navbar.tsx (navigation restructure - reorder menu items)
│   ├── common/
│   │   └── SEO.tsx (existing - no changes needed)
├── utils/
│   └── constants.ts (service content updates - add SERVICES_EXPANDED)
└── assets/
    └── logo.svg (NEW - optimized SVG logo)

server/src/
├── controllers/
│   └── newsletterController.ts (EXISTING - already handles email capture)
├── services/
│   └── emailService.ts (EXISTING - already configured with nodemailer)
└── routes/
    └── newsletterRoutes.ts (EXISTING - already has subscribe/unsubscribe)

database/
└── supabase-tables.sql (EXISTING - newsletter table already exists)
```

**Note**: The email capture infrastructure already exists! We just need to integrate it into the Contact page form.

### Data Flow

```
User Interaction → Contact Form Component → POST /api/newsletter/subscribe → newsletterController.subscribe()
                                                                                        ↓
                                                                              Check existing subscription
                                                                                        ↓
                                                                              Insert/Update in Supabase
                                                                                        ↓
                                                                              Send welcome email via emailService
                                                                                        ↓
                                                                              Return success response
```

**Existing Infrastructure**:
- Newsletter table in Supabase with email, status, subscribed_at, unsubscribed_at
- newsletterController with subscribe/unsubscribe methods
- emailService configured with nodemailer
- Rate limiting middleware already applied
- Email validation with express-validator

## Components and Interfaces

### 1. Homepage Hero Section Redesign

#### Component: `HeroSection.tsx`

**Purpose**: Create a captivating landing experience with mandatory messaging, animated logo, and clear CTAs.

**Props Interface**:
```typescript
interface HeroSectionProps {
  title: string;
  openingStatement: string;
  ctaPrimary: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary';
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  stats: Array<{
    icon: IconType;
    number: string;
    label: string;
    color: string;
    bgColor: string;
    link: string;
  }>;
}
```

**Design Specifications**:
- **Layout**: Two-column grid on desktop (content left, stats right), stacked on mobile
- **Typography**: 
  - Title: 5xl-7xl font size, bold weight, gradient text effect
  - Opening statement: xl-2xl font size, gray-300 color
- **Animation**: 
  - Floating orbs using CSS animations with `animate-float` class
  - Subtle text animations using Framer Motion
  - Logo rotation/scale on hover
- **Accessibility**:
  - Reduced motion support via `prefers-reduced-motion` media query
  - High contrast ratios (4.5:1 minimum for text)
  - Keyboard-navigable CTAs with visible focus states

**Implementation Details**:
```typescript
// Animation configuration
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Reduced motion handling
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animationConfig = prefersReducedMotion ? {} : heroVariants;
```

#### Component: `AnimatedLogo.tsx`

**Purpose**: Display high-resolution SVG logo with subtle animation.

**Props Interface**:
```typescript
interface AnimatedLogoProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}
```

**Design Specifications**:
- **Format**: SVG for scalability and performance
- **Size**: Responsive sizing based on viewport (h-12 to h-20)
- **Animation**: Subtle pulse or float effect (optional, respects motion preferences)
- **Lazy Loading**: Use `loading="lazy"` attribute for non-critical instances

### 2. "Who We Are" Section Enhancement

#### Component: `WhoWeAreSection.tsx`

**Purpose**: Display compelling brand messaging with trust indicators.

**Props Interface**:
```typescript
interface WhoWeAreSectionProps {
  heading: string;
  content: string;
  metrics: Array<{
    value: string | number;
    label: string;
    link: string;
  }>;
}
```

**Design Specifications**:
- **Layout**: Centered content with max-width constraint (max-w-3xl)
- **Typography**: 
  - Heading: 4xl-5xl font size, gradient text
  - Content: lg font size, gray-700 color, relaxed leading
- **Metrics Grid**: 2x2 grid on mobile, 4 columns on desktop
- **Hover Effects**: Scale transform on metric cards

**Content Requirements**:
- Replace existing "underpowered" copy with stronger messaging
- Maintain consistency with hero section value proposition
- Update client metric from current value to 180

### 3. Services Page Content Expansion

#### Updated Constants: `constants.ts`

**New Service Definitions**:
```typescript
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
    description: 'Professional investment and financial management services delivered through our strategic partner with CFP and CFA credentials.',
    icon: FaChartLine,
    features: [
      'Investment portfolio management',
      'Retirement planning',
      'Wealth management',
      'Financial planning',
      'Risk assessment and management'
    ],
    detailedDescription: 'Through our strategic partnership with certified financial professionals (CFP and CFA), we provide comprehensive investment and financial management services. Our partner brings decades of expertise in portfolio management, retirement planning, and wealth preservation.',
    partnerDisclosure: 'Investment and financial management services are provided through our strategic partner, a Certified Financial Planner (CFP) and Chartered Financial Analyst (CFA).'
  }
];
```

#### Component: `ServiceDetailCard.tsx`

**Purpose**: Display expanded service information with clear features and CTAs.

**Props Interface**:
```typescript
interface ServiceDetailCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: IconType;
    features: string[];
    detailedDescription: string;
    partnerDisclosure?: string;
  };
  index: number;
}
```

**Design Specifications**:
- **Layout**: Card-based design with gradient accent, icon, title, description, features list, and CTAs
- **Features List**: Checkmark icons with feature text
- **Partner Disclosure**: Italicized text in smaller font for investment services
- **CTAs**: Two buttons - "Book Now" (primary) and "Get Quote" (secondary)
- **Hover Effects**: Lift animation, shadow enhancement, border color change

### 4. Contact Page Email Capture

#### Component: `EmailCaptureForm.tsx`

**Purpose**: Collect email addresses for marketing with proper consent and compliance.

**Props Interface**:
```typescript
interface EmailCaptureFormProps {
  onSubmit: (email: string, consent: boolean) => Promise<void>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errorMessage?: string;
}
```

**Design Specifications**:
- **Layout**: Checkbox or dedicated field within contact form
- **Placement**: Below main contact form, clearly separated
- **Labels**: Clear opt-in language ("Subscribe to our newsletter for updates, tips, and exclusive offers")
- **Privacy Link**: Link to privacy policy adjacent to checkbox
- **Validation**: Email format validation, required consent checkbox
- **Feedback**: Success/error messages with appropriate styling

**Compliance Requirements**:
- **GDPR**: Explicit opt-in consent, clear purpose statement, easy unsubscribe
- **CCPA**: Privacy policy link, data usage disclosure
- **CAN-SPAM**: Physical address in emails, unsubscribe mechanism

#### Backend Integration: Existing `newsletterController.ts`

**Current Implementation**: The email capture functionality already exists and is fully functional.

**Existing API Endpoint**: `POST /api/newsletter/subscribe`

**Request Body**:
```typescript
{
  email: string; // Required, validated with express-validator
}
```

**Response**:
```typescript
{
  success: boolean;
  message: string;
}
```

**Current Features**:
- ✅ Email validation with express-validator
- ✅ Duplicate email handling (resubscribes if previously unsubscribed)
- ✅ Supabase database storage
- ✅ Welcome email sent via nodemailer
- ✅ Rate limiting via formLimiter middleware
- ✅ Unsubscribe functionality

**What We Need to Do**:
1. Add newsletter checkbox to Contact page form
2. Call existing `/api/newsletter/subscribe` endpoint when checkbox is checked
3. Display success/error messages
4. Add privacy policy link and consent language

**No backend changes required** - the infrastructure is already built and working!

### 5. Navigation Menu Restructure

#### Updated Component: `Navbar.tsx`

**Purpose**: Reorder navigation to improve user flow and content discovery.

**Current Order**:
```
Home → Intake Forms → Testimonials → Blog → Contact → About (dropdown) → Services (dropdown) → Book Now
```

**New Required Order**:
```
Home → About (dropdown) → Services (dropdown) → Testimonials → Blog → Advice and Education → Contact → Book Now
```

**Design Specifications**:
- **Desktop Navigation**: Horizontal menu with dropdowns for About and Services
- **Mobile Navigation**: Collapsible hamburger menu with accordion dropdowns
- **Active States**: Underline or background highlight for current page
- **Accessibility**: ARIA labels, keyboard navigation, focus management

**Implementation Changes**:
```typescript
const navLinks = [
  { name: 'Home', path: '/' },
  // About dropdown remains
  // Services dropdown remains
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Advice and Education', path: '/advice-education' }, // NEW
  { name: 'Contact', path: '/contact' },
  // Book Now CTA remains separate
];
```

**Note**: "Advice and Education" page needs to be created or mapped to existing content.

## Data Models

### Email Capture Database Schema

**Existing Table: `newsletter`** (already created in Supabase)
```sql
CREATE TABLE IF NOT EXISTS newsletter (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Existing indexes
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter(status);
```

**RLS Policies** (already configured):
- Anyone can insert (subscribe)
- Anyone can update (unsubscribe)
- Only authenticated users can view all subscribers

**No database changes required** - the table structure is already optimal for our needs.

### Content Updates Data Structure

**Homepage Content**:
```typescript
interface HomepageContent {
  hero: {
    title: string;
    openingStatement: string; // MANDATORY: "Empowering success for individuals, families, and businesses with expert consulting and business technology, insurance, and finance."
    ctaPrimary: CTAButton;
    ctaSecondary?: CTAButton;
  };
  whoWeAre: {
    heading: string;
    content: string; // NEW: Stronger, more compelling copy
    metrics: {
      clientsServed: 180; // UPDATED from previous value
      founded: number;
      satisfactionRate: string;
      support: string;
    };
  };
}
```

## Error Handling

### Email Capture Error Scenarios

1. **Invalid Email Format**
   - Client-side validation with regex
   - User-friendly error message: "Please enter a valid email address"
   - Highlight field in red

2. **Duplicate Email**
   - Check database before submission
   - Message: "This email is already subscribed. Thank you!"
   - Treat as success to avoid information disclosure

3. **API Failure**
   - Retry logic (3 attempts with exponential backoff)
   - Fallback: Store in database for manual processing
   - User message: "We're experiencing technical difficulties. Please try again later."

4. **Missing Consent**
   - Prevent submission
   - Message: "Please confirm you'd like to receive our newsletter"
   - Highlight checkbox

### Form Validation

```typescript
interface ValidationResult {
  isValid: boolean;
  errors: {
    [field: string]: string;
  };
}

function validateEmailCapture(data: EmailCaptureData): ValidationResult {
  const errors: { [key: string]: string } = {};
  
  // Email validation
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Consent validation
  if (!data.consent) {
    errors.consent = 'Please confirm you\'d like to receive our newsletter';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
```

## Testing Strategy

### Unit Tests

**Components to Test**:
1. `HeroSection.tsx`
   - Renders mandatory opening statement correctly
   - Displays logo with proper alt text
   - CTA buttons link to correct destinations
   - Respects reduced motion preferences

2. `EmailCaptureForm.tsx`
   - Validates email format
   - Requires consent checkbox
   - Displays success/error messages
   - Prevents duplicate submissions

3. `ServiceDetailCard.tsx`
   - Renders all five required services
   - Displays partner disclosure for investment services
   - Features list renders correctly

**Test Framework**: Vitest + React Testing Library

**Example Test**:
```typescript
describe('HeroSection', () => {
  it('displays mandatory opening statement', () => {
    render(<HeroSection {...mockProps} />);
    expect(screen.getByText(/Empowering success for individuals, families, and businesses/i)).toBeInTheDocument();
  });
  
  it('respects reduced motion preferences', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    
    render(<HeroSection {...mockProps} />);
    const animatedElement = screen.getByTestId('hero-content');
    expect(animatedElement).not.toHaveClass('animate-float');
  });
});
```

### Integration Tests

**Scenarios to Test**:
1. **Email Capture Flow**
   - User fills form → submits → receives confirmation
   - User submits duplicate email → receives appropriate message
   - User submits without consent → sees validation error

2. **Navigation Flow**
   - User clicks navigation items in new order
   - Dropdowns expand/collapse correctly
   - Mobile menu functions properly

3. **Service Page Navigation**
   - All five services display correctly
   - CTAs link to booking page
   - Partner disclosure appears for investment services

### Accessibility Tests

**Tools**: axe-core, WAVE, Lighthouse

**Checklist**:
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Screen readers announce content correctly
- [ ] Form labels are properly associated
- [ ] Error messages are announced
- [ ] Reduced motion preferences are respected
- [ ] ARIA attributes are used correctly

### Performance Tests

**Metrics to Monitor**:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

**Optimization Strategies**:
1. Lazy load non-critical animations
2. Optimize logo SVG (remove unnecessary paths)
3. Code splitting for service detail pages
4. Image optimization (WebP format with fallbacks)
5. Minimize JavaScript bundle size

### End-to-End Tests

**Framework**: Playwright or Cypress

**Critical User Journeys**:
1. **Homepage to Booking**
   - Land on homepage → Read hero content → Click CTA → Reach booking page

2. **Service Discovery**
   - Navigate to Services → Browse all five services → Click "Book Now" → Reach booking page

3. **Email Subscription**
   - Navigate to Contact → Fill contact form → Check newsletter box → Submit → Receive confirmation

**Example E2E Test**:
```typescript
test('user can subscribe to newsletter from contact page', async ({ page }) => {
  await page.goto('/contact');
  
  // Fill form
  await page.fill('[name="email"]', 'test@example.com');
  await page.check('[name="newsletter"]');
  
  // Submit
  await page.click('button[type="submit"]');
  
  // Verify success
  await expect(page.locator('.success-message')).toBeVisible();
  await expect(page.locator('.success-message')).toContainText('subscribed');
});
```

## Security Considerations

### Email Capture Security

1. **Rate Limiting**
   - Limit submissions to 5 per IP per hour
   - Prevent spam and abuse

2. **Input Sanitization**
   - Sanitize all user inputs before database storage
   - Prevent SQL injection and XSS attacks

3. **CSRF Protection**
   - Implement CSRF tokens for form submissions
   - Validate tokens on backend

4. **Data Encryption**
   - Encrypt email addresses at rest
   - Use HTTPS for all data transmission

5. **Privacy Compliance**
   - Store consent timestamp and IP address
   - Provide easy unsubscribe mechanism
   - Honor data deletion requests (GDPR Right to be Forgotten)

### API Security

```typescript
// Rate limiting middleware
import rateLimit from 'express-rate-limit';

const emailCaptureLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: 'Too many subscription attempts. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/email-capture', emailCaptureLimit, emailCaptureController.subscribe);
```

## Performance Optimization

### Image Optimization

1. **Logo**
   - Convert to optimized SVG
   - Remove unnecessary metadata
   - Inline critical SVG for hero section
   - Lazy load other instances

2. **Background Images**
   - Use CSS gradients instead of images where possible
   - Implement blur-up technique for large images
   - Serve WebP with PNG/JPG fallback

### Code Splitting

```typescript
// Lazy load service detail pages
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

// Lazy load email capture form
const EmailCaptureForm = lazy(() => import('./components/features/EmailCaptureForm'));
```

### Animation Performance

1. **Use CSS Transforms**
   - Prefer `transform` and `opacity` for animations
   - Avoid animating `width`, `height`, `top`, `left`

2. **Reduce Animation Complexity**
   - Limit number of simultaneous animations
   - Use `will-change` sparingly

3. **Respect User Preferences**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

## Deployment Strategy

### Phased Rollout

**Phase 1: Homepage Updates**
- Deploy hero section redesign
- Update "Who We Are" content
- Update client metric to 180

**Phase 2: Services Expansion**
- Add five new service definitions
- Update Services page layout
- Deploy service detail cards

**Phase 3: Email Capture**
- Deploy backend email capture API
- Integrate with email marketing platform
- Add form to Contact page

**Phase 4: Navigation Restructure**
- Update navigation order
- Create/map "Advice and Education" page
- Test all navigation flows

### Rollback Plan

- Maintain previous version in separate branch
- Use feature flags for gradual rollout
- Monitor error rates and user feedback
- Quick rollback capability via deployment pipeline

## Monitoring and Analytics

### Key Metrics to Track

1. **Engagement Metrics**
   - Hero section CTA click-through rate
   - Service page bounce rate
   - Time on page for Services

2. **Conversion Metrics**
   - Email capture conversion rate
   - Booking form submissions
   - Service inquiry rate

3. **Technical Metrics**
   - Page load times
   - Error rates
   - API response times

### Analytics Implementation

```typescript
// Track email capture
analytics.track('Email Captured', {
  source: 'contact_form',
  timestamp: new Date().toISOString()
});

// Track CTA clicks
analytics.track('CTA Clicked', {
  location: 'hero_section',
  cta_text: 'Book Free Consultation',
  destination: '/book-now'
});
```

## Implementation Approach Based on Existing Codebase

### Leveraging Existing Infrastructure

The codebase already has robust infrastructure that we can leverage:

1. **Styling System**:
   - Tailwind CSS with custom theme (primary blue #00A8E8, navy #1E3A5F)
   - Custom animations (float, fade-in, slide-up, etc.)
   - Responsive breakpoints (xs, sm, md, lg, xl, 2xl, 3xl)
   - Typography scale with line heights and letter spacing

2. **Animation Library**:
   - Framer Motion for complex animations
   - AOS (Animate On Scroll) for scroll-triggered animations
   - Custom Tailwind animations for simple effects

3. **Component Patterns**:
   - Motion components with initial/animate/whileInView props
   - Gradient backgrounds with floating orbs
   - Card-based layouts with hover effects
   - Responsive grid systems

4. **Backend Patterns**:
   - Express with TypeScript
   - Supabase for database
   - express-validator for input validation
   - Rate limiting middleware
   - Nodemailer for email sending

### Reusable Patterns from Existing Code

**Hero Section Pattern** (from Home.tsx):
```typescript
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
    {/* Floating orbs */}
    <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
  </div>
  <div className="container-custom relative z-10">
    {/* Content */}
  </div>
</section>
```

**Card Hover Pattern** (from Services.tsx):
```typescript
<motion.div
  whileHover={{ y: -6, scale: 1.02 }}
  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
>
  {/* Gradient accent */}
  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600"></div>
  {/* Content */}
</motion.div>
```

**Form Pattern** (from Contact.tsx):
```typescript
const [formData, setFormData] = useState({ /* fields */ });
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    // API call
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Logo Implementation Strategy

**Current Logo Usage** (from Navbar.tsx):
```typescript
<img 
  src={logoImage} 
  alt="MRE Consulting & Insurance" 
  className="h-12 w-auto min-w-[180px] object-contain drop-shadow-sm"
  style={{ 
    filter: 'contrast(1.1) brightness(1.05)',
    transform: 'scale(1.4)',
    transformOrigin: 'center'
  }}
/>
```

**For Hero Section**: We'll use a larger version with subtle animation:
```typescript
<motion.img
  src={logoSvg}
  alt="MRE Consulting & Insurance"
  className="h-20 md:h-24 w-auto"
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>
```

### Navigation Restructure Strategy

**Current Navigation** (from Navbar.tsx):
```typescript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Intake Forms', path: '/intake-forms' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];
```

**Required Changes**:
1. Remove "Intake Forms" from main navigation (or move to footer)
2. Add "Advice and Education" link
3. Reorder to: Home → About → Services → Testimonials → Blog → Advice and Education → Contact

**About and Services dropdowns already exist** - no structural changes needed, just reordering.

## Open Questions and Decisions Needed

### Critical Decisions

1. **"Advice and Education" Page** ⚠️ REQUIRED
   - Does this page exist?
   - Should it be created or mapped to existing content (e.g., Blog)?
   - If new page needed, what content should it contain?

2. **CTA Destination**
   - Primary hero CTA currently links to `/book-now` - should this remain?
   - Client briefing suggests "Explore Services" or "Book a Consultation" as options

3. **Logo Asset** ⚠️ REQUIRED
   - Current logo is PNG at `client/images/logo.png`
   - Need SVG version for hero section
   - Should we convert existing PNG to SVG or is SVG file available?

4. **"Who We Are" Content** ⚠️ REQUIRED
   - Who will write the new compelling content?
   - Current content: "MRE Consulting & Insurance is your trusted partner in business growth, financial management, and risk protection. We combine decades of expertise with cutting-edge technology to deliver personalized solutions that drive real results."
   - What key messages should be emphasized in replacement?

5. **Service Descriptions** ⚠️ REQUIRED
   - Who will write the detailed descriptions for the 5 new services?
   - What compliance requirements exist for insurance/financial services descriptions?

6. **Partner Disclosure Wording** ⚠️ REQUIRED
   - What specific compliant wording is required for investment services?
   - Current placeholder: "Investment and financial management services are provided through our strategic partner, a Certified Financial Planner (CFP) and Chartered Financial Analyst (CFA)."
   - Are there regulatory requirements to follow?

### Content Decisions (Lower Priority)

1. **Animation Style**
   - Current site uses floating orbs and gradient animations
   - Should hero section follow same pattern or introduce new animation style?
   - Recommendation: Keep consistent with existing patterns

2. **A/B Testing**
   - Client briefing mentions A/B testing for CTA text
   - Current infrastructure doesn't include A/B testing
   - Should this be implemented or deferred to future phase?

3. **Email Marketing Platform Integration**
   - Current implementation stores emails in Supabase only
   - Should we integrate with external platform (Mailchimp, SendGrid, etc.)?
   - Or continue with current approach and export manually?

### Design Decisions (Already Resolved)

These are already defined in the codebase:

1. **Brand Colors** ✅
   - Primary: #00A8E8 (bright blue)
   - Navy: #1E3A5F (dark blue)
   - Accent Green: #2C5F2D
   - Full color palette defined in tailwind.config.js

2. **Typography** ✅
   - Font families: Poppins (headings), Inter (body)
   - Typography scale with line heights defined
   - Accessibility-compliant font sizes (minimum 16px base)

3. **Animation Style** ✅
   - Floating orbs with blur effects
   - Gradient backgrounds
   - Subtle hover animations (lift, scale, shadow)
   - Framer Motion for complex animations
   - AOS for scroll-triggered animations

## Success Criteria

### Functional Requirements Met

- [ ] Hero section displays mandatory opening statement verbatim
- [ ] Hero section includes benefit-driven title
- [ ] High-resolution logo displayed prominently
- [ ] Subtle animation implemented with motion-reduction support
- [ ] Primary CTA with contrasting color
- [ ] Mobile-first responsive design
- [ ] Accessibility compliance (keyboard navigation, high contrast, screen reader support)
- [ ] "Who We Are" content updated with compelling copy
- [ ] Client metric updated to 180
- [ ] Five service sections added to Services page (Accounting, Tax, Insurance, Estate, Investment)
- [ ] Partner disclosure for Investment services
- [ ] Email capture form on Contact page
- [ ] Email marketing platform integration
- [ ] Privacy policy link and consent language
- [ ] GDPR/CCPA compliance
- [ ] Navigation menu reordered correctly
- [ ] Consistent navigation across desktop and mobile

### Performance Targets

- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Lighthouse Accessibility score > 95
- [ ] Lighthouse Performance score > 90

### User Experience Goals

- [ ] Improved homepage engagement (measured by time on page)
- [ ] Increased CTA click-through rate
- [ ] Higher email capture conversion rate
- [ ] Reduced bounce rate on Services page
- [ ] Improved navigation flow (measured by user journey analytics)
