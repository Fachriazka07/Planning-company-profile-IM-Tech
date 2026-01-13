# IM Tech Company Profile - Tech Stack Decision

**Date:** 2026-01-13 (Updated)
**Project:** Company Profile + Admin Dashboard (CMS)
**Application Type:** CMS + Landing Page
**Tier:** Tier 2 (Business)
**Framework Version:** Next.js 16 LTS + Tailwind CSS v4

---

## 📚 Research Summary (Updated Jan 2026)

| Source | Key Finding |
|--------|-------------|
| nextjs.org | Next.js 16 LTS (Oct 2025): Turbopack default, Cache Components, React Compiler stable |
| tailwindcss.com | Tailwind CSS v4 (Jan 2025): Oxide engine (Rust), CSS-first config, 5x faster builds |
| Various | create-next-app now auto-configures Tailwind CSS v4 |

---

## 🚀 Next.js 16 New Features

| Feature | Description |
|---------|-------------|
| **Turbopack Default** | Rust-based bundler, 5-10x faster Fast Refresh, 2-5x faster builds |
| **Cache Components** | `use cache` directive for explicit caching control |
| **React Compiler** | Stable automatic memoization, no manual optimization needed |
| **proxy.ts** | Replaces middleware.ts for clearer network boundaries |
| **React 19.2** | View Transitions, `useEffectEvent()`, `<Activity/>` component |
| **DevTools MCP** | AI-assisted debugging with Model Context Protocol |
| **Requirements** | Node.js 20.9+, TypeScript 5.1+ |

---

## 🎨 Tailwind CSS v4 New Features

| Feature | Description |
|---------|-------------|
| **Oxide Engine** | Rewritten in Rust, 5x faster full builds, 100x faster incremental |
| **CSS-First Config** | No `tailwind.config.js` needed, use `@theme` in CSS |
| **Auto Content Detection** | Automatically finds template files |
| **Native Cascade Layers** | Better specificity management |
| **Container Queries** | First-class support without plugins |
| **P3 Color Palette** | Modern vivid colors for wide-gamut displays |
| **3D Transforms** | Native 3D transformation utilities |
| **`@starting-style`** | Enter/exit transitions without external tools |
| **Built-in @import** | No additional tooling needed |

---

## 🎯 Final Stack Decision (Updated)

| Layer | Technology | Version | Rationale |
|-------|------------|---------|-----------|
| **Frontend** | Next.js | 16.x (LTS) | Turbopack, Cache Components, React Compiler |
| **React** | React | 19.2.x | View Transitions, Activity component |
| **CSS Framework** | Tailwind CSS | 4.x | Oxide engine, CSS-first, 100x faster |
| **UI Library** | Shadcn UI | Latest | Compatible with Tailwind v4 |
| **Backend** | Next.js API Routes + Supabase | - | Full-stack dalam satu project |
| **Database** | Supabase (PostgreSQL) | - | Free tier, Auth built-in, Real-time |
| **Auth** | Supabase Auth | - | Built-in email/OAuth, RBAC via RLS |
| **File Storage** | Supabase Storage | - | S3-compatible, integrated with RLS |
| **Deployment** | Vercel | - | Optimized for Next.js 16 |
| **Language** | TypeScript | 5.3+ | Required by Next.js 16 |
| **Node.js** | Node.js | 20.9+ | Required by Next.js 16 |

---

## 🔍 Evaluation: Frontend Framework

| Criteria | Next.js | Remix | Nuxt |
|----------|---------|-------|------|
| **Maturity** | 5/5 | 4/5 | 4/5 |
| **Team Expertise** | 5/5 | 2/5 | 2/5 |
| **Community/Ecosystem** | 5/5 | 3/5 | 4/5 |
| **SSR/SSG Support** | 5/5 | 5/5 | 5/5 |
| **Admin Templates** | 5/5 | 3/5 | 4/5 |
| **TOTAL** | **25/25** | 17/25 | 19/25 |

**Winner:** ✅ **Next.js 16** — LTS version, Turbopack default, React Compiler stable.

---

## 🔍 Evaluation: Backend/Database

