# tap-switchboard

Lightweight, standalone tap-in links page for `tap.robpins.me`. This repo is independent from any other site and ships a single static page built with Astro + Tailwind.

## Local development

```bash
npm install
npm run dev
```

Astro will print the local URL in the terminal.

## Build

```bash
npm run build
```

The static output is in `dist/`.

## Deploy

Deploy the `dist/` folder to any static host. For Netlify, Vercel, or Cloudflare Pages, use:

- Build command: `npm run build`
- Output directory: `dist`

No environment variables or backend services are required.
