# KnitLabs Design System Specification (Antigravity Frontend Edition)

> "Knitting up stories using technology."
> 
> KnitLabs bridges tactile narrative craft and silicon precision. This document defines the design tokens, visual hierarchy, color spaces, component anatomy, and motion specs for the KnitLabs web experience.

---

## 1. Core Surfaces & Atmosphere

### 1.1 Base Surface
- **Color**: Dark-mode `#121317` (`--bg-base: #121317`)
- **Atmosphere / Glow**: Ambient radial background glows layered to create depth without distracting from content:
  - Top Hero Glow: `radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.18) 0%, rgba(18, 19, 23, 0) 70%)`
  - Accent Weave Glow: `radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255, 107, 74, 0.08) 0%, transparent 100%)`
  - Silicon Mesh: Subtle SVG noise or gradient mesh overlay set to `pointer-events-none opacity-40`.

### 1.2 Card Surfaces (Frosted Glassmorphism)
- **Background**: `rgba(24, 24, 27, 0.60)` (`bg-zinc-900/60`)
- **Backdrop Filter**: `backdrop-blur-md` (`backdrop-filter: blur(12px)`)
- **Borders**: `1px solid rgba(255, 255, 255, 0.10)` (`border border-white/10`)
- **Border Radius**: `1rem` (`rounded-2xl`, `16px`)
- **Elevation / Shadow**:
  - Rest: `0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`
  - Hover: `0 16px 40px -8px rgba(99, 102, 241, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.20)`

---

## 2. Color Palette & Semantics

### 2.1 Accent Palette
- **Thread Primary**:
  - Gradient: Vivid Indigo (`#6366f1`) $\rightarrow$ Violet (`#8b5cf6`)
  - Thread Glow: `drop-shadow(0 0 10px rgba(99, 102, 241, 0.55))`
  - SVG Stroke: `stroke: url(#thread-gradient)` with linear gradient from `#6366f1` to `#8b5cf6`
- **Thread Secondary & Badges**:
  - Ember Coral: `#ff6b4a` (`--accent-coral`)
  - Electric Amber: `#f59e0b` (`--accent-amber`)
- **Text & Foreground**:
  - Primary: `#f8fafc` (`text-slate-50`)
  - Secondary: `#94a3b8` (`text-slate-400`)
  - Muted: `#64748b` (`text-slate-500`)

### 2.2 Status Badges
- **Live**:
  - Background: `rgba(16, 185, 129, 0.12)` (`bg-emerald-500/10`)
  - Border: `rgba(16, 185, 129, 0.30)` (`border-emerald-500/30`)
  - Text: `#34d399` (`text-emerald-400`)
  - Indicator: Pulsing emerald beacon
- **Beta**:
  - Background: `rgba(245, 158, 11, 0.12)` (`bg-amber-500/10`)
  - Border: `rgba(245, 158, 11, 0.30)` (`border-amber-500/30`)
  - Text: `#fbbf24` (`text-amber-400`)
- **Lab**:
  - Background: `rgba(139, 92, 246, 0.12)` (`bg-violet-500/10`)
  - Border: `rgba(139, 92, 246, 0.30)` (`border-violet-500/30`)
  - Text: `#c084fc` (`text-violet-400`)
- **Archived**:
  - Background: `rgba(113, 113, 122, 0.12)` (`bg-zinc-500/10`)
  - Border: `rgba(113, 113, 122, 0.30)` (`border-zinc-500/30`)
  - Text: `#a1a1aa` (`text-zinc-400`)

---

## 3. Typography & Spacing Scale

### 3.1 Font Families
- Typography: Google Sans Flex or Inter with a strict 4px/8px spacing scale.
- Primary Body & Headings: `'Inter', 'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif`
- Monospace / Micro-labels: `'JetBrains Mono', 'Fira Code', ui-monospace, monospace`

### 3.2 Spacing System (Strict 4px / 8px Scale)
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-6`: 24px
- `space-8`: 32px
- `space-12`: 48px
- `space-16`: 64px
- `space-24`: 96px
- `space-32`: 128px

---

## 4. Motion Specification

- Motion Spec: 60fps spring transitions (ease-out, 300ms) on hover; GSAP ScrollTrigger for path scrubbing.

### 4.1 Interactive Springs & Hover
- **Timing**: 300ms
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like ease-out)
- **Transform**: Translate Y `-4px` to `-6px`, subtle scale `1.015`
- **Border Lighting**: Transition border color from `rgba(255,255,255,0.10)` to `rgba(99,102,241,0.40)`

### 4.2 GSAP ScrollTrigger Yarn Scrubber
- **Target**: Continuous SVG cubic bezier path threading through target DOM coordinates (`data-thread-target`).
- **Scrubbing**: `gsap.timeline({ scrollTrigger: { scrub: 1, start: 'top top', end: 'bottom bottom' } })`
- **Dashoffset**: Animated from `strokeDashoffset: totalLength` to `0` along the viewport journey.
- **Cleanup**: `ctx.revert()` in component unmount to prevent leaks or orphan handlers.
- **Accessibility**: `@media (prefers-reduced-motion: reduce)` renders static completed path with reduced glow.

---

## 5. Component Hierarchy
1. **TheThread (`src/components/TheThread.vue`)**:
   Full-viewport fixed background canvas/SVG mapping coordinates to a radiant braided yarn strand.
2. **HeroSection (`src/components/HeroSection.vue`)**:
   Glassmorphic pill badge, high-contrast headline, expressive subtext, and dual action CTAs.
3. **ProductTapestry (`src/components/ProductTapestry.vue`) & ProductCard (`src/components/ProductCard.vue`)**:
   Dynamic data-driven grid rendering artifacts from `projects.json` with external links and GitHub shortcuts.
4. **CraftSection (`src/components/CraftSection.vue`)**:
   Three-act design manifesto: "The Thread" (Concept), "The Weave" (Architecture), and "The Fabric" (Production).
5. **AppFooter (`src/components/AppFooter.vue`)**:
   Terminal node tying off the yarn path, attribution, and repository links.
