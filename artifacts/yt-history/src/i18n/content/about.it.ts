import type { AboutContent } from "../types";

export const aboutIt: AboutContent = {
  meta: {
    title: "Chi siamo — TubeTrace, Analizzatore Privato della Cronologia YouTube",
    description:
      "TubeTrace è un analizzatore gratuito della cronologia YouTube che mette la privacy al primo posto. I tuoi dati non lasciano mai il browser. Scopri il progetto e perché è stato creato.",
  },
  eyebrow: "Chi siamo",
  h1: "Cos'è TubeTrace?",
  intro:
    "TubeTrace è uno strumento gratuito e open source che analizza la tua cronologia YouTube da un export di Google Takeout — interamente nel tuo browser, senza server, senza accesso e senza raccolta dati.",
  features: [
    {
      title: "100% Privato",
      desc: "Il file della tua cronologia viene elaborato interamente nel tuo browser. Non lascia mai il tuo dispositivo.",
    },
    {
      title: "Analisi Istantanea",
      desc: "Ottieni la tua personalità di visione, i canali principali, le sessioni binge e i pattern di attività in pochi secondi.",
    },
    {
      title: "Nessun Account Richiesto",
      desc: "Nessun accesso, nessuna iscrizione, nessun tracciamento. Carica semplicemente il tuo export di Google Takeout e vedi le tue statistiche.",
    },
    {
      title: "Open Source",
      desc: "L'intero codice è pubblico. Puoi verificare esattamente cosa succede ai tuoi dati.",
    },
  ],
  whyH2: "Perché TubeTrace?",
  whyParas: [
    "La pagina della cronologia ufficiale di YouTube ti mostra cosa hai guardato, ma non ti dà alcuna comprensione di come guardi. TubeTrace colma questo divario: trasforma il tuo export grezzo in statistiche significative — la tua personalità come spettatore, quali canali dominano il tuo tempo, quando fai binge di più e come appaiono le tue abitudini quotidiane nel corso di mesi e anni.",
    "A differenza di altri strumenti, TubeTrace non invia mai i tuoi dati da nessuna parte. Il tuo ZIP di Google Takeout viene decompresso ed elaborato interamente nel tuo browser tramite JavaScript. Nel momento in cui chiudi la scheda, i dati sono spariti.",
    "TubeTrace supporta sia il formato JSON che HTML esportati da Google Takeout, nonché gli archivi compressi .zip, .tgz e .tar.gz che scarichi direttamente da Google. Non è necessaria alcuna estrazione.",
  ],
  whatH2: "Cosa analizza TubeTrace",
  whatItems: [
    "La tua personalità di visualizzatore YouTube (Nottambulo, Binge Watcher, Fan Fedele e altri)",
    "Canali principali per numero totale di video guardati",
    "Sessioni binge — video consecutivi in brevi finestre",
    "Heatmap dell'attività per ogni giorno della tua storia",
    "Pattern di visione per ora del giorno, giorno della settimana e mese",
    "Streak di visione più lunga (giorni consecutivi)",
    "Tempo totale stimato di visione",
    "Giorno più attivo in assoluto",
    "Ore di punta e suddivisione per fascia oraria",
  ],
  howH2: "Come usare TubeTrace",
  howSteps: [
    "Esporta la tua cronologia YouTube da Google Takeout. Seleziona solo YouTube e YouTube Music per mantenere il file piccolo.",
    "Scarica il file .zip o .tgz che Google ti invia.",
    "Trascina il file sulla pagina di caricamento di TubeTrace — non è necessaria alcuna estrazione.",
    "Il tuo report appare istantaneamente, elaborato interamente nel tuo browser.",
  ],
  cta: {
    analyze: "Analizza la mia cronologia",
    sample: "Vedi report di esempio",
    github: "Visualizza su GitHub",
  },
  creator: {
    h2: "Chi ha creato TubeTrace",
    name: "Lucas Henrique Diniz",
    bio: "Sviluppatore software che crea strumenti open-source incentrati sulla privacy. TubeTrace è uno di questi — pensato per far capire a chiunque le proprie abitudini su YouTube senza che nessun dato lasci il dispositivo.",
    links: {
      github: "https://github.com/LucasHenriqueDiniz/",
      website: "https://lucashdo.com/",
      linkedin: "https://www.linkedin.com/in/lucas-diniz-ostroski/",
    },
  },
};
