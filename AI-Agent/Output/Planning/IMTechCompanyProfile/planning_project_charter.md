# IM Tech Company Profile - Project Charter

**Version:** 1.0 | **Date:** 2026-01-13 | **Status:** DRAFT - Pending Approval

---

## 📋 Project Information

| Field | Value |
|-------|-------|
| **Project Name** | IM Tech Company Profile + Admin Dashboard |
| **Project ID** | PRJ-20260113-IMTECH-CP |
| **Phase** | 01 (MVP) |
| **Project Manager** | Tataq |
| **Project Sponsor** | Pa Heri (Owner) |
| **Start Date** | 13 Januari 2026 |
| **Target End Date** | 12 Februari 2026 (Flexible) |
| **Planning Tier** | Tier 2 - Team/Business |

---

## 🎯 Purpose & Justification

### Business Need

IM Tech Solution adalah perusahaan IT yang belum memiliki kehadiran digital (website). Hal ini menyebabkan:
- Kesulitan menjelaskan layanan ke potential clients
- Tidak ada channel untuk showcase portfolio
- Kurangnya kredibilitas di mata government clients (B2G)
- Rendahnya brand awareness di pasar

### Strategic Alignment

Project ini mendukung strategi bisnis IM Tech untuk:
1. Meningkatkan brand awareness dan kredibilitas
2. Membuka channel baru untuk lead generation
3. Menyiapkan infrastruktur digital untuk scale-up

---

## 🎯 SMART Objectives

| # | Objective | Metric | Target | Deadline | Status |
|---|-----------|--------|--------|----------|--------|
| 1 | Launch Company Profile website | Website live | 100% pages functional | 12 Feb 2026 | ⬜ |
| 2 | Build Admin Dashboard for content management | Features complete | 8 core features | 12 Feb 2026 | ⬜ |
| 3 | Enable portfolio & blog management | CRUD operations | Portfolio + Blog working | 12 Feb 2026 | ⬜ |
| 4 | Implement multi-user admin system | User roles | Admin + Editor roles | 12 Feb 2026 | ⬜ |
| 5 | Mobile-responsive design | Responsive test | Pass on iOS + Android | 12 Feb 2026 | ⬜ |

### SMART Validation

- ✅ **S**pecific — Clear deliverables defined
- ✅ **M**easurable — Each objective has metrics
- ✅ **A**chievable — Feasibility score 16/25 (Conditional)
- ✅ **R**elevant — Aligned with business need
- ✅ **T**ime-bound — Target 12 Feb 2026

---

## 📦 Scope

### ✅ In Scope (Phase 1 - MVP)

#### Landing Page
- [ ] Homepage (Hero, About, Services preview)
- [ ] Company legality section
- [ ] Services page
- [ ] Portfolio page
- [ ] Blog page
- [ ] Team page
- [ ] Contact page with form + WhatsApp
- [ ] Responsive design (mobile-first)

#### Admin Dashboard
- [ ] User Authentication (Login)
- [ ] Portfolio CRUD
- [ ] Blog CRUD
- [ ] Team CRUD
- [ ] Services CRUD
- [ ] Contact submissions viewer
- [ ] Multi-user with roles (Admin, Editor)

#### Infrastructure
- [ ] Database setup (Supabase)
- [ ] Deployment (Vercel)
- [ ] Basic CI/CD

### ❌ Out of Scope (Phase 2+)

| Item | Reason | Phase |
|------|--------|-------|
| Analytics Dashboard | Time constraint | Phase 2 |
| Homepage Content Editor | Nice-to-have | Phase 2 |
| Multi-language (ID/EN) | Time constraint | Phase 2 |
| AI Chatbot | Future feature | Phase 3 |
| PDF Company Profile download | Nice-to-have | Phase 2 |
| Email notifications | Not critical for MVP | Phase 2 |
| Advanced SEO | Post-launch optimization | Phase 2 |

---

## 👥 Stakeholders

| Name | Role | Interest | Influence | Communication |
|------|------|----------|-----------|---------------|
| **Pa Heri** | Owner/Sponsor | High | High | Weekly review, final sign-off |
| **Tataq** | PM/Lead | High | High | Daily standup |
| **Fachri** | FE Developer | High | Medium | Daily updates |
| **Mifdal** | BE/QA/DevOps | High | Medium | Daily updates |
| **Ali** | UI/UX Web | Medium | Medium | Design reviews |
| **Raffi** | Content/Sosmed | Medium | Low | Content deadlines |
| **Deni** | Mobile Dev | Low | Low | Responsive testing |

