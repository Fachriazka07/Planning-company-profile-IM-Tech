# API Design - IM Tech Company Profile

**Project:** IM Tech Company Profile + Admin Dashboard  
**Date:** 2026-01-15  
**API Type:** REST API  
**Base URL:** `/api/v1`  
**Auth:** Supabase Auth (JWT)

---

## 1. API Configuration

### 1.1 Base Settings

| Setting | Value |
|---------|-------|
| **Version** | v1 (RULE-API02) |
| **Base Path** | `/api/v1` |
| **Content-Type** | `application/json` |
| **Auth Method** | Bearer Token (JWT) |
| **Rate Limiting** | Public: 60/min, Auth: 200/min |

### 1.2 Authentication

```typescript
// Header format
Authorization: Bearer <supabase_jwt_token>
```

| Endpoint Pattern | Auth Required | Notes |
|------------------|---------------|-------|
| `GET /api/v1/*` (public content) | ❌ No | Landing page data |
| `POST /api/v1/contacts` | ❌ No | Contact form submission |
| `GET /api/v1/admin/*` | ✅ Yes | Dashboard read |
| `POST/PATCH/DELETE /api/v1/admin/*` | ✅ Yes + Role | Dashboard write |

---

## 2. Response Envelope (RULE-API06)

### 2.1 Success Response

```typescript
// Single resource
{
  "data": T,
  "meta": {
    "timestamp": "2026-01-15T14:00:00Z"
  }
}

// List with pagination
{
  "data": T[],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  },
  "links": {
    "self": "/api/v1/portfolios?page=1",
    "next": "/api/v1/portfolios?page=2",
    "prev": null
  }
}
```

### 2.2 Error Response

```typescript
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
```

### 2.3 Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400/422 | Invalid input |
| `UNAUTHORIZED` | 401 | Not authenticated |
| `FORBIDDEN` | 403 | No permission |
| `NOT_FOUND` | 404 | Resource not found |
| `CONFLICT` | 409 | Duplicate resource |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

---

## 3. HTTP Status Codes (RULE-API03)

| Status | When Used | Example |
|--------|-----------|---------|
| **200** | GET success, PATCH success | Get portfolio list |
| **201** | POST success (created) | Create new portfolio |
| **204** | DELETE success | Delete portfolio |
| **400** | Bad request format | Invalid JSON |
| **401** | Not authenticated | Missing/expired token |
| **403** | Forbidden (no permission) | Editor accessing admin route |
| **404** | Resource not found | Portfolio doesn't exist |
| **409** | Conflict | Duplicate slug |
| **422** | Validation failed | Required field missing |
| **429** | Rate limit exceeded | Too many requests |
| **500** | Server error | Unhandled exception |

---

## 4. API Endpoints

### 4.1 Public Endpoints (Landing Page)

#### Portfolios (Public)

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/v1/portfolios` | List published portfolios | Paginated list |
| GET | `/api/v1/portfolios/:slug` | Get portfolio by slug | Single portfolio |
| GET | `/api/v1/portfolio-categories` | List portfolio categories | Array |

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 10, max: 50)
- `category` (filter by category slug)
- `featured` (boolean, filter featured)

---

#### Blogs (Public)

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/v1/blogs` | List published blogs | Paginated list |
| GET | `/api/v1/blogs/:slug` | Get blog by slug | Single blog with tags |
| GET | `/api/v1/blog-categories` | List blog categories | Array |
| GET | `/api/v1/tags` | List all tags | Array |

**Query Parameters:**
- `page`, `limit`
- `category` (filter by category slug)
- `tag` (filter by tag slug)
- `author` (filter by author ID)

---

#### Team (Public)

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/v1/team` | List active team members | Array (ordered) |

---

#### Services (Public)

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/v1/services` | List active services | Array (ordered) |

---

#### Contact (Public)

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| POST | `/api/v1/contacts` | Submit contact form | 201 Created |

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (optional)",
  "message": "string (required)",
  "service_interest": "string (optional)"
}
```

---

### 4.2 Auth Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/v1/auth/login` | Login with email/password | ❌ |
| POST | `/api/v1/auth/logout` | Logout (invalidate session) | ✅ |
| GET | `/api/v1/auth/me` | Get current user | ✅ |
| POST | `/api/v1/auth/refresh` | Refresh token | ✅ |

