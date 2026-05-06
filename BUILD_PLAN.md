# Build Plan — Next.js Replica

Sequential task list. Each parent task is roughly one Claude Code session (~30–60 min).

---

## Phase 0 — Project setup (one session, ~30 min)

- [ ] **0.1** Run `npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir=false --import-alias "@/*" --turbopack`
- [ ] **0.2** Install runtime deps: `npm i swiper framer-motion lucide-react clsx`
- [ ] **0.3** Install dev deps: `npm i -D @types/node prettier prettier-plugin-tailwindcss`
- [ ] **0.4** Create folder structure (see `CLAUDE.md` § Architecture)
- [ ] **0.5** Configure `tailwind.config.ts` with brand tokens from `CLAUDE.md`
- [ ] **0.6** Set up `next/font` for Montserrat + Noto Sans in `app/layout.tsx`
- [ ] **0.7** Create `app/globals.css`:
  - `@import "tailwindcss"` directive
  - Custom scrollbar (yellow thumb on navy track)
  - Body font, smooth scroll, base styles from `site_custom.css` lines 1–40
  - Keyframes: `rotation` (5s linear infinite), `marquee` (translateX 0 → -100%)
  - Slide-fill button `::before` styles
- [ ] **0.8** Set up site-wide `metadata` in `app/layout.tsx`:
  - `metadataBase`, `title.template`, default `description`
  - Default `openGraph` + `twitter` with placeholder OG image
  - `alternates.canonical`
- [ ] **0.9** Create `app/sitemap.ts` and `app/robots.ts`
- [ ] **0.10** Create `lib/content.ts` with typed data structures (empty arrays for services/faqs/testimonials — populate as you build sections)
- [ ] **0.11** Create `lib/schema.ts` with JSON-LD generators for Organization, Service, FAQPage
- [ ] **0.12** First commit: `chore: scaffold Next.js project`

## Phase 1 — Reusable UI primitives (one session)

- [ ] **1.1** `components/ui/Button.tsx` (Server Component)
  - Props: `variant: "yellow" | "blue"`, `href?: string`, `children`, `icon?`
  - Renders as `<Link>` if `href`, `<button>` otherwise
  - Implements: pill shape, slide-fill `::before`, `scale(1.1)` on hover, span-2 arrow circle, gradient swap
  - Test both variants on a `app/_test/page.tsx` (delete later)
- [ ] **1.2** `components/ui/ServiceCard.tsx`
  - Props: `service: Service` (from `lib/content.ts`)
  - Layout: navy circle icon → yellow on hover with glow, h5, `line-clamp-3` description, "Learn More →" link to `/services/[slug]`
- [ ] **1.3** `components/ui/SectionHeading.tsx`
  - Props: `tag` (small pill), `title` (h2), `subtitle` (paragraph)
- [ ] **1.4** `components/ui/StatCounter.tsx`
  - Navy bg, 15px radius, big number + label
- [ ] **1.5** `components/ui/Container.tsx`
  - Standard max-width wrapper (matches Bootstrap container behavior)
- [ ] **1.6** Commit: `feat(ui): add Button, ServiceCard, SectionHeading, StatCounter primitives [task 1.x]`

## Phase 2 — Homepage sections

Each section is a server component in `components/sections/`. Imported into `app/page.tsx`.

### Section 1 — Hero
- [ ] **2.1.1** `components/sections/Hero.tsx`
- [ ] **2.1.2** Sub-heading pill, h1 (44px Montserrat), p, two CTAs
- [ ] **2.1.3** Hero illustration on right (use `next/image` with `priority`)
- [ ] **2.1.4** `components/sections/BookCoverMarquee.tsx` ("use client" — needs the keyframe to be interruptible). Two rows scrolling at different speeds. Pause on hover.
- [ ] **2.1.5** "Want to Discuss?" yellow circle CTA (270×270px gradient) — opens modal
- [ ] **2.1.6** Commit

### Section 2 — Why Choose Us + Stats counter
- [ ] **2.2.1** `components/sections/WhyChooseUs.tsx`
- [ ] **2.2.2** Two-column: image left, tag pill + h2 + p + CTAs right
- [ ] **2.2.3** Decorative rotating stars (use the `rotation` keyframe from globals.css)
- [ ] **2.2.4** `components/sections/StatsStrip.tsx` with 4 navy counter cards, `margin: -5% 0 -4%`
- [ ] **2.2.5** Commit

### Section 3 — Services grid
- [ ] **2.3.1** `components/sections/Services.tsx`
- [ ] **2.3.2** Section heading + grid of `<ServiceCard>` from `lib/content.ts`
- [ ] **2.3.3** Background star/shade decorations (positioned absolutely)
- [ ] **2.3.4** "Get A Quote" CTA below grid
- [ ] **2.3.5** Commit

### Section 4 — Purple CTA banner
- [ ] **2.4.1** `components/sections/PurpleCTA.tsx`
- [ ] **2.4.2** `bg-brand-navy` with right-side rounded edge (`borderRadius: 0 400px 400px 0`)
- [ ] **2.4.3** Books illustration on right (`next/image`)
- [ ] **2.4.4** Text + buttons + phone link on left
- [ ] **2.4.5** Floating book illustration overlapping bottom-left
- [ ] **2.4.6** Commit

### Section 5 — Process timeline
- [ ] **2.5.1** `components/sections/Process.tsx`
- [ ] **2.5.2** 6 process cards (image top, number + heading + description bottom)
- [ ] **2.5.3** Use Swiper on mobile, CSS grid on desktop
- [ ] **2.5.4** Commit

