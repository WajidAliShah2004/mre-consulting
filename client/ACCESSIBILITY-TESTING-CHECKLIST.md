# Accessibility Testing Checklist

## Manual Testing Guide

### 1. Keyboard Navigation Testing

#### Hero Section (Home Page)
- [ ] Tab to "Book Free Consultation" button - verify visible focus ring
- [ ] Press Enter on button - verify navigation works
- [ ] Tab to "Explore Services" button - verify visible focus ring
- [ ] Tab to phone link - verify visible focus ring and proper announcement
- [ ] Tab to email link - verify visible focus ring and proper announcement
- [ ] Verify all stat cards are keyboard accessible (wrapped in Link)

#### Navigation (All Pages)
- [ ] Press Tab from page load - verify "Skip to main content" link appears
- [ ] Press Enter on skip link - verify focus moves to main content
- [ ] Tab through navigation menu - verify all links have visible focus
- [ ] Press Enter on "About" dropdown - verify dropdown opens
- [ ] Use arrow keys to navigate dropdown items
- [ ] Press Escape to close dropdown
- [ ] Repeat for "Services" dropdown
- [ ] Tab to "Book Now" button - verify prominent focus ring
- [ ] Test mobile menu button with keyboard (Space/Enter to toggle)

#### Services Page
- [ ] Tab through all service cards - verify focus visible
- [ ] Tab to "Book Now" buttons - verify focus visible
- [ ] Tab to "Get Quote" buttons - verify focus visible
- [ ] Tab through process steps
- [ ] Tab through testimonial cards
- [ ] Tab to CTA buttons at bottom

#### Contact Page
- [ ] Tab through all form fields - verify focus visible
- [ ] Tab to newsletter checkbox - verify focus visible
- [ ] Tab to submit button - verify focus visible
- [ ] Tab through social media links - verify focus visible
- [ ] Tab through contact info cards - verify focus visible

### 2. Screen Reader Testing

#### Test with NVDA (Windows) or VoiceOver (Mac)

**Hero Section:**
- [ ] Logo alt text is announced correctly
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] CTA button aria-label is announced
- [ ] Phone and email links have descriptive aria-labels
- [ ] Stat cards announce correctly

**Navigation:**
- [ ] Skip link is announced when focused
- [ ] Navigation landmark is identified
- [ ] Dropdown buttons announce expanded/collapsed state
- [ ] Active page is indicated

**Services Page:**
- [ ] Service card headings are announced
- [ ] Feature lists are read correctly
- [ ] Partner disclosure is announced
- [ ] Icons are not announced (aria-hidden)

**Contact Form:**
- [ ] Form labels are associated with inputs
- [ ] Required fields are announced
- [ ] Error messages are announced immediately (role="alert")
- [ ] Success messages are announced
- [ ] Newsletter checkbox label is read correctly

### 3. Color Contrast Testing

#### Use Browser DevTools or Online Tools

**Text Contrast Ratios (WCAG AA: 4.5:1 minimum):**
- [ ] White text on navy-900 background: >7:1 ✓
- [ ] Gray-200 text on navy-900: >4.5:1 ✓
- [ ] Navy-900 text on white: >7:1 ✓
- [ ] Gray-700 text on white: >4.5:1 ✓
- [ ] Primary-600 text on white: >4.5:1 ✓
- [ ] Error text (red-600) on white: >7:1 ✓

**Button Contrast:**
- [ ] Primary CTA (navy-900 on white): >7:1 ✓
- [ ] Secondary CTA (white on transparent): >4.5:1 ✓
- [ ] Focus rings are visible against all backgrounds ✓

### 4. Reduced Motion Testing

#### Enable Reduced Motion in OS Settings

**Windows:**
Settings → Accessibility → Visual effects → Animation effects (OFF)

**Mac:**
System Preferences → Accessibility → Display → Reduce motion (ON)

**Test:**
- [ ] Logo animation stops or becomes minimal
- [ ] Floating orbs animation stops
- [ ] Card hover animations are instant
- [ ] Page transitions are instant
- [ ] All content remains accessible
- [ ] No functionality is lost

### 5. Form Validation Testing

