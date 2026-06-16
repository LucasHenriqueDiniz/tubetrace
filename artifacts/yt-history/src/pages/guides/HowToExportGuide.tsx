import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { ExternalLink, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import type { Locale } from "@/i18n/types";
import { howToExportEn } from "@/i18n/content/how-to-export.en";
import { localePath } from "@/i18n/utils";

const contentMap = {
  en: howToExportEn,
  pt: async () => (await import("@/i18n/content/how-to-export.pt")).howToExportPt,
  es: async () => (await import("@/i18n/content/how-to-export.es")).howToExportEs,
  fr: async () => (await import("@/i18n/content/how-to-export.fr")).howToExportFr,
  de: async () => (await import("@/i18n/content/how-to-export.de")).howToExportDe,
  it: async () => (await import("@/i18n/content/how-to-export.it")).howToExportIt,
};

import { useState, useEffect } from "react";
import type { HowToExportContent } from "@/i18n/types";

interface Props {
  locale?: Locale;
}

export function HowToExportGuide({ locale = "en" }: Props) {
  const [t, setT] = useState<HowToExportContent>(howToExportEn);

  useEffect(() => {
    if (locale === "en") {
      setT(howToExportEn);
    } else {
      contentMap[locale]().then(setT);
    }
  }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/guide/how-to-export-youtube-watch-history")}`;

  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/guide/how-to-export-youtube-watch-history">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-4">
          <Link href={localePath(locale, "/faq")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← FAQ
          </Link>
        </div>

        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            <strong>Quick answer:</strong>{" "}
            {t.intro.replace(/^Quick answer:\s*/i, "")}
          </p>
        </header>

        <div className="flex items-center gap-3 rounded-2xl bg-card/60 border border-border/60 p-4 mb-10">
          <Clock className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">⏱</strong> {t.timeNote}
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.stepsH2}</h2>
          <ol className="space-y-6">
            {t.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {i === 0 && (
                      <>
                        {step.body.split("takeout.google.com")[0]}
                        <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                          takeout.google.com <ExternalLink className="w-3 h-3" />
                        </a>
                        {step.body.split("takeout.google.com")[1]}
                      </>
                    )}
                    {i === 7 && (
                      <>
                        {step.body.split("TubeTrace home page")[0]}
                        <Link href={localePath(locale, "/")} className="text-primary hover:underline">TubeTrace home page</Link>
                        {step.body.split("TubeTrace home page")[1]}
                      </>
                    )}
                    {i !== 0 && i !== 7 && step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.jsonVsHtmlH2}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <h3 className="font-bold mb-2 text-primary">{t.jsonTitle}</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {t.jsonItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <h3 className="font-bold mb-2">{t.htmlTitle}</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {t.htmlItems.map((item, i) => (
                  <li key={item} className="flex gap-2">
                    {i < 2
                      ? <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      : <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    } {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.problemsH2}</h2>
          <div className="space-y-4">
            {t.problems.map(({ problem, solution }) => (
              <div key={problem} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0" />
                  {problem}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{solution}</p>
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
            <Link href={localePath(locale, "/sample")} className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              {t.cta.sample}
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
