import type { YoutubeRecapContent } from "../types";

export const youtubeRecapEn: YoutubeRecapContent = {
  meta: {
    title: "YouTube Recap Not Showing? Here's Why and What to Do",
    description:
      "YouTube Recap not appearing? Learn the exact requirements for YouTube Recap eligibility and how to see your own YouTube year in review with TubeTrace.",
  },
  eyebrow: "Guide",
  h1: "YouTube Recap Not Showing? Here's Why",
  intro:
    "YouTube Recap is an optional year-in-review feature that not everyone gets. If yours isn't showing up, it's likely because your account doesn't meet one or more of YouTube's eligibility requirements — which YouTube has not publicly disclosed in full detail.",
  requirementsH2: "Known requirements for YouTube Recap",
  requirements: [
    {
      title: "Watch history must be enabled",
      desc: "YouTube Recap requires an active watch history. If you have paused your YouTube history, go to myaccount.google.com/activitycontrols and re-enable 'YouTube History'. Future watches will be recorded, but past paused periods remain missing.",
    },
    {
      title: "Sufficient viewing activity",
      desc: "YouTube has not published the minimum threshold, but Recap appears to require a meaningful amount of viewing. Accounts with very little watch history may not qualify.",
    },
    {
      title: "Account age and region",
      desc: "YouTube Recap has been rolled out gradually and may not be available in all countries or for newer accounts. Even eligible accounts may see it at different times.",
    },
    {
      title: "Auto-delete settings",
      desc: "If you have set YouTube to auto-delete watch history after 3 or 18 months, there may not be enough data for Recap to generate a meaningful summary.",
    },
  ],
  howToCheckH2: "How to check if your YouTube history is enabled",
  howToCheckSteps: [
    "Go to myaccount.google.com/activitycontrols",
    "Find 'YouTube History' in the list.",
    "If the toggle is off or says 'Paused', click it to turn it back on.",
    "Optionally, check the auto-delete settings — set it to 'Keep until I delete' to retain all future history.",
  ],
  howToCheckNote:
    "Note: enabling history now won't recover previously deleted entries, but it will ensure future watches are counted for next year's Recap.",
  alternativeH2: "YouTube Recap not available? Use TubeTrace instead",
  alternativePara1:
    "If you don't see YouTube Recap, or if you want a more detailed and always-available analysis, TubeTrace gives you the same kind of insights — with more depth, for your full history, right now.",
  alternativePara2:
    "TubeTrace works by analyzing your Google Takeout export: the raw data file that YouTube stores on your behalf. This means you can see your complete watch history — not just the last year — including your viewing personality, binge patterns, top channels, and daily habits.",
  alternativeItems: [
    "Works even if YouTube Recap is not available",
    "Shows your complete history, not just one year",
    "Viewing personality type (7 archetypes)",
    "Top channels with percentage breakdown",
    "Binge session detection",
    "GitHub-style activity heatmap",
    "100% private — processed in your browser",
    "No login or account required",
  ],
  cta: {
    h2: "Don't wait for YouTube Recap",
    desc: "Get your full YouTube year-in-review right now — for every year you have history.",
    upload: "Analyze My History",
    exportGuide: "How to Export My Data",
  },
};
