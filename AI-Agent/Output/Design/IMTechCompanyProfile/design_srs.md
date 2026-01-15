# Software Requirements Specification (SRS)

**Project:** IM Tech Company Profile + Admin Dashboard  
**Version:** 1.0  
**Date:** 2026-01-14  
**Author:** AI-Agent (with Team input)  
**Status:** Draft — Pending Review  

---

## 1. Introduction

### 1.1 Purpose

Dokumen ini mendefinisikan Software Requirements Specification (SRS) untuk **IM Tech Company Profile + Admin Dashboard**. SRS ini digunakan sebagai:
- Kontrak antara stakeholders dan development team
- Basis untuk estimation dan planning
- Reference untuk QA testing dan acceptance criteria

### 1.2 Scope

**IM Tech Company Profile** adalah web application yang terdiri dari:
1. **Landing Page (Public)** — Website company profile untuk showcase services, portfolio, dan credibility
2. **Admin Dashboard (CMS)** — Content management system untuk mengelola konten website

**Boundaries:**
- Platform: Web only (responsive untuk mobile)
- Phase: MVP (Phase 1)
- Timeline: 13 Jan - 12 Feb 2026

### 1.3 Definitions & Acronyms

| Term | Definition |
|------|------------|
| SRS | Software Requirements Specification |
| MVP | Minimum Viable Product |
| CMS | Content Management System |
| CRUD | Create, Read, Update, Delete |
| SSG | Static Site Generation |
| SSR | Server-Side Rendering |
| RLS | Row Level Security |
| RBAC | Role-Based Access Control |
| UAT | User Acceptance Testing |
| B2G | Business to Government |
| B2B | Business to Business |
| B2C | Business to Consumer |

### 1.4 References

| Document | Path |
|----------|------|
| Planning Blueprint | `planning_blueprint.md` |
| Project Charter | `planning_project_charter.md` |
| Tech Decision | `planning_tech_decision.md` |
| RACI Matrix | `planning_raci_matrix.md` |
| Risk Register | `planning_risk_register.md` |
| Ideation Report v2 | `planning_ideation_report_v2.md` |

### 1.5 Overview

Dokumen ini terdiri dari:
- **Section 2:** Overall Description — context dan constraints
- **Section 3:** Specific Requirements — functional dan non-functional
- **Section 4:** Appendices — supporting info

---

## 2. Overall Description

### 2.1 Product Perspective