| Criteria | Supabase | Firebase | Prisma + Raw PostgreSQL |
|----------|----------|----------|-------------------------|
| **Free Tier** | 5/5 | 4/5 | 5/5 |
| **PostgreSQL (relational)** | 5/5 | 2/5 | 5/5 |
| **Built-in Auth** | 5/5 | 5/5 | 1/5 |
| **Built-in Storage** | 5/5 | 5/5 | 1/5 |
| **Real-time** | 4/5 | 5/5 | 2/5 |
| **Open Source** | 5/5 | 2/5 | 5/5 |
| **Vendor Lock-in** | 5/5 (low) | 2/5 (high) | 5/5 (none) |
| **TOTAL** | **34/35** | 25/35 | 24/35 |

**Winner:** ✅ **Supabase** — All-in-one solution dengan PostgreSQL, Auth, Storage.

---

## 🔍 Evaluation: UI Library

| Criteria | Shadcn UI + Tailwind v4 | Material UI | Chakra UI |
|----------|-------------------------|-------------|-----------|
| **Design Quality** | 5/5 | 4/5 | 4/5 |
| **Customizability** | 5/5 | 3/5 | 4/5 |
| **Bundle Size** | 5/5 | 3/5 | 4/5 |
| **Free/Open Source** | 5/5 | 5/5 | 5/5 |
| **Modern Look** | 5/5 | 3/5 | 4/5 |
| **Tailwind v4 Compatible** | 5/5 | 3/5 | 4/5 |
| **TOTAL** | **30/30** | 21/30 | 25/30 |

**Winner:** ✅ **Shadcn UI + Tailwind CSS v4** — CSS-first, Oxide engine, modern features.

---

## 📦 Key Dependencies (Complete - Updated for 2026)

### Core (Next.js 16 + React 19.2)

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^16.0.0 | Next.js 16 LTS with Turbopack |
| `react` | ^19.2.0 | React 19.2 with View Transitions |
| `react-dom` | ^19.2.0 | React DOM |
| `typescript` | ^5.3.0 | Type safety (required by Next.js 16) |
| `@supabase/supabase-js` | ^2.45.0 | Supabase client |
| `@supabase/ssr` | ^0.5.0 | Supabase server-side auth |

### UI Components (Tailwind CSS v4)

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^4.0.0 | Tailwind CSS v4 with Oxide engine |
| `@tailwindcss/vite` | ^4.0.0 | Vite plugin for Tailwind v4 |
| `@radix-ui/react-*` | Latest | Accessible primitives (Shadcn) |
| `class-variance-authority` | ^0.7.0 | Component variants |
| `clsx` | ^2.1.0 | Conditional classes |
| `tailwind-merge` | ^2.2.0 | Merge Tailwind classes |
| `lucide-react` | ^0.450.0 | Icon library |
| `sonner` | ^1.7.0 | Toast notifications |
| `next-themes` | ^0.4.0 | Theme switching (light/dark) |

### Forms & Validation

| Package | Version | Purpose |
|---------|---------|---------|
| `react-hook-form` | ^7.49.0 | Form management |
| `zod` | ^3.22.0 | Schema validation |
| `@hookform/resolvers` | ^3.3.0 | Zod resolver for RHF |

### Rich Text Editor (Blog/Content)

| Package | Version | Purpose |
|---------|---------|---------|
| `@tiptap/react` | ^2.1.0 | Rich text editor |
| `@tiptap/starter-kit` | ^2.1.0 | Basic editor features |
| `@tiptap/extension-image` | ^2.1.0 | Image support |
| `@tiptap/extension-link` | ^2.1.0 | Link support |
| `@tiptap/extension-placeholder` | ^2.1.0 | Placeholder text |

### Data Fetching & State

| Package | Version | Purpose |
|---------|---------|---------|
| `@tanstack/react-query` | ^5.17.0 | Server state management |
| `@tanstack/react-table` | ^8.11.0 | Data tables (Admin) |
| `nuqs` | ^1.15.0 | URL state management |

### Internationalization (Multi-language)

| Package | Version | Purpose |
|---------|---------|---------|
| `next-intl` | ^3.4.0 | i18n for Next.js App Router |

### SEO & Meta

