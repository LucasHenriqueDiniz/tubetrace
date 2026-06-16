import type { FaqContent } from "../types";

export const faqEn: FaqContent = {
  meta: {
    title: "FAQ — TubeTrace YouTube Watch History Analyzer",
    description:
      "Frequently asked questions about TubeTrace. Learn how to export your YouTube history, whether your data is safe, and how the analysis works.",
  },
  eyebrow: "FAQ",
  h1: "Frequently Asked Questions",
  intro:
    "Everything you need to know about TubeTrace, your data privacy, and how to export your YouTube watch history.",
  faqs: [
    {
      q: "Is TubeTrace safe to use?",
      a: "Yes. TubeTrace processes your file entirely in your browser using JavaScript. Your YouTube watch history never leaves your device — it is not uploaded to any server, stored in any database, or shared with anyone. You can disconnect from the internet after loading the page and the analysis will still work.",
    },
    {
      q: "Does my data leave my browser?",
      a: "No. The file you upload is decompressed and analyzed locally using the Web APIs built into your browser. TubeTrace has no backend server that handles user files. The only network requests TubeTrace makes are to load the app itself and serve Google Ads.",
    },
    {
      q: "How do I export my YouTube watch history?",
      a: "Go to takeout.google.com, click 'Deselect all', then scroll down and select only 'YouTube and YouTube Music'. Create the export, wait for Google's email, and download the .zip file. Then drop it on the TubeTrace upload area.",
    },
    {
      q: "What file should I upload?",
      a: "Upload the .zip or .tgz file you download from Google Takeout. You do not need to extract it. TubeTrace also accepts the raw watch-history.json or watch-history.html files if you have already extracted the archive.",
    },
    {
      q: "Why does TubeTrace not find my history inside the ZIP?",
      a: "Make sure you selected 'YouTube and YouTube Music' in Google Takeout, and that 'History' was included in the export options. Some accounts may have watch history paused — if so, the export will be empty. Check your YouTube settings at myaccount.google.com/activitycontrols.",
    },
    {
      q: "Does TubeTrace work offline?",
      a: "Once the page is fully loaded, yes. The analysis runs entirely in your browser with no internet connection required. However, Google Ads and fonts loaded from Google CDN will not appear without a connection.",
    },
    {
      q: "Is TubeTrace affiliated with YouTube or Google?",
      a: "No. TubeTrace is an independent, open-source project. It is not affiliated with, endorsed by, or connected to YouTube, Google, or Alphabet in any way. Google Takeout and YouTube are trademarks of Google LLC.",
    },
    {
      q: "What YouTube history formats are supported?",
      a: "TubeTrace supports the JSON format (watch-history.json) and the HTML format (watch-history.html) that Google Takeout produces, as well as the .zip, .tgz, and .tar.gz archives that contain them. JSON is preferred because it includes more structured data.",
    },
    {
      q: "My history only goes back a few years. Why?",
      a: "Google Takeout exports exactly what YouTube has stored for your account. If your watch history was paused at some point, entries from that period will be missing. If you enabled auto-delete (3 or 18 months), older entries are gone. TubeTrace can only analyze what the export contains.",
    },
    {
      q: "Can I use TubeTrace without uploading a file?",
      a: "Yes — use the 'Load Demo Data' button on the home page to see a sample report with realistic synthetic data. You can also view a pre-generated sample report without any upload.",
    },
    {
      q: "Is TubeTrace free?",
      a: "Yes, TubeTrace is completely free to use. The project is open-source on GitHub. It is funded by Google AdSense ads shown on the page.",
    },
    {
      q: "How accurate is the watch time estimate?",
      a: "TubeTrace estimates 5 minutes per video watched, since the actual video duration is not included in the Google Takeout export. The real total is likely higher for long-form content and lower for Shorts. Use the estimate as a rough order-of-magnitude guide.",
    },
  ],
  stillHaveH2: "Still have questions?",
  stillHaveDesc:
    "Check the step-by-step export guide or reach out via the contact page.",
  cta: {
    analyze: "Analyze My History",
    sample: "View Sample Report",
  },
};
