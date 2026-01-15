# ADR-003: REST API Design

**ID:** ADR-003  
**Status:** ✅ Accepted  
**Date:** 2026-01-15  
**Decision Makers:** Mifdal (BE/DevOps), Fachri (FE)

---

## Context

IM Tech Company Profile needs an API to:
- Serve public landing page data
- Enable admin dashboard CRUD operations
- Handle authentication and authorization

### Requirements

1. RESTful conventions
2. API versioning for backward compatibility
3. Proper authentication with role-based access
4. Standard error handling
5. Rate limiting for protection

---

## Decision

We will implement a **REST API** with the following design:

### API Design Choices

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| **Type** | REST API | Simple, widely understood, cacheable |
| **Version** | `/api/v1` in URL | Easy to evolve, backward compatible |
| **Auth** | Supabase JWT | Already integrated, stateless |
| **Format** | JSON with envelope | Consistent structure |

### Endpoint Structure

| Path Pattern | Purpose |
|--------------|---------|
| `/api/v1/{resource}` | Public read access |
| `/api/v1/admin/{resource}` | Protected CRUD |
| `/api/v1/auth/*` | Authentication |

### Response Envelope

```typescript
// Success
{ data: T, meta?: { ... } }

// Error
{ error: { code, message, details? } }
```

### Role-Based Access

| Role | Public | Admin Read | Admin Write | Delete |
|------|--------|------------|-------------|--------|
| Public | ✅ | ❌ | ❌ | ❌ |
| Viewer | ✅ | ✅ | ❌ | ❌ |
| Editor | ✅ | ✅ | ✅ | ❌ |
| Admin | ✅ | ✅ | ✅ | ✅ |

---

## Alternatives Considered

### Alternative 1: GraphQL

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Flexible queries, single endpoint |
| **Cons** | Learning curve, caching harder |
| **Verdict** | ❌ Overkill for simple CRUD |

### Alternative 2: tRPC

| Aspect | Evaluation |
|--------|------------|
| **Pros** | Type-safe, great DX |
| **Cons** | Tied to TypeScript, less standard |
| **Verdict** | ❌ Team prefers REST conventions |

---

## Consequences

### ✅ Positive

| Benefit | Impact |
|---------|--------|
| **Standard REST** | Easy for any developer |
| **Versioned** | Can evolve without breaking |
| **Cacheable** | CDN/browser caching works |
| **OpenAPI spec** | Auto-generate docs/clients |

### ⚠️ Negative

| Trade-off | Mitigation |
|-----------|------------|
| **Multiple requests** | Acceptable for this scale |
| **Over/under-fetching** | Design responses carefully |

---

## Metrics

| Metric | Value |
|--------|-------|
| **Total Endpoints** | 58 |
| **Public Endpoints** | 16 |
| **Admin Endpoints** | 42 |
| **Rate Limits** | 60/200/500 req/min |

---

## Related Documents

| Document | Path |
|----------|------|
| API Design | `design_api.md` |
| OpenAPI Spec | `openapi.yaml` |

---

*Generated: 2026-01-15*  
*Workflow: /design-api | ID: WF-API01*
