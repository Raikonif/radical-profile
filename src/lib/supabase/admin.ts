import { createSupabaseRuntimeClient } from "@/lib/supabase/client";
import { getSupabaseSecretKey } from "@/lib/supabase/config";

export const supabaseAdmin = createSupabaseRuntimeClient(
  getSupabaseSecretKey(),
);
