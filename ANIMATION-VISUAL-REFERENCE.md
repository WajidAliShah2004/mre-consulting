# Animation Visual Reference

Quick visual guide to all animations available in the MRECAI website.

## 🎬 Entrance Animations

### Fade Animations
```
fadeIn:          [invisible] → [visible]
fadeInUp:        [invisible, below] → [visible, in place]
fadeInDown:      [invisible, above] → [visible, in place]
fadeInLeft:      [invisible, left] → [visible, in place]
fadeInRight:     [invisible, right] → [visible, in place]
```

### Scale Animations
```
scaleIn:         [small, invisible] → [normal, visible]
bounceIn:        [small] → [overshoot] → [normal] (spring)
```

### Slide Animations
```
slideInLeft:     [off-screen left] → [in place]
slideInRight:    [off-screen right] → [in place]
```

### Rotate Animations
```
rotateIn:        [rotated, small] → [normal, full size]
```

## 🔄 Continuous Animations

### Float
```
Position: [normal] → [up-left] → [down-right] → [up] → [normal]
Duration: 20s infinite
Use: Decorative orbs, floating icons
```

### Pulse
```
Scale: [1] → [1.05] → [1]
Duration: 2s infinite
Use: Call-to-action elements, notifications
```

### Bounce Subtle
```
Y-Position: [0] → [-10px] → [0]
Duration: 2s infinite
Use: Floating buttons, badges
```

### Glow Pulse
```
Shadow: [20px blur] → [40px blur] → [20px blur]
Duration: 3s infinite
Use: Featured cards, important elements
```

### Wiggle
```
Rotation: [0°] → [5°] → [-5°] → [0°]
Duration: 1s infinite
Use: Attention-grabbing icons
```

### Heartbeat
```
Scale: [1] → [1.1] → [1] → [1.1] → [1]
Duration: 2s infinite
Use: Like buttons, favorites
```

## 🎯 Interaction Animations

### Card Hover
```
On Hover:
- Y-Position: 0 → -8px
- Scale: 1 → 1.02
- Shadow: normal → enhanced
Duration: 0.3s
```

### Button Hover
```
On Hover:
- Scale: 1 → 1.05
Duration: 0.2s

On Tap:
- Scale: 1 → 0.95
Duration: 0.1s
```

### Image Zoom
```
On Hover:
- Image Scale: 1 → 1.1
Duration: 0.5s
Use: Portfolio images, thumbnails
```

## 🎪 Special Effects

### Shake
```
X-Position: [0] → [-5] → [5] → [-5] → [5] → [0]
Duration: 0.5s
Use: Error states, invalid input
```

### Tada
```
Scale + Rotation: [normal] → [smaller, rotated] → [larger, rotated] → [normal]
Duration: 1s
Use: Success messages, achievements
```

### Rubber Band
```
Scale: [1] → [1.25, 0.75] → [0.75, 1.25] → [1.15, 0.85] → [1]
Duration: 1s
Use: Playful interactions
```

### Jello
```
Skew: [0] → [25°] → [-15°] → [15°] → [-5°] → [5°] → [0]
Duration: 1s
Use: Fun, playful elements
```

### Swing
```
Rotation: [0°] → [15°] → [-10°] → [5°] → [-5°] → [0°]
Duration: 2s infinite
Transform Origin: top center
Use: Hanging elements, notifications
```

### Flip
```
Rotation Y: [0°] → [360°]
Duration: 1s
Use: Card flips, reveals
```

## 📊 Component Animations

### AnimatedCounter
```
Visual: 0 → 1 → 2 → ... → target number
Duration: 2s (default)
Easing: Spring physics
Use: Statistics, metrics
```

### LoadingSpinner
```
Rotation: 0° → 360° (continuous)
Duration: 1s infinite
Use: Loading states
```

### LoadingDots
```
Dot 1: [down] → [up] → [down]
Dot 2: [down] → [up] → [down] (delayed)
Dot 3: [down] → [up] → [down] (delayed)
Duration: 0.6s infinite
Use: Loading states
```

### LoadingPulse
```
Circle 1: [normal] → [larger, faded] → [normal]
Circle 2: [normal] → [larger, faded] → [normal] (delayed)
Duration: 2s infinite
Use: Loading states, processing
```

