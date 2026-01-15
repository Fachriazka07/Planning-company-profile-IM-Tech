# UI/UX Design - IM Tech Company Profile

**Project:** IM Tech Company Profile + Admin Dashboard  
**Date:** 2026-01-15  
**Design Tool:** Figma (Ali - UI/UX)  
**Component Library:** shadcn/ui + Tailwind CSS v4  
**Approach:** Mobile-first responsive

---

## 1. Design Style Selection (RULE-UX07)

### 1.1 Analysis

| Factor | Value | Impact |
|--------|-------|--------|
| **Project Type** | Corporate + Admin Dashboard | Professional, trustworthy |
| **Target Audience** | B2G (govt), B2B (business) | Formal, credible |
| **Brand Personality** | Tech company, innovative | Modern but not trendy |
| **Accessibility** | Medium-High (AA) | Good contrast required |
| **Performance** | Important (mobile users) | Fast loading |

### 1.2 Style Decision

| Style | Score | Rationale |
|-------|-------|-----------|
| ❌ Glassmorphism | 3/10 | Too trendy, not formal enough for B2G |
| ❌ Neumorphism | 2/10 | Poor accessibility, dated |
| ⚠️ Material Design | 7/10 | Good but too "Google-y" |
| ✅ **Modern Minimalist** | 9/10 | Professional, fast, accessible |
| ⚠️ Flat Design | 7/10 | Too simple for portfolio showcase |

### 1.3 Selected Style: Modern Minimalist

```
┌─────────────────────────────────────────────────────────────┐
│ MODERN MINIMALIST                                           │
├─────────────────────────────────────────────────────────────┤
│ ✓ Clean typography with good hierarchy                      │
│ ✓ Generous whitespace                                       │
│ ✓ Subtle shadows for depth                                  │
│ ✓ Accent colors for CTAs                                    │
│ ✓ High contrast for readability                             │
│ ✓ Micro-animations for feedback                             │
└─────────────────────────────────────────────────────────────┘
```

**Key Characteristics:**
1. **Colors:** Limited palette, strong primary accent
2. **Typography:** Clean sans-serif (Inter)
3. **Spacing:** Consistent rhythm, generous padding
4. **Shadows:** Subtle, layered (not harsh)
5. **Animations:** Subtle, purposeful (hover, transitions)
6. **Images:** High-quality, consistent aspect ratios

---

## 2. Design Tokens (RULE-UX03)

### 2.1 Color Palette

```css
:root {
  /* Primary Brand */
  --color-primary-50: #e6f0ff;
  --color-primary-100: #b3d1ff;
  --color-primary-500: #0066ff;  /* Main */
  --color-primary-600: #0052cc;  /* Hover */
  --color-primary-700: #003d99;  /* Active */

  /* Neutral (Gray) */
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;

  /* Semantic */
  --color-success-500: #22c55e;
  --color-warning-500: #f59e0b;
  --color-error-500: #ef4444;
  --color-info-500: #3b82f6;

  /* Background */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-tertiary: #f3f4f6;

  /* Text */
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-text-tertiary: #9ca3af;
  --color-text-inverse: #ffffff;
}
```

### 2.2 Typography

```css
:root {
  /* Font Family */
  --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Font Size Scale (1rem = 16px) */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */

  /* Font Weight */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Height */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}
```

### 2.3 Spacing

```css
:root {
  /* Spacing Scale (4px base) */
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### 2.4 Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-default: 0.25rem; /* 4px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-full: 9999px;
}
```

