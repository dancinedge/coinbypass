# coinbypass

coinbypass (코인바이패스) — a purely static, multilingual (EN/ko/ja/zh) Next.js 16 SEO
landing site for a USDT top-up / crypto-payment / payment-bypass guide. Static export
(`output: "export"`) served by Cloudflare Pages; no server, DB, auth, or money handling.

## Structure

```
coinbypass/
├─ src/                          — application source
│  ├─ lib/sites.ts               — single-tenant SiteConfig SSOT (SEO metadata · Telegram CTA) [core]
│  ├─ components/coinbypass/     — Layout shell + LanguageSwitcher (4-language toggle)
│  ├─ components/common/         — TelegramInquiry CTA button
│  ├─ components/seo/Head.tsx    — per-page <head> meta (canonical · OG · JSON-LD)
│  ├─ pages/                     — Next.js Pages Router (EN root + /ko, /ja, /zh mirrors)
│  └─ styles/globals.css         — global styles (Tailwind gold theme)
├─ public/                       — static assets (favicon · OG image · robots.txt · sitemap.xml)
├─ scripts/                      — build/ops scripts (scratch/ = transient output, not committed)
├─ docs/                         — promo banner image
├─ next.config.js                — static export config (output: export · trailingSlash)
├─ wrangler.toml                 — Cloudflare Pages config (output dir = out/)
├─ tailwind.config.ts            — Tailwind theme
├─ TELEGRAM.md                   — Telegram marketing copy (quickref → ARCHITECTURE.md)
├─ ARCHITECTURE.md               — final architecture SSOT (update-in-place)
├─ CHANGELOG.md                  — history (append-only)
└─ harness.config.json           — harness profile · lockdown · verify · docs discipline
```

## Governance

- **Docs discipline:** architecture goes in `ARCHITECTURE.md` (update in place, single SSOT);
  history goes in `CHANGELOG.md` (append-only); transient output goes in `scripts/scratch/`.
  Do **not** scatter `*-report.md` / `*-summary.md` / dated notes. A separate root doc must
  carry a quickref pointer back to `ARCHITECTURE.md` (or be listed in `docs.allow`).
- **Lockdown core:** `src/lib/sites.ts` — when edited, update `CHANGELOG.md` in the same change.
- **Protected branches:** `main` / `master` — no direct push (hardcore profile); use a PR.
- **Verify before push:** `npx tsc --noEmit` + `npm test` (`harness verify`); `npm run build`
  must emit a clean static `out/`.

## Harness

This repo is governed by the **dancinlab/harness** engine, vendored as the `.harness-engine`
git submodule (branch `harness-hardcore`). Hooks are wired in `.claude/settings.json`
(guarded — they no-op silently if the submodule is uninitialized). Config: `harness.config.json`.

Initialize the engine after a fresh clone:

```bash
git submodule update --init --recursive
```

### Quick reference

```bash
bash .harness-engine/bin/harness verify       # run typecheck + tests in parallel
bash .harness-engine/bin/harness lint         # staged-L0 + freshness + changelog checks
bash .harness-engine/bin/harness docs check   # single-doc discipline (SSOT + quickref)
bash .harness-engine/bin/harness audit        # 6-axis self-scorecard
bash .harness-engine/bin/harness --help       # full command list
```
