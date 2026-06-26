import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { Locale, PrivacyContent } from "@/i18n/types";
import { privacyEn } from "@/i18n/content/privacy.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<PrivacyContent>> = {
  en: async () => privacyEn,
  pt: async () => (await import("@/i18n/content/privacy.pt")).privacyPt,
  es: async () => (await import("@/i18n/content/privacy.es")).privacyEs,
  fr: async () => (await import("@/i18n/content/privacy.fr")).privacyFr,
  de: async () => (await import("@/i18n/content/privacy.de")).privacyDe,
  it: async () => (await import("@/i18n/content/privacy.it")).privacyIt,
};

interface Props { locale?: Locale }

export function PrivacyPolicyPage({ locale = "en" }: Props) {
  const [t, setT] = useState<PrivacyContent>(privacyEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/privacy")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/privacy">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t.h1}</h1>
          <p className="text-sm text-muted-foreground">{t.updated}</p>
        </div>

        <div className="mb-8 rounded-2xl border border-border/60 bg-card/60 p-6">
          <p className="text-muted-foreground">{t.summary}</p>
        </div>

        <div className="space-y-12 text-muted-foreground leading-relaxed">
          {t.sections.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.h2}</h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="mb-3">{p}</p>
              ))}

              {section.items && (
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-6 mt-6 ml-4">
                  {section.subsections.map((sub, subIdx) => (
                    <div key={subIdx}>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{sub.h3}</h3>
                      {sub.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="mb-3">{p}</p>
                      ))}
                      {sub.items && (
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          {sub.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
