/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_PROJECT_URL: string;
  readonly SUPABASE_PUBLISHABLE_KEY?: string;
  readonly SUPABASE_JWT_KEY?: string;
  readonly SUPABASE_ANON_KEY?: string;
  readonly SUPABASE_PUBLIC_KEY?: string;
  readonly SUPABASE_SECRET_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