```
┌─────────────────────────────────────────────────────────────┐
│                    IM Tech Digital Ecosystem                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────┐    ┌─────────────────┐               │
│   │  Landing Page   │    │ Admin Dashboard │               │
│   │   (Public)      │←───│   (Internal)    │               │
│   │                 │    │                 │               │
│   │• Homepage       │    │• Auth System    │               │
│   │• About          │    │• Portfolio CRUD │               │
│   │• Services       │    │• Blog CRUD      │               │
│   │• Portfolio      │    │• Team CRUD      │               │
│   │• Blog           │    │• Services CRUD  │               │
│   │• Team           │    │• Contact View   │               │
│   │• Contact        │    │• User Mgmt      │               │
│   └─────────────────┘    └─────────────────┘               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Product Features (High-Level)

| # | Feature | Category | Priority |
|---|---------|----------|----------|
| 1 | Homepage dengan Hero, About, Services preview | Landing | P0 |
| 2 | Company legality section | Landing | P0 |
| 3 | Services page | Landing | P1 |
| 4 | Portfolio showcase | Landing | P1 |
| 5 | Blog section | Landing | P2 |
| 6 | Team section | Landing | P1 |
| 7 | Contact form + WhatsApp | Landing | P0 |
| 8 | Responsive design | Landing | P0 |
| 9 | User Authentication | Admin | P0 |
| 10 | Portfolio CRUD | Admin | P0 |
| 11 | Blog CRUD | Admin | P1 |
| 12 | Team CRUD | Admin | P1 |
| 13 | Services CRUD | Admin | P1 |
| 14 | Contact submissions viewer | Admin | P0 |
| 15 | Multi-user with roles | Admin | P0 |

### 2.3 User Classes

| User Class | Description | Permissions | Priority |
|------------|-------------|-------------|----------|
| **Visitor** | Publik umum, potential client | Read landing page, submit contact form | High |
| **Admin** | System administrator (Pa Heri, Tataq) | Full access ke semua fitur | High |
| **Editor** | Content manager (Raffi) | CRUD content (portfolio, blog, team, services) | Medium |
| **Viewer** | Internal team member | Read-only access ke dashboard | Low |

### 2.4 Operating Environment

| Aspect | Specification |
|--------|---------------|
| **Browser Support** | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| **Mobile** | Responsive web (iOS Safari, Android Chrome) |
| **Server Runtime** | Node.js 20.9+ |
| **Database** | PostgreSQL (Supabase) |
| **Deployment** | Vercel (Edge Network) |

### 2.5 Constraints

#### Technical Constraints

| Constraint | Description | Rationale |
|------------|-------------|-----------|
| Next.js 16 LTS | Frontend framework | Team expertise, Turbopack performance |
| TypeScript 5.3+ | Language | Required by Next.js 16 |
| Tailwind CSS v4 | CSS framework | Oxide engine, CSS-first config |
| Supabase | BaaS | Free tier, PostgreSQL, Auth built-in |
| Vercel | Hosting | Optimized for Next.js |

#### Business Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| Budget | Rp 0 (Sweat equity) | Free tier services only |
| Timeline | 1 bulan (flexible) | MVP scope |
| Team | 7 members (part-time) | Limited velocity |

### 2.6 Assumptions & Dependencies

**Assumptions:**
1. Domain sudah dimiliki oleh IM Tech
2. Content (foto, logo) akan ready by 20 Jan 2026
3. Supabase free tier sufficient untuk MVP traffic
4. Team memiliki expertise di tech stack yang dipilih

**External Dependencies:**
- Supabase (Database, Auth, Storage)
- Vercel (Deployment)
- WhatsApp Business API (Contact form redirect)

---

## 3. Specific Requirements

### 3.1 Functional Requirements

---

#### 3.1.1 Landing Page — Homepage

##### FR-001: Homepage Hero Section

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Homepage menampilkan hero section dengan tagline IM Tech, call-to-action button, dan visual yang menarik.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses homepage
WHEN halaman selesai loading
THEN visitor melihat:
  - Hero image/video background
  - Company tagline
  - CTA button "Hubungi Kami"
  - Navigation menu
```

**Related:** FR-002, FR-007

---

##### FR-002: About Section Preview

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Homepage menampilkan preview tentang perusahaan dengan link ke halaman About lengkap.

**Acceptance Criteria:**
```gherkin
GIVEN visitor berada di homepage
WHEN scroll ke about section
THEN visitor melihat:
  - Brief company description
  - Key achievements/stats
  - "Learn More" link ke /about
```

---

##### FR-003: Services Preview

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Homepage menampilkan 3-4 layanan utama dengan link ke halaman Services lengkap.

**Acceptance Criteria:**
```gherkin
GIVEN visitor berada di homepage
WHEN scroll ke services section
THEN visitor melihat:
  - 3-4 featured services dengan icon
  - Short description per service
  - "View All Services" link
```

---

#### 3.1.2 Landing Page — Company Legality

##### FR-004: Legality Section

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Menampilkan dokumen legalitas perusahaan (SIUP, NPWP, NIB) untuk membangun kredibilitas, terutama untuk client B2G.

**Acceptance Criteria:**
```gherkin
GIVEN visitor berada di homepage atau about page
WHEN melihat legality section
THEN visitor melihat:
  - Badges/icons untuk SIUP, NPWP, NIB
  - Nomor dokumen (jika ada)
  - Tanggal berlaku (jika ada)
```

**Note:** Legalitas sedang dalam proses. Section ini akan di-populate setelah dokumen ready.

---

#### 3.1.3 Landing Page — Services

##### FR-005: Services Page

**Priority:** P1 — Should Have  
**User Class:** Visitor  

**Description:**  
Halaman dedicated untuk menampilkan semua layanan IM Tech secara detail.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses /services
WHEN halaman selesai loading
THEN visitor melihat:
  - List semua services dengan icon
  - Description untuk setiap service
  - CTA untuk inquiry per service
