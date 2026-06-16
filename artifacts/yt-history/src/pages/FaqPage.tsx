import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import type { Locale, FaqContent } from "@/i18n/types";
import { faqEn } from "@/i18n/content/faq.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<FaqContent>> = {
  en: async () => faqEn,
  pt: async () => (await import("@/i18n/content/faq.pt")).faqPt,
  es: async () => (await import("@/i18n/content/faq.es")).faqEs,
  fr: async () => (await import("@/i18n/content/faq.fr")).faqFr,
};

interface Props { locale?: Locale }

export function FaqPage({ locale = "en" }: Props) {
  const [t, setT] = useState<FaqContent>(faqEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/faq")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/faq">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.intro}</p>
        </div>

        <div className="space-y-4 mb-14">
          {t.faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <h2 className="font-bold text-lg mb-3">{q}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 mb-8">
          <h2 className="font-bold mb-2">{t.stillHaveH2}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {t.stillHaveDesc.split("export guide")[0]}
            <Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="text-primary hover:underline">
              {locale === "pt" ? "guia de exportação" : locale === "es" ? "guía de exportación" : locale === "fr" ? "guide d'export" : "export guide"}
            </Link>
            {t.stillHaveDesc.split("export guide")[1] || "."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={localePath(locale, "/")} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            {t.cta.analyze}
          </Link>
          {t.cta.sample && (
            <Link href={localePath(locale, "/sample")} className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              {t.cta.sample}
            </Link>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
