import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_PROJECT_URL;
const supabaseServerKey =
  import.meta.env.SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.SUPABASE_ANON_KEY ||
  import.meta.env.SUPABASE_PUBLIC_KEY;

if (!supabaseUrl || !supabaseServerKey) {
  throw new Error(
    "Missing Supabase server env vars (SUPABASE_PROJECT_URL and SUPABASE_PUBLISHABLE_KEY).",
  );
}

export const supabaseServer = createClient(supabaseUrl, supabaseServerKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
