import { useEffect } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import type { Locale } from "@/i18n/types";
import { localePath } from "@/i18n/utils";

const COPY: Record<Locale, { title: string; body: string; cta: string }> = {
  en: { title: "Page not found", body: "The page you're looking for doesn't exist or may have moved.", cta: "Back to home" },
  pt: { title: "Página não encontrada", body: "A página que você procura não existe ou pode ter sido movida.", cta: "Voltar para o início" },
  es: { title: "Página no encontrada", body: "La página que buscas no existe o pudo haber sido movida.", cta: "Volver al inicio" },
  fr: { title: "Page introuvable", body: "La page que vous recherchez n'existe pas ou a peut-être été déplacée.", cta: "Retour à l'accueil" },
  de: { title: "Seite nicht gefunden", body: "Die gesuchte Seite existiert nicht oder wurde verschoben.", cta: "Zur Startseite" },
  it: { title: "Pagina non trovata", body: "La pagina che stai cercando non esiste o potrebbe essere stata spostata.", cta: "Torna alla home" },
};

interface Props { locale?: Locale }

export function NotFoundPage({ locale = "en" }: Props) {
  const t = COPY[locale];

  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]');
    const previous = meta?.getAttribute("content") ?? "index, follow";
    meta?.setAttribute("content", "noindex, follow");
    document.title = `${t.title} — TubeTrace`;
    return () => {
      meta?.setAttribute("content", previous);
    };
  }, [t.title]);

  return (
    <PageLayout locale={locale}>
      <div className="max-w-xl mx-auto px-4 md:px-6 py-24 text-center">
        <p className="text-6xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold mb-3">{t.title}</h1>
        <p className="text-muted-foreground mb-8">{t.body}</p>
        <Link
          href={localePath(locale, "/")}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {t.cta}
        </Link>
      </div>
    </PageLayout>
  );
}