```

---

#### 3.1.4 Landing Page — Portfolio

##### FR-006: Portfolio Page

**Priority:** P1 — Should Have  
**User Class:** Visitor  

**Description:**  
Halaman untuk showcase portfolio/case studies IM Tech.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses /portfolio
WHEN halaman selesai loading
THEN visitor melihat:
  - Grid/list portfolio items
  - Thumbnail, title, category
  - Filter by category (optional)
  
WHEN visitor click portfolio item
THEN modal/page detail muncul dengan:
  - Full images
  - Project description
  - Tech stack used
  - Client name (jika diizinkan)
```

---

#### 3.1.5 Landing Page — Blog

##### FR-007: Blog Page

**Priority:** P2 — Nice to Have  
**User Class:** Visitor  

**Description:**  
Halaman blog untuk artikel, insights, dan update dari IM Tech.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses /blog
WHEN halaman selesai loading
THEN visitor melihat:
  - List blog posts (latest first)
  - Thumbnail, title, excerpt, date
  - Author name
  - Category/tags

WHEN visitor click blog post
THEN redirect ke /blog/[slug] dengan:
  - Full article content
  - Author info
  - Reading time
  - Related posts (optional)
```

---

#### 3.1.6 Landing Page — Team

##### FR-008: Team Page

**Priority:** P1 — Should Have  
**User Class:** Visitor  

**Description:**  
Halaman untuk menampilkan tim IM Tech.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses /team
WHEN halaman selesai loading
THEN visitor melihat:
  - Grid team members
  - Photo, name, role
  - Social links (LinkedIn, GitHub, etc.)
```

---

#### 3.1.7 Landing Page — Contact

##### FR-009: Contact Page

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Halaman contact dengan form dan WhatsApp button.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses /contact
WHEN halaman selesai loading
THEN visitor melihat:
  - Contact form (name, email, phone, message)
  - WhatsApp button (floating)
  - Company address
  - Google Maps embed (optional)

WHEN visitor submit contact form
THEN:
  - Form data disimpan ke database
  - Success message ditampilkan
  - (Optional) Email notification ke admin
```

---

##### FR-010: WhatsApp Integration

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Floating WhatsApp button untuk direct contact.

**Acceptance Criteria:**
```gherkin
GIVEN visitor berada di page manapun
WHEN melihat floating WhatsApp button
AND click button tersebut
THEN redirect ke WhatsApp dengan pre-filled message
```

---

#### 3.1.8 Landing Page — Responsive Design

##### FR-011: Mobile Responsive

**Priority:** P0 — Must Have  
**User Class:** Visitor  

**Description:**  
Semua halaman harus responsive dan optimal di mobile device.

**Acceptance Criteria:**
```gherkin
GIVEN visitor mengakses website dari mobile device
WHEN melihat halaman apapun
THEN:
  - Layout menyesuaikan viewport
  - Navigation menjadi hamburger menu
  - Images dan text readable
  - Touch targets minimal 44x44px
```

---

#### 3.1.9 Admin Dashboard — Authentication

##### FR-012: Admin Login

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Description:**  
Sistem login untuk akses ke admin dashboard.

**Acceptance Criteria:**
```gherkin
GIVEN user mengakses /admin/login
WHEN user input email dan password yang valid
AND click "Login"
THEN:
  - User authenticated
  - Redirect ke /admin/dashboard
  - Session created

WHEN user input credentials yang invalid
THEN:
  - Error message ditampilkan
  - Tidak ada redirect
```

---

##### FR-013: Session Management

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Description:**  
Manajemen session untuk keamanan.

**Acceptance Criteria:**
```gherkin
GIVEN user sudah login
WHEN session expired (24 jam)
THEN:
  - User otomatis logout
  - Redirect ke login page

GIVEN user berada di dashboard
WHEN click "Logout"
THEN:
  - Session destroyed
  - Redirect ke login page
```

---

#### 3.1.10 Admin Dashboard — Portfolio CRUD

##### FR-014: Portfolio List

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Description:**  
Melihat daftar semua portfolio items.

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/portfolio
WHEN halaman selesai loading
THEN melihat:
  - Table/grid portfolio items
  - Columns: thumbnail, title, category, status, date
  - Pagination (10 items per page)
  - Search dan filter options
```

---

##### FR-015: Portfolio Create

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Description:**  
Membuat portfolio item baru.

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/portfolio
WHEN click "Add Portfolio"
THEN form muncul dengan fields:
  - Title (required)
  - Category (required)
  - Description (rich text)
  - Images (multiple, drag & drop)
  - Tech stack (multi-select)
  - Client name
  - Project URL
  - Status (draft/published)

