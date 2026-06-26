# AdSense Placement Strategy — TubeTrace

**Document Version**: 1.0  
**Last Updated**: June 26, 2026  
**Status**: Ready for AdSense Review

---

## Overview

TubeTrace is a privacy-first YouTube history analyzer tool. This document outlines the strategy for displaying Google AdSense ads in a way that maintains user trust and experience while generating monetization revenue.

**Core Principle**: Ads will be non-intrusive, clearly labeled, and never interfere with the primary value proposition of the tool.

---

## Placement Rules

### ✅ Allowed Placements

1. **Below the Fold Only**
   - No ads above-the-fold on the homepage
   - Homepage users see the full upload interface before any ad
   - Ads appear only after scrolling past primary content

2. **Content Pages (Guides & Educational)**
   - Ads placed between guide sections (after H2 headings)
   - Maximum 2 ad units per guide page
   - Never between title (H1) and introduction paragraph
   - Proper spacing (at least 1rem padding) between ads and content

3. **Dashboard/Report Pages**
   - Single responsive ad after user uploads their data
   - Placed below visualizations, above fold recommendation
   - Does not interfere with charts, statistics, or data display

4. **Mobile Responsive**
   - Single-column ad layout on mobile (max-width < 768px)
   - 2-3 ads per long-form guide on desktop
   - Auto-scaling responsive display ads (300x250, 728x90, 300x600)

### ❌ Not Allowed

- **Navigation areas**: Header, footer, sidebar, breadcrumb nav
- **Pop-ups, pop-unders, or overlays**: Users must not close ads to access content
- **Fake buttons or CTAs**: No deceptive "Download", "Play", or "Learn More" that are ads
- **Auto-playing video ads**: Violates AdSense policy
- **Flash or animated ads that distract**: Static/minimal animation only
- **Ads covering content**: Absolute positioning that blocks reading
- **Empty/placeholder pages**: Only ads on pages with substantive content (100+ words)
- **Above-the-fold dominance**: Content must outnumber ads by 3:1 ratio

---

## Ad Density & Quality Standards

| Page Type | Max Ads | Content:Ad Ratio | Notes |
|---|---|---|---|
| Homepage | 1 | 5:1 | Below fold only |
| Guide pages | 2-3 | 4:1 per section | Between sections |
| Dashboard | 1 | 6:1 | Below visualizations |
| About/Contact | 0 | N/A | Trust pages, no ads |
| FAQ | 1 | 5:1 | Minimal ads |

---

## Labeling & Transparency

### Ad Labels (Required)

All ad units must have a clear, prominent label:

- **English**: "Ad" or "Sponsored"
- **Portuguese**: "Anúncio" ou "Patrocinado"
- **Other languages**: Localized equivalent

**Label Placement**: Above the ad unit, in smaller text (10-12px), neutral color (#666 or similar), not bold or attention-grabbing.

**Example**:
```
─────────────────
  Ad
  [300x250 ad unit here]
```

### Transparency Links

- Footer will include link to "How ads work on this site"
- Privacy policy (already updated) explains Google AdSense cookies
- Ad Settings link provided for users to manage personalization

---

## Implementation Details

### Ad Unit Types

- **Responsive Display Ads**: Primary choice (auto-scales to fit container)
- **In-article ads**: For long-form guides (300x250, 728x90)
- **Auto ads (if enabled)**: Google automatically places ads; must be reviewed for compliance

### No Custom Styling

- Use Google's default ad styling
- Do NOT modify ad colors, fonts, or borders to match site theme
- This prevents confusion between ads and content (ADS-PROG-03 compliance)

### Container Sizing

- Minimum container width for responsive ads: 300px
- Maximum width: 728px (maintains readability)
- Proper whitespace: 1-2rem margin on all sides of ad containers

---

## Pages & Sections Mapped

### Homepage (`/`)
- ✅ Single responsive ad (below all fold content)
- ❌ No ads in upload area

### Guide Pages (`/guide/*`)
- ✅ 2-3 responsive ads between major sections
- ❌ No ads in intro/H1 area
- ❌ No ads in FAQ/troubleshooting sections (trust)

### Dashboard (`/sample`, after upload)
- ✅ Single responsive ad after charts
- ❌ No ads overlaying visualizations
- ❌ No ads in statistics cards

### About (`/about`)
- ❌ No ads (publisher credibility)

### Contact (`/contact`)
- ❌ No ads (user support trust)

### FAQ (`/faq`)
- ✅ Maximum 1 ad after FAQ section
- ❌ No ads between questions (disrupts scanning)

### Privacy Policy (`/privacy.html`)
- ❌ No ads (policy page trust)

### Terms (`/terms.html`)
- ❌ No ads (legal page trust)

---

## User Control & Opt-Out

### Personalized Ads
- Users can opt out at [Ad Settings](https://adssettings.google.com)
- Privacy policy includes link and instructions
- EU users see Fundingchoices consent banner to manage preferences

### Do Not Track Signals
- Respect browser's "Do Not Track" (if implemented by Google Ads)
- No custom tracking on top of Google's standard measurement

---

## Compliance Checklist

- [ ] All ads have clear "Ad" or "Sponsored" label
- [ ] Ad labels are NOT bold or attention-grabbing
- [ ] No ads above-the-fold on homepage
- [ ] No ads in navigation, footer, or header areas
- [ ] No auto-playing video ads
- [ ] No pop-ups or pop-unders
- [ ] Content outnumbers ads (3:1 to 6:1 ratio maintained)
- [ ] Ads do not cover content or require closing to read
- [ ] Privacy policy updated with Google Ads cookie disclosure
- [ ] Fundingchoices banner implemented for EU users
- [ ] No custom styling that confuses ads with content
- [ ] Trust pages (About, Contact, Privacy) have no ads

---

## Monitoring & Adjustments

After AdSense approval and ad launch:

1. **Weekly**: Check ad performance and user feedback
2. **Monthly**: Review placement effectiveness (click-through, user experience)
3. **Quarterly**: Audit for compliance, update strategy if needed
4. **Before updates**: Verify ads still comply after code changes

---

## References

- [Google AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Google Publisher Policies](https://support.google.com/adsense/answer/10502938)
- [Ad Placement Best Practices](https://support.google.com/adsense/answer/7499282)
- TubeTrace Privacy Policy: `/privacy.html`
- TubeTrace Terms: `/terms.html`

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-06-26 | Initial placement strategy for AdSense approval |

