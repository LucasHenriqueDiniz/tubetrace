import type { YoutubeWrappedContent } from "../types";

export const youtubeWrappedDe: YoutubeWrappedContent = {
  meta: {
    title: "YouTube Wrapped Alternative — Wiedergabeverlauf wie Spotify Wrapped analysieren",
    description:
      "YouTube hat keine Wrapped-Funktion wie Spotify. TubeTrace ist die beste kostenlose Alternative: Erhalte deine Schauerpersönlichkeit, Top-Kanäle und Binge-Statistiken aus Google Takeout.",
  },
  eyebrow: "Anleitung",
  h1: "YouTube Wrapped Alternative: Wiedergabeverlauf wie Spotify Wrapped analysieren",
  intro:
    "Spotify Wrapped präsentiert dir jeden Dezember eine wunderschöne Jahresrückschau. YouTube hat kein vergleichbares Feature — aber du kannst dein eigenes mit TubeTrace und deinen Google-Takeout-Daten erstellen.",
  doesYtHaveH2: "Hat YouTube eine Wrapped-Funktion?",
  doesYtHavePara1:
    "YouTube hat kein direktes Äquivalent zu Spotify Wrapped. YouTube hat eine offizielle „Recap“-Funktion, die für einige Nutzer am Jahresende erscheint, aber sie hat strenge Anforderungen: Du brauchst eine Mindestmenge an Wiedergabeverlauf, dein Verlauf muss aktiviert sein, und sie ist nicht für alle Nutzer oder in allen Regionen verfügbar.",
  doesYtHavePara2:
    "Wenn du keinen YouTube Recap siehst oder eine detailliertere und dauerhafte Analyse möchtest, ist TubeTrace die beste kostenlose Alternative — und es funktioniert mit deiner vollständigen Geschichte, nicht nur dem letzten Jahr.",
  comparisonH2: "TubeTrace vs. YouTube Recap",
  comparisonRows: [
    ["Vollständige Historie (alle Jahre)", true, false],
    ["Kein Login erforderlich", true, false],
    ["100% privat", true, false],
    ["Funktioniert ohne aktivierten Verlauf", true, false],
    ["Schauerpersönlichkeitstyp", true, false],
    ["Binge-Session-Erkennung", true, false],
    ["Aktivitäts-Heatmap", true, false],
    ["In YouTube-App integriert", false, true],
    ["Teilbare Highlight-Karten", true, "begrenzt"],
  ],
  featuresH2: "Was TubeTrace dir zeigt (wie Spotify Wrapped)",
  features: [
    {
      title: "Deine Schauerpersönlichkeit",
      desc: "Wie Spotifys Musikpersönlichkeit identifiziert TubeTrace deinen YouTube-Archetyp: Nachteule, Binge-Watcher, Treuer Fan, Vielfaltsucher, Frühaufsteher, Wochenendkrieger oder ausgewogener Zuschauer.",
    },
    {
      title: "Top-Kanäle",
      desc: "Sieh, welche Kanäle du am meisten geschaut hast, wie viele Videos du von jedem gesehen hast und welchen prozentualen Anteil sie an deiner gesamten Geschichte ausmachen.",
    },
    {
      title: "Gesamtsehdauer",
      desc: "Erhalte eine Schätzung, wie viele Stunden du über deinen gesamten Verlauf hinweg auf YouTube verbracht hast. Sei vorbereitet — die Zahl ist oft überraschend.",
    },
    {
      title: "Binge-Sessions",
      desc: "TubeTrace erkennt deine größten Binge-Sessions: die Zeiträume, in denen du in kurzer Zeit die meisten Videos geschaut hast, einschließlich der geschauten Kanäle.",
    },
    {
      title: "Schau-Heatmap",
      desc: "Ein GitHub-ähnlicher Aktivitätskalender, der jeden Tag zeigt, an dem du YouTube geschaut hast — mit Intensität, die zeigt, wie viel du an jedem Tag geschaut hast.",
    },
    {
      title: "Spitzengewohnheiten",
      desc: "Wann schaust du am meisten? TubeTrace schlüsselt deine Aktivität nach Stunde, Wochentag und Monat auf, um deine YouTube-Gewohnheiten zu enthüllen.",
    },
  ],
  howToH2: "So erstellst du dein YouTube-Wrapped-Äquivalent",
  howToSteps: [
    {
      title: "Verlauf exportieren",
      desc: "Gehe zu takeout.google.com, wähle nur YouTube und YouTube Music aus und erstelle einen Export. Sieh die vollständige Anleitung für Schritt-für-Schritt-Anleitungen.",
    },
    {
      title: "Bei TubeTrace hochladen",
      desc: "Ziehe die heruntergeladene ZIP- oder TGZ-Datei auf die TubeTrace-Startseite. Kein Entpacken nötig. Deine Datei wird vollständig in deinem Browser verarbeitet.",
    },
    {
      title: "Bericht erkunden",
      desc: "Dein vollständiges YouTube-Wrapped-Äquivalent erscheint sofort — Persönlichkeit, Top-Kanäle, Binge-Sessions, Heatmap und alle deine Gewohnheiten über die Jahre.",
    },
    {
      title: "Ergebnisse teilen",
      desc: "Verwende die Teilen-Schaltfläche, um eine 1080×1080-Bildkarte mit deinen wichtigsten Statistiken zu erstellen, perfekt zum Teilen in sozialen Medien.",
    },
  ],
  faqH2: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Kann ich ein YouTube Wrapped für ein bestimmtes Jahr bekommen, nicht meinen gesamten Verlauf?",
      a: "TubeTrace zeigt standardmäßig deinen gesamten Verlauf, aber die Aktivitäts-Heatmap und die monatlichen Aufschlüsselungen lassen dich visuell in ein bestimmtes Jahr oder einen Monat innerhalb deiner Daten hineinzoomen.",
    },
    {
      q: "Funktioniert TubeTrace, wenn YouTube Recap bei meinem Konto nie erschienen ist?",
      a: "Ja — TubeTrace hängt überhaupt nicht von der Recap-Berechtigung von YouTube ab. Solange du eine Google-Takeout-Datei mit Wiedergabeverlauf exportieren kannst, erstellt TubeTrace deinen vollständigen Bericht, egal ob Recap bei dir erschienen ist oder nicht.",
    },
    {
      q: "Basiert der Persönlichkeitstyp auf einem echten Algorithmus oder ist er zufällig?",
      a: "Er wird aus echten Mustern in deinen Daten berechnet — Sehzeiten, Sitzungslängen, Kanaltreue und Konsistenz über die Tage hinweg — nicht zufällig. Zwei Personen mit unterschiedlichen Gewohnheiten erhalten unterschiedliche Persönlichkeitsergebnisse.",
    },
  ],
  cta: {
    h2: "Erstelle jetzt dein YouTube Wrapped",
    desc: "Kostenlos, privat und funktioniert mit deiner vollständigen YouTube-Geschichte — nicht nur dem letzten Jahr.",
    upload: "Meinen Verlauf analysieren",
    sample: "Beispielbericht ansehen",
  },
};
