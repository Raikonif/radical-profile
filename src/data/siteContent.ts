export type Lang = "es" | "en";

export type LocalizedText = Record<Lang, string>;

export type CaseItem = {
  title: LocalizedText;
  summary: LocalizedText;
  diagnosis: LocalizedText;
  image: string;
};

export type SchemaItem = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
};

export type OutreachItem = {
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
};

export type PodcastItem = {
  title: LocalizedText;
  description: LocalizedText;
  length: string;
};

export type VideoItem = {
  title: LocalizedText;
  description: LocalizedText;
  embedUrl: string;
};

export type ContactInfo = {
  email: string;
  city: LocalizedText;
  availability: LocalizedText;
};

export const uiText = {
  siteTitle: { es: "Dra. Nandy Calle Peñaranda", en: "Nandy Calle Peñaranda" },
  role: {
    es: "Especialista en Anatomia Patologica",
    en: "Pathology Specialist",
  },
  tagline: {
    es: "Blog personal y profesional sobre diagnostico, docencia y divulgacion medica.",
    en: "Personal and professional blog on diagnosis, teaching, and medical communication.",
  },
  intro: {
    es: "Trabajo con enfoque en precision diagnostica, formacion continua y comunicacion clara para pacientes y colegas.",
    en: "I work with a focus on diagnostic precision, continuous learning, and clear communication for patients and peers.",
  },
  ctaCases: { es: "Ver casos", en: "View cases" },
  ctaContact: { es: "Contactar", en: "Get in touch" },
  themeLabel: { es: "Tema", en: "Theme" },
  lightLabel: { es: "Claro", en: "Light" },
  darkLabel: { es: "Oscuro", en: "Dark" },
  languageLabel: { es: "Idioma", en: "Language" },
  sections: {
    inicio: { es: "Inicio", en: "Home" },
    casos: { es: "Casos", en: "Cases" },
    esquemas: { es: "Esquemas", en: "Schematics" },
    divulgacion: { es: "Divulgacion", en: "Outreach" },
    podcasts: { es: "Podcasts", en: "Podcasts" },
    videos: { es: "Videos", en: "Videos" },
    contacto: { es: "Contacto", en: "Contact" },
  },
  caseSubtitle: {
    es: "Casos seleccionados para aprendizaje clinico y patologico.",
    en: "Selected cases for clinical and pathological learning.",
  },
  schemaSubtitle: {
    es: "Mapas visuales para protocolos y patrones histologicos.",
    en: "Visual maps for protocols and histological patterns.",
  },
  outreachSubtitle: {
    es: "Contenido de divulgacion para publico general y comunidad medica.",
    en: "Outreach content for the general public and medical community.",
  },
  podcastSubtitle: {
    es: "Conversaciones sobre diagnostico, liderazgo y ciencia aplicada.",
    en: "Conversations on diagnosis, leadership, and applied science.",
  },
  videoSubtitle: {
    es: "Clases breves y analisis de casos en formato audiovisual.",
    en: "Short classes and case analysis in audiovisual format.",
  },
  contactSubtitle: {
    es: "Consultas profesionales, colaboraciones y formacion.",
    en: "Professional inquiries, collaborations, and teaching.",
  },
  diagnosisLabel: { es: "Diagnostico", en: "Diagnosis" },
  publishedLabel: { es: "Publicado", en: "Published" },
  durationLabel: { es: "Duracion", en: "Duration" },
  emailLabel: { es: "Correo", en: "Email" },
  cityLabel: { es: "Ciudad", en: "City" },
  availabilityLabel: { es: "Disponibilidad", en: "Availability" },
  footer: {
    es: "Contenido de demostracion con datos simulados.",
    en: "Demonstration content with mocked data.",
  },
} as const;

