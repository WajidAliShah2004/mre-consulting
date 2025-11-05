# Animations Quick Start Guide

Get started with animations in 5 minutes!

## 🚀 Quick Setup

All animations are already set up and ready to use. Just import and use!

## 📦 Most Common Use Cases

### 1. Animate a Section on Scroll

```tsx
import { ScrollReveal } from '@/components/common';

<ScrollReveal direction="up">
  <h2>This fades in when scrolled into view</h2>
  <p>Content here...</p>
</ScrollReveal>
```

### 2. Add Hover Effect to Card

```tsx
import { AnimatedCard } from '@/components/common';

<AnimatedCard hover gradient>
  <h3>Card Title</h3>
  <p>Card content with hover lift effect</p>
</AnimatedCard>
```

### 3. Create Animated Button

```tsx
import { AnimatedButton } from '@/components/common';

<AnimatedButton to="/services" variant="primary" arrowAnimation>
  Learn More
</AnimatedButton>
```

### 4. Animate a List

```tsx
import { StaggerList, StaggerItem } from '@/components/common';

<StaggerList>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerList>
```

### 5. Add Number Counter

```tsx
import { AnimatedCounter } from '@/components/common';

<AnimatedCounter value={500} suffix="+" />
```

### 6. Show Loading State

```tsx
import { LoadingSpinner } from '@/components/common';

{isLoading ? (
  <LoadingSpinner size="md" text="Loading..." />
) : (
  <YourContent />
)}
```

## 🎨 Using CSS Animations

### Simple Fade In

```html
<div class="animate-fade-in">
  Content fades in
</div>
```

### Floating Element

```html
<div class="animate-float">
  This floats continuously
</div>
```

### Hover Effects

```html
<div class="card-hover-lift">
  Lifts up on hover
</div>
```

## 🎯 Using AOS (Already Configured)

```html
<div data-aos="fade-up" data-aos-delay="200">
  Fades up with 200ms delay
</div>
```

**Common AOS animations:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `slide-up`, `slide-down`

## 🔧 Using Framer Motion Directly

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

## 💡 Pro Tips

### 1. Stagger Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={staggerContainer}
>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
  <motion.div variants={staggerItem}>Item 3</motion.div>
</motion.div>
```

### 2. Add Delay
```tsx
<ScrollReveal direction="up" delay={0.3}>
  Appears 0.3s after entering viewport
</ScrollReveal>
```

### 3. Combine Animations
```tsx
<AnimatedCard hover gradient delay={0.2}>
  <ScrollReveal direction="left">
    <h3>Nested animations!</h3>
  </ScrollReveal>
</AnimatedCard>
```

### 4. Floating Decorations
```tsx
import { FloatingElement } from '@/components/common';

<FloatingElement duration={3} yOffset={15}>
  <img src="icon.svg" alt="Floating icon" />
</FloatingElement>
```

### 5. Animated Background
```tsx
import { AnimatedBackground } from '@/components/common';

<section className="relative">
  <AnimatedBackground variant="orbs" />
  <div className="relative z-10">
    Your content here
  </div>
</section>
```

## 🎬 Complete Example

Here's a complete section with multiple animations:

```tsx
import { 
  ScrollReveal, 
  AnimatedCard, 
  AnimatedButton,
  StaggerList,
  StaggerItem 
} from '@/components/common';

function FeaturesSection() {
  const features = [
    { title: 'Feature 1', description: 'Description 1' },
    { title: 'Feature 2', description: 'Description 2' },
    { title: 'Feature 3', description: 'Description 3' },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Animated Heading */}
        <ScrollReveal direction="up">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Features
          </h2>
        </ScrollReveal>

        {/* Staggered Cards */}
        <StaggerList staggerDelay={0.1}>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <AnimatedCard hover gradient>
                  <h3 className="text-xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <AnimatedButton 
                    to={`/features/${index}`}
                    variant="outline"
                    arrowAnimation
                  >
                    Learn More
                  </AnimatedButton>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerList>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <AnimatedButton 
              to="/contact" 
              variant="primary" 
              size="lg"
              arrowAnimation
            >
              Get Started Today
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

## 🎨 Styling Tips

### Add Custom Classes
```tsx
<AnimatedCard className="bg-gradient-to-br from-primary-50 to-white">
  Custom styled card
</AnimatedCard>
```

### Combine with Tailwind
```tsx
<ScrollReveal direction="up" className="max-w-4xl mx-auto">
  Centered content with animation
</ScrollReveal>
```

## 📱 Responsive Animations

All animations automatically work on mobile! But you can customize:

```tsx
<ScrollReveal 
  direction="up"
  className="hidden md:block" // Desktop only
>
  Desktop animation
</ScrollReveal>

<ScrollReveal 
  direction="fade"
  className="md:hidden" // Mobile only
>
  Mobile animation (simpler)
</ScrollReveal>
```

## ⚡ Performance Tips

1. **Use `once: true`** for scroll animations (already default)
2. **Limit simultaneous animations** to 5-10 elements
3. **Use CSS animations** for simple effects
4. **Prefer transforms** over position changes

## 🐛 Troubleshooting

### Animation Not Working?
1. Check if component is imported correctly
2. Verify parent has enough height for scroll animations
3. Check browser console for errors
4. Try adding a delay

### Animation Too Fast/Slow?
```tsx
<ScrollReveal duration={0.8}> {/* Slower */}
<ScrollReveal duration={0.3}> {/* Faster */}
```

### Animation Repeating?
```tsx
<ScrollReveal once={false}> {/* Repeats */}
<ScrollReveal once={true}>  {/* Once only (default) */}
```

## 📚 More Resources

- Full Guide: `client/ANIMATIONS-GUIDE.md`
- Visual Reference: `ANIMATION-VISUAL-REFERENCE.md`
- Implementation Details: `ANIMATION-IMPLEMENTATION-SUMMARY.md`

## 🎉 You're Ready!

Start adding animations to your components. Remember:
- **Less is more** - Don't overdo it
- **Be consistent** - Use similar animations for similar elements
- **Test on mobile** - Ensure smooth performance
- **Respect accessibility** - Animations auto-disable for users who prefer reduced motion

Happy animating! 🚀
