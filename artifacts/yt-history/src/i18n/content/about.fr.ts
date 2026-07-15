import type { AboutContent } from "../types";

export const aboutFr: AboutContent = {
  meta: {
    title: "À propos de TubeTrace — Analyseur d'historique YouTube",
    description:
      "TubeTrace est un outil gratuit et open source pour analyser votre historique YouTube. 100 % privé, sans serveur, tout se passe dans votre navigateur.",
  },
  eyebrow: "À propos",
  h1: "Qu'est-ce que TubeTrace ?",
  intro:
    "TubeTrace est un outil gratuit, open source et entièrement basé dans le navigateur pour analyser votre historique YouTube. Importez votre export Google Takeout et découvrez vos habitudes de visionnage en quelques secondes — sans compte, sans serveur, sans que vos données quittent votre appareil.",
  features: [
    {
      title: "100 % Privé",
      desc: "Tout le traitement se fait localement dans votre navigateur. Aucune donnée n'est jamais envoyée à un serveur.",
    },
    {
      title: "Analyse Instantanée",
      desc: "Votre rapport complet apparaît en quelques secondes après l'import de votre fichier Google Takeout.",
    },
    {
      title: "Sans compte requis",
      desc: "Pas d'inscription, pas d'e-mail, pas de mot de passe. Ouvrez TubeTrace et commencez directement.",
    },
    {
      title: "Open Source",
      desc: "Le code source de TubeTrace est public sur GitHub. Vous pouvez vérifier exactement ce que fait l'outil avec vos données.",
    },
  ],
  whyH2: "Pourquoi TubeTrace ?",
  whyParas: [
    "YouTube ne propose pas de vue d'ensemble de votre historique de visionnage. Vous pouvez certes consulter vos vidéos récentes, mais impossible d'explorer des années d'activité, de voir vos tendances ou de comprendre réellement comment vous utilisez la plateforme.",
    "Google Takeout vous donne accès à vos données brutes — mais un fichier JSON ou HTML brut n'est pas particulièrement lisible. TubeTrace comble ce fossé : il transforme vos données en visualisations claires et en statistiques significatives.",
    "Nous avons construit TubeTrace parce que nous croyons que vous devriez pouvoir explorer vos propres données sans avoir à les confier à un service tiers. La confidentialité n'est pas une option — c'est le fondement de l'outil.",
  ],
  whatH2: "Ce que TubeTrace analyse",
  whatItems: [
    "Nombre total de vidéos regardées et estimation des heures consommées",
    "Classement de vos chaînes favorites par nombre de visionnages",
    "Carte de chaleur d'activité par heure de la journée et jour de la semaine",
    "Évolution mensuelle et annuelle de votre consommation",
    "Détection de vos plus longues sessions de binge watching",
    "Type de personnalité de spectateur basé sur vos habitudes",
    "Pics d'activité et périodes les plus intenses",
    "Premières et dernières vidéos enregistrées dans votre historique",
    "Répartition de votre activité selon les moments de la journée",
  ],
  howH2: "Comment utiliser TubeTrace",
  howSteps: [
    "Exportez votre historique YouTube via Google Takeout (takeout.google.com) — sélectionnez uniquement YouTube et attendez l'e-mail de Google.",
    "Téléchargez le fichier ZIP envoyé par Google sur votre ordinateur.",
    "Faites glisser le fichier ZIP (ou le watch-history.json extrait) directement sur TubeTrace.",
    "Votre rapport apparaît instantanément — explorez vos statistiques, graphiques et insights personnalisés.",
  ],
  cta: {
    analyze: "Analyser mon historique",
    sample: "Voir un exemple de rapport",
    github: "Voir sur GitHub",
  },
  creator: {
    h2: "À propos du créateur",
    name: "Lucas Henrique Diniz",
    bio: "Développeur qui crée des outils open-source axés sur la confidentialité. TubeTrace en fait partie — conçu pour permettre à chacun de comprendre ses propres habitudes YouTube sans qu'aucune donnée ne quitte son appareil.",
    links: {
      github: "https://github.com/LucasHenriqueDiniz/",
      website: "https://lucashdo.com/",
      linkedin: "https://www.linkedin.com/in/lucas-diniz-ostroski/",
    },
  },
};
