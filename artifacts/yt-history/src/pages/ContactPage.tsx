import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Github, Mail } from "lucide-react";
import { Link } from "wouter";
import type { Locale } from "@/i18n/types";
import { localePath } from "@/i18n/utils";

const t = {
  en: {
    title: "Contact — TubeTrace",
    desc: "Get in touch with the TubeTrace team. Report bugs, suggest features, or ask questions about your YouTube watch history analysis.",
    eyebrow: "Contact",
    h1: "Get in touch",
    intro: "Found a bug? Have a suggestion? Want to contribute? We'd love to hear from you.",
    emailLabel: "Email",
    githubLabel: "GitHub Issues",
    githubDesc: "Report bugs or request features on GitHub",
    beforeH2: "Before you write",
    before: ["Check the FAQ — your question may already be answered.", "Read the export guide if you're having trouble with your Google Takeout file.", "TubeTrace is open-source — pull requests are welcome on GitHub."],
    faqLink: "FAQ", guideLink: "export guide",
    note: "TubeTrace is a side project maintained by a solo developer. Response times may vary, but all messages are read.",
  },
  pt: {
    title: "Contato — TubeTrace",
    desc: "Entre em contato com a equipe do TubeTrace. Reporte bugs, sugira funcionalidades ou tire dúvidas sobre análise do histórico do YouTube.",
    eyebrow: "Contato",
    h1: "Entre em contato",
    intro: "Encontrou um bug? Tem uma sugestão? Quer contribuir? Adoramos receber mensagens.",
    emailLabel: "E-mail",
    githubLabel: "GitHub Issues",
    githubDesc: "Reporte bugs ou solicite funcionalidades no GitHub",
    beforeH2: "Antes de escrever",
    before: ["Confira o FAQ — sua dúvida pode já estar respondida.", "Leia o guia de exportação se estiver com problemas no arquivo do Google Takeout.", "O TubeTrace é open-source — pull requests são bem-vindos no GitHub."],
    faqLink: "FAQ", guideLink: "guia de exportação",
    note: "O TubeTrace é um projeto solo. O tempo de resposta pode variar, mas todas as mensagens são lidas.",
  },
  es: {
    title: "Contacto — TubeTrace",
    desc: "Ponte en contacto con el equipo de TubeTrace. Reporta bugs, sugiere funciones o haz preguntas sobre el análisis de tu historial de YouTube.",
    eyebrow: "Contacto",
    h1: "Ponte en contacto",
    intro: "¿Encontraste un bug? ¿Tienes una sugerencia? ¿Quieres contribuir? Nos encanta saber de ti.",
    emailLabel: "Correo",
    githubLabel: "GitHub Issues",
    githubDesc: "Reporta bugs o solicita funciones en GitHub",
    beforeH2: "Antes de escribir",
    before: ["Revisa el FAQ — tu pregunta puede estar ya respondida.", "Lee la guía de exportación si tienes problemas con tu archivo de Google Takeout.", "TubeTrace es de código abierto — los pull requests son bienvenidos en GitHub."],
    faqLink: "FAQ", guideLink: "guía de exportación",
    note: "TubeTrace es un proyecto personal mantenido por un solo desarrollador. Los tiempos de respuesta pueden variar, pero todos los mensajes son leídos.",
  },
  fr: {
    title: "Contact — TubeTrace",
    desc: "Contactez l'équipe TubeTrace. Signalez des bugs, suggérez des fonctionnalités ou posez des questions sur l'analyse de votre historique YouTube.",
    eyebrow: "Contact",
    h1: "Nous contacter",
    intro: "Vous avez trouvé un bug ? Une suggestion ? Vous souhaitez contribuer ? Nous serions ravis d'avoir de vos nouvelles.",
    emailLabel: "E-mail",
    githubLabel: "GitHub Issues",
    githubDesc: "Signalez des bugs ou demandez des fonctionnalités sur GitHub",
    beforeH2: "Avant d'écrire",
    before: ["Consultez la FAQ — votre question y est peut-être déjà répondue.", "Lisez le guide d'export si vous rencontrez des problèmes avec votre fichier Google Takeout.", "TubeTrace est open-source — les pull requests sont les bienvenus sur GitHub."],
    faqLink: "FAQ", guideLink: "guide d'export",
    note: "TubeTrace est un projet personnel maintenu par un seul développeur. Les délais de réponse peuvent varier, mais tous les messages sont lus.",
  },
  de: {
    title: "Kontakt — TubeTrace",
    desc: "Kontaktiere das TubeTrace-Team. Melde Bugs, schlage Funktionen vor oder stelle Fragen zur Analyse deines YouTube-Wiedergabeverlaufs.",
    eyebrow: "Kontakt",
    h1: "Kontakt aufnehmen",
    intro: "Einen Bug gefunden? Einen Vorschlag? Möchtest du beitragen? Wir freuen uns, von dir zu hören.",
    emailLabel: "E-Mail",
    githubLabel: "GitHub Issues",
    githubDesc: "Melde Bugs oder schlage Funktionen auf GitHub vor",
    beforeH2: "Bevor du schreibst",
    before: ["Schau dir die FAQ an — deine Frage ist möglicherweise bereits beantwortet.", "Lies die Exportanleitung, wenn du Probleme mit deiner Google-Takeout-Datei hast.", "TubeTrace ist Open Source — Pull Requests sind auf GitHub willkommen."],
    faqLink: "FAQ", guideLink: "Exportanleitung",
    note: "TubeTrace ist ein Nebenprojekt, das von einem einzelnen Entwickler gepflegt wird. Reaktionszeiten können variieren, aber alle Nachrichten werden gelesen.",
  },
  it: {
    title: "Contatti — TubeTrace",
    desc: "Contatta il team di TubeTrace. Segnala bug, suggerisci funzionalità o fai domande sull'analisi della tua cronologia YouTube.",
    eyebrow: "Contatti",
    h1: "Contattaci",
    intro: "Hai trovato un bug? Hai un suggerimento? Vuoi contribuire? Siamo felici di sentirti.",
    emailLabel: "E-mail",
    githubLabel: "GitHub Issues",
    githubDesc: "Segnala bug o richiedi funzionalità su GitHub",
    beforeH2: "Prima di scrivere",
    before: ["Consulta la FAQ — la tua domanda potrebbe essere già risposta.", "Leggi la guida all'esportazione se hai problemi con il tuo file di Google Takeout.", "TubeTrace è open source — le pull request sono benvenute su GitHub."],
    faqLink: "FAQ", guideLink: "guida all'esportazione",
    note: "TubeTrace è un progetto personale mantenuto da un singolo sviluppatore. I tempi di risposta possono variare, ma tutti i messaggi vengono letti.",
  },
};

