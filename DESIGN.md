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

### 2.4 Product Logo Guidelines (Sub-Brands, Tools & Experiments)

Every product built under the KnitLabs collective (e.g. **Threadflow**, **LoomKit**, **StoryCraft**) carries its own distinct functional motif while sharing the core visual genetics of the parent KnitLabs mark. When creating or updating a product logo, follow these requirements:

#### 1. The Knit DNA: Core Principles
- **Monoline Vector Purity**: Marks must be built from clean, open or intersecting vector strokes (`<path>`, `<line>`, `<circle>`). Avoid filled 2D silhouettes, heavy solid masses, 3D skeuomorphism, or photographic raster effects.
- **Tactile Weave Metaphor**: Every product logo must visually translate the tactile idea of yarn, thread tension, loops, knots, or warp/weft structure into a symbol for the product's function:
  - *Interlocking Loops & Narrative Fibers*: For workspaces, note-taking apps, and thought tools (e.g., continuous loops weaving through each other).
  - *Warp & Weft Coordinates*: For UI component libraries, developer tools, and design systems (e.g., perpendicular thread intersections and tactile grids).
  - *Fluid Ribbons & Dynamic Curves*: For creative canvases, media tools, and storytelling experiments (e.g., expressive bezier sweeps or loose knots).
- **Frameless & 100% Transparent**:
  - The raw SVG mark is **completely frameless**. Do not include a background `<rect>`, container tile, squircle, or outer border in the canonical SVG file.
  - The mark must be able to sit directly on the dark obsidian canvas (`#121317`), frosted glass cards, transparent navbars, or light README documentation without clipping or harsh edges.
  - If an operating system or store requires a framed icon (e.g., macOS dock tile, iOS app icon, Chrome Web Store), that container belongs in the distribution packaging pipeline, never inside the raw vector logo.
  - Never bake drop-shadows or blur filters into the SVG source; shadow and glow are handled at runtime via CSS (`drop-shadow(...)`) to preserve crisp vector scaling.
- **Geometrically Balanced on a 1:1 Canvas**:
  - Author all product marks on a square `viewBox="0 0 40 40"` (or proportional `1:1` grid).
  - **Optical Centering**: The visual center of gravity must align with canvas center `(20, 20)`. If one stroke has an expressive tail or diagonal flare, adjust the coordinates so the mark feels balanced when paired with text or rendered in a round/square avatar.
  - **Safe Margin**: Maintain an interior safe margin of at least `4px–5px` from the viewBox edges (keep path vertices within `x, y ∈ [4, 36]`). This ensures round stroke-caps and anti-aliasing pixels never get cut off at high zoom or downscaled favicon sizes.
- **Consistent Stroke Weight & Round Caps**:
  - Standardize stroke weight to `3.5px` (matching the parent KnitLabs mark on a `40x40` grid; range `3.0px`–`3.8px` depending on visual density).
  - Enforce `stroke-linecap="round"` and `stroke-linejoin="round"` across all strokes. Terminals must feel like soft, natural yarn threads rather than sharp mechanical edges.
- **Color Harmony & Thread Pairing**:
  - Anchor the mark in the KnitLabs thread color system:
    - Primary Thread Gradient: Indigo (`#6366f1`) → Violet (`#8b5cf6`)
    - Warm Accent Threads: Ember Coral (`#ff6b4a`), Amber Glow (`#f59e0b`)
    - Semantic / Product Accents: Emerald (`#34d399`) for live systems; Sky (`#38bdf8`) for connected data tools; Rose (`#fb7185`) for experimental canvas tools.
  - A product mark should pair **two contrasting thread paths** (e.g., an Indigo/Violet warp thread intersecting an Ember Coral or Amber weft thread), creating clear depth and visual interest through overlapping.
  - Always declare `gradientUnits="userSpaceOnUse"` on any `<linearGradient>` with explicit start/end coordinates.
- **Multi-Resolution & The 16px Favicon Test**:
  - The mark must remain unmistakable and crisp across all deployment scales:
    - `16x16` / `32x32`: Browser tab favicon and desktop taskbar.
    - `24x24` / `32x32`: Product cards, breadcrumb navbars, and sidebar headers.
    - `48x48` / `64x64`: Product landing pages, feature grids, and dialog headers.
    - `128x128`+: README hero headers and splash screens.
  - Always preview the mark at 16px. If lines blur together, simplify the paths or increase spacing between adjacent strokes. Limit the mark to 2–3 expressive paths.
- **Clean SVG Source Code**:
  - Semantic, human-readable SVG markup with clean integer or 1-decimal coordinates.
  - No `<g id="Layer_1">` wrapper bloat, no inline styles conflicting with CSS, and zero vector-editor metadata (Inkscape, Illustrator, Figma export noise).

#### 2. Sub-Brand Product Logo Blueprint (Example)

