# ADR-002: Database Design with Supabase PostgreSQL

**ID:** ADR-002  
**Status:** ✅ Accepted  
**Date:** 2026-01-15  
**Decision Makers:** Mifdal (BE/DevOps), Tataq (PM)

---

## Context

IM Tech Company Profile requires a database to store:
- User profiles and authentication
- Portfolio projects
- Blog posts with categories and tags
- Team member information
- Company services
- Contact form submissions

### Requirements

1. Relational data with foreign key relationships
2. Row Level Security (RLS) for multi-user access
3. Free tier sufficient for MVP
4. Easy integration with Next.js
5. Built-in auth support

---

## Decision

We will use **Supabase PostgreSQL** with the following design:

### Database: Supabase (PostgreSQL)

| Aspect | Decision |
|--------|----------|
| **Database** | Supabase PostgreSQL |
| **ORM** | Supabase Client (no Prisma for MVP) |
| **Auth** | Supabase Auth |
| **Storage** | Supabase Storage |
| **RLS** | Enabled for all tables |

### Schema Design

| Table | Purpose |
|-------|---------|
| `profiles` | Extends auth.users with role |
| `portfolios` | Project showcase |
| `portfolio_categories` | Portfolio categorization |
| `blogs` | Blog posts |
| `blog_categories` | Blog categorization |
| `tags` | Blog tags |
| `blog_tags` | Many-to-many junction |
| `team_members` | Team profiles |
| `services` | Company services |
| `contacts` | Contact submissions |

### Key Patterns

1. **Soft Delete** — `deleted_at` column for recoverable deletes
2. **Slug-based URLs** — SEO-friendly URLs for portfolio/blog
3. **JSONB for arrays** — Images and tech stack stored as JSONB
4. **UUID Primary Keys** — Secure, non-sequential IDs
5. **RLS Policies** — Role-based access control

---

## Alternatives Considered

### Alternative 1: Prisma + PostgreSQL

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Type-safe queries, migrations, schema.prisma |
| **Cons** | Extra dependency, Supabase client already sufficient |
| **Verdict** | ❌ Overkill for MVP, add later if needed |

### Alternative 2: Firebase Firestore

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Real-time, flexible schema |
| **Cons** | NoSQL, harder for relational data, vendor lock-in |
| **Verdict** | ❌ Not suitable for relational content |

### Alternative 3: MongoDB

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Flexible schema, scalable |
| **Cons** | Additional service, no built-in auth |
| **Verdict** | ❌ Unnecessary complexity |

---

## Consequences

### ✅ Positive

| Benefit | Impact |
|---------|--------|
| **All-in-one** | DB + Auth + Storage in one service |
| **Free tier** | 500MB DB, 1GB storage sufficient |
| **RLS** | Security at database level |
| **Type generation** | Auto-generate TypeScript types |
| **Real-time** | Can add real-time features later |

### ⚠️ Negative

| Trade-off | Mitigation |
|-----------|------------|
| **Vendor coupling** | PostgreSQL is standard, can migrate |
| **No ORM** | Supabase client is type-safe enough |
| **Learning curve** | Team already familiar with SQL |

---

## Related Documents

| Document | Path |
|----------|------|
| ERD & Schema | `design_database_erd.md` |
| Migration | `supabase/migrations/20260115_initial_schema.sql` |

---

*Generated: 2026-01-15*  
*Workflow: /design-database | ID: WF-DB01*