| Package | Version | Purpose |
|---------|---------|---------|
| `next-sitemap` | ^4.2.0 | Sitemap generator |
| (Built-in) | - | Next.js Metadata API for SEO |

### PDF Generation

| Package | Version | Purpose |
|---------|---------|---------|
| `@react-pdf/renderer` | ^3.1.0 | PDF generation (Company Profile download) |

### Date & Time

| Package | Version | Purpose |
|---------|---------|---------|
| `date-fns` | ^3.0.0 | Date formatting & manipulation |

### Charts & Analytics (Admin Dashboard)

| Package | Version | Purpose |
|---------|---------|---------|
| `recharts` | ^2.10.0 | Charts for analytics dashboard |

### Blog & Content

| Package | Version | Purpose |
|---------|---------|---------|
| `react-markdown` | ^9.0.0 | Markdown rendering |
| `remark-gfm` | ^4.0.0 | GitHub Flavored Markdown |
| `slugify` | ^1.6.0 | URL slug generation |
| `reading-time` | ^1.5.0 | Estimated reading time |

### Image Handling

| Package | Version | Purpose |
|---------|---------|---------|
| `sharp` | ^0.33.0 | Image optimization (server) |
| (Built-in) | - | next/image for optimization |

### Email (Contact Form Notifications)

| Package | Version | Purpose |
|---------|---------|---------|
| `resend` | ^2.1.0 | Email API (free tier: 100 emails/day) |
| `react-email` | ^1.10.0 | Email templates with React |
| `@react-email/components` | ^0.0.12 | Email components |

### File Upload

| Package | Version | Purpose |
|---------|---------|---------|
| `react-dropzone` | ^14.2.0 | Drag & drop file upload |

### Utilities

| Package | Version | Purpose |
|---------|---------|---------|
| `nanoid` | ^5.0.0 | Unique ID generation |
| `lodash` | ^4.17.0 | Utility functions |
| `@types/lodash` | ^4.14.0 | Lodash types |

### Optional (Database ORM)

| Package | Version | Purpose |
|---------|---------|---------|
| `prisma` | ^5.8.0 | DB toolkit (dev) |
| `@prisma/client` | ^5.8.0 | Type-safe queries |

---

## 📦 Dev Dependencies (Complete)

### Testing

| Package | Version | Purpose |
|---------|---------|---------|
| `vitest` | ^1.2.0 | Unit test runner |
| `@testing-library/react` | ^14.1.0 | React testing |
| `@testing-library/jest-dom` | ^6.2.0 | DOM matchers |
| `@testing-library/user-event` | ^14.5.0 | User interaction |
| `@vitest/coverage-v8` | ^1.2.0 | Code coverage |
| `msw` | ^2.0.0 | API mocking |
| `playwright` | ^1.41.0 | E2E testing |
| `@playwright/test` | ^1.41.0 | Playwright runner |

### Linting & Formatting

| Package | Version | Purpose |
|---------|---------|---------|
| `eslint` | ^8.56.0 | Linter |
| `eslint-config-next` | ^14.1.0 | Next.js ESLint |
| `@typescript-eslint/parser` | ^6.19.0 | TS parser |
| `@typescript-eslint/eslint-plugin` | ^6.19.0 | TS rules |
| `prettier` | ^3.2.0 | Formatter |
| `prettier-plugin-tailwindcss` | ^0.5.0 | Tailwind sorting |
| `eslint-config-prettier` | ^9.1.0 | Disable conflicts |

### Git Hooks

| Package | Version | Purpose |
|---------|---------|---------|
| `husky` | ^9.0.0 | Git hooks |
| `lint-staged` | ^15.2.0 | Staged file linting |
| `commitlint` | ^18.4.0 | Commit linting |
| `@commitlint/config-conventional` | ^18.4.0 | Conventional commits |

### Types

| Package | Version | Purpose |
|---------|---------|---------|
| `@types/node` | ^20.11.0 | Node.js types |
| `@types/react` | ^18.2.0 | React types |
| `@types/react-dom` | ^18.2.0 | React DOM types |

---

## 🧪 Testing Stack

### Unit & Integration Testing

