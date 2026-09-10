# KnitLabs Design System Specification (Antigravity Frontend Edition)

> "Knitting up stories using technology."
> 
> KnitLabs is a collective of people exploring ideas and crafting useful products. This document defines the design tokens, visual hierarchy, brand identity, component anatomy, and motion specifications for the KnitLabs web experience.

---

## 1. Brand Identity & Logo Mark

### 1.1 Minimalist Monoline Logo
The KnitLabs mark is a minimal, geometric vector monogram representing an interwoven thread forming the letter **K**:
- **Geometry**:
  - Vertical Stem: Upright thread pillar in the primary Indigo $\rightarrow$ Violet gradient (`stroke-width: 3.5`, `stroke-linecap: round`).
  - Upper Arm: Diagonal thread stroke reaching up and right (`stroke-width: 3.5`).
  - Lower Arm: Companion diagonal stroke featuring an Ember Coral (`#ff6b4a`) accent that weaves under the upper arm, evoking tactile woven fiber.
- **Badge Container**: Rounded dark micro-tile (`#18181b`, `rx="10"`, border `rgba(255, 255, 255, 0.12)`).
- **Scalability**: Pure resolution-independent SVG implemented across:
  - Vector component: `src/components/KnitLogo.vue`
  - Canonical asset: `public/logo.svg`
  - Browser tab icon: `public/favicon.svg`

---

## 2. Core Surfaces & Atmosphere

### 2.1 Base Surface
- **Color**: Dark-mode `#121317` (`--bg-base: #121317`)
- **Atmosphere / Ambient Glow**: Layered non-blocking radial glows providing atmospheric warmth:
  - Top Hero Glow: `radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.18) 0%, rgba(18, 19, 23, 0) 70%)`
  - Ambient Weave Mesh: Tri-point radial gradient mesh with Indigo (`rgba(99, 102, 241, 0.08)`), Coral (`rgba(255, 107, 74, 0.06)`), and Violet (`rgba(139, 92, 246, 0.08)`).

### 2.2 Card Surfaces (Frosted Glassmorphism)
- **Background**: `rgba(24, 24, 27, 0.60)` (`bg-zinc-900/60`)
- **Backdrop Filter**: `backdrop-blur-md` (`backdrop-filter: blur(12px)`)
- **Borders**: `1px solid rgba(255, 255, 255, 0.10)` (`border border-white/10`)
- **Border Radius**: `1rem` (`rounded-2xl`, `16px`)
- **Overflow & Pin Geometry**:
  - The card root maintains `overflow: visible` to prevent clipping the physical eyelet connection pin (`-top-2 left-8`).
  - Internal card glows are isolated in an absolute nested container (`overflow-hidden rounded-2xl pointer-events-none`).
- **Elevation / Shadow**:
  - Rest: `0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`
  - Hover: `0 16px 40px -8px rgba(99, 102, 241, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.20)`

---

## 3. Color Palette & Status Semantics

### 3.1 Accent Palette
- **Thread Primary**:
  - Gradient: Vivid Indigo (`#6366f1`) $\rightarrow$ Violet (`#8b5cf6`)
  - Glow: `drop-shadow(0 0 10px rgba(99, 102, 241, 0.60))`
  - SVG Stroke: `stroke: url(#threadGradient)`
- **Thread Secondary & Accents**:
  - Ember Coral: `#ff6b4a` (`--accent-coral`)
  - Electric Amber: `#f59e0b` (`--accent-amber`)
- **Text & Foreground**:
  - Primary: `#f8fafc` (`text-slate-50`)
  - Secondary: `#cbd5e1` (`text-slate-300`)
  - Muted: `#94a3b8` (`text-slate-400`)
  - Subtle: `#64748b` (`text-slate-500`)

### 3.2 Product Status Semantics
- **Coming Soon**:
  - Background: `rgba(245, 158, 11, 0.10)` (`bg-amber-500/10`)
  - Border: `rgba(245, 158, 11, 0.30)` (`border-amber-500/30`)
  - Text: `#fcd34d` (`text-amber-300`)
  - Beacon: Pulsing amber indicator
- **In Progress**:
  - Background: `rgba(99, 102, 241, 0.10)` (`bg-indigo-500/10`)
  - Border: `rgba(99, 102, 241, 0.30)` (`border-indigo-500/30`)
  - Text: `#a5b4fc` (`text-indigo-300`)
  - Beacon: Pulsing indigo indicator
