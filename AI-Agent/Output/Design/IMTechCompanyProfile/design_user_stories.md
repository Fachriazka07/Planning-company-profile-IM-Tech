# User Stories - IM Tech Company Profile

**Project:** IM Tech Company Profile + Admin Dashboard  
**Version:** 1.0  
**Date:** 2026-01-15  
**Source:** SRS Document (30 Functional Requirements)

---

## 📋 Epic Overview

| Epic Code | Epic Name | Stories | Priority | Sprint |
|-----------|-----------|---------|----------|--------|
| LANDING | Landing Page | 8 | P0-P2 | Sprint 1-2 |
| AUTH | Authentication | 3 | P0 | Sprint 1 |
| PORTFOLIO | Portfolio Management | 4 | P0 | Sprint 2 |
| BLOG | Blog Management | 4 | P1 | Sprint 2-3 |
| TEAM | Team Management | 3 | P1 | Sprint 2 |
| SERVICE | Services Management | 2 | P1 | Sprint 2 |
| CONTACT | Contact Management | 3 | P0 | Sprint 2 |
| USER | User Management | 3 | P0 | Sprint 1 |

**Total Stories:** 30

---

## 🏠 Epic: LANDING — Landing Page

---

### US-LANDING-001: Homepage Hero Section

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 1

#### Story

**As a** Visitor (Pak Budi / Ibu Ratna)  
**I want to** see an impressive hero section when I land on the homepage  
**So that** I immediately understand what IM Tech offers and feel confident in their professionalism

#### Acceptance Criteria

```gherkin
Feature: Homepage Hero Section

  Scenario: Visitor views homepage hero
    Given I am a visitor on the homepage
    When the page finishes loading
    Then I should see a hero section with:
      | Element | Content |
      | Background | Professional image or video |
      | Headline | Company tagline |
      | CTA Button | "Hubungi Kami" |
      | Navigation | Main menu with links |
    And the hero section should be fully visible above the fold

  Scenario: CTA button click
    Given I am viewing the hero section
    When I click the "Hubungi Kami" button
    Then I should be redirected to the contact page or WhatsApp
```

#### Definition of Done
- [ ] Hero section responsive on all breakpoints
- [ ] Image optimized (WebP, lazy load)
- [ ] Lighthouse performance > 90
- [ ] Accessibility: proper heading hierarchy

---

### US-LANDING-002: About Section Preview

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As a** Visitor  
**I want to** see a brief about section on the homepage  
**So that** I can quickly understand who IM Tech is without navigating away

#### Acceptance Criteria

```gherkin
Feature: About Section Preview

  Scenario: View about preview on homepage
    Given I am on the homepage
    When I scroll to the about section
    Then I should see:
      | Element | Description |
      | Brief Description | 2-3 sentences about IM Tech |
      | Key Stats | Company achievements/numbers |
      | Learn More Link | Links to /about page |

  Scenario: Navigate to full about page
    Given I see the about section preview
    When I click "Learn More" or "Selengkapnya"
    Then I should be redirected to /about page
```

---

### US-LANDING-003: Services Preview

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As a** Visitor  
**I want to** see featured services on the homepage  
**So that** I can quickly identify if IM Tech offers what I need

#### Acceptance Criteria

```gherkin
Feature: Services Preview Section

  Scenario: View services preview
    Given I am on the homepage
    When I scroll to the services section
    Then I should see 3-4 featured services with:
      | Element | Description |
      | Icon | Visual icon per service |
      | Title | Service name |
      | Short Description | 1-2 sentences |
    And a "View All Services" link to /services

  Scenario: Click individual service
    Given I see a service card
    When I click on it
    Then I should navigate to /services#{service-id} or detail modal
```

---

### US-LANDING-004: Company Legality Section

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As a** Government Procurement Officer (Pak Budi)  
**I want to** see company legality documents prominently displayed  
**So that** I can verify IM Tech is a legitimate vendor for government tenders

#### Acceptance Criteria

```gherkin
Feature: Company Legality Section

  Scenario: View legality credentials
    Given I am on the homepage or about page
    When I scroll to the legality section
    Then I should see badges/icons for:
      | Document | Display |
      | SIUP | Badge with number (if available) |
      | NPWP | Badge with number (if available) |
      | NIB | Badge with number (if available) |
    And there should be text indicating legitimacy

  Scenario: Legality not yet available
    Given IM Tech legalitas is still in process
    When I view the legality section
    Then I should see a placeholder indicating "Dalam proses"
    Or the section should be hidden gracefully
```

