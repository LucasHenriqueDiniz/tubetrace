import type { YoutubeRecapContent } from "../types";

export const youtubeRecapDe: YoutubeRecapContent = {
  meta: {
    title: "YouTube Recap wird nicht angezeigt? Ursachen und Lösungen",
    description:
      "YouTube Recap erscheint nicht? Erfahre die genauen Voraussetzungen für YouTube Recap und wie du mit TubeTrace deine eigene Jahresrückschau siehst.",
  },
  eyebrow: "Anleitung",
  h1: "YouTube Recap wird nicht angezeigt? Das sind die Gründe",
  intro:
    "YouTube Recap ist eine optionale Jahresrückschau-Funktion, die nicht jeder erhält. Wenn deine nicht angezeigt wird, liegt es wahrscheinlich daran, dass dein Konto eine oder mehrere der Zulassungsvoraussetzungen von YouTube nicht erfüllt — die YouTube nicht vollständig öffentlich bekannt gemacht hat.",
  requirementsH2: "Bekannte Voraussetzungen für YouTube Recap",
  requirements: [
    {
      title: "Wiedergabeverlauf muss aktiviert sein",
      desc: "YouTube Recap erfordert einen aktiven Wiedergabeverlauf. Wenn du deinen YouTube-Verlauf pausiert hast, gehe zu myaccount.google.com/activitycontrols und aktiviere „YouTube-Verlauf” erneut. Zukünftige Wiedergaben werden aufgezeichnet, aber vergangene pausierte Zeiträume fehlen weiterhin.",
    },
    {
      title: "Ausreichende Schauaktivität",
      desc: "YouTube hat den Mindestschwellenwert nicht veröffentlicht, aber Recap scheint eine bedeutende Menge an Wiedergabe zu erfordern. Konten mit sehr wenig Wiedergabeverlauf qualifizieren sich möglicherweise nicht.",
    },
    {
      title: "Kontoalter und Region",
      desc: "YouTube Recap wurde schrittweise eingeführt und ist möglicherweise nicht in allen Ländern oder für neuere Konten verfügbar. Selbst berechtigte Konten sehen es möglicherweise zu unterschiedlichen Zeiten.",
    },
    {
      title: "Automatische Löscheinstellungen",
      desc: "Wenn du YouTube so eingestellt hast, dass der Wiedergabeverlauf nach 3 oder 18 Monaten automatisch gelöscht wird, sind möglicherweise nicht genug Daten für Recap vorhanden, um eine aussagekräftige Zusammenfassung zu erstellen.",
    },
  ],
  howToCheckH2: "So überprüfst du, ob dein YouTube-Verlauf aktiviert ist",
  howToCheckSteps: [
    "Gehe zu myaccount.google.com/activitycontrols",
    "Finde „YouTube-Verlauf” in der Liste.",
    "Wenn der Schalter aus ist oder „Pausiert” anzeigt, klicke darauf, um ihn wieder einzuschalten.",
    "Überprüfe optional die automatischen Löscheinstellungen — setze sie auf „Bis ich sie lösche”, um den gesamten zukünftigen Verlauf zu behalten.",
  ],
  howToCheckNote:
    "Hinweis: Das Aktivieren des Verlaufs jetzt wird zuvor gelöschte Einträge nicht wiederherstellen, aber es stellt sicher, dass zukünftige Wiedergaben für den Recap des nächsten Jahres gezählt werden.",
  alternativeH2: "YouTube Recap nicht verfügbar? Verwende stattdessen TubeTrace",
  alternativePara1:
    "Wenn du YouTube Recap nicht siehst oder eine detailliertere und immer verfügbare Analyse möchtest, bietet dir TubeTrace die gleiche Art von Einblicken — mit mehr Tiefe, für deine gesamte Geschichte, jetzt sofort.",
  alternativePara2:
    "TubeTrace analysiert deinen Google-Takeout-Export: die rohe Datendatei, die YouTube in deinem Namen speichert. Das bedeutet, du kannst deine komplette Wiedergabehistorie sehen — nicht nur das letzte Jahr — einschließlich deiner Schauerpersönlichkeit, Binge-Muster, Top-Kanäle und täglichen Gewohnheiten.",
  alternativeItems: [
    "Funktioniert auch wenn YouTube Recap nicht verfügbar ist",
    "Zeigt deine vollständige Geschichte, nicht nur ein Jahr",
    "Schauerpersönlichkeitstyp (7 Archetypen)",
    "Top-Kanäle mit prozentualer Aufschlüsselung",
    "Binge-Session-Erkennung",
    "GitHub-ähnliche Aktivitäts-Heatmap",
    "100% privat — im Browser verarbeitet",
    "Kein Login oder Konto erforderlich",
  ],
  cta: {
    h2: "Warte nicht auf YouTube Recap",
    desc: "Erhalte deine vollständige YouTube-Jahresrückschau jetzt sofort — für jedes Jahr, für das du Geschichte hast.",
    upload: "Meinen Verlauf analysieren",
    exportGuide: "Wie exportiere ich meine Daten",
  },
};
