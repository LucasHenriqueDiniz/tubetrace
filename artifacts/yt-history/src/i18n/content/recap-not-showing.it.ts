import type { YoutubeRecapContent } from "../types";

export const youtubeRecapIt: YoutubeRecapContent = {
  meta: {
    title: "YouTube Recap Non Appare? Ecco Perché e Come Rimediare",
    description:
      "YouTube Recap non appare? Scopri i requisiti esatti per YouTube Recap e come vedere il tuo riepilogo annuale YouTube con TubeTrace.",
  },
  eyebrow: "Guida",
  h1: "YouTube Recap Non Appare? Ecco Perché",
  intro:
    "YouTube Recap è una funzionalità opzionale di riepilogo annuale che non tutti ricevono. Se il tuo non appare, è probabile che il tuo account non soddisfi uno o più dei requisiti di idoneità di YouTube — che YouTube non ha divulgato completamente in dettaglio pubblicamente.",
  requirementsH2: "Requisiti noti per YouTube Recap",
  requirements: [
    {
      title: "La cronologia delle visualizzazioni deve essere abilitata",
      desc: "YouTube Recap richiede una cronologia delle visualizzazioni attiva. Se hai messo in pausa la tua cronologia YouTube, vai su myaccount.google.com/activitycontrols e riabilita \"Cronologia YouTube\". Le visualizzazioni future verranno registrate, ma i periodi passati in pausa rimarranno mancanti.",
    },
    {
      title: "Attività di visione sufficiente",
      desc: "YouTube non ha pubblicato la soglia minima, ma Recap sembra richiedere una quantità significativa di visione. Gli account con pochissima cronologia potrebbero non qualificarsi.",
    },
    {
      title: "Età dell'account e regione",
      desc: "YouTube Recap è stato distribuito gradualmente e potrebbe non essere disponibile in tutti i paesi o per gli account più recenti. Anche gli account idonei potrebbero vederlo in momenti diversi.",
    },
    {
      title: "Impostazioni di eliminazione automatica",
      desc: "Se hai impostato YouTube per eliminare automaticamente la cronologia dopo 3 o 18 mesi, potrebbe non esserci abbastanza dati per Recap per generare un riepilogo significativo.",
    },
  ],
  howToCheckH2: "Come verificare se la cronologia YouTube è abilitata",
  howToCheckSteps: [
    "Vai su myaccount.google.com/activitycontrols",
    "Trova \"Cronologia YouTube\" nell'elenco.",
    "Se l'interruttore è spento o dice \"In pausa\", clicca per riattivarlo.",
    "Opzionalmente, controlla le impostazioni di eliminazione automatica — impostala su \"Conserva fino a quando non elimino\" per conservare tutta la cronologia futura.",
  ],
  howToCheckNote:
    "Nota: abilitare la cronologia ora non recupererà le voci precedentemente eliminate, ma garantirà che le visualizzazioni future vengano conteggiate per il Recap dell'anno prossimo.",
  alternativeH2: "YouTube Recap non disponibile? Usa TubeTrace invece",
  alternativePara1:
    "Se non vedi YouTube Recap, o se vuoi un'analisi più dettagliata e sempre disponibile, TubeTrace ti offre lo stesso tipo di approfondimenti — con più profondità, per tutta la tua cronologia, proprio ora.",
  alternativePara2:
    "TubeTrace funziona analizzando il tuo export di Google Takeout: il file di dati grezzo che YouTube conserva per te. Ciò significa che puoi vedere la tua cronologia completa delle visualizzazioni — non solo l'ultimo anno — inclusa la tua personalità di visione, i pattern di binge, i canali principali e le abitudini quotidiane.",
  alternativeItems: [
    "Funziona anche se YouTube Recap non è disponibile",
    "Mostra la tua cronologia completa, non solo un anno",
    "Tipo di personalità di visione (7 archetipi)",
    "Canali principali con suddivisione percentuale",
    "Rilevamento sessioni binge",
    "Heatmap attività in stile GitHub",
    "100% privato — elaborato nel browser",
    "Nessun accesso o account richiesto",
  ],
  cta: {
    h2: "Non aspettare YouTube Recap",
    desc: "Ottieni il tuo riepilogo annuale YouTube completo proprio ora — per ogni anno di cui hai la cronologia.",
    upload: "Analizza la mia cronologia",
    exportGuide: "Come esportare i miei dati",
  },
};
