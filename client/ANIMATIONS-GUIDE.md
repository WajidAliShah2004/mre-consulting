# Animation System Guide

This guide explains the comprehensive animation system implemented across the MRECAI website.

## Overview

The website now features a rich animation system using:
- **Framer Motion** - For React component animations
- **AOS (Animate On Scroll)** - For scroll-triggered animations
- **Custom CSS Animations** - For performance-optimized effects

## Animation Components

### 1. AnimatedSection
Wrapper for sections with fade-in animations.

```tsx
import { AnimatedSection } from '@/components/common';

<AnimatedSection delay={0.2} stagger>
  <h2>Your Content</h2>
</AnimatedSection>
```

### 2. AnimatedButton
Enhanced button with hover and tap animations.

```tsx
import { AnimatedButton } from '@/components/common';

<AnimatedButton 
  to="/services" 
  variant="primary" 
  arrowAnimation
>
  Learn More
</AnimatedButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `arrowAnimation`: boolean - adds animated arrow
- `icon`: ReactNode - custom icon
- `to`: string - internal link
- `href`: string - external link

### 3. AnimatedCard
Card component with hover lift effect.

```tsx
import { AnimatedCard } from '@/components/common';

<AnimatedCard delay={0.1} hover gradient>
  <h3>Card Title</h3>
  <p>Card content...</p>
</AnimatedCard>
```

### 4. ScrollReveal
Reveal content as user scrolls.

```tsx
import { ScrollReveal } from '@/components/common';

<ScrollReveal direction="up" delay={0.2}>
  <div>Content to reveal</div>
</ScrollReveal>
```

**Directions:** 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

### 5. FloatingElement
Creates floating/hovering effect.

```tsx
import { FloatingElement } from '@/components/common';

<FloatingElement duration={3} yOffset={15}>
  <img src="icon.svg" alt="Floating icon" />
</FloatingElement>
```

### 6. AnimatedCounter
Animated number counter.

```tsx
import { AnimatedCounter } from '@/components/common';

<AnimatedCounter 
  value={500} 
  suffix="+" 
  duration={2}
  className="text-4xl font-bold"
/>
```

### 7. StaggerList & StaggerItem
Stagger animations for lists.

```tsx
import { StaggerList, StaggerItem } from '@/components/common';

<StaggerList staggerDelay={0.1}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerList>
```

### 8. LoadingSpinner
Various loading animations.

```tsx
import { LoadingSpinner, LoadingDots, LoadingPulse } from '@/components/common';

<LoadingSpinner size="md" color="primary" text="Loading..." />
<LoadingDots color="primary" />
<LoadingPulse size="lg" />
```

### 9. AnimatedBackground
Animated background effects.

```tsx
import { AnimatedBackground } from '@/components/common';

<div className="relative">
  <AnimatedBackground variant="orbs" />
  <div className="relative z-10">Your content</div>
</div>
```

**Variants:** 'gradient' | 'particles' | 'waves' | 'orbs'

## Animation Utilities

### Framer Motion Variants
Located in `src/utils/animations.ts`:

```tsx
import { fadeInUp, scaleIn, slideInLeft } from '@/utils/animations';

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

**Available variants:**
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `rotateIn`, `bounceIn`
- `slideInLeft`, `slideInRight`
- `staggerContainer`, `staggerItem`
- `cardHover`, `buttonHover`

### CSS Animation Classes

#### Entrance Animations
```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up">Slide up</div>
<div class="animate-zoom-in">Zoom in</div>
```

#### Continuous Animations
```html
<div class="animate-float">Floating element</div>
<div class="animate-bounce-subtle">Subtle bounce</div>
<div class="animate-glow-pulse">Glowing pulse</div>
<div class="animate-wiggle">Wiggle effect</div>
```

#### Interaction Animations
```html
<div class="animate-shake">Shake on error</div>
<div class="animate-tada">Celebration effect</div>
<div class="animate-rubber-band">Rubber band</div>
<div class="animate-heartbeat">Heartbeat pulse</div>
```

