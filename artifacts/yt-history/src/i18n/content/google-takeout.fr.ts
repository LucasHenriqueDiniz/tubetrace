import type { GoogleTakeoutContent } from "../types";

export const googleTakeoutFr: GoogleTakeoutContent = {
  meta: {
    title:
      "Google Takeout Historique YouTube : Téléchargez et Analysez vos Données",
    description:
      "Découvrez ce qu'est le google takeout historique youtube, quels fichiers vous recevez et comment analyser vos données avec TubeTrace directement dans votre navigateur.",
  },
  eyebrow: "Guide",
  h1: "Google Takeout Historique YouTube : Téléchargez et Analysez vos Données",
  intro:
    "Google Takeout vous permet de télécharger une copie complète de votre historique YouTube — toutes les vidéos que vous avez regardées, avec date et heure. TubeTrace transforme ces données en un rapport visuel détaillé, traité à 100 % dans votre navigateur.",
  whatIsH2: "Qu'est-ce que Google Takeout ?",
  whatIsPara1:
    "Google Takeout est un outil officiel de Google qui vous permet d'exporter vos données depuis n'importe quel service de la société — Gmail, Google Photos, Google Maps et, bien sûr, YouTube. C'est le moyen officiel d'obtenir une copie de tout ce que vous avez fait sur la plateforme.",
  whatIsPara2:
    "L'exportation se présente sous la forme d'un fichier ZIP ou TGZ contenant des dossiers organisés par service. Pour YouTube, les fichiers d'historique se trouvent dans un dossier appelé YouTube and YouTube Music.",
  filesH2: "Quels fichiers Google Takeout inclut-il pour YouTube ?",
  files: [
    {
      filename: "watch-history.json",
      desc: "Le fichier principal contenant tout l'historique des vidéos regardées au format structuré. Il contient le titre, la chaîne, l'URL et l'horodatage de chaque visionnage. C'est le format recommandé.",
    },
    {
      filename: "watch-history.html",
      desc: "Version lisible de l'historique de visionnage. Elle contient les mêmes informations que le JSON, mais mises en forme en HTML. Les dates peuvent apparaître en français avec le fuseau BRT.",
    },
    {
      filename: "search-history.json / search-history.html",
      desc: "Historique des recherches effectuées sur YouTube. TubeTrace se concentre sur l'historique de visionnage, mais ce fichier peut également être utile pour comprendre vos habitudes de consommation.",
    },
  ],
  dataContainsH2: "Que contient le fichier watch-history.json ?",
  dataContainsPre:
    "Chaque entrée dans le fichier représente une vidéo regardée et inclut les informations suivantes :",
  dataContainsItems: [
    "Titre de la vidéo",
    "Nom de la chaîne",
    "Date et heure du visionnage (horodatage UTC)",
    "Type d'activité (historique de visionnage)",
  ],
  dataContainsPost:
    "Le fichier n'inclut pas d'informations telles que le temps regardé par vidéo, le nombre de fois où vous avez mis en pause ou le pourcentage de la vidéo visionné — seulement l'enregistrement que vous avez regardé la vidéo.",
  howToH2: "Comment télécharger votre historique YouTube via Google Takeout",
  howToSteps: [
    "Accédez à takeout.google.com et connectez-vous avec votre compte Google",
    'Cliquez sur "Tout désélectionner" pour décocher tous les services',
    "Faites défiler jusqu'à YouTube et YouTube Music et cochez la case",
    'Cliquez sur "Plusieurs formats" et sélectionnez JSON si disponible',
    'Cliquez sur "Étape suivante", choisissez la livraison par e-mail et le format ZIP',
    'Cliquez sur "Créer une exportation" et attendez l\'e-mail de Google',
  ],
  whatCanH2: "Que fait TubeTrace avec vos données Google Takeout ?",
  whatCanPre:
    "Après avoir importé votre fichier Google Takeout, TubeTrace génère un rapport complet avec :",
  whatCanItems: [
    "Nombre total de vidéos regardées et estimation des heures consommées",
    "Classement de vos chaînes favorites par nombre de visionnages",
    "Carte de chaleur d'activité par heure de la journée et jour de la semaine",
    "Évolution de la consommation au fil des mois et des années",
    "Détection des marathons de visionnage (longues séquences consécutives)",
    "Type de personnalité de spectateur basé sur vos habitudes",
    "Pics d'activité et périodes les plus actives",
    "Analyse complète sans qu'aucune donnée ne quitte votre navigateur",
  ],
  cta: {
    h2: "Analysez vos données Google Takeout maintenant",
    desc: "Déposez votre fichier et découvrez tout sur vos habitudes YouTube. Gratuit, privé et sans inscription.",
    upload: "Importer mon Takeout",
    sample: "Voir un exemple de rapport",
    uploadLabel: "Importer mon Takeout",
  },
};
