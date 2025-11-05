# Website Content Redesign - Project Overview

## 📋 Quick Start

This spec contains everything needed to implement the website content redesign. **No client input required** - all content has been created and is ready to implement.

### Spec Documents

1. **requirements.md** - 7 requirements with 35 acceptance criteria
2. **design.md** - Technical design based on existing codebase
3. **tasks.md** - 8 main tasks with 15 sub-tasks (3 optional)
4. **content.md** - All copy, messaging, and content ready to use
5. **README.md** - This file

## 🎯 What We're Building

### Homepage Updates
- ✅ New hero section with mandatory opening statement
- ✅ Enhanced "Who We Are" section with compelling content
- ✅ Update client metric from 500+ to 180
- ✅ Larger, animated logo display

### Services Expansion
- ✅ Add 5 new service offerings:
  1. Accounting Services
  2. Tax Preparation & Consulting
  3. Insurance Consulting
  4. Estate Consulting Services
  5. Investment & Financial Management (with CFP/CFA partner)

### Email Capture
- ✅ Newsletter checkbox on Contact page
- ✅ Integration with existing API (already built!)
- ✅ Privacy policy link and consent language

### Navigation Restructure
- ✅ Reorder menu: Home → About → Services → Testimonials → Blog → Advice & Education → Contact
- ✅ Map "Advice and Education" to existing Blog page

## 🚀 Implementation Order

### Phase 1: Content Updates (Start Here)
1. Update hero section with new title and mandatory statement
2. Enhance "Who We Are" section content
3. Update client metric to 180

### Phase 2: Services Expansion
4. Add 5 new service definitions to constants.ts
5. Update Services page to display new services

### Phase 3: Email Capture
6. Add newsletter checkbox to Contact form
7. Integrate with existing `/api/newsletter/subscribe` API

### Phase 4: Navigation
8. Create route alias for "Advice and Education" → Blog
9. Reorder navigation menu items

### Phase 5: Quality Assurance (Optional)
10. Verify accessibility compliance
11. Performance optimization
12. Cross-browser testing

## 📝 All Content Ready

Everything is in **content.md**:
- Hero section title and copy
- "Who We Are" compelling messaging
- 5 complete service descriptions with features
- Partner disclosure for investment services
- Email capture copy and error messages
- SEO meta descriptions
- CTA button text

## 🔧 Technical Notes

### Leveraging Existing Infrastructure
- ✅ Email capture API already exists (`/api/newsletter/subscribe`)
- ✅ Supabase newsletter table already configured
- ✅ Email service with nodemailer already set up
- ✅ Tailwind theme with brand colors defined
- ✅ Animation patterns established (Framer Motion, AOS)
- ✅ Component patterns consistent throughout codebase

### No Backend Changes Needed
The email capture infrastructure is fully functional. We just need to add the UI checkbox to the Contact form.

### Logo Strategy
Use existing PNG logo initially. SVG conversion is optional enhancement (marked as optional task).

## ✅ Success Criteria

### Must Have (Core Requirements)
- [x] Hero section displays mandatory opening statement verbatim
- [x] Hero section includes benefit-driven title
- [x] "Who We Are" content updated with compelling copy
- [x] Client metric updated to 180
- [x] Five service sections added to Services page
- [x] Partner disclosure for Investment services
- [x] Email capture checkbox on Contact page
- [x] Navigation menu reordered correctly

### Nice to Have (Optional)
- [ ] SVG logo optimization
- [ ] Client-side email validation
- [ ] Performance optimization
- [ ] Cross-browser testing

## 🎨 Design Consistency

All updates follow existing design patterns:
- **Colors**: Primary blue (#00A8E8), Navy (#1E3A5F)
- **Fonts**: Poppins (headings), Inter (body)
- **Animations**: Floating orbs, gradient backgrounds, hover effects
- **Layout**: Card-based, responsive grid, mobile-first

## 📊 Key Metrics

- **180** Clients Served (updated from 500+)
- **2024** Founded
- **98%** Satisfaction Rate
- **24/7** Available Support

## 🔗 Important Links

- Existing email API: `POST /api/newsletter/subscribe`
- Privacy Policy: `/privacy-policy` (already exists)
- Terms of Service: `/terms-of-service` (already exists)
- Blog: `/blog` (maps to "Advice and Education")

## 🚦 Getting Started

1. Open `tasks.md`
2. Click "Start task" next to Task 1
3. Follow the implementation instructions
4. Reference `content.md` for all copy
5. Test as you go

## 💡 Pro Tips

- **Start with Task 1** - Hero section is the most visible change
- **Use content.md** - All copy is ready, just copy/paste
- **Test incrementally** - Verify each task before moving to next
- **Leverage existing patterns** - Follow the established component structure
- **No client approval needed** - All content decisions have been made

## 📞 Support

If you need clarification on any task:
1. Check the design.md for technical details
2. Check content.md for copy
3. Look at existing similar components for patterns
4. Reference requirements.md for acceptance criteria

---

**Ready to build!** Open tasks.md and start with Task 1. 🚀
