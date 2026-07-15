import type { YoutubePrivacyContent } from "../types";

export const youtubePrivacyIt: YoutubePrivacyContent = {
  meta: {
    title: "La Cronologia YouTube è Privata? Chi Può Vedere Cosa Guardi",
    description:
      "Scopri chi può vedere la tua cronologia YouTube, se è privata per impostazione predefinita, come metterla in pausa o eliminarla e come TubeTrace mantiene i tuoi dati privati.",
  },
  eyebrow: "Guida",
  h1: "La Cronologia YouTube è Privata? Chi Può Vedere Cosa Guardi",
  intro:
    "Risposta breve: sì, la tua cronologia YouTube è privata per impostazione predefinita. Solo tu puoi vederla quando sei connesso al tuo account. Google può vederla per scopi pubblicitari, ma gli altri utenti YouTube non possono.",
  whoCanSeeH2: "Chi può vedere la tua cronologia YouTube?",
  whoCanSee: [
    {
      title: "Altri utenti YouTube",
      answer: "Non possono vederla",
      positive: true,
      desc: "La tua cronologia non è pubblica. Nessun altro utente YouTube — inclusi i creatori di canali — può vedere quali video hai guardato.",
    },
    {
      title: "Google / YouTube",
      answer: "Possono vederla",
      positive: false,
      desc: "Google usa la tua cronologia per personalizzare i consigli, la pubblicità mirata e le proprie analisi. Puoi rivedere ed eliminare questi dati su myaccount.google.com/data-and-privacy.",
    },
    {
      title: "Inserzionisti",
      answer: "Non possono vedere direttamente la tua cronologia",
      positive: true,
      desc: "Gli inserzionisti non ricevono la tua cronologia. Google la usa internamente per mostrarti annunci pertinenti, ma i dati grezzi non vengono venduti o forniti direttamente agli inserzionisti.",
    },
    {
      title: "Account condivisi / famiglia",
      answer: "Possono vederla se usano il tuo account",
      positive: false,
      desc: "Se più persone condividono un account Google o un dispositivo in cui il tuo account è connesso, possono vedere la tua cronologia nella pagina Cronologia di YouTube. Considera l'utilizzo di account separati o della modalità in incognito di YouTube.",
    },
    {
      title: "TubeTrace",
      answer: "Non può vederla",
      positive: true,
      desc: "TubeTrace elabora il file esportato interamente nel tuo browser. I dati non lasciano mai il tuo dispositivo e non vengono inviati a nessun server. TubeTrace non ha accesso al tuo account YouTube.",
    },
  ],
  howToPrivacyH2: "Come rendere più privata la tua cronologia YouTube",
  privacyOptions: [
    {
      title: "Metti in pausa la cronologia",
      desc: "Puoi impedire a YouTube di registrare nuove visualizzazioni. Vai su myaccount.google.com/activitycontrols e disattiva \"Cronologia YouTube\". Nota: questo impedisce anche il miglioramento dei consigli.",
    },
    {
      title: "Abilita l'eliminazione automatica",
      desc: "Imposta YouTube per eliminare automaticamente la tua cronologia dopo 3 o 18 mesi. Nella pagina Controlli attività, cerca \"Eliminazione automatica\" sotto Cronologia YouTube.",
    },
    {
      title: "Usa la modalità in incognito su YouTube",
      desc: "Nell'app mobile YouTube, tocca la tua foto del profilo e seleziona \"Attiva incognito\". I video guardati in modalità incognito non vengono aggiunti alla tua cronologia.",
    },
    {
      title: "Elimina video specifici o cancella tutta la cronologia",
      desc: "Vai su youtube.com/feed/history per sfogliare ed eliminare singoli video, o cancella tutta la tua cronologia. Nota: la cronologia eliminata non può essere recuperata.",
    },
  ],
  isSafeH2: "È sicuro analizzare la mia cronologia YouTube con TubeTrace?",
  isSafeTitle: "Sì — TubeTrace è 100% lato client",
  isSafeDesc:
    "TubeTrace elabora il tuo export di Google Takeout interamente nel tuo browser tramite JavaScript. Il tuo file non viene mai caricato su nessun server, archiviato in nessun database o trasmesso sulla rete. Una volta chiusa la scheda, i dati sono spariti.",
  isSafeItems: [
    "Nessun account o accesso richiesto",
    "Nessun cookie che archivia la tua cronologia",
    "Nessun server riceve i tuoi dati",
    "Open source — puoi verificare il codice su GitHub",
    "Funziona offline una volta caricata la pagina",
  ],
  faqH2: "Domande frequenti",
  faqs: [
    {
      q: "Un canale a cui sono iscritto può vedere che ho guardato i suoi video?",
      a: "No. I creator possono vedere conteggi di visualizzazioni aggregati e anonimi per il proprio canale, ma non possono vedere quali account specifici hanno guardato i loro video né collegare una visualizzazione alla tua identità.",
    },
    {
      q: "Cancellare la mia cronologia YouTube la elimina del tutto dai server di Google?",
      a: "Cancellare la cronologia la rimuove dalla vista del tuo account e da funzionalità come i consigli, ma le politiche generali di conservazione dei dati e di conservazione legale di Google (documentate nella privacy policy di Google) potrebbero mantenere alcuni record per un periodo limitato dal loro lato.",
    },
    {
      q: "Se uso TubeTrace, YouTube sa che ho analizzato la mia cronologia?",
      a: "No. TubeTrace non si connette mai al tuo account YouTube o Google — legge solo il file di esportazione che hai già scaricato, interamente all'interno del tuo browser. YouTube non ha alcuna visibilità su questo processo.",
    },
  ],
  cta: {
    h2: "Esplora la tua cronologia in modo privato",
    desc: "TubeTrace ti dà piena visibilità sulle tue abitudini di visione senza condividere alcun dato con nessuno. Esporta la tua cronologia da Google Takeout e analizzala in sicurezza.",
    upload: "Analizza la mia cronologia",
    exportGuide: "Come esportare i miei dati",
  },
};
