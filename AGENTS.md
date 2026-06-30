<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Tech stack

- **Framework**: TanStack Start (React 19, SSR)
- **UI**: shadcn/ui (new-york style) + Tailwind CSS v4
- **Router**: File-based via `src/routes/` — see `src/routes/README.md` for conventions
- **Build**: Vite + Nitro (Vercel preset)
- **Deploy**: Vercel (output in `.vercel/output/`)

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build (outputs to .vercel/output/)
npm run lint       # ESLint
npm run format     # Prettier (write)
```

No test suite is configured.

## Key conventions

- **Path alias**: `@/*` maps to `src/*`
- **Route tree**: `src/routeTree.gen.ts` is auto-generated — never edit by hand
- **Root layout**: `src/routes/__root.tsx` — preserve `<Outlet />` for child routes
- **Server code**: Do NOT import `server-only`. Name files `*.server.ts` or use `@tanstack/react-start/server-only` (see ESLint rule)
- **Formatting**: Prettier with `printWidth: 100`, double quotes, trailing commas, semicolons

## Adding components

```bash
npx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. Aliases configured in `components.json`.

## Vercel deployment

1. Push to GitHub
2. Import project in Vercel dashboard
3. Vercel auto-detects the build — no config needed (`.vercel/output/` is standard)
4. Deployed with Fluid Compute (auto-scales based on traffic)

## Gotchas

- `package-lock.json` is the lockfile (not `bun.lock`)
- `@typescript-eslint/no-unused-vars` is OFF — unused vars are allowed
- No `src/pages/`, no `app/layout.tsx` — that's Next.js convention, not TanStack Start
- Dynamic routes use bare `$` (e.g., `$id.tsx`), not `:id` or `{id}`
