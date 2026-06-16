import { Github, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n/types";
import { LOCALE_LABELS, SUPPORTED_LOCALES } from "@/i18n/types";
import { localePath, stripLocale } from "@/i18n/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  locale?: Locale;
  /** Base path without locale prefix, e.g. "/guide/how-to-export..." */
  basePath?: string;
}

const NAV_LABELS: Record<string, Record<Locale, string>> = {
  sample:  { en: "Sample Report", pt: "Relatório de Exemplo", es: "Ejemplo", fr: "Exemple", de: "Beispielbericht", it: "Report di esempio" },
  guide:   { en: "Guide", pt: "Guia", es: "Guía", fr: "Guide", de: "Anleitung", it: "Guida" },
  faq:     { en: "FAQ", pt: "FAQ", es: "FAQ", fr: "FAQ", de: "FAQ", it: "FAQ" },
  about:   { en: "About", pt: "Sobre", es: "Acerca", fr: "À propos", de: "Über uns", it: "Chi siamo" },
  analyze: { en: "Analyze", pt: "Analisar", es: "Analizar", fr: "Analyser", de: "Analysieren", it: "Analizza" },
};

const LANG_NAMES: Record<Locale, string> = {
  en: "English", pt: "Português", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano",
};

export function PageLayout({ children, locale = "en", basePath }: PageLayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const base = basePath ?? stripLocale(location);

  const navLinks = [
    { path: "/sample",                                          label: NAV_LABELS.sample[locale] },
    { path: "/guide/how-to-export-youtube-watch-history",      label: NAV_LABELS.guide[locale] },
    { path: "/faq",                                            label: NAV_LABELS.faq[locale] },
    { path: "/about",                                          label: NAV_LABELS.about[locale] },
  ];

  const isActive = (path: string) => base === path || base.startsWith(path + "/");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href={localePath(locale, "/")} className="flex items-center gap-2 shrink-0">
            <img src="/favicon.svg" alt="TubeTrace" className="h-8 w-8 rounded-xl" />
            <span className="text-lg font-extrabold tracking-tight">
              Tube<span className="text-primary">Trace</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={localePath(locale, path)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isActive(path)
                    ? "text-foreground bg-secondary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {LOCALE_LABELS[locale]}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden min-w-[130px] z-50">
                {SUPPORTED_LOCALES.map((l) => (
                  <Link
                    key={l}
                    href={localePath(l, base)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium hover:bg-secondary transition-colors ${l === locale ? "text-primary" : "text-muted-foreground"}`}
                  >
                    <span className="font-bold">{LOCALE_LABELS[l]}</span>
                    <span className="text-muted-foreground/70">{LANG_NAMES[l]}</span>
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/LucasHenriqueDiniz/tubetrace"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <Link
              href={localePath(locale, "/")}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {NAV_LABELS.analyze[locale]}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={localePath(locale, path)}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive(path)
                    ? "text-foreground bg-secondary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-border/40 mt-2 pt-2 flex items-center gap-3">
              <a
                href="https://github.com/LucasHenriqueDiniz/tubetrace"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <Link
                href={localePath(locale, "/")}
                onClick={() => setMobileOpen(false)}
                className="ml-auto inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {NAV_LABELS.analyze[locale]}
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <Footer locale={locale} />
    </div>
  );
}
