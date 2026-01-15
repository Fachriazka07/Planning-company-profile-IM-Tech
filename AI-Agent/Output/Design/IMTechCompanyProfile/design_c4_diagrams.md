# C4 Architecture Diagrams - IM Tech Company Profile

**Project:** IM Tech Company Profile + Admin Dashboard  
**Date:** 2026-01-15  
**Architecture:** Layered Architecture

---

## Level 1: System Context Diagram

```mermaid
C4Context
    title System Context Diagram - IM Tech Company Profile

    Person(visitor, "Visitor", "Potential client (B2G, B2B, B2C)")
    Person(admin, "Admin", "System administrator")
    Person(editor, "Editor", "Content creator")

    System(imtech, "IM Tech Website", "Company profile website + CMS dashboard")

    System_Ext(whatsapp, "WhatsApp", "Messaging platform")
    System_Ext(email, "Email Service", "Email notifications")

    Rel(visitor, imtech, "Views portfolio, services, blog", "HTTPS")
    Rel(visitor, imtech, "Submits contact form", "HTTPS")
    Rel(visitor, whatsapp, "Contacts via WhatsApp", "HTTPS")
    
    Rel(admin, imtech, "Manages content, users", "HTTPS")
    Rel(editor, imtech, "Creates/edits content", "HTTPS")
    
    Rel(imtech, email, "Sends notifications", "SMTP/API")
    Rel(imtech, whatsapp, "Redirects to WhatsApp", "HTTPS")
```

### System Context Description

| Actor | Description | Interaction |
|-------|-------------|-------------|
| **Visitor** | Potential clients (Pak Budi B2G, Ibu Ratna B2B) | Browse landing page, submit contact form, click WhatsApp |
| **Admin** | Pa Heri, Tataq | Full system access, user management |
| **Editor** | Raffi | Content creation (blog, portfolio) |
| **IM Tech Website** | Main system | Serves landing page + admin dashboard |
| **WhatsApp** | External | Direct messaging channel |
| **Email Service** | External (optional) | Contact form notifications |

---

## Level 2: Container Diagram

```mermaid
C4Container
    title Container Diagram - IM Tech Company Profile

    Person(visitor, "Visitor", "B2G/B2B/B2C client")
    Person(admin, "Admin/Editor", "Internal user")

    Container_Boundary(imtech, "IM Tech Website") {
        Container(landing, "Landing Page", "Next.js 16 (SSG/ISR)", "Public pages: Home, About, Services, Portfolio, Blog, Team, Contact")
        Container(dashboard, "Admin Dashboard", "Next.js 16 (SSR)", "CMS: CRUD portfolio, blog, team, services, contacts, users")
        Container(api, "API Layer", "Next.js API Routes", "RESTful API endpoints /api/v1/*")
        ContainerDb(db, "Database", "Supabase PostgreSQL", "Stores all content and user data")
        Container(storage, "File Storage", "Supabase Storage", "Images, documents")
        Container(auth, "Auth Service", "Supabase Auth", "Authentication, sessions, RBAC")
    }

    System_Ext(vercel, "Vercel", "Hosting & CDN")
    System_Ext(whatsapp, "WhatsApp", "External messaging")

    Rel(visitor, landing, "Views pages", "HTTPS")
    Rel(visitor, whatsapp, "Contacts", "HTTPS")
    Rel(admin, dashboard, "Manages content", "HTTPS")
    
    Rel(landing, api, "Fetches data", "Internal")
    Rel(dashboard, api, "CRUD operations", "Internal")
    Rel(api, db, "Queries", "Supabase Client")
    Rel(api, storage, "Upload/fetch files", "Supabase Client")
    Rel(api, auth, "Verify sessions", "Supabase Client")
    
    Rel(landing, vercel, "Deployed on", "")
    Rel(dashboard, vercel, "Deployed on", "")
```

### Container Descriptions

| Container | Technology | Responsibility |
|-----------|------------|----------------|
| **Landing Page** | Next.js 16 (SSG/ISR) | Public-facing pages, SEO optimized, static generation |
| **Admin Dashboard** | Next.js 16 (SSR) | Protected CMS, dynamic content management |
| **API Layer** | Next.js API Routes | RESTful endpoints, business logic delegation |
| **Database** | Supabase PostgreSQL | Data persistence, RLS for security |
| **File Storage** | Supabase Storage | Images, PDFs, uploads |
| **Auth Service** | Supabase Auth | User authentication, session management |

---

## Level 2: Detailed Component Flow

### Landing Page Container

```mermaid
flowchart TB
    subgraph "Landing Page (Next.js SSG/ISR)"
        HP[Homepage]
        AB[About Page]
        SV[Services Page]
        PF[Portfolio Page]
        BL[Blog Page]
        TM[Team Page]
        CT[Contact Page]
    end

    subgraph "Shared Components"
        NAV[Navigation]
        FTR[Footer]
        WA[WhatsApp Button]
    end

    subgraph "Data Fetching"
        SSG[Static Generation]
        ISR[Incremental Regeneration]
    end

    HP --> NAV
    HP --> FTR
    HP --> WA
    
    PF --> ISR
    BL --> ISR
    TM --> ISR
    
    HP --> SSG
    AB --> SSG
    SV --> ISR
    CT --> SSG
```

### Admin Dashboard Container

