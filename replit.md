# YouTube Unwrapped

A browser-based YouTube watch history analyzer. Upload your Google Takeout history file (JSON or HTML) and instantly get rich insights — all processed locally, nothing leaves your device.

## Run & Operate

- `pnpm --filter @workspace/yt-history run dev` — run the frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui
- Charts: Recharts
- Animations: Framer Motion
- State: Zustand
- File parsing: All client-side (DOMParser for HTML, JSON.parse for JSON)
- Date handling: date-fns

## Where things live

- `artifacts/yt-history/` — main frontend app
- `artifacts/yt-history/src/lib/parser.ts` — JSON + HTML parsing logic, analytics computation
- `artifacts/yt-history/src/lib/types.ts` — all TypeScript types
- `artifacts/yt-history/src/lib/store.ts` — Zustand store
- `artifacts/yt-history/src/components/` — all UI components
- `artifacts/api-server/` — Express backend (not used by main app, placeholder)

## Architecture decisions

- All data processing happens client-side — no backend needed, full privacy
- Accepts both JSON and HTML export formats from Google Takeout
- Zustand for state (simpler than React Context for this use case)
- Single-page app (no routing needed), sections scroll vertically
- Demo mode generates ~2000 fake entries so users can explore without uploading

## Product

Users upload their YouTube watch history from Google Takeout and get:
- A "YouTube personality" label (Night Owl, Binge Watcher, Variety Seeker, etc.)
- Overview stats: total videos, unique channels, date range, estimated watch time
- Top channels ranking with animated progress bars and bar chart
- Watch pattern charts: by hour of day, day of week, month, year
- Binge session detection and top binge callouts
- Fun insights: most active day, earliest/latest watch, favorite time slot

## User preferences

- Language: Portuguese / Brazilian context (dates in PT format are supported)
- Privacy-first: all processing stays in browser

## Gotchas

- HTML format dates are in Brazilian Portuguese (e.g. "8 de mai. de 2026, 17:41:27 BRT")
- JSON entries must have `activityControls` including "YouTube watch history" and `title` starting with "Watched "
- `zustand` and `react-dropzone` must be installed in `@workspace/yt-history`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
