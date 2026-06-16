import type { AboutContent } from "../types";

export const aboutEn: AboutContent = {
  meta: {
    title: "About TubeTrace — Private YouTube Watch History Analyzer",
    description:
      "TubeTrace is a free, privacy-first YouTube watch history analyzer. Your data never leaves your browser. Learn about the project and why it was built.",
  },
  eyebrow: "About",
  h1: "What is TubeTrace?",
  intro:
    "TubeTrace is a free, open-source tool that analyzes your YouTube watch history from a Google Takeout export — entirely inside your browser, with no server, no login, and no data collection.",
  features: [
    {
      title: "100% Private",
      desc: "Your watch history file is processed entirely in your browser. It never leaves your device.",
    },
    {
      title: "Instant Analysis",
      desc: "Get your viewing personality, top channels, binge sessions, and activity patterns in seconds.",
    },
    {
      title: "No Account Required",
      desc: "No login, no sign-up, no tracking. Just upload your Google Takeout export and see your stats.",
    },
    {
      title: "Open Source",
      desc: "The entire codebase is public. You can audit exactly what happens to your data.",
    },
  ],
  whyH2: "Why TubeTrace?",
  whyParas: [
    "YouTube's official history page shows you what you watched, but gives you no insight into how you watch. TubeTrace fills that gap: it turns your raw export into meaningful stats — your personality as a viewer, which channels dominate your time, when you binge the most, and what your daily habits look like across months and years.",
    "Unlike other tools, TubeTrace never sends your data anywhere. Your Google Takeout ZIP is decompressed and processed entirely in your browser using JavaScript. The moment you close the tab, the data is gone.",
    "TubeTrace supports both the JSON and HTML formats that Google Takeout exports, as well as the compressed .zip, .tgz, and .tar.gz archives you download directly from Google. No extraction needed.",
  ],
  whatH2: "What TubeTrace analyzes",
  whatItems: [
    "Your YouTube viewing personality (Night Owl, Binge Watcher, Loyal Fan, and more)",
    "Top channels by total videos watched",
    "Binge sessions — consecutive videos in short windows",
    "Activity heatmap across every day of your history",
    "Viewing patterns by hour of day, day of week, and month",
    "Longest viewing streak (consecutive days)",
    "Total estimated watch time",
    "Most active day ever",
    "Peak viewing hours and time slot breakdown",
  ],
  howH2: "How to use TubeTrace",
  howSteps: [
    "Export your YouTube history from Google Takeout. Select only YouTube and YouTube Music to keep the file small.",
    "Download the .zip or .tgz file Google sends you.",
    "Drop the file on the TubeTrace upload page — no extraction needed.",
    "Your report appears instantly, processed entirely in your browser.",
  ],
  cta: {
    analyze: "Analyze My History",
    sample: "View Sample Report",
    github: "View on GitHub",
  },
};