---

### US-LANDING-005: Services Full Page

**Priority:** P1 — Should Have | **Points:** 3 | **Sprint:** 2

#### Story

**As a** Visitor  
**I want to** see a dedicated services page with all offerings  
**So that** I can evaluate which services match my needs

#### Acceptance Criteria

```gherkin
Feature: Services Page

  Scenario: View all services
    Given I navigate to /services
    When the page loads
    Then I should see a list of all services with:
      | Element | Description |
      | Icon | Visual icon |
      | Title | Service name |
      | Description | Full description |
      | CTA | Inquiry button per service |

  Scenario: Inquiry about specific service
    Given I am viewing a service
    When I click the inquiry button
    Then I should be directed to contact page or WhatsApp
    With pre-filled service context
```

---

### US-LANDING-006: Portfolio Page

**Priority:** P1 — Should Have | **Points:** 5 | **Sprint:** 2

#### Story

**As a** Visitor (Pak Budi / Ibu Ratna)  
**I want to** browse IM Tech's portfolio of completed projects  
**So that** I can assess their experience and quality of work

#### Acceptance Criteria

```gherkin
Feature: Portfolio Page

  Scenario: View portfolio list
    Given I navigate to /portfolio
    When the page loads
    Then I should see a grid of portfolio items with:
      | Element | Description |
      | Thumbnail | Project screenshot |
      | Title | Project name |
      | Category | Project category |

  Scenario: Filter portfolio by category
    Given I am on the portfolio page
    And there are multiple categories
    When I click on a category filter
    Then only projects in that category should display

  Scenario: View portfolio detail
    Given I see a portfolio item
    When I click on it
    Then I should see a detail view with:
      | Element | Description |
      | Gallery | Multiple images |
      | Description | Full project description |
      | Tech Stack | Technologies used |
      | Client | Client name (if permitted) |
```

---

### US-LANDING-007: Blog Page

**Priority:** P2 — Nice to Have | **Points:** 5 | **Sprint:** 3

#### Story

**As a** Visitor  
**I want to** read blog articles from IM Tech  
**So that** I can learn about their expertise and stay informed

#### Acceptance Criteria

```gherkin
Feature: Blog Page

  Scenario: View blog list
    Given I navigate to /blog
    When the page loads
    Then I should see blog posts sorted by latest first with:
      | Element | Description |
      | Thumbnail | Featured image |
      | Title | Article title |
      | Excerpt | First 100-150 characters |
      | Date | Published date |
      | Author | Author name |

  Scenario: Read blog post
    Given I see a blog post in the list
    When I click on it
    Then I should navigate to /blog/{slug} with:
      | Element | Description |
      | Full Content | Complete article |
      | Author Info | Name and avatar |
      | Reading Time | Estimated minutes |
      | Related Posts | Optional suggestions |
```

---

### US-LANDING-008: Team Page

**Priority:** P1 — Should Have | **Points:** 2 | **Sprint:** 2

#### Story

**As a** Visitor  
**I want to** see the IM Tech team  
**So that** I can know who I'll be working with

#### Acceptance Criteria

```gherkin
Feature: Team Page

  Scenario: View team members
    Given I navigate to /team
    When the page loads
    Then I should see a grid of team members with:
      | Element | Description |
      | Photo | Professional photo |
      | Name | Full name |
      | Role | Job title |
      | Social Links | LinkedIn, GitHub, etc. |

  Scenario: Team member order
    Given there are multiple team members
    Then they should be displayed in defined order
    With leadership/founders first
```

---

### US-LANDING-009: Contact Page

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 1

#### Story

**As a** Visitor  
**I want to** contact IM Tech through a form or WhatsApp  
**So that** I can inquire about their services

#### Acceptance Criteria

```gherkin
Feature: Contact Page

  Scenario: View contact page
    Given I navigate to /contact
    When the page loads
    Then I should see:
      | Element | Description |
      | Contact Form | Name, email, phone, message fields |
      | WhatsApp Button | Direct WhatsApp link |
      | Company Address | Office location |
      | Map | Google Maps embed (optional) |

  Scenario: Submit contact form successfully
    Given I fill in all required fields correctly
    When I click Submit
    Then my submission should be saved
    And I should see a success message
    And the form should reset

  Scenario: Submit form with validation errors
    Given I leave required fields empty
    When I click Submit
    Then I should see inline validation errors
    And the form should not submit
```

---

### US-LANDING-010: WhatsApp Integration

