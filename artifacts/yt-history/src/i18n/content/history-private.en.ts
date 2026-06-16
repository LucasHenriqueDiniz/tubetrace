import type { YoutubePrivacyContent } from "../types";

export const youtubePrivacyEn: YoutubePrivacyContent = {
  meta: {
    title: "Is YouTube Watch History Private? Who Can See What You Watch",
    description:
      "Learn who can see your YouTube watch history, whether it's private by default, how to pause or delete it, and how TubeTrace keeps your data private.",
  },
  eyebrow: "Guide",
  h1: "Is YouTube Watch History Private? Who Can See What You Watch",
  intro:
    "Short answer: Yes, your YouTube watch history is private by default. Only you can see it when signed into your account. Google can see it for advertising purposes, but other YouTube users cannot.",
  whoCanSeeH2: "Who can see your YouTube watch history?",
  whoCanSee: [
    {
      title: "Other YouTube users",
      answer: "Cannot see it",
      positive: true,
      desc: "Your watch history is not public. No other YouTube user — including channel creators — can see which videos you have watched.",
    },
    {
      title: "Google / YouTube",
      answer: "Can see it",
      positive: false,
      desc: "Google uses your watch history to personalize recommendations, targeted advertising, and its own analytics. You can review and delete this data at myaccount.google.com/data-and-privacy.",
    },
    {
      title: "Advertisers",
      answer: "Cannot see your history directly",
      positive: true,
      desc: "Advertisers do not receive your watch history. Google uses it internally to show you relevant ads, but the raw data is not sold or provided directly to advertisers.",
    },
    {
      title: "Shared accounts / family",
      answer: "Can see it if they use your account",
      positive: false,
      desc: "If multiple people share a Google account or a device where your account is logged in, they can see your watch history in the YouTube History page. Consider using separate accounts or YouTube's Incognito mode.",
    },
    {
      title: "TubeTrace",
      answer: "Cannot see it",
      positive: true,
      desc: "TubeTrace processes your exported file entirely in your browser. The data never leaves your device and is not sent to any server. TubeTrace has no access to your YouTube account.",
    },
  ],
  howToPrivacyH2: "How to make your YouTube watch history more private",
  privacyOptions: [
    {
      title: "Pause watch history",
      desc: "You can pause YouTube from recording new watches. Go to myaccount.google.com/activitycontrols and toggle 'YouTube History' off. Note: this also stops recommendations from improving.",
    },
    {
      title: "Enable auto-delete",
      desc: "Set YouTube to automatically delete your history after 3 or 18 months. In the Activity Controls page, look for 'Auto-delete' under YouTube History.",
    },
    {
      title: "Use Incognito mode on YouTube",
      desc: "In the YouTube mobile app, tap your profile picture and select 'Turn on Incognito'. Videos watched in Incognito mode are not added to your history.",
    },
    {
      title: "Delete specific videos or clear all history",
      desc: "Go to youtube.com/feed/history to browse and delete individual videos, or clear your entire watch history. Note: deleted history cannot be recovered.",
    },
  ],
  isSafeH2: "Is it safe to analyze my YouTube history with TubeTrace?",
  isSafeTitle: "Yes — TubeTrace is 100% client-side",
  isSafeDesc:
    "TubeTrace processes your Google Takeout export entirely in your browser using JavaScript. Your file is never uploaded to any server, stored in any database, or transmitted over the network. Once you close the tab, the data is gone.",
  isSafeItems: [
    "No account or login required",
    "No cookies that store your history",
    "No server receives your data",
    "Open source — you can verify the code on GitHub",
    "Works offline once the page is loaded",
  ],
  cta: {
    h2: "Explore your history privately",
    desc: "TubeTrace gives you full visibility into your viewing habits without sharing any data with anyone. Export your history from Google Takeout and analyze it safely.",
    upload: "Analyze My History",
    exportGuide: "How to Export My Data",
  },
};
