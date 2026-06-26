import type { PrivacyContent } from "../types";

export const privacyEn: PrivacyContent = {
  meta: {
    title: "Privacy Policy — TubeTrace",
    description:
      "TubeTrace Privacy Policy — how we handle your data, cookies, and advertising.",
  },
  eyebrow: "Privacy",
  h1: "Privacy Policy",
  updated: "Last updated: June 26, 2026",
  summary:
    "🔒 TubeTrace processes your entire YouTube history locally in your browser. No data from your history is sent to our servers or third parties.",
  sections: [
    {
      h2: "1. Who We Are",
      paragraphs: [
        "TubeTrace (tubetrace.pages.dev) is a free YouTube history analyzer tool that processes Google Takeout data directly in your browser.",
      ],
    },
    {
      h2: "2. Data We Collect",
      paragraphs: [
        "TubeTrace does NOT collect, store, or transmit your YouTube history. All processing happens locally on your device.",
        "The only data that may be collected is:",
      ],
      items: [
        "Anonymous usage data via Google Analytics (if applicable): pages visited, session time, country of origin. This does not personally identify you.",
        "Advertising cookies from Google AdSense, described in section 5.",
      ],
    },
    {
      h2: "3. Data You Provide",
      paragraphs: [
        "When you upload your Google Takeout file (ZIP, JSON, or HTML), that file is read directly in your browser via JavaScript. The file is NOT sent to any server. After closing or reloading the page, the data is automatically discarded.",
      ],
    },
    {
      h2: "4. Cookies",
      paragraphs: ["We use the following types of cookies:"],
      items: [
        "Essential cookies: necessary for basic site functionality.",
        "Advertising cookies: Google AdSense uses cookies to display relevant ads. See section 5.",
      ],
    },
    {
      h2: "5. Google AdSense and Advertising",
      paragraphs: [
        "This site uses Google AdSense to display ads. Google, as a third-party vendor, uses cookies to serve ads based on your previous visits to this and other sites.",
      ],
      subsections: [
        {
          h3: "5.1 Google Advertising Cookies",
          paragraphs: [
            "Google AdSense uses the following types of cookies and technologies:",
          ],
          items: [
            "Google advertising cookies: Used for ad personalization and frequency capping. Allow Google to serve relevant ads based on your browsing history.",
            "DoubleClick cookies: Track ad performance, prevent fraud, and measure conversions.",
            "Google Analytics (if enabled): Cookies to measure site usage, pages visited, and session time. Do not personally identify you.",
            "Web Beacons and Internet Signals: Small images or scripts that track interactions with ads and content.",
          ],
        },
        {
          h3: "5.2 How to Manage Your Preferences",
          paragraphs: [],
          items: [
            "Opt out of personalized ads: adssettings.google.com — Configure your personalized advertising preferences.",
            "How Google uses data: Google's advertising privacy policy (policies.google.com/technologies/ads).",
            "Google Privacy Policy: policies.google.com/privacy.",
            "Your consent: If you reside in the EU/EEA, you will see a consent banner when loading the site to accept or refuse advertising cookies.",
          ],
        },
        {
          h3: "5.3 Essential vs. Optional Cookies",
          paragraphs: [
            "Essential cookies (e.g., security, language) are necessary for site functionality. Advertising cookies are optional — you can refuse them, though this may result in less relevant ads.",
          ],
        },
      ],
    },
    {
      h2: "6. Third-Party Services",
      paragraphs: [
        "TubeTrace may integrate the following third-party services, each with its own privacy policy:",
      ],
      items: [
        "Google AdSense — advertising: policies.google.com/privacy",
        "Cloudflare Pages — hosting: cloudflare.com/privacypolicy",
        "Google Fonts — typography: policies.google.com/privacy",
      ],
    },
    {
      h2: "7. Your Rights (GDPR & CCPA)",
      paragraphs: [
        "Depending on your location, you may have the right to:",
      ],
      items: [
        "Confirm the existence of personal data processing",
        "Access your personal data",
        "Request correction, deletion, or anonymization of data",
        "Withdraw consent at any time",
      ],
      subsections: [
        {
          h3: "For EU/EEA Residents (GDPR)",
          paragraphs: [
            "If you reside in the European Union or European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR). Since we do not collect your YouTube history data, there is no personal data to delete from TubeTrace beyond the third-party cookies mentioned above.",
          ],
        },
      ],
    },
    {
      h2: "8. Minors",
      paragraphs: [
        "TubeTrace is not directed to children under 13 years of age and does not intentionally collect data from children.",
      ],
    },
    {
      h2: "9. Policy Changes",
      paragraphs: [
        "We may update this policy periodically. The 'last updated' date at the top indicates when the most recent revision occurred.",
      ],
    },
    {
      h2: "10. Contact",
      paragraphs: [
        "Questions about this policy? Open an issue at github.com/LucasHenriqueDiniz/tubetrace.",
      ],
    },
  ],
};
