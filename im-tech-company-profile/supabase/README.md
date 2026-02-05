# Supabase Backend

Folder ini dikelola oleh **Backend Team**.

## Struktur Folder

```
supabase/
├── functions/      # Edge Functions (serverless backend logic)
├── migrations/     # Database migrations (schema changes)
└── README.md       # This file
```

## Edge Functions

Edge Functions adalah serverless functions yang berjalan di Supabase.
Dokumentasi: https://supabase.com/docs/guides/functions

Contoh use case:
- Custom authentication logic
- Complex data processing
- Third-party API integrations
- Webhooks

## Migrations

Database migrations untuk track perubahan schema.
Dokumentasi: https://supabase.com/docs/guides/cli/local-development

## Getting Started (untuk BE)

1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link project: `supabase link --project-ref <project-id>`
4. Create migration: `supabase migration new <migration-name>`
5. Create function: `supabase functions new <function-name>`

## Environment Variables

Buat file `.env.local` di root project dengan:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
