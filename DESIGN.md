# KnitLabs Design System

> **Knitting up stories using technology.**  
> A shared design language and token specification for products, experiments, and tools built by **KnitLabs**.

---

## 1. Design Philosophy

Every tool built under the KnitLabs umbrella is guided by three principles:

1. **Tactile Craft meets Silicon Precision**  
   Software should feel woven, deliberate, and tangible rather than cold or sterile. We use subtle gradients, warm lighting accents, and organic curves.
2. **Calm, High-Contrast Atmosphere**  
   Dark-first interfaces grounded in deep obsidian canvas tones (`#121317`), layered with frosted glassmorphism and luminous accent threads.
3. **Openness & Purposeful Simplicity**  
   Interfaces emphasize content and creative flow. Visual adornments serve hierarchy and delight without impeding utility.

---

## 2. Brand Identity & Logo Mark

The KnitLabs mark is a minimalist, monoline vector monogram featuring two interwoven diagonal threads that suggest the gesture of the letter **K** and the tactile crossing of yarn:

```
        \       (Upper Arm: Indigo → Violet gradient)
         \ 
          \   /
           \ /  (Lower Arm: Ember Coral accent, weaves under)
            /
           / \
```

### Geometry & Specs

- **Upper Arm**: Diagonal stroke flowing from top-right down to center-left (`M 28 11 L 14 21`).
  - **Stroke Width**: `3.5px` (relative to `40x40` viewBox)
  - **Cap Style**: `stroke-linecap="round"`
  - **Color / Gradient**: Primary Thread (`#6366f1` → `#8b5cf6`)
- **Lower Arm**: Companion diagonal stroke weaving through with an offset start (`M 19 19 L 28 29`).
  - **Stroke Width**: `3.5px`
  - **Cap Style**: `stroke-linecap="round"`
  - **Color**: Ember Coral accent (`#ff6b4a`)
- **Background**: Frameless and 100% transparent. No container tiles, rectangular outlines, or artificial box shadows.

### Canonical SVG Source

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <defs>
    <linearGradient id="kl-thread" x1="13" y1="10" x2="28" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>
  <!-- Upper Arm -->
  <path d="M 28 11 L 14 21" stroke="url(#kl-thread)" stroke-width="3.5" stroke-linecap="round" />
  <!-- Lower Arm (Weaves Under) -->
  <path d="M 19 19 L 28 29" stroke="#ff6b4a" stroke-width="3.5" stroke-linecap="round" />
</svg>
```

> [!TIP]
> Always declare `gradientUnits="userSpaceOnUse"` when targeting diagonal or monoline SVG paths so browsers render gradients consistently without bounding-box calculation artifacts.

---

## 3. Color Tokens

GitHub automatically renders live color swatches next to hex codes formatted in backticks.

### 3.1 Background & Surface Palette

| Token | Hex | Swatch | Role |
| :--- | :--- | :--- | :--- |
| `--kl-bg-canvas` | `#121317` | `#121317` | Deep obsidian base canvas |
| `--kl-bg-card` | `#18181b` | `#18181b` | Frosted container & card background (60%–80% opacity) |
| `--kl-bg-elevated` | `#27272a` | `#27272a` | Dropdowns, tooltips, floating popovers |
| `--kl-bg-subtle` | `#3f3f46` | `#3f3f46` | Secondary card fills & active pill states |

### 3.2 Brand & Thread Accents

| Token | Hex | Swatch | Role |
| :--- | :--- | :--- | :--- |
| `--kl-thread-indigo` | `#6366f1` | `#6366f1` | Primary brand accent & warp origin |
| `--kl-thread-violet` | `#8b5cf6` | `#8b5cf6` | Primary gradient terminal & secondary accent |
| `--kl-thread-coral` | `#ff6b4a` | `#ff6b4a` | Tactile warm accent (active weaves, badges, highlights) |
| `--kl-thread-amber` | `#f59e0b` | `#f59e0b` | Secondary warm gradient endpoint |

### 3.3 Text & Foreground

| Token | Hex | Swatch | Role |
| :--- | :--- | :--- | :--- |
| `--kl-text-primary` | `#f8fafc` | `#f8fafc` | Headlines, titles, high-contrast readable copy |
| `--kl-text-secondary` | `#cbd5e1` | `#cbd5e1` | Primary body text & interactive elements |
| `--kl-text-muted` | `#94a3b8` | `#94a3b8` | Descriptions, secondary metadata, inactive links |
| `--kl-text-subtle` | `#64748b` | `#64748b` | Placeholders, timestamps, micro-labels |

### 3.4 Status & Semantic Tokens

| Status | Hex | Swatch | Border | Background Tint |
| :--- | :--- | :--- | :--- | :--- |
| **Coming Soon** | `#fcd34d` | `#fcd34d` | `rgba(245, 158, 11, 0.30)` | `rgba(245, 158, 11, 0.10)` |
| **In Development** | `#a5b4fc` | `#a5b4fc` | `rgba(99, 102, 241, 0.30)` | `rgba(99, 102, 241, 0.10)` |
| **Experimental / Lab** | `#d8b4fe` | `#d8b4fe` | `rgba(139, 92, 246, 0.30)` | `rgba(139, 92, 246, 0.10)` |
| **Live / Active** | `#34d399` | `#34d399` | `rgba(16, 185, 129, 0.30)` | `rgba(16, 185, 129, 0.10)` |
| **Error / Alert** | `#fb7185` | `#fb7185` | `rgba(244, 63, 94, 0.30)` | `rgba(244, 63, 94, 0.10)` |