**Login Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "data": {
    "user": { "id": "uuid", "email": "...", "name": "..." },
    "session": { "access_token": "...", "expires_at": "..." }
  }
}
```

---

### 4.3 Admin Endpoints (Protected)

> All admin endpoints require: `Authorization: Bearer <token>`

#### Admin: Portfolios

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/portfolios` | List all (inc. drafts) | Editor+ |
| GET | `/api/v1/admin/portfolios/:id` | Get by ID | Editor+ |
| POST | `/api/v1/admin/portfolios` | Create portfolio | Editor+ |
| PATCH | `/api/v1/admin/portfolios/:id` | Update portfolio | Editor+ |
| DELETE | `/api/v1/admin/portfolios/:id` | Soft delete | Admin |

**Create/Update Request:**
```json
{
  "title": "string (required)",
  "slug": "string (auto-generated if empty)",
  "category_id": "uuid (required)",
  "description": "string",
  "images": ["url1", "url2"],
  "tech_stack": ["Next.js", "Supabase"],
  "client_name": "string",
  "project_url": "string",
  "status": "draft | published"
}
```

---

#### Admin: Portfolio Categories

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/portfolio-categories` | List all | Editor+ |
| POST | `/api/v1/admin/portfolio-categories` | Create category | Admin |
| PATCH | `/api/v1/admin/portfolio-categories/:id` | Update category | Admin |
| DELETE | `/api/v1/admin/portfolio-categories/:id` | Delete category | Admin |

---

#### Admin: Blogs

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/blogs` | List all (inc. drafts) | Editor+ |
| GET | `/api/v1/admin/blogs/:id` | Get by ID | Editor+ |
| POST | `/api/v1/admin/blogs` | Create blog | Editor+ |
| PATCH | `/api/v1/admin/blogs/:id` | Update blog | Editor+ |
| DELETE | `/api/v1/admin/blogs/:id` | Soft delete | Admin |

**Create/Update Request:**
```json
{
  "title": "string (required)",
  "slug": "string (auto-generated)",
  "category_id": "uuid (required)",
  "content": "string (HTML/Markdown)",
  "featured_image": "string (URL)",
  "excerpt": "string",
  "seo_title": "string (max 60)",
  "seo_description": "string (max 160)",
  "tags": ["uuid1", "uuid2"],
  "status": "draft | published",
  "published_at": "datetime (optional)"
}
```

---

#### Admin: Blog Categories

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/blog-categories` | List all | Editor+ |
| POST | `/api/v1/admin/blog-categories` | Create category | Admin |
| PATCH | `/api/v1/admin/blog-categories/:id` | Update | Admin |
| DELETE | `/api/v1/admin/blog-categories/:id` | Delete | Admin |

---

#### Admin: Tags

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/tags` | List all | Editor+ |
| POST | `/api/v1/admin/tags` | Create tag | Editor+ |
| PATCH | `/api/v1/admin/tags/:id` | Update tag | Editor+ |
| DELETE | `/api/v1/admin/tags/:id` | Delete tag | Admin |

---

#### Admin: Team Members

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/team` | List all | Editor+ |
| GET | `/api/v1/admin/team/:id` | Get by ID | Editor+ |
| POST | `/api/v1/admin/team` | Create member | Editor+ |
| PATCH | `/api/v1/admin/team/:id` | Update member | Editor+ |
| PATCH | `/api/v1/admin/team/reorder` | Reorder members | Editor+ |
| DELETE | `/api/v1/admin/team/:id` | Soft delete | Admin |

**Create/Update Request:**
```json
{
  "name": "string (required)",
  "role": "string (required)",
  "photo_url": "string",
  "bio": "string",
  "linkedin_url": "string",
  "github_url": "string",
  "twitter_url": "string",
  "display_order": "number",
  "is_active": "boolean"
}
```

---

#### Admin: Services

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/services` | List all | Editor+ |
| POST | `/api/v1/admin/services` | Create service | Editor+ |
| PATCH | `/api/v1/admin/services/:id` | Update service | Editor+ |
| PATCH | `/api/v1/admin/services/reorder` | Reorder services | Editor+ |
| DELETE | `/api/v1/admin/services/:id` | Delete | Admin |

---

