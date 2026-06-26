import type { PrivacyContent } from "../types";

export const privacyFr: PrivacyContent = {
  meta: {
    title: "Politique de confidentialité — TubeTrace",
    description:
      "Politique de confidentialité de TubeTrace — comment nous traitons vos données, cookies et publicité.",
  },
  eyebrow: "Confidentialité",
  h1: "Politique de Confidentialité",
  updated: "Dernière mise à jour : 26 juin 2026",
  summary:
    "🔒 TubeTrace traite tout votre historique YouTube localement dans votre navigateur. Aucune donnée de votre historique n'est envoyée à nos serveurs ou à des tiers.",
  sections: [
    {
      h2: "1. Qui sommes-nous",
      paragraphs: [
        "TubeTrace (tubetrace.pages.dev) est un outil gratuit d'analyse d'historique YouTube qui traite les données de Google Takeout directement dans votre navigateur.",
      ],
    },
    {
      h2: "2. Données que nous collectons",
      paragraphs: [
        "TubeTrace NE collecte PAS, ne stocke PAS et ne transmet PAS votre historique YouTube. Tout le traitement se fait localement sur votre appareil.",
        "Les seules données qui peuvent être collectées sont :",
      ],
      items: [
        "Données d'utilisation anonymes via Google Analytics (le cas échéant) : pages visitées, durée de session, pays d'origine. Cela ne vous identifie pas personnellement.",
        "Cookies de publicité de Google AdSense, décrits dans la section 5.",
      ],
    },
    {
      h2: "3. Données que vous fournissez",
      paragraphs: [
        "Lorsque vous téléchargez votre fichier Google Takeout (ZIP, JSON ou HTML), ce fichier est lu directement dans votre navigateur via JavaScript. Le fichier N'EST PAS envoyé à aucun serveur. Après avoir fermé ou rechargé la page, les données sont automatiquement supprimées.",
      ],
    },
    {
      h2: "4. Cookies",
      paragraphs: ["Nous utilisons les types de cookies suivants :"],
      items: [
        "Cookies essentiels : nécessaires au fonctionnement basique du site.",
        "Cookies de publicité : Google AdSense utilise des cookies pour afficher des annonces pertinentes. Voir la section 5.",
      ],
    },
    {
      h2: "5. Google AdSense et publicité",
      paragraphs: [
        "Ce site utilise Google AdSense pour afficher des annonces. Google, en tant que fournisseur tiers, utilise des cookies pour diffuser des annonces basées sur vos visites antérieures à ce site et à d'autres.",
      ],
      subsections: [
        {
          h3: "5.1 Cookies de publicité Google",
          paragraphs: [
            "Google AdSense utilise les types de cookies et technologies suivants :",
          ],
          items: [
            "Cookies de publicité Google : Utilisés pour la personnalisation des annonces et la limitation de fréquence.",
            "Cookies DoubleClick : Suivent les performances des annonces, préviennent la fraude et mesurent les conversions.",
            "Google Analytics (s'il est activé) : Cookies pour mesurer l'utilisation du site, les pages visitées et la durée de la session.",
            "Web Beacons et signaux Internet : Petites images ou scripts qui suivent les interactions avec les annonces.",
          ],
        },
        {
          h3: "5.2 Comment gérer vos préférences",
          paragraphs: [],
          items: [
            "Refuser les annonces personnalisées : adssettings.google.com — Configurez vos préférences de publicité personnalisée.",
            "Comment Google utilise les données : Politique de confidentialité des annonces Google (policies.google.com/technologies/ads).",
            "Politique de confidentialité de Google : policies.google.com/privacy.",
            "Votre consentement : Si vous résidez dans l'UE/EEA, vous verrez une bannière de consentement au chargement du site.",
          ],
        },
        {
          h3: "5.3 Cookies essentiels vs facultatifs",
          paragraphs: [
            "Les cookies essentiels sont nécessaires au fonctionnement du site. Les cookies de publicité sont facultatifs.",
          ],
        },
      ],
    },
    {
      h2: "6. Services tiers",
      paragraphs: [
        "TubeTrace peut intégrer les services tiers suivants, chacun ayant sa propre politique de confidentialité :",
      ],
      items: [
        "Google AdSense — publicité : policies.google.com/privacy",
        "Cloudflare Pages — hébergement : cloudflare.com/privacypolicy",
        "Google Fonts — typographie : policies.google.com/privacy",
      ],
    },
    {
      h2: "7. Vos droits (RGPD & CCPA)",
      paragraphs: [
        "Selon votre localisation, vous pouvez avoir le droit de :",
      ],
      items: [
        "Confirmer l'existence d'un traitement de données personnelles",
        "Accéder à vos données personnelles",
        "Demander la correction, la suppression ou l'anonymisation des données",
        "Retirer votre consentement à tout moment",
      ],
    },
    {
      h2: "8. Mineurs",
      paragraphs: [
        "TubeTrace n'est pas destiné aux enfants de moins de 13 ans et ne collecte pas intentionnellement les données d'enfants.",
      ],
    },
    {
      h2: "9. Modifications de cette politique",
      paragraphs: [
        "Nous pouvons mettre à jour cette politique périodiquement. La date de 'dernière mise à jour' en haut indique quand la révision la plus récente a eu lieu.",
      ],
    },
    {
      h2: "10. Contact",
      paragraphs: [
        "Des questions sur cette politique ? Ouvrez une issue sur github.com/LucasHenriqueDiniz/tubetrace.",
      ],
    },
  ],
};