**Priority:** P0 — Must Have | **Points:** 1 | **Sprint:** 1

#### Story

**As a** Visitor (especially Ibu Ratna)  
**I want to** quickly contact IM Tech via WhatsApp  
**So that** I can get immediate response without filling forms

#### Acceptance Criteria

```gherkin
Feature: WhatsApp Integration

  Scenario: Click floating WhatsApp button
    Given I am on any page of the website
    When I see the floating WhatsApp button
    And I click it
    Then I should be redirected to WhatsApp with pre-filled message:
      "Halo IM Tech, saya tertarik dengan layanan Anda."

  Scenario: WhatsApp button visibility
    Given I am browsing the website
    Then the WhatsApp button should always be visible
    And should not obstruct content
    And should be accessible via keyboard
```

---

### US-LANDING-011: Responsive Design

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 1-2

#### Story

**As a** Mobile User (Ibu Ratna browsing on phone)  
**I want to** have a fully functional mobile experience  
**So that** I can browse IM Tech website on my smartphone

#### Acceptance Criteria

```gherkin
Feature: Responsive Design

  Scenario: Mobile viewport
    Given I access the website from a mobile device (< 768px)
    When any page loads
    Then the layout should adapt to mobile
    And navigation should become hamburger menu
    And touch targets should be at least 44x44px
    And no horizontal scrolling should occur

  Scenario: Tablet viewport
    Given I access from a tablet (768-1024px)
    Then the layout should adapt appropriately
    With potentially different column layouts

  Scenario: Desktop viewport
    Given I access from desktop (> 1024px)
    Then the full desktop layout should display
    With expanded navigation
```

---

## 🔐 Epic: AUTH — Authentication

---

### US-AUTH-001: Admin Login

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 1

#### Story

**As an** Admin or Editor  
**I want to** log into the admin dashboard  
**So that** I can manage website content

#### Acceptance Criteria

```gherkin
Feature: Admin Login

  Scenario: Successful login
    Given I am on /admin/login
    When I enter valid email and password
    And I click "Login"
    Then I should be authenticated
    And redirected to /admin/dashboard
    And a session should be created

  Scenario: Invalid credentials
    Given I am on /admin/login
    When I enter invalid email or password
    And I click "Login"
    Then I should see an error message "Email atau password salah"
    And I should remain on the login page

  Scenario: Empty fields
    Given I am on /admin/login
    When I click "Login" without filling fields
    Then I should see validation errors for required fields

  Scenario: Redirect to login when unauthenticated
    Given I am not logged in
    When I try to access /admin/dashboard
    Then I should be redirected to /admin/login
```

---

### US-AUTH-002: Session Management

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As an** authenticated user  
**I want to** have my session managed securely  
**So that** my account is protected

#### Acceptance Criteria

```gherkin
Feature: Session Management

  Scenario: Session expiration
    Given I am logged in
    When 24 hours have passed without activity
    Then my session should expire
    And I should be redirected to login on next action

  Scenario: Manual logout
    Given I am logged in
    When I click "Logout"
    Then my session should be destroyed
    And I should be redirected to login page
    And I should not be able to access protected pages

  Scenario: Session persistence
    Given I am logged in
    When I close and reopen the browser (within 24h)
    Then I should still be logged in
```

---

### US-AUTH-003: Password Security

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As a** system  
**I want to** ensure passwords are stored securely  
**So that** user accounts are protected

#### Acceptance Criteria

```gherkin
Feature: Password Security

  Scenario: Password hashing
    Given a user account is created
    Then the password should be hashed with bcrypt (cost >= 10)
    And the plaintext password should never be stored

  Scenario: Password validation
    Given I am creating/updating a password
    Then the password must be at least 8 characters
    And contain mixed case and numbers (recommended)
```

---

## 📂 Epic: PORTFOLIO — Portfolio Management

---

### US-PORTFOLIO-001: Portfolio List (Admin)

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** see all portfolio items in a list  
**So that** I can manage them efficiently

#### Acceptance Criteria

```gherkin
Feature: Portfolio List

  Scenario: View portfolio list
    Given I am logged in as Admin or Editor
    When I navigate to /admin/portfolio
    Then I should see a table with:
      | Column | Description |
      | Thumbnail | Small preview image |
      | Title | Project name |
      | Category | Project category |
      | Status | Draft/Published |
      | Date | Created/Updated date |
      | Actions | Edit, Delete buttons |

  Scenario: Pagination
    Given there are more than 10 portfolio items
    Then the list should be paginated (10 per page)
    And I should see pagination controls

  Scenario: Search portfolio
    Given I am on the portfolio list
    When I type in the search box
    Then the list should filter by title match
```