| Package | Purpose | Type |
|---------|---------|------|
| `vitest` | Fast unit test runner (Vite-based) | Dev |
| `@testing-library/react` | React component testing | Dev |
| `@testing-library/jest-dom` | DOM matchers | Dev |
| `@testing-library/user-event` | User interaction simulation | Dev |
| `msw` | API mocking (Mock Service Worker) | Dev |

### End-to-End Testing

| Package | Purpose | Type |
|---------|---------|------|
| `playwright` | E2E testing, cross-browser | Dev |
| `@playwright/test` | Playwright test runner | Dev |

### Code Coverage

| Package | Purpose | Type |
|---------|---------|------|
| `@vitest/coverage-v8` | Coverage reporting | Dev |

---

## 🔧 Development Tools

### Linting & Formatting

| Package | Purpose | Type |
|---------|---------|------|
| `eslint` | JavaScript/TypeScript linter | Dev |
| `eslint-config-next` | Next.js ESLint config | Dev |
| `@typescript-eslint/parser` | TypeScript parser for ESLint | Dev |
| `@typescript-eslint/eslint-plugin` | TypeScript rules | Dev |
| `prettier` | Code formatter | Dev |
| `prettier-plugin-tailwindcss` | Tailwind class sorting | Dev |
| `eslint-config-prettier` | Disable conflicting rules | Dev |

### Git Hooks (Pre-commit)

| Package | Purpose | Type |
|---------|---------|------|
| `husky` | Git hooks manager | Dev |
| `lint-staged` | Run linters on staged files | Dev |
| `commitlint` | Commit message linting | Dev |
| `@commitlint/config-conventional` | Conventional commit rules | Dev |

### Type Checking

| Package | Purpose | Type |
|---------|---------|------|
| `typescript` | Static type checking | Dev |
| `@types/node` | Node.js types | Dev |
| `@types/react` | React types | Dev |
| `@types/react-dom` | React DOM types | Dev |

---

## 🚀 CI/CD Pipeline

### GitHub Actions Workflows

| Workflow | Trigger | Steps |
|----------|---------|-------|
| `ci.yml` | Push/PR to main | Lint → Type Check → Unit Tests → Build |
| `e2e.yml` | Push to main | E2E Tests with Playwright |
| `deploy.yml` | Push to main | Auto-deploy to Vercel |

### CI Pipeline Stages

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│   Install   │ → │    Lint     │ → │    Test     │ → │    Build    │
│Dependencies │   │ ESLint +    │   │ Vitest +    │   │  Next.js    │
│             │   │ Prettier    │   │ Playwright  │   │  Build      │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
                                           │
                                           ▼
                                    ┌─────────────┐
                                    │   Deploy    │
                                    │   Vercel    │
                                    └─────────────┘
```

### Vercel Integration

| Feature | Description |
|---------|-------------|
| Preview Deployments | Auto-deploy PR branches |
| Production Deploy | Auto-deploy main branch |
| Environment Variables | Managed via Vercel dashboard |
| Edge Functions | Serverless at edge locations |

---

## 📊 Monitoring & Analytics

### Application Monitoring (Free)

| Tool | Purpose | Free Tier |
|------|---------|-----------|
| Vercel Analytics | Web vitals, performance | 2.5K events/mo |
| Supabase Dashboard | DB metrics, API usage | Built-in |
| Sentry (optional) | Error tracking | 5K events/mo |

### Logging

| Tool | Purpose |
|------|---------|
| Vercel Logs | Serverless function logs |
| Supabase Logs | Database query logs |
| Console (Browser) | Client-side debugging |

---

## 📋 Complete Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "prepare": "husky install"
  }
}
```

---

## 🗂️ Project Structure

```
im-tech-company-profile/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── e2e.yml
│       └── deploy.yml
├── .husky/
│   ├── pre-commit
│   └── commit-msg
├── src/
│   ├── app/
│   │   ├── (landing)/          # Public landing pages
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── portfolio/
│   │   │   ├── blog/
│   │   │   └── contact/
│   │   ├── (admin)/            # Admin dashboard
│   │   │   ├── dashboard/
│   │   │   ├── portfolio/
│   │   │   ├── blog/
│   │   │   ├── team/
│   │   │   ├── services/
│   │   │   ├── contacts/
│   │   │   └── settings/
│   │   ├── api/                # API routes
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                 # Shadcn components
│   │   ├── landing/            # Landing page components
│   │   └── admin/              # Admin components
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── middleware.ts
│   │   ├── utils.ts
│   │   └── validations/
│   ├── hooks/
│   ├── types/
│   └── styles/
│       └── globals.css
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── public/
├── supabase/
│   └── migrations/
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── commitlint.config.js
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
├── playwright.config.ts
└── package.json
```

