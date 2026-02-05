/**
 * Admin Dashboard TypeScript Types
 */

// API Response Types (per RULE-89: Response Envelope)
export interface ApiResponse<T> {
    data: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface ApiError {
    error: {
        code: string;
        message: string;
        details?: Record<string, string[]>;
    };
}

// User Types
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'editor' | 'viewer';
    avatar_url?: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

// Common Types
export type Status = 'draft' | 'published' | 'archived';

export interface BaseEntity {
    id: string;
    created_at: string;
    updated_at: string;
}

// Pagination
export interface PaginationParams {
    page?: number;
    limit?: number;
    sort?: string;
    order?: 'asc' | 'desc';
}

// Portfolio Types
export interface PortfolioProject extends BaseEntity {
    title: string;
    slug: string;
    description: string;
    content: string;
    thumbnail_url: string;
    images: string[];
    category: 'web' | 'mobile' | 'design';
    technologies: string[];
    client_name?: string;
    project_url?: string;
    github_url?: string;
    status: Status;
    featured: boolean;
    order: number;
}

// Blog Types
export interface BlogPost extends BaseEntity {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnail_url: string;
    author_id: string;
    author?: User;
    category: string;
    tags: string[];
    status: Status;
    published_at?: string;
    views: number;
}

// Team Types
export interface TeamMember extends BaseEntity {
    name: string;
    position: string;
    bio: string;
    avatar_url: string;
    email?: string;
    phone?: string;
    linkedin_url?: string;
    github_url?: string;
    order: number;
    is_active: boolean;
}

// Service Types
export interface Service extends BaseEntity {
    title: string;
    slug: string;
    description: string;
    thumbnail_url: string;
    icon: string;
    features: string[];
    order: number;
    is_active: boolean;
}

// Contact Types
export interface ContactSubmission extends BaseEntity {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status: 'new' | 'read' | 'replied' | 'archived';
    replied_at?: string;
    notes?: string;
}

// Dashboard Stats
export interface DashboardStats {
    totalPortfolios: number;
    totalBlogs: number;
    totalContacts: number;
    newContacts: number;
    totalViews: number;
}
