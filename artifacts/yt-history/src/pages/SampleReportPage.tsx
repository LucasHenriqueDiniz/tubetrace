import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { UploadCloud, Info } from "lucide-react";
import { useHistoryStore } from "@/lib/store";
import { generateDemoData } from "@/lib/parser";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/PageLayout";
import { PersonalityCard } from "@/components/PersonalityCard";
import { StatsCards } from "@/components/StatsCards";
import { DataTimeline } from "@/components/DataTimeline";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { TopChannels } from "@/components/TopChannels";
import { WatchPatterns } from "@/components/WatchPatterns";
import { BingeSessions } from "@/components/BingeSessions";
import { FunInsights } from "@/components/FunInsights";
import type { Locale } from "@/i18n/types";
import { localePath } from "@/i18n/utils";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const meta = {
  en: {
    title: "Sample YouTube Watch History Report — TubeTrace",
    desc: "See what a TubeTrace report looks like. Explore a full example report with viewing personality, top channels, binge sessions, activity heatmap, and watch patterns.",
    banner: "This is a sample report with synthetic data. Upload your own Google Takeout export to see your real stats.",
    eyebrow: "Example Report",
    h1: "What your YouTube history analysis looks like",
    sub: "Below is a full example report generated from synthetic YouTube watch history data. Your actual report will reflect your own channels, habits, and viewing personality.",
    ctaUpload: "Analyze My History",
    ctaExport: "How to Export My Data",
    ctaTitle: "Ready to see your own report?",
    ctaDesc: "Export your YouTube history from Google Takeout, drop the file on TubeTrace, and get your personalized report in seconds — 100% private.",
  },
  pt: {
    title: "Relatório de Exemplo do Histórico do YouTube — TubeTrace",
    desc: "Veja como é um relatório do TubeTrace. Explore um exemplo completo com personalidade de espectador, top canais, maratonas, heatmap de atividade e padrões de consumo.",
    banner: "Este é um relatório de exemplo com dados sintéticos. Envie sua própria exportação do Google Takeout para ver suas estatísticas reais.",
    eyebrow: "Relatório de Exemplo",
    h1: "Como é a análise do seu histórico do YouTube",
    sub: "Abaixo está um relatório de exemplo gerado com dados sintéticos. Seu relatório real vai refletir seus próprios canais, hábitos e personalidade de espectador.",
    ctaUpload: "Analisar meu histórico",
    ctaExport: "Como exportar meus dados",
    ctaTitle: "Pronto para ver seu relatório?",
    ctaDesc: "Exporte seu histórico do YouTube pelo Google Takeout, envie o arquivo para o TubeTrace e veja seu relatório em segundos — 100% privado.",
  },
  es: {
    title: "Informe de Ejemplo del Historial de YouTube — TubeTrace",
    desc: "Mira cómo se ve un informe de TubeTrace. Explora un ejemplo completo con personalidad de espectador, canales principales, sesiones de maratón y patrones de visualización.",
    banner: "Este es un informe de ejemplo con datos sintéticos. Sube tu propia exportación de Google Takeout para ver tus estadísticas reales.",
    eyebrow: "Informe de Ejemplo",
    h1: "Así es el análisis de tu historial de YouTube",
    sub: "A continuación hay un informe de ejemplo generado con datos sintéticos. Tu informe real reflejará tus propios canales, hábitos y personalidad como espectador.",
    ctaUpload: "Analizar mi historial",
    ctaExport: "Cómo exportar mis datos",
    ctaTitle: "¿Listo para ver tu propio informe?",
    ctaDesc: "Exporta tu historial de YouTube desde Google Takeout, sube el archivo a TubeTrace y obtén tu informe personalizado en segundos — 100% privado.",
  },
  fr: {
    title: "Exemple de Rapport d'Historique YouTube — TubeTrace",
    desc: "Découvrez à quoi ressemble un rapport TubeTrace. Explorez un exemple complet avec personnalité de spectateur, chaînes principales, sessions de binge et habitudes de visionnage.",
    banner: "Ceci est un rapport d'exemple avec des données synthétiques. Importez votre propre export Google Takeout pour voir vos vraies statistiques.",
    eyebrow: "Exemple de Rapport",
    h1: "À quoi ressemble votre analyse d'historique YouTube",
    sub: "Voici un rapport d'exemple généré à partir de données YouTube synthétiques. Votre rapport réel reflétera vos propres chaînes, habitudes et personnalité de spectateur.",
    ctaUpload: "Analyser mon historique",
    ctaExport: "Comment exporter mes données",
    ctaTitle: "Prêt à voir votre propre rapport ?",
    ctaDesc: "Exportez votre historique YouTube depuis Google Takeout, déposez le fichier sur TubeTrace et obtenez votre rapport personnalisé en quelques secondes — 100% privé.",
  },
  de: {
    title: "Beispiel-YouTube-Verlaufsbericht — TubeTrace",
    desc: "Sieh, wie ein TubeTrace-Bericht aussieht. Erkunde einen vollständigen Beispielbericht mit Schauerpersönlichkeit, Top-Kanälen, Binge-Sessions, Aktivitäts-Heatmap und Schaumustern.",
    banner: "Dies ist ein Beispielbericht mit synthetischen Daten. Lade deinen eigenen Google-Takeout-Export hoch, um deine echten Statistiken zu sehen.",
    eyebrow: "Beispielbericht",
    h1: "So sieht deine YouTube-Verlaufsanalyse aus",
    sub: "Unten ist ein Beispielbericht, der aus synthetischen YouTube-Verlaufsdaten generiert wurde. Dein tatsächlicher Bericht spiegelt deine eigenen Kanäle, Gewohnheiten und Schauerpersönlichkeit wider.",
    ctaUpload: "Meinen Verlauf analysieren",
    ctaExport: "Wie exportiere ich meine Daten",
    ctaTitle: "Bereit, deinen eigenen Bericht zu sehen?",
    ctaDesc: "Exportiere deinen YouTube-Verlauf von Google Takeout, ziehe die Datei auf TubeTrace und erhalte deinen personalisierten Bericht in Sekunden — 100% privat.",
  },
  it: {
    title: "Esempio di Report Cronologia YouTube — TubeTrace",
    desc: "Scopri come appare un report TubeTrace. Esplora un esempio completo con personalità di visualizzatore, canali principali, sessioni binge, heatmap dell'attività e pattern di visione.",
    banner: "Questo è un report di esempio con dati sintetici. Carica il tuo export di Google Takeout per vedere le tue statistiche reali.",
    eyebrow: "Report di Esempio",
    h1: "Come appare la tua analisi della cronologia YouTube",
    sub: "Di seguito è riportato un report di esempio generato da dati sintetici della cronologia YouTube. Il tuo report reale rifletterà i tuoi canali, abitudini e personalità di visualizzatore.",
    ctaUpload: "Analizza la mia cronologia",
    ctaExport: "Come esportare i miei dati",
    ctaTitle: "Pronto a vedere il tuo report?",
    ctaDesc: "Esporta la tua cronologia YouTube da Google Takeout, trascina il file su TubeTrace e ottieni il tuo report personalizzato in pochi secondi — 100% privato.",
  },
};

