# TubeTrace — Claude Workspace

## O que é este projeto

**TubeTrace** — analisador de histórico do YouTube a partir de exports do Google Takeout.
100% client-side, sem servidor, sem upload de dados. Deploy no Cloudflare Pages.

GitHub: https://github.com/LucasHenriqueDiniz/tubetrace

## Estrutura do monorepo

```
artifacts/yt-history/     ← app principal (React + Vite)
artifacts/api-server/     ← backend Express (scaffold, não usado pelo app)
artifacts/mockup-sandbox/ ← vitrine de componentes shadcn
lib/api-client-react/     ← client React Query gerado via OpenAPI
lib/api-spec/             ← spec OpenAPI + codegen
lib/api-zod/              ← schemas Zod
lib/db/                   ← Drizzle ORM (PostgreSQL, não usado pelo app)
scripts/                  ← scripts utilitários
```

## Comandos essenciais

```bash
# Dev
pnpm --filter @workspace/yt-history run dev

# Typecheck completo
pnpm run typecheck

# Build completo
pnpm run build

# Deploy Cloudflare Pages
pnpm --filter @workspace/yt-history run deploy
# ou
pnpm run deploy:pages
```

## Onde as coisas ficam

| O que | Onde |
|---|---|
| Parsing + analytics | `artifacts/yt-history/src/lib/parser.ts` |
| Tipos TypeScript | `artifacts/yt-history/src/lib/types.ts` |
| Estado (Zustand) | `artifacts/yt-history/src/lib/store.ts` |
| Componentes UI | `artifacts/yt-history/src/components/` |
| Config Cloudflare | `artifacts/yt-history/wrangler.toml` |
| Config shadcn | `artifacts/yt-history/components.json` |

## Stack

- **React 19** + **Vite 7** + **TypeScript 5.9**
- **Tailwind CSS 4** + **shadcn/ui** (new-york, neutral)
- **Zustand 5** (estado global)
- **Recharts 2** (gráficos)
- **Framer Motion 12** (animações)
- **fflate** (descompressão zip/tgz no browser)
- **react-dropzone** (upload drag-and-drop)
- **date-fns 3** (datas)
- pnpm workspaces, Node.js 24

## Decisões de arquitetura

- Todo processamento é client-side — privacidade total, sem backend
- SPA sem roteamento — seções em scroll vertical
- Aceita JSON e HTML do Google Takeout, além de arquivos ZIP e TGZ
- Demo mode gera ~2000 entradas sintéticas sem precisar de upload
- Suporte bilíngue PT-BR + EN

## Gotchas importantes

- Datas no formato HTML são em português brasileiro: `"8 de mai. de 2026, 17:41:27 BRT"`
- Entradas JSON precisam ter `activityControls` com "YouTube watch history" e `title` começando com "Watched "
- Build local pode falhar com `@rollup/rollup-win32-x64-msvc` — isso é ambiente Windows; Cloudflare (Linux) não tem esse problema
- `zustand` e `react-dropzone` devem estar instalados em `@workspace/yt-history`, não na raiz

## Deploy — Cloudflare Pages

Config em `artifacts/yt-history/wrangler.toml`:
- Project name: `tubetrace`
- Build output: `./dist/public`
- Build command: `pnpm --filter @workspace/yt-history run build`

## Sem testes

Não há testes automatizados no projeto. Verificar features rodando o dev server.
