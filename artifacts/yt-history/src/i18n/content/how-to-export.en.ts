import type { HowToExportContent } from "../types";

export const howToExportEn: HowToExportContent = {
  meta: {
    title: "How to Export Your YouTube Watch History with Google Takeout",
    description:
      "Step-by-step guide to exporting your YouTube watch history using Google Takeout. Download your data as a ZIP file and analyze it with TubeTrace.",
  },
  eyebrow: "Guide",
  h1: "How to Export Your YouTube Watch History with Google Takeout",
  intro:
    "Quick answer: Go to takeout.google.com, deselect everything, select YouTube and YouTube Music, create the export, download the ZIP, and upload it to TubeTrace. The whole process takes about 5–10 minutes plus the time Google needs to prepare the file.",
  timeNote:
    "Time to complete: 5–10 minutes setup. Google usually delivers the file within a few minutes to a few hours depending on your history size.",
  stepsH2: "Step-by-step instructions",
  steps: [
    {
      title: "Open Google Takeout",
      body: "Go to takeout.google.com and sign in with the Google account you use for YouTube. Make sure you're signed into the correct account — if you have multiple Google accounts, check the profile icon in the top-right corner.",
    },
    {
      title: 'Click "Deselect all"',
      body: "At the top of the product list, click the 'Deselect all' button. This prevents Google from including every Google product you use, which would result in a massive export that takes much longer to prepare.",
    },
    {
      title: "Select YouTube and YouTube Music",
      body: "Scroll down the product list until you find 'YouTube and YouTube Music'. Check the box next to it. This is the only product you need to select for TubeTrace.",
    },
    {
      title: "Configure the export options",
      body: "Click the 'All YouTube data included' button next to YouTube and YouTube Music to see the options. Make sure 'history' is checked. When given the choice between JSON and HTML format, choose JSON — it's more structured and TubeTrace can extract more data from it.",
    },
    {
      title: "Create the export",
      body: "Scroll to the bottom and click 'Next step'. Choose your preferred delivery method (email link is simplest), select the file type (.zip is recommended), choose a maximum file size (2 GB is fine), and click 'Create export'.",
    },
    {
      title: "Wait for Google's email",
      body: "Google will email you when the export is ready. For YouTube history, this usually takes a few minutes. If your account has years of history, it may take up to a few hours. You'll receive a download link in your inbox.",
    },
    {
      title: "Download the file",
      body: "Click the download link in the email. Save the .zip or .tgz file to your computer. You do not need to open or extract it.",
    },
    {
      title: "Upload to TubeTrace",
      body: "Go to the TubeTrace home page and drop the downloaded file into the upload area. Your report will appear in a few seconds, processed entirely in your browser.",
    },
  ],
  jsonVsHtmlH2: "JSON vs HTML: which file should I choose?",
  jsonTitle: "JSON (Recommended)",
  jsonItems: [
    "Structured data with timestamps",
    "Easier to parse reliably",
    "Available on most Google accounts",
    "File: watch-history.json",
  ],
  htmlTitle: "HTML",
  htmlItems: [
    "Also supported by TubeTrace",
    "Human-readable in a browser",
    "Dates may be in Portuguese (BRT)",
    "File: watch-history.html",
  ],
  problemsH2: "Common problems and solutions",
  problems: [
    {
      problem: "TubeTrace says 'No history file found'",
      solution:
        "Make sure you selected 'history' in the YouTube export options. If you only exported subscriptions or playlists, the watch history file won't be present.",
    },
    {
      problem: "The export says 'No entries'",
      solution:
        "YouTube watch history may be paused on your account. Check myaccount.google.com/activitycontrols to see if 'YouTube History' is enabled. If auto-delete is set to 3 months, older entries will be gone.",
    },
    {
      problem: "The ZIP is too large to upload",
      solution:
        "If you selected multiple Google products, your archive may be very large. Create a new export selecting only 'YouTube and YouTube Music'. The resulting file will be much smaller.",
    },
    {
      problem: "Google's export email never arrived",
      solution:
        "Check your spam folder. If nothing after 24 hours, go back to takeout.google.com and check 'Manage exports' to see the status.",
    },
  ],
  faqH2: "FAQ",
  faqs: [
    {
      q: "Does exporting my data delete anything from my YouTube account?",
      a: "No. Google Takeout creates a copy of your data. Your YouTube history, subscriptions, and account remain completely unchanged.",
    },
    {
      q: "Can I request my data more than once?",
      a: "Yes. You can create as many exports as you want from takeout.google.com. Each export reflects your data at the time the export was created.",
    },
    {
      q: "Is it safe to upload my watch history to TubeTrace?",
      a: "Yes. TubeTrace processes the file locally in your browser and never sends it to any server. See our privacy policy for full details.",
    },
  ],
  cta: {
    h2: "Ready to analyze your history?",
    desc: "Once you have your Google Takeout file, drop it on TubeTrace and see your full report in seconds.",
    upload: "Upload My Export",
    sample: "View Sample Report First",
  },
};
