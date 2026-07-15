import type { GoogleTakeoutContent } from "../types";

export const googleTakeoutIt: GoogleTakeoutContent = {
  meta: {
    title: "Google Takeout Cronologia YouTube: Scaricare e Analizzare i Dati",
    description:
      "Scopri come funziona Google Takeout per la cronologia YouTube, quali file ottieni, come analizzare i dati della cronologia e quali approfondimenti TubeTrace può mostrarti.",
  },
  eyebrow: "Guida",
  h1: "Google Takeout Cronologia YouTube: Scaricare e Analizzare i Dati",
  intro:
    "Google Takeout ti permette di scaricare una copia di tutto ciò che YouTube ha registrato sulla tua attività — inclusa la cronologia completa delle visualizzazioni. Questa guida spiega cosa ottieni, cosa contengono i file e come trasformare quei dati in approfondimenti significativi con TubeTrace.",
  whatIsH2: "Cos'è Google Takeout?",
  whatIsPara1:
    "Google Takeout (ufficialmente \"Scarica i tuoi dati\") è un servizio che ti permette di esportare una copia dei dati del tuo account Google — inclusi Gmail, Drive, Foto, Maps e YouTube. Per YouTube in particolare, puoi scaricare la cronologia delle visualizzazioni, la cronologia delle ricerche, i commenti, i Mi Piace, le iscrizioni e le playlist.",
  whatIsPara2:
    "L'esportazione è un archivio ZIP o TGZ che scarichi sul tuo computer. I dati appartengono a te e non vengono elaborati da Google in modo speciale durante l'esportazione.",
  filesH2: "Quali file include Google Takeout per YouTube?",
  files: [
    {
      filename: "watch-history.json",
      desc: "Il file più importante per TubeTrace. Contiene un elenco di ogni video guardato, inclusi titolo, canale e timestamp esatto. Questo è il formato JSON — strutturato, leggibile da macchina e l'input preferito per TubeTrace.",
    },
    {
      filename: "watch-history.html",
      desc: "Gli stessi dati in formato HTML, leggibili in qualsiasi browser. TubeTrace supporta anche questo formato, sebbene JSON sia preferito perché si analizza in modo più affidabile.",
    },
    {
      filename: "search-history.json / search-history.html",
      desc: "Le tue ricerche YouTube con timestamp. TubeTrace non analizza la cronologia delle ricerche — solo la cronologia delle visualizzazioni.",
    },
  ],
  dataContainsH2: "Cosa contiene watch-history.json?",
  dataContainsPre: "Ogni voce nella cronologia JSON contiene:",
  dataContainsItems: [
    "Titolo del video (com'era al momento della visualizzazione)",
    "Nome del canale e URL del canale",
    "Timestamp esatto di quando l'hai guardato (formato ISO 8601)",
    "Tipo di attività (sempre \"Cronologia YouTube\" per i video guardati)",
  ],
  dataContainsPost:
    "Il file non include la durata del video, il numero di visualizzazioni, i Mi Piace o se hai guardato il video completamente. TubeTrace stima 5 minuti per video per i calcoli del tempo totale di visione.",
  howToH2: "Come scaricare la cronologia YouTube da Google Takeout",
  howToSteps: [
    "Vai su takeout.google.com e accedi.",
    "Clicca su \"Deseleziona tutto\" — questo evita di scaricare gigabyte di dati da ogni servizio Google.",
    "Scorri verso il basso e seleziona \"YouTube e YouTube Music\".",
    "Clicca su \"Tutti i dati YouTube inclusi\" per vedere le opzioni. Assicurati che \"cronologia\" sia abilitata. Scegli il formato JSON quando disponibile.",
    "Scorri fino in fondo, clicca su \"Passaggio successivo\", scegli la consegna via email, il formato ZIP e clicca su \"Crea esportazione\".",
    "Aspetta l'email di Google (di solito minuti o alcune ore), poi scarica il file ZIP.",
  ],
  whatCanH2: "Cosa può fare TubeTrace con i tuoi dati di Google Takeout?",
  whatCanPre:
    "TubeTrace legge il tuo watch-history.json (o HTML) dall'archivio Takeout e calcola un set completo di analisi — interamente nel tuo browser, senza caricare nulla:",
  whatCanItems: [
    "La tua personalità di visualizzatore YouTube (7 tipi)",
    "Canali principali per numero di video",
    "Rilevamento di sessioni binge (4+ video in 45 min)",
    "Heatmap dell'attività su tutti gli anni",
    "Pattern di visione per ora, giorno e mese",
    "Streak più lunga di visione consecutiva",
    "Tempo totale stimato in ore",
    "Giorno più attivo e mese di punta",
  ],
  faqH2: "Domande frequenti",
  faqs: [
    {
      q: "Quanto tempo impiega Google Takeout a preparare la mia esportazione YouTube?",
      a: "Di solito da pochi minuti a qualche ora, a seconda di quanta cronologia hai. Google ti invia un link di download via email non appena l'archivio è pronto — non serve tenere aperta la scheda di Takeout in attesa.",
    },
    {
      q: "Google Takeout include i video che ho messo mi piace o commentato?",
      a: "Sì, se selezioni l'opzione completa \"YouTube e YouTube Music\", l'esportazione può includere mi piace, commenti e playlist come file separati. TubeTrace legge solo watch-history.json/html; gli altri file vengono ignorati.",
    },
    {
      q: "Posso richiedere un'esportazione Takeout più di una volta?",
      a: "Sì, senza limiti. Ogni esportazione è un'istantanea aggiornata dei tuoi dati al momento della richiesta, quindi puoi riesportare quando vuoi un'analisi aggiornata.",
    },
    {
      q: "I miei dati di Google Takeout vengono condivisi con qualcuno?",
      a: "No. L'esportazione viene generata da Google esclusivamente per te e consegnata tramite un link di download privato collegato al tuo account. Nemmeno TubeTrace la riceve mai — il file viene letto interamente all'interno del tuo browser dopo averlo scaricato.",
    },
  ],
  cta: {
    h2: "Analizza i tuoi dati Google Takeout ora",
    desc: "Trascina il tuo ZIP YouTube Takeout su TubeTrace e ottieni la tua analisi completa in pochi secondi. 100% privato — il tuo file non lascia mai il browser.",
    upload: "Carica il mio Takeout",
    sample: "Vedi report di esempio",
    uploadLabel: "Carica il mio Takeout",
  },
};
