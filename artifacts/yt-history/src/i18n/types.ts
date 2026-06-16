export type Locale = "en" | "pt" | "es" | "fr" | "de" | "it";

export const SUPPORTED_LOCALES: Locale[] = ["en", "pt", "es", "fr", "de", "it"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  fr: "FR",
  de: "DE",
  it: "IT",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
};

/** Guide slugs — the URL path segment, always in English */
export type GuideSlug =
  | "how-to-export-youtube-watch-history"
  | "google-takeout-youtube-history"
  | "youtube-wrapped-alternative"
  | "youtube-recap-not-showing"
  | "is-youtube-watch-history-private";

export interface PageMeta {
  title: string;
  description: string;
}

export interface CtaBlock {
  h2: string;
  desc: string;
  upload: string;
  sample?: string;
  exportGuide?: string;
}

// ─── How to Export ───────────────────────────────────────────────

export interface HowToExportContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  timeNote: string;
  stepsH2: string;
  steps: Array<{ title: string; body: string }>;
  jsonVsHtmlH2: string;
  jsonTitle: string;
  jsonItems: string[];
  htmlTitle: string;
  htmlItems: string[];
  problemsH2: string;
  problems: Array<{ problem: string; solution: string }>;
  faqH2: string;
  faqs: Array<{ q: string; a: string }>;
  cta: CtaBlock;
}

// ─── Google Takeout ──────────────────────────────────────────────

export interface GoogleTakeoutContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  whatIsH2: string;
  whatIsPara1: string;
  whatIsPara2: string;
  filesH2: string;
  files: Array<{ filename: string; desc: string }>;
  dataContainsH2: string;
  dataContainsPre: string;
  dataContainsItems: string[];
  dataContainsPost: string;
  howToH2: string;
  howToSteps: string[];
  whatCanH2: string;
  whatCanPre: string;
  whatCanItems: string[];
  cta: CtaBlock & { uploadLabel: string };
}

// ─── YouTube Wrapped Alternative ─────────────────────────────────

export interface YoutubeWrappedContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  doesYtHaveH2: string;
  doesYtHavePara1: string;
  doesYtHavePara2: string;
  comparisonH2: string;
  comparisonRows: Array<[string, boolean | string, boolean | string]>;
  featuresH2: string;
  features: Array<{ title: string; desc: string }>;
  howToH2: string;
  howToSteps: Array<{ title: string; desc: string }>;
  cta: CtaBlock;
}

// ─── YouTube Recap Not Showing ───────────────────────────────────

export interface YoutubeRecapContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  requirementsH2: string;
  requirements: Array<{ title: string; desc: string }>;
  howToCheckH2: string;
  howToCheckSteps: string[];
  howToCheckNote: string;
  alternativeH2: string;
  alternativePara1: string;
  alternativePara2: string;
  alternativeItems: string[];
  cta: CtaBlock;
}

// ─── Is YouTube History Private ──────────────────────────────────

export interface YoutubePrivacyContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  whoCanSeeH2: string;
  whoCanSee: Array<{
    title: string;
    answer: string;
    positive: boolean;
    desc: string;
  }>;
  howToPrivacyH2: string;
  privacyOptions: Array<{ title: string; desc: string }>;
  isSafeH2: string;
  isSafeTitle: string;
  isSafeDesc: string;
  isSafeItems: string[];
  cta: CtaBlock;
}

// ─── About ───────────────────────────────────────────────────────

export interface AboutContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  features: Array<{ title: string; desc: string }>;
  whyH2: string;
  whyParas: string[];
  whatH2: string;
  whatItems: string[];
  howH2: string;
  howSteps: string[];
  cta: { analyze: string; sample: string; github: string };
}

// ─── FAQ ─────────────────────────────────────────────────────────

export interface FaqContent {
  meta: PageMeta;
  eyebrow: string;
  h1: string;
  intro: string;
  faqs: Array<{ q: string; a: string }>;
  stillHaveH2: string;
  stillHaveDesc: string;
  cta: { analyze: string; sample: string };
}
