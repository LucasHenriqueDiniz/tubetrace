import type { HowToExportContent } from "../types";

export const howToExportIt: HowToExportContent = {
  meta: {
    title: "Esportare la Cronologia YouTube con Google Takeout — Guida Passo Passo",
    description:
      "Guida passo passo per esportare la cronologia YouTube con Google Takeout. Scarica i tuoi dati come file ZIP e analizzali con TubeTrace.",
  },
  eyebrow: "Guida",
  h1: "Come Esportare la Cronologia YouTube con Google Takeout",
  intro:
    "Risposta rapida: vai su takeout.google.com, deseleziona tutto, seleziona YouTube e YouTube Music, crea l'esportazione, scarica il file ZIP e caricalo su TubeTrace. L'intero processo richiede circa 5–10 minuti più il tempo necessario a Google per preparare il file.",
  timeNote:
    "Tempo necessario: 5–10 minuti di configurazione. Google solitamente consegna il file in pochi minuti o alcune ore, a seconda delle dimensioni del tuo storico.",
  stepsH2: "Istruzioni passo per passo",
  steps: [
    {
      title: "Apri Google Takeout",
      body: "Vai su takeout.google.com e accedi con l'account Google che usi per YouTube. Assicurati di essere connesso all'account corretto — se hai più account Google, controlla l'icona del profilo in alto a destra.",
    },
    {
      title: 'Clicca su "Deseleziona tutto"',
      body: "In cima all'elenco dei prodotti, clicca sul pulsante \"Deseleziona tutto\". Questo impedisce a Google di includere ogni prodotto Google che utilizzi, il che produrrebbe un'esportazione enorme che richiederebbe molto più tempo.",
    },
    {
      title: "Seleziona YouTube e YouTube Music",
      body: "Scorri l'elenco dei prodotti fino a trovare \"YouTube e YouTube Music\". Seleziona la casella accanto. Questo è l'unico prodotto necessario per TubeTrace.",
    },
    {
      title: "Configura le opzioni di esportazione",
      body: "Clicca su \"Tutti i dati YouTube inclusi\" accanto a YouTube e YouTube Music per vedere le opzioni. Assicurati che \"cronologia\" sia selezionato. Quando ti viene offerta la scelta tra formato JSON e HTML, scegli JSON — è più strutturato e TubeTrace può estrarre più dati.",
    },
    {
      title: "Crea l'esportazione",
      body: "Scorri fino in fondo e clicca su \"Passaggio successivo\". Scegli il metodo di consegna preferito (il link via email è il più semplice), seleziona il tipo di file (.zip è consigliato), scegli una dimensione massima del file (2 GB va bene) e clicca su \"Crea esportazione\".",
    },
    {
      title: "Aspetta l'email di Google",
      body: "Google ti invierà un'email quando l'esportazione sarà pronta. Per la cronologia YouTube, di solito ci vogliono pochi minuti. Se il tuo account ha anni di storico, potrebbe richiedere fino ad alcune ore. Riceverai un link per il download nella tua casella di posta.",
    },
    {
      title: "Scarica il file",
      body: "Clicca sul link di download nell'email. Salva il file .zip o .tgz sul tuo computer. Non è necessario aprirlo o estrarlo.",
    },
    {
      title: "Carica su TubeTrace",
      body: "Vai alla home page di TubeTrace e trascina il file scaricato nell'area di caricamento. Il tuo report apparirà in pochi secondi, elaborato interamente nel tuo browser.",
    },
  ],
  jsonVsHtmlH2: "JSON vs HTML: quale file scegliere?",
  jsonTitle: "JSON (Consigliato)",
  jsonItems: [
    "Dati strutturati con timestamp",
    "Più facile da analizzare in modo affidabile",
    "Disponibile sulla maggior parte degli account Google",
    "File: watch-history.json",
  ],
  htmlTitle: "HTML",
  htmlItems: [
    "Supportato anche da TubeTrace",
    "Leggibile in un browser",
    "Le date potrebbero essere in portoghese",
    "File: watch-history.html",
  ],
  problemsH2: "Problemi comuni e soluzioni",
  problems: [
    {
      problem: "TubeTrace dice \"Nessun file di cronologia trovato\"",
      solution:
        "Assicurati di aver selezionato \"cronologia\" nelle opzioni di esportazione YouTube. Se hai esportato solo iscrizioni o playlist, il file della cronologia non sarà presente.",
    },
    {
      problem: "L'esportazione mostra \"Nessuna voce\"",
      solution:
        "La cronologia YouTube potrebbe essere in pausa sul tuo account. Controlla su myaccount.google.com/activitycontrols se \"Cronologia YouTube\" è abilitata. Se l'eliminazione automatica è impostata su 3 mesi, le voci precedenti saranno scomparse.",
    },
    {
      problem: "Il file ZIP è troppo grande da caricare",
      solution:
        "Se hai selezionato più prodotti Google, il tuo archivio potrebbe essere molto grande. Crea una nuova esportazione selezionando solo \"YouTube e YouTube Music\". Il file risultante sarà molto più piccolo.",
    },
    {
      problem: "L'email di esportazione di Google non è mai arrivata",
      solution:
        "Controlla la cartella spam. Se dopo 24 ore non è arrivato nulla, torna su takeout.google.com e controlla \"Gestisci esportazioni\" per vedere lo stato.",
    },
  ],
  faqH2: "FAQ",
  faqs: [
    {
      q: "L'esportazione dei dati elimina qualcosa dal mio account YouTube?",
      a: "No. Google Takeout crea una copia dei tuoi dati. La cronologia YouTube, le iscrizioni e l'account rimangono completamente invariati.",
    },
    {
      q: "Posso richiedere i miei dati più di una volta?",
      a: "Sì. Puoi creare tutte le esportazioni che vuoi da takeout.google.com. Ogni esportazione riflette i tuoi dati al momento in cui è stata creata.",
    },
    {
      q: "È sicuro caricare la mia cronologia su TubeTrace?",
      a: "Sì. TubeTrace elabora il file localmente nel tuo browser e non lo invia mai a nessun server. Consulta la nostra informativa sulla privacy per tutti i dettagli.",
    },
  ],
  cta: {
    h2: "Pronto ad analizzare la tua cronologia?",
    desc: "Una volta ottenuto il file di Google Takeout, trascinalo su TubeTrace e visualizza il tuo report completo in pochi secondi.",
    upload: "Carica la mia esportazione",
    sample: "Guarda prima il report di esempio",
  },
};
