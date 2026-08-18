# BUILD LOG

**Date:** 2026-08-18

---

## Focus Today
- [X] Connect to domain (connerposlajko.com)
- [X] Deploy to Vercel

---

## Milestones Completed (high-level only; keep section short and sweet)
- Initial scaffold: Next.js 16 + TypeScript + Tailwind, MDX blog posts in `content/posts/`, ledger design system
- Site deployed to Vercel production; custom domain connerposlajko.com connected

---

## What We Accomplished Today
- Logged into Vercel CLI, linked the repo (`cpos64s-projects/connerposlajko`), and connected the GitHub repo so future pushes to `master` auto-deploy
- Deployed to production — first deploy went live at https://connerposlajko.vercel.app
- Added `connerposlajko.com` and `www.connerposlajko.com` as domains on the Vercel project
- Updated DNS at Namecheap: removed the default parking records (CNAME `www`→parkingpage, URL redirect `@`) and added `A` records for both `@` and `www` pointing to `76.76.21.21`
- Vercel's domain check no longer shows a config warning, but DNS propagation (up to 48h) hadn't fully confirmed by end of session
- Committed and pushed the morning build-log roll-forward (`6f3ccd5`)
- Left off here: everything needed for the domain is in place — next session should just confirm `connerposlajko.com` resolves and serves over HTTPS

---

## Tomorrow
- [ ] Confirm connerposlajko.com resolves and SSL certificate is issued (check `vercel domains inspect connerposlajko.com`)

---

## Backlog
- Newsletter provider integration (Beehiiv/ConvertKit) — see `TODO` in `src/app/newsletter/page.tsx`

## Note
- Review BUILD_LOG_TEMPLATE.md before updating