WHEN submit form dengan data valid
THEN:
  - Portfolio tersimpan
  - Success notification
  - Redirect ke list
```

---

##### FR-016: Portfolio Update

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Description:**  
Update portfolio item yang sudah ada.

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/portfolio
WHEN click "Edit" pada portfolio item
THEN form edit muncul dengan data existing

WHEN submit form dengan data valid
THEN:
  - Portfolio updated
  - Success notification
```

---

##### FR-017: Portfolio Delete

**Priority:** P0 — Must Have  
**User Class:** Admin  

**Description:**  
Hapus portfolio item (Admin only).

**Acceptance Criteria:**
```gherkin
GIVEN admin berada di /admin/portfolio
WHEN click "Delete" pada portfolio item
THEN confirmation dialog muncul

WHEN confirm delete
THEN:
  - Portfolio soft-deleted
  - Success notification
  - Item removed from list
```

---

#### 3.1.11 Admin Dashboard — Blog CRUD

##### FR-018: Blog List

**Priority:** P1 — Should Have  
**User Class:** Admin, Editor  

**Description:**  
Melihat daftar semua blog posts.

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/blog
WHEN halaman selesai loading
THEN melihat:
  - Table blog posts
  - Columns: title, author, category, status, date
  - Pagination
  - Search dan filter
```

---

##### FR-019: Blog Create

**Priority:** P1 — Should Have  
**User Class:** Admin, Editor  

**Description:**  
Membuat blog post baru.

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/blog
WHEN click "New Post"
THEN form muncul dengan:
  - Title (required)
  - Content (rich text editor)
  - Featured image
  - Category (required)
  - Tags (multi-select)
  - SEO meta (title, description)
  - Status (draft/published)
  - Published date

WHEN submit form dengan data valid
THEN:
  - Blog post tersimpan
  - Slug auto-generated dari title
  - Success notification
```

---

##### FR-020: Blog Update

**Priority:** P1 — Should Have  
**User Class:** Admin, Editor  

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/blog
WHEN click "Edit" pada blog post
THEN form edit muncul dengan data existing

WHEN submit form dengan data valid
THEN:
  - Blog post updated
  - Success notification
```

---

##### FR-021: Blog Delete

**Priority:** P1 — Should Have  
**User Class:** Admin  

**Acceptance Criteria:**
```gherkin
GIVEN admin berada di /admin/blog
WHEN click "Delete" pada blog post
AND confirm delete
THEN:
  - Blog post soft-deleted
  - Success notification
```

---

#### 3.1.12 Admin Dashboard — Team CRUD

##### FR-022: Team List

**Priority:** P1 — Should Have  
**User Class:** Admin, Editor  

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/team
WHEN halaman selesai loading
THEN melihat:
  - Grid/table team members
  - Photo, name, role, status
  - Reorder capability (drag & drop)
```

---

##### FR-023: Team Create/Update

**Priority:** P1 — Should Have  
**User Class:** Admin, Editor  

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor di team management
WHEN add/edit team member
THEN form dengan:
  - Name (required)
  - Role/Position (required)
  - Photo (upload)
  - Bio (optional)
  - Social links (LinkedIn, GitHub, Twitter)
  - Display order
  - Status (active/inactive)
```

---

##### FR-024: Team Delete

**Priority:** P1 — Should Have  
**User Class:** Admin  

**Acceptance Criteria:**
```gherkin
GIVEN admin berada di /admin/team
WHEN click "Delete" dan confirm
THEN team member soft-deleted
```

---

#### 3.1.13 Admin Dashboard — Services CRUD

##### FR-025: Services Management

**Priority:** P1 — Should Have  
**User Class:** Admin, Editor  

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor di /admin/services
THEN dapat:
  - List all services
  - Add new service (title, description, icon, order)
  - Edit existing service
  - Delete service (Admin only)
  - Reorder services
```

---

#### 3.1.14 Admin Dashboard — Contact Submissions

##### FR-026: Contact List

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor berada di /admin/contacts
WHEN halaman selesai loading
THEN melihat:
  - Table submissions
  - Columns: name, email, phone, date, status
  - Filter by status (unread/read)
  - Pagination
