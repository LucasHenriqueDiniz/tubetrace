import type { YoutubeWrappedContent } from "../types";

export const youtubeWrappedEn: YoutubeWrappedContent = {
  meta: {
    title: "YouTube Wrapped Alternative — Analyze Your Watch History Like Spotify Wrapped",
    description:
      "YouTube doesn't have a Wrapped feature like Spotify. TubeTrace is the best free alternative: get your viewing personality, top channels, and binge stats from Google Takeout.",
  },
  eyebrow: "Guide",
  h1: "YouTube Wrapped Alternative: Analyze Your Watch History Like Spotify Wrapped",
  intro:
    "Spotify Wrapped gives you a beautiful year-in-review every December. YouTube doesn't have an equivalent feature — but you can create your own with TubeTrace and your Google Takeout data.",
  doesYtHaveH2: "Does YouTube have a Wrapped feature?",
  doesYtHavePara1:
    "YouTube does not have a direct equivalent to Spotify Wrapped. YouTube has an official 'Recap' feature that appears for some users at the end of the year, but it has strict requirements: you need a minimum amount of watch history, your history must be enabled, and it's not available to all users or in all regions.",
  doesYtHavePara2:
    "If you don't see a YouTube Recap, or if you want a more detailed and persistent analysis, TubeTrace is the best free alternative — and it works with your complete history, not just the last year.",
  comparisonH2: "TubeTrace vs YouTube Recap",
  comparisonRows: [
    ["Full history (all years)", true, false],
    ["No login required", true, false],
    ["100% private", true, false],
    ["Works without watch history enabled", true, false],
    ["Viewing personality type", true, false],
    ["Binge session detection", true, false],
    ["Activity heatmap", true, false],
    ["Integrated in YouTube app", false, true],
    ["Shareable highlight cards", true, "limited"],
  ],
  featuresH2: "What TubeTrace shows you (like Spotify Wrapped)",
  features: [
    {
      title: "Your Viewing Personality",
      desc: "Like Spotify's music personality, TubeTrace identifies your YouTube archetype: Night Owl, Binge Watcher, Loyal Fan, Variety Seeker, Early Bird, Weekend Warrior, or Balanced Viewer.",
    },
    {
      title: "Top Channels",
      desc: "See which channels you've watched the most, how many videos you've seen from each, and what percentage of your total history they make up.",
    },
    {
      title: "Total Watch Time",
      desc: "Get an estimate of how many hours you've spent on YouTube across your entire history. Prepare yourself — the number is often surprising.",
    },
    {
      title: "Binge Sessions",
      desc: "TubeTrace detects your biggest binge sessions: the periods when you watched the most videos in a short window, including which channels you watched.",
    },
    {
      title: "Viewing Heatmap",
      desc: "A GitHub-style activity calendar showing every day you watched YouTube — with intensity indicating how much you watched each day.",
    },
    {
      title: "Peak Habits",
      desc: "When do you watch the most? TubeTrace breaks down your activity by hour, day of week, and month to reveal your YouTube habits.",
    },
  ],
  howToH2: "How to get your YouTube Wrapped equivalent",
  howToSteps: [
    {
      title: "Export your history",
      desc: "Go to takeout.google.com, select only YouTube and YouTube Music, and create an export. See the full guide for step-by-step instructions.",
    },
    {
      title: "Upload to TubeTrace",
      desc: "Drop the downloaded ZIP or TGZ file on the TubeTrace home page. No extraction needed. Your file is processed entirely in your browser.",
    },
    {
      title: "Explore your report",
      desc: "Your full YouTube Wrapped equivalent appears instantly — personality, top channels, binge sessions, heatmap, and all your habits over the years.",
    },
    {
      title: "Share your results",
      desc: "Use the Share button to generate a 1080×1080 image card with your key stats, perfect for sharing on social media.",
    },
  ],
  cta: {
    h2: "Create your YouTube Wrapped now",
    desc: "Free, private, and works with your complete YouTube history — not just the last year.",
    upload: "Analyze My History",
    sample: "View Sample Report",
  },
};
