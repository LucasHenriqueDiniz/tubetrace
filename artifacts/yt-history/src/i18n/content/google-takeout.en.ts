import type { GoogleTakeoutContent } from "../types";

export const googleTakeoutEn: GoogleTakeoutContent = {
  meta: {
    title: "Google Takeout YouTube History: How to Download and Analyze Your Data",
    description:
      "Learn how Google Takeout works for YouTube history, what files you get, how to analyze your watch history data, and what insights TubeTrace can show you.",
  },
  eyebrow: "Guide",
  h1: "Google Takeout YouTube History: Download and Analyze Your Data",
  intro:
    "Google Takeout lets you download a copy of everything YouTube has recorded about your activity — including your complete watch history. This guide explains what you get, what the files contain, and how to turn that data into meaningful insights with TubeTrace.",
  whatIsH2: "What is Google Takeout?",
  whatIsPara1:
    "Google Takeout (officially 'Download your data') is a service that lets you export a copy of your Google account data — including Gmail, Drive, Photos, Maps, and YouTube. For YouTube specifically, you can download your watch history, search history, comments, likes, subscriptions, and playlists.",
  whatIsPara2:
    "The export is a ZIP or TGZ archive that you download to your computer. The data belongs to you and is never processed by Google in any special way during the export.",
  filesH2: "What files does Google Takeout include for YouTube?",
  files: [
    {
      filename: "watch-history.json",
      desc: "The most important file for TubeTrace. Contains a list of every video you watched, including title, channel, and exact timestamp. This is the JSON format — structured, machine-readable, and the preferred input for TubeTrace.",
    },
    {
      filename: "watch-history.html",
      desc: "The same data in HTML format, readable in any browser. TubeTrace supports this format too, though JSON is preferred because it parses more reliably.",
    },
    {
      filename: "search-history.json / search-history.html",
      desc: "Your YouTube search queries with timestamps. TubeTrace does not analyze search history — only watch history.",
    },
  ],
  dataContainsH2: "What data does watch-history.json contain?",
  dataContainsPre: "Each entry in your watch history JSON contains:",
  dataContainsItems: [
    "Video title (as it was at the time of watching)",
    "Channel name and channel URL",
    "Exact timestamp of when you watched it (ISO 8601 format)",
    "Activity type (always 'YouTube watch history' for watched videos)",
  ],
  dataContainsPost:
    "Notably, the file does not include video duration, view count, likes, or whether you watched the video completely. TubeTrace estimates 5 minutes per video for total watch time calculations.",
  howToH2: "How to download your YouTube history from Google Takeout",
  howToSteps: [
    "Go to takeout.google.com and sign in.",
    "Click 'Deselect all' — this prevents downloading gigabytes of data from every Google service.",
    "Scroll down and check 'YouTube and YouTube Music'.",
    "Click 'All YouTube data included' to see options. Make sure 'history' is enabled. Choose JSON format when offered.",
    "Scroll to the bottom, click 'Next step', choose delivery by email, ZIP format, and click 'Create export'.",
    "Wait for Google's email (usually minutes to a few hours), then download the ZIP file.",
  ],
  whatCanH2: "What can TubeTrace do with your Google Takeout data?",
  whatCanPre:
    "TubeTrace reads your watch-history.json (or HTML) from the Takeout archive and computes a full set of analytics — entirely in your browser, without uploading anything:",
  whatCanItems: [
    "Your YouTube viewing personality (7 types)",
    "Top channels ranked by video count",
    "Binge session detection (4+ videos in 45 min)",
    "Activity heatmap across all years",
    "Viewing patterns by hour, day, and month",
    "Longest consecutive viewing streak",
    "Total estimated watch time in hours",
    "Most active day ever and peak month",
  ],
  cta: {
    h2: "Analyze your Google Takeout data now",
    desc: "Drop your YouTube Takeout ZIP on TubeTrace and get your full analysis in seconds. 100% private — your file never leaves your browser.",
    upload: "Upload My Takeout",
    sample: "See Example Report",
    uploadLabel: "Upload My Takeout",
  },
};
