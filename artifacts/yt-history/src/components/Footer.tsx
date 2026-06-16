import { Github } from "lucide-react";
import { Link } from "wouter";
import type { Locale } from "@/i18n/types";
import { localePath } from "@/i18n/utils";

interface FooterProps {
  locale?: Locale;
}

const labels: Record<Locale, {
  tools: string; analyzeHistory: string; sampleReport: string;
  guides: string; exportGuide: string; takeoutGuide: string; wrappedAlt: string; recapNotShowing: string; historyPrivate: string;
  company: string; about: string; faq: string; contact: string; privacy: string; terms: string;
  tagline: string; disclaimer: string;
}> = {
  en: {
    tools: "Tools", analyzeHistory: "Analyze History", sampleReport: "Sample Report",
    guides: "Guides", exportGuide: "Export YouTube History", takeoutGuide: "Google Takeout Guide",
    wrappedAlt: "YouTube Wrapped Alt", recapNotShowing: "Recap Not Showing", historyPrivate: "Is History Private?",
    company: "Company", about: "About", faq: "FAQ", contact: "Contact", privacy: "Privacy Policy", terms: "Terms",
    tagline: "Private YouTube watch history analyzer. Your data never leaves your browser.",
    disclaimer: "Not affiliated with YouTube or Google.",
  },
  pt: {
    tools: "Ferramentas", analyzeHistory: "Analisar Histórico", sampleReport: "Relatório de Exemplo",
    guides: "Guias", exportGuide: "Exportar Histórico", takeoutGuide: "Guia Google Takeout",
    wrappedAlt: "Alternativa YouTube Wrapped", recapNotShowing: "Recap Não Aparece", historyPrivate: "Histórico é Privado?",
    company: "Empresa", about: "Sobre", faq: "FAQ", contact: "Contato", privacy: "Privacidade", terms: "Termos",
    tagline: "Analisador de histórico do YouTube. Seus dados nunca saem do seu navegador.",
    disclaimer: "Não afiliado ao YouTube ou Google.",
  },
  es: {
    tools: "Herramientas", analyzeHistory: "Analizar Historial", sampleReport: "Ejemplo de Informe",
    guides: "Guías", exportGuide: "Exportar Historial", takeoutGuide: "Guía Google Takeout",
    wrappedAlt: "Alternativa YouTube Wrapped", recapNotShowing: "Recap No Aparece", historyPrivate: "¿Historial Privado?",
    company: "Empresa", about: "Acerca de", faq: "FAQ", contact: "Contacto", privacy: "Privacidad", terms: "Términos",
    tagline: "Analizador de historial de YouTube. Tus datos nunca salen de tu navegador.",
    disclaimer: "No afiliado a YouTube ni Google.",
  },
  fr: {
    tools: "Outils", analyzeHistory: "Analyser l'historique", sampleReport: "Exemple de rapport",
    guides: "Guides", exportGuide: "Exporter l'historique", takeoutGuide: "Guide Google Takeout",
    wrappedAlt: "Alternative YouTube Wrapped", recapNotShowing: "Recap introuvable", historyPrivate: "Historique privé ?",
    company: "Entreprise", about: "À propos", faq: "FAQ", contact: "Contact", privacy: "Confidentialité", terms: "CGU",
    tagline: "Analyseur d'historique YouTube. Vos données ne quittent jamais votre navigateur.",
    disclaimer: "Non affilié à YouTube ou Google.",
  },
  de: {
    tools: "Tools", analyzeHistory: "Verlauf analysieren", sampleReport: "Beispielbericht",
    guides: "Anleitungen", exportGuide: "YouTube-Verlauf exportieren", takeoutGuide: "Google Takeout Anleitung",
    wrappedAlt: "YouTube Wrapped Alternative", recapNotShowing: "Recap wird nicht angezeigt", historyPrivate: "Ist der Verlauf privat?",
    company: "Unternehmen", about: "Über uns", faq: "FAQ", contact: "Kontakt", privacy: "Datenschutz", terms: "Nutzungsbedingungen",
    tagline: "Privater YouTube-Verlaufsanalysator. Deine Daten verlassen nie deinen Browser.",
    disclaimer: "Nicht verbunden mit YouTube oder Google.",
  },
  it: {
    tools: "Strumenti", analyzeHistory: "Analizza cronologia", sampleReport: "Report di esempio",
    guides: "Guide", exportGuide: "Esporta cronologia YouTube", takeoutGuide: "Guida Google Takeout",
    wrappedAlt: "Alternativa YouTube Wrapped", recapNotShowing: "Recap non appare", historyPrivate: "La cronologia è privata?",
    company: "Azienda", about: "Chi siamo", faq: "FAQ", contact: "Contatti", privacy: "Privacy", terms: "Termini",
    tagline: "Analizzatore privato della cronologia YouTube. I tuoi dati non lasciano mai il browser.",
    disclaimer: "Non affiliato a YouTube o Google.",
  },
};

export function Footer({ locale = "en" }: FooterProps) {
  const t = labels[locale];

  return (
    <footer className="relative z-10 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-bold text-foreground/80">
              Tube<span className="text-primary">Trace</span>
            </span>
            <p className="mt-2 text-xs text-muted-foreground max-w-xs leading-relaxed">
              {t.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground/70 mb-2 uppercase tracking-wider text-[10px]">{t.tools}</p>
              <nav className="space-y-1.5">
                <div><Link href={localePath(locale, "/")} className="hover:text-foreground transition-colors">{t.analyzeHistory}</Link></div>
                <div><Link href={localePath(locale, "/sample")} className="hover:text-foreground transition-colors">{t.sampleReport}</Link></div>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-foreground/70 mb-2 uppercase tracking-wider text-[10px]">{t.guides}</p>
              <nav className="space-y-1.5">
                <div><Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="hover:text-foreground transition-colors">{t.exportGuide}</Link></div>
                <div><Link href={localePath(locale, "/guide/google-takeout-youtube-history")} className="hover:text-foreground transition-colors">{t.takeoutGuide}</Link></div>
                <div><Link href={localePath(locale, "/guide/youtube-wrapped-alternative")} className="hover:text-foreground transition-colors">{t.wrappedAlt}</Link></div>
                <div><Link href={localePath(locale, "/guide/youtube-recap-not-showing")} className="hover:text-foreground transition-colors">{t.recapNotShowing}</Link></div>
                <div><Link href={localePath(locale, "/guide/is-youtube-watch-history-private")} className="hover:text-foreground transition-colors">{t.historyPrivate}</Link></div>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-foreground/70 mb-2 uppercase tracking-wider text-[10px]">{t.company}</p>
              <nav className="space-y-1.5">
                <div><Link href={localePath(locale, "/about")} className="hover:text-foreground transition-colors">{t.about}</Link></div>
                <div><Link href={localePath(locale, "/faq")} className="hover:text-foreground transition-colors">{t.faq}</Link></div>
                <div><Link href={localePath(locale, "/contact")} className="hover:text-foreground transition-colors">{t.contact}</Link></div>
                <div><a href="/privacy.html" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">{t.privacy}</a></div>
                <div><a href="/terms.html" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">{t.terms}</a></div>
                <div>
                  <a href="https://github.com/LucasHenriqueDiniz/tubetrace" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60">
          <span>© {new Date().getFullYear()} TubeTrace. {t.disclaimer}</span>
          <span>{t.tagline.split(".")[1]?.trim() || "Processed entirely in your browser."}</span>
        </div>
      </div>
    </footer>
  );
}
