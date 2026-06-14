# coinbypass — Architecture (SSOT · update-in-place)

> Single source of truth for the final architecture. **Overwrite (update) this file in place**
> when the design changes — it is not append-only. History and decisions live in `CHANGELOG.md`.

## Overview

coinbypass (코인바이패스) is a **purely static, multilingual SEO landing site** for a
USDT top-up / crypto-payment / payment-bypass guide. It is built with **Next.js 16**
(Pages Router) in `output: "export"` mode, producing a fully static `out/` directory that
**Cloudflare Pages** serves from the edge. There is **no origin server, no database, no
auth, and no money handling** — every page is pre-rendered HTML/CSS/JS. Content is provided
in four languages (English root, plus `/ko`, `/ja`, `/zh`) and styled with a gold Tailwind
theme. The Telegram handle (`@enforce_ev`) is the only call-to-action.

## Component map

| Area | Path | Role |
| --- | --- | --- |
| Site config (SSOT) | `src/lib/sites.ts` | Single-tenant `SITES` map — name, domain, title/description/keywords, Telegram handle, theme color, page list. Source of truth for SEO metadata. |
| Layout shell | `src/components/coinbypass/Layout.tsx` | Header/nav/footer wrapper; per-locale nav + tagline strings; wires in the Telegram CTA and language switcher. |
| Language switcher | `src/components/coinbypass/LanguageSwitcher.tsx` | 4-language toggle (EN root / `/ko` / `/ja` / `/zh`); rewrites the current path's locale prefix. |
| Telegram CTA | `src/components/common/TelegramInquiry.tsx` | Shared inquiry button pointing at the configured Telegram handle. |
| SEO head | `src/components/seo/Head.tsx` | `<Head>` with title/description/keywords/canonical/OG/JSON-LD; per-site metadata. |
| App / document | `src/pages/_app.tsx`, `src/pages/_document.tsx` | Next.js app wrapper (global CSS) and custom HTML document. |
| Pages (EN root) | `src/pages/{index,usdt-charge-guide,coin-payment,bypass-payment,faq}.tsx` | English landing + 4 guide/FAQ pages. |
| Pages (localized) | `src/pages/{ko,ja,zh}/*.tsx` | Korean / Japanese / Chinese mirrors of the same pages. |
| Styles | `src/styles/globals.css`, `tailwind.config.ts`, `postcss.config.js` | Tailwind gold theme + global styles. |
| Static assets | `public/coinbypass/*`, `public/robots.txt`, `public/sitemap.xml` | Favicon, OG image, crawler directives, sitemap. |
| Build / deploy config | `next.config.js`, `wrangler.toml`, `tsconfig.json` | Static export config + Cloudflare Pages output (`out/`). |
| Promo copy | `TELEGRAM.md`, `docs/promo-16x9.png` | Telegram marketing snippets + 16:9 banner (no brand/domain baked in). |

## Data flow

```
src/lib/sites.ts (SiteConfig SSOT)
        │  title · description · keywords · telegram · themeColor
        ▼
src/components/seo/Head.tsx ──► <head> meta (canonical · OG · JSON-LD)
        │
src/pages/**/*.tsx  ──►  Layout.tsx (nav · footer · CTA · lang switch)
        │                         │
        │                         └─► TelegramInquiry → t.me/enforce_ev
        ▼
next build (output: "export", trailingSlash) ──► out/ (static HTML/CSS/JS)
        ▼
Cloudflare Pages (edge) ──► visitor browser
```

There is no runtime request path: input is the source + `sites.ts` config, processing is
the static `next build`, and output is the `out/` directory served by Cloudflare.

## Governance & verify

- **Docs discipline (harness):** `ARCHITECTURE.md` is the architecture SSOT (update in place);
  `CHANGELOG.md` is the append-only history; scratch output goes to `scripts/scratch/`.
  Separate root docs (e.g. `TELEGRAM.md`) carry a quickref pointer back to this file.
- **Lockdown core:** `src/lib/sites.ts` is the single-tenant config SSOT — edits must update
  `CHANGELOG.md` in the same change (see `harness.config.json#lockdown`).
- **Protected branches:** `main` / `master` (no direct push under the hardcore profile).
- **Verify commands:** `npx tsc --noEmit` (typecheck) + `npm test` — run via
  `harness verify`. `npm run build` produces the static `out/` artifact.
- **Engine:** the harness lives in the `.harness-engine` git submodule
  (`dancinlab/harness`, branch `harness-hardcore`); run `bash .harness-engine/bin/harness <cmd>`.
