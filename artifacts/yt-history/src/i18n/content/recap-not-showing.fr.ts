import type { YoutubeRecapContent } from "../types";

export const youtubeRecapFr: YoutubeRecapContent = {
  meta: {
    title: "YouTube Recap n'apparaît pas ? Voici pourquoi et quoi faire",
    description:
      "Vous ne voyez pas le YouTube Recap ? Découvrez pourquoi il n'est pas disponible pour tout le monde et comment obtenir un rapport complet de votre historique avec TubeTrace.",
  },
  eyebrow: "Guide",
  h1: "YouTube Recap n'apparaît pas ? Voici pourquoi",
  intro:
    "Le YouTube Recap est une fonctionnalité saisonnière qui ne touche pas tous les utilisateurs. Si vous ne le voyez pas, ce n'est pas forcément un bug — il y a plusieurs raisons pour lesquelles il peut ne pas apparaître sur votre compte.",
  requirementsH2: "Conditions requises pour voir le YouTube Recap",
  requirements: [
    {
      title: "Historique de visionnage actif",
      desc: "Le YouTube Recap nécessite que votre historique de visionnage soit activé. Si vous l'avez mis en pause ou supprimé, le Recap n'aura pas assez de données pour fonctionner.",
    },
    {
      title: "Activité suffisante sur l'année",
      desc: "YouTube exige un nombre minimum de visionnages sur l'année en cours pour générer un Recap. Les comptes peu actifs ne sont généralement pas éligibles.",
    },
    {
      title: "Disponibilité géographique",
      desc: "Le YouTube Recap n'est pas disponible dans tous les pays. Selon votre région, la fonctionnalité peut simplement ne pas être proposée.",
    },
    {
      title: "Période de l'année",
      desc: "Le YouTube Recap n'est disponible qu'en fin d'année et pendant une courte période. En dehors de cette fenêtre, il est impossible d'y accéder.",
    },
  ],
  howToCheckH2: "Comment vérifier si le YouTube Recap est disponible pour vous",
  howToCheckSteps: [
    "Ouvrez l'application YouTube sur votre téléphone ou accédez à youtube.com",
    "Appuyez sur votre photo de profil en haut à droite pour accéder à votre compte",
    'Recherchez une section "Votre année sur YouTube" ou "YouTube Recap" dans le menu ou sur la page d\'accueil',
    "Si vous ne la voyez pas, vérifiez que votre historique de visionnage est bien activé dans les paramètres",
  ],
  howToCheckNote:
    "Si le YouTube Recap n'est toujours pas visible après avoir vérifié tous ces points, il est probable que votre compte ne soit tout simplement pas éligible cette année. C'est une fonctionnalité sélective.",
  alternativeH2: "La meilleure alternative : TubeTrace",
  alternativePara1:
    "N'attendez pas que YouTube décide si vous méritez un Recap. Avec TubeTrace, vous obtenez un rapport complet de toute votre activité YouTube — maintenant, pour toutes les années, sans conditions.",
  alternativePara2:
    "Il vous suffit d'exporter votre historique via Google Takeout et de l'importer dans TubeTrace. Le rapport apparaît en quelques secondes, directement dans votre navigateur, sans qu'aucune donnée ne soit envoyée en ligne.",
  alternativeItems: [
    "Toutes vos années d'historique, pas seulement la dernière",
    "Disponible immédiatement, sans attendre la fin de l'année",
    "Fonctionne même si votre historique YouTube a été effacé récemment",
    "Type de personnalité basé sur vos habitudes de visionnage",
    "Carte de chaleur d'activité par heure et par jour",
    "Détection de vos sessions binge les plus longues",
    "Classement de vos chaînes et artistes favoris",
    "100 % privé — aucune donnée ne quitte votre navigateur",
  ],
  cta: {
    h2: "N'attendez pas le YouTube Recap",
    desc: "Créez votre rapport personnalisé maintenant avec TubeTrace — gratuit, privé et disponible toute l'année.",
    upload: "Analyser mon historique",
    sample: "Voir un exemple de rapport",
    exportGuide: "Comment exporter mes données",
  },
};
