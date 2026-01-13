# IM Tech Company Profile - Risk Register

**Date:** 2026-01-13
**Project:** Company Profile + Admin Dashboard
**PM/Lead:** Tataq

---

## 📊 Summary

| Priority | Count |
|----------|-------|
| 🔴 Critical (7-9) | 3 |
| 🟡 Medium (4-6) | 4 |
| 🟢 Low (1-3) | 3 |
| **TOTAL** | **10** |

---

## 📋 Risk Register

| ID | Risk | Category | Prob | Impact | Score | Priority | Mitigation | Owner |
|----|------|----------|------|--------|-------|----------|------------|-------|
| R1 | Part-time team menyebabkan deadline miss | Schedule | H(3) | H(3) | **9** | 🔴 Critical | Reduce scope ke MVP, flexible deadline | Tataq |
| R2 | Content belum ready (foto, logo, text) | Schedule | H(3) | M(2) | **6** | 🟡 Medium | Set deadline content 20 Jan ke Raffi | Tataq |
| R3 | Mifdal overload (BE+QA+DevOps) | Resource | M(2) | H(3) | **6** | 🟡 Medium | Prioritize features, Fachri bantu testing | Tataq |
| R4 | Legalitas belum ada (SIUP/NPWP/NIB) | Legal | H(3) | H(3) | **9** | 🔴 Critical | Parallel process, B2G phase 2 | Pa Heri |
| R5 | Next.js 16 + Tailwind v4 learning curve | Technical | M(2) | M(2) | **4** | 🟡 Medium | Use official docs, simple patterns first | Fachri |
| R6 | Supabase free tier limitations | Technical | L(1) | M(2) | **2** | 🟢 Low | Monitor usage, implement caching | Mifdal |
| R7 | Scope creep dari stakeholder | Schedule | M(2) | H(3) | **6** | 🟡 Medium | Strict scope doc, change request process | Tataq |
| R8 | Key developer tidak available | Resource | L(1) | H(3) | **3** | 🟢 Low | Documentation, knowledge sharing | Tataq |
| R9 | Pa Heri tidak available untuk sign-off | External | M(2) | H(3) | **6** | 🟡 Medium | Schedule review meetings in advance | Tataq |
| R10 | Design tidak diapprove client | Technical | L(1) | M(2) | **2** | 🟢 Low | Iterative design review, prototypes | Ali |

---

## 🔴 Critical Risks (Score 7-9)

### R1: Part-time Team → Deadline Miss

| Aspect | Detail |
|--------|--------|
| **Score** | 9 (Probability: High, Impact: High) |
| **Description** | Semua anggota tim part-time, tidak full dedicated ke project ini |
| **Trigger** | Sprint velocity < 50% target selama 2 minggu berturut-turut |
| **Current Status** | TELOS assessment sudah identify ini sebagai risk utama |

**Mitigation Strategy:**
1. ✅ Reduce scope ke MVP (Phase 1 only for deadline)
2. ✅ Flexible deadline sudah dikonfirmasi
3. 📅 Weekly standup untuk tracking progress
4. 🎯 Focus pada P0 features first

**Owner:** Tataq (PM)

---

### R4: Legalitas Belum Ada

| Aspect | Detail |
|--------|--------|
| **Score** | 9 (Probability: High, Impact: High) |
| **Description** | IM Tech belum punya SIUP, NPWP, NIB yang dibutuhkan untuk B2G |
| **Trigger** | Tidak bisa ikut tender pemerintah, kredibilitas rendah |
| **Current Status** | Blocking untuk target market B2G |

**Mitigation Strategy:**
1. ⚡ Mulai proses pengurusan legalitas SEGERA (parallel dengan development)
2. 🎯 Target market B2B/B2C dulu sementara legalitas diproses
3. 📄 Siapkan section legalitas di website tapi tampilkan "Coming Soon"
4. 📅 Target legalitas selesai: 1 bulan

