# Progress Log

Update this file at the **end of every session**. It's how the next Claude session knows where to resume.

---

## Last completed task ID

**rebrand-kimberley** — Renamed the brand from **Kingsley Direct Publishing** to
**Kimberley Direct Publishing** across all source (name, domain `kimberleydirectpublishing.com`,
email `info@kimberleydirectpublishing.com`, wordmarks, metadata, JSON-LD, page copy). The `kdp-*`
CSS class names were kept (same K-D-P initials); `KDP` in the hero refers to Amazon Kindle Direct
Publishing and was left. Typecheck clean.

Prior work — **kingsley-redesign-differentiation + bugfix/ux-pass** — Redesigned the site to stop
resembling the old Patrick White layout, fixed reported bugs, and did a mobile + UX polish pass.
Deployed on Vercel from GitHub repo `iTsAsifkhan/kingsleydirectpublishing` (remote `kingsley`).
Clean production build. Latest commit `7187fc6`.

Key changes since the teal rebrand:
- **Header** — mega menu (icons + descriptions + featured card) in State A; glassmorphism floating
  pill on scroll (State B); floating tinted-glass navbar bg; accessible mobile drawer; dismissible
  promo bar. Data in `lib/nav.ts`.
- **Hero** — new glassy eyebrow chip with pulse dot; added bottom padding.
- **Marquee** — replaced the reference two-row scroll with a GSAP 3D-perspective single-row
  showcase (`components/sections/ShowcaseMarquee.tsx`; old `BookCoverMarquee` removed).
- **Why Choose Us** — reframed image + offset panel + floating "5,000+ authors" badge.
- **Let's Connect CTA** — two-column premium section wrapping the shared `QuoteForm`.
- **Shared form** — one `QuoteForm` (home CTA + /contact) with inline validation, service select,
  loading/success states; old `ContactPageForm` removed.
- **Footer** — dark navy footer (fixed invisible white text), newsletter signup, "Services"+"Genres"
  columns; page-agnostic sticky reveal via `.site-content` layer in the layout; reveal disabled on
  mobile and under reduced-motion.
- **Buttons** — white text on darkened teal `#0b7d77` for WCAG AA.
- **/blogs** page added (was 404); dead `/stories` link removed; sitemap updated.
- **Fixes** — cropped stats strip (z-index); balanced about pillars 3-col; centered "Explore More"
  grids for any count; service-page CTA restyled + phone env-gated; removed all decorative stars.
- **Systemic** — base heading colour moved into `@layer base` so `text-white` wins over it (fixes
  white headings vanishing on dark sections site-wide).
