import type { PrivacyContent } from "../types";

export const privacyDe: PrivacyContent = {
  meta: {
    title: "Datenschutzrichtlinie — TubeTrace",
    description:
      "Datenschutzrichtlinie von TubeTrace — wie wir deine Daten, Cookies und Werbung behandeln.",
  },
  eyebrow: "Datenschutz",
  h1: "Datenschutzrichtlinie",
  updated: "Zuletzt aktualisiert: 26. Juni 2026",
  summary:
    "🔒 TubeTrace verarbeitet deinen gesamten YouTube-Verlauf lokal in deinem Browser. Keine Daten aus deinem Verlauf werden an unsere Server oder an Dritte gesendet.",
  sections: [
    {
      h2: "1. Wer wir sind",
      paragraphs: [
        "TubeTrace (tubetrace.pages.dev) ist ein kostenloses Tool zur Analyse des YouTube-Verlaufs, das Google-Takeout-Daten direkt in deinem Browser verarbeitet.",
      ],
    },
    {
      h2: "2. Daten, die wir erfassen",
      paragraphs: [
        "TubeTrace erfasst, speichert oder überträgt deinen YouTube-Verlauf NICHT. Die gesamte Verarbeitung erfolgt lokal auf deinem Gerät.",
        "Die einzigen Daten, die erfasst werden können, sind:",
      ],
      items: [
        "Anonyme Nutzungsdaten über Google Analytics (falls zutreffend): besuchte Seiten, Sitzungszeit, Herkunftsland. Dies identifiziert dich nicht persönlich.",
        "Werbungs-Cookies von Google AdSense, beschrieben in Abschnitt 5.",
      ],
    },
    {
      h2: "3. Daten, die du bereitstellst",
      paragraphs: [
        "Wenn du deine Google-Takeout-Datei (ZIP, JSON oder HTML) hochlädst, wird diese Datei direkt in deinem Browser über JavaScript gelesen. Die Datei wird NICHT an einen Server gesendet. Nach dem Schließen oder Neuladen der Seite werden die Daten automatisch gelöscht.",
      ],
    },
    {
      h2: "4. Cookies",
      paragraphs: ["Wir verwenden die folgenden Arten von Cookies:"],
      items: [
        "Erforderliche Cookies: erforderlich für die grundlegende Funktionalität der Website.",
        "Werbe-Cookies: Google AdSense verwendet Cookies, um relevante Anzeigen zu zeigen. Siehe Abschnitt 5.",
      ],
    },
    {
      h2: "5. Google AdSense und Werbung",
      paragraphs: [
        "Diese Website nutzt Google AdSense zur Schaltung von Anzeigen. Google verwendet als Drittanbieter Cookies, um Anzeigen basierend auf deinen bisherigen Besuchen dieser und anderer Websites zu schalten.",
      ],
      subsections: [
        {
          h3: "5.1 Google-Werbe-Cookies",
          paragraphs: [
            "Google AdSense nutzt die folgenden Arten von Cookies und Technologien:",
          ],
          items: [
            "Google-Werbe-Cookies: Werden für die Personalisierung von Anzeigen und Häufigkeitsbegrenzung verwendet.",
            "DoubleClick-Cookies: Verfolgen die Anzeigenleistung, verhindern Betrug und messen Conversions.",
            "Google Analytics (falls aktiviert): Cookies zur Messung der Website-Nutzung, besuchter Seiten und Sitzungszeit.",
            "Web Beacons und Internet-Signale: Kleine Bilder oder Skripte, die Interaktionen mit Anzeigen verfolgen.",
          ],
        },
        {
          h3: "5.2 So verwaltest du deine Einstellungen",
          paragraphs: [],
          items: [
            "Personalisierte Anzeigen ablehnen: adssettings.google.com — Konfiguriere deine Einstellungen für personalisierte Werbung.",
            "So nutzt Google Daten: Google-Datenschutzrichtlinie für Anzeigen (policies.google.com/technologies/ads).",
            "Google-Datenschutzrichtlinie: policies.google.com/privacy.",
            "Deine Zustimmung: Wenn du in der EU/EEA ansässig bist, siehst du beim Laden der Website ein Zustimmungsbanner.",
          ],
        },
        {
          h3: "5.3 Erforderliche vs. optionale Cookies",
          paragraphs: [
            "Erforderliche Cookies sind für die Funktionalität der Website notwendig. Werbe-Cookies sind optional.",
          ],
        },
      ],
    },
    {
      h2: "6. Drittanbieter-Dienste",
      paragraphs: [
        "TubeTrace kann die folgenden Drittanbieter-Dienste integrieren, jeder mit seiner eigenen Datenschutzrichtlinie:",
      ],
      items: [
        "Google AdSense — Werbung: policies.google.com/privacy",
        "Cloudflare Pages — Hosting: cloudflare.com/privacypolicy",
        "Google Fonts — Typographie: policies.google.com/privacy",
      ],
    },
    {
      h2: "7. Deine Rechte (DSGVO & CCPA)",
      paragraphs: [
        "Je nach deinem Standort hast du möglicherweise das Recht:",
      ],
      items: [
        "Bestätigung der Existenz von Datenverarbeitung",
        "Zugang zu deinen persönlichen Daten",
        "Berichtigung, Löschung oder Anonymisierung von Daten anfordern",
        "Deine Zustimmung jederzeit widerrufen",
      ],
    },
    {
      h2: "8. Minderjährige",
      paragraphs: [
        "TubeTrace ist nicht auf Kinder unter 13 Jahren ausgerichtet und erfasst nicht absichtlich Daten von Kindern.",
      ],
    },
    {
      h2: "9. Änderungen dieser Richtlinie",
      paragraphs: [
        "Wir können diese Richtlinie in regelmäßigen Abständen aktualisieren. Das Datum 'Zuletzt aktualisiert' oben gibt an, wann die neueste Überarbeitung erfolgt ist.",
      ],
    },
    {
      h2: "10. Kontakt",
      paragraphs: [
        "Fragen zu dieser Richtlinie? Öffne ein Issue auf github.com/LucasHenriqueDiniz/tubetrace.",
      ],
    },
  ],
};
