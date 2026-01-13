# IM Tech Company Profile - Planning Blueprint

**Version:** 1.0 | **Created:** 2026-01-13
**Status:** ✅ Ready for Design Phase
**Project ID:** PRJ-20260113-IMTECH-CP
**Phase:** 01 (MVP)

---

## 📋 Executive Summary

| Aspect | Detail |
|--------|--------|
| **Project** | IM Tech Company Profile + Admin Dashboard |
| **Objective** | Build digital presence untuk branding & credibility |
| **Timeline** | 13 Jan - 12 Feb 2026 (1 bulan, flexible) |
| **Budget** | Rp 0 (Sweat equity) |
| **Team** | 7 members |
| **Planning Tier** | Tier 2 - Team/Business |
| **Feasibility Score** | 16/25 (CONDITIONAL) |
| **Decision** | ✅ GO (with conditions) |

---

## 1. 🎯 Problem & Solution

### Problem Statement

> **"IM Tech Solution** (perusahaan IT) **mengalami kesulitan menjelaskan layanan dan menampilkan portfolio** ketika **berinteraksi dengan potential clients (B2G, B2B, B2C)**, yang menyebabkan **kurangnya kredibilitas di mata government clients dan rendahnya brand awareness di pasar.**"

### Target Audience

| Segment | Focus |
|---------|-------|
| **B2G** | Government - tender, credibility |
| **B2B** | Business - partnerships |
| **B2C** | UMKM - Aplikasi Kasir |

### Solution Concepts (TOP 5)

| # | Concept | Priority |
|---|---------|----------|
| 1 | AI-Powered Modern Landing | MVP |
| 2 | Credibility Builder (Legality, PDF, Case Study) | MVP |
| 3 | Lead Generation Machine (WhatsApp, Form) | MVP |
| 4 | Interactive Service Showcase | Phase 2 |
| 5 | AI Assistant | Phase 3 |

### Unique Value Proposition

> **"IM Tech Solution mengintegrasikan AI dalam website yang lebih modern"**

---

## 2. 🔍 Feasibility (TELOS)

### Score: 16/25 (CONDITIONAL)

| Dimension | Score | Status |
|-----------|-------|--------|
| **T** - Technical | 5/5 | ✅ PASS |
| **E** - Economic | 3/5 | 🟡 No budget (OK for branding) |
| **L** - Legal | 2/5 | 🔴 Legalitas belum ada |
| **O** - Operational | 4/5 | ✅ PASS |
| **S** - Schedule | 2/5 | 🔴 Part-time + content not ready |

### Conditions to Proceed

1. ✅ Reduce scope ke MVP
2. ✅ Flexible deadline (confirmed)
3. ⚠️ Legalitas parallel processing
4. ⚠️ Content ready by 20 Jan

---

## 3. 🛠️ Technical Decisions

### Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Frontend** | Next.js | 16.x (LTS) |
| **React** | React | 19.2.x |
| **CSS** | Tailwind CSS | 4.x |
| **UI** | Shadcn UI | Latest |
| **Database** | Supabase (PostgreSQL) | - |
| **Auth** | Supabase Auth | - |
| **Storage** | Supabase Storage | - |
| **Deployment** | Vercel | - |
| **Language** | TypeScript | 5.3+ |

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js 16)                   │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │  Landing Page   │  │  Admin Dashboard │                   │
│  │  (SSG/ISR)      │  │  (SSR + Client)  │                   │
│  └────────┬────────┘  └────────┬────────┘                   │
│           └────────┬───────────┘                             │
│                    ▼                                         │
│         Next.js API Routes / Server Actions                  │
└────────────────────┼────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                      SUPABASE                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │PostgreSQL│  │   Auth   │  │ Storage  │  │Real-time │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                      VERCEL                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. 📦 Scope

### ✅ In Scope (Phase 1 - MVP)

#### Landing Page
- Homepage (Hero, About, Services)
- Company legality section
- Services page
- Portfolio page
- Blog page
- Team page
- Contact page + WhatsApp
- Responsive design

#### Admin Dashboard
- User Authentication
- Portfolio CRUD
- Blog CRUD
- Team CRUD
- Services CRUD
- Contact submissions viewer
- Multi-user with roles

### ❌ Out of Scope (Phase 2+)

| Item | Phase |
|------|-------|
| Analytics Dashboard | Phase 2 |
| Homepage Content Editor | Phase 2 |
| Multi-language (ID/EN) | Phase 2 |
| PDF Company Profile | Phase 2 |
| Email notifications | Phase 2 |
| AI Chatbot | Phase 3 |

---

