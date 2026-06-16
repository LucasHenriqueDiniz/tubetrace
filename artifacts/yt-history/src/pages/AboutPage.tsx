import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { Github, ShieldCheck, Zap, Lock, Globe } from "lucide-react";
import type { Locale, AboutContent } from "@/i18n/types";
import { aboutEn } from "@/i18n/content/about.en";
import { localePath } from "@/i18n/utils";

const loaders: Record<Locale, () => Promise<AboutContent>> = {
  en: async () => aboutEn,
  pt: async () => (await import("@/i18n/content/about.pt")).aboutPt,
  es: async () => (await import("@/i18n/content/about.es")).aboutEs,
  fr: async () => (await import("@/i18n/content/about.fr")).aboutFr,
};

const featureIcons = [Lock, Zap, Globe, ShieldCheck];

interface Props { locale?: Locale }

export function AboutPage({ locale = "en" }: Props) {
  const [t, setT] = useState<AboutContent>(aboutEn);
  useEffect(() => { loaders[locale]().then(setT); }, [locale]);

  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/about")}`;
  usePageMeta(t.meta.title, t.meta.description, canonical);

  return (
    <PageLayout locale={locale} basePath="/about">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{t.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {t.features.map(({ title, desc }, i) => {
            const Icon = featureIcons[i] ?? ShieldCheck;
            return (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <Icon className="w-5 h-5 text-primary mb-3" />
                <h2 className="font-bold mb-1">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-14 space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">{t.whyH2}</h2>
          {t.whyParas.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6">{t.whatH2}</h2>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {t.whatItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-14 rounded-2xl border border-border/60 bg-card/60 p-6">
          <h2 className="text-xl font-bold mb-4">{t.howH2}</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            {t.howSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={localePath(locale, "/")} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            {t.cta.analyze}
          </Link>
          <Link href={localePath(locale, "/sample")} className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
            {t.cta.sample}
          </Link>
          <a href="https://github.com/LucasHenriqueDiniz/tubetrace" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
            <Github className="w-4 h-4" />{t.cta.github}
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
