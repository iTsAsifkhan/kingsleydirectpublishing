# Progress Log

Update this file at the **end of every session**. It's how the next Claude session knows where to resume.

---

## Last completed task ID

**2.9.6** - Contact form section complete.

## Currently in progress

Phase 3 - Header & Footer. Start next at **3.1**.

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

## Blocked on (waiting for assets, info from user, etc.)

- `reference/screenshot.png` is missing, so visual comparison is limited until that asset is restored

---

## Resume instructions for next session

1. Open this repo in VS Code with Claude Code
2. Paste the resume prompt from `INITIAL_PROMPT.md`
3. Claude will read `CLAUDE.md`, `BUILD_PLAN.md`, and this file, then continue from **2.8.1**
