# User Persona: Raffi - Editor/Content Creator

**Type:** 📌 Secondary Persona (Internal)  
**Segment:** Admin Dashboard User  
**Last Updated:** 2026-01-15  
**Based On:** Team knowledge

---

## Quick Overview

| Attribute | Value |
|-----------|-------|
| **Name** | Raffi |
| **Age** | 22-28 |
| **Occupation** | Content Creator / Social Media Manager |
| **Tech Savvy** | Medium-High |
| **Device** | Desktop (content creation), Mobile (quick edits) |
| **User Class** | Editor |

---

## Context

Raffi bertanggung jawab atas konten website IM Tech — blog posts, portfolio descriptions, dan social media integration. Sebagai Editor, dia bisa create/edit content tapi tidak bisa delete atau manage users.

---

## Goals & Motivations

### Primary Goals

1. **Publish blog posts** secara regular untuk SEO dan engagement
2. **Update portfolio** dengan proyek terbaru
3. **Create compelling content** yang menarik leads

### Motivations

- Konten harus menarik dan engaging
- SEO ranking harus naik
- Website harus selalu fresh dengan content baru

---

## Pain Points & Frustrations

### Potential Dashboard Problems

1. **Editor terlalu basic** — tidak bisa format dengan baik
2. **Image upload ribet** — compress manual, naming manual
3. **Preview tidak akurat** — beda dengan hasil publish
4. **Tidak ada draft auto-save** — kehilangan tulisan

---

## Behaviors

### Technology Usage

- Primary device: Desktop (untuk writing)
- Tools: Canva, Google Docs, Grammarly
- Image editing: Photoshop/Canva
- Reference: Medium, competitor blogs

### Dashboard Usage Pattern

1. Draft blog post di Google Docs dulu
2. Copy ke dashboard editor
3. Add images, format
4. Preview
5. Submit untuk review (atau langsung publish jika allowed)
6. Share ke social media

---

## Content Creation Workflow

```
Idea → Draft (Google Docs) → Review → Dashboard Input → 
→ Add Images → Format → Preview → Save Draft → 
→ Admin Review → Publish → Social Share
```

---

## How Our Product Helps

| Need | Dashboard Feature |
|------|-------------------|
| Good editing | Rich text editor (TipTap) |
| Easy image upload | Drag & drop, auto-compress |
| Live preview | Real-time preview |
| Draft safety | Auto-save every 30s |

---

## Key Design Implications

| Implication | Design Decision |
|-------------|-----------------|
| Content-focused | Clean editor, minimal distractions |
| Image-heavy | Robust upload with preview |
| Draft workflow | Clear draft/published status |
| Mobile preview | Responsive preview toggle |

---

## Permissions (Editor Role)

| Permission | Access |
|------------|--------|
| Portfolio CRUD | ⚡ Create, Edit (own) |
| Blog CRUD | ⚡ Create, Edit (own) |
| Team CRUD | ⚡ Create, Edit |
| Services CRUD | ⚡ Create, Edit |
| Contact View | ✅ Read Only |
| User Management | ❌ No Access |
| Settings | ❌ No Access |
| Delete Actions | ❌ Cannot Delete |

---

## Editor Needs

| Need | Priority |
|------|----------|
| Rich text editor | P0 — Must Have |
| Image upload | P0 — Must Have |
| Draft auto-save | P0 — Must Have |
| Preview mode | P1 — Should Have |
| Markdown support | P2 — Nice to Have |
| Scheduled publish | P2 — Nice to Have |

---

*Persona Type: Secondary (Internal Editor)*  
*Based On: Team knowledge*