### 2.5 Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-default: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### 2.6 Transitions

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
}
```

### 2.7 Breakpoints

```css
/* Mobile-first breakpoints */
--screen-sm: 640px;    /* Small tablets */
--screen-md: 768px;    /* Tablets */
--screen-lg: 1024px;   /* Laptops */
--screen-xl: 1280px;   /* Desktops */
--screen-2xl: 1536px;  /* Large monitors */
```

---

## 3. Key Screens Inventory

### 3.1 Landing Page Screens (8 Pages)

| # | Screen | Route | Priority | States |
|---|--------|-------|----------|--------|
| 1 | **Homepage** | `/` | P0 | Ideal |
| 2 | **About** | `/about` | P0 | Ideal |
| 3 | **Services** | `/services` | P1 | Ideal, Empty |
| 4 | **Portfolio List** | `/portfolio` | P1 | Ideal, Empty, Loading |
| 5 | **Portfolio Detail** | `/portfolio/[slug]` | P1 | Ideal, Not Found |
| 6 | **Blog List** | `/blog` | P2 | Ideal, Empty, Loading |
| 7 | **Blog Detail** | `/blog/[slug]` | P2 | Ideal, Not Found |
| 8 | **Team** | `/team` | P1 | Ideal |
| 9 | **Contact** | `/contact` | P0 | Ideal, Success, Error |

### 3.2 Admin Dashboard Screens (12 Pages)

| # | Screen | Route | Priority | States |
|---|--------|-------|----------|--------|
| 1 | **Login** | `/admin/login` | P0 | Ideal, Error, Loading |
| 2 | **Dashboard Home** | `/admin/dashboard` | P0 | Ideal |
| 3 | **Portfolio List** | `/admin/portfolio` | P0 | Ideal, Empty, Loading |
| 4 | **Portfolio Form** | `/admin/portfolio/new` | P0 | Ideal, Validation |
| 5 | **Portfolio Edit** | `/admin/portfolio/[id]` | P0 | Ideal, Loading |
| 6 | **Blog List** | `/admin/blog` | P1 | Ideal, Empty, Loading |
| 7 | **Blog Form** | `/admin/blog/new` | P1 | Ideal, Validation |
| 8 | **Team List** | `/admin/team` | P1 | Ideal, Empty |
| 9 | **Services List** | `/admin/services` | P1 | Ideal, Empty |
| 10 | **Contacts List** | `/admin/contacts` | P0 | Ideal, Empty |
| 11 | **Contact Detail** | `/admin/contacts/[id]` | P0 | Ideal |
| 12 | **Users List** | `/admin/users` | P0 | Ideal |

---

## 4. Screen State Definitions

### 4.1 State Pattern

Each screen MUST have these states defined:

| State | Description | UI Element |
|-------|-------------|------------|
| **Empty** | No data yet | Illustration + "No items" + CTA |
| **Loading** | Fetching data | Skeleton placeholders |
| **Ideal** | Data loaded | Full content |
| **Error** | Failed to load | Error message + Retry button |
| **Not Found** | 404 | "Page not found" + Home link |

### 4.2 Example: Portfolio List States

#### Empty State
```
┌─────────────────────────────────────────┐
│                                         │
│          [Illustration]                 │
│                                         │
│      Belum ada portfolio                │
│   Tambahkan proyek pertama Anda         │
│                                         │
│       [+ Tambah Portfolio]              │
│                                         │
└─────────────────────────────────────────┘
```

#### Loading State
```
┌─────────────────────────────────────────┐
│ Portfolio              [+ Add New]      │
├─────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐     │
│ │ ░░░░░░░░░░░░░ │ │ ░░░░░░░░░░░░░ │     │
│ │ ░░░░░░░░░     │ │ ░░░░░░░░░     │     │
│ │ ░░░░░░        │ │ ░░░░░░        │     │
│ └───────────────┘ └───────────────┘     │
└─────────────────────────────────────────┘
```

#### Ideal State
```
┌─────────────────────────────────────────┐
│ Portfolio              [+ Add New]      │
├─────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐     │
│ │ [Image]       │ │ [Image]       │     │
│ │ Project Name  │ │ Project Name  │     │
│ │ Category      │ │ Category      │     │
│ └───────────────┘ └───────────────┘     │
│                                         │
│ ← 1 2 3 4 5 →                           │
└─────────────────────────────────────────┘
```

#### Error State
```
┌─────────────────────────────────────────┐
│                                         │
│         ⚠️ Gagal memuat data            │
│                                         │
│     Terjadi kesalahan saat memuat       │
│     portfolio. Silakan coba lagi.       │
│                                         │
│            [Coba Lagi]                  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 5. Component Inventory

### 5.1 Layout Components

| Component | Usage | Variants |
|-----------|-------|----------|
| **Container** | Max-width wrapper | `sm`, `md`, `lg`, `xl`, `full` |
| **Navbar** | Global navigation | Landing, Admin |
| **Footer** | Landing footer | -  |
| **Sidebar** | Admin navigation | Collapsed, Expanded |
| **PageHeader** | Page title + actions | With breadcrumb, With tabs |

