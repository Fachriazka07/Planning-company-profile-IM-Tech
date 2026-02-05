# Edge Functions

Folder ini berisi Supabase Edge Functions.

## Struktur

Setiap function memiliki folder sendiri:
```
functions/
├── function-name/
│   └── index.ts
└── ...
```

## Contoh Function

```typescript
// functions/hello-world/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
```

## Deploy

```bash
supabase functions deploy <function-name>
```

## Dokumentasi

https://supabase.com/docs/guides/functions
