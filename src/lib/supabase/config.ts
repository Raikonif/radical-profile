const SUPABASE_URL_ENV = "SUPABASE_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY_ENVS = [
  "SUPABASE_PUBLISHABLE_KEY",
  "SUPABASE_ANON_KEY",
  "SUPABASE_PUBLIC_KEY",
] as const;
const SUPABASE_SECRET_KEY_ENV = "SUPABASE_SECRET_KEY";

function getEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function getFirstDefinedEnv(names: readonly string[]): string | undefined {
  for (const name of names) {
    const value = getEnv(name);
    if (value) return value;
  }
  return undefined;
}

export function getSupabaseUrl(): string {
  const value = getEnv(SUPABASE_URL_ENV);
  if (!value) {
    throw new Error(`Missing Supabase env var: ${SUPABASE_URL_ENV}.`);
  }
  return value;
}

export function getSupabasePublishableKey(): string {
  const value = getFirstDefinedEnv(SUPABASE_PUBLISHABLE_KEY_ENVS);
  if (!value) {
    throw new Error(
      `Missing Supabase publishable key env var. Checked: ${SUPABASE_PUBLISHABLE_KEY_ENVS.join(", ")}.`,
    );
  }
  return value;
}

export function getSupabaseSecretKey(): string {
  const value = getEnv(SUPABASE_SECRET_KEY_ENV);
  if (!value) {
    throw new Error(`Missing Supabase env var: ${SUPABASE_SECRET_KEY_ENV}.`);
  }
  return value;
}

export const SUPABASE_AUTH_OPTIONS = {
  persistSession: false,
  autoRefreshToken: false,
  detectSessionInUrl: false,
} as const;
