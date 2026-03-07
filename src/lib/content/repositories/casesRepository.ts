import { supabaseServer } from "@/lib/supabase/server";
import type { ContentLang } from "@/lib/content/types";

type CaseTranslationRow = {
  title: string | null;
  description: string | null;
  language: string | null;
  diagnosis: string | null;
  complexity: string | null;
  specimen: string | null;
};

type CaseImageRow = {
  image_url: string | null;
  type: string | null;
};

export type CaseRow = {
  id: number;
  created_at: string;
  cases_translations: CaseTranslationRow[] | null;
  images_cases: CaseImageRow[] | null;
};

export async function fetchCasesByLang(lang: ContentLang, limit = 12) {
  return supabaseServer
    .from("cases")
    .select(
      "id, created_at, cases_translations!inner(title, description, language, diagnosis, complexity, specimen, is_active), images_cases(image_url, type)",
    )
    .eq("cases_translations.language", lang)
    .eq("cases_translations.is_active", true)
    .order("created_at", { ascending: false })
    .limit(limit)
    .returns<CaseRow[]>();
}
