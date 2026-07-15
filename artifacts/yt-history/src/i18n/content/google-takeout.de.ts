import type { GoogleTakeoutContent } from "../types";

export const googleTakeoutDe: GoogleTakeoutContent = {
  meta: {
    title: "Google Takeout YouTube-Verlauf: Daten herunterladen und analysieren",
    description:
      "Erfahre, wie Google Takeout für den YouTube-Verlauf funktioniert, welche Dateien du erhältst, wie du deine Verlaufsdaten analysierst und welche Einblicke TubeTrace dir bietet.",
  },
  eyebrow: "Anleitung",
  h1: "Google Takeout YouTube-Verlauf: Daten herunterladen und analysieren",
  intro:
    "Mit Google Takeout kannst du eine Kopie aller YouTube-Aktivitäten herunterladen — einschließlich deines vollständigen Wiedergabeverlaufs. Diese Anleitung erklärt, was du erhältst, was die Dateien enthalten und wie du mit TubeTrace aussagekräftige Einblicke gewinnst.",
  whatIsH2: "Was ist Google Takeout?",
  whatIsPara1:
    "Google Takeout (offiziell „Daten herunterladen”) ist ein Dienst, mit dem du eine Kopie deiner Google-Kontodaten exportieren kannst — einschließlich Gmail, Drive, Fotos, Maps und YouTube. Für YouTube speziell kannst du deinen Wiedergabeverlauf, Suchverlauf, Kommentare, Likes, Abonnements und Wiedergabelisten herunterladen.",
  whatIsPara2:
    "Der Export ist ein ZIP- oder TGZ-Archiv, das du auf deinen Computer herunterlädst. Die Daten gehören dir und werden von Google während des Exports nicht auf besondere Weise verarbeitet.",
  filesH2: "Welche Dateien enthält Google Takeout für YouTube?",
  files: [
    {
      filename: "watch-history.json",
      desc: "Die wichtigste Datei für TubeTrace. Enthält eine Liste aller angesehenen Videos mit Titel, Kanal und genauen Zeitstempeln. Dies ist das JSON-Format — strukturiert, maschinenlesbar und die bevorzugte Eingabe für TubeTrace.",
    },
    {
      filename: "watch-history.html",
      desc: "Die gleichen Daten im HTML-Format, in jedem Browser lesbar. TubeTrace unterstützt auch dieses Format, obwohl JSON bevorzugt wird, da es zuverlässiger verarbeitet werden kann.",
    },
    {
      filename: "search-history.json / search-history.html",
      desc: "Deine YouTube-Suchanfragen mit Zeitstempeln. TubeTrace analysiert den Suchverlauf nicht — nur den Wiedergabeverlauf.",
    },
  ],
  dataContainsH2: "Was enthält watch-history.json?",
  dataContainsPre: "Jeder Eintrag in deinem Wiedergabeverlaufs-JSON enthält:",
  dataContainsItems: [
    "Videotitel (wie er zum Zeitpunkt des Schauens war)",
    "Kanalname und Kanal-URL",
    "Genauen Zeitstempel, wann du es angesehen hast (ISO-8601-Format)",
    "Aktivitätstyp (immer „YouTube-Wiedergabeverlauf” für angesehene Videos)",
  ],
  dataContainsPost:
    "Beachte: Die Datei enthält keine Videodauer, Aufrufzahlen, Likes oder ob du das Video vollständig angesehen hast. TubeTrace schätzt 5 Minuten pro Video für die Berechnung der gesamten Sehdauer.",
  howToH2: "So lädst du deinen YouTube-Verlauf von Google Takeout herunter",
  howToSteps: [
    "Gehe zu takeout.google.com und melde dich an.",
    "Klicke auf „Alle abwählen” — das verhindert das Herunterladen von Gigabytes an Daten von jedem Google-Dienst.",
    "Scrolle nach unten und wähle „YouTube und YouTube Music”.",
    "Klicke auf „Alle YouTube-Daten eingeschlossen”, um die Optionen anzuzeigen. Stelle sicher, dass „Verlauf” aktiviert ist. Wähle JSON-Format, wenn möglich.",
    "Scrolle nach unten, klicke auf „Nächster Schritt”, wähle Zustellung per E-Mail, ZIP-Format und klicke auf „Export erstellen”.",
    "Warte auf Googles E-Mail (normalerweise Minuten bis einige Stunden) und lade dann die ZIP-Datei herunter.",
  ],
  whatCanH2: "Was kann TubeTrace mit deinen Google-Takeout-Daten machen?",
  whatCanPre:
    "TubeTrace liest deine watch-history.json (oder HTML) aus dem Takeout-Archiv und berechnet vollständige Analysen — komplett in deinem Browser, ohne etwas hochzuladen:",
  whatCanItems: [
    "Deine YouTube-Schauerpersönlichkeit (7 Typen)",
    "Top-Kanäle nach Videoanzahl",
    "Erkennung von Binge-Sessions (4+ Videos in 45 Min.)",
    "Aktivitäts-Heatmap über alle Jahre",
    "Schaumuster nach Stunde, Tag und Monat",
    "Längste aufeinanderfolgende Schauserie",
    "Geschätzte Gesamtsehdauer in Stunden",
    "Aktivster Tag und Spitzenmonat",
  ],
  faqH2: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Wie lange dauert es, bis Google Takeout meinen YouTube-Export vorbereitet hat?",
      a: "In der Regel wenige Minuten bis einige Stunden, je nachdem wie viel Verlauf du hast. Google schickt dir eine E-Mail mit Download-Link, sobald das Archiv fertig ist — du musst den Takeout-Tab dabei nicht offen lassen.",
    },
    {
      q: "Enthält Google Takeout auch Videos, die ich geliked oder kommentiert habe?",
      a: "Ja, wenn du die vollständige Option „YouTube und YouTube Music” auswählst, kann der Export Likes, Kommentare und Playlists als separate Dateien enthalten. TubeTrace liest nur watch-history.json/html; die anderen Dateien werden ignoriert.",
    },
    {
      q: "Kann ich mehr als einmal einen Takeout-Export anfordern?",
      a: "Ja, ohne Einschränkung. Jeder Export ist eine aktuelle Momentaufnahme deiner Daten zum Zeitpunkt der Anfrage, du kannst also jederzeit neu exportieren, wenn du eine aktualisierte Analyse möchtest.",
    },
    {
      q: "Werden meine Google-Takeout-Daten mit irgendjemandem geteilt?",
      a: "Nein. Der Export wird von Google exklusiv für dich erstellt und über einen privaten, an dein Konto gebundenen Download-Link bereitgestellt. Auch TubeTrace erhält ihn nie — die Datei wird vollständig in deinem Browser gelesen, nachdem du sie heruntergeladen hast.",
    },
  ],
  cta: {
    h2: "Analysiere deine Google-Takeout-Daten jetzt",
    desc: "Ziehe dein YouTube-Takeout-ZIP auf TubeTrace und erhalte deine vollständige Analyse in Sekunden. 100% privat — deine Datei verlässt nie deinen Browser.",
    upload: "Mein Takeout hochladen",
    sample: "Beispielbericht ansehen",
    uploadLabel: "Mein Takeout hochladen",
  },
};
