import { createClient } from "@supabase/supabase-js";
import { SUPABASE_AUTH_OPTIONS, getSupabaseUrl } from "@/lib/supabase/config";

export function createSupabaseRuntimeClient(key: string) {
  return createClient(getSupabaseUrl(), key, {
    auth: SUPABASE_AUTH_OPTIONS,
  });
}
