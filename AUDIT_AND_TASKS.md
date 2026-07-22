# Kimberley Direct Publishing — Pre-Launch Audit & Fix Assignment

> **Purpose:** Single source of truth for the pre-launch audit and the implementation
> plan. Hand this file to Claude Code. Part 1 is the audit (reference — do not re-run).
> Part 2 is the task assignment to execute.
>
> **Stack:** Next.js 16.2.4 (App Router), React 19.2.4, TypeScript strict, Tailwind 4,
> Swiper 12, GSAP 3, lucide-react.
> **Ad model:** Advertiser driving paid traffic (Google Ads / Meta) to a lead-gen
> landing site. Relevant policy surface = Google Ads / Meta landing-page & destination
> policy (AdSense/ads.txt items flagged separately).
> **Conversion goal:** Lead capture via the quote/contact form.

---

# PART 1 — AUDIT (reference)

## Executive summary — Top 5 blockers before spending on ads

| ID | Blocker |
|----|---------|
| **C1** | The lead form silently discards every submission. `submitContactForm` only `console.log`s and returns success (`app/actions.ts:27-33`). Users fill the form, see "Message sent," and the lead vanishes. Newsletter form is the same (`NewsletterForm.tsx:12`). |
| **C2** | Zero analytics or conversion tracking. No GA4, GTM, Google Ads tag, or Meta Pixel anywhere. No way to measure cost-per-lead or ROAS. |
| **C3** | A fictitious phone number ships site-wide as clickable call/WhatsApp links. `+44 20 7946 0000` / `442079460000` (an Ofcom drama-reserved number) hardcoded in 5 files. Google Ads misrepresentation risk. |
| **C4** | Copyrighted content still on the page — real bestseller covers (Stephen King, Freida McFadden, etc.) and real client names in testimonials. IP/policy + legal risk. |
| **C5** | No consent management, and `/packages` sends every visitor's IP to `ipwho.is` / `ipapi.co` on load (`currency.ts:181-211`) before consent. GDPR/PECR violation for EU/UK traffic. |

**If you run ads today, C1 and C2 alone mean you cannot capture or measure a single lead.**

## Findings by dimension

### 1. Ad-readiness & monetization compliance
| ID | Sev | Location | Problem → fix |
|----|-----|----------|---------------|
| C1 | 🔴 Critical | `app/actions.ts:27-33` | Server action logs to console, returns `success:true`. Leads lost. → Wire real email backend, add "to" mailbox + error handling. |
| C2 | 🔴 Critical | (absent) | No analytics/conversion tag. → GA4 + Google Ads conversion event on form success; Meta Pixel if used. Gate behind consent. |
| C3 | 🔴 Critical | `Portfolio.tsx:128,135`; `contact/page.tsx:133`; `Footer.tsx:14`; `privacy-policy:133`; `terms:149` | Fictitious phone as `tel:`/`wa.me` links. → Route all through env or use real number; hide CTA when unset. |
| C4 | 🔴 Critical | hero/marquee/portfolio imagery; `lib/content.ts` testimonials | Real copyrighted covers + real author names. → Swap for royalty-free mockups or owned client work with permission. |
| C5 | 🟠 High | no banner; `currency.ts:181-211` | No consent UI; IP geolocation fires unconditionally. → Consent banner + Consent Mode; defer IP lookup + pixels until consent; disclose geo APIs in privacy policy. |
| A1 | 🟡 Med | (absent) `public/ads.txt` | No ads.txt. N/A as advertiser; required only if you become an AdSense publisher. |
| A2 | 🟡 Med | `Footer.tsx:12-14` | Social links point to bare `facebook.com` / `instagram.com`. → Real profile URLs or remove. |
| A3 | 🟢 Low | `NEXT_PUBLIC_COMPANY_NUMBER` unset | UK company reg line hidden (trust signal). → Set in prod env. |