#### Hover Effects
```html
<div class="card-hover-lift">Lifts on hover</div>
<div class="card-hover-scale">Scales on hover</div>
<div class="card-hover-glow">Glows on hover</div>
```

## AOS (Animate On Scroll)

AOS is initialized globally in `App.tsx`. Use data attributes:

```html
<div data-aos="fade-up" data-aos-delay="200">
  Content
</div>
```

**Common AOS animations:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- `slide-up`, `slide-down`

**AOS options:**
- `data-aos-delay`: Delay in ms (e.g., "200")
- `data-aos-duration`: Duration in ms (e.g., "800")
- `data-aos-easing`: Easing function (e.g., "ease-out-cubic")
- `data-aos-once`: Animate only once (true/false)

## Performance Best Practices

### 1. Use CSS Transforms
Prefer `transform` and `opacity` for animations (GPU accelerated):

```css
/* Good - GPU accelerated */
.element {
  transform: translateY(10px);
  opacity: 0.5;
}

/* Avoid - triggers layout */
.element {
  top: 10px;
  height: 100px;
}
```

### 2. Will-Change Property
For frequently animated elements:

```css
.animated-element {
  will-change: transform, opacity;
}
```

### 3. Reduce Motion Support
Animations automatically respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4. Viewport Optimization
Use `once: true` for scroll animations to prevent re-triggering:

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  Content
</motion.div>
```

## Common Patterns

### Hero Section with Stagger
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  <motion.h1 variants={staggerItem}>Title</motion.h1>
  <motion.p variants={staggerItem}>Description</motion.p>
  <motion.div variants={staggerItem}>
    <AnimatedButton>CTA</AnimatedButton>
  </motion.div>
</motion.div>
```

### Card Grid with Stagger
```tsx
<StaggerList staggerDelay={0.1}>
  {cards.map((card, index) => (
    <StaggerItem key={index}>
      <AnimatedCard hover gradient>
        {card.content}
      </AnimatedCard>
    </StaggerItem>
  ))}
</StaggerList>
```

### Stats Counter Section
```tsx
<div className="grid grid-cols-4 gap-8">
  <div>
    <AnimatedCounter value={500} suffix="+" />
    <p>Clients</p>
  </div>
  <div>
    <AnimatedCounter value={98} suffix="%" />
    <p>Success Rate</p>
  </div>
</div>
```

### Loading States
```tsx
{isLoading ? (
  <LoadingSpinner size="lg" text="Loading..." />
) : (
  <Content />
)}
```

## Customization

### Creating Custom Variants
```tsx
// In your component
const customVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

<motion.div variants={customVariant} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Custom CSS Animations
```css
@keyframes customAnimation {
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
}

.custom-animate {
  animation: customAnimation 2s ease-in-out infinite;
}
```

## Troubleshooting

### Animation Not Working
1. Check if component is wrapped in motion.div
2. Verify variants are properly defined
3. Ensure initial and animate props are set
4. Check viewport settings for scroll animations

### Performance Issues
1. Reduce number of simultaneous animations
2. Use `will-change` sparingly
3. Prefer CSS animations for simple effects
4. Use `once: true` for scroll animations
5. Optimize images and assets

### Accessibility
1. Always respect `prefers-reduced-motion`
2. Ensure animations don't interfere with content
3. Provide alternative ways to access content
4. Test with screen readers

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [CSS Animation Performance](https://web.dev/animations/)
- [Reduced Motion Guide](https://web.dev/prefers-reduced-motion/)

## Examples in Codebase

Check these files for implementation examples:
- `src/pages/Home.tsx` - Hero animations, stats counters
- `src/pages/Services.tsx` - Card grids, hover effects
- `src/pages/Resources.tsx` - Scroll reveals, stagger lists
- `src/components/layout/Navbar.tsx` - Menu animations
- `src/index.css` - CSS animation utilities
