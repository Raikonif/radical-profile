import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_PROJECT_URL;
const supabaseAnonKey =
  import.meta.env.SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.SUPABASE_ANON_KEY ||
  import.meta.env.SUPABASE_PUBLIC_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase public env vars (SUPABASE_PROJECT_URL and SUPABASE_PUBLISHABLE_KEY).",
  );
}

export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