- **Lab**:
  - Background: `rgba(139, 92, 246, 0.10)` (`bg-violet-500/10`)
  - Border: `rgba(139, 92, 246, 0.30)` (`border-violet-500/30`)
  - Text: `#d8b4fe` (`text-violet-300`)
  - Beacon: Pulsing violet indicator
- **Live**:
  - Background: `rgba(16, 185, 129, 0.10)` (`bg-emerald-500/10`)
  - Border: `rgba(16, 185, 129, 0.30)` (`border-emerald-500/30`)
  - Text: `#34d399` (`text-emerald-400`)
  - Beacon: Pulsing emerald indicator

---

## 4. Typography & Spacing Scale

### 4.1 Font Families
- Typography: Google Sans Flex or Inter with a strict 4px/8px spacing scale.
- Primary Body & Headings: `'Inter', 'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif`
- Monospace / Micro-labels: `'JetBrains Mono', 'Fira Code', ui-monospace, monospace`

### 4.2 Spacing System (Strict 4px / 8px Scale)
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

## 5. Motion Specification & Thread Architecture

### 5.1 Interactive Springs & Hover
- Motion Spec: 60fps spring transitions (ease-out, 300ms) on hover; GSAP ScrollTrigger for path scrubbing.
- **Timing**: 300ms
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like ease-out)
- **Transform**: Translate Y `-4px` to `-6px`
- **Border Lighting**: Transition border color from `rgba(255,255,255,0.10)` to `rgba(99,102,241,0.40)`

### 5.2 Scroll-Driven Yarn Animation (`TheThread.vue`)
- **Overlay**: Fixed background SVG (`pointer-events-none fixed inset-0 z-0`) with vertical group translation synced via `requestAnimationFrame`.
- **Targeting**: Precision DOM query targeting unclipped `[data-thread-pin]` eyelet elements.
- **Subpixel Centering**: Calculations derive from `pin.getBoundingClientRect()`, placing bezier waypoints through the exact mathematical center of each hardware eyelet.
- **Grid Row Sorting**: Stable row tie-breaking (`if (Math.abs(a.y - b.y) < 40) return a.x - b.x;`).
- **Bezier Drape Geometry**:
  - Horizontal cards in same row: Graceful catenary sag arc (`dx * 0.18`, max 50px).
  - Vertical transitions between rows & sections: Natural S-drapes (`dy * 0.45`).
- **Terminal Knot Anchoring**:
  - The footer spool is guaranteed as the final waypoint.
  - GSAP Timeline: `duration: 0.88` with `scrub: 0.5`. The thread finishes drawing and ties off into the knot as the footer scrolls into view (~85–88% depth) and remains locked.
- **Cleanup**: `ctx.revert()` in component unmount to prevent leaks.
- **Performance**: Debounced resize handlers with zero recursive body mutation observers.

---

## 6. Component Hierarchy & Information Architecture

1. **Navbar (`src/components/Navbar.vue`)**:
   - Floating glassmorphic pill pinned to top.
   - Minimalist `KnitLogo` vector mark with brand text.
   - Clean center navigation: "Projects" (`#projects`) and "Philosophy" (`#philosophy`).
   - Dedicated GitHub action button.
2. **HeroSection (`src/components/HeroSection.vue`)**:
   - Hero pill: "KNITLABS // A COLLECTIVE OF BUILDERS".
   - Headline: "Knitting up stories using technology."
   - Authentic collective mission statement.
   - Dual CTAs: "See What We're Building", "How We Build".
   - Human values: *Curiosity-Led*, *Open & Collaborative*, *Craft-Focused*.
3. **ProductTapestry (`src/components/ProductTapestry.vue`) & ProductCard (`src/components/ProductCard.vue`)**:
   - Consumes `projects.json` via dynamic loop (zero-code extensible).
   - Showcases upcoming/in-progress products (*Threadflow*, *LoomKit*, *StoryCraft*).
   - Frosted glassmorphic card design with unclipped `-top-2` thread eyelet pin.
   - "In Active Development" indicators and GitHub links.
   - Community invitation to collaborate.
4. **CraftSection (`src/components/CraftSection.vue`)**:
   - 3-pillar product philosophy:
     - Pillar 01: *Curiosity & Need* (Building tools we wish existed).
     - Pillar 02: *Thoughtful Engineering* (Patience, speed, clean code, accessible design).
     - Pillar 03: *Building in the Open* (Open source, shared learning).
5. **AppFooter (`src/components/AppFooter.vue`)**:
   - Terminal spool knot anchoring the yarn path.
   - Mission statement, navigation, active collective status indicator.
   - Vector `KnitLogo` attribution.
