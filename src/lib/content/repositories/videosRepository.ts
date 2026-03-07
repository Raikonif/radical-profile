import { supabaseServer } from "@/lib/supabase/server";
import type { ContentLang } from "@/lib/content/types";

type VideoTranslationRow = {
  name: string | null;
  description: string | null;
  language: string | null;
};

export type VideoRow = {
  id: number;
  created_at: string;
  file_url: string | null;
  videos_translations: VideoTranslationRow[] | null;
};

export async function fetchVideosByLang(lang: ContentLang, limit = 20) {
  return supabaseServer
    .from("videos")
    .select(
      "id, created_at, file_url, videos_translations!inner(name, description, language, is_active)",
    )
    .eq("videos_translations.language", lang)
    .eq("videos_translations.is_active", true)
    .order("created_at", { ascending: false })
    .limit(limit)
    .returns<VideoRow[]>();
}