---

## ✅ Testing Strategy

### Test Pyramid

```
        ┌─────────┐
        │   E2E   │  ← 10% (Critical user flows)
        │Playwright│
       ─┴─────────┴─
      ┌─────────────┐
      │ Integration │  ← 30% (API, DB, Auth)
      │   Vitest    │
     ─┴─────────────┴─
    ┌─────────────────┐
    │      Unit       │  ← 60% (Components, Utils)
    │ Vitest + RTL    │
   ─┴─────────────────┴─
```

### Coverage Targets

| Type | Target | Tools |
|------|--------|-------|
| Unit Tests | 80% | Vitest, Testing Library |
| Integration | Key APIs | Vitest, MSW |
| E2E | Critical paths | Playwright |

### Critical E2E Flows

1. ✅ Homepage loads correctly
2. ✅ Contact form submission
3. ✅ Admin login flow
4. ✅ Portfolio CRUD operations
5. ✅ Blog post creation

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js)                      │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │  Landing Page   │  │  Admin Dashboard │                   │
│  │  (SSG/ISR)      │  │  (SSR + Client)  │                   │
│  └────────┬────────┘  └────────┬────────┘                   │
│           │                    │                             │
│           └────────┬───────────┘                             │
│                    │                                         │
│  ┌─────────────────▼─────────────────┐                      │
│  │         Next.js API Routes         │                      │
│  │     (Server Actions / Route API)   │                      │
│  └─────────────────┬─────────────────┘                      │
└────────────────────┼────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                      SUPABASE                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │PostgreSQL│  │   Auth   │  │ Storage  │  │Real-time │    │
│  │ Database │  │  (RBAC)  │  │ (Files)  │  │   Subs   │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                      VERCEL                                  │
│              (Deployment & Edge Network)                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 💰 Cost Analysis (Free Tier)

| Service | Free Tier Limits | Sufficient? |
|---------|------------------|-------------|
| **Supabase** | 500MB DB, 1GB Storage, 2GB Bandwidth, 50K MAU | ✅ Yes untuk MVP |
| **Vercel** | 100GB Bandwidth, Serverless Functions | ✅ Yes untuk MVP |
| **Domain** | Already owned | ✅ N/A |

**Total Monthly Cost: Rp 0** (Free tier sufficient untuk MVP)

---

## ⚠️ Considerations

| Risk | Mitigation |
|------|------------|
| Supabase rate limits | Implement caching, use React Query |
| Vercel cold starts | Use edge functions where possible |
| No Prisma initially | Use Supabase client, add Prisma later if needed |

---

## 🔄 Alternative Stacks (If Needed)

### Option B: Full Control Stack
- Next.js + Custom Express/Fastify + PostgreSQL (self-hosted)
- More control, but more setup time

### Option C: Monolith Stack
- Laravel (Inertia.js + React) + PostgreSQL
- Good if team familiar with PHP

**Recommendation:** Stick with **Next.js + Supabase** untuk MVP (fastest time-to-market)

---

## ✅ Decision Checklist

- [x] Application type identified (CMS + Landing)
- [x] Tier determined (Tier 2 Business)
- [x] Research conducted (3 web searches)
- [x] Options compared with scoring
- [x] Winners selected per layer
- [x] Dependencies listed
- [x] Architecture documented
- [x] Cost analyzed (free tier OK)

---

## 🔄 Next Steps

1. ✅ **Tech Stack Decision Complete**
2. 🔜 Proceed to `/raci-matrix` for team assignments
3. 🔜 Proceed to `/risk-register` for risk identification
4. 🔜 Proceed to `/create-charter` for formal project charter

---

*Generated: 2026-01-13*
*Workflow: /tech-stack-eval | ID: WF-P07*
