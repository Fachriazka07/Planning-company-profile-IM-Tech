/**
 * Application Constants
 */

export const APP_NAME = 'IM Tech';
export const APP_DESCRIPTION = 'Insun Madangan Technology - Software House';

export const SITE_CONFIG = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
};

export const API_VERSION = 'v1';
export const API_BASE_PATH = `/api/${API_VERSION}`;

export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 10,
  maxLimit: 100,
};

export const UPLOAD = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
};
