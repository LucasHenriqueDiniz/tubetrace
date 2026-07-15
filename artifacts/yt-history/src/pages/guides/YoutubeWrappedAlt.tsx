import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { CheckCircle2, X } from "lucide-react";
import type { Locale, YoutubeWrappedContent } from "@/i18n/types";
import { youtubeWrappedEn } from "@/i18n/content/youtube-wrapped.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<YoutubeWrappedContent>> = {
  en: async () => youtubeWrappedEn,
  pt: async () => (await import("@/i18n/content/youtube-wrapped.pt")).youtubeWrappedPt,
  es: async () => (await import("@/i18n/content/youtube-wrapped.es")).youtubeWrappedEs,
  fr: async () => (await import("@/i18n/content/youtube-wrapped.fr")).youtubeWrappedFr,
  de: async () => (await import("@/i18n/content/youtube-wrapped.de")).youtubeWrappedDe,
  it: async () => (await import("@/i18n/content/youtube-wrapped.it")).youtubeWrappedIt,
};

interface Props { locale?: Locale }

export function YoutubeWrappedAlt({ locale = "en" }: Props) {
  const [t, setT] = useState<YoutubeWrappedContent>(youtubeWrappedEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/guide/youtube-wrapped-alternative")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/guide/youtube-wrapped-alternative">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.intro}</p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.doesYtHaveH2}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.doesYtHavePara1}</p>
          <p className="text-muted-foreground leading-relaxed">{t.doesYtHavePara2}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.comparisonH2}</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">TubeTrace</th>
                  <th className="text-center p-4 font-semibold">YouTube Recap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {t.comparisonRows.map(([feat, tt, yt]) => (
                  <tr key={String(feat)} className="text-muted-foreground">
                    <td className="p-4">{feat}</td>
                    <td className="p-4 text-center">
                      {tt === true ? <CheckCircle2 className="w-4 h-4 text-primary mx-auto" /> : typeof tt === "string" ? tt : <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {yt === true ? <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" /> : typeof yt === "string" ? yt : <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.featuresH2}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.features.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.howToH2}</h2>
          <ol className="space-y-4">
            {t.howToSteps.map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mt-0.5">{i + 1}</span>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {i === 0 ? (
                      <>{step.desc.split("full guide")[0]}<Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="text-primary hover:underline">full guide</Link>{step.desc.split("full guide")[1]}</>
                    ) : step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