export const cases: CaseItem[] = [
  {
    title: {
      es: "Tumor de mama triple negativo",
      en: "Triple-negative breast tumor",
    },
    summary: {
      es: "Revision de biomarcadores y correlacion histologica en paciente de 42 anos.",
      en: "Biomarker review and histological correlation in a 42-year-old patient.",
    },
    diagnosis: {
      es: "Carcinoma ductal invasivo de alto grado",
      en: "High-grade invasive ductal carcinoma",
    },
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: {
      es: "Patron inflamatorio gastrointestinal",
      en: "Gastrointestinal inflammatory pattern",
    },
    summary: {
      es: "Analisis de biopsia con enfoque diferencial entre colitis cronica y autoinmune.",
      en: "Biopsy analysis focusing on differential diagnosis between chronic and autoimmune colitis.",
    },
    diagnosis: {
      es: "Colitis cronica activa",
      en: "Chronic active colitis",
    },
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: {
      es: "Neoplasia tiroidea encapsulada",
      en: "Encapsulated thyroid neoplasia",
    },
    summary: {
      es: "Discusion sobre criterios nucleares y reporte estandarizado.",
      en: "Discussion on nuclear criteria and standardized reporting.",
    },
    diagnosis: {
      es: "Neoplasia folicular no invasiva",
      en: "Non-invasive follicular neoplasia",
    },
    image:
      "https://images.unsplash.com/photo-1579154203451-2f50f2f4c5e0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const schematics: SchemaItem[] = [
  {
    title: {
      es: "Algoritmo para lesiones cervicales",
      en: "Algorithm for cervical lesions",
    },
    description: {
      es: "Ruta de evaluacion citologica y confirmacion histopatologica.",
      en: "Pathway for cytological evaluation and histopathological confirmation.",
    },
    image:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: {
      es: "Mapa de decision en biopsia pulmonar",
      en: "Decision map for lung biopsy",
    },
    description: {
      es: "Esquema para clasificacion de patrones y paneles IHQ.",
      en: "Framework for pattern classification and IHC panels.",
    },
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
  },
];

export const outreachPosts: OutreachItem[] = [
  {
    title: {
      es: "Como leer un informe de biopsia sin perderse",
      en: "How to read a biopsy report without getting lost",
    },
    excerpt: {
      es: "Guia para pacientes y familiares sobre terminos frecuentes en anatomia patologica.",
      en: "Guide for patients and families about frequent terms in pathology reports.",
    },
    date: "2026-01-19",
  },
  {
    title: {
      es: "Prevencion y tamizaje: que preguntas hacer en consulta",
      en: "Prevention and screening: key questions for your appointment",
    },
    excerpt: {
      es: "Checklist util para consultas de seguimiento y toma de decisiones.",
      en: "Useful checklist for follow-up visits and decision-making.",
    },
    date: "2025-12-11",
  },
];

export const podcasts: PodcastItem[] = [
  {
    title: {
      es: "Microscopio Abierto - Episodio 12",
      en: "Open Microscope - Episode 12",
    },
    description: {
      es: "Errores frecuentes en muestras pequenas y como evitarlos.",
      en: "Frequent pitfalls in small specimens and how to avoid them.",
    },
    length: "34 min",
  },
  {
    title: {
      es: "Mujeres en Ciencia Clinica - Episodio 5",
      en: "Women in Clinical Science - Episode 5",
    },
    description: {
      es: "Liderazgo femenino en laboratorios y equipos multidisciplinarios.",
      en: "Female leadership in labs and multidisciplinary teams.",
    },
    length: "28 min",
  },
];

export const videos: VideoItem[] = [
  {
    title: {
      es: "Patrones celulares: guia rapida",
      en: "Cellular patterns: quick guide",
    },
    description: {
      es: "Repaso visual para residentes y medicos generales.",
      en: "Visual review for residents and general practitioners.",
    },
    embedUrl: "https://www.youtube.com/embed/zpOULjyy-n8",
  },
  {
    title: {
      es: "Calidad preanalitica en laboratorio",
      en: "Pre-analytical quality in the lab",
    },
    description: {
      es: "Practicas clave para mejorar la calidad diagnostica.",
      en: "Key practices to improve diagnostic quality.",
    },
    embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];

export const contactInfo: ContactInfo = {
  email: "valeria.cifuentes@pathology-example.com",
  city: { es: "Madrid, Espana", en: "Madrid, Spain" },
  availability: {
    es: "Lunes a viernes, 09:00 - 17:00 (CET)",
    en: "Monday to Friday, 09:00 - 17:00 (CET)",
  },
};
