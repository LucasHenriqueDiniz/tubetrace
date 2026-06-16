import type { YoutubeWrappedContent } from "../types";

export const youtubeWrappedFr: YoutubeWrappedContent = {
  meta: {
    title:
      "Alternative à YouTube Wrapped — Analysez votre Historique comme Spotify Wrapped",
    description:
      "TubeTrace est l'alternative gratuite à YouTube Wrapped : analysez toutes vos années d'historique YouTube, sans connexion, 100 % privé, directement dans votre navigateur.",
  },
  eyebrow: "Guide",
  h1: "Alternative à YouTube Wrapped — Analysez votre Historique comme Spotify Wrapped",
  intro:
    "Spotify Wrapped a montré la voie : chaque année, vous obtenez un résumé de vos écoutes. Mais YouTube n'offre rien d'équivalent. TubeTrace comble ce manque — importez votre historique Google Takeout et obtenez un rapport complet sur toutes vos années de visionnage, en quelques secondes.",
  doesYtHaveH2: "YouTube a-t-il un Wrapped ?",
  doesYtHavePara1:
    "YouTube propose parfois un \"YouTube Recap\" en fin d'année, mais il est limité — il n'est pas disponible pour tous les utilisateurs, ne couvre qu'une année à la fois et disparaît rapidement. Il n'existe pas d'équivalent permanent et accessible à tous.",
  doesYtHavePara2:
    "C'est là qu'intervient TubeTrace. En utilisant votre export Google Takeout, TubeTrace génère votre Wrapped personnel pour YouTube — couvrant l'intégralité de votre historique, sans limite de durée, entièrement privé.",
  comparisonH2: "TubeTrace vs YouTube Recap",
  comparisonRows: [
    ["Historique complet (toutes les années)", true, false],
    ["Sans connexion requise", true, false],
    ["100 % privé", true, false],
    ["Fonctionne sans historique actif", true, false],
    ["Type de personnalité", true, false],
    ["Détection de binge", true, false],
    ["Carte de chaleur d'activité", true, false],
    ["Intégré dans l'app YouTube", false, true],
    ["Cartes partageables", false, "limited"],
  ],
  featuresH2: "Ce que TubeTrace analyse pour vous",
  features: [
    {
      title: "Années complètes",
      desc: "Contrairement au YouTube Recap, TubeTrace analyse l'intégralité de votre historique — des premières vidéos regardées jusqu'à aujourd'hui.",
    },
    {
      title: "Type de personnalité",
      desc: "Découvrez quel type de spectateur vous êtes : noctambule, boulimique de séries, chasseur de tendances ou explorateur de niches.",
    },
    {
      title: "Carte de chaleur d'activité",
      desc: "Visualisez vos habitudes heure par heure et jour par jour pour savoir quand vous regardez le plus YouTube.",
    },
    {
      title: "Détection de marathons",
      desc: "TubeTrace identifie vos plus longues sessions de visionnage consécutives — vos vrais moments binge.",
    },
    {
      title: "Évolution temporelle",
      desc: "Suivez l'évolution de votre consommation YouTube au fil des mois et des années, et repérez vos pics d'activité.",
    },
    {
      title: "100 % privé",
      desc: "Tout est traité localement dans votre navigateur. Aucune donnée n'est envoyée sur un serveur — ni à TubeTrace, ni à Google.",
    },
  ],
  howToH2: "Comment créer votre YouTube Wrapped avec TubeTrace",
  howToSteps: [
    {
      title: "Exportez votre historique",
      desc: "Rendez-vous sur takeout.google.com, décochez tout, sélectionnez YouTube et créez votre export. Google vous enverra un e-mail avec le fichier ZIP.",
    },
    {
      title: "Téléchargez le fichier",
      desc: "Cliquez sur le lien dans l'e-mail de Google pour télécharger votre fichier ZIP contenant votre historique YouTube.",
    },
    {
      title: "Importez dans TubeTrace",
      desc: "Faites glisser le fichier ZIP (ou le watch-history.json extrait) directement sur TubeTrace. Aucune inscription requise.",
    },
    {
      title: "Découvrez votre rapport",
      desc: "En quelques secondes, votre rapport personnel apparaît : statistiques, graphiques, type de personnalité et bien plus encore.",
    },
  ],
  cta: {
    h2: "Créez votre YouTube Wrapped maintenant",
    desc: "Importez votre historique Google Takeout et obtenez votre rapport personnalisé en quelques secondes.",
    upload: "Analyser mon historique",
    sample: "Voir un exemple de rapport",
  },
};