```

---

##### FR-027: Contact Detail

**Priority:** P0 — Must Have  
**User Class:** Admin, Editor  

**Acceptance Criteria:**
```gherkin
GIVEN admin/editor di contact list
WHEN click submission
THEN modal/page dengan:
  - Full contact details
  - Message content
  - Mark as read option
  - Reply via email/WhatsApp button
```

---

#### 3.1.15 Admin Dashboard — User Management

##### FR-028: User List

**Priority:** P0 — Must Have  
**User Class:** Admin  

**Acceptance Criteria:**
```gherkin
GIVEN admin berada di /admin/users
WHEN halaman selesai loading
THEN melihat:
  - Table users
  - Columns: name, email, role, status, last login
```

---

##### FR-029: User Create/Update

**Priority:** P0 — Must Have  
**User Class:** Admin  

**Acceptance Criteria:**
```gherkin
GIVEN admin di user management
WHEN add/edit user
THEN form dengan:
  - Name (required)
  - Email (required, unique)
  - Role (Admin/Editor/Viewer)
  - Status (active/inactive)
  - Password (create only, atau reset)
```

---

##### FR-030: User Delete

**Priority:** P0 — Must Have  
**User Class:** Admin  

**Acceptance Criteria:**
```gherkin
GIVEN admin berada di /admin/users
WHEN click "Delete" user (bukan diri sendiri)
AND confirm delete
THEN user soft-deleted
```

---

### 3.2 Non-Functional Requirements

---

#### NFR-PERF-001: Page Load Time

**Priority:** P0 — Must Have  
**Category:** Performance  

**Requirement:**  
Semua halaman landing page harus load dengan cepat.

| Metric | Target | Acceptable | Unacceptable |
|--------|--------|------------|--------------|
| First Contentful Paint (FCP) | < 1.5s | < 2.5s | > 3s |
| Largest Contentful Paint (LCP) | < 2.5s | < 4s | > 6s |
| Time to Interactive (TTI) | < 3s | < 5s | > 7s |

**Measurement:** Lighthouse, WebPageTest

---

#### NFR-PERF-002: API Response Time

**Priority:** P0 — Must Have  
**Category:** Performance  

**Requirement:**  
Semua API endpoints harus respond dalam waktu acceptable.

| Metric | Target | Acceptable | Unacceptable |
|--------|--------|------------|--------------|
| P50 | < 100ms | < 150ms | > 200ms |
| P95 | < 200ms | < 300ms | > 500ms |
| P99 | < 500ms | < 750ms | > 1000ms |

**Measurement:** Supabase Dashboard, Vercel Analytics

---

#### NFR-SEC-001: Authentication Security

**Priority:** P0 — Must Have  
**Category:** Security  

**Requirements:**
- Password hashing: bcrypt (cost ≥ 10) atau Argon2id
- Session: HttpOnly, Secure, SameSite=Lax cookies
- Session timeout: 24 hours
- CSRF protection pada semua state-changing requests

---

#### NFR-SEC-002: Authorization

**Priority:** P0 — Must Have  
**Category:** Security  

**Requirements:**
- Role-Based Access Control (RBAC) dengan 3 roles
- Row Level Security (RLS) pada Supabase
- Admin-only actions: delete resources, manage users

---

#### NFR-SEC-003: Input Validation

**Priority:** P0 — Must Have  
**Category:** Security  

**Requirements:**
- Semua user input WAJIB divalidasi (Zod schema)
- SQL injection prevention (Supabase query builder)
- XSS prevention (React built-in escaping)
- File upload validation (type, size ≤ 5MB, rename dengan UUID)

---

#### NFR-SEC-004: Security Headers

**Priority:** P0 — Must Have  
**Category:** Security  

**Requirements:**
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: [appropriate policy]
```

---

#### NFR-AVAIL-001: Uptime

**Priority:** P1 — Should Have  
**Category:** Availability  

**Requirement:**  
Target uptime 99.9% (8.76 hours downtime per year max).

**Measurement:** Vercel Status, UptimeRobot

---

#### NFR-SCALE-001: Concurrent Users

**Priority:** P1 — Should Have  
**Category:** Scalability  

**Requirement:**  
System should handle minimal 100 concurrent users tanpa degradasi performance.

**Note:** Supabase free tier supports 50K MAU, sufficient untuk MVP.

---

#### NFR-USAB-001: Mobile Responsiveness