### 2. SEO (technical + on-page)
| ID | Sev | Location | Problem → fix |
|----|-----|----------|---------------|
| S1 | 🟠 High | `layout.tsx:47`, `page.tsx:32` | `og:image` → `/og-image.png` does not exist. Broken share/ad previews. → Add real 1200×630 `public/og-image.png`. |
| S2 | 🟠 High | `sitemap.ts:27` | Sitemap lists `/services` but `app/services/page.tsx` doesn't exist → 404. → Create `/services` index (recommended) or remove entry. |
| S3 | 🟡 Med | `blogs/page.tsx` | `/blogs` is a "coming soon" stub but in sitemap + nav. Thin content. → Ship ≥3 real posts, or noindex and drop from sitemap. |
| S4 | 🟢 Low | no `not-found.tsx` / `error.tsx` | Default 404 works but unbranded. → Add branded `not-found.tsx` + `error.tsx`. |
| S5 | 🟢 Low | metadata | Per-route metadata, canonicals, Twitter cards, JSON-LD all present and done well. Keep as is. |

### 3. Performance & Core Web Vitals
| ID | Sev | Location | Problem → fix |
|----|-----|----------|---------------|
| P1 | 🟠 High | `public/images/kimberley-logo*.svg` (117–144 KB), Header/Footer | Auto-traced SVG logos ~144 KB, `priority`, unoptimized, loaded every page. Hurts LCP. → Re-export clean <10 KB asset. Easiest perf win. |
| P2 | 🟡 Med | `app/globals.css` — 8,016 lines | One 8k-line CSS file ships on first paint, render-blocking. → Remove dead rules; move section CSS into CSS Modules. |
| P3 | 🟡 Med | `public/images/` — 125 JPGs | `next/image` optimizes at serve time (fine), but large sources bloat deploy; confirm intrinsic dims to avoid CLS. → Confirm width/height on every `<Image>`; prune unused JPGs. |
| P4 | 🟢 Low | `layout.tsx:11-21` | Montserrat + Noto Sans each load 4 weights (8 files). → Drop unused weights; confirm `display: swap`. |
| P5 | 🟢 Low | `next.config.ts` | Minimal config. → Add `images.formats: ['image/avif','image/webp']` + long-cache headers; verify CDN caching. |

### 4. Design consistency & UX
- **Positive:** Centralized brand tokens (`tailwind.config.ts`), shared `Button`, `Container`, `ServiceCard`, `SectionHeading`, one shared `QuoteForm`.
- **D1 (Med):** Legacy `fw-400/500/600/700` utilities coexist with Tailwind `font-*`. → Standardize on Tailwind.
- **D2 (Med):** No loading/error state for currency fetch (flash USD→local). → Subtle skeleton on `status:'loading'`.
- **D3 (Low):** `/blogs` is an empty state presented as a page — dead-ends a nav item.

### 5. Accessibility (WCAG 2.1 AA)
- **Positive:** `QuoteForm` genuinely good — real `<label htmlFor>`, `aria-invalid`, `aria-describedby`, `role="alert"`, focus management. Single H1 per page. `aria-hidden` on decorative icons.
- **AX1 (Med):** No skip-to-content link. → Add visually-hidden "Skip to main content" in `layout.tsx`.
- **AX2 (Med, unverified):** Brand yellow `#FFB210` / `#C88800` on white/navy — borderline contrast. → Run axe/Lighthouse; verify ≥4.5:1 body text.
- **AX3 (Low):** Confirm decorative rotating stars respect `prefers-reduced-motion`.

### 6. Code quality & architecture
- **Positive:** TS strict; clean `lib/` separation; server-by-default discipline; SSR-safe `useCurrency` hook.
- **Q1 (Med):** Dead code — `_archive_old_scaffold`, unused `kimberley-logo-dark.svg`, unused `ContactForm.tsx`. → Delete.
- **Q2 (Low):** `robots.ts` disallows `/admin`, `/private` which don't exist. → Remove.
- **Q3 (Low):** `PROGRESS.md` "env-gated everywhere" claim is false (see C3). → Fix docs.

### 7. Security
- **Positive:** No secrets in client code (only `NEXT_PUBLIC_*`); no `.env` committed; all `dangerouslySetInnerHTML` are static JSON-LD you control; no raw `<img>`.
- **SEC1 (Med):** No security headers. → Add CSP, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, HSTS, `X-Frame-Options`.
- **SEC2 (Low):** Third-party FX/geo endpoints unpinned, no timeout. → Add `AbortController` timeouts (fails gracefully to USD already).
- **SEC3 (Low):** Run `npm audit --production` at build.

