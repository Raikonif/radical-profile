import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderSlot, r as renderTemplate, h as createAstro, l as renderComponent, n as renderHead } from '../chunks/astro/server_0T8_lVYa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$a = createAstro();
const $$SectionShell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SectionShell;
  const { id, title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"${addAttribute(id, "id")}> <div class="section-head"> <h2>${title}</h2> <p>${subtitle}</p> </div> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/SectionShell.astro", void 0);

const $$Astro$9 = createAstro();
const $$CasesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CasesSection;
  const { lang, title, subtitle, diagnosisLabel, items } = Astro2.props;
  const t = (entry) => entry[lang];
  return renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "id": "casos", "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-three"> ${items.map((item) => renderTemplate`<article class="card"> <img${addAttribute(item.image, "src")}${addAttribute(t(item.title), "alt")} loading="lazy"> <div class="card-body"> <h3>${t(item.title)}</h3> <p>${t(item.summary)}</p> <p class="meta"> <strong>${diagnosisLabel}:</strong> ${t(item.diagnosis)} </p> </div> </article>`)} </div> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/CasesSection.astro", void 0);

const $$Astro$8 = createAstro();
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const { lang, title, subtitle, emailLabel, cityLabel, availabilityLabel, info } = Astro2.props;
  const t = (entry) => entry[lang];
  return renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "id": "contacto", "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact"> <article class="contact-item"> <strong>${emailLabel}</strong> <a${addAttribute(`mailto:${info.email}`, "href")}>${info.email}</a> </article> <article class="contact-item"> <strong>${cityLabel}</strong> <span>${t(info.city)}</span> </article> <article class="contact-item"> <strong>${availabilityLabel}</strong> <span>${t(info.availability)}</span> </article> </div> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/ContactSection.astro", void 0);

const $$Astro$7 = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { role, tagline, intro, ctaCases, ctaContact } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="inicio"> <div class="hero-grid"> <div class="hero-copy"> <p class="meta">${role}</p> <h1>${tagline}</h1> <p>${intro}</p> <div class="hero-actions"> <a class="button button-primary" href="#casos">${ctaCases}</a> <a class="button button-secondary" href="#contacto">${ctaContact}</a> </div> </div> <div class="portrait"> <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80" alt="Pathology specialist portrait" loading="eager"> </div> </div> </section>`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/HeroSection.astro", void 0);

const $$Astro$6 = createAstro();
const $$OutreachSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OutreachSection;
  const { lang, title, subtitle, publishedLabel, items } = Astro2.props;
  const t = (entry) => entry[lang];
  const dateFormat = new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "id": "divulgacion", "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-two"> ${items.map((post) => renderTemplate`<article class="card"> <div class="card-body"> <h3>${t(post.title)}</h3> <p>${t(post.excerpt)}</p> <p class="meta"> <strong>${publishedLabel}:</strong> ${dateFormat.format(new Date(post.date))} </p> </div> </article>`)} </div> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/OutreachSection.astro", void 0);

