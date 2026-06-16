import type { FaqContent } from "../types";

export const faqDe: FaqContent = {
  meta: {
    title: "FAQ — TubeTrace YouTube-Wiedergabeverlauf-Analysator",
    description:
      "Häufig gestellte Fragen zu TubeTrace. Erfahre, wie du deinen YouTube-Verlauf exportierst, ob deine Daten sicher sind und wie die Analyse funktioniert.",
  },
  eyebrow: "FAQ",
  h1: "Häufig gestellte Fragen",
  intro:
    "Alles, was du über TubeTrace, deinen Datenschutz und den Export deines YouTube-Wiedergabeverlaufs wissen musst.",
  faqs: [
    {
      q: "Ist TubeTrace sicher zu verwenden?",
      a: "Ja. TubeTrace verarbeitet deine Datei vollständig in deinem Browser mit JavaScript. Dein YouTube-Wiedergabeverlauf verlässt dein Gerät nie — er wird nicht auf einen Server hochgeladen, in einer Datenbank gespeichert oder mit jemandem geteilt. Du kannst nach dem Laden der Seite die Verbindung zum Internet trennen und die Analyse funktioniert weiterhin.",
    },
    {
      q: "Verlassen meine Daten meinen Browser?",
      a: "Nein. Die Datei, die du hochlädst, wird lokal mit den im Browser integrierten Web-APIs dekomprimiert und analysiert. TubeTrace hat keinen Backend-Server, der Benutzerdateien verarbeitet. Die einzigen Netzwerkanfragen, die TubeTrace stellt, sind zum Laden der App selbst und zur Bereitstellung von Google Ads.",
    },
    {
      q: "Wie exportiere ich meinen YouTube-Wiedergabeverlauf?",
      a: "Gehe zu takeout.google.com, klicke auf „Alle abwählen”, scrolle dann nach unten und wähle nur „YouTube und YouTube Music” aus. Erstelle den Export, warte auf Googles E-Mail und lade die .zip-Datei herunter. Dann ziehe sie in den TubeTrace-Upload-Bereich.",
    },
    {
      q: "Welche Datei soll ich hochladen?",
      a: "Lade die .zip- oder .tgz-Datei hoch, die du von Google Takeout herunterlädst. Du musst sie nicht entpacken. TubeTrace akzeptiert auch die rohen watch-history.json- oder watch-history.html-Dateien, wenn du das Archiv bereits entpackt hast.",
    },
    {
      q: "Warum findet TubeTrace meinen Verlauf nicht in der ZIP?",
      a: "Stelle sicher, dass du in Google Takeout „YouTube und YouTube Music” ausgewählt hast und dass „Verlauf” in den Exportoptionen enthalten war. Bei einigen Konten ist der Wiedergabeverlauf möglicherweise pausiert — wenn ja, ist der Export leer. Überprüfe deine YouTube-Einstellungen unter myaccount.google.com/activitycontrols.",
    },
    {
      q: "Funktioniert TubeTrace offline?",
      a: "Sobald die Seite vollständig geladen ist, ja. Die Analyse läuft vollständig in deinem Browser ohne Internetverbindung. Google Ads und von Google CDN geladene Schriftarten werden jedoch ohne Verbindung nicht angezeigt.",
    },
    {
      q: "Ist TubeTrace mit YouTube oder Google verbunden?",
      a: "Nein. TubeTrace ist ein unabhängiges Open-Source-Projekt. Es ist nicht mit YouTube, Google oder Alphabet verbunden, wird nicht von ihnen unterstützt und steht in keiner Verbindung zu ihnen. Google Takeout und YouTube sind Marken von Google LLC.",
    },
    {
      q: "Welche YouTube-Verlaufsformate werden unterstützt?",
      a: "TubeTrace unterstützt das JSON-Format (watch-history.json) und das HTML-Format (watch-history.html), das Google Takeout produziert, sowie die .zip-, .tgz- und .tar.gz-Archive, die sie enthalten. JSON wird bevorzugt, da es strukturiertere Daten enthält.",
    },
    {
      q: "Mein Verlauf geht nur wenige Jahre zurück. Warum?",
      a: "Google Takeout exportiert genau das, was YouTube für dein Konto gespeichert hat. Wenn dein Wiedergabeverlauf irgendwann pausiert war, fehlen Einträge aus diesem Zeitraum. Wenn du die automatische Löschung (3 oder 18 Monate) aktiviert hast, sind ältere Einträge weg. TubeTrace kann nur analysieren, was der Export enthält.",
    },
    {
      q: "Kann ich TubeTrace ohne Datei-Upload verwenden?",
      a: "Ja — verwende die Schaltfläche „Demo-Daten laden” auf der Startseite, um einen Beispielbericht mit realistischen synthetischen Daten zu sehen. Du kannst auch einen vorab generierten Beispielbericht ohne Upload ansehen.",
    },
    {
      q: "Ist TubeTrace kostenlos?",
      a: "Ja, TubeTrace ist kostenlos nutzbar. Das Projekt ist Open Source auf GitHub. Es wird durch Google-AdSense-Anzeigen auf der Seite finanziert.",
    },
    {
      q: "Wie genau ist die Sehdauer-Schätzung?",
      a: "TubeTrace schätzt 5 Minuten pro angesehenem Video, da die tatsächliche Videodauer nicht im Google-Takeout-Export enthalten ist. Der echte Gesamtwert ist wahrscheinlich höher bei Langforminhalt und niedriger bei Shorts. Verwende die Schätzung als grobe Orientierungsgröße.",
    },
  ],
  stillHaveH2: "Noch Fragen?",
  stillHaveDesc:
    "Sieh dir die Schritt-für-Schritt-Exportanleitung an oder melde dich über die Kontaktseite.",
  cta: {
    analyze: "Meinen Verlauf analysieren",
    sample: "Beispielbericht ansehen",
  },
};
