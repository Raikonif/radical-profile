import type { Lang } from "@/data/siteContent";

export type ContentLang = Lang;

export type CaseContent = {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  diagnosis: string;
  specimen: string;
  complexity: string;
  imageUrl: string | null;
};

export type PodcastContent = {
  id: number;
  createdAt: string;
  title: string;
  body: string;
  slug: string;
  fileUrl: string | null;
};

export type VideoContent = {
  id: number;
  createdAt: string;
  name: string;
  description: string;
  fileUrl: string | null;
};

export type QueryResult<T> = {
  items: T[];
  sourceLang: ContentLang;
};