interface Props { locale?: Locale }

export function SampleReportPage({ locale = "en" }: Props) {
  const c = meta[locale];
  const canonical = `https://tubetrace.pages.dev${localePath(locale, "/sample")}`;
  usePageMeta(c.title, c.desc, canonical);

  const { data, setData, reset } = useHistoryStore();
  const didSetDemo = useRef(false);

  useEffect(() => {
    if (!data) {
      setData(generateDemoData());
      didSetDemo.current = true;
    }
    return () => {
      if (didSetDemo.current) {
        reset();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) {
    return (
      <PageLayout locale={locale} basePath="/sample">
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout locale={locale} basePath="/sample">
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Info className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">{c.banner}</span>
          </div>
          <Link href={localePath(locale, "/")} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shrink-0 hover:bg-primary/90 transition-colors">
            <UploadCloud className="w-3.5 h-3.5" />{c.ctaUpload}
          </Link>
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{c.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{c.h1}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{c.sub}</p>
        </div>

        <PersonalityCard />
        <StatsCards />
        <DataTimeline />
        <ActivityHeatmap />
        <TopChannels />
        <WatchPatterns />
        <BingeSessions />
        <FunInsights />

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">{c.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={localePath(locale, "/")} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              <UploadCloud className="w-4 h-4" />{c.ctaUpload}
            </Link>
            <Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              {c.ctaExport}
            </Link>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
