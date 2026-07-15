import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { ExternalLink, FileJson, Archive } from "lucide-react";
import type { Locale, GoogleTakeoutContent } from "@/i18n/types";
import { googleTakeoutEn } from "@/i18n/content/google-takeout.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<GoogleTakeoutContent>> = {
  en: async () => googleTakeoutEn,
  pt: async () => (await import("@/i18n/content/google-takeout.pt")).googleTakeoutPt,
  es: async () => (await import("@/i18n/content/google-takeout.es")).googleTakeoutEs,
  fr: async () => (await import("@/i18n/content/google-takeout.fr")).googleTakeoutFr,
  de: async () => (await import("@/i18n/content/google-takeout.de")).googleTakeoutDe,
  it: async () => (await import("@/i18n/content/google-takeout.it")).googleTakeoutIt,
};

interface Props { locale?: Locale }

export function GoogleTakeoutGuide({ locale = "en" }: Props) {
  const [t, setT] = useState<GoogleTakeoutContent>(googleTakeoutEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/guide/google-takeout-youtube-history")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/guide/google-takeout-youtube-history">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.intro}</p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.whatIsH2}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.whatIsPara1}</p>
          <p className="text-muted-foreground leading-relaxed">{t.whatIsPara2}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.filesH2}</h2>
          <div className="space-y-4">
            {t.files.map((f) => (
              <div key={f.filename} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <div className="flex items-center gap-3 mb-2">
                  {f.filename.endsWith(".json") ? <FileJson className="w-5 h-5 text-primary shrink-0" /> : <Archive className="w-5 h-5 text-muted-foreground shrink-0" />}
                  <code className="text-sm font-mono bg-muted px-2 py-0.5 rounded">{f.filename}</code>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.dataContainsH2}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.dataContainsPre}</p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            {t.dataContainsItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary shrink-0 mt-0.5">→</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">{t.dataContainsPost}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.howToH2}</h2>
          <ol className="space-y-4">
            {t.howToSteps.map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mt-0.5">{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {i === 0 ? (
                    <>Go to{" "}<a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">takeout.google.com <ExternalLink className="w-3 h-3" /></a>{" "}and sign in.</>
                  ) : step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.whatCanH2}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{t.whatCanPre}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.whatCanItems.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground rounded-xl bg-card/60 border border-border/60 p-3">
                <span className="text-primary mt-0.5">✓</span>{item}
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
            {t.cta.sample && (
              <Link href={localePath(locale, "/sample")} className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
                {t.cta.sample}
              </Link>
            )}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