### 5.2 Form Components (shadcn/ui)

| Component | Usage | States |
|-----------|-------|--------|
| **Input** | Text input | Default, Focus, Error, Disabled |
| **Textarea** | Long text | Default, Focus, Error |
| **Select** | Dropdown | Default, Open, Selected |
| **Checkbox** | Boolean | Unchecked, Checked, Indeterminate |
| **Switch** | Toggle | Off, On |
| **Button** | Actions | Primary, Secondary, Ghost, Destructive |
| **FileUpload** | Image upload | Empty, Uploading, Uploaded |

### 5.3 Data Display Components

| Component | Usage |
|-----------|-------|
| **Card** | Content container |
| **Table** | Data list with sorting |
| **DataTable** | Table + pagination + filters |
| **Badge** | Status indicator |
| **Avatar** | User image |
| **Skeleton** | Loading placeholder |

### 5.4 Feedback Components

| Component | Usage | Variants |
|-----------|-------|----------|
| **Toast** | Notifications | Success, Error, Warning, Info |
| **Alert** | Inline message | Success, Error, Warning, Info |
| **Dialog** | Modal | Confirmation, Form |
| **Sheet** | Side panel | Mobile menu, Filters |

### 5.5 Navigation Components

| Component | Usage |
|-----------|-------|
| **Breadcrumb** | Page hierarchy |
| **Tabs** | Content sections |
| **Pagination** | Page navigation |
| **Menu** | Dropdown menu |

---

## 6. Landing Page Component Mapping

### 6.1 Homepage Components

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR                                                       │
│ [Logo]  Home About Services Portfolio Blog Contact [CTA]    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                        HERO SECTION                          │
│   "Solusi Digital untuk Bisnis Anda"                        │
│   "Kami membantu transformasi digital..."                   │
│   [Hubungi Kami]  [Lihat Portfolio]                         │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                      ABOUT PREVIEW                           │
│   [Image]  "Tentang IM Tech"                                │
│            Brief description...                              │
│            [Selengkapnya →]                                 │
├─────────────────────────────────────────────────────────────┤
│                    SERVICES SECTION                          │
│   "Layanan Kami"                                            │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│   │ Icon   │ │ Icon   │ │ Icon   │ │ Icon   │               │
│   │ Title  │ │ Title  │ │ Title  │ │ Title  │               │
│   │ Desc   │ │ Desc   │ │ Desc   │ │ Desc   │               │
│   └────────┘ └────────┘ └────────┘ └────────┘               │
├─────────────────────────────────────────────────────────────┤
│                   LEGALITY SECTION                           │
│   "Perusahaan Terdaftar & Terpercaya"                       │
│   [SIUP Badge]  [NPWP Badge]  [NIB Badge]                   │
├─────────────────────────────────────────────────────────────┤
│                  PORTFOLIO PREVIEW                           │
│   "Proyek Terbaru"                                          │
│   ┌────────┐ ┌────────┐ ┌────────┐                          │
│   │ Image  │ │ Image  │ │ Image  │                          │
│   │ Title  │ │ Title  │ │ Title  │                          │
│   └────────┘ └────────┘ └────────┘                          │
│   [Lihat Semua Portfolio →]                                 │
├─────────────────────────────────────────────────────────────┤
│                      CTA SECTION                             │
│   "Siap Memulai Proyek?"                                    │
│   [Hubungi Kami via WhatsApp]                               │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
│ Logo | About | Services | Contact | Social Links | Copyright│
└─────────────────────────────────────────────────────────────┘
│ FLOATING WHATSAPP BUTTON                          [WA Icon] │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Admin Dashboard Layout

```
┌──────────────────────────────────────────────────────────────┐
│ HEADER                                    [Search] [Avatar] │
├─────────────┬────────────────────────────────────────────────┤
│             │                                                │
│  SIDEBAR    │   MAIN CONTENT                                 │
│             │                                                │
│  Dashboard  │   ┌──────────────────────────────────────────┐│
│  Portfolio  │   │ PAGE HEADER                              ││
│  Blog       │   │ Title           [Action Buttons]         ││
│  Team       │   └──────────────────────────────────────────┘│
│  Services   │                                                │
│  Contacts🔴 │   ┌──────────────────────────────────────────┐│
│  ─────────  │   │                                          ││
│  Users      │   │ CONTENT AREA                             ││
│  Settings   │   │ (Table, Form, Cards, etc.)               ││
│             │   │                                          ││
│             │   └──────────────────────────────────────────┘│
│             │                                                │
└─────────────┴────────────────────────────────────────────────┘
```

