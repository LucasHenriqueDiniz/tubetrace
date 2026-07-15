import type { AboutContent } from "../types";

export const aboutDe: AboutContent = {
  meta: {
    title: "Über TubeTrace — Privater YouTube-Wiedergabeverlauf-Analysator",
    description:
      "TubeTrace ist ein kostenloser, datenschutzorientierter YouTube-Verlaufsanalysator. Deine Daten verlassen nie deinen Browser. Erfahre mehr über das Projekt und warum es gebaut wurde.",
  },
  eyebrow: "Über uns",
  h1: "Was ist TubeTrace?",
  intro:
    "TubeTrace ist ein kostenloses Open-Source-Tool, das deinen YouTube-Wiedergabeverlauf aus einem Google-Takeout-Export analysiert — vollständig in deinem Browser, ohne Server, ohne Login und ohne Datenerfassung.",
  features: [
    {
      title: "100% Privat",
      desc: "Deine Verlaufsdatei wird vollständig in deinem Browser verarbeitet. Sie verlässt nie dein Gerät.",
    },
    {
      title: "Sofortige Analyse",
      desc: "Erhalte deine Schauerpersönlichkeit, Top-Kanäle, Binge-Sessions und Aktivitätsmuster in Sekunden.",
    },
    {
      title: "Kein Konto erforderlich",
      desc: "Kein Login, keine Anmeldung, kein Tracking. Lade einfach deinen Google-Takeout-Export hoch und sieh deine Statistiken.",
    },
    {
      title: "Open Source",
      desc: "Der gesamte Code ist öffentlich. Du kannst genau überprüfen, was mit deinen Daten passiert.",
    },
  ],
  whyH2: "Warum TubeTrace?",
  whyParas: [
    "YouTubes offizielle Verlaufsseite zeigt dir, was du geschaut hast, gibt dir aber keinen Einblick in dein Schauverhalten. TubeTrace schließt diese Lücke: Es wandelt deinen Rohexport in aussagekräftige Statistiken um — deine Persönlichkeit als Zuschauer, welche Kanäle deine Zeit dominieren, wann du am meisten bingst und wie deine täglichen Gewohnheiten über Monate und Jahre aussehen.",
    "Im Gegensatz zu anderen Tools sendet TubeTrace deine Daten nirgendwo hin. Dein Google-Takeout-ZIP wird vollständig in deinem Browser mit JavaScript dekomprimiert und verarbeitet. In dem Moment, in dem du den Tab schließt, sind die Daten weg.",
    "TubeTrace unterstützt sowohl das JSON- als auch das HTML-Format, das Google Takeout exportiert, sowie die komprimierten .zip-, .tgz- und .tar.gz-Archive, die du direkt von Google herunterlädst. Kein Entpacken nötig.",
  ],
  whatH2: "Was TubeTrace analysiert",
  whatItems: [
    "Deine YouTube-Schauerpersönlichkeit (Nachteule, Binge-Watcher, Treuer Fan und mehr)",
    "Top-Kanäle nach Gesamtzahl der angesehenen Videos",
    "Binge-Sessions — aufeinanderfolgende Videos in kurzen Zeitfenstern",
    "Aktivitäts-Heatmap über jeden Tag deiner Geschichte",
    "Schaumuster nach Tageszeit, Wochentag und Monat",
    "Längste Schauserie (aufeinanderfolgende Tage)",
    "Geschätzte Gesamtsehdauer",
    "Aktivster Tag überhaupt",
    "Spitzenschaustunden und Zeitslot-Aufschlüsselung",
  ],
  howH2: "So verwendest du TubeTrace",
  howSteps: [
    "Exportiere deinen YouTube-Verlauf von Google Takeout. Wähle nur YouTube und YouTube Music aus, um die Datei klein zu halten.",
    "Lade die .zip- oder .tgz-Datei herunter, die Google dir schickt.",
    "Ziehe die Datei auf die TubeTrace-Upload-Seite — kein Entpacken nötig.",
    "Dein Bericht erscheint sofort, vollständig in deinem Browser verarbeitet.",
  ],
  cta: {
    analyze: "Meinen Verlauf analysieren",
    sample: "Beispielbericht ansehen",
    github: "Auf GitHub ansehen",
  },
  creator: {
    h2: "Über den Entwickler",
    name: "Lucas Henrique Diniz",
    bio: "Softwareentwickler, der Open-Source-Tools mit Fokus auf Datenschutz baut. TubeTrace ist eines davon — entwickelt, damit jeder seine eigenen YouTube-Gewohnheiten verstehen kann, ohne dass Daten das eigene Gerät verlassen.",
    links: {
      github: "https://github.com/LucasHenriqueDiniz/",
      website: "https://lucashdo.com/",
      linkedin: "https://www.linkedin.com/in/lucas-diniz-ostroski/",
    },
  },
};