---

## 4. Typography

KnitLabs products pair a legible sans-serif for UI and content with a precision monospace face for code, metrics, and technical labels.

| Role | Font Family | Recommended Weights |
| :--- | :--- | :--- |
| **Interface & Editorial** | `Inter`, `Google Sans Flex`, system-ui, sans-serif | `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold) |
| **Code & Technical Labels** | `JetBrains Mono`, `Fira Code`, monospace | `400` (Regular), `500` (Medium) |

### Typographic Scale

| Token | Size | Line Height | Tracking | Typical Usage |
| :--- | :--- | :--- | :--- | :--- |
| `text-xs` | `0.75rem` (12px) | `1rem` (16px) | `+0.05em` | Status tags, mono labels, timestamps |
| `text-sm` | `0.875rem` (14px) | `1.25rem` (20px) | `normal` | Subtitle copy, metadata, secondary links |
| `text-base` | `1rem` (16px) | `1.5rem` (24px) | `normal` | Default body text |
| `text-lg` | `1.125rem` (18px) | `1.75rem` (28px) | `-0.01em` | Lead paragraphs, card titles |
| `text-xl` | `1.25rem` (20px) | `1.75rem` (28px) | `-0.02em` | Section subheadings |
| `text-2xl` | `1.5rem` (24px) | `2rem` (32px) | `-0.025em` | Modal titles, feature headings |
| `text-3xl` | `1.875rem` (30px) | `2.25rem` (36px) | `-0.03em` | Major section headers |
| `text-4xl` | `2.25rem` (36px) | `2.5rem` (40px) | `-0.035em` | Product hero displays |

---

## 5. Surfaces, Lighting & Glassmorphism

KnitLabs products avoid opaque flat cards, opting for luminous frosted glass that reveals ambient lighting beneath.

### 5.1 Card Spec

```css
.kl-card {
  background: rgba(24, 24, 27, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 1rem; /* 16px */
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.37),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.kl-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.40);
  box-shadow: 
    0 16px 40px -8px rgba(99, 102, 241, 0.22),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.16);
}
```

### 5.2 Atmospheric Lighting Mesh

Warm ambient illumination is achieved using non-blocking fixed or relative radial gradients:

```css
/* Hero / Header Ambient Mesh */
.kl-ambient-hero {
  background: radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.20) 0%, rgba(18, 19, 23, 0) 70%);
}

/* Three-Point Ambient Mesh */
.kl-ambient-mesh {
  background-image: 
    radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 85% 60%, rgba(255, 107, 74, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
}
```

---

## 6. Spacing Scale

Built on a strict **4px / 8px linear scale**:

| Space Token | Value (px) | Value (rem) | Typical Usage |
| :--- | :--- | :--- | :--- |
| `1` | `4px` | `0.25rem` | Icon gap, badge padding X/Y |
| `2` | `8px` | `0.5rem` | Tight button padding, inner element spacing |
| `3` | `12px` | `0.75rem` | Input padding, compact card padding |
| `4` | `16px` | `1rem` | Standard card inner padding, standard gap |
| `6` | `24px` | `1.5rem` | Card margins, section spacing on mobile |
| `8` | `32px` | `2rem` | Component blocks, layout separation |
| `12` | `48px` | `3rem` | Section gutters |
| `16` | `64px` | `4rem` | Major content break |
| `24` | `96px` | `6rem` | Page section dividers |

---

## 7. Universal UI Component Patterns

### 7.1 Buttons & Interactive Controls

1. **Primary Button**
   - Background: Vibrant Indigo `#6366f1` or thread gradient (`#6366f1` → `#8b5cf6`)
   - Text: `#ffffff`, font-weight `500`
   - Shadow: `0 0 20px rgba(99, 102, 241, 0.35)`
   - Hover: Brightness increase + `scale(1.02)`
2. **Secondary / Glass Button**
   - Background: `rgba(255, 255, 255, 0.05)`
   - Border: `1px solid rgba(255, 255, 255, 0.12)`
   - Text: `#f8fafc`
   - Hover: `rgba(255, 255, 255, 0.10)`, border `rgba(255, 255, 255, 0.25)`
3. **Ghost / Tertiary Button**
   - Background: Transparent
   - Text: `#cbd5e1`
   - Hover: `#ffffff`, subtle background tint `rgba(255, 255, 255, 0.05)`

### 7.2 Status Badges & Indicator Pills

Badges use a tactile pill shape (`rounded-full`) paired with a live pulsing beacon:

```html
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">
  <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
  Coming Soon
</span>
```

---

## 8. Motion & Interaction

- **Duration Token**: `250ms`–`350ms` for UI micro-interactions; `600ms`–`900ms` for large layout transitions.
- **Easing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like ease-out, zero bounce overshoot).
- **Reduced Motion**: All animations must respect `prefers-reduced-motion: reduce`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

> [!NOTE]
> All KnitLabs repositories should reference this document for styling tokens, vector marks, and interaction patterns to ensure brand coherence across apps, extensions, and web tools.