---

## 🛠️ Technical Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | Next.js | 16.x (LTS) |
| React | React | 19.2.x |
| CSS | Tailwind CSS | 4.x |
| UI Components | Shadcn UI | Latest |
| Database | Supabase (PostgreSQL) | - |
| Auth | Supabase Auth | - |
| Storage | Supabase Storage | - |
| Deployment | Vercel | - |
| Language | TypeScript | 5.3+ |

---

## 📅 Timeline & Milestones

| Phase | Milestone | Target Date | Owner | Status |
|-------|-----------|-------------|-------|--------|
| **Week 1** | Planning Complete | 13-19 Jan | Tataq | 🔄 In Progress |
| | Content Ready (foto, logo) | 20 Jan | Raffi | ⬜ Pending |
| | UI/UX Wireframes | 19 Jan | Ali | ⬜ Pending |
| **Week 2** | Database Schema | 20 Jan | Mifdal | ⬜ Pending |
| | Auth System Done | 24 Jan | Mifdal | ⬜ Pending |
| | Landing Page Structure | 26 Jan | Fachri | ⬜ Pending |
| **Week 3** | Core CRUD APIs | 28 Jan | Mifdal | ⬜ Pending |
| | Admin Dashboard UI | 30 Jan | Fachri + Ali | ⬜ Pending |
| | Portfolio + Blog Done | 2 Feb | Fachri | ⬜ Pending |
| **Week 4** | Testing & Bug Fixes | 3-7 Feb | All | ⬜ Pending |
| | Content Population | 7 Feb | Raffi | ⬜ Pending |
| | UAT | 8-10 Feb | Tataq | ⬜ Pending |
| | Owner Sign-off | 11 Feb | Pa Heri | ⬜ Pending |
| | **GO-LIVE** | **12 Feb** | Mifdal | ⬜ Pending |

---

## 💰 Budget

| Category | Estimated | Notes |
|----------|-----------|-------|
| Development | Rp 0 | Internal team (sweat equity) |
| Supabase | Rp 0 | Free tier |
| Vercel | Rp 0 | Free tier |
| Domain | Rp 0 | Already owned |
| Contingency (20%) | Rp 0 | - |
| **TOTAL** | **Rp 0** | No external cost |

> **Note:** This is a "sweat equity" project. All costs are team time/effort.

---

## ⚠️ Key Risks

| ID | Risk | Score | Mitigation | Owner |
|----|------|-------|------------|-------|
| R1 | Part-time team → deadline miss | 🔴 9 | Reduce scope, flexible deadline | Tataq |
| R4 | Legalitas belum ada | 🔴 9 | Parallel process, B2G phase 2 | Pa Heri |
| R2 | Content belum ready | 🟡 6 | Deadline 20 Jan ke Raffi | Tataq |
| R3 | Mifdal overload | 🟡 6 | Prioritize, Fachri bantu testing | Tataq |

*Full risk register: See `planning_risk_register.md`*

---

## 📋 Methodology

| Aspect | Choice | Rationale |
|--------|--------|-----------|
| **Framework** | Agile/Scrum | Team project, iterative delivery |
| **Sprint Length** | 1 week | Short timeline (1 month) |
| **Ceremonies** | Daily standup (async), Weekly review | Part-time team |
| **Tools** | GitHub Projects | Issue tracking |

---

## ✅ Success Criteria

| Criteria | Measurement | Target |
|----------|-------------|--------|
| Website functional | All pages load without error | 100% |
| Admin CRUD works | All CRUD operations success | 100% |
| Mobile responsive | Test on iOS + Android | Pass |
| Performance | Lighthouse score | > 80 |
| Owner approval | Sign-off | Approved |

---

## 📝 Change Control

All scope/timeline changes must:
1. Be submitted to PM (Tataq)
2. Assessed for impact
3. Approved by Sponsor (Pa Heri) if significant
4. Documented in change log

---

## ✍️ Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Project Sponsor** | Pa Heri | _____________ | ______ |
| **Project Manager** | Tataq | _____________ | ______ |

---

## 📚 Related Documents

| Document | Path |
|----------|------|
| Ideation Report | `planning_ideation_report_v2.md` |
| Feasibility Study | `planning_feasibility_report.md` |
| Tech Decision | `planning_tech_decision.md` |
| RACI Matrix | `planning_raci_matrix.md` |
| Risk Register | `planning_risk_register.md` |

---

*Generated: 2026-01-13*
*Workflow: /create-charter | ID: WF-P09*
*Rules Applied: RULE-P04, P05, P06*
