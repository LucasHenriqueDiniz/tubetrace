import type { YoutubePrivacyContent } from "../types";

export const youtubePrivacyFr: YoutubePrivacyContent = {
  meta: {
    title:
      "L'historique YouTube est-il privé ? Qui peut voir ce que vous regardez",
    description:
      "Votre historique YouTube est-il vraiment privé ? Découvrez qui peut voir vos vidéos regardées, comment protéger votre vie privée et comment TubeTrace vous permet d'analyser votre historique sans le partager.",
  },
  eyebrow: "Guide",
  h1: "L'historique YouTube est-il privé ? Qui peut voir ce que vous regardez",
  intro:
    "Votre historique de visionnage YouTube est-il visible par d'autres ? La réponse courte : pas directement — mais ce n'est pas non plus totalement privé. Voici un tour d'horizon complet de qui peut voir quoi.",
  whoCanSeeH2: "Qui peut voir votre historique YouTube ?",
  whoCanSee: [
    {
      title: "Autres utilisateurs YouTube",
      answer: "Ne peuvent pas le voir",
      positive: true,
      desc: "Votre historique de visionnage n'est pas visible par les autres utilisateurs YouTube. Personne ne peut parcourir les vidéos que vous avez regardées depuis votre profil public.",
    },
    {
      title: "Google / YouTube",
      answer: "Peut le voir",
      positive: false,
      desc: "Google a accès à votre historique complet de visionnage. Ces données sont utilisées pour personnaliser vos recommandations, cibler les publicités et améliorer les produits Google. C'est le compromis inhérent à l'utilisation d'un service gratuit.",
    },
    {
      title: "Annonceurs",
      answer: "Ne peuvent pas le voir directement",
      positive: true,
      desc: "Les annonceurs ne reçoivent pas votre historique brut. Ils ciblent des audiences basées sur des profils comportementaux construits par Google — sans accès direct à la liste des vidéos que vous avez regardées.",
    },
    {
      title: "Comptes partagés",
      answer: "Peuvent le voir s'ils sont connectés",
      positive: false,
      desc: "Si vous partagez votre compte Google avec quelqu'un d'autre (un membre de la famille, par exemple), cette personne peut voir votre historique YouTube depuis le même compte. Créez des profils séparés pour éviter cela.",
    },
    {
      title: "TubeTrace",
      answer: "Ne peut pas le voir",
      positive: true,
      desc: "TubeTrace n'a jamais accès à votre historique YouTube. Tout le traitement se fait localement dans votre navigateur à partir du fichier que vous importez. Aucune donnée n'est envoyée à TubeTrace ni à aucun serveur.",
    },
  ],
  howToPrivacyH2: "Comment mieux protéger votre vie privée sur YouTube",
  privacyOptions: [
    {
      title: "Activez le mode navigation privée",
      desc: "Regardez des vidéos en navigation privée pour éviter qu'elles ne s'enregistrent dans votre historique YouTube.",
    },
    {
      title: "Mettez l'historique en pause",
      desc: "Sur myactivity.google.com, vous pouvez mettre en pause votre historique de visionnage YouTube. Les nouvelles vidéos regardées ne seront plus enregistrées.",
    },
    {
      title: "Supprimez votre historique",
      desc: "Vous pouvez supprimer tout ou partie de votre historique YouTube depuis myactivity.google.com ou directement depuis l'application YouTube.",
    },
    {
      title: "Utilisez un compte sans connexion",
      desc: "Regarder YouTube sans être connecté à un compte Google empêche l'enregistrement de votre historique dans votre profil, même si YouTube peut toujours collecter des données anonymisées.",
    },
  ],
  isSafeH2: "Est-il sûr d'analyser son historique avec TubeTrace ?",
  isSafeTitle: "Oui — TubeTrace est conçu pour la confidentialité",
  isSafeDesc:
    "TubeTrace a été construit dès le départ avec la vie privée comme priorité absolue. Voici pourquoi vous pouvez l'utiliser en toute confiance :",
  isSafeItems: [
    "Tout le traitement se fait dans votre navigateur — aucun serveur impliqué",
    "Le fichier que vous importez ne quitte jamais votre ordinateur",
    "TubeTrace ne collecte aucune donnée personnelle",
    "Pas de compte requis, pas de cookies de suivi",
    "Le code source est ouvert et vérifiable sur GitHub",
  ],
  cta: {
    h2: "Explorez votre historique en toute confidentialité",
    desc: "Analysez vos habitudes YouTube sans jamais partager vos données. Gratuit, privé et open source.",
    upload: "Analyser mon historique",
    sample: "Voir un exemple de rapport",
    exportGuide: "Comment exporter mes données",
  },
};
