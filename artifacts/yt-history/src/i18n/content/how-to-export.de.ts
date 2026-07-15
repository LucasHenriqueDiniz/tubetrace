import type { HowToExportContent } from "../types";

export const howToExportDe: HowToExportContent = {
  meta: {
    title: "YouTube-Wiedergabeverlauf exportieren mit Google Takeout — Anleitung",
    description:
      "Schritt-für-Schritt-Anleitung zum Exportieren des YouTube-Wiedergabeverlaufs mit Google Takeout. Lade deine Daten als ZIP-Datei herunter und analysiere sie mit TubeTrace.",
  },
  eyebrow: "Anleitung",
  h1: "YouTube-Wiedergabeverlauf mit Google Takeout exportieren",
  intro:
    "Kurzantwort: Gehe zu takeout.google.com, deaktiviere alles, wähle YouTube und YouTube Music aus, erstelle den Export, lade die ZIP-Datei herunter und lade sie bei TubeTrace hoch. Der gesamte Vorgang dauert etwa 5–10 Minuten zuzüglich der Zeit, die Google für die Vorbereitung der Datei benötigt.",
  timeNote:
    "Zeitaufwand: 5–10 Minuten Einrichtung. Google liefert die Datei in der Regel innerhalb weniger Minuten bis zu einigen Stunden, je nach Größe deines Verlaufs.",
  stepsH2: "Schritt-für-Schritt-Anleitung",
  steps: [
    {
      title: "Google Takeout öffnen",
      body: "Gehe zu takeout.google.com und melde dich mit dem Google-Konto an, das du für YouTube verwendest. Stelle sicher, dass du beim richtigen Konto angemeldet bist — falls du mehrere Google-Konten hast, überprüfe das Profilsymbol oben rechts.",
    },
    {
      title: '„Alle abwählen” klicken',
      body: "Klicke oben in der Produktliste auf die Schaltfläche „Alle abwählen”. Dies verhindert, dass Google jedes deiner Google-Produkte einschließt, was zu einem riesigen Export führen würde, der viel länger dauert.",
    },
    {
      title: "YouTube und YouTube Music auswählen",
      body: "Scrolle in der Produktliste nach unten, bis du „YouTube und YouTube Music” findest. Setze dort einen Haken. Das ist das einzige Produkt, das du für TubeTrace benötigst.",
    },
    {
      title: "Exportoptionen konfigurieren",
      body: "Klicke auf „Alle YouTube-Daten eingeschlossen” neben YouTube und YouTube Music, um die Optionen anzuzeigen. Stelle sicher, dass „Verlauf” ausgewählt ist. Wenn du zwischen JSON und HTML wählen kannst, wähle JSON — es ist strukturierter und TubeTrace kann damit mehr Daten extrahieren.",
    },
    {
      title: "Export erstellen",
      body: "Scrolle nach unten und klicke auf „Nächster Schritt”. Wähle deine bevorzugte Zustellmethode (E-Mail-Link ist am einfachsten), wähle den Dateityp (.zip empfohlen), eine maximale Dateigröße (2 GB ist ausreichend) und klicke auf „Export erstellen”.",
    },
    {
      title: "Auf Google-E-Mail warten",
      body: "Google sendet dir eine E-Mail, wenn der Export fertig ist. Für den YouTube-Verlauf dauert das normalerweise einige Minuten. Bei jahrelangem Verlauf kann es bis zu einigen Stunden dauern. Du erhältst einen Download-Link in deinem Posteingang.",
    },
    {
      title: "Datei herunterladen",
      body: "Klicke auf den Download-Link in der E-Mail. Speichere die .zip- oder .tgz-Datei auf deinem Computer. Du musst sie nicht öffnen oder entpacken.",
    },
    {
      title: "Bei TubeTrace hochladen",
      body: "Gehe zur TubeTrace-Startseite und ziehe die heruntergeladene Datei in den Upload-Bereich. Dein Bericht erscheint in wenigen Sekunden, vollständig in deinem Browser verarbeitet.",
    },
  ],
  jsonVsHtmlH2: "JSON vs. HTML: Welche Datei soll ich wählen?",
  jsonTitle: "JSON (Empfohlen)",
  jsonItems: [
    "Strukturierte Daten mit Zeitstempeln",
    "Einfacher und zuverlässiger zu verarbeiten",
    "Bei den meisten Google-Konten verfügbar",
    "Datei: watch-history.json",
  ],
  htmlTitle: "HTML",
  htmlItems: [
    "Ebenfalls von TubeTrace unterstützt",
    "Im Browser lesbar",
    "Datumsangaben können auf Portugiesisch sein",
    "Datei: watch-history.html",
  ],
  problemsH2: "Häufige Probleme und Lösungen",
  problems: [
    {
      problem: "TubeTrace zeigt „Keine Verlaufsdatei gefunden”",
      solution:
        "Stelle sicher, dass du in den YouTube-Exportoptionen „Verlauf” ausgewählt hast. Wenn du nur Abonnements oder Wiedergabelisten exportiert hast, ist die Verlaufsdatei nicht vorhanden.",
    },
    {
      problem: "Der Export zeigt „Keine Einträge”",
      solution:
        "Der YouTube-Wiedergabeverlauf könnte für dein Konto pausiert sein. Überprüfe unter myaccount.google.com/activitycontrols, ob „YouTube-Verlauf” aktiviert ist. Wenn die automatische Löschung auf 3 Monate eingestellt ist, sind ältere Einträge verschwunden.",
    },
    {
      problem: "Die ZIP-Datei ist zu groß zum Hochladen",
      solution:
        "Wenn du mehrere Google-Produkte ausgewählt hast, kann dein Archiv sehr groß sein. Erstelle einen neuen Export und wähle nur „YouTube und YouTube Music” aus. Die resultierende Datei wird wesentlich kleiner sein.",
    },
    {
      problem: "Die Export-E-Mail von Google ist nie angekommen",
      solution:
        "Überprüfe deinen Spam-Ordner. Wenn nach 24 Stunden nichts angekommen ist, gehe zurück zu takeout.google.com und sieh unter „Exporte verwalten” den Status nach.",
    },
    {
      problem: "Der Export enthält nur wenige Monate an Verlauf",
      solution:
        "Das bedeutet meist, dass die automatische Löschung für dein Konto aktiviert ist. Gehe zu myaccount.google.com/activitycontrols, suche „YouTube-Verlauf” und überprüfe die Einstellung zur automatischen Löschung — steht sie auf 3 oder 18 Monaten, wurden ältere Einträge bereits dauerhaft von Google entfernt und können auch mit einem neuen Export nicht wiederhergestellt werden.",
    },
    {
      problem: "TubeTrace zeigt weniger Videos an als erwartet",
      solution:
        "Die Datei watch-history.json enthält nur Videos, die angemeldet und mit aktiviertem Verlauf angesehen wurden. Videos, die im Inkognito-Modus, abgemeldet oder während einer Pause des Verlaufs angesehen wurden, erscheinen nicht — das ist eine Einschränkung der YouTube-Daten, kein Problem von TubeTrace.",
    },
  ],
  faqH2: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Werden durch den Export Daten aus meinem YouTube-Konto gelöscht?",
      a: "Nein. Google Takeout erstellt eine Kopie deiner Daten. Dein YouTube-Verlauf, deine Abonnements und dein Konto bleiben vollständig unverändert.",
    },
    {
      q: "Kann ich meine Daten mehrfach anfordern?",
      a: "Ja. Du kannst beliebig viele Exporte von takeout.google.com erstellen. Jeder Export spiegelt deine Daten zum Zeitpunkt der Erstellung wider.",
    },
    {
      q: "Ist es sicher, meinen Wiedergabeverlauf bei TubeTrace hochzuladen?",
      a: "Ja. TubeTrace verarbeitet die Datei lokal in deinem Browser und sendet sie nie an einen Server. Weitere Details findest du in unserer Datenschutzrichtlinie.",
    },
    {
      q: "Muss ich mich bei TubeTrace anmelden, um meine Ergebnisse zu sehen?",
      a: "Nein. TubeTrace hat überhaupt kein Login-System. Du ziehst einfach deine exportierte Datei auf die Upload-Seite und dein Bericht wird sofort in deinem Browser erstellt.",
    },
    {
      q: "Kann ich meinen Verlauf über die YouTube-App statt über einen Browser exportieren?",
      a: "Google Takeout ist nur über einen Browser unter takeout.google.com verfügbar — es gibt keine Exportoption in der YouTube-Mobile-App. Du kannst takeout.google.com trotzdem im Browser deines Handys öffnen und dieselben Schritte befolgen.",
    },
    {
      q: "Was, wenn ich viele Jahre an Verlauf habe?",
      a: "TubeTrace hat keine Begrenzung, wie viel Verlauf es verarbeiten kann — es kommt mit Exporten zurecht, die ein Jahrzehnt oder mehr abdecken. Sehr große Exporte (Zehntausende Einträge) können ein paar Sekunden länger zum Verarbeiten brauchen, aber alles läuft weiterhin lokal in deinem Browser ab.",
    },
  ],
  cta: {
    h2: "Bereit, deinen Verlauf zu analysieren?",
    desc: "Sobald du deine Google-Takeout-Datei hast, ziehe sie auf TubeTrace und sieh deinen vollständigen Bericht in Sekunden.",
    upload: "Meinen Export hochladen",
    sample: "Zuerst Beispielbericht ansehen",
  },
};