**Priority:** P0 — Must Have  
**Category:** Usability  

**Requirements:**
- Mobile-first design approach
- Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Touch targets minimal 44x44px
- No horizontal scroll

---

#### NFR-USAB-002: Accessibility (Basic)

**Priority:** P1 — Should Have  
**Category:** Usability  

**Requirements:**
- Semantic HTML
- Alt text untuk semua images
- ARIA labels untuk interactive elements
- Keyboard navigable
- Color contrast ratio ≥ 4.5:1

---

#### NFR-MAINT-001: Code Quality

**Priority:** P1 — Should Have  
**Category:** Maintainability  

**Requirements:**
- TypeScript strict mode
- ESLint + Prettier configuration
- Unit test coverage ≥ 80% untuk business logic
- Pre-commit hooks (Husky)

---

#### NFR-SEO-001: Search Engine Optimization

**Priority:** P1 — Should Have  
**Category:** SEO  

**Requirements:**
- Proper meta tags (title, description) per page
- Open Graph tags untuk social sharing
- Sitemap.xml
- robots.txt
- Slug-based URLs untuk portfolio dan blog

---

### 3.3 External Interface Requirements

#### 3.3.1 User Interfaces

**Landing Page:**
- Modern, professional design
- Dark mode support (optional)
- Smooth animations (Framer Motion)
- Consistent design system (Shadcn UI + Tailwind v4)

**Admin Dashboard:**
- Clean, functional interface
- Sidebar navigation
- Data tables dengan pagination
- Form validations dengan inline errors
- Toast notifications

#### 3.3.2 Software Interfaces

| Interface | Purpose | Protocol |
|-----------|---------|----------|
| Supabase Database | Data storage | PostgreSQL |
| Supabase Auth | Authentication | OAuth 2.0, Email/Password |
| Supabase Storage | File uploads | S3-compatible |
| WhatsApp | Contact redirect | HTTPS (wa.me link) |
| Vercel | Hosting | HTTPS |

---

## 4. Appendices

### A. Requirements Traceability Matrix

| Req ID | Category | Priority | Owner | Status |
|--------|----------|----------|-------|--------|
| FR-001 - FR-011 | Landing Page | P0-P2 | Fachri | Pending |
| FR-012 - FR-013 | Authentication | P0 | Mifdal | Pending |
| FR-014 - FR-017 | Portfolio CRUD | P0 | Fachri + Mifdal | Pending |
| FR-018 - FR-021 | Blog CRUD | P1 | Fachri + Mifdal | Pending |
| FR-022 - FR-024 | Team CRUD | P1 | Fachri + Mifdal | Pending |
| FR-025 | Services CRUD | P1 | Fachri + Mifdal | Pending |
| FR-026 - FR-027 | Contact Management | P0 | Fachri + Mifdal | Pending |
| FR-028 - FR-030 | User Management | P0 | Mifdal | Pending |
| NFR-* | Non-Functional | P0-P1 | All | Pending |

### B. Data Dictionary

*Will be detailed in ERD (see `/design-database` output)*

### C. Change History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-14 | AI-Agent | Initial draft |

---

## ✅ SRS Validation Checklist

- [x] Project info gathered from Planning Blueprint
- [x] Scope defined (In/Out)
- [x] User classes identified (4 classes)
- [x] Functional requirements listed (30 FRs)
- [x] Non-functional requirements specified (11 NFRs)
- [x] Constraints documented
- [x] Acceptance criteria in Gherkin format
- [ ] Team review completed
- [ ] Stakeholder sign-off

---

## 📊 Summary Statistics

| Category | Count |
|----------|-------|
| **Functional Requirements** | 30 |
| **Non-Functional Requirements** | 11 |
| **User Classes** | 4 |
| **P0 (Must Have)** | 18 |
| **P1 (Should Have)** | 11 |
| **P2 (Nice to Have)** | 2 |

---

## 🔄 Next Steps

1. **Review SRS** dengan PM (Tataq) dan Sponsor (Pa Heri)
2. **Proceed to** `/create-persona` untuk user personas
3. **Proceed to** `/write-user-story` untuk breakdown FRs ke stories
4. **Proceed to** `/choose-architecture` untuk architecture design

---

*Generated: 2026-01-14 13:03*  
*Workflow: /create-srs | ID: WF-SPEC01*  
*Standard: IEEE 830*
