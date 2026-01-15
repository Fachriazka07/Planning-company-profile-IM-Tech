# User Personas Summary - IM Tech Company Profile

**Project:** IM Tech Company Profile + Admin Dashboard  
**Created:** 2026-01-15  
**Status:** Assumption-based (requires validation)

---

## 📋 Personas Overview

| # | Persona | Type | Segment | Priority | File |
|---|---------|------|---------|----------|------|
| 1 | Pak Budi | Primary | B2G (Government) | High | `persona_visitor_b2g.md` |
| 2 | Ibu Ratna | Primary | B2B (Business) | High | `persona_visitor_b2b.md` |
| 3 | Mas Andi | Secondary | B2C (UMKM) | Low (Phase 2+) | `persona_visitor_b2c.md` |
| 4 | Tataq | Secondary | Internal Admin | Medium | `persona_admin.md` |
| 5 | Raffi | Secondary | Internal Editor | Medium | `persona_editor.md` |

---

## 🎯 Primary Personas (Focus for MVP)

### 1. Pak Budi - Government Procurement Officer (B2G)

| Attribute | Value |
|-----------|-------|
| **Age** | 45-55 |
| **Goal** | Mencari vendor IT kredibel untuk tender |
| **Key Need** | Legalitas jelas, portfolio relevan |
| **Device** | Desktop |
| **Key Behavior** | Research-based, formal, document-oriented |

**Design Implications:**
- ✅ Prominent legality section (SIUP, NPWP, NIB)
- ✅ Portfolio dengan filter sektor pemerintah
- ✅ PDF Company Profile download
- ✅ Professional, formal design

---

### 2. Ibu Ratna - Business Owner (B2B)

| Attribute | Value |
|-----------|-------|
| **Age** | 35-45 |
| **Goal** | Digitalisasi bisnis, cari vendor terpercaya |
| **Key Need** | Portfolio bagus, harga reasonable |
| **Device** | Mobile (primary) |
| **Key Behavior** | Recommendation-based, WhatsApp preferred |

**Design Implications:**
- ✅ Mobile-first responsive design
- ✅ Floating WhatsApp button
- ✅ Visual portfolio dengan screenshots
- ✅ Simple language, avoid jargon

---

## 📌 Secondary Personas

### 3. Mas Andi - UMKM Owner (B2C)

> ⚠️ **Note:** Low priority for MVP. Reference untuk future product (Aplikasi Kasir).

| Attribute | Value |
|-----------|-------|
| **Age** | 28-35 |
| **Goal** | Aplikasi kasir simple dan murah |
| **Key Need** | Gratis/murah, mudah dipakai |
| **Device** | Mobile only (Android) |

---

### 4. Tataq - Admin/PM

| Attribute | Value |
|-----------|-------|
| **Role** | Admin (full access) |
| **Goal** | Manage website content, monitor leads |
| **Key Need** | Dashboard overview, user management |
| **Device** | Desktop |

**Design Implications:**
- ✅ Dashboard home dengan key metrics
- ✅ Contact submissions with unread count
- ✅ User CRUD dengan roles

---

### 5. Raffi - Editor/Content Creator

| Attribute | Value |
|-----------|-------|
| **Role** | Editor (limited access) |
| **Goal** | Create dan publish content |
| **Key Need** | Good editor, easy image upload |
| **Device** | Desktop |

**Design Implications:**
- ✅ Rich text editor (TipTap)
- ✅ Drag & drop image upload
- ✅ Draft auto-save
- ✅ Preview mode

---

## 🔍 Key Insights

### Visitor Insights

| Insight | Design Impact |
|---------|---------------|
| B2G butuh legalitas | Prominent legality section |
| B2B prefer mobile | Mobile-first design |
| WhatsApp preferred | Floating WhatsApp CTA |
| Trust is key | Portfolio dengan real screenshots |
| Quick scan behavior | Clear navigation, scannable content |

### Dashboard Insights

| Insight | Design Impact |
|---------|---------------|
| Admin butuh overview | Dashboard home dengan metrics |
| Editor butuh good editor | TipTap rich text editor |
| Draft safety | Auto-save feature |
| Different permissions | RBAC implementation |

---

## 📊 Permission Matrix

| Feature | Admin | Editor | Viewer |
|---------|-------|--------|--------|
| Portfolio CRUD | ✅ Full | ⚡ Create/Edit | 👁️ View |
| Blog CRUD | ✅ Full | ⚡ Create/Edit | 👁️ View |
| Team CRUD | ✅ Full | ⚡ Create/Edit | 👁️ View |
| Services CRUD | ✅ Full | ⚡ Create/Edit | 👁️ View |
| Contact View | ✅ Full | 👁️ View | 👁️ View |
| User Management | ✅ Full | ❌ No | ❌ No |
| Delete Actions | ✅ Yes | ❌ No | ❌ No |
| Settings | ✅ Full | ❌ No | ❌ No |

---

## 🚨 Anti-Persona: Siapa yang BUKAN Target

| Anti-Persona | Reason |
|--------------|--------|
| **Individual consumer** | Bukan target market IM Tech |
| **Very small business (warung kecil)** | Budget terlalu kecil untuk custom dev |
| **Non-Indonesian** | Focus market Indonesia |
| **Tech-savvy developer** | Would build themselves |

---

## ✅ Validation Checklist

- [x] Primary personas identified (2)
- [x] Secondary personas identified (3)
- [x] Anti-personas defined
- [x] Design implications documented
- [x] Permission matrix created
- [ ] **Validation with real users** (pending)

> ⚠️ **Important:** Semua personas ini assumption-based.
> Setelah launch, WAJIB validate dengan real user interviews.

---

## 🔄 Next Steps

1. **Reference personas** saat design UI/UX
2. **Validate** dengan real users setelah launch
3. **Update** personas berdasarkan analytics dan feedback

---

*Generated: 2026-01-15*  
*Workflow: /create-persona | ID: WF-UX01*
