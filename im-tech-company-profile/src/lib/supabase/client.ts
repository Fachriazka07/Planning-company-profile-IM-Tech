import { createBrowserClient } from '@supabase/ssr';

// ==========================================
// SUPABASE BROWSER CLIENT
// ==========================================
// Use this client for client-side components (use client)
// Example usage:
//   import { createClient } from '@/lib/supabase/client';
//   const supabase = createClient();
//   const { data, error } = await supabase.from('table').select('*');
// ==========================================

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