const $$Astro$5 = createAstro();
const $$PodcastsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PodcastsSection;
  const { lang, title, subtitle, durationLabel, items } = Astro2.props;
  const t = (entry) => entry[lang];
  return renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "id": "podcasts", "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-two"> ${items.map((podcast) => renderTemplate`<article class="card"> <div class="card-body"> <h3>${t(podcast.title)}</h3> <p>${t(podcast.description)}</p> <p class="meta"> <strong>${durationLabel}:</strong> ${podcast.length} </p> </div> </article>`)} </div> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/PodcastsSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$SchematicsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SchematicsSection;
  const { lang, title, subtitle, items } = Astro2.props;
  const t = (entry) => entry[lang];
  return renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "id": "esquemas", "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-two"> ${items.map((item) => renderTemplate`<article class="card"> <img${addAttribute(item.image, "src")}${addAttribute(t(item.title), "alt")} loading="lazy"> <div class="card-body"> <h3>${t(item.title)}</h3> <p>${t(item.description)}</p> </div> </article>`)} </div> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/SchematicsSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { lang, siteTitle, languageLabel, themeLabel, lightLabel, darkLabel, sections } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="container header-inner"> <div class="brand">${siteTitle}</div> <nav> <ul> <li><a href="#inicio">${sections.inicio}</a></li> <li><a href="#casos">${sections.casos}</a></li> <li><a href="#esquemas">${sections.esquemas}</a></li> <li><a href="#divulgacion">${sections.divulgacion}</a></li> <li><a href="#podcasts">${sections.podcasts}</a></li> <li><a href="#videos">${sections.videos}</a></li> <li><a href="#contacto">${sections.contacto}</a></li> </ul> </nav> <div class="controls"> <span class="pill">${languageLabel}</span> <a${addAttribute(`pill ${lang === "es" ? "is-active" : ""}`, "class")} href="/?lang=es">ES</a> <a${addAttribute(`pill ${lang === "en" ? "is-active" : ""}`, "class")} href="/?lang=en">EN</a> <button id="theme-toggle" class="pill" type="button"${addAttribute(lightLabel, "data-light")}${addAttribute(darkLabel, "data-dark")}${addAttribute(themeLabel, "aria-label")}> ${themeLabel} </button> </div> </div> </header>`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/SiteHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$VideosSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VideosSection;
  const { lang, title, subtitle, items } = Astro2.props;
  const t = (entry) => entry[lang];
  return renderTemplate`${renderComponent($$result, "SectionShell", $$SectionShell, { "id": "videos", "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-two"> ${items.map((video) => renderTemplate`<article class="card"> <iframe class="video"${addAttribute(video.embedUrl, "src")}${addAttribute(t(video.title), "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div class="card-body"> <h3>${t(video.title)}</h3> <p>${t(video.description)}</p> </div> </article>`)} </div> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/components/VideosSection.astro", void 0);

const uiText = {
  siteTitle: { es: "Dra. Nandy Calle Peñaranda", en: "Nandy Calle Peñaranda" },
  role: {
    es: "Especialista en Anatomia Patologica",
    en: "Pathology Specialist"
  },
  tagline: {
    es: "Blog personal y profesional sobre diagnostico, docencia y divulgacion medica.",
    en: "Personal and professional blog on diagnosis, teaching, and medical communication."
  },
  intro: {
    es: "Trabajo con enfoque en precision diagnostica, formacion continua y comunicacion clara para pacientes y colegas.",
    en: "I work with a focus on diagnostic precision, continuous learning, and clear communication for patients and peers."
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
    contacto: { es: "Contacto", en: "Contact" }
  },
  caseSubtitle: {
    es: "Casos seleccionados para aprendizaje clinico y patologico.",
    en: "Selected cases for clinical and pathological learning."
  },
  schemaSubtitle: {
    es: "Mapas visuales para protocolos y patrones histologicos.",
    en: "Visual maps for protocols and histological patterns."
  },
  outreachSubtitle: {
    es: "Contenido de divulgacion para publico general y comunidad medica.",
    en: "Outreach content for the general public and medical community."
  },
  podcastSubtitle: {
    es: "Conversaciones sobre diagnostico, liderazgo y ciencia aplicada.",
    en: "Conversations on diagnosis, leadership, and applied science."
  },
  videoSubtitle: {
    es: "Clases breves y analisis de casos en formato audiovisual.",
    en: "Short classes and case analysis in audiovisual format."
  },
  contactSubtitle: {
    es: "Consultas profesionales, colaboraciones y formacion.",
    en: "Professional inquiries, collaborations, and teaching."
  },
  diagnosisLabel: { es: "Diagnostico", en: "Diagnosis" },
  publishedLabel: { es: "Publicado", en: "Published" },
  durationLabel: { es: "Duracion", en: "Duration" },
  emailLabel: { es: "Correo", en: "Email" },
  cityLabel: { es: "Ciudad", en: "City" },
  availabilityLabel: { es: "Disponibilidad", en: "Availability" },
  footer: {
    es: "Contenido de demostracion con datos simulados.",
    en: "Demonstration content with mocked data."
  }
};
const cases = [
  {
    title: {
      es: "Tumor de mama triple negativo",
      en: "Triple-negative breast tumor"
    },
    summary: {
      es: "Revision de biomarcadores y correlacion histologica en paciente de 42 anos.",
      en: "Biomarker review and histological correlation in a 42-year-old patient."
    },
    diagnosis: {
      es: "Carcinoma ductal invasivo de alto grado",
      en: "High-grade invasive ductal carcinoma"
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: {
      es: "Patron inflamatorio gastrointestinal",
      en: "Gastrointestinal inflammatory pattern"
    },
    summary: {
      es: "Analisis de biopsia con enfoque diferencial entre colitis cronica y autoinmune.",
      en: "Biopsy analysis focusing on differential diagnosis between chronic and autoimmune colitis."
    },
    diagnosis: {
      es: "Colitis cronica activa",
      en: "Chronic active colitis"
    },
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: {
      es: "Neoplasia tiroidea encapsulada",
      en: "Encapsulated thyroid neoplasia"
    },
    summary: {
      es: "Discusion sobre criterios nucleares y reporte estandarizado.",
      en: "Discussion on nuclear criteria and standardized reporting."
    },
    diagnosis: {
      es: "Neoplasia folicular no invasiva",
      en: "Non-invasive follicular neoplasia"
    },
    image: "https://images.unsplash.com/photo-1579154203451-2f50f2f4c5e0?auto=format&fit=crop&w=1200&q=80"
  }
];
const schematics = [
  {
    title: {
      es: "Algoritmo para lesiones cervicales",
      en: "Algorithm for cervical lesions"
    },
    description: {
      es: "Ruta de evaluacion citologica y confirmacion histopatologica.",
      en: "Pathway for cytological evaluation and histopathological confirmation."
    },
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: {
      es: "Mapa de decision en biopsia pulmonar",
      en: "Decision map for lung biopsy"
    },
    description: {
      es: "Esquema para clasificacion de patrones y paneles IHQ.",
      en: "Framework for pattern classification and IHC panels."
    },
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80"
  }
];
const outreachPosts = [
  {
    title: {
      es: "Como leer un informe de biopsia sin perderse",
      en: "How to read a biopsy report without getting lost"
    },
    excerpt: {
      es: "Guia para pacientes y familiares sobre terminos frecuentes en anatomia patologica.",
      en: "Guide for patients and families about frequent terms in pathology reports."
    },
    date: "2026-01-19"
  },
  {
    title: {
      es: "Prevencion y tamizaje: que preguntas hacer en consulta",
      en: "Prevention and screening: key questions for your appointment"
    },
    excerpt: {
      es: "Checklist util para consultas de seguimiento y toma de decisiones.",
      en: "Useful checklist for follow-up visits and decision-making."
    },
    date: "2025-12-11"
  }
];
const podcasts = [
  {
    title: {
      es: "Microscopio Abierto - Episodio 12",
      en: "Open Microscope - Episode 12"
    },
    description: {
      es: "Errores frecuentes en muestras pequenas y como evitarlos.",
      en: "Frequent pitfalls in small specimens and how to avoid them."
    },
    length: "34 min"
  },
  {
    title: {
      es: "Mujeres en Ciencia Clinica - Episodio 5",
      en: "Women in Clinical Science - Episode 5"
    },
    description: {
      es: "Liderazgo femenino en laboratorios y equipos multidisciplinarios.",
      en: "Female leadership in labs and multidisciplinary teams."
    },
    length: "28 min"
  }
];
const videos = [
  {
    title: {
      es: "Patrones celulares: guia rapida",
      en: "Cellular patterns: quick guide"
    },
    description: {
      es: "Repaso visual para residentes y medicos generales.",
      en: "Visual review for residents and general practitioners."
    },
    embedUrl: "https://www.youtube.com/embed/zpOULjyy-n8"
  },
  {
    title: {
      es: "Calidad preanalitica en laboratorio",
      en: "Pre-analytical quality in the lab"
    },
    description: {
      es: "Practicas clave para mejorar la calidad diagnostica.",
      en: "Key practices to improve diagnostic quality."
    },
    embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ"
  }
];
const contactInfo = {
  email: "valeria.cifuentes@pathology-example.com",
  city: { es: "Madrid, Espana", en: "Madrid, Spain" },
  availability: {
    es: "Lunes a viernes, 09:00 - 17:00 (CET)",
    en: "Monday to Friday, 09:00 - 17:00 (CET)"
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { lang, title, description, footerText } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description"', "><title>", "</title>", '</head> <body> <script>\n      const storedTheme = localStorage.getItem("theme");\n      if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script> ', ' <footer> <div class="container">', '</div> </footer> <script>\n      const root = document.documentElement;\n      const toggle = document.getElementById("theme-toggle");\n\n      const setThemeLabel = () => {\n        if (!toggle) return;\n        const dark = root.classList.contains("dark");\n        toggle.textContent = `${toggle.dataset.light}/${toggle.dataset.dark}: ${dark ? toggle.dataset.dark : toggle.dataset.light}`;\n      };\n\n      toggle?.addEventListener("click", () => {\n        root.classList.toggle("dark");\n        const dark = root.classList.contains("dark");\n        localStorage.setItem("theme", dark ? "dark" : "light");\n        setThemeLabel();\n      });\n\n      setThemeLabel();\n    <\/script> </body> </html>'], ["<html", '> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description"', "><title>", "</title>", '</head> <body> <script>\n      const storedTheme = localStorage.getItem("theme");\n      if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script> ', ' <footer> <div class="container">', '</div> </footer> <script>\n      const root = document.documentElement;\n      const toggle = document.getElementById("theme-toggle");\n\n      const setThemeLabel = () => {\n        if (!toggle) return;\n        const dark = root.classList.contains("dark");\n        toggle.textContent = \\`\\${toggle.dataset.light}/\\${toggle.dataset.dark}: \\${dark ? toggle.dataset.dark : toggle.dataset.light}\\`;\n      };\n\n      toggle?.addEventListener("click", () => {\n        root.classList.toggle("dark");\n        const dark = root.classList.contains("dark");\n        localStorage.setItem("theme", dark ? "dark" : "light");\n        setThemeLabel();\n      });\n\n      setThemeLabel();\n    <\/script> </body> </html>'])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), footerText);
}, "D:/Projects/pandy-goma/radical-profile/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const queryLang = Astro2.url.searchParams.get("lang");
  const cookieLang = Astro2.cookies.get("lang")?.value;
  const selectedLang = queryLang === "es" || queryLang === "en" ? queryLang : cookieLang;
  const lang = selectedLang ?? "es";
  Astro2.cookies.set("lang", lang, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
  });
  const t = (entry) => entry[lang];
  const sectionLabels = {
    inicio: t(uiText.sections.inicio),
    casos: t(uiText.sections.casos),
    esquemas: t(uiText.sections.esquemas),
    divulgacion: t(uiText.sections.divulgacion),
    podcasts: t(uiText.sections.podcasts),
    videos: t(uiText.sections.videos),
    contacto: t(uiText.sections.contacto)
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": `${t(uiText.siteTitle)} | ${t(uiText.role)}`, "description": t(uiText.tagline), "footerText": t(uiText.footer) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SiteHeader", $$SiteHeader, { "lang": lang, "siteTitle": t(uiText.siteTitle), "sections": sectionLabels, "languageLabel": t(uiText.languageLabel), "themeLabel": t(uiText.themeLabel), "lightLabel": t(uiText.lightLabel), "darkLabel": t(uiText.darkLabel) })} ${maybeRenderHead()}<main class="container"> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "role": t(uiText.role), "tagline": t(uiText.tagline), "intro": t(uiText.intro), "ctaCases": t(uiText.ctaCases), "ctaContact": t(uiText.ctaContact) })} ${renderComponent($$result2, "CasesSection", $$CasesSection, { "lang": lang, "title": t(uiText.sections.casos), "subtitle": t(uiText.caseSubtitle), "diagnosisLabel": t(uiText.diagnosisLabel), "items": cases })} ${renderComponent($$result2, "SchematicsSection", $$SchematicsSection, { "lang": lang, "title": t(uiText.sections.esquemas), "subtitle": t(uiText.schemaSubtitle), "items": schematics })} ${renderComponent($$result2, "OutreachSection", $$OutreachSection, { "lang": lang, "title": t(uiText.sections.divulgacion), "subtitle": t(uiText.outreachSubtitle), "publishedLabel": t(uiText.publishedLabel), "items": outreachPosts })} ${renderComponent($$result2, "PodcastsSection", $$PodcastsSection, { "lang": lang, "title": t(uiText.sections.podcasts), "subtitle": t(uiText.podcastSubtitle), "durationLabel": t(uiText.durationLabel), "items": podcasts })} ${renderComponent($$result2, "VideosSection", $$VideosSection, { "lang": lang, "title": t(uiText.sections.videos), "subtitle": t(uiText.videoSubtitle), "items": videos })} ${renderComponent($$result2, "ContactSection", $$ContactSection, { "lang": lang, "title": t(uiText.sections.contacto), "subtitle": t(uiText.contactSubtitle), "emailLabel": t(uiText.emailLabel), "cityLabel": t(uiText.cityLabel), "availabilityLabel": t(uiText.availabilityLabel), "info": contactInfo })} </main> ` })}`;
}, "D:/Projects/pandy-goma/radical-profile/src/pages/index.astro", void 0);

const $$file = "D:/Projects/pandy-goma/radical-profile/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
