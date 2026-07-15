import type { YoutubeWrappedContent } from "../types";

export const youtubeWrappedIt: YoutubeWrappedContent = {
  meta: {
    title: "Alternativa a YouTube Wrapped — Analizza la Cronologia come Spotify Wrapped",
    description:
      "YouTube non ha una funzione Wrapped come Spotify. TubeTrace è la migliore alternativa gratuita: ottieni la tua personalità di visione, i canali principali e le statistiche di binge da Google Takeout.",
  },
  eyebrow: "Guida",
  h1: "Alternativa a YouTube Wrapped: Analizza la Cronologia come Spotify Wrapped",
  intro:
    "Spotify Wrapped ti offre ogni dicembre un bellissimo riepilogo annuale. YouTube non ha una funzionalità equivalente — ma puoi crearne una tua con TubeTrace e i dati di Google Takeout.",
  doesYtHaveH2: "YouTube ha una funzione Wrapped?",
  doesYtHavePara1:
    "YouTube non ha un equivalente diretto di Spotify Wrapped. YouTube ha una funzionalità ufficiale \"Recap\" che appare per alcuni utenti alla fine dell'anno, ma ha requisiti rigorosi: hai bisogno di una quantità minima di cronologia delle visualizzazioni, la tua cronologia deve essere abilitata, e non è disponibile per tutti gli utenti o in tutte le regioni.",
  doesYtHavePara2:
    "Se non vedi un YouTube Recap, o se vuoi un'analisi più dettagliata e permanente, TubeTrace è la migliore alternativa gratuita — e funziona con la tua cronologia completa, non solo l'ultimo anno.",
  comparisonH2: "TubeTrace vs YouTube Recap",
  comparisonRows: [
    ["Cronologia completa (tutti gli anni)", true, false],
    ["Nessun accesso richiesto", true, false],
    ["100% privato", true, false],
    ["Funziona senza cronologia abilitata", true, false],
    ["Tipo di personalità di visione", true, false],
    ["Rilevamento sessioni binge", true, false],
    ["Heatmap dell'attività", true, false],
    ["Integrato nell'app YouTube", false, true],
    ["Schede highlight condivisibili", true, "limitato"],
  ],
  featuresH2: "Cosa mostra TubeTrace (come Spotify Wrapped)",
  features: [
    {
      title: "La tua personalità di visualizzatore",
      desc: "Come la personalità musicale di Spotify, TubeTrace identifica il tuo archetipo YouTube: Nottambulo, Binge Watcher, Fan Fedele, Cercatore di Varietà, Mattiniero, Guerriero del Weekend o Spettatore Equilibrato.",
    },
    {
      title: "Canali principali",
      desc: "Scopri quali canali hai guardato di più, quanti video hai visto da ciascuno e che percentuale della tua storia totale rappresentano.",
    },
    {
      title: "Tempo totale di visione",
      desc: "Ottieni una stima di quante ore hai trascorso su YouTube nel corso di tutta la tua storia. Preparati — il numero è spesso sorprendente.",
    },
    {
      title: "Sessioni binge",
      desc: "TubeTrace rileva le tue sessioni binge più grandi: i periodi in cui hai guardato il maggior numero di video in una breve finestra, inclusi i canali che hai guardato.",
    },
    {
      title: "Heatmap delle visualizzazioni",
      desc: "Un calendario di attività in stile GitHub che mostra ogni giorno in cui hai guardato YouTube — con intensità che indica quanto hai guardato ogni giorno.",
    },
    {
      title: "Abitudini di punta",
      desc: "Quando guardi di più? TubeTrace suddivide la tua attività per ora, giorno della settimana e mese per rivelare le tue abitudini su YouTube.",
    },
  ],
  howToH2: "Come ottenere il tuo equivalente YouTube Wrapped",
  howToSteps: [
    {
      title: "Esporta la tua cronologia",
      desc: "Vai su takeout.google.com, seleziona solo YouTube e YouTube Music e crea un'esportazione. Vedi la guida completa per le istruzioni passo per passo.",
    },
    {
      title: "Carica su TubeTrace",
      desc: "Trascina il file ZIP o TGZ scaricato sulla home page di TubeTrace. Non è necessario estrarlo. Il file viene elaborato interamente nel tuo browser.",
    },
    {
      title: "Esplora il tuo report",
      desc: "Il tuo equivalente completo di YouTube Wrapped appare istantaneamente — personalità, canali principali, sessioni binge, heatmap e tutte le tue abitudini nel corso degli anni.",
    },
    {
      title: "Condividi i risultati",
      desc: "Usa il pulsante Condividi per generare una scheda immagine 1080×1080 con le tue statistiche chiave, perfetta per condividere sui social media.",
    },
  ],
  faqH2: "Domande frequenti",
  faqs: [
    {
      q: "Posso ottenere uno YouTube Wrapped per un anno specifico, non tutta la mia cronologia?",
      a: "TubeTrace mostra la tua cronologia completa per impostazione predefinita, ma la heatmap dell'attività e le suddivisioni mensili ti permettono di concentrarti visivamente su un anno o mese specifico all'interno dei tuoi dati.",
    },
    {
      q: "TubeTrace funziona se il Recap di YouTube non è mai apparso sul mio account?",
      a: "Sì — TubeTrace non dipende affatto dall'idoneità al Recap di YouTube. Finché riesci a esportare un file di Google Takeout con la cronologia di visione, TubeTrace genera il tuo report completo, indipendentemente dal fatto che il Recap sia apparso per te.",
    },
    {
      q: "Il tipo di personalità si basa su un algoritmo reale o è casuale?",
      a: "Viene calcolato a partire da pattern reali nei tuoi dati — orari di visione, durata delle sessioni, fedeltà ai canali e coerenza tra i giorni — non è casuale. Due persone con abitudini diverse otterranno risultati di personalità diversi.",
    },
  ],
  cta: {
    h2: "Crea il tuo YouTube Wrapped ora",
    desc: "Gratuito, privato e funziona con la tua cronologia YouTube completa — non solo l'ultimo anno.",
    upload: "Analizza la mia cronologia",
    sample: "Vedi report di esempio",
  },
};