```mermaid
flowchart TB
    subgraph "Admin Dashboard (Protected)"
        LOGIN["/admin/login"]
        DASH[Dashboard Home]
        
        subgraph "Content Management"
            PF_LIST[Portfolio List]
            PF_FORM[Portfolio Form]
            BL_LIST[Blog List]
            BL_FORM[Blog Editor]
            TM_MGR[Team Manager]
            SV_MGR[Services Manager]
        end
        
        subgraph "Operations"
            CT_VIEW[Contact Submissions]
            USR_MGR[User Management]
            SETTINGS[Settings]
        end
    end

    subgraph "Auth Middleware"
        AUTH_CHECK{Authenticated?}
    end

    LOGIN --> AUTH_CHECK
    AUTH_CHECK -->|Yes| DASH
    AUTH_CHECK -->|No| LOGIN
    
    DASH --> PF_LIST
    DASH --> BL_LIST
    DASH --> CT_VIEW
    
    PF_LIST --> PF_FORM
    BL_LIST --> BL_FORM
```

---

## Level 2: Data Flow Diagram

```mermaid
flowchart LR
    subgraph "Client Layer"
        BROWSER[Browser]
    end

    subgraph "Presentation Layer"
        LP[Landing Pages]
        AD[Admin Dashboard]
    end

    subgraph "Application Layer"
        API[API Routes]
        SA[Server Actions]
    end

    subgraph "Service Layer"
        PS[Portfolio Service]
        BS[Blog Service]
        TS[Team Service]
        CS[Contact Service]
        US[User Service]
    end

    subgraph "Data Access Layer"
        PR[Portfolio Repo]
        BR[Blog Repo]
        TR[Team Repo]
        CR[Contact Repo]
        UR[User Repo]
    end

    subgraph "Database Layer"
        DB[(PostgreSQL)]
        ST[(Storage)]
    end

    BROWSER --> LP
    BROWSER --> AD
    LP --> API
    AD --> API
    AD --> SA
    
    API --> PS
    API --> BS
    API --> TS
    API --> CS
    API --> US
    SA --> PS
    
    PS --> PR
    BS --> BR
    TS --> TR
    CS --> CR
    US --> UR
    
    PR --> DB
    BR --> DB
    TR --> DB
    CR --> DB
    UR --> DB
    PR --> ST
    BR --> ST
    TR --> ST
```

---

## Deployment Architecture

```mermaid
flowchart TB
    subgraph "Client"
        BROWSER[User Browser]
        MOBILE[Mobile Browser]
    end

    subgraph "Vercel Edge Network"
        CDN[CDN / Edge Cache]
        SERVERLESS[Serverless Functions]
    end

    subgraph "Supabase Cloud"
        PGREST[PostgREST API]
        POSTGRES[(PostgreSQL)]
        STORAGE[(Storage / S3)]
        AUTH[Auth / GoTrue]
    end

    BROWSER --> CDN
    MOBILE --> CDN
    CDN --> SERVERLESS
    
    SERVERLESS --> PGREST
    SERVERLESS --> AUTH
    SERVERLESS --> STORAGE
    
    PGREST --> POSTGRES
```

### Deployment Details

| Component | Service | Tier |
|-----------|---------|------|
| **Frontend** | Vercel | Free (Hobby) |
| **Database** | Supabase | Free (500MB) |
| **Storage** | Supabase | Free (1GB) |
| **Auth** | Supabase | Free (50K MAU) |
| **CDN** | Vercel Edge | Included |

---

## Security Architecture

```mermaid
flowchart TB
    subgraph "Public Zone"
        LP[Landing Page]
    end

    subgraph "Auth Zone"
        LOGIN[Login Page]
        AUTH[Supabase Auth]
    end

    subgraph "Protected Zone"
        MIDDLEWARE[Auth Middleware]
        DASHBOARD[Admin Dashboard]
        API[Protected API]
    end

    subgraph "Data Zone"
        RLS[Row Level Security]
        DB[(Database)]
    end

    LP --> |Public Access| DB
    
    LOGIN --> AUTH
    AUTH -->|Session Token| MIDDLEWARE
    MIDDLEWARE -->|Verified| DASHBOARD
    MIDDLEWARE -->|Verified| API
    
    API -->|User Context| RLS
    RLS --> DB
```

### Security Layers

| Layer | Mechanism |
|-------|-----------|
| **Transport** | HTTPS everywhere |
| **Authentication** | Supabase Auth (JWT) |
| **Authorization** | Role-Based (Admin, Editor, Viewer) |
| **Data** | Row Level Security (RLS) |
| **Input** | Zod validation |
| **Session** | HttpOnly, Secure, SameSite cookies |

---

## Summary

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Pattern** | Layered Architecture | Simple, fast for MVP |
| **Rendering** | SSG + ISR + SSR | SEO for landing, dynamic for admin |
| **Database** | Supabase PostgreSQL | Free, managed, RLS |
| **Auth** | Supabase Auth | Built-in, secure |
| **Hosting** | Vercel | Next.js optimized |

### Key Benefits

1. ✅ Clear separation of concerns
2. ✅ Easy to understand for team
3. ✅ Cost-effective (all free tier)
4. ✅ Scalable for MVP scope
5. ✅ Secure by default

---

*Generated: 2026-01-15*  
*Related: ADR-001_architecture.md*