### Section 6 — Portfolio with tabs
- [ ] **2.6.1** `components/sections/Portfolio.tsx` ("use client" — needs tab state)
- [ ] **2.6.2** Navy background, tab list (Fantasy / Fiction / Romance / etc.)
- [ ] **2.6.3** Active tab gets `box-shadow: glow-sm` (yellow ring)
- [ ] **2.6.4** Grid of book cover thumbnails per tab — **placeholder boxes only**, no real bestsellers
- [ ] **2.6.5** Commit

### Section 7 — Testimonials
- [ ] **2.7.1** `components/sections/Testimonials.tsx` ("use client" — Swiper)
- [ ] **2.7.2** Each slide: book cover thumb, author photo, quote, meta, "More About Author"
- [ ] **2.7.3** Partner logos strip (Trustpilot, IngramSpark, Kobo, etc.)
- [ ] **2.7.4** Commit

### Section 8 — FAQ accordion
- [ ] **2.8.1** `components/sections/FAQ.tsx`
- [ ] **2.8.2** Use native `<details><summary>` (server-component-friendly, accessible)
- [ ] **2.8.3** Plus icon rotates to X via CSS `[open]` selector
- [ ] **2.8.4** **Render FAQPage JSON-LD inline using `lib/schema.ts`** — this gets you rich results in Google
- [ ] **2.8.5** Commit

### Section 9 — Contact form
- [ ] **2.9.1** `components/sections/ContactForm.tsx` ("use client")
- [ ] **2.9.2** Yellow background, "Let's Connect" h2
- [ ] **2.9.3** Form: name / email / phone / message / submit
- [ ] **2.9.4** Use a server action or API route to handle submission
- [ ] **2.9.5** Decorative star elements
- [ ] **2.9.6** Commit

## Phase 3 — Header & Footer (in `app/layout.tsx`)

- [ ] **3.1** `components/Header.tsx`: top bar (phone, email, chat, social) + main bar (logo + nav with dropdowns)
- [ ] **3.2** Mobile slide-in menu drawer ("use client")
- [ ] **3.3** `components/Footer.tsx`: 4 columns
- [ ] **3.4** Sticky behavior on scroll if applicable
- [ ] **3.5** Commit

## Phase 4 — Service detail pages (this is where SEO depth lives)

- [ ] **4.1** `app/services/[slug]/page.tsx` with `generateStaticParams` from `lib/content.ts`
- [ ] **4.2** `generateMetadata` per service: unique title, description, OG image, canonical
- [ ] **4.3** Service JSON-LD schema for each page
- [ ] **4.4** Page layout: hero + full description + features + process + related services + CTA
- [ ] **4.5** Internal linking: each service page links to 2–3 related services
- [ ] **4.6** Build pages for: ghostwriting, editing, publishing, marketing, cover-design (5 pages)
- [ ] **4.7** Add to `app/sitemap.ts`
- [ ] **4.8** Commit

## Phase 5 — Polish & animations

- [ ] **5.1** Wrap sections in Framer Motion `<motion.div>` with `whileInView` for scroll fade-ins
- [ ] **5.2** Custom scrollbar verified across browsers
- [ ] **5.3** Floating chat widget (bottom-right)
- [ ] **5.4** "Want to Discuss?" modal that opens from yellow circle CTA
- [ ] **5.5** Newsletter signup popup
- [ ] **5.6** Commit

## Phase 6 — Responsive pass

Test and fix at every breakpoint from `DESIGN_SYSTEM.md` § 13:
- [ ] **6.1** 1601px / 1537px / 1441px (laptop tweaks)
- [ ] **6.2** 1367px / 1281px (smaller laptops)
- [ ] **6.3** 1199px (Bootstrap lg → tablet landscape)
- [ ] **6.4** 991px (tablet portrait)
- [ ] **6.5** 767px (mobile landscape)
- [ ] **6.6** 575px (mobile portrait)
- [ ] **6.7** Commit

## Phase 7 — SEO finalization

- [ ] **7.1** Run through `SEO_CHECKLIST.md` for homepage
- [ ] **7.2** Run through `SEO_CHECKLIST.md` for each service page
- [ ] **7.3** Generate proper OG images (1200×630) for homepage + each service page
- [ ] **7.4** Validate sitemap.xml
- [ ] **7.5** Test with Google's Rich Results Test (https://search.google.com/test/rich-results)
- [ ] **7.6** Test with Schema.org Validator (https://validator.schema.org)
- [ ] **7.7** Test OG previews with https://www.opengraph.xyz
- [ ] **7.8** Commit

## Phase 8 — Performance & launch

- [ ] **8.1** Run Lighthouse on every page: target 90+ Performance, 95+ A11y, 100 Best Practices, 100 SEO
- [ ] **8.2** Check bundle size: `npx @next/bundle-analyzer`
- [ ] **8.3** Verify no `<img>` tags, no jQuery, no Slick in final bundle
- [ ] **8.4** Set up production environment variables
- [ ] **8.5** Deploy to Vercel (or Cloudflare Pages with Next.js adapter)
- [ ] **8.6** Add Google Search Console + submit sitemap
- [ ] **8.7** Add analytics (Plausible or Vercel Analytics, NOT GA in 2026 unless required)
- [ ] **8.8** Tag `v1.0.0`
