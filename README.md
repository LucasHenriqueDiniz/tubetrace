# TubeTrace

Privacy-first YouTube watch history analyzer for Google Takeout exports.

TubeTrace runs entirely in the browser: users upload their YouTube watch history JSON or HTML export locally, and the app turns it into channel rankings, watch patterns, binge sessions, activity timelines, and personality-style insights without sending the export to a server.

## Features

- Parses Google Takeout YouTube watch history in JSON and HTML formats
- Keeps analysis local in the browser for privacy
- Shows total videos, unique channels, estimated watch time, and date range
- Ranks top channels and visualizes activity by hour, weekday, month, and year
- Detects binge sessions and highlights active days and favorite time slots
- Includes a demo mode so the app can be explored without uploading real data

## Tech Stack

- React, Vite, TypeScript
- Tailwind CSS and shadcn/ui components
- Recharts for analytics charts
- Zustand for local state
- pnpm workspaces

## Local Development

```bash
pnpm install
pnpm --filter @workspace/yt-history run dev
```

## Build

```bash
pnpm run typecheck
pnpm --filter @workspace/yt-history run build
```

## Cloudflare Pages

Suggested Cloudflare Pages settings:

- Framework preset: Vite
- Build command: `pnpm --filter @workspace/yt-history run build`
- Build output directory: `artifacts/yt-history/dist`
- Root directory: repository root

## Repository Details

Suggested GitHub repository:

- Name: `tubetrace`
- Description: `Privacy-first YouTube watch history analyzer for Google Takeout exports.`
- Topics: `youtube`, `google-takeout`, `watch-history`, `analytics`, `privacy`, `react`, `vite`, `typescript`, `cloudflare-pages`

## Privacy

Do not commit real Google Takeout exports. The repository ignores `Takeout/` and `attached_assets/` because those folders can contain personal watch history.