## 🌊 Background Animations

### Gradient Background
```
Position: [0% 0%] → [100% 100%] → [0% 0%]
Duration: 20s infinite
Use: Hero sections, feature areas
```

### Particle Background
```
Static pattern with animated opacity
Use: Subtle texture, depth
```

### Wave Background
```
Position: [0%] → [100%] → [0%]
Duration: 15s infinite
Use: Flowing sections
```

### Orbs Background
```
3 orbs floating independently:
- Orb 1: 20s cycle
- Orb 2: 25s cycle (delayed)
- Orb 3: 30s cycle (delayed)
Use: Hero sections, feature areas
```

## 📱 Responsive Behavior

All animations automatically adjust for:

### Mobile (< 768px)
- Reduced animation distances
- Faster durations
- Simplified effects

### Tablet (768px - 1024px)
- Standard animations
- Optimized for touch

### Desktop (> 1024px)
- Full animation effects
- Enhanced hover states
- Parallax effects

## ♿ Accessibility

### Reduced Motion
When user enables "Reduce Motion" in OS:
```
All animations: Duration → 0.01ms
Continuous animations: Disabled
Transitions: Instant
```

### High Contrast
When user enables "High Contrast":
```
Borders: Thicker
Shadows: More pronounced
Focus indicators: Enhanced
```

## 🎨 Animation Timing

### Quick (0.1-0.2s)
- Button taps
- Toggle switches
- Checkbox clicks

### Standard (0.3-0.4s)
- Card hovers
- Menu transitions
- Modal opens

### Slow (0.5-0.8s)
- Page transitions
- Section reveals
- Image zooms

### Very Slow (1s+)
- Continuous animations
- Background effects
- Decorative elements

## 🎯 Best Practices

### Do ✅
- Use subtle animations
- Respect user preferences
- Optimize for performance
- Test on real devices
- Provide fallbacks

### Don't ❌
- Overuse animations
- Block user interactions
- Ignore accessibility
- Use heavy animations on mobile
- Animate layout properties

## 🔧 Performance Tips

### GPU Accelerated Properties
```css
✅ transform: translateX(), translateY(), scale(), rotate()
✅ opacity
❌ top, left, width, height
❌ margin, padding
```

### Optimization
```css
.optimized-animation {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}
```

## 📐 Easing Functions

### Available Easings
```
ease-in:         Slow start, fast end
ease-out:        Fast start, slow end (most common)
ease-in-out:     Slow start and end
linear:          Constant speed
cubic-bezier:    Custom curve [0.22, 1, 0.36, 1] (recommended)
```

### When to Use
```
ease-out:        Entrances, reveals
ease-in:         Exits, dismissals
ease-in-out:     Continuous loops
spring:          Natural, bouncy feel
```

## 🎬 Animation Sequences

### Page Load
```
1. Hero background (0s)
2. Logo (0.2s)
3. Headline (0.4s)
4. Description (0.6s)
5. CTA buttons (0.8s)
6. Stats cards (1s, staggered)
```

### Scroll Reveal
```
1. Section enters viewport
2. Container fades in (0s)
3. Items stagger in (0.1s each)
4. Complete
```

### Card Grid
```
1. Grid container ready
2. Cards stagger in (0.1s delay each)
3. Hover states active
4. Complete
```

## 🎨 Color Animations

### Gradient Shifts
```
Primary: #00A8E8 → #0088C8 → #006BA8
Duration: 3-5s
Use: Backgrounds, accents
```

### Glow Effects
```
Shadow: rgba(0, 168, 232, 0.3) → rgba(0, 168, 232, 0.6)
Duration: 3s
Use: Featured elements
```

## 📊 Animation Metrics

### Recommended Values
```
Entrance Duration:    0.4-0.6s
Exit Duration:        0.2-0.3s
Hover Duration:       0.2-0.3s
Continuous Duration:  2-5s
Stagger Delay:        0.05-0.15s
Initial Delay:        0-0.3s
```

### Distance Values
```
Slide Distance:       20-40px
Lift Distance:        4-8px
Scale Range:          0.95-1.05
Rotation Range:       -10° to 10°
```

This visual reference helps you quickly understand and implement animations throughout the website!
