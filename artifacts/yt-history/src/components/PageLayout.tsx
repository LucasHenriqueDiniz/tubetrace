import { Github, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
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

export function PageLayout({ children, locale = "en", basePath }: PageLayoutProps) {
  const [location] = useLocation();
  const base = basePath ?? stripLocale(location);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <Link href={localePath(locale, "/")} className="flex items-center gap-2 shrink-0">
            <img src="/favicon.svg" alt="TubeTrace" className="h-9 w-9 rounded-xl" />
            <span className="text-lg font-extrabold tracking-tight">
              Tube<span className="text-primary">Trace</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
            <Link href={localePath(locale, "/sample")} className="hover:text-foreground transition-colors">
              {locale === "pt" ? "Relatório de Exemplo" : locale === "es" ? "Ejemplo" : locale === "fr" ? "Exemple" : "Sample Report"}
            </Link>
            <Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="hover:text-foreground transition-colors">
              {locale === "pt" ? "Guia" : locale === "es" ? "Guía" : locale === "fr" ? "Guide" : "Guide"}
            </Link>
            <Link href={localePath(locale, "/faq")} className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href={localePath(locale, "/about")} className="hover:text-foreground transition-colors">
              {locale === "pt" ? "Sobre" : locale === "es" ? "Acerca" : locale === "fr" ? "À propos" : "About"}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {LOCALE_LABELS[locale]}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden min-w-[120px] z-50">
                {SUPPORTED_LOCALES.map((l) => (
                  <Link
                    key={l}
                    href={localePath(l, base)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium hover:bg-secondary transition-colors ${l === locale ? "text-primary" : "text-muted-foreground"}`}
                  >
                    <span className="font-bold">{LOCALE_LABELS[l]}</span>
                    <span className="text-muted-foreground/70">
                      {l === "en" ? "English" : l === "pt" ? "Português" : l === "es" ? "Español" : "Français"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/LucasHenriqueDiniz/tubetrace"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <Link
              href={localePath(locale, "/")}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {locale === "pt" ? "Analisar" : locale === "es" ? "Analizar" : locale === "fr" ? "Analyser" : "Analyze"}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <Footer locale={locale} />
    </div>
  );
}
