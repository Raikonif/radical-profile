import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_PROJECT_URL;
const supabaseSecretKey = import.meta.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
        "Missing Supabase admin env vars (SUPABASE_PROJECT_URL and SUPABASE_SECRET_KEY).",
    );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
    },
});
