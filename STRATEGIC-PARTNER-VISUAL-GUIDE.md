# Strategic Partner Visual Guide

## 📍 Location on Website

**URL**: `/about/partners`

**Section Position**: Featured Partner Section (between Financial Advisors and Accounting Partners)

## 🎨 Visual Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  🎯 Icon: Chart Line (Green)                            │  │
│  │                                                           │  │
│  │  Investment & Financial Management Partner                │  │
│  │  Strategic partnership with a CFP® and CFA®              │  │
│  │  credentialed financial advisor                          │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ ╔═══════════════════════════════════════════════════╗   │  │
│  │ ║  GREEN GRADIENT HEADER                            ║   │  │
│  │ ║                                                    ║   │  │
│  │ ║  ┌────────┐                                       ║   │  │
│  │ ║  │ ARDIS  │  Strategic Financial Partner          ║   │  │
│  │ ║  │ IMAGE  │  CFP® | CFA® Credentialed            ║   │  │
│  │ ║  │ (Round)│  Investment & Financial Management    ║   │  │
│  │ ║  └────────┘                                       ║   │  │
│  │ ╚═══════════════════════════════════════════════════╝   │  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────┐    │  │
│  │  │ Professional Credentials & Expertise            │    │  │
│  │  │                                                  │    │  │
│  │  │ MRE Consulting & Insurance is proud to partner  │    │  │
│  │  │ with a highly credentialed financial            │    │  │
│  │  │ professional holding both the CFP® and CFA®...  │    │  │
│  │  └─────────────────────────────────────────────────┘    │  │
│  │                                                           │  │
│  │  ┌──────────────────────┐  ┌──────────────────────┐    │  │
│  │  │ 🏆 CFP®              │  │ 📈 CFA®              │    │  │
│  │  │ Certified Financial  │  │ Chartered Financial  │    │  │
│  │  │ Planner              │  │ Analyst              │    │  │
│  │  │                      │  │                      │    │  │
│  │  │ ✓ Holistic planning  │  │ ✓ Investment analysis│    │  │
│  │  │ ✓ Retirement planning│  │ ✓ Portfolio mgmt     │    │  │
│  │  │ ✓ Tax strategies     │  │ ✓ Risk assessment    │    │  │
│  │  │ ✓ Fiduciary duty     │  │ ✓ Global standards   │    │  │
│  │  └──────────────────────┘  └──────────────────────┘    │  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────┐    │  │
│  │  │ Investment & Financial Management Services      │    │  │
│  │  │                                                  │    │  │
│  │  │ ✓ Comprehensive Financial Planning              │    │  │
│  │  │ ✓ Investment Portfolio Management               │    │  │
│  │  │ ✓ Retirement Planning & Analysis                │    │  │
│  │  │ ✓ Tax-Efficient Investment Strategies           │    │  │
│  │  │ ✓ Estate & Wealth Transfer Planning             │    │  │
│  │  │ ✓ Risk Management & Insurance Analysis          │    │  │
│  │  │ ✓ Education Funding Strategies                  │    │  │
│  │  │ ✓ Business Owner Financial Planning             │    │  │
│  │  └─────────────────────────────────────────────────┘    │  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────┐    │  │
│  │  │ 🤝 How the Partnership Works                    │    │  │
│  │  │                                                  │    │  │
│  │  │ MRE handles: Business consulting, tax strategy, │    │  │
│  │  │ insurance planning, accounting, estate          │    │  │
│  │  │                                                  │    │  │
│  │  │ CFP®/CFA® partner handles: Investment portfolio,│    │  │
│  │  │ retirement planning, asset allocation           │    │  │
│  │  │                                                  │    │  │
│  │  │ Together: Unified financial ecosystem           │    │  │
│  │  └─────────────────────────────────────────────────┘    │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## 🎨 Color Palette

### Primary Colors
- **Header Background**: Green to Emerald gradient (`from-green-500 to-emerald-600`)
- **Accent Color**: Green 500 (`#22C55E`)
- **Light Background**: Green 50 (`#F0FDF4`)
- **Border**: Green 100 (`#DCFCE7`)

### Text Colors
- **Headings**: Navy 900 (`#0F172A`)
- **Body Text**: Gray 700 (`#374151`)
- **Secondary Text**: Gray 600 (`#4B5563`)
- **White Text**: On green gradient header

## 📐 Layout Specifications

### Header Section
- **Height**: Auto (responsive)
- **Padding**: 8 (2rem)
- **Background**: Gradient (green-500 to emerald-600)
- **Text Color**: White
- **Image**: 128px × 128px circular with white border

### Content Sections
- **Padding**: 8-12 (2rem-3rem)
- **Max Width**: 5xl (1024px)
- **Spacing**: 10 (2.5rem) between sections
- **Border Radius**: 2xl (1rem)

### Cards
- **Background**: Gradient from green-50 to white
- **Border**: 1px solid green-100
- **Padding**: 6 (1.5rem)
- **Border Radius**: xl (0.75rem)
- **Shadow**: lg on hover

