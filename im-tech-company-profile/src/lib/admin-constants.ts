/**
 * Admin Dashboard Constants
 */

export const APP_NAME = 'IM Tech Admin';
export const APP_DESCRIPTION = 'Admin Dashboard untuk IM Tech Company Profile';

// Navigation Items for Admin Panel
export const ADMIN_NAV_ITEMS = [
  {
    title: 'Overview',
    href: '/admin/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Portfolio',
    href: '/admin/portfolio',
    icon: 'FolderKanban',
  },
  {
    title: 'Blog',
    href: '/admin/blog',
    icon: 'FileText',
  },
  {
    title: 'Team',
    href: '/admin/team',
    icon: 'Users',
  },
  {
    title: 'Services',
    href: '/admin/services',
    icon: 'Briefcase',
  },
  {
    title: 'Contact Submission',
    href: '/admin/contacts',
    icon: 'Mail',
  },
] as const;

// Status Options
export const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft', color: 'bg-yellow-500' },
  { value: 'published', label: 'Published', color: 'bg-green-500' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-500' },
] as const;

// Contact Status Options
export const CONTACT_STATUS_OPTIONS = [
  { value: 'new', label: 'New', color: 'bg-blue-500' },
  { value: 'read', label: 'Read', color: 'bg-yellow-500' },
  { value: 'replied', label: 'Replied', color: 'bg-green-500' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-500' },
] as const;

// Category Options
export const CATEGORY_OPTIONS = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'design', label: 'UI/UX Design' },
] as const;