## Things that CANNOT be verified from source
- Live Core Web Vitals (LCP/CLS/INP) → Lighthouse mobile + PageSpeed on deployed URL.
- Actual contrast ratios → axe DevTools on rendered pages.
- Form backend delivery → end-to-end test lead after wiring.
- Production caching/CDN headers → `curl -I` deployed assets.
- Dependency CVEs → `npm audit --production` in CI.
- Rendered HTML for crawlers → Search Console URL Inspection + `curl` a route.

---

# PART 2 — FIX ASSIGNMENT (execute this)

You are implementing the fixes above. The audit is done and accurate — **do NOT re-audit**.
Execute in dependency order, verifying each fix before moving on.

## INPUTS (provided — use these; do not use placeholders where a value is given)

| Field | Value |
|-------|-------|
| Lead mailbox (form recipient) | `info@kimberleydirectpublishing.com` |
| Business phone (tel + WhatsApp) | `+447445296904`  → `tel:+447445296904`, `wa.me/447445296904` |
| Email provider + API key | ⛔ **TELL ME:** Resend or SendGrid? Where is the key (`.env.local`)? |
| Office address | ⛔ **TELL ME** (or scaffold behind `NEXT_PUBLIC_OFFICE_ADDRESS`) |
| UK company registration number | ⛔ **TELL ME** (or leave `NEXT_PUBLIC_COMPANY_NUMBER` unset) |
| GA4 Measurement ID | ⛔ **TELL ME** (`G-XXXX`) |
| GTM ID (if used) | ⛔ optional (`GTM-XXXX`) |
| Google Ads Conversion ID + Label | ⛔ **TELL ME** (`AW-XXXX` / label) |
| Meta Pixel ID | ⛔ **TELL ME** or "not using Meta" |
| Real social profile URLs (FB/IG) | ⛔ **TELL ME** or remove links |
| Licensed/owned images + real testimonials | ⛔ **TELL ME**, or scaffold placeholders and list what I must supply |

**For any ⛔ field left unresolved:** implement behind a `NEXT_PUBLIC_*` env var or a
clearly-labelled placeholder, make the UI hide gracefully when unset, and add it to the
**BLOCKED ON ME** list at the end. **Never ship fake data as a fallback** (no fake phone,
no fake testimonials).

## Working method
1. Create branch `fix/pre-launch-audit`. One commit per task ID (e.g. `C1: wire form to <provider>`).
2. A task is **done** only when `tsc --noEmit` passes, `next build` succeeds, and lint is clean. Run these after each phase.
3. No new deps without noting why. Prefer `@next/third-parties` for GA/GTM.
4. After each task, report: what changed, files touched, how you verified.
5. Update `PROGRESS.md` / `CLAUDE.md` as you go (fixes doc drift Q3; remove the false "env-gated everywhere" claim once C3 is real).
6. Finish with: Done / Blocked on me / Deferred + the Phase 4 manual test checklist.

## PHASE 1 — LAUNCH BLOCKERS (all must pass before any ad spend)
Do these in this exact order.

**C1 — Wire the lead form** `app/actions.ts:27-33`
Replace the `console.log` stub in `submitContactForm` with a real send to
`info@kimberleydirectpublishing.com` (via the provider I name). Return `success:false`
on failure with a user-visible error. Same for `NewsletterForm.tsx:12` (or remove if I
say not using it). ✅ **Acceptance:** a test lead arrives in the mailbox; a forced failure
shows an error, not a false "Message sent."

**C5 — Consent management (before any pixel loads)**
Add a consent banner + Google Consent Mode v2 defaulting to *denied*. Defer the IP
geolocation in `currency.ts:181-211` until consent (USD fallback pre-consent already
exists). Disclose `ipwho.is`, `ipapi.co`, `open.er-api.com`, `frankfurter.app` in the
privacy policy. ✅ **Acceptance:** no third-party call fires pre-consent; choice persists;
privacy policy lists the APIs.