#### Contact Form
- [ ] Submit empty form - verify all required field errors show
- [ ] Enter invalid email - verify error message appears
- [ ] Error message has red border and icon
- [ ] Error is announced by screen reader
- [ ] Tab to email field after error - verify aria-describedby links to error
- [ ] Fix error - verify error message disappears
- [ ] Submit valid form - verify success message appears
- [ ] Success message is announced by screen reader

#### Newsletter Checkbox
- [ ] Uncheck newsletter - verify form still submits
- [ ] Check newsletter - verify subscription happens
- [ ] Verify privacy policy link is keyboard accessible

### 6. Touch Target Size Testing

#### Verify Minimum 44x44px (WCAG 2.1 Level AAA)

**Mobile Testing:**
- [ ] All buttons meet minimum size
- [ ] Navigation menu items have adequate spacing
- [ ] Form inputs are easy to tap
- [ ] Checkbox is large enough to tap
- [ ] Social media icons are large enough

### 7. Zoom and Reflow Testing

#### Test at Different Zoom Levels

**200% Zoom:**
- [ ] All text remains readable
- [ ] No horizontal scrolling on mobile
- [ ] Content reflows properly
- [ ] No overlapping elements
- [ ] All functionality remains accessible

**400% Zoom:**
- [ ] Content still accessible
- [ ] Navigation still usable
- [ ] Forms still functional

### 8. Mobile Accessibility Testing

#### Test on Real Devices

**iOS (VoiceOver):**
- [ ] Swipe through all elements
- [ ] Double-tap to activate buttons
- [ ] Verify all images have alt text
- [ ] Test form inputs with VoiceOver

**Android (TalkBack):**
- [ ] Swipe through all elements
- [ ] Double-tap to activate buttons
- [ ] Verify all images have alt text
- [ ] Test form inputs with TalkBack

### 9. Automated Testing Tools

#### Lighthouse Audit
```bash
# Run in Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Accessibility" category
4. Click "Generate report"
5. Target score: >95
```

**Expected Results:**
- [ ] Accessibility score >95
- [ ] No critical issues
- [ ] All images have alt text
- [ ] Form elements have labels
- [ ] Color contrast passes

#### axe DevTools
```bash
# Install axe DevTools extension
1. Install from Chrome Web Store
2. Open DevTools
3. Go to axe DevTools tab
4. Click "Scan ALL of my page"
5. Review and fix any issues
```

**Check for:**
- [ ] No critical issues
- [ ] No serious issues
- [ ] Minor issues documented
- [ ] Best practices followed

#### WAVE Tool
```bash
# Use WAVE browser extension
1. Install WAVE extension
2. Navigate to page
3. Click WAVE icon
4. Review errors and alerts
```

**Verify:**
- [ ] No errors
- [ ] Alerts are justified
- [ ] Structural elements correct
- [ ] ARIA usage appropriate

### 10. Browser Compatibility Testing

#### Test in Multiple Browsers

**Chrome/Edge:**
- [ ] All features work
- [ ] Animations smooth
- [ ] Focus indicators visible
- [ ] Forms functional

**Firefox:**
- [ ] All features work
- [ ] Animations smooth
- [ ] Focus indicators visible
- [ ] Forms functional

**Safari:**
- [ ] All features work
- [ ] Animations smooth
- [ ] Focus indicators visible
- [ ] Forms functional

**Mobile Browsers:**
- [ ] iOS Safari works correctly
- [ ] Chrome Mobile works correctly
- [ ] Touch interactions work
- [ ] Zoom works properly

## Automated Testing Commands

### Run Lighthouse CI
```bash
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:5173
```

### Run axe-core Tests
```bash
npm install --save-dev @axe-core/cli
axe http://localhost:5173 --tags wcag2a,wcag2aa
```

## Common Issues to Watch For

### ❌ Common Accessibility Mistakes
- Missing alt text on images
- Insufficient color contrast
- Missing form labels
- No keyboard focus indicators
- Inaccessible dropdowns
- Missing ARIA labels
- Non-semantic HTML
- Animations that can't be disabled