## 🖼️ Image Specifications

### Ardis.jpeg
- **Display Size**: 128px × 128px (w-32 h-32)
- **Shape**: Circular (rounded-full)
- **Border**: 4px white border
- **Shadow**: xl shadow
- **Object Fit**: Cover
- **Location**: `/images/Ardis.jpeg`

### Image Styling
```css
width: 128px;
height: 128px;
border-radius: 9999px; /* fully rounded */
border: 4px solid white;
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
object-fit: cover;
```

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- Image centered above text
- Full-width cards
- Stacked credential cards

### Tablet (768px - 1024px)
- Two-column grid for services
- Image and text side-by-side
- Responsive padding

### Desktop (> 1024px)
- Full layout as designed
- Maximum width container (1024px)
- Optimal spacing and typography

## 🎯 Interactive Elements

### Hover Effects
- **Cards**: Slight lift (translateY: -6px)
- **Shadow**: Increase from lg to xl
- **Transition**: All 300ms ease

### Icons
- **Size**: 20px-24px
- **Color**: Green 500 or Green 600
- **Spacing**: Consistent margins

## 📊 Content Hierarchy

### Level 1: Section Title
- **Font Size**: 4xl (2.25rem)
- **Font Weight**: Bold (700)
- **Color**: Navy 900
- **Margin Bottom**: 4 (1rem)

### Level 2: Subsection Titles
- **Font Size**: 2xl (1.5rem)
- **Font Weight**: Bold (700)
- **Color**: Navy 900
- **Icon**: Included with green accent

### Level 3: Card Titles
- **Font Size**: lg (1.125rem)
- **Font Weight**: Bold (700)
- **Color**: Navy 900

### Body Text
- **Font Size**: Base (1rem) or sm (0.875rem)
- **Line Height**: Relaxed (1.625)
- **Color**: Gray 700 or Gray 600

## ✅ Accessibility Features

### Image
- **Alt Text**: "Ardis - Financial Advisor"
- **Proper sizing**: Responsive and clear
- **High contrast**: White border on green background

### Text
- **Contrast Ratio**: WCAG AA compliant
- **Font Sizes**: Readable on all devices
- **Line Height**: Comfortable reading

### Interactive Elements
- **Focus States**: Visible outlines
- **Touch Targets**: Minimum 44px × 44px
- **Keyboard Navigation**: Full support

## 🎨 Design Patterns Used

### Cards
- Gradient backgrounds (green-50 to white)
- Subtle borders (green-100)
- Consistent padding (6)
- Rounded corners (xl)

### Icons
- React Icons (FaCheckCircle, FaChartLine, FaAward, FaHandshake)
- Consistent sizing (text-xl, text-2xl)
- Green color scheme
- Proper spacing

### Badges/Pills
- Rounded full
- Green background
- White text
- Proper padding

## 📏 Spacing System

### Section Spacing
- **Between Sections**: 10 (2.5rem)
- **Within Sections**: 6 (1.5rem)
- **Card Padding**: 6-8 (1.5rem-2rem)

### Grid Gaps
- **Two Column**: 6 (1.5rem)
- **Three Column**: 4 (1rem)
- **Service Cards**: 4 (1rem)

## 🎭 Animation

### Initial Load
- **Opacity**: 0 → 1
- **Y Position**: 30px → 0
- **Duration**: 0.6s
- **Easing**: Default

### Hover States
- **Transform**: translateY(-6px)
- **Shadow**: lg → xl
- **Duration**: 300ms
- **Easing**: ease

## 📝 Typography

### Font Family
- **Primary**: System font stack (Tailwind default)
- **Fallback**: Sans-serif

### Font Weights
- **Normal**: 400
- **Semibold**: 600
- **Bold**: 700

### Line Heights
- **Tight**: 1.25 (headings)
- **Normal**: 1.5 (body)
- **Relaxed**: 1.625 (long-form content)

## 🔗 Navigation

### Breadcrumb
Home → About → Partners

### Related Links
- About page
- Services page
- Book Now page
- Contact page

## 📱 Mobile Optimization

### Image
- Centered on mobile
- Maintains aspect ratio
- Proper spacing

### Text
- Centered on mobile
- Left-aligned on desktop
- Responsive font sizes

### Cards
- Full width on mobile
- Grid on tablet/desktop
- Touch-friendly spacing

## 🎨 Visual Consistency

### Matches Existing Partners
- NovaEdge Solutions (Technology Partner)
- Grober Imbey Insurance (Insurance Partner)
- Same card structure
- Consistent spacing
- Similar content organization

### Brand Alignment
- Uses MRE color palette
- Consistent typography
- Professional presentation
- Trust-building design

---

## Quick Reference

**Section**: Featured Financial Partner
**Color**: Green/Emerald
**Image**: Ardis.jpeg (circular, 128px)
**Credentials**: CFP® and CFA®
**Services**: 8 comprehensive offerings
**Layout**: Featured partner card with detailed sections
**Position**: After Financial Advisors, before Accounting Partners