interface Props { locale?: Locale }

export function ContactPage({ locale = "en" }: Props) {
  const c = t[locale];
  usePageMeta(c.title, c.desc, `https://tubetrace.pages.dev${localePath(locale, "/contact")}`);

  return (
    <PageLayout locale={locale} basePath="/contact">
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">{c.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{c.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{c.intro}</p>
        </div>

        <div className="space-y-4 mb-12">
          <a href="mailto:lucas.diniz.hdo@gmail.com" className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 hover:border-primary/40 hover:bg-card transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">{c.emailLabel}</p>
              <p className="text-sm text-muted-foreground">lucas.diniz.hdo@gmail.com</p>
            </div>
          </a>

          <a href="https://github.com/LucasHenriqueDiniz/tubetrace/issues" target="_blank" rel="noopener" className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 hover:border-primary/40 hover:bg-card transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">{c.githubLabel}</p>
              <p className="text-sm text-muted-foreground">{c.githubDesc}</p>
            </div>
          </a>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-6 mb-8">
          <h2 className="font-bold mb-3">{c.beforeH2}</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary shrink-0">→</span>
              <span>{c.before[0].split(c.faqLink)[0]}<Link href={localePath(locale, "/faq")} className="text-primary hover:underline">{c.faqLink}</Link>{c.before[0].split(c.faqLink)[1]}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary shrink-0">→</span>
              <span>{c.before[1].split(c.guideLink)[0]}<Link href={localePath(locale, "/guide/how-to-export-youtube-watch-history")} className="text-primary hover:underline">{c.guideLink}</Link>{c.before[1].split(c.guideLink)[1]}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary shrink-0">→</span>
              <span>{c.before[2]}</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">{c.note}</p>
      </div>
    </PageLayout>
  );
}
