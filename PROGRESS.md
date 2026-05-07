# Progress Log

Update this file at the **end of every session**. It's how the next Claude session knows where to resume.

---

## Last completed task ID

**2.7.4** - Testimonials section complete.

## Currently in progress

Phase 2 - Homepage sections. Start next at **2.8.1**.

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
| 2026-05-07 | 14 | 2.7.1-2.7.4 | Testimonials Swiper carousel with real client data (Esabelle Flynn, Cornelis Pepsee, Charlie, Benjamin Sam), portrait + book cover layout, Amazon + Trustpilot buttons, partners strip |

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

## Blocked on (waiting for assets, info from user, etc.)

- `reference/screenshot.png` is missing, so visual comparison is limited until that asset is restored

---

## Resume instructions for next session

1. Open this repo in VS Code with Claude Code
2. Paste the resume prompt from `INITIAL_PROMPT.md`
3. Claude will read `CLAUDE.md`, `BUILD_PLAN.md`, and this file, then continue from **2.8.1**
