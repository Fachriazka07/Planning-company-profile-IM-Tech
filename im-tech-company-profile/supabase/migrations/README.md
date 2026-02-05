# Database Migrations

Folder ini berisi Supabase database migrations.

## Struktur

```
migrations/
├── 20260101000000_initial_schema.sql
├── 20260102000000_add_users_table.sql
└── ...
```

## Membuat Migration Baru

```bash
supabase migration new <migration-name>
```

## Apply Migrations

```bash
supabase db push
```

## Dokumentasi

https://supabase.com/docs/guides/cli/local-development