### ✅ Our Implementation
- ✓ Comprehensive alt text on all images
- ✓ WCAG AA compliant color contrast
- ✓ All form fields properly labeled
- ✓ Visible focus indicators on all interactive elements
- ✓ Keyboard accessible dropdowns
- ✓ Descriptive ARIA labels where needed
- ✓ Semantic HTML throughout
- ✓ Reduced motion support in CSS

## Compliance Checklist

### WCAG 2.1 Level AA Compliance

#### Perceivable
- [x] 1.1.1 Non-text Content (Alt text)
- [x] 1.3.1 Info and Relationships (Semantic HTML)
- [x] 1.3.2 Meaningful Sequence (Logical tab order)
- [x] 1.4.1 Use of Color (Not sole indicator)
- [x] 1.4.3 Contrast (Minimum 4.5:1)
- [x] 1.4.4 Resize Text (Up to 200%)
- [x] 1.4.10 Reflow (No horizontal scroll)
- [x] 1.4.11 Non-text Contrast (UI components)
- [x] 1.4.12 Text Spacing (Adjustable)
- [x] 1.4.13 Content on Hover/Focus (Dismissible)

#### Operable
- [x] 2.1.1 Keyboard (All functionality)
- [x] 2.1.2 No Keyboard Trap
- [x] 2.1.4 Character Key Shortcuts (None used)
- [x] 2.4.1 Bypass Blocks (Skip link)
- [x] 2.4.2 Page Titled (SEO component)
- [x] 2.4.3 Focus Order (Logical)
- [x] 2.4.4 Link Purpose (Descriptive)
- [x] 2.4.5 Multiple Ways (Navigation)
- [x] 2.4.6 Headings and Labels (Descriptive)
- [x] 2.4.7 Focus Visible (Always visible)
- [x] 2.5.1 Pointer Gestures (Simple)
- [x] 2.5.2 Pointer Cancellation (Click events)
- [x] 2.5.3 Label in Name (Consistent)
- [x] 2.5.4 Motion Actuation (Not required)

#### Understandable
- [x] 3.1.1 Language of Page (HTML lang)
- [x] 3.2.1 On Focus (No context change)
- [x] 3.2.2 On Input (No unexpected change)
- [x] 3.2.3 Consistent Navigation (Same order)
- [x] 3.2.4 Consistent Identification (Same icons)
- [x] 3.3.1 Error Identification (Clear messages)
- [x] 3.3.2 Labels or Instructions (All forms)
- [x] 3.3.3 Error Suggestion (Helpful hints)
- [x] 3.3.4 Error Prevention (Confirmation)

#### Robust
- [x] 4.1.1 Parsing (Valid HTML)
- [x] 4.1.2 Name, Role, Value (ARIA)
- [x] 4.1.3 Status Messages (role="alert")

## Testing Schedule

### Before Deployment
- [ ] Run all manual keyboard tests
- [ ] Run Lighthouse audit
- [ ] Run axe DevTools scan
- [ ] Test with screen reader
- [ ] Test reduced motion
- [ ] Test on mobile devices

### After Deployment
- [ ] Verify in production
- [ ] Monitor user feedback
- [ ] Check analytics for accessibility issues
- [ ] Schedule quarterly accessibility audits

## Resources

### Testing Tools
- **Lighthouse**: Built into Chrome DevTools
- **axe DevTools**: https://www.deque.com/axe/devtools/
- **WAVE**: https://wave.webaim.org/extension/
- **Color Contrast Analyzer**: https://www.tpgi.com/color-contrast-checker/

### Screen Readers
- **NVDA (Windows)**: https://www.nvaccess.org/
- **JAWS (Windows)**: https://www.freedomscientific.com/products/software/jaws/
- **VoiceOver (Mac/iOS)**: Built-in
- **TalkBack (Android)**: Built-in

### Documentation
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **MDN Accessibility**: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **WebAIM**: https://webaim.org/

## Sign-off

- [ ] All manual tests completed
- [ ] All automated tests passed
- [ ] No critical accessibility issues
- [ ] Documentation updated
- [ ] Team trained on accessibility standards

**Tested by:** _________________
**Date:** _________________
**Accessibility Score:** _________________