#### Admin: Contacts

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/contacts` | List all submissions | Editor+ |
| GET | `/api/v1/admin/contacts/:id` | Get detail | Editor+ |
| PATCH | `/api/v1/admin/contacts/:id` | Mark read/replied | Editor+ |
| GET | `/api/v1/admin/contacts/unread-count` | Get unread count | Editor+ |

**Query Parameters:**
- `status`: `unread | read | replied`
- `page`, `limit`

---

#### Admin: Users

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/v1/admin/users` | List all users | Admin |
| GET | `/api/v1/admin/users/:id` | Get user detail | Admin |
| POST | `/api/v1/admin/users` | Create user | Admin |
| PATCH | `/api/v1/admin/users/:id` | Update user/role | Admin |
| DELETE | `/api/v1/admin/users/:id` | Deactivate user | Admin |

**Create User Request:**
```json
{
  "name": "string (required)",
  "email": "string (required, unique)",
  "password": "string (required, min 8)",
  "role": "admin | editor | viewer"
}
```

---

### 4.4 File Upload Endpoints

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| POST | `/api/v1/admin/upload/image` | Upload image | Editor+ |
| DELETE | `/api/v1/admin/upload/:filename` | Delete file | Editor+ |

**Upload Request:**
- Content-Type: `multipart/form-data`
- Field: `file` (image/jpeg, image/png, image/webp)
- Max size: 5MB

**Upload Response:**
```json
{
  "data": {
    "url": "https://xxx.supabase.co/storage/v1/object/public/images/abc123.webp",
    "filename": "abc123.webp",
    "size": 123456
  }
}
```

---

## 5. Endpoint Summary

### 5.1 By Resource

| Resource | Public | Admin | Total |
|----------|--------|-------|-------|
| Portfolios | 3 | 5 | 8 |
| Portfolio Categories | 1 | 4 | 5 |
| Blogs | 3 | 5 | 8 |
| Blog Categories | 1 | 4 | 5 |
| Tags | 1 | 4 | 5 |
| Team | 1 | 5 | 6 |
| Services | 1 | 4 | 5 |
| Contacts | 1 | 4 | 5 |
| Users | 0 | 5 | 5 |
| Auth | 4 | 0 | 4 |
| Upload | 0 | 2 | 2 |
| **TOTAL** | **16** | **42** | **58** |

### 5.2 By Role

| Role | Can Access |
|------|------------|
| **Public** | 16 endpoints (GET public data, POST contact) |
| **Viewer** | + 0 (read only, no additional API access) |
| **Editor** | + 38 endpoints (CRUD except delete) |
| **Admin** | + 4 endpoints (delete, user management) |

---

## 6. Rate Limiting (RULE-API05)

| Type | Rate | Window |
|------|------|--------|
| **Public (unauthenticated)** | 60 requests | per minute |
| **Authenticated (Editor+)** | 200 requests | per minute |
| **Admin** | 500 requests | per minute |
| **Contact Form** | 5 submissions | per hour per IP |

**Rate Limit Headers:**
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 55
X-RateLimit-Reset: 1705312800
```

---

## 7. Security Headers

```http
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

---

## 8. CORS Configuration

```typescript
// Development
origin: ["http://localhost:3000"]

// Production
origin: ["https://imtech.co.id", "https://www.imtech.co.id"]

// Methods
methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]

// Headers
allowedHeaders: ["Content-Type", "Authorization"]
```

---

## 9. Caching Strategy

| Endpoint Pattern | Cache Duration | Strategy |
|------------------|----------------|----------|
| `GET /api/v1/portfolios` | 5 min | stale-while-revalidate |
| `GET /api/v1/blogs` | 5 min | stale-while-revalidate |
| `GET /api/v1/team` | 15 min | stale-while-revalidate |
| `GET /api/v1/services` | 15 min | stale-while-revalidate |
| `GET /api/v1/admin/*` | No cache | private, no-store |

**Cache Headers:**
```http
Cache-Control: public, max-age=300, stale-while-revalidate=60
```

---

## ✅ Design Checklist

- [x] API type: REST
- [x] Versioning: `/api/v1` (RULE-API02)
- [x] Response envelope defined (RULE-API06)
- [x] Status codes documented (RULE-API03)
- [x] Auth configured (RULE-API04)
- [x] Rate limiting configured (RULE-API05)
- [x] 58 endpoints mapped
- [x] Role-based access defined
- [x] File upload endpoint
- [x] Caching strategy
- [x] CORS configured
- [x] Security headers

---

*Generated: 2026-01-15*  
*Workflow: /design-api | ID: WF-API01*  
*Rules Applied: RULE-API01-06*
