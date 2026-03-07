import { createSupabaseRuntimeClient } from "@/lib/supabase/client";
import { getSupabasePublishableKey } from "@/lib/supabase/config";

export const supabaseServer = createSupabaseRuntimeClient(
  getSupabasePublishableKey(),
);