Here is a reference implementation for a KnitLabs sub-brand product mark (e.g. *Threadflow* or *LoomKit*), demonstrating monoline paths, tactile overlap, and frameless transparency:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <defs>
    <linearGradient id="product-thread" x1="10" y1="12" x2="30" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>
  <!-- Primary Continuous Thread (Indigo -> Violet) -->
  <path 
    d="M 10 20 C 10 13 18 13 20 20 C 22 27 30 27 30 20 C 30 13 22 13 20 20" 
    stroke="url(#product-thread)" 
    stroke-width="3.5" 
    stroke-linecap="round" 
  />
  <!-- Crossing Weft Accent (Ember Coral) -->
  <path 
    d="M 14 28 C 18 24 22 16 26 12" 
    stroke="#ff6b4a" 
    stroke-width="3.5" 
    stroke-linecap="round" 
  />
</svg>
```

#### 3. Product Logo Review Checklist

Before finalizing any product logo mark, verify that it passes every check:

- [ ] **Monoline**: Composed purely of strokes (`fill="none"`, uniform `3.5px` weight on `40x40` grid).
- [ ] **Round Terminals**: `stroke-linecap="round"` and `stroke-linejoin="round"` applied to all paths.
- [ ] **Frameless**: 100% transparent root with no background `<rect>`, container tile, or border.
- [ ] **Square & Centered**: 1:1 aspect ratio (`viewBox="0 0 40 40"`), optically centered with $\ge 4\text{px}$ safe padding.
- [ ] **Tactile Thread DNA**: Conveys yarn, weaving, loops, or physical connection.
- [ ] **Color Harmony**: Uses KnitLabs palette tokens (Indigo/Violet + signature warm or domain accent).
- [ ] **UserSpace Gradients**: All `<linearGradient>` tags specify `gradientUnits="userSpaceOnUse"`.
- [ ] **Favicon Tested**: Remains legible and recognizable when rendered at 16px in a browser tab.
- [ ] **Zero Artifacts**: No editor metadata, no baked drop shadows, clean human-readable SVG markup.

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

## 4. Typography System

Typography across KnitLabs products establishes clarity, technical precision, and calm editorial authority. We pair a high-legibility sans-serif for interface flows and prose with a geometric monospace for code, metrics, and metadata.

### 4.1 Typeface Roles & Font Stacks

| Role | Preferred Typefaces | System Fallback Stack | Recommended Weights |
| :--- | :--- | :--- | :--- |
| **Interface, Headings & Editorial** | `Inter`, `Google Sans Flex` | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` | `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold) |
| **Code, Metrics & Technical Data** | `JetBrains Mono`, `Fira Code` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace` | `400` (Regular), `500` (Medium), `700` (Bold) |

#### Role Application Guidelines
- **Sans-Serif**: Used for all human-facing narratives, page titles, navigation bars, button labels, descriptions, and forms. It remains neutral, warm, and transparent, letting content lead.
- **Monospace**: Used for technical provenance: git commit SHAs, terminal commands, data tags, status indicators, code snippets, timestamps, and product category metadata.

---

### 4.2 Typographic Scale & Hierarchy

| Token | Size | Line Height (Leading) | Tracking | Weight | Typical Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-xs` | `0.75rem` (12px) | `1rem` (16px) | `+0.05em` | `500` | Status tags, mono labels, timestamps, metadata |
| `text-sm` | `0.875rem` (14px) | `1.25rem` (20px) | `normal` | `400` / `500` | Secondary copy, form inputs, tooltips, card descriptions |
| `text-base` | `1rem` (16px) | `1.5rem` (24px) | `normal` | `400` / `500` | Default body copy, interactive buttons, list items |
| `text-lg` | `1.125rem` (18px) | `1.75rem` (28px) | `-0.01em` | `500` / `600` | Lead paragraphs, card titles, navigation brand marks |
| `text-xl` | `1.25rem` (20px) | `1.75rem` (28px) | `-0.02em` | `600` | Section subheadings, modal titles, featured callouts |
| `text-2xl` | `1.5rem` (24px) | `2rem` (32px) | `-0.025em` | `600` / `700` | Component headers, drawer titles |
| `text-3xl` | `1.875rem` (30px) | `2.25rem` (36px) | `-0.03em` | `700` | Major section headers, page titles |
| `text-4xl` | `2.25rem` (36px) | `2.5rem` (40px) | `-0.035em` | `700` / `800` | Hero headlines, primary landing statements |
| `text-5xl` | `3rem` (48px) | `1.15` (55px) | `-0.04em` | `800` | High-impact product hero statements |

---

### 4.3 Optical Tracking (Letter-Spacing) & Leading Rules

1. **Negative Tracking on Large Headings (`text-2xl` to `text-5xl`)**
   - Larger font sizes naturally appear to space out optically. Apply negative letter-spacing (`-0.02em` to `-0.035em`, Tailwind `tracking-tight` / `tracking-tighter`) to all titles.
   - This tightens character relationships, imparting visual authority, solidity, and editorial craft.
2. **Neutral Tracking on Body Prose (`text-sm` and `text-base`)**
   - Body copy must always remain at neutral tracking (`0` / `tracking-normal`). Never apply negative letter spacing to long-form body text, as it increases eye friction and reduces reading stamina.
3. **Positive Tracking on Micro-Typography & Monospace (`text-xs`, `text-[11px]`)**
   - Uppercase badges, category labels, timestamps, and monospaced snippets require open letter-spacing (`+0.05em` to `+0.1em`, Tailwind `tracking-wider` / `tracking-widest`).
   - Monospaced glyphs and capital letters crowd together at small sizes; open tracking provides breathing room and sharp legibility.
4. **Dark-Canvas Leading (Line-Height)**
   - Text rendered on dark backgrounds (`#121317`) naturally radiates a faint optical glow (halation).
   - Maintain generous line-heights for body text (`1.5` to `1.65`, `leading-relaxed`) to prevent adjacent lines from visually running together.
   - Keep display headings at tight leading (`1.1` to `1.2`) to avoid loose whitespace gaps across multi-line titles.

