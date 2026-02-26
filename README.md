# Notifin Web

Landing + documentation website for [`@khencahyo13/notifin-react`](https://www.npmjs.com/package/@khencahyo13/notifin-react).

## Stack

- Next.js (App Router)
- Nextra + `nextra-theme-docs` (docs pages)
- `next-intl` (locale routing: `id`, `en`)
- `next-themes` (light/dark theme sync)
- Tailwind CSS v4 + shadcn/ui components

## Features

- Home showcase with live demo buttons for Notifin.
- Locale-aware routes:
  - Home: `/id`, `/en`
  - Docs: `/id/docs`, `/en/docs`
- SEO setup:
  - `robots.txt` via `app/robots.ts`
  - `sitemap.xml` via `app/sitemap.ts`
  - per-locale metadata/canonical/hreflang
- Custom brand mark for light/dark theme.

## Run Locally

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).  
Root path redirects to `/id`.

## Environment

Set site URL for canonical/sitemap/OG metadata:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If not set, app falls back to `http://localhost:3000`.

## Project Structure

```txt
app/
  [locale]/
    page.tsx                # Home route per locale
    docs/
      layout.tsx
      [[...mdxPath]]/page.tsx
  layout.tsx
  page.tsx                  # Redirect to /id
  robots.ts
  sitemap.ts

content/
  id/docs/*                 # Indonesian docs content
  en/docs/*                 # English docs content

features/home/
  index.tsx                 # Container (logic)
  view.tsx                  # Presentational UI
```

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
```
