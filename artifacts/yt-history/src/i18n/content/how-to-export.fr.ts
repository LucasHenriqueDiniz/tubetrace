import type { HowToExportContent } from "../types";

export const howToExportFr: HowToExportContent = {
  meta: {
    title: "Comment Exporter votre Historique YouTube avec Google Takeout",
    description:
      "Apprenez à exporter historique youtube google takeout en moins de 10 minutes. Guide pas à pas pour télécharger votre historique YouTube et l'analyser avec TubeTrace.",
  },
  eyebrow: "Guide",
  h1: "Comment Exporter votre Historique YouTube avec Google Takeout",
  intro:
    "Rendez-vous sur takeout.google.com, décochez tout, sélectionnez uniquement YouTube et attendez l'e-mail de Google avec le lien de téléchargement. Ensuite, déposez simplement le fichier ZIP dans TubeTrace et votre rapport sera prêt en quelques secondes.",
  timeNote:
    "La configuration de l'exportation prend environ 5 à 10 minutes. Google peut mettre de quelques minutes à plusieurs heures pour préparer le fichier — cela dépend de la taille de votre historique.",
  stepsH2: "Instructions étape par étape",
  steps: [
    {
      title: "Ouvrez Google Takeout",
      body: "Accédez à takeout.google.com et connectez-vous avec le compte Google associé à votre YouTube. Assurez-vous d'être sur le bon compte avant de continuer.",
    },
    {
      title: 'Cliquez sur "Tout désélectionner"',
      body: 'Dans la liste des services Google, cliquez sur le bouton "Tout désélectionner" pour décocher tous les produits d\'un coup. Cela vous évite de télécharger des données dont vous n\'avez pas besoin.',
    },
    {
      title: "Sélectionnez YouTube et YouTube Music",
      body: "Faites défiler la page vers le bas jusqu'à trouver YouTube et YouTube Music. Cochez la case à côté de YouTube. Si vous souhaitez inclure YouTube Music également, cochez-le séparément.",
    },
    {
      title: "Configurez les options d'exportation",
      body: 'Cliquez sur "Plusieurs formats" dans la section YouTube. Gardez l\'historique de visionnage sélectionné et, lorsque l\'option de format est disponible, choisissez JSON — il est plus facile à traiter et offre des données plus riches.',
    },
    {
      title: "Créez l'exportation",
      body: 'Faites défiler jusqu\'en bas de la page et cliquez sur "Étape suivante". Choisissez "Envoyer le lien par e-mail" comme méthode de livraison et ZIP comme format de fichier. Cliquez ensuite sur "Créer une exportation" pour lancer le processus.',
    },
    {
      title: "Attendez l'e-mail de Google",
      body: "Google va traiter votre demande et vous envoyer un e-mail quand l'exportation est prête. Le délai peut varier — de quelques minutes à plusieurs heures.",
    },
    {
      title: "Téléchargez le fichier",
      body: "Quand l'e-mail arrive, cliquez sur le lien de téléchargement. Vous recevrez un fichier ZIP contenant toutes vos données YouTube. Enregistrez-le dans un endroit facile à retrouver.",
    },
    {
      title: "Importez dans TubeTrace",
      body: "Revenez sur TubeTrace et faites glisser le fichier ZIP (ou le JSON/HTML extrait) directement sur la page d'accueil. Le rapport s'affiche en quelques secondes — aucun envoi vers un serveur, tout est traité dans votre propre navigateur.",
    },
  ],
  jsonVsHtmlH2: "JSON ou HTML : quel format choisir ?",
  jsonTitle: "JSON (Recommandé)",
  jsonItems: [
    "Données structurées et faciles à traiter",
    "Lecture automatique sans ambiguïté de format",
    "Disponible sur la plupart des comptes Google",
    "Nom du fichier : watch-history.json",
  ],
  htmlTitle: "HTML",
  htmlItems: [
    "Également pris en charge par TubeTrace",
    "Lisible par un humain — peut être ouvert dans un navigateur",
    "Les dates peuvent être en français avec le fuseau BRT",
    "Nom du fichier : watch-history.html",
  ],
  problemsH2: "Problèmes courants et solutions",
  problems: [
    {
      problem: "TubeTrace affiche « Aucun fichier d'historique trouvé »",
      solution:
        "Vérifiez que le fichier ZIP provient bien d'un export YouTube (et non d'un autre service Google). TubeTrace recherche spécifiquement les fichiers watch-history.json ou watch-history.html dans le dossier YouTube.",
    },
    {
      problem: "L'exportation indique « Aucune entrée »",
      solution:
        "Votre historique de visionnage est peut-être en pause ou a été supprimé. Rendez-vous sur myactivity.google.com, allez dans Paramètres d'activité et vérifiez que l'historique YouTube est bien actif.",
    },
    {
      problem: "Le fichier ZIP est trop volumineux à charger",
      solution:
        "Extrayez le ZIP et localisez uniquement le fichier watch-history.json ou watch-history.html dans le dossier YouTube/history/. Importez seulement ce fichier — il est bien plus léger.",
    },
    {
      problem: "L'e-mail de Google n'est jamais arrivé",
      solution:
        "Vérifiez vos spams. Si vous n'y trouvez rien, retournez sur takeout.google.com — l'exportation a peut-être échoué silencieusement. Vous pouvez aussi consulter le statut des exportations précédentes sur cette même page.",
    },
    {
      problem: "L'exportation ne contient que quelques mois d'historique",
      solution:
        "Cela signifie généralement que la suppression automatique est activée sur votre compte. Rendez-vous sur myaccount.google.com/activitycontrols, trouvez « Historique YouTube » et vérifiez le paramètre de suppression automatique — s'il est réglé sur 3 ou 18 mois, les entrées plus anciennes ont déjà été définitivement supprimées par Google et ne peuvent pas être récupérées, même avec une nouvelle exportation.",
    },
    {
      problem: "TubeTrace affiche moins de vidéos que prévu",
      solution:
        "Le fichier watch-history.json n'inclut que les vidéos regardées en étant connecté avec l'historique activé. Les vidéos regardées en navigation privée, déconnecté, ou pendant une période où l'historique était en pause n'apparaîtront pas — il s'agit d'une limite des données YouTube, pas d'un problème de TubeTrace.",
    },
  ],
  faqH2: "Questions fréquentes",
  faqs: [
    {
      q: "Exporter mes données supprime-t-il mon historique YouTube ?",
      a: "Non. L'exportation est une copie de vos données — rien n'est supprimé de votre compte. Votre historique reste exactement tel quel.",
    },
    {
      q: "Puis-je demander l'exportation plusieurs fois ?",
      a: "Oui, sans limite. Vous pouvez exporter vos données Google Takeout autant de fois que vous le souhaitez, à n'importe quel moment.",
    },
    {
      q: "Est-il sûr d'importer mon fichier dans TubeTrace ?",
      a: "Tout à fait. TubeTrace traite tout localement dans votre navigateur — le fichier n'est jamais envoyé sur un serveur. Vos données restent sur votre ordinateur en permanence.",
    },
    {
      q: "Dois-je me connecter à TubeTrace pour voir mes résultats ?",
      a: "Non. TubeTrace n'a aucun système de connexion. Vous déposez simplement votre fichier exporté sur la page d'import et votre rapport est généré instantanément dans votre navigateur.",
    },
    {
      q: "Puis-je exporter mon historique depuis l'application YouTube plutôt qu'un navigateur ?",
      a: "Google Takeout n'est disponible que via un navigateur sur takeout.google.com — il n'y a pas d'option d'exportation dans l'application mobile YouTube. Vous pouvez tout de même ouvrir takeout.google.com dans le navigateur de votre téléphone et suivre les mêmes étapes.",
    },
    {
      q: "Que se passe-t-il si j'ai plusieurs années d'historique ?",
      a: "TubeTrace n'a aucune limite sur la quantité d'historique qu'il peut traiter — il peut gérer des exports couvrant une décennie ou plus. Les très gros exports (dizaines de milliers d'entrées) peuvent prendre quelques secondes de plus à analyser, mais tout continue de se faire localement dans votre navigateur.",
    },
  ],
  cta: {
    h2: "Prêt à analyser votre historique ?",
    desc: "Importez votre export Google Takeout et découvrez tout sur vos habitudes YouTube.",
    upload: "Importer mon export",
    sample: "Voir un exemple de rapport",
  },
};
