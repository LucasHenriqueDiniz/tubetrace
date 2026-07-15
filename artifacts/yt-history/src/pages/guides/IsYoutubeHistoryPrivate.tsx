import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";
import type { Locale, YoutubePrivacyContent } from "@/i18n/types";
import { youtubePrivacyEn } from "@/i18n/content/history-private.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<YoutubePrivacyContent>> = {
  en: async () => youtubePrivacyEn,
  pt: async () => (await import("@/i18n/content/history-private.pt")).youtubePrivacyPt,
  es: async () => (await import("@/i18n/content/history-private.es")).youtubePrivacyEs,
  fr: async () => (await import("@/i18n/content/history-private.fr")).youtubePrivacyFr,
  de: async () => (await import("@/i18n/content/history-private.de")).youtubePrivacyDe,
  it: async () => (await import("@/i18n/content/history-private.it")).youtubePrivacyIt,
};

interface Props { locale?: Locale }

export function IsYoutubeHistoryPrivate({ locale = "en" }: Props) {
  const [t, setT] = useState<YoutubePrivacyContent>(youtubePrivacyEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/guide/is-youtube-watch-history-private")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/guide/is-youtube-watch-history-private">
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.intro}</p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.whoCanSeeH2}</h2>
          <div className="space-y-4">
            {t.whoCanSee.map(({ title, answer, positive, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <div className="flex items-center gap-3 mb-2">
                  {positive ? <EyeOff className="w-5 h-5 text-green-500 shrink-0" /> : <Eye className="w-5 h-5 text-yellow-500 shrink-0" />}
                  <div>
                    <span className="font-semibold">{title}</span>
                    <span className={`ml-2 text-xs font-semibold ${positive ? "text-green-500" : "text-yellow-500"}`}>— {answer}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.howToPrivacyH2}</h2>
          <div className="space-y-4">
            {t.privacyOptions.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">{t.isSafeH2}</h2>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold mb-2">{t.isSafeTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.isSafeDesc}</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground pl-9">
              {t.isSafeItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
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
