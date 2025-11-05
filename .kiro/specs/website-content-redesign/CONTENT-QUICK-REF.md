# Content Quick Reference Card

Quick copy/paste reference for implementation. Full details in `content.md`.

---

## 🎯 Hero Section

**Title:**
```
Your Partner in Business Growth, Financial Security, and Technological Innovation
```

**Opening Statement (MANDATORY - EXACT TEXT):**
```
Empowering success for individuals, families, and businesses with expert consulting and business technology, insurance, and finance.
```

**Supporting Copy:**
```
Comprehensive solutions for individuals, families, and businesses seeking growth, efficiency, and security.
```

---

## 👥 Who We Are

**Main Content:**
```
MRE Consulting & Insurance stands at the intersection of traditional expertise and cutting-edge innovation. We're not just consultants—we're your strategic partners in navigating the complex landscape of modern business, finance, and technology.

With a foundation built on decades of combined experience and a forward-thinking approach powered by AI and automation, we deliver personalized solutions that drive measurable results. Whether you're an individual planning for the future, a family protecting what matters most, or a business scaling to new heights, we bring the expertise, technology, and dedication to help you succeed.

Our commitment goes beyond transactions. We build lasting relationships, understand your unique challenges, and craft strategies that align with your goals. From comprehensive insurance coverage to strategic business consulting, from tax optimization to cutting-edge AI implementation—we're here to empower your success at every stage.
```

**Metrics:**
- 180 (Clients Served)
- 2024 (Founded)
- 98% (Satisfaction Rate)
- 24/7 (Available Support)

---

## 📊 Services (Add to constants.ts)

### 1. Accounting Services
```typescript
{
  id: 'accounting-services',
  title: 'Accounting Services',
  description: 'Comprehensive accounting operations including bookkeeping and financial management for businesses of all sizes.',
  icon: FaCalculator,
  features: [
    'Full-service bookkeeping and transaction recording',
    'Accounts payable and receivable management',
    'Financial statement preparation and analysis',
    'Payroll processing and tax withholding',
    'QuickBooks setup, training, and ongoing support',
    'Month-end and year-end closing procedures',
    'Bank reconciliation and cash flow management',
    'Financial reporting and business insights'
  ]
}
```

### 2. Tax Preparation & Consulting
```typescript
{
  id: 'tax-preparation-consulting',
  title: 'Tax Preparation & Consulting',
  description: 'Strategic tax planning and preparation services for individuals and businesses to minimize liability and maximize returns.',
  icon: FaFileInvoiceDollar,
  features: [
    'Individual tax return preparation (1040, state, and local)',
    'Business tax return preparation (1120, 1120S, 1065, Schedule C)',
    'Strategic tax planning and optimization',
    'IRS audit representation and support',
    'Tax compliance consulting and advisory',
    'Quarterly estimated tax calculations',
    'Multi-state tax filing and nexus analysis',
    'Tax credit identification and documentation'
  ]
}
```

### 3. Insurance Consulting
```typescript
{
  id: 'insurance-consulting',
  title: 'Insurance Consulting',
  description: 'Expert guidance across all insurance needs, from homeowners and auto to life insurance and beyond.',
  icon: FaShieldAlt,
  features: [
    'Homeowners and renters insurance',
    'Auto and vehicle insurance',
    'Life insurance (term, whole, universal)',
    'Health insurance and Medicare planning',
    'Business insurance and liability coverage',
    'Umbrella policies for additional protection',
    'Disability and long-term care insurance',
    'Policy review and optimization services'
  ]
}
```

### 4. Estate Consulting Services
```typescript
{
  id: 'estate-consulting',
  title: 'Estate Consulting Services',
  description: 'Professional estate planning and consulting to protect your legacy and ensure smooth wealth transfer.',
  icon: FaLandmark,
  features: [
    'Estate planning strategy and consultation',
    'Trust establishment and management guidance',
    'Beneficiary planning and designation review',
    'Asset protection strategies and structures',
    'Estate tax planning and minimization',
    'Charitable giving and legacy planning',
    'Business succession planning',
    'Coordination with attorneys and financial advisors'
  ]
}
```

### 5. Investment & Financial Management
```typescript
{
  id: 'investment-financial-management',
  title: 'Investment & Financial Management',
  description: 'Professional investment and financial management services delivered through our strategic partner with CFP and CFA credentials.',
  icon: FaChartLine,
  features: [
    'Investment portfolio management and rebalancing',
    'Retirement planning and 401(k) optimization',
    'Wealth management and preservation strategies',
    'Comprehensive financial planning and analysis',
    'Risk assessment and management',
    'Asset allocation and diversification strategies',
    'Tax-efficient investment strategies',
    'Regular portfolio reviews and performance reporting'
  ],
  partnerDisclosure: 'Investment and financial management services are provided through our strategic partner, a Certified Financial Planner (CFP®) and Chartered Financial Analyst (CFA®). Securities and advisory services offered through qualified professionals. All investment strategies carry risk, including the potential loss of principal.'
}
```

**Import needed:**
```typescript
import { FaCalculator, FaFileInvoiceDollar, FaLandmark } from 'react-icons/fa';
```

---

## 📧 Email Capture (Contact Page)

**Checkbox Label:**
```
Subscribe to our newsletter for updates, tips, and exclusive offers
```

**Privacy Link:**
```
View our Privacy Policy
```

**Success Message:**
```
Thank you for subscribing! Check your email for a welcome message.
```

**Error Messages:**
```typescript
{
  invalidEmail: 'Please enter a valid email address',
  alreadySubscribed: 'This email is already subscribed to our newsletter',
  serverError: 'We\'re experiencing technical difficulties. Please try again later or contact us directly.'
}
```

---

## 🧭 Navigation Order

```typescript
const navLinks = [
  { name: 'Home', path: '/' },
  // About dropdown (existing)
  // Services dropdown (existing)
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Advice and Education', path: '/advice-education' }, // NEW - redirects to /blog
  { name: 'Contact', path: '/contact' },
];
```

**Route Alias (App.tsx):**
```typescript
<Route path="advice-education" element={<Navigate to="/blog" replace />} />
```

---

## 🔍 SEO Updates

**Homepage Meta Description:**
```
Expert business consulting, insurance, and financial services. Empowering success for individuals, families, and businesses with technology-driven solutions. 180+ clients served. Book your free consultation today.
```

**Services Page Meta Description:**
```
Comprehensive business services including accounting, tax preparation, insurance consulting, estate planning, and investment management. Professional solutions tailored to your needs.
```

---

## 🎨 Quick Styling Reference

**Primary Color:** `text-primary-600` or `bg-primary-500`
**Navy:** `text-navy-900` or `bg-navy-800`
**Gradient Text:** `bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent`
**Card Hover:** `hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`
**Button Primary:** `bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl px-8 py-4`

---

**Full details in content.md** | **Implementation tasks in tasks.md**
