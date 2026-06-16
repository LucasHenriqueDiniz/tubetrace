import type { YoutubePrivacyContent } from "../types";

export const youtubePrivacyDe: YoutubePrivacyContent = {
  meta: {
    title: "Ist der YouTube-Wiedergabeverlauf privat? Wer kann sehen, was du schaust",
    description:
      "Erfahre, wer deinen YouTube-Wiedergabeverlauf sehen kann, ob er standardmäßig privat ist, wie du ihn pausieren oder löschen kannst und wie TubeTrace deine Daten privat hält.",
  },
  eyebrow: "Anleitung",
  h1: "Ist der YouTube-Wiedergabeverlauf privat? Wer kann sehen, was du schaust",
  intro:
    "Kurze Antwort: Ja, dein YouTube-Wiedergabeverlauf ist standardmäßig privat. Nur du kannst ihn sehen, wenn du in deinem Konto angemeldet bist. Google kann ihn für Werbezwecke sehen, aber andere YouTube-Nutzer können es nicht.",
  whoCanSeeH2: "Wer kann deinen YouTube-Wiedergabeverlauf sehen?",
  whoCanSee: [
    {
      title: "Andere YouTube-Nutzer",
      answer: "Können ihn nicht sehen",
      positive: true,
      desc: "Dein Wiedergabeverlauf ist nicht öffentlich. Kein anderer YouTube-Nutzer — einschließlich Kanalersteller — kann sehen, welche Videos du angesehen hast.",
    },
    {
      title: "Google / YouTube",
      answer: "Können ihn sehen",
      positive: false,
      desc: "Google verwendet deinen Wiedergabeverlauf, um Empfehlungen zu personalisieren, zielgerichtete Werbung zu schalten und eigene Analysen durchzuführen. Du kannst diese Daten unter myaccount.google.com/data-and-privacy einsehen und löschen.",
    },
    {
      title: "Werbetreibende",
      answer: "Können deinen Verlauf nicht direkt sehen",
      positive: true,
      desc: "Werbetreibende erhalten deinen Wiedergabeverlauf nicht. Google verwendet ihn intern, um dir relevante Werbung zu zeigen, aber die Rohdaten werden nicht verkauft oder direkt an Werbetreibende weitergegeben.",
    },
    {
      title: "Gemeinsame Konten / Familie",
      answer: "Können ihn sehen, wenn sie dein Konto verwenden",
      positive: false,
      desc: "Wenn mehrere Personen ein Google-Konto oder ein Gerät teilen, auf dem dein Konto angemeldet ist, können sie deinen Wiedergabeverlauf auf der YouTube-Verlaufsseite sehen. Erwäge die Verwendung separater Konten oder YouTubes Inkognito-Modus.",
    },
    {
      title: "TubeTrace",
      answer: "Kann ihn nicht sehen",
      positive: true,
      desc: "TubeTrace verarbeitet deine exportierte Datei vollständig in deinem Browser. Die Daten verlassen dein Gerät nicht und werden nicht an einen Server gesendet. TubeTrace hat keinen Zugriff auf dein YouTube-Konto.",
    },
  ],
  howToPrivacyH2: "So machst du deinen YouTube-Wiedergabeverlauf privater",
  privacyOptions: [
    {
      title: "Wiedergabeverlauf pausieren",
      desc: "Du kannst YouTube davon abhalten, neue Wiedergaben aufzuzeichnen. Gehe zu myaccount.google.com/activitycontrols und schalte „YouTube-Verlauf” aus. Hinweis: Dadurch verbessern sich auch die Empfehlungen nicht mehr.",
    },
    {
      title: "Automatische Löschung aktivieren",
      desc: "Stelle YouTube so ein, dass dein Verlauf nach 3 oder 18 Monaten automatisch gelöscht wird. Suche auf der Seite „Aktivitätssteuerung” unter „YouTube-Verlauf” nach „Automatisch löschen”.",
    },
    {
      title: "Inkognito-Modus auf YouTube verwenden",
      desc: "Tippe in der YouTube-App auf dein Profilbild und wähle „Inkognito aktivieren”. Videos, die im Inkognito-Modus angesehen werden, werden nicht zu deinem Verlauf hinzugefügt.",
    },
    {
      title: "Bestimmte Videos löschen oder gesamten Verlauf löschen",
      desc: "Gehe zu youtube.com/feed/history, um einzelne Videos zu durchsuchen und zu löschen, oder lösche deinen gesamten Wiedergabeverlauf. Hinweis: Gelöschter Verlauf kann nicht wiederhergestellt werden.",
    },
  ],
  isSafeH2: "Ist es sicher, meinen YouTube-Verlauf mit TubeTrace zu analysieren?",
  isSafeTitle: "Ja — TubeTrace ist 100% clientseitig",
  isSafeDesc:
    "TubeTrace verarbeitet deinen Google-Takeout-Export vollständig in deinem Browser mit JavaScript. Deine Datei wird nie auf einen Server hochgeladen, in einer Datenbank gespeichert oder über das Netzwerk übertragen. Sobald du den Tab schließt, sind die Daten weg.",
  isSafeItems: [
    "Kein Konto oder Login erforderlich",
    "Keine Cookies, die deinen Verlauf speichern",
    "Kein Server empfängt deine Daten",
    "Open Source — du kannst den Code auf GitHub überprüfen",
    "Funktioniert offline, sobald die Seite geladen ist",
  ],
  cta: {
    h2: "Erkunde deinen Verlauf privat",
    desc: "TubeTrace gibt dir vollständige Einblicke in deine Schaugewohnheiten, ohne Daten mit jemandem zu teilen. Exportiere deinen Verlauf von Google Takeout und analysiere ihn sicher.",
    upload: "Meinen Verlauf analysieren",
    exportGuide: "Wie exportiere ich meine Daten",
  },
};