---

### 4.4 Product Wordmarks & Brand Lockups

When pairing a product logo mark with typography (in navbars, card headers, splash screens, or README banners), adhere to these lockup standards:

#### 1. The Collective Breadcrumb Lockup (Ecosystem Context)
When presenting a product within the KnitLabs collective, use the hierarchical breadcrumb structure:

```
[Icon Mark]  KNITLABS / Product Name  [Status Pill]
```

- **Parent Prefix (`KNITLABS`)**: Set in `--kl-text-muted` (`#94a3b8`) or `--kl-text-secondary` (`#cbd5e1`), font-mono or font-sans medium, with uppercase styling.
- **Divider (`/` or `//`)**: Set in `--kl-text-subtle` (`#64748b`) with horizontal padding.
- **Product Name**: Set in `--kl-text-primary` (`#f8fafc`), font-sans SemiBold (`600`) or Bold (`700`) with `-0.02em` tracking.

#### 2. Standalone Product Wordmark
- **UI & Web Applications**: Set the product name in `Inter` SemiBold (`600`) or Bold (`700`) in sentence/title case (e.g., **Threadflow**, **StoryCraft**), tracking `-0.02em`.
- **Developer Libraries & CLI Tools**: May optionally use uppercase monospace bold (e.g., `LOOMKIT`, `KNIT`) with `-0.01em` tracking to emphasize terminal and toolchain roots.

#### 3. Mark-to-Text Proportions & Optical Alignment
- **Size Proportion**: The icon mark height should measure **1.2x to 1.4x** the font cap-height:
  - *Compact Navbar*: `24px` icon mark paired with `16px–18px` wordmark text.
  - *Standard Card / Dialog*: `32px` icon mark paired with `20px–22px` wordmark text.
  - *Hero / Landing Splash*: `48px`–`56px` icon mark paired with `32px–36px` wordmark text.
- **Optical Baseline Alignment**: Always center the icon mark vertically on the **cap-height center** of the adjacent wordmark, not on the baseline or bounding-box extrema.
- **Spacing Gap**: Maintain a horizontal gap of `10px` to `14px` (`gap-2.5` to `gap-3.5`) between mark and wordmark.

---

### 4.5 Micro-Typography & Tabular Numerics

- **Tabular Numbers for Data**: Always enable `font-variant-numeric: tabular-nums` (Tailwind `tabular-nums`) for counters, countdowns, timestamps, benchmark metrics, and data tables. Tabular numerals have equal widths, preventing horizontal layout shifting when numbers increment.
- **Status Pills & Tags**:
  ```html
  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase border bg-indigo-500/10 border-indigo-500/30 text-indigo-300">
    <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
    In Progress
  </span>
  ```

---

### 4.6 Reading Ergonomics, Measure & Contrast Accessibility

- **Optimal Line Measure**: Constrain reading copy to **65–75 characters per line** (`max-w-prose` or `max-w-2xl`). Lines longer than 80 characters cause eye tracking fatigue on widescreen monitors.
- **WCAG Contrast on Obsidian Canvas (`#121317`)**:
  - `Primary Text` (`#f8fafc`): **17.5:1** contrast ratio (exceeds WCAG AAA).
  - `Secondary Text` (`#cbd5e1`): **12.3:1** contrast ratio (exceeds WCAG AAA).
  - `Muted Text` (`#94a3b8`): **6.8:1** contrast ratio (exceeds WCAG AA for normal text, AAA for large).
  - `Subtle / Disabled` (`#64748b`): **3.5:1** contrast ratio (strictly reserved for timestamps, disabled chrome, and non-essential decoration).
- **Subpixel Anti-Aliasing**: Apply `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` (Tailwind `antialiased`) globally to prevent letterforms from artificially bloating or blurring against dark obsidian surfaces.

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
