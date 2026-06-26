# TubeTrace — YouTube Watch History Analyzer

Analyze your YouTube viewing habits with this **privacy-first** analyzer. Upload your Google Takeout export and get instant insights into your watch patterns, top channels, binge sessions, and viewing personality — all processed **100% locally in your browser**.

**Website**: https://tubetrace.pages.dev  
**GitHub**: https://github.com/LucasHenriqueDiniz/tubetrace

---

## What is TubeTrace?

TubeTrace turns your YouTube watch history into actionable insights:

- 📊 **Viewing Personality**: Night owl? Binge watcher? Casual browser?
- 🏆 **Top Channels**: Ranked by videos watched
- 🔥 **Binge Sessions**: Detect your marathon viewing streaks
- 📈 **Activity Heatmap**: Visualize when you watch (by hour, day, month, year)
- 🔐 **100% Private**: No server, no tracking, no data collection

All processing happens locally — your data never leaves your browser.

---

## Features

- ✅ Parse Google Takeout YouTube exports (JSON & HTML formats)
- ✅ Zero-server architecture for complete privacy
- ✅ Interactive charts (activity heatmap, channel rankings, time patterns)
- ✅ Personality typing (8 viewing persona archetypes)
- ✅ Support for ZIP, TGZ, and TAR archives
- ✅ Multilingual (EN, PT, ES, FR, DE, IT)
- ✅ Demo mode (explore with sample data, no upload needed)
- ✅ Fully responsive (mobile + desktop)

---

## Tech Stack

- **React 19** + **Vite 7** + **TypeScript 5.9**
- **Tailwind CSS 4** + **shadcn/ui** components
- **Recharts 2** for analytics visualizations
- **Framer Motion 12** for animations
- **Zustand 5** for state management
- **fflate** for ZIP/archive decompression
- **Cloudflare Pages** for deployment

---

## Requirements

- Node.js 22+
- pnpm 9+

---

## Getting Started

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm --filter @workspace/yt-history run dev
```

Open http://localhost:5173

### Build for Production

```bash
# Type check
pnpm run typecheck

# Build
pnpm --filter @workspace/yt-history run build

# Output: artifacts/yt-history/dist/public
```

---

## Deployment

### Cloudflare Pages

TubeTrace is deployed on **Cloudflare Pages** for fast, global distribution.

**Cloudflare Pages Configuration:**
- Framework: Vite
- Build command: `pnpm --filter @workspace/yt-history run build`
- Build output directory: `artifacts/yt-history/dist/public`
- Root directory: repository root
- Environment variables: See `.env.example`

Deploy via:
```bash
pnpm --filter @workspace/yt-history run deploy
```

---

## CI/CD

GitHub Actions automatically:
1. **Run CI** on push/PR (TypeScript, ESLint, unit tests)
2. **Build** (verify dist artifacts)
3. **Deploy** to Cloudflare Pages (on main branch only)

All workflows require `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets.

---

## Privacy & Security

- ✅ No backend server collecting data
- ✅ No analytics tracking
- ✅ No login or account required
- ✅ No persistent storage
- ✅ Open source (audit the code)
- ✅ GDPR/LGPD compliant

See [Privacy Policy](/artifacts/yt-history/public/privacy.html) for details.

---

## Project Structure

```
artifacts/yt-history/          ← Main app
├── src/
│   ├── components/            ← React UI components
│   ├── pages/                 ← Page components (about, contact, privacy)
│   ├── lib/
│   │   ├── parser.ts          ← YouTube history parsing logic
│   │   ├── store.ts           ← Zustand state management
│   │   └── types.ts           ← TypeScript definitions
│   └── i18n/                  ← Multilingual content
├── public/                    ← Static assets
│   ├── privacy.html           ← Privacy policy
│   └── terms.html             ← Terms of service
└── wrangler.toml              ← Cloudflare config
```

---

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

MIT License — See [LICENSE](LICENSE) file for details.

---

## Support

- 📖 [How to Export YouTube History](/artifacts/yt-history/public/how-to-export.html)
- ❓ [FAQ](/artifacts/yt-history/public/faq.html)
- 💬 [Contact](https://tubetrace.pages.dev/contact)
- 🐛 [Report Issues](https://github.com/LucasHenriqueDiniz/tubetrace/issues)