---

## 7. Accessibility Checklist (RULE-UX04)

### 7.1 Color Contrast (WCAG AA)

| Element | Required | Our Value | Status |
|---------|----------|-----------|--------|
| Normal text | 4.5:1 | Primary on white: 4.6:1 | ✅ Pass |
| Large text | 3:1 | All large text: 4.5:1+ | ✅ Pass |
| UI components | 3:1 | Buttons, inputs: 3.2:1+ | ✅ Pass |

### 7.2 Keyboard Navigation

| Requirement | Implementation |
|-------------|----------------|
| All interactive elements focusable | Tab order defined |
| Visible focus indicator | Ring style: `ring-2 ring-primary-500` |
| Skip links | "Skip to content" link |
| No keyboard traps | Modal can close with ESC |

### 7.3 Screen Reader Support

| Requirement | Implementation |
|-------------|----------------|
| Alt text for images | Required in CMS |
| ARIA labels | All icons, buttons |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<footer>` |
| Form labels | All inputs have `<label>` |
| Error announcements | `aria-live="polite"` on toasts |

### 7.4 Forms Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Labels associated | `htmlFor` attribute |
| Error messages | Inline below field |
| Required indicators | `*` with `aria-required` |
| Success feedback | Toast notification |

---

## 8. Responsive Breakpoints

### 8.1 Mobile-First Approach

| Breakpoint | Viewport | Target Device |
|------------|----------|---------------|
| Default | 0-639px | Mobile phones |
| `sm` | 640px+ | Large phones |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Laptops |
| `xl` | 1280px+ | Desktops |
| `2xl` | 1536px+ | Large monitors |

### 8.2 Layout Changes

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navbar | Hamburger menu | Hamburger | Full nav |
| Hero | Stack (1 col) | Stack | 2 columns |
| Services grid | 1 col | 2 col | 4 col |
| Portfolio grid | 1 col | 2 col | 3 col |
| Admin sidebar | Hidden (sheet) | Collapsed | Expanded |
| Admin table | Card view | Table | Table |

---

## 9. Animation Guidelines

### 9.1 Micro-interactions

| Interaction | Animation | Duration |
|-------------|-----------|----------|
| Button hover | Background color | 150ms |
| Card hover | Shadow + scale(1.02) | 200ms |
| Modal open | Fade + scale | 200ms |
| Page transition | Fade | 150ms |
| Skeleton | Pulse | 1.5s loop |
| Toast enter | Slide from right | 300ms |

### 9.2 Animation Principles

1. **Purposeful** — Only animate to provide feedback
2. **Fast** — Under 300ms for most interactions
3. **Subtle** — Don't distract from content
4. **Respectful** — Honor `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Image Guidelines

### 10.1 Image Formats

| Type | Format | Max Size |
|------|--------|----------|
| Photos | WebP (fallback JPG) | 500KB |
| Icons | SVG | 10KB |
| Logos | SVG or PNG | 50KB |

### 10.2 Aspect Ratios

| Usage | Ratio | Example |
|-------|-------|---------|
| Portfolio thumbnail | 16:9 | 1280x720 |
| Blog featured image | 16:9 | 1200x675 |
| Team photo | 1:1 | 400x400 |
| Hero image | 16:9 | 1920x1080 |

---

## ✅ Design Checklist

- [x] Design style selected (Modern Minimalist)
- [x] Design tokens defined (colors, typography, spacing)
- [x] Key screens listed (21 total)
- [x] Screen states defined
- [x] Component inventory created
- [x] Accessibility requirements documented
- [x] Responsive breakpoints defined
- [x] Animation guidelines set
- [x] Image guidelines set

---

*Generated: 2026-01-15*  
*Workflow: /design-ui-ux | ID: WF-UX01*  
*Rules Applied: RULE-UX02, RULE-UX03, RULE-UX04, RULE-UX07*
