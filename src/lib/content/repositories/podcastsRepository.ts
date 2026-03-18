import { supabaseServer } from "@/lib/supabase/server";
import type { ContentLang } from "@/lib/content/types";

type PodcastTranslationRow = {
  title: string | null;
  body: string | null;
  slug: string | null;
};

export type PodcastRow = {
  id: number;
  created_at: string;
  file_url: string | null;
  podcasts_translations: PodcastTranslationRow[] | null;
};

export async function fetchPodcastsByLang(lang: ContentLang, limit = 20) {
  return supabaseServer
    .from("podcasts")
    .select(
      "id, created_at, file_url, podcasts_translations!podcasts_translations_podcast_id_fkey(title, body, slug)",
    )
    .eq("is_active", true)
    .eq("podcasts_translations.language", lang)
    .eq("podcasts_translations.is_active", true)
    .order("created_at", { ascending: false })
    .limit(limit)
    .returns<PodcastRow[]>();
}