**Owner:** Pa Heri (Owner)

---

## 🟡 Medium Risks (Score 4-6)

### R2: Content Belum Ready

| Aspect | Detail |
|--------|--------|
| **Score** | 6 |
| **Trigger** | Development blocked karena tidak ada content untuk dimasukkan |

**Mitigation:**
- Deadline content: **20 Jan 2026** (1 minggu dari sekarang)
- Raffi responsible untuk: logo, foto tim, service descriptions
- Use placeholder selama development jika perlu

**Owner:** Tataq → Raffi

---

### R3: Mifdal Overload

| Aspect | Detail |
|--------|--------|
| **Score** | 6 |
| **Trigger** | Backend/QA/DevOps tasks menumpuk, bottleneck |

**Mitigation:**
- Prioritize core backend features
- Fachri bantu unit testing
- Automate deployment via CI/CD
- Consider outsource jika critical

**Owner:** Tataq → Mifdal

---

### R5: New Tech Stack Learning Curve

| Aspect | Detail |
|--------|--------|
| **Score** | 4 |
| **Trigger** | Development slower karena unfamiliar dengan Next.js 16 / Tailwind v4 |

**Mitigation:**
- Use official documentation
- Start with simple patterns
- Tim sudah punya Next.js experience (v15)
- Tailwind v4 backward compatible

**Owner:** Fachri

---

### R7: Scope Creep

| Aspect | Detail |
|--------|--------|
| **Score** | 6 |
| **Trigger** | New features requested tanpa change control |

**Mitigation:**
- Strict scope document (Ideation Report v2)
- All changes via change request to PM
- Evaluate impact before accepting

**Owner:** Tataq

---

### R9: Pa Heri Not Available for Sign-off

| Aspect | Detail |
|--------|--------|
| **Score** | 6 |
| **Trigger** | Final deliverable tidak bisa di-approve, launch delayed |

**Mitigation:**
- Schedule review meetings 1 minggu sebelumnya
- Iterative approval per milestone
- Tataq sebagai proxy approver untuk non-critical items

**Owner:** Tataq

---

## 🟢 Low Risks (Score 1-3)

| ID | Risk | Score | Mitigation | Status |
|----|------|-------|------------|--------|
| R6 | Supabase free tier limits | 2 | Monitor usage, caching | Monitor |
| R8 | Key developer unavailable | 3 | Documentation, pair programming | Monitor |
| R10 | Design not approved | 2 | Iterative reviews, prototypes | Monitor |

---

## 📅 Risk Monitoring Schedule

| Frequency | Activity | Who |
|-----------|----------|-----|
| Daily | Check blockers | Each member |
| Weekly | Risk review meeting | Tataq + Leads |
| Per Milestone | Risk reassessment | Full team |

---

## 🔄 Risk Response Actions

| Response Type | When to Use |
|---------------|-------------|
| **Avoid** | Change plan to eliminate risk |
| **Mitigate** | Reduce probability or impact |
| **Transfer** | Outsource or insure |
| **Accept** | Monitor and proceed |

---

## ✅ Validation Checklist

- [x] Minimum 3 risks identified (RULE-P08) ✅ (10 identified)
- [x] Each risk scored (Probability × Impact)
- [x] Mitigation strategies defined
- [x] Owners assigned
- [x] Critical risks have detailed plans
- [x] Monitoring schedule defined

---

## 🔄 Next Steps

1. Share risk register dengan Pa Heri dan tim
2. Mulai proses legalitas SEGERA (R4)
3. Set content deadline ke Raffi (R2)
4. Proceed ke `/create-charter` untuk formalisasi project
5. Final: `/compile-blueprint` untuk dokumentasi lengkap

---

*Generated: 2026-01-13*
*Workflow: /risk-register | ID: WF-P12*
*Rule Applied: RULE-P08 (Risk Identification Minimum)*
