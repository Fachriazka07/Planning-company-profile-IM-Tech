# Wireframe: About Page

**Project:** IM Tech Company Profile  
**Priority:** P1  
**URL:** `/about`  
**Status:** ✅ Advanced Layout & Animation Defined  
**Source:** [Figma Link](https://www.figma.com/design/GMT3GcuzII1gVcoyjxfTCK/Company-Profile?node-id=122-6&t=GkQ2UtBaqchODfIl-1)

---

## Global Specs

- **Font:** `font-poppins` for all elements.
- **Title Component:** Use `<TitleGradient text="..." />` for all section headers.
- **Spacing:** Base gap `my-[128px]`. Use negative margins (`-mt-20`, `-mb-24`) for overlapping elements.
- **Animations:** GSAP + ScrollTrigger for enter animations.

---

## 1. Hero / Introduction Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│ [Navbar Component] (Z-Index: 50)                                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Grid 2 Columns relative]                                              │
│                                                                         │
│  ┌──────────────────────────────┐     ┌──────────────────────────────┐  │
│  │                              │     │  [ABSOLUTE POSITIONED]       │  │
│  │  <TitleGradient              │     │  top-0 right-0               │  │
│  │     text="Tentang Kami" />   │     │  z-index: 10                 │  │
│  │                              │     │                              │  │
│  │  [Description Text]          │     │    [3D SPHERE VISUAL]        │  │
│  │  font-poppins, 16px          │     │    (Partially overlaps       │  │
│  │  text-neutral-600            │     │     text area)               │  │
│  │                              │     │                              │  │
│  └──────────────────────────────┘     └──────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs
- **Layout:** Grid 2 cols (Desktop), Stack (Mobile).
- **Typography:**
  - Title: 36px (Poppins).
  - Body: Poppins, text-neutral-600.
- **Visuals:**
  - 3D Sphere: `position: absolute`, `right: 0`, `top: 0`, `z-index: 10`.
  - Overlap: Ensure visual slightly covers/touches text area for depth.

---

## 2. Visi & Misi Section (GSAP Animation)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌───────────────────────────┐         ┌─────────────────────────────┐  │
│  │                           │         │                             │  │
│  │   [VISI TEXT]             │         │   [MISI LIST]               │  │
│  │   "Menjadi partner..."    │         │   • Point 1                 │  │
│  │   (Large, Prominent)      │         │   • Point 2                 │  │
│  │                           │         │   • Point 3                 │  │
│  │   [GSAP: Opacity 0->1]    │         │   [GSAP: Stagger Reveal]    │  │
│  │                           │         │                             │  │
│  └───────────────────────────┘         └─────────────────────────────┘  │
│                                            (Connecting Arrows Image)    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Animation Specs (GSAP)
- **Initial State:** `opacity: 0`, `y: 50`.
- **Trigger:** ScrollTrigger when section comes into view.
- **Sequence:**
  1. Visi text fades in + slides up.
  2. Misi list items stagger in (0.2s delay between items).
- **Comment:** `// ANIMATION: Menggunakan GSAP ScrollTrigger untuk efek Visi & Misi`

---

## 3. Keunggulan & Budaya Section (Shared Background)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [WRAPPER DIV with FIXED BACKGROUND IMAGE]                              │
│  Background-attachment: fixed or absolute covered                       │
│                                                                         │
│  === SECTION A: KEUNGGULAN ===                                          │
│  ┌──────────────────────────────┐                                       │
│  │ <TitleGradient               │                                       │
│  │    text="Keunggulan..." />   │                                       │
│  │                              │                                       │
│  │ [List with Checkmarks]       │                                       │
│  └──────────────────────────────┘                                       │
│                                                                         │
│  === SECTION B: BUDAYA (Slider) ===                                     │
│  ┌───────────────────────────────────────────────────────┐              │
│  │                                                       │              │
│  │  [PHOTO 1]  (Overlap)  [PHOTO 2]                      │              │
│  │  z-index: 10           z-index: 5                     │              │
│  │                                                       │              │
│  │  [Interaction]                                        │              │
│  │  Click Left -> Slide Left                             │              │
│  │  Click Right -> Slide Right                           │              │
│  │                                                       │              │
│  └───────────────────────────────────────────────────────┘              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs
- **Background:** Single large image covering both "Keunggulan" and "Budaya".
- **Visuals:** Dark overlay to ensure text readability.
- **Slider:** 2 Overlapping photos with simple click-to-slide interaction.

---

## 4. Our Team Section (Cross-Section Layout)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│           [BLUE ARROW DECORATION] (Absolute, z-index 10)                │
│                                                                         │
│  [Dark BG Ends Here] -----------------------------------------------    │
│  [White BG Starts Here]                                                 │
│                                                                         │
│             ┌──────────┐   ┌──────────┐   ┌──────────┐                  │
│             │  Avatar  │   │  AVATAR  │   │  Avatar  │                  │
│             │   Deni   │   │  FACHRI  │   │  Mifdlal │                  │
│             │ Firdaus  │   │   AZKA   │   │   Saqib  │                  │
│             └──────────┘   │ (Scale   │   └──────────┘                  │
│                            │   1.25,  │                                 │
│                            │  z-idx   │                                 │
│                            │  high)   │                                 │
│                            └──────────┘                                 │
│                                                                         │
│               <TitleGradient text="Tim Kami" />                         │
│               (Centered below avatars)                                  │
│                                                                         │
│               "Tertarik...?" [Button Cek Posisi]                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs
- **Layout:** Section positioned *between* the dark background of "Budaya" and the white footer area.
- **Avatars:**
  - 3 Circular Avatars.
  - **Fachri Azka (Center):** `scale-125`, `z-index-20`, `border-4 border-white`.
  - **Side Avatars:** `scale-100`, `z-index-10`.
- **Decoration:** Blue arrow asset positioned absolutely, piercing through the section boundary.

---

## 5. Responsive Strategy

| Screen | Layout Changes |
|--------|----------------|
| **Desktop** | Full overlap effects, GSAP enabled, Parallax backgrounds. |
| **Mobile** | Stack layout (1 col). Disable heavy animations. Adjust negative margins to prevent content blocking. |

---

## 6. Footer
*(Standard Footer)*


**Project:** IM Tech Company Profile  
**Priority:** P1  
**URL:** `/about`  
**Status:** ✅ Figma Extracted  
**Source:** [Figma Link](https://www.figma.com/design/GMT3GcuzII1gVcoyjxfTCK/Company-Profile?node-id=122-6&t=GkQ2UtBaqchODfIl-1)

---

## 1. Hero / Introduction Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│ [Navbar Component]                                                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────────────────┐     ┌──────────────────────────────┐  │
│  │                              │     │                              │  │
│  │   Tentang Kami               │     │                              │  │
│  │   (#00AAFF highlight)        │     │         [3D SPHERE]          │  │
│  │                              │     │       Gradient Blue/Purple   │  │
│  │   IM Tech adalah partner     │     │        Abstract Shape        │  │
│  │   digital Anda yang          │     │                              │  │
│  │   fokus pada inovasi...      │     │                              │  │
│  │                              │     │                              │  │
│  └──────────────────────────────┘     └──────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs

| Element | Value |
|---------|-------|
| Layout | 2 Columns (Text Left, Image Right) |
| Heading | "Tentang Kami" (gradient #00AAFF to #1100FF ) |
| Description | Paragraph text, color-neutral-600 |
| Image | 3D Abstract Sphere/Shape (Full height of section) |
| Background | White / Light Gray |

### Mobile Layout

```
┌──────────────────────┐
│   Tentang Kami       │
│                      │
│   IM Tech adalah...  │
│                      │
│   [3D SPHERE]        │
│   (Smaller/Bottom)   │
└──────────────────────┘
```

---

## 2. Visi & Misi Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌───────────────────────────┐         ┌─────────────────────────────┐  │
│  │                           │    >>>  │                             │  │
│  │   Visi                    │  [ARROW]│   Misi                      │  │
│  │   ────                    │    >>>  │   ────                      │  │
│  │                           │         │                             │  │
│  │   Menjadi perusahaan...   │         │   1. Memberikan solusi...   │  │
│  │   (Bold Statement)        │         │   2. Mengembangkan...       │  │
│  │   3. Membangun tim...     │         │                             │  │
│  │                           │         │                             │  │
│  └───────────────────────────┘         └─────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs

| Element | Value |
|---------|-------|
| Layout | Split Left (Visi) / Right (Misi) |
| Separator | Blue Arrow Indicators (>>>) in center |
| Visi Style | Large text, bold |
| Misi Style | Numbered list |

### Mobile Layout

```
┌──────────────────────┐
│   Visi               │
│   Menjadi...         │
│                      │
│   [Arrow Down v]     │
│                      │
│   Misi               │
│   1. ...             │
│   2. ...             │
└──────────────────────┘
```

---

## 3. Culture Section ("Keunggulan & Budaya Kami")

```
┌─────────────────────────────────────────────────────────────────────────┐
│  BACKGROUND: DARK NAVY / BLACK                                          │
│                                                                         │
│  ┌──────────────────────────────┐     ┌──────────────────────────────┐  │
│  │                              │     │                              │  │
│  │   Keunggulan &               │     │   [ Masonry Image Grid ]     │  │
│  │   Budaya Kami                │     │                              │  │
│  │                              │     │   ┌──────┐  ┌──────┐         │  │
│  │   ✓ Profesional Team         │     │   │ img1 │  │ img2 │         │  │
│  │   ✓ Innovative               │     │   └──────┘  └──────┘         │  │
│  │   ✓ Client Oriented          │     │   ┌──────────────┐           │  │
│  │   ✓ On Time Delivery         │     │   │     img3     │           │  │
│  │                              │     │   └──────────────┘           │  │
│  │                              │     │                              │  │
│  └──────────────────────────────┘     └──────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs

| Element | Value |
|---------|-------|
| Background | Dark (#0F172A or similar) |
| Text Color | White |
| List Style | Checkmarks (Green/Blue/White) |
| Right Side | Masonry Grid of Office/Team Photos |

---

## 4. Team Section ("Tim Kami")

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                            Tim Kami                                     │
│                                                                         │
│        ┌──────────┐      ┌──────────┐      ┌──────────┐                 │
│        │  PHOTO   │      │  PHOTO   │      │  PHOTO   │                 │
│        │          │      │          │      │          │                 │
│        │          │      │          │      │          │                 │
│        │ Name 1   │      │ Fachri   │      │ Name 3   │                 │
│        │ Role     │      │ Azka     │      │ Role     │                 │
│        └──────────┘      │ CEO/Lead │      └──────────┘                 │
│                          └──────────┘                                   │
│                                                                         │
│                     Tertarik bergabung?                                 │
│                     [ Gabung Tim ]                                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specs

| Element | Value |
|---------|-------|
| Layout | 3 Cards centered |
| Highlight | Center card (Fadhil Adha) slightly larger/prominent? |
| Images | Portrait / Square with rounded corners |
| CTA | "Tertarik?" text + Button |

### States

| State | Behavior |
|-------|----------|
| Default | Static |
| Hover | Card lift / scale up |

---

## 5. Footer

*(Reused from Landing Page Wireframe)*

---

## Annotations

| Annotation | Value |
|------------|-------|
| Typography | Headers: Bold sans-serif |
| Spacing | Section Gap: 80px |
| Primary Color | Blue #00AAFF |
