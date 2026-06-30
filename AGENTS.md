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
- **Build**: Vite via `@lovable.dev/vite-tanstack-config` — do NOT add plugins manually
- **Runtime**: Bun (has supply-chain guard: `bunfig.toml`)

## Commands

```bash
bun run dev        # Start dev server
bun run build      # Production build
bun run lint       # ESLint
bun run format     # Prettier (write)
```

No test suite is configured.

## Key conventions

- **Path alias**: `@/*` maps to `src/*`
- **Route tree**: `src/routeTree.gen.ts` is auto-generated — never edit by hand
- **Root layout**: `src/routes/__root.tsx` — preserve `<Outlet />` for child routes
- **Server code**: Do NOT import `server-only`. Name files `*.server.ts` or use `@tanstack/react-start/server-only` (see ESLint rule)
- **Vite config**: `@lovable.dev/vite-tanstack-config` bundles tanstackStart, React, Tailwind, tsConfigPaths, Nitro, and more — duplicating any of these breaks the build
- **Formatting**: Prettier with `printWidth: 100`, double quotes, trailing commas, semicolons

## Adding components

```bash
bunx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. Aliases configured in `components.json`.

## Gotchas

- `bun.lock` is the lockfile — do not use `package-lock.json` (present but stale)
- `@typescript-eslint/no-unused-vars` is OFF — unused vars are allowed
- No `src/pages/`, no `app/layout.tsx` — that's Next.js convention, not TanStack Start
- Dynamic routes use bare `$` (e.g., `$id.tsx`), not `:id` or `{id}`