---

### US-PORTFOLIO-002: Create Portfolio

**Priority:** P0 — Must Have | **Points:** 5 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** create a new portfolio item  
**So that** I can showcase new projects

#### Acceptance Criteria

```gherkin
Feature: Create Portfolio

  Scenario: Access create form
    Given I am on /admin/portfolio
    When I click "Add Portfolio"
    Then I should see a form with fields:
      | Field | Type | Required |
      | Title | Text | Yes |
      | Category | Select | Yes |
      | Description | Rich Text | No |
      | Images | File Upload (multiple) | No |
      | Tech Stack | Multi-select | No |
      | Client Name | Text | No |
      | Project URL | URL | No |
      | Status | Select (Draft/Published) | Yes |

  Scenario: Submit valid portfolio
    Given I fill all required fields
    When I click "Save"
    Then the portfolio should be saved
    And I should see a success notification
    And I should be redirected to the list

  Scenario: Validation errors
    Given I leave required fields empty
    When I click "Save"
    Then I should see inline validation errors
    And the form should not submit

  Scenario: Image upload
    Given I am creating a portfolio
    When I drag and drop images
    Then images should upload with preview
    And should be compressed automatically
    And renamed with UUID
```

---

### US-PORTFOLIO-003: Update Portfolio

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** edit an existing portfolio item  
**So that** I can update project information

#### Acceptance Criteria

```gherkin
Feature: Update Portfolio

  Scenario: Access edit form
    Given I am on /admin/portfolio
    When I click "Edit" on a portfolio item
    Then I should see the form pre-filled with existing data

  Scenario: Save updates
    Given I modify portfolio fields
    When I click "Save"
    Then the portfolio should be updated
    And I should see a success notification

  Scenario: Cancel edit
    Given I am editing a portfolio
    When I click "Cancel"
    Then changes should be discarded
    And I should return to the list
```

---

### US-PORTFOLIO-004: Delete Portfolio

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 2

#### Story

**As an** Admin  
**I want to** delete a portfolio item  
**So that** I can remove outdated or incorrect projects

#### Acceptance Criteria

```gherkin
Feature: Delete Portfolio

  Scenario: Admin deletes portfolio
    Given I am logged in as Admin
    When I click "Delete" on a portfolio item
    Then I should see a confirmation dialog
    
  Scenario: Confirm deletion
    Given I see the confirmation dialog
    When I click "Confirm"
    Then the portfolio should be soft-deleted
    And I should see a success notification
    And the item should disappear from the list

  Scenario: Cancel deletion
    Given I see the confirmation dialog
    When I click "Cancel"
    Then the portfolio should not be deleted

  Scenario: Editor cannot delete
    Given I am logged in as Editor
    Then I should not see the Delete button
```

---

## 📝 Epic: BLOG — Blog Management

---

### US-BLOG-001: Blog List (Admin)

**Priority:** P1 — Should Have | **Points:** 3 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** see all blog posts in a list  
**So that** I can manage them

#### Acceptance Criteria

```gherkin
Feature: Blog List

  Scenario: View blog list
    Given I navigate to /admin/blog
    Then I should see a table with:
      | Column | Description |
      | Title | Post title |
      | Author | Author name |
      | Category | Post category |
      | Status | Draft/Published |
      | Date | Published date |
      | Actions | Edit, Delete |
    And pagination (10 per page)
    And search/filter options
```

---

### US-BLOG-002: Create Blog Post

**Priority:** P1 — Should Have | **Points:** 5 | **Sprint:** 2-3

#### Story

**As an** Admin or Editor  
**I want to** create a new blog post  
**So that** I can publish content for SEO and engagement

#### Acceptance Criteria

```gherkin
Feature: Create Blog Post

  Scenario: Access create form
    Given I click "New Post"
    Then I should see a form with:
      | Field | Type | Required |
      | Title | Text | Yes |
      | Content | Rich Text Editor | Yes |
      | Featured Image | File Upload | No |
      | Category | Select | Yes |
      | Tags | Multi-select | No |
      | SEO Title | Text | No |
      | SEO Description | Textarea | No |
      | Status | Draft/Published | Yes |
      | Publish Date | Date Picker | No |

  Scenario: Rich text editing
    Given I am in the content editor
    Then I should be able to:
      - Format text (bold, italic, heading)
      - Insert images
      - Insert links
      - Create lists

  Scenario: Auto-save draft
    Given I am writing content
    When 30 seconds pass without saving
    Then the draft should auto-save
    And I should see "Draft saved" indicator

  Scenario: Preview post
    Given I have content in the editor
    When I click "Preview"
    Then I should see how the post will look on the website
```

