import type { FaqContent } from "../types";

export const faqIt: FaqContent = {
  meta: {
    title: "FAQ — TubeTrace Analizzatore Cronologia YouTube",
    description:
      "Domande frequenti su TubeTrace. Scopri come esportare la cronologia YouTube, se i tuoi dati sono al sicuro e come funziona l'analisi.",
  },
  eyebrow: "FAQ",
  h1: "Domande Frequenti",
  intro:
    "Tutto quello che devi sapere su TubeTrace, la privacy dei tuoi dati e come esportare la cronologia YouTube.",
  faqs: [
    {
      q: "TubeTrace è sicuro da usare?",
      a: "Sì. TubeTrace elabora il tuo file interamente nel browser tramite JavaScript. La tua cronologia YouTube non lascia mai il dispositivo — non viene caricata su nessun server, archiviata in nessun database o condivisa con nessuno. Puoi disconnetterti da Internet dopo aver caricato la pagina e l'analisi funzionerà comunque.",
    },
    {
      q: "I miei dati lasciano il browser?",
      a: "No. Il file che carichi viene decompresso e analizzato localmente usando le Web API integrate nel browser. TubeTrace non ha un server backend che gestisce i file degli utenti. Le uniche richieste di rete che TubeTrace fa sono per caricare l'app stessa e servire Google Ads.",
    },
    {
      q: "Come esporto la cronologia YouTube?",
      a: "Vai su takeout.google.com, clicca su \"Deseleziona tutto\", poi scorri verso il basso e seleziona solo \"YouTube e YouTube Music\". Crea l'esportazione, aspetta l'email di Google e scarica il file .zip. Poi trascinalo nell'area di caricamento di TubeTrace.",
    },
    {
      q: "Quale file devo caricare?",
      a: "Carica il file .zip o .tgz che scarichi da Google Takeout. Non è necessario estrarlo. TubeTrace accetta anche i file watch-history.json o watch-history.html grezzi se hai già estratto l'archivio.",
    },
    {
      q: "Perché TubeTrace non trova la mia cronologia nel ZIP?",
      a: "Assicurati di aver selezionato \"YouTube e YouTube Music\" in Google Takeout e che \"Cronologia\" fosse inclusa nelle opzioni di esportazione. Alcuni account potrebbero avere la cronologia in pausa — in tal caso, l'esportazione sarà vuota. Controlla le impostazioni YouTube su myaccount.google.com/activitycontrols.",
    },
    {
      q: "TubeTrace funziona offline?",
      a: "Una volta caricata completamente la pagina, sì. L'analisi viene eseguita interamente nel browser senza connessione Internet. Tuttavia, Google Ads e i font caricati dal CDN di Google non appariranno senza connessione.",
    },
    {
      q: "TubeTrace è affiliato a YouTube o Google?",
      a: "No. TubeTrace è un progetto open source indipendente. Non è affiliato, approvato o connesso a YouTube, Google o Alphabet in alcun modo. Google Takeout e YouTube sono marchi di Google LLC.",
    },
    {
      q: "Quali formati di cronologia YouTube sono supportati?",
      a: "TubeTrace supporta il formato JSON (watch-history.json) e il formato HTML (watch-history.html) prodotti da Google Takeout, nonché gli archivi .zip, .tgz e .tar.gz che li contengono. JSON è preferito perché include dati più strutturati.",
    },
    {
      q: "La mia cronologia va indietro solo di pochi anni. Perché?",
      a: "Google Takeout esporta esattamente ciò che YouTube ha archiviato per il tuo account. Se la cronologia era in pausa in qualche momento, le voci di quel periodo mancheranno. Se hai abilitato l'eliminazione automatica (3 o 18 mesi), le voci più vecchie sono scomparse. TubeTrace può analizzare solo ciò che contiene l'esportazione.",
    },
    {
      q: "Posso usare TubeTrace senza caricare un file?",
      a: "Sì — usa il pulsante \"Carica dati demo\" nella home page per vedere un report di esempio con dati sintetici realistici. Puoi anche visualizzare un report di esempio pre-generato senza alcun caricamento.",
    },
    {
      q: "TubeTrace è gratuito?",
      a: "Sì, TubeTrace è completamente gratuito. Il progetto è open source su GitHub. È finanziato dagli annunci Google AdSense mostrati sulla pagina.",
    },
    {
      q: "Quanto è accurata la stima del tempo di visione?",
      a: "TubeTrace stima 5 minuti per ogni video guardato, poiché la durata effettiva del video non è inclusa nell'export di Google Takeout. Il totale reale è probabilmente superiore per i contenuti di lunga durata e inferiore per gli Shorts. Usa la stima come riferimento approssimativo.",
    },
  ],
  stillHaveH2: "Hai ancora domande?",
  stillHaveDesc:
    "Consulta la guida passo passo all'esportazione o contattaci tramite la pagina dei contatti.",
  cta: {
    analyze: "Analizza la mia cronologia",
    sample: "Vedi report di esempio",
  },
};
