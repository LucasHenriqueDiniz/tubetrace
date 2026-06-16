import type { FaqContent } from "../types";

export const faqFr: FaqContent = {
  meta: {
    title: "Questions Fréquentes — TubeTrace",
    description:
      "Toutes les réponses à vos questions sur TubeTrace : confidentialité, formats supportés, fonctionnement hors ligne, précision des données et plus encore.",
  },
  eyebrow: "FAQ",
  h1: "Questions Fréquentes",
  intro:
    "Vous avez une question sur TubeTrace ? Vous trouverez probablement la réponse ici. Si ce n'est pas le cas, n'hésitez pas à nous contacter.",
  faqs: [
    {
      q: "TubeTrace est-il sûr ?",
      a: "Oui, totalement. TubeTrace est conçu avec la confidentialité comme priorité absolue. Tout le traitement se fait localement dans votre navigateur — vos données ne quittent jamais votre appareil. Le code source est public sur GitHub et peut être audité par n'importe qui.",
    },
    {
      q: "Mes données quittent-elles le navigateur ?",
      a: "Non. TubeTrace ne dispose d'aucun serveur pour recevoir vos données. Le fichier que vous importez est lu et traité entièrement dans votre navigateur. Aucune information personnelle n'est collectée, ni envoyée à TubeTrace ou à un tiers.",
    },
    {
      q: "Comment exporter mon historique YouTube ?",
      a: "Rendez-vous sur takeout.google.com, décochez tous les services, sélectionnez uniquement YouTube, puis créez une exportation. Google vous enverra un e-mail avec un lien de téléchargement pour votre fichier ZIP. Consultez notre guide complet pour les instructions détaillées.",
    },
    {
      q: "Quel fichier dois-je importer ?",
      a: "Vous pouvez importer directement le fichier ZIP reçu de Google Takeout — TubeTrace l'extraira automatiquement. Vous pouvez aussi importer le fichier watch-history.json ou watch-history.html extrait manuellement du ZIP.",
    },
    {
      q: "Pourquoi TubeTrace ne trouve pas mon historique dans le ZIP ?",
      a: "Assurez-vous que le fichier ZIP provient bien d'un export Google Takeout pour YouTube. TubeTrace cherche les fichiers watch-history.json ou watch-history.html dans le dossier YouTube and YouTube Music. Si l'exportation ne contient pas ces fichiers, il est possible que votre historique de visionnage ait été désactivé ou supprimé avant l'export.",
    },
    {
      q: "TubeTrace fonctionne-t-il hors ligne ?",
      a: "Oui. Une fois la page chargée, TubeTrace fonctionne entièrement hors ligne. Vous pouvez analyser vos données sans connexion Internet active, puisque tout le traitement se fait dans votre navigateur.",
    },
    {
      q: "TubeTrace est-il affilié à YouTube ou Google ?",
      a: "Non. TubeTrace est un projet indépendant, open source, sans aucune affiliation avec YouTube, Google ou Alphabet. Il utilise simplement les fichiers exportés via Google Takeout, un service officiel de Google.",
    },
    {
      q: "Quels formats sont pris en charge ?",
      a: "TubeTrace accepte les fichiers ZIP et TGZ de Google Takeout, ainsi que les fichiers watch-history.json et watch-history.html extraits directement. Le format JSON est recommandé pour sa meilleure fiabilité.",
    },
    {
      q: "Mon historique ne remonte qu'à quelques années, pourquoi ?",
      a: "Google ne conserve votre historique que si la fonctionnalité était activée sur votre compte. Si vous avez mis l'historique en pause ou l'avez supprimé à un moment donné, les données antérieures ne seront pas disponibles dans l'export. TubeTrace analyse uniquement ce que Google Takeout fournit.",
    },
    {
      q: "Puis-je utiliser TubeTrace sans importer de fichier ?",
      a: "Oui. TubeTrace propose un mode démo qui génère des données synthétiques pour vous permettre de découvrir toutes les fonctionnalités du rapport sans avoir à exporter votre historique. Cliquez simplement sur \"Voir un exemple de rapport\" sur la page d'accueil.",
    },
    {
      q: "TubeTrace est-il gratuit ?",
      a: "Oui, TubeTrace est entièrement gratuit. Il n'y a pas d'abonnement, pas de fonctionnalités payantes et pas de publicités. C'est un projet open source maintenu bénévolement.",
    },
    {
      q: "Quelle est la précision de l'estimation du temps de visionnage ?",
      a: "L'estimation est approximative. Google Takeout enregistre le fait que vous avez regardé une vidéo, mais pas combien de temps vous l'avez réellement regardée. TubeTrace estime la durée en se basant sur la durée moyenne des vidéos YouTube. Le nombre réel d'heures regardées peut donc être inférieur ou supérieur à l'estimation affichée.",
    },
  ],
  stillHaveH2: "Vous avez d'autres questions ?",
  stillHaveDesc:
    "Consultez nos guides détaillés pour en savoir plus sur l'exportation de votre historique YouTube et l'utilisation de TubeTrace. Vous pouvez aussi ouvrir une issue sur GitHub si vous avez trouvé un bug ou une question non couverte ici.",
  cta: {
    analyze: "Analyser mon historique",
    sample: "Voir un exemple de rapport",
  },
};
