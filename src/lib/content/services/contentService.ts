import type {
  CaseContent,
  ContentLang,
  PodcastContent,
  QueryResult,
  VideoContent,
} from "@/lib/content/types";
import {
  fetchCasesByLang,
  type CaseRow,
} from "@/lib/content/repositories/casesRepository";
import {
  fetchPodcastsByLang,
  type PodcastRow,
} from "@/lib/content/repositories/podcastsRepository";
import {
  fetchVideosByLang,
  type VideoRow,
} from "@/lib/content/repositories/videosRepository";

function fallbackLang(lang: ContentLang): ContentLang {
  return lang === "en" ? "es" : "en";
}

function mapCaseRow(row: CaseRow): CaseContent | null {
  const translation = row.cases_translations?.[0];
  if (!translation?.title) {
    return null;
  }

  const primaryImage =
    row.images_cases?.find((image) => image.type === "cover") ??
    row.images_cases?.[0];

  return {
    id: row.id,
    createdAt: row.created_at,
    title: translation.title,
    description: translation.description ?? "",
    diagnosis: translation.diagnosis ?? "",
    specimen: translation.specimen ?? "",
    complexity: translation.complexity ?? "",
    imageUrl: primaryImage?.image_url ?? null,
  };
}

function mapPodcastRow(row: PodcastRow): PodcastContent | null {
  const translation = row.podcasts_translations?.[0];
  if (!translation?.title) {
    return null;
  }

  return {
    id: row.id,
    createdAt: row.created_at,
    title: translation.title,
    body: translation.body ?? "",
    slug: translation.slug ?? "",
    fileUrl: row.file_url,
  };
}

function mapVideoRow(row: VideoRow): VideoContent | null {
  const translation = row.videos_translations?.[0];
  if (!translation?.name) {
    return null;
  }

  return {
    id: row.id,
    createdAt: row.created_at,
    name: translation.name,
    description: translation.description ?? "",
    fileUrl: row.file_url,
  };
}

async function queryWithFallback<T, R>(params: {
  lang: ContentLang;
  query: (lang: ContentLang) => Promise<{ data: R[] | null; error: { message: string } | null }>;
  mapper: (row: R) => T | null;
}): Promise<QueryResult<T>> {
  const { lang, query, mapper } = params;

  const first = await query(lang);
  if (first.error) {
    throw new Error(first.error.message);
  }

  const firstItems = (first.data ?? []).map(mapper).filter((item): item is T => item !== null);
  if (firstItems.length > 0) {
    return { items: firstItems, sourceLang: lang };
  }

  const secondaryLang = fallbackLang(lang);
  const second = await query(secondaryLang);
  if (second.error) {
    throw new Error(second.error.message);
  }

  return {
    items: (second.data ?? []).map(mapper).filter((item): item is T => item !== null),
    sourceLang: secondaryLang,
  };
}

export async function getCasesContent(lang: ContentLang, limit = 12) {
  return queryWithFallback<CaseContent, CaseRow>({
    lang,
    query: (queryLang) => fetchCasesByLang(queryLang, limit),
    mapper: mapCaseRow,
  });
}

export async function getPodcastsContent(lang: ContentLang, limit = 20) {
  return queryWithFallback<PodcastContent, PodcastRow>({
    lang,
    query: (queryLang) => fetchPodcastsByLang(queryLang, limit),
    mapper: mapPodcastRow,
  });
}

export async function getVideosContent(lang: ContentLang, limit = 20) {
  return queryWithFallback<VideoContent, VideoRow>({
    lang,
    query: (queryLang) => fetchVideosByLang(queryLang, limit),
    mapper: mapVideoRow,
  });
}
