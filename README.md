# connerposlajko.com

Personal site — field notes on software, markets, and long-distance running.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- MDX (`next-mdx-remote`) for blog posts, stored as files in `content/posts/`
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Writing a new post

Add a file to `content/posts/your-slug.mdx`:

```mdx
---
title: "Your Title"
date: "2026-08-20"
excerpt: "One or two sentences for the index page and metadata."
tag: "Build" # one of: Build, Markets, Miles, Faith, Notes
---

Your content here, standard Markdown/MDX.
```

It'll automatically appear on `/blog` and `/`, sorted by date.

## Project structure

```
src/app/            → routes (home, blog, about, projects, newsletter)
src/components/     → shared components
src/lib/posts.ts    → MDX post loading
content/posts/      → blog post source files
```

## Newsletter

`/newsletter` has a placeholder form. Swap in a provider (Beehiiv,
ConvertKit, etc.) — see the `TODO` comment in
`src/app/newsletter/page.tsx`.

## Deploying

1. Push to GitHub.
2. Import the repo in Vercel.
3. Add `connerposlajko.com` as a domain in the Vercel project settings and
   point DNS per Vercel's instructions.