---

### US-BLOG-003: Update Blog Post

**Priority:** P1 — Should Have | **Points:** 3 | **Sprint:** 3

#### Story

**As an** Admin or Editor  
**I want to** edit an existing blog post  
**So that** I can fix errors or update content

#### Acceptance Criteria

```gherkin
Feature: Update Blog Post

  Scenario: Edit existing post
    Given I click "Edit" on a blog post
    Then I should see the form with existing content
    When I make changes and click "Save"
    Then the post should be updated
    And the URL slug should remain unchanged
```

---

### US-BLOG-004: Delete Blog Post

**Priority:** P1 — Should Have | **Points:** 2 | **Sprint:** 3

#### Story

**As an** Admin  
**I want to** delete a blog post  
**So that** I can remove irrelevant content

#### Acceptance Criteria

```gherkin
Feature: Delete Blog Post

  Scenario: Admin deletes blog
    Given I am Admin
    When I click "Delete" and confirm
    Then the post should be soft-deleted
    
  Scenario: Editor cannot delete
    Given I am Editor
    Then Delete button should not be visible
```

---

## 👥 Epic: TEAM — Team Management

---

### US-TEAM-001: Team List (Admin)

**Priority:** P1 — Should Have | **Points:** 2 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** see and reorder team members  
**So that** I can manage the team display

#### Acceptance Criteria

```gherkin
Feature: Team List

  Scenario: View team list
    Given I navigate to /admin/team
    Then I should see team members with:
      - Photo, Name, Role, Status
      - Drag-and-drop reorder capability
      - Edit and Delete actions
```

---

### US-TEAM-002: Create/Update Team Member

**Priority:** P1 — Should Have | **Points:** 3 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** add or edit team members  
**So that** the team page is always up to date

#### Acceptance Criteria

```gherkin
Feature: Team CRUD

  Scenario: Add team member
    Given I click "Add Member"
    Then I should see form with:
      | Field | Type | Required |
      | Name | Text | Yes |
      | Role | Text | Yes |
      | Photo | File Upload | No |
      | Bio | Textarea | No |
      | LinkedIn | URL | No |
      | GitHub | URL | No |
      | Order | Number | No |
      | Status | Active/Inactive | Yes |
```

---

### US-TEAM-003: Delete Team Member

**Priority:** P1 — Should Have | **Points:** 1 | **Sprint:** 2

#### Story

**As an** Admin  
**I want to** remove team members who have left  
**So that** the team page is accurate

#### Acceptance Criteria

```gherkin
Feature: Delete Team Member

  Scenario: Delete with confirmation
    Given I am Admin
    When I click Delete and confirm
    Then member should be soft-deleted
```

---

## 🛠️ Epic: SERVICE — Services Management

---

### US-SERVICE-001: Services List (Admin)

**Priority:** P1 — Should Have | **Points:** 2 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** manage the services displayed on the website  
**So that** offerings are always current

#### Acceptance Criteria

```gherkin
Feature: Services Management

  Scenario: View services list
    Given I navigate to /admin/services
    Then I should see services with:
      - Icon, Title, Description
      - Drag-and-drop reorder
      - Edit and Delete actions
```

---

### US-SERVICE-002: Create/Update Service

**Priority:** P1 — Should Have | **Points:** 2 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** add or modify services  
**So that** we can highlight new offerings

#### Acceptance Criteria

```gherkin
Feature: Service CRUD

  Scenario: Add service
    Given I click "Add Service"
    Then I should see form with:
      | Field | Required |
      | Title | Yes |
      | Description | Yes |
      | Icon | No |
      | Order | No |
```

---

## 📧 Epic: CONTACT — Contact Management

---

### US-CONTACT-001: Contact Submissions List

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** see all contact form submissions  
**So that** I can follow up with leads

#### Acceptance Criteria

```gherkin
Feature: Contact Submissions

  Scenario: View submissions list
    Given I navigate to /admin/contacts
    Then I should see submissions with:
      | Column | Description |
      | Name | Sender name |
      | Email | Sender email |
      | Phone | Sender phone |
      | Date | Submission date |
      | Status | Unread/Read |
    And unread filter option
    And pagination

  Scenario: Unread indicator
    Given there are unread submissions
    Then the sidebar should show unread count badge
```

