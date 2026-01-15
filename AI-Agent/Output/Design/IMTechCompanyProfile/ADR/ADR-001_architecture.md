# ADR-001: Layered Architecture for IM Tech Company Profile

**ID:** ADR-001  
**Status:** ✅ Accepted  
**Date:** 2026-01-15  
**Decision Makers:** Tataq (PM), Mifdal (BE/DevOps), Fachri (FE)

---

## Context

### Project Characteristics

| Aspect | Value |
|--------|-------|
| **Project Type** | Web App (CMS + Landing Page) |
| **Team Size** | 7 members (small team, part-time) |
| **Scale Expectation** | < 1,000 users initially |
| **Timeline** | MVP in 1 month (aggressive) |
| **Tech Stack** | Next.js 16 + Tailwind v4 + Supabase |
| **Complexity** | Medium (CRUD operations) |

### Requirements

1. Fast development (MVP timeline)
2. Easy to understand by all team members
3. Maintainable for future enhancements
4. Clear separation of concerns
5. Support for SSG (landing) and SSR (admin)

---

## Decision

We will use **Layered Architecture** (aka N-Tier Architecture) for the IM Tech Company Profile project.

```
┌──────────────────────────────────────┐
│         PRESENTATION LAYER           │
│   (React Components, Pages, UI)      │
├──────────────────────────────────────┤
│          APPLICATION LAYER           │
│   (API Routes, Server Actions)       │
├──────────────────────────────────────┤
│           SERVICE LAYER              │
│   (Business Logic, Use Cases)        │
├──────────────────────────────────────┤
│         DATA ACCESS LAYER            │
│   (Supabase Client, Repositories)    │
├──────────────────────────────────────┤
│          DATABASE LAYER              │
│   (Supabase PostgreSQL + Storage)    │
└──────────────────────────────────────┘
```

### Why Layered Architecture?

| Reason | Explanation |
|--------|-------------|
| **1. Simplicity** | Easy to understand, team already familiar with the pattern |
| **2. Fast Development** | Less boilerplate than Clean/Hexagonal for MVP |
| **3. Clear Responsibilities** | Each layer has specific job |
| **4. Next.js Alignment** | Works naturally with App Router structure |
| **5. Pragmatic for Scale** | < 1K users doesn't need microservices |

---

## Alternatives Considered

### Alternative 1: Clean Architecture

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Better testability, framework-independent core |
| **Cons** | More boilerplate, slower initial development |
| **Verdict** | ❌ Overkill for MVP timeline |

### Alternative 2: Hexagonal Architecture

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Clear ports/adapters, easy to swap implementations |
| **Cons** | Complex for small team, learning curve |
| **Verdict** | ❌ Too complex for 1-month MVP |

### Alternative 3: Microservices

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Scalable, independent deployments |
| **Cons** | Massive overhead for simple CMS |
| **Verdict** | ❌ Way overkill for this project |

---

## Folder Structure

Based on Next.js 16 + Layered Architecture best practices:

```
im-tech-company-profile/
├── src/
│   ├── app/                          # Next.js App Router (Presentation)
│   │   ├── (landing)/                # Public landing pages
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── portfolio/
│   │   │   │   └── [slug]/
│   │   │   ├── blog/
│   │   │   │   └── [slug]/
│   │   │   ├── team/
│   │   │   └── contact/
│   │   │
│   │   ├── (admin)/                  # Admin dashboard (protected)
│   │   │   ├── layout.tsx            # Admin layout with sidebar
│   │   │   ├── dashboard/
│   │   │   ├── portfolio/
│   │   │   │   ├── page.tsx          # List
│   │   │   │   ├── new/
│   │   │   │   └── [id]/edit/
│   │   │   ├── blog/
│   │   │   ├── team/
│   │   │   ├── services/
│   │   │   ├── contacts/
│   │   │   ├── users/
│   │   │   └── settings/
│   │   │
│   │   ├── (auth)/                   # Auth pages
│   │   │   ├── login/
│   │   │   └── logout/
│   │   │
│   │   ├── api/                      # API Routes (Application Layer)
│   │   │   └── v1/
│   │   │       ├── auth/
│   │   │       ├── portfolio/
│   │   │       ├── blog/
│   │   │       ├── team/
│   │   │       ├── services/
│   │   │       ├── contacts/
│   │   │       └── users/
│   │   │
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   │
│   ├── components/                   # React Components (Presentation)
│   │   ├── ui/                       # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── table.tsx
│   │   │   └── ...
│   │   │
│   │   ├── landing/                  # Landing page components
│   │   │   ├── hero.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── services-preview.tsx
│   │   │   ├── portfolio-grid.tsx
│   │   │   ├── blog-list.tsx
│   │   │   ├── team-grid.tsx
│   │   │   ├── contact-form.tsx
│   │   │   └── whatsapp-button.tsx
│   │   │
│   │   ├── admin/                    # Admin dashboard components
│   │   │   ├── sidebar.tsx
│   │   │   ├── header.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── portfolio-form.tsx
│   │   │   ├── blog-editor.tsx
│   │   │   └── ...
│   │   │
│   │   └── shared/                   # Shared components
│   │       ├── footer.tsx
│   │       ├── navigation.tsx
│   │       └── logo.tsx
│   │
│   ├── services/                     # Service Layer (Business Logic)
│   │   ├── portfolio.service.ts
│   │   ├── blog.service.ts
│   │   ├── team.service.ts
│   │   ├── service.service.ts
│   │   ├── contact.service.ts
│   │   └── user.service.ts
│   │
│   ├── repositories/                 # Data Access Layer
│   │   ├── portfolio.repository.ts
│   │   ├── blog.repository.ts
│   │   ├── team.repository.ts
│   │   ├── service.repository.ts
│   │   ├── contact.repository.ts
│   │   └── user.repository.ts
│   │
│   ├── lib/                          # Utilities & Configurations
│   │   ├── supabase/
│   │   │   ├── client.ts             # Browser client
│   │   │   ├── server.ts             # Server client
│   │   │   └── middleware.ts         # Auth middleware
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts                 # Class name utility
│   │   │   ├── format.ts             # Formatters
│   │   │   └── validation.ts         # Common validations
│   │   │
│   │   └── constants.ts              # App constants
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   ├── use-auth.ts
│   │   ├── use-portfolio.ts
│   │   └── use-toast.ts
│   │
│   ├── types/                        # TypeScript Types
│   │   ├── database.types.ts         # Supabase generated types
│   │   ├── portfolio.types.ts
│   │   ├── blog.types.ts
│   │   ├── user.types.ts
│   │   └── api.types.ts
│   │
│   ├── validations/                  # Zod Schemas
│   │   ├── portfolio.schema.ts
│   │   ├── blog.schema.ts
│   │   ├── contact.schema.ts
│   │   └── auth.schema.ts
│   │
│   └── styles/
│       └── globals.css               # Tailwind CSS v4 config
│
├── public/                           # Static Assets
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
│
├── supabase/                         # Database (Supabase)
│   ├── migrations/                   # SQL migrations
│   │   └── 001_initial_schema.sql
│   ├── seed/                         # Seed data
│   │   └── seed.sql
│   └── config.toml
│
├── tests/                            # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── .husky/                           # Git hooks
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts                # Tailwind v4 config (if needed)
├── tsconfig.json
├── vitest.config.ts
├── playwright.config.ts
└── package.json
```

