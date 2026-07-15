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
  faqH2: "Domande frequenti",
  faqs: [
    {
      q: "YouTube Recap comparirà prima o poi se aspetto e basta?",
      a: "Possibile — YouTube distribuisce Recap gradualmente e non garantisce una data. Se non vuoi aspettare, TubeTrace ti offre subito lo stesso tipo di informazioni, senza dipendere dai tempi di rilascio di YouTube.",
    },
    {
      q: "Riattivare la mia cronologia risolve Recap retroattivamente?",
      a: "No. Riattivare la cronologia influisce solo sulla visione futura — non può recuperare i dati di un periodo in cui la cronologia era in pausa o eliminata. TubeTrace ha lo stesso limite, dato che dipende anch'esso dal file di cronologia mantenuto da YouTube stesso.",
    },
    {
      q: "C'è un modo ufficiale per contattare YouTube riguardo a Recap mancante?",
      a: "YouTube non offre assistenza individuale per l'idoneità a Recap, trattandosi di un rilascio automatizzato basato su criteri, non di una funzione concessa manualmente. Non esiste un ticket di assistenza che lo faccia comparire prima.",
    },
  ],
  cta: {
    h2: "Non aspettare YouTube Recap",
    desc: "Ottieni il tuo riepilogo annuale YouTube completo proprio ora — per ogni anno di cui hai la cronologia.",
    upload: "Analizza la mia cronologia",
    exportGuide: "Come esportare i miei dati",
  },
};
