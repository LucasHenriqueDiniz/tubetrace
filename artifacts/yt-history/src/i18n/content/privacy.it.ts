import type { PrivacyContent } from "../types";

export const privacyIt: PrivacyContent = {
  meta: {
    title: "Informativa sulla Privacy — TubeTrace",
    description:
      "Informativa sulla Privacy di TubeTrace — come trattiamo i tuoi dati, cookie e pubblicità.",
  },
  eyebrow: "Privacy",
  h1: "Informativa sulla Privacy",
  updated: "Ultimo aggiornamento: 26 giugno 2026",
  summary:
    "🔒 TubeTrace elabora l'intera cronologia di YouTube localmente nel tuo browser. Nessun dato dalla tua cronologia viene inviato ai nostri server o a terzi.",
  sections: [
    {
      h2: "1. Chi siamo",
      paragraphs: [
        "TubeTrace (tubetrace.pages.dev) è uno strumento gratuito di analisi della cronologia di YouTube che elabora i dati di Google Takeout direttamente nel tuo browser.",
      ],
    },
    {
      h2: "2. Dati che raccogliamo",
      paragraphs: [
        "TubeTrace NON raccoglie, archivia o trasmette la tua cronologia di YouTube. L'intera elaborazione avviene localmente sul tuo dispositivo.",
        "Gli unici dati che possono essere raccolti sono:",
      ],
      items: [
        "Dati di utilizzo anonimi tramite Google Analytics (se applicabile): pagine visitate, tempo di sessione, paese di provenienza. Questo non ti identifica personalmente.",
        "Cookie pubblicitari di Google AdSense, descritti nella sezione 5.",
      ],
    },
    {
      h2: "3. Dati che fornisci",
      paragraphs: [
        "Quando carichi il tuo file Google Takeout (ZIP, JSON o HTML), quel file viene letto direttamente nel tuo browser tramite JavaScript. Il file NON viene inviato a nessun server. Dopo aver chiuso o ricaricato la pagina, i dati vengono automaticamente eliminati.",
      ],
    },
    {
      h2: "4. Cookie",
      paragraphs: ["Utilizziamo i seguenti tipi di cookie:"],
      items: [
        "Cookie essenziali: necessari per il funzionamento di base del sito.",
        "Cookie pubblicitari: Google AdSense utilizza i cookie per visualizzare annunci pertinenti. Vedere la sezione 5.",
      ],
    },
    {
      h2: "5. Google AdSense e pubblicità",
      paragraphs: [
        "Questo sito utilizza Google AdSense per visualizzare annunci. Google, come fornitore terzo, utilizza i cookie per pubblicare annunci in base alle tue visite precedenti a questo e ad altri siti.",
      ],
      subsections: [
        {
          h3: "5.1 Cookie pubblicitari di Google",
          paragraphs: [
            "Google AdSense utilizza i seguenti tipi di cookie e tecnologie:",
          ],
          items: [
            "Cookie pubblicitari di Google: Utilizzati per la personalizzazione degli annunci e il limite di frequenza.",
            "Cookie DoubleClick: Monitorano le prestazioni degli annunci, prevengonofrodi e misurano le conversioni.",
            "Google Analytics (se abilitato): Cookie per misurare l'utilizzo del sito, le pagine visitate e il tempo di sessione.",
            "Web Beacon e segnali Internet: Piccole immagini o script che monitorano le interazioni con gli annunci.",
          ],
        },
        {
          h3: "5.2 Come gestire le tue preferenze",
          paragraphs: [],
          items: [
            "Rifiuta gli annunci personalizzati: adssettings.google.com — Configura le tue preferenze pubblicitarie personalizzate.",
            "Come Google utilizza i dati: Informativa sulla privacy degli annunci di Google (policies.google.com/technologies/ads).",
            "Informativa sulla privacy di Google: policies.google.com/privacy.",
            "Il tuo consenso: Se risiedi nell'UE/EEA, vedrai un banner di consenso al caricamento del sito.",
          ],
        },
        {
          h3: "5.3 Cookie essenziali vs facoltativi",
          paragraphs: [
            "I cookie essenziali sono necessari per il funzionamento del sito. I cookie pubblicitari sono facoltativi.",
          ],
        },
      ],
    },
    {
      h2: "6. Servizi di terze parti",
      paragraphs: [
        "TubeTrace può integrare i seguenti servizi di terze parti, ognuno con la propria informativa sulla privacy:",
      ],
      items: [
        "Google AdSense — pubblicità: policies.google.com/privacy",
        "Cloudflare Pages — hosting: cloudflare.com/privacypolicy",
        "Google Fonts — tipografia: policies.google.com/privacy",
      ],
    },
    {
      h2: "7. I tuoi diritti (GDPR & CCPA)",
      paragraphs: [
        "A seconda della tua ubicazione, potresti avere diritto a:",
      ],
      items: [
        "Confermare l'esistenza dell'elaborazione dei dati personali",
        "Accedere ai tuoi dati personali",
        "Richiedere la correzione, l'eliminazione o l'anonimizzazione dei dati",
        "Ritirare il tuo consenso in qualsiasi momento",
      ],
    },
    {
      h2: "8. Minori",
      paragraphs: [
        "TubeTrace non è destinato a bambini sotto i 13 anni e non raccoglie intenzionalmente i dati dei bambini.",
      ],
    },
    {
      h2: "9. Modifiche a questa informativa",
      paragraphs: [
        "Possiamo aggiornare questa informativa periodicamente. La data 'Ultimo aggiornamento' in alto indica quando è avvenuta la revisione più recente.",
      ],
    },
    {
      h2: "10. Contatti",
      paragraphs: [
        "Domande su questa informativa? Apri un issue su github.com/LucasHenriqueDiniz/tubetrace.",
      ],
    },
  ],
};