**C2 — Analytics + conversion tracking (gated by C5, fires on C1 success)**
Add GA4 (+ GTM/Meta Pixel if IDs given) via `@next/third-parties`, loaded only after
consent. Fire a Google Ads conversion event in the `state?.success` branch of `QuoteForm`
(+ Meta `Lead` if applicable). ✅ **Acceptance:** GA4 DebugView shows pageviews post-consent
and a conversion on a test submit; nothing loads pre-consent.

**C3 — Kill the fake phone** `Portfolio.tsx:128,135`; `contact/page.tsx:133`; `Footer.tsx:14`; `privacy-policy:133`; `terms:149`
Route every `tel:`/`wa.me` link through `NEXT_PUBLIC_CONTACT_PHONE` = `+447445296904`
(as Header already does). ✅ **Acceptance:** grep for `7946 0000` and `442079460000` returns nothing.

**C4 — Remove copyrighted / real-person content** hero/marquee/portfolio; `lib/content.ts`
Swap bestseller covers + real author names for licensed/owned assets or clearly-labelled
placeholders. List every asset I must supply. ✅ **Acceptance:** no third-party cover or real
client name remains unless I confirmed rights.

**S1 — Add missing OG image** `layout.tsx:47`, `page.tsx:32`
Add a real 1200×630 `public/og-image.png`. ✅ **Acceptance:** file exists; meta resolves.

**S2 — Fix the sitemap 404** `sitemap.ts:27`
Build a real `app/services/page.tsx` index (preferred — good ad landing page) or remove
`/services` from the sitemap. ✅ **Acceptance:** every sitemap URL returns 200.

**ENV** — Set/scaffold: `NEXT_PUBLIC_CONTACT_PHONE=+447445296904`, lead mailbox,
`NEXT_PUBLIC_OFFICE_ADDRESS`, `NEXT_PUBLIC_COMPANY_NUMBER`, GA4/Ads/Pixel IDs. Document
each in `.env.example`.

## PHASE 2 — FIX SOON (first week of traffic)
- **P1** Replace 144 KB logo SVGs with a <10 KB optimized asset (Header/Footer).
- **S3** Publish ≥3 real blog posts OR noindex `/blogs` and drop from sitemap + nav.
- **A2** Real social profile URLs or remove (`Footer.tsx:12-14`).
- **SEC1** Add security headers (CSP, nosniff, Referrer-Policy, HSTS, X-Frame-Options) via `next.config` `headers()`.
- **AX1** Add visually-hidden "Skip to main content" link in `layout.tsx`.
- **AX2** Verify `#FFB210` / `#C88800` contrast; fix any <4.5:1 body text.
- **D2** Add a loading skeleton for the currency fetch in `PackagesPricing`.
- **C1b** Wire newsletter form or remove it.

## PHASE 3 — NICE TO HAVE (after Phases 1–2 verified)
- **P2** Split 8,016-line `globals.css` into route-level CSS Modules; remove dead rules.
- **S4** Branded `app/not-found.tsx` + `app/error.tsx`.
- **Q1** Delete `_archive_old_scaffold`, unused `kimberley-logo-dark.svg`, unused `ContactForm.tsx`.
- **Q2** Remove phantom `/admin` `/private` disallows from `robots.ts`.
- **P3/P4** Prune unused JPGs + duplicate jpg/webp pairs; drop unused font weights.
- **D1** Standardize on Tailwind `font-*`; retire legacy `fw-*` utilities.
- **SEC2** Add `AbortController` timeouts to FX/geo calls.

## PHASE 4 — VERIFICATION (produce as a checklist; don't skip)
For each, give the exact command/tool and pass criterion:
- Lighthouse mobile (LCP/CLS/INP) on deployed URL.
- axe DevTools contrast pass (check yellow text specifically).
- End-to-end test lead delivery to `info@kimberleydirectpublishing.com`.
- `curl -I` deployed assets → confirm `cache-control` + image optimization.
- `npm audit --production`.
- Search Console URL Inspection → confirm content is in initial HTML.

---

**Start with Phase 1, C1. First, confirm the two ⛔ items that block C1 and C2 —
the email provider (Resend/SendGrid + key location) and the GA4/Ads IDs. If I haven't
supplied them, scaffold behind env placeholders and keep moving; do not stall.**
