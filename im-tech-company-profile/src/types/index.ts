/**
 * Common TypeScript Types
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