## 5. 👥 Team (RACI)

| Name | Role | Primary Tasks |
|------|------|---------------|
| **Pa Heri** | Owner/Sponsor | Final sign-off |
| **Tataq** | PM/Lead | 35 Accountable |
| **Fachri** | FE Developer | 22 Responsible |
| **Mifdal** | BE/QA/DevOps | 18 Responsible |
| **Ali** | UI/UX Web | Design & wireframes |
| **Raffi** | Content | Blog, portfolio content |
| **Deni** | Mobile Dev | Responsive testing |

---

## 6. ⚠️ Risks

### Critical Risks (Score 7-9)

| ID | Risk | Score | Mitigation | Owner |
|----|------|-------|------------|-------|
| R1 | Part-time team → deadline miss | 🔴 9 | Reduce scope, flexible deadline | Tataq |
| R4 | Legalitas belum ada | 🔴 9 | Parallel process, B2G phase 2 | Pa Heri |

### Medium Risks (Score 4-6)

| ID | Risk | Score | Mitigation | Owner |
|----|------|-------|------------|-------|
| R2 | Content belum ready | 🟡 6 | Deadline 20 Jan ke Raffi | Tataq |
| R3 | Mifdal overload | 🟡 6 | Prioritize, Fachri bantu | Tataq |
| R7 | Scope creep | 🟡 6 | Strict scope doc | Tataq |

---

## 7. 📅 Timeline

| Week | Phase | Milestone | Owner |
|------|-------|-----------|-------|
| **W1** | Planning | Blueprint complete, Content ready | Tataq, Raffi |
| **W2** | Development | Auth + Landing structure | Mifdal, Fachri |
| **W3** | Development | Admin Dashboard + CRUD | Fachri, Mifdal |
| **W4** | Testing | UAT, Bug fixes, Go-live | All |

### Key Dates

| Date | Milestone |
|------|-----------|
| 13 Jan | Project Start |
| 20 Jan | Content Ready (foto, logo) |
| 26 Jan | Landing Page Structure |
| 2 Feb | Portfolio + Blog Done |
| 11 Feb | Owner Sign-off |
| **12 Feb** | **GO-LIVE** 🚀 |

---

## 8. ✅ Planning Phase Completion

### Deliverables Checklist

| # | Document | Status |
|---|----------|--------|
| 1 | Ideation Report v2 | ✅ Complete |
| 2 | Feasibility Report (TELOS) | ✅ Complete |
| 3 | Tech Stack Decision | ✅ Complete |
| 4 | RACI Matrix | ✅ Complete |
| 5 | Risk Register | ✅ Complete |
| 6 | Project Charter | ✅ Complete |
| 7 | Planning Blueprint | ✅ Complete |

### Pending Actions

| Action | Owner | Deadline |
|--------|-------|----------|
| Get Charter signed by Pa Heri | Tataq | 15 Jan |
| Start legalitas process | Pa Heri | ASAP |
| Prepare content (foto, logo) | Raffi | 20 Jan |

---

## 🚀 Next: Design Phase

### Recommended Entry Point

```
/design-tier-assessment → /create-srs → /choose-architecture → /design-ui-ux
```

### Design Phase Scope

- [ ] Database Schema Design (ERD)
- [ ] UI/UX Wireframes
- [ ] High-fidelity Prototypes
- [ ] API Design (OpenAPI spec)
- [ ] Component Architecture

---

## 📚 Source Documents

| # | Document | Path |
|---|----------|------|
| 1 | Ideation Report v1 | [planning_ideation_report.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_ideation_report.md) |
| 2 | Ideation Report v2 | [planning_ideation_report_v2.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_ideation_report_v2.md) |
| 3 | Feasibility Report | [planning_feasibility_report.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_feasibility_report.md) |
| 4 | Tech Decision | [planning_tech_decision.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_tech_decision.md) |
| 5 | RACI Matrix | [planning_raci_matrix.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_raci_matrix.md) |
| 6 | Risk Register | [planning_risk_register.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_risk_register.md) |
| 7 | Project Charter | [planning_project_charter.md](file:///d:/Fachri/WORKSPACES/IM%20Tech/AI-Agent/Output/Planning/IMTechCompanyProfile/planning_project_charter.md) |

---

## ✍️ Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Project Sponsor** | Pa Heri | _____________ | ______ |
| **Project Manager** | Tataq | _____________ | ______ |

---

🎉 **PLANNING PHASE COMPLETE!**

*Next Step: Run `/design-tier-assessment` to start Design Phase*

---

*Generated: 2026-01-13*
*Workflow: /compile-blueprint | ID: WF-P13*