---

## Layer Responsibilities

### 1. Presentation Layer (`app/`, `components/`)

| Responsibility | Examples |
|----------------|----------|
| Render UI | React components, pages |
| Handle user input | Forms, buttons, navigation |
| State management | React hooks, URL state |
| Styling | Tailwind CSS, Shadcn UI |

**Rules:**
- ✅ Can call Service Layer
- ❌ Cannot access Repository directly
- ❌ Cannot have business logic

---

### 2. Application Layer (`app/api/`)

| Responsibility | Examples |
|----------------|----------|
| Handle HTTP requests | API Routes |
| Input validation | Zod schemas |
| Authentication check | Middleware |
| Call Service Layer | Delegate to services |

**Rules:**
- ✅ Can call Service Layer
- ✅ Handles request/response formatting
- ❌ Cannot have complex business logic

---

### 3. Service Layer (`services/`)

| Responsibility | Examples |
|----------------|----------|
| Business logic | Validation rules, calculations |
| Orchestration | Coordinate multiple repositories |
| Transaction handling | Multi-step operations |

**Rules:**
- ✅ Can call Repository Layer
- ✅ Contains business rules
- ❌ Cannot access database directly

---

### 4. Data Access Layer (`repositories/`)

| Responsibility | Examples |
|----------------|----------|
| Database operations | CRUD operations |
| Query building | Supabase queries |
| Data mapping | DB → Domain models |

**Rules:**
- ✅ Interacts with Supabase client
- ❌ Cannot have business logic
- ✅ Handles data transformation

---

## Data Flow Example

### Example: Create Portfolio

```
1. User submits form (Presentation)
        ↓
2. Form calls Server Action or API Route (Application)
        ↓
3. Validate input with Zod schema
        ↓
4. Call portfolioService.create() (Service)
        ↓
5. Apply business rules (e.g., slug generation)
        ↓
6. Call portfolioRepository.create() (Data Access)
        ↓
7. Supabase insert to PostgreSQL (Database)
        ↓
8. Return result back up the chain
        ↓
9. Show success toast (Presentation)
```

---

## Consequences

### ✅ Positive

| Benefit | Impact |
|---------|--------|
| **Easy to understand** | Team can onboard quickly |
| **Clear structure** | Each file has clear purpose |
| **Fast development** | Less boilerplate than Clean Architecture |
| **Next.js native** | Works with App Router naturally |
| **Scalable enough** | Can evolve to Clean if needed |

### ⚠️ Negative (Trade-offs)

| Trade-off | Mitigation |
|-----------|------------|
| **Less testable than Clean** | Maintain service layer discipline |
| **Framework coupling** | Acceptable for this project |
| **May need refactoring at scale** | Phase 2+ can migrate to Clean |

---

## Related Decisions

| ADR | Topic | Status |
|-----|-------|--------|
| ADR-001 | Architecture Pattern | ✅ This document |
| ADR-002 | Database Design | Pending |
| ADR-003 | API Design | Pending |
| ADR-004 | Authentication | Pending |

---

## References

- Next.js App Router Documentation
- Planning Tech Decision (`planning_tech_decision.md`)
- Project Charter

---

*Generated: 2026-01-15*  
*Workflow: /choose-architecture | ID: WF-D01*