- **Mobile menu** — `MobileNav.tsx` rebuilt as a right-sliding drawer (portaled to `document.body`
  to escape the header's backdrop-filter containing block); backdrop, accordion submenus, pinned CTA;
  header bar `space-between`; compact promo bar; close button padding fix.
- **UX** — earlier + snappier scroll reveal (no blank space on fast scroll); tighter mobile heading
  line-height.

## Currently in progress

Nothing open. Kimberley rebrand + real logo committed (`ab830f7`) and pushed to `kingsley/master`;
Vercel should redeploy automatically. Next natural work: point the Vercel domain to
`kimberleydirectpublishing.com`, set the env-gated contact details (phone/office/company no.),
replace flagged IP content (see below), and add real blog posts to `/blogs`.

## Open placeholders (need real Kimberley data before launch)

- **UK phone** — fictitious `+44 20 7946 0000` (Ofcom drama range) is now **env-gated**: it only
  renders when `NEXT_PUBLIC_CONTACT_PHONE` is set (header, contact page, service CTAs, schema).
  Set that env var in Vercel with a real number to surface it.
- **Registered office address** — env-gated behind `NEXT_PUBLIC_OFFICE_ADDRESS` (contact page + schema).
- **Company number** — env-gated behind `NEXT_PUBLIC_COMPANY_NUMBER` (footer). No "TBD" ships.
- **Email** — `info@kimberleydirectpublishing.com` (set up the mailbox, or change).
- **Social links** — Footer/schema point to bare facebook.com/instagram.com/wa.me placeholders.
- **Logo** — ✅ Real horizontal logo wired in. Header uses `public/images/kimberley-logo.svg`
  (transparent bg, navy wordmark); footer uses `public/images/kimberley-logo-white.svg`
  (transparent bg, white wordmark). A dark navy-badge variant (`kimberley-logo-dark.svg`) is also
  in the repo but unused. SVGs were auto-traced from the supplied PNGs via `imagetracerjs` with a
  forced brand palette. NOTE: the dark badge inherits a "Kim berley" letter-gap from the source PNG.
- **IP content (flagged, still present):** hero + marquee use real bestseller covers (Stephen King,
  Freida McFadden, etc.) and testimonials use real client names — must be replaced with Kimberley's
  own / royalty-free placeholders before running ads (violates CLAUDE.md rule #14).
- **Newsletter form** — `NewsletterForm` has no backend yet (TODO: wire Resend/Mailchimp).
- **Contact form** — `submitContactForm` only logs; wire Resend/SendGrid before launch.
- **Package prices** — the amounts in `lib/packages.ts` are placeholders to be updated
  later (base currency USD). Edit that one file; every card + JSON-LD offer + the live
  currency conversion update automatically.

## Environment / deploy notes

- Repo: `iTsAsifkhan/kingsleydirectpublishing`, branch `master`, remote `kingsley`. Live on Vercel.
- Local `npm run dev` HMR is unreliable for CSS appended to `globals.css` — verify against
  `npm run build` / the Vercel deploy, not dev.
- On Windows/OneDrive, `next build` can hit `EPERM unlink .next` — `rm -rf .next` and rebuild.

## Session log

| Date | Session # | Tasks completed | Notes / blockers |
|---|---|---|---|
| 2026-05-06 | 1 | 0.1-0.12 | Project scaffolding: Next.js 15, Tailwind 4, fonts, metadata, sitemap, robots, content/schema helpers |
| 2026-05-06 | 2 | 1.1-1.6 | UI primitives: Button (Server Component with Link/button logic), ServiceCard (dynamic icon loading), SectionHeading (pill tag + h2 + subtitle), StatCounter (navy stat card), Container (max-width wrapper) |
| 2026-05-06 | 3 | 2.1.1-2.1.6 | Hero section, code-based hero placeholder, two-row book cover marquee, discussion modal CTA, homepage metadata/schema pass |
| 2026-05-06 | 4 | 2.1 adjustment | Replaced generated hero asset with a code/CSS placeholder per user direction |
| 2026-05-06 | 5 | 2.2.1-2.2.5 | Why Choose Us section, code/CSS image and platform placeholders, rotating star, stats strip |
| 2026-05-06 | 6 | 2.3.1-2.3.5 | Services grid section, shared ServiceCard reference class styling, code/CSS shade and star placeholders, quote CTA |
| 2026-05-06 | 7 | 2.3 visual fix | Corrected Services section font-weight classes, centered the five-card layout, and expanded card copy to match the reference density |
| 2026-05-06 | 8 | 2.4.1-2.4.6 | Purple CTA banner with navy rounded section, code/CSS book illustration placeholders, quote CTA, and phone link |
| 2026-05-06 | 9 | 2.5.1-2.5.4 | Process timeline with six cards, CSS placeholder visuals, desktop grid, and mobile Swiper pagination |
| 2026-05-07 | 10 | 2.6.1-2.6.5 | Portfolio section: dark navy bg, 7 genre tabs (Fantasy/Fiction/Romance/Horror/Cook Books/Adventure/Mystery), 4×2 grid of CSS book cover placeholders per tab, fade-in animation on tab switch, Get A Quote + phone CTA, decorative shades and rotating stars |
| 2026-05-07 | 11 | 2.5 visual fix | Corrected Process section to use a responsive Swiper carousel across desktop/tablet/mobile, matching the reference `process-slider` behavior instead of a desktop grid |
| 2026-05-07 | 12 | visual placeholder swap | Replaced homepage CSS-only visual placeholders with temporary real images from `public/images` so assets can be swapped later |
| 2026-05-07 | 13 | asset mapping update | Repointed hero, about, CTA, process, marquee, and portfolio image sources to the newly added book/mockup assets |
| 2026-05-07 | 14 | testimonials image fix | Swapped testimonial media so the main frame shows the book mockup and the small floating frame shows the author image |
| 2026-05-07 | 15 | testimonial logo strip | Replaced the text-only post-testimonials partner strip with logo images from `public/images` |
| 2026-05-07 | 16 | logo sizing fix | Changed small logo rows from `fill` images to intrinsic image sizing to prevent stretching and overlap |
| 2026-05-07 | 17 | logo visual cleanup | Removed pill backgrounds, borders, and shadows from the small logo rows |
| 2026-05-07 | 18 | testimonial layout restyle | Reworked testimonials into a screenshot-style centered carousel with wide cream cards, left book mockup, author profile, quote, metadata, and More About Author CTA |
| 2026-05-07 | 19 | FAQ reference fix | Reworked FAQ section to match reference layout: two columns, white rounded rows, blue CTA, warm background shade, and reference question set |
| 2026-05-07 | 20 | FAQ accordion behavior | Replaced native details accordion with a controlled client accordion so only one FAQ opens at a time, with smoother answer transitions |
| 2026-05-07 | 14 | 2.7.1-2.7.4 | Testimonials Swiper carousel with real client data (Esabelle Flynn, Cornelis Pepsee, Charlie, Benjamin Sam), portrait + book cover layout, Amazon + Trustpilot buttons, partners strip |
| 2026-05-07 | 19 | 2.8.1-2.8.5 | FAQ accordion section: native `<details><summary>`, two-column grid, CSS plus→minus icon via `[open]` selector, FAQPage JSON-LD inline, cream gradient background, responsive breakpoints |
| 2026-05-07 | 20 | 2.9.1-2.9.6 | Contact form section: yellow footer-cta card, 4 fields (name/phone/email/message), circular navy submit button, React 19 useActionState + server action in app/actions.ts, negative-margin overlap positioning |
| 2026-05-07 | 21 | 3.1-3.5 | Header: absolute-positioned top bar (navy) with social icons + contact info, desktop nav with CSS hover dropdowns, logo text placeholder; Mobile nav drawer (client); Footer: 4-col layout, quick links, services cols, payment image, navy copyright bar; custom SVG social icons in components/icons/SocialIcons.tsx |
| 2026-05-08 | 22 | 4.1-4.8 | Service detail pages: dynamic route app/services/[slug]/page.tsx, generateStaticParams + generateMetadata per slug, Service JSON-LD, 4-section layout (hero/about+features/process/related+CTA), longDescription added to all 5 services in content.ts, sitemap already covered |
| 2026-05-08 | 23 | 4.9 | Sub-service pages: 26 pages via app/services/[slug]/[subslug]/page.tsx, SubService interface + subServices arrays in content.ts, breadcrumb nav, sibling grid, related parent services, Service JSON-LD; Header NAV updated to real sub-service URLs; sitemap extended with all 26 sub-service URLs at priority 0.6 |
| 2026-05-08 | 24 | 5.1-5.5 | Phase 5: FadeIn client wrapper (whileInView) applied to WhyChooseUs/Services/PurpleCTA/StatsStrip/FAQ; ChatWidget fixed FAB (WhatsApp/call/email panel); NewsletterPopup (6s delay, sessionStorage dismiss, success state); custom scrollbar already done (5.2); DiscussCta modal already done (5.4) |
| 2026-05-08 | 25 | about-us | About Us page: inner-page hero (cream bg, platform logos, badge), StatsStrip reused, mission section (2-col, 4 stat cards), 6 pillars navy section, Testimonials/FAQ/PurpleCTA reused, Organization JSON-LD, full metadata; /about-us + /contact added to sitemap |
| 2026-05-11 | 26 | brand-rebrand | Full rebrand: replaced all "Book Publishing Partner" / "bookpublishingpartner.com" references with "Patrick White Publishing" / "patrickwhitepublishing.com"; updated phone to +61 485 976 735, email to info@patrickwhitepublishing.com, ABN and office details in footer/contact/schema, social links updated to real Facebook/Instagram/WhatsApp; logo marks changed from BPP to PWP; WhatsApp icon added to SocialIcons.tsx |
| 2026-05-14 | 27 | 6.0-logo-image | Replaced logo text placeholders with actual Patrick White Publishing logo image (Patrick-White-Publishing-logo.webp, 220×85px in header, 240×93px in footer) in Header and Footer components using next/image |
| 2026-05-15 | 28 | fix-prebuild | Fixed latent 504/build failure: `sharp` was missing from package.json so Hostinger's `npm install` never installed it, crashing the prebuild step. Made the sharp import graceful (silent exit-0 if not available — all images already .webp in repo). Added `sharp` to devDependencies for local use. |
| 2026-07-14 | 29 | rebrand-kingsley + recolor-teal | Rebranded Patrick White Publishing (AU, gold) → Kingsley Direct Publishing (UK, teal); domain/name/email/socials/UK details across pages + schema; palette gold→teal in globals.css; removed PWP image assets; text wordmark. Pushed to new repo `iTsAsifkhan/kingsleydirectpublishing` (remote `kingsley`), deployed to Vercel. Commit `1e80af7`. |
| 2026-07-14 | 30 | ui-redesign (header/CTA/form/footer) | Mega-menu header (State A) + glassmorphism scroll pill (State B) in `lib/nav.ts`+`Header.tsx`+`MobileNav.tsx`; button contrast AA; shared `QuoteForm` (home + /contact, removed `ContactPageForm`); premium "Let's Connect" CTA; footer rebuild (Services+Genres, newsletter, env-gated company no.) + sticky reveal (`FooterReveal.tsx`). Commit `018edf4`. |
| 2026-07-14 | 31 | ui-feedback pass | Page-agnostic footer reveal via `.site-content` layer; floating tinted-glass navbar; nav no-wrap; pinned-pill CTA fit; glassy hero eyebrow with pulse dot; distinct Why-Choose-Us redesign; PurpleCTA restyle; removed decorative stars. Commits `c21d20b`. |
| 2026-07-14 | 32 | bugfix pass (PDF) | GSAP 3D showcase marquee (`ShowcaseMarquee.tsx`, removed `BookCoverMarquee`); fixed cropped stats strip (z-index); dark navy footer (visible text) + mobile reveal disabled; balanced about pillars 3-col; service CTA restyle + phone env-gate; `/blogs` page (was 404) + removed `/stories` + sitemap; content/a11y/perf (relabel stats, initials testimonials, alt text, heading levels, image quality). Commit `334688a`. |
| 2026-07-14 | 33 | bugfix pass 2 | Centered "Explore More"/Related grids (flex) for any item count; moved base heading colour into `@layer base` so `text-white` wins (fixes invisible white headings on dark sections site-wide); hero bottom padding. Commit `fd2beb7`. |
| 2026-07-14 | 34 | mobile-menu rebuild | Rebuilt `MobileNav.tsx` as a right-sliding drawer portaled to `document.body` (escapes the header's backdrop-filter containing block that had trapped the fixed overlay): backdrop, full-height white panel, brand header, accordion submenus (grid-rows transition), pinned CTA; scroll-lock + Escape + route-change close, reduced-motion safe. Header bar `space-between` (logo left / hamburger right); compact promo bar on phones (close pinned top-right). Commit `75a49f4`. |
| 2026-07-14 | 35 | ux polish | Scroll reveal (`ScrollReveal.tsx`) now triggers ~22% viewport before entering (positive IntersectionObserver rootMargin, threshold 0) with a shorter/subtler animation so fast scrolling no longer lands on blank space. Tighter mobile heading line-height (1.15; hero/about 1.1). Drawer close button: cancelled the inherited global `button` left-padding that squished the icon (7px→20px) — solid navy circle, bold white X. Commit `7187fc6`. |
| 2026-07-14 | 36 | rebrand-kimberley | Renamed brand Kingsley Direct Publishing → **Kimberley Direct Publishing** across all source: name, domain (`kimberleydirectpublishing.com`), email (`info@kimberleydirectpublishing.com`), header/footer/mobile wordmarks, metadata (title/OG/twitter/canonical), sitemap/robots/schema JSON-LD, and page copy (home/about/contact/blogs/privacy/terms/services + sub-services). Kept `kdp-*` CSS class names (same K-D-P initials) and the hero `KDP` reference (Amazon Kindle Direct Publishing). Typecheck clean. |
| 2026-07-18 | 38 | packages-page | New `/packages` page. Pricing data in `lib/packages.ts` (base USD, `unit` per price: one-time / per word / per illustration): two flagship tiers (Standard $799, Premium $1,399 = Most Popular) + 7 à-la-carte services + a "Need something tailored?" custom card. **Dynamic currency**: reusable `lib/currency.ts` (IP geo-detect via ipwho.is→ipapi.co, live rates from open.er-api.com→frankfurter fallback, 24h localStorage cache, `roundNice` marketing rounding, Intl formatting for USD/EUR/GBP/AUD/CAD/PKR/INR/AED) + `hooks/useCurrency.ts` + client `PackagesPricing.tsx` with a manual currency dropdown persisted to localStorage. SSR renders USD (no hydration mismatch, never blocks). OfferCatalog + Breadcrumb JSON-LD; full metadata; wired into `MAIN_NAV`, footer quick links, and sitemap (priority 0.9). Clean production build (43 pages), verified /packages 200 + live conversion produces clean values. |
| 2026-07-14 | 37 | logo-svg + wire-in | Auto-traced the two supplied PNG logos to clean SVGs via `imagetracerjs` (forced brand palette → flat regions, ~130 KB / ~660 paths each). Added `public/images/kimberley-logo.svg` (navy text), `kimberley-logo-white.svg` (white text, footer), `kimberley-logo-dark.svg` (navy badge, unused). Replaced text wordmarks with `next/image` (`unoptimized`) in `Header.tsx` (light, `priority`, shrinks to 34px when pinned) and `Footer.tsx` (white); sizing CSS via `.kdp-logo-img` / `.footer-logo-img`. Source PNGs moved to `reference/source-logos/`. Clean production build (42 pages). Sessions 36+37 committed together as `ab830f7` and pushed to `kingsley/master` (live Vercel repo). |

## Known issues / decisions made

- Using Google Fonts via next/font (automatically optimized by Next.js, satisfies "self-hosted" requirement)
- Placeholder content data in `lib/content.ts` for services, FAQs, testimonials, process steps
- Base styles and keyframes in `globals.css` support the hero, marquee, buttons, and Phase 1 components
- `reference/screenshot.png` is not present in the repo; hero values were pulled from `reference/site_custom.css`, `reference/site_responsive.css`, and `reference/page_structure.html`
- Use code/CSS placeholders for missing imagery unless the user explicitly asks for generated or supplied assets
- Section 2 follows `index-wrap-2`, `span-tag-border`, `.platforms`, `.index-wrap-counter`, and `.counter-wrap` values from `reference/site_custom.css`
- Section 3 follows `index-wrap-3`, `.services-item`, `.services-item-icon`, `.services-item-content`, and `.services-item-cta` values from `reference/site_custom.css`; image shades/stars are CSS placeholders
- Tailwind does not generate the legacy `font-500` / `font-600` / `font-700` class names used by some early components, so `globals.css` now aliases them to the reference font weights
- Section 4 follows `index-wrap-4`, `.span-tag-border-yellow`, `.anchor-number-cta`, `.index-wrap-4-cta-circle`, `.cta-*` positioning, and responsive width values from reference CSS; illustrations remain CSS placeholders
- Section 5 follows `index-wrap-5`, `.process-item`, `.process-item-img`, `.process-item-content`, `.process-row-padding-top`, and shade positioning from reference CSS; process cards use a responsive Swiper carousel with pagination dots and temporary real images
- Section 6 follows `index-wrap-6`, `.index-wrap-6-tabs li`, `.portfolio-item`, `.portfolio-book-cover`, shade and star positioning from reference CSS; tab switching uses React useState with CSS fade-in animation via `key` prop; book covers now use temporary real images
- Section 7 uses the actual patrickwhitepublishing.com Swiper testimonials design (portrait + floating book cover + large name + quote + Amazon/Trustpilot), not the original reference review-card layout; 4 real client testimonials in lib/content.ts; partners strip uses styled text pills since logo images are not local
- `Testimonial` interface in lib/content.ts updated: `{ id, name, quote, amazonUrl, photo, bookCover }` — old fake data replaced with real client data
- Newly added book/mockup images from `public/images` are used in hero, marquee covers, about visual, CTA art, process cards, and portfolio cards; logo assets remain in the platform logo row
- Testimonials use `bookCover` for the large main image and `photo` for the small floating author image; `photo` currently points to `wrap-2-img.webp` until real author headshots are supplied
- The post-testimonials partner strip uses `public/images/1.webp` through `7.webp` as contained logo tiles
- Small logo strips use explicit `width`/`height` on `next/image`; avoid `fill` there because the assets are narrow logos, not framed hero media
- Small logo row wrappers are plain layout boxes only; no background, border, radius, or shadow
- Testimonials carousel uses `slidesPerView="auto"` with centered slides to show partial neighboring cards like the provided mockup
- FAQ section now follows the reference two-column accordion layout; content uses the reference question set with accessible expandable answers
- FAQ accordion now allows one open item at a time and uses CSS grid transitions for smoother expand/collapse motion

## Brand details (Kimberley Direct Publishing)

- **Brand:** Kimberley Direct Publishing
- **Logo mark:** text wordmark "Kimberley / Direct Publishing" (KDP class prefix in CSS)
- **Domain:** kimberleydirectpublishing.com
- **Email:** info@kimberleydirectpublishing.com
- **Phone / registered office / company number:** env-gated placeholders (UK) — see Open placeholders above
- **Social links:** bare facebook.com / instagram.com / wa.me placeholders (Footer + schema)

## Blocked on (waiting for assets, info from user, etc.)

- `reference/screenshot.png` is missing, so visual comparison is limited until that asset is restored

---

## Resume instructions for next session

1. Open this repo in VS Code with Claude Code
2. Paste the resume prompt from `INITIAL_PROMPT.md`
3. Claude will read `CLAUDE.md`, `BUILD_PLAN.md`, and this file, then continue from **6.1**
