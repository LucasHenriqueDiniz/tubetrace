import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import type { Locale, YoutubeRecapContent } from "@/i18n/types";
import { youtubeRecapEn } from "@/i18n/content/recap-not-showing.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<YoutubeRecapContent>> = {
  en: async () => youtubeRecapEn,
  pt: async () => (await import("@/i18n/content/recap-not-showing.pt")).youtubeRecapPt,
  es: async () => (await import("@/i18n/content/recap-not-showing.es")).youtubeRecapEs,
  fr: async () => (await import("@/i18n/content/recap-not-showing.fr")).youtubeRecapFr,
  de: async () => (await import("@/i18n/content/recap-not-showing.de")).youtubeRecapDe,
  it: async () => (await import("@/i18n/content/recap-not-showing.it")).youtubeRecapIt,
};

interface Props { locale?: Locale }

export function YoutubeRecapNotShowing({ locale = "en" }: Props) {
  const [t, setT] = useState<YoutubeRecapContent>(youtubeRecapEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/guide/youtube-recap-not-showing")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/guide/youtube-recap-not-showing">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.intro}</p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.requirementsH2}</h2>
          <div className="space-y-4">
            {t.requirements.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />{title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.howToCheckH2}</h2>
          <ol className="space-y-4">
            {t.howToCheckSteps.map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">{t.howToCheckNote}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.alternativeH2}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.alternativePara1}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{t.alternativePara2}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.alternativeItems.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.faqH2}</h2>
          <div className="space-y-4">
            {t.faqs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">{t.cta.h2}</h2>
          <p className="text-muted-foreground mb-6">{t.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={localePath(locale, "/")} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              {t.cta.upload}
            </Link>
            {t.cta.exportGuide && (
              <Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
                {t.cta.exportGuide}
              </Link>
            )}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