---

### US-CONTACT-002: Contact Detail View

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** view full contact submission details  
**So that** I can understand the inquiry

#### Acceptance Criteria

```gherkin
Feature: Contact Detail

  Scenario: View submission detail
    Given I click on a submission
    Then I should see:
      - Full contact information
      - Complete message
      - Mark as Read button
      - Reply via Email button
      - Reply via WhatsApp button

  Scenario: Mark as read
    Given I view an unread submission
    Then it should automatically mark as read
    Or I can manually mark as read
```

---

### US-CONTACT-003: Reply to Contact

**Priority:** P1 — Should Have | **Points:** 1 | **Sprint:** 2

#### Story

**As an** Admin or Editor  
**I want to** quickly reply to inquiries  
**So that** leads are followed up promptly

#### Acceptance Criteria

```gherkin
Feature: Reply to Contact

  Scenario: Reply via WhatsApp
    Given I view a contact submission
    When I click "Reply via WhatsApp"
    Then WhatsApp should open with pre-filled message

  Scenario: Reply via Email
    Given I click "Reply via Email"
    Then email client should open with recipient pre-filled
```

---

## 👤 Epic: USER — User Management

---

### US-USER-001: User List (Admin)

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As an** Admin  
**I want to** see all system users  
**So that** I can manage access

#### Acceptance Criteria

```gherkin
Feature: User List

  Scenario: View user list
    Given I am Admin
    When I navigate to /admin/users
    Then I should see users with:
      | Column | Description |
      | Name | User name |
      | Email | User email |
      | Role | Admin/Editor/Viewer |
      | Status | Active/Inactive |
      | Last Login | Last login date |

  Scenario: Non-admin cannot access
    Given I am Editor or Viewer
    Then /admin/users should redirect or show 403
```

---

### US-USER-002: Create/Update User

**Priority:** P0 — Must Have | **Points:** 3 | **Sprint:** 1

#### Story

**As an** Admin  
**I want to** add or modify user accounts  
**So that** team members can access the dashboard

#### Acceptance Criteria

```gherkin
Feature: User CRUD

  Scenario: Add user
    Given I am Admin
    And I click "Add User"
    Then I should see form with:
      | Field | Required |
      | Name | Yes |
      | Email | Yes (unique) |
      | Password | Yes (create) |
      | Role | Yes |
      | Status | Yes |

  Scenario: Email uniqueness
    Given I enter an email that already exists
    When I submit
    Then I should see error "Email sudah terdaftar"

  Scenario: Reset password
    Given I am editing a user
    Then I should see "Reset Password" option
```

---

### US-USER-003: Delete User

**Priority:** P0 — Must Have | **Points:** 2 | **Sprint:** 1

#### Story

**As an** Admin  
**I want to** remove user accounts  
**So that** ex-team members lose access

#### Acceptance Criteria

```gherkin
Feature: Delete User

  Scenario: Delete another user
    Given I am Admin
    When I delete a user (not myself)
    Then user should be soft-deleted
    And their sessions invalidated

  Scenario: Cannot delete self
    Given I am viewing my own account
    Then Delete button should be disabled
    Or show warning "Tidak bisa menghapus akun sendiri"
```

---

## 📊 Summary

### Story Points by Epic

| Epic | Stories | Total Points |
|------|---------|--------------|
| LANDING | 11 | 31 |
| AUTH | 3 | 7 |
| PORTFOLIO | 4 | 13 |
| BLOG | 4 | 13 |
| TEAM | 3 | 6 |
| SERVICE | 2 | 4 |
| CONTACT | 3 | 6 |
| USER | 3 | 7 |
| **TOTAL** | **33** | **87** |

### Sprint Allocation (Suggested)

| Sprint | Focus | Points |
|--------|-------|--------|
| Sprint 1 | Landing core + Auth + User | ~30 |
| Sprint 2 | Admin Dashboard + CRUD | ~40 |
| Sprint 3 | Blog + Polish | ~17 |

---

## ✅ Validation Checklist

- [x] All FRs converted to stories
- [x] INVEST criteria considered
- [x] Gherkin acceptance criteria written
- [x] Story points estimated
- [x] Organized by epics
- [ ] Team review completed
- [ ] Story points validated by dev team

---

*Generated: 2026-01-15*  
*Workflow: /write-user-story | ID: WF-SPEC02*
