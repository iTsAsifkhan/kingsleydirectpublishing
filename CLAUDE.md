# Project: Book Publishing Partner — Pixel-Perfect Replica (Next.js)

This file is auto-read by Claude Code at the start of every session. **Read this and `BUILD_PLAN.md` and `PROGRESS.md` before doing anything.**

---

## Project goal

Pixel-perfect replica of bookpublishingpartner.com built on a modern, SEO-first Next.js stack. Reference design has been extracted — **never invent values, look them up.**

## Reference files (READ THESE FIRST)

| File | Purpose |
|---|---|
| `reference/DESIGN_SYSTEM.md` | Every color, shadow, transition, hover state, and component pattern |
| `reference/site_custom.css` | Original site's beautified CSS (935 lines) — exact rules |
| `reference/site_responsive.css` | Original media queries |
| `reference/page_structure.html` | Original DOM with images replaced by placeholders |
| `reference/image_inventory.txt` | Catalog of all original images |
| `reference/screenshot.png` | Full-page screenshot |
| `reference/original_singlefile.html` | Optional — the SingleFile capture for visual diffing |
| `SEO_CHECKLIST.md` | Per-page SEO requirements — every page must pass this |

## Stack (locked, do not change without asking)

- **Next.js 15** with App Router
- **React 19** with Server Components by default (`"use client"` only when needed for interactivity)
- **TypeScript** strict mode
- **Tailwind CSS 4** (uses `@import "tailwindcss"` syntax in CSS, not the old `@tailwind` directives)
- **Swiper 11+** for carousels (the ONLY carousel library — replaces Slick, Glide, etc.)
- **Framer Motion** for scroll-triggered animations (replaces WOW.js)
- **Lucide React** for non-brand icons; **Font Awesome 6** only when an icon must match the original exactly
- **next/image** for ALL raster images, no `<img>` tags
- **next/font** for fonts (Montserrat + Noto Sans, self-hosted, no Google CDN)
- **next/link** for ALL internal navigation
- **NO jQuery. NO WOW.js. NO Lozad. NO Slick.** These are dead in 2026.

## Conventions Claude must follow

### Architecture
1. **Server Components by default.** Add `"use client"` only when a component genuinely needs `useState`, `useEffect`, event handlers, or browser APIs. Carousels, accordion toggles, and modals are client; everything else is server.
2. **Folder layout:**
   ```
   app/
     layout.tsx                  # site-wide metadata, header, footer, fonts
     page.tsx                    # homepage
     services/[slug]/page.tsx    # dynamic service pages
     sitemap.ts                  # auto-generated sitemap
     robots.ts                   # robots.txt
     globals.css                 # Tailwind import + custom CSS
   components/
     ui/                         # primitives (Button, Card, SectionHeading)
     sections/                   # full sections (Hero, Services, FAQ, etc.)
     icons/                      # custom SVG components
   lib/
     content.ts                  # services, FAQs, testimonials (single source of truth)
     schema.ts                   # JSON-LD generators
     metadata.ts                 # metadata helpers
   public/
     images/                     # static assets
   ```
3. **Content lives in `lib/content.ts`** as typed data, NOT hardcoded in JSX. Reusable across homepage cards and service detail pages.

### Design fidelity
4. **No invented values.** Colors, shadows, paddings, radii, font sizes, transition timings — always check `DESIGN_SYSTEM.md` first, then `site_custom.css`. If neither has it, flag it.
5. **Match hover behaviors exactly.** Buttons have a slide-fill `::before` pseudo-element with `cubic-bezier(0.615, 0, 0.07, 1)` over 0.5s plus `scale(1.1)` on the parent. Don't simplify.
6. **Use Tailwind for layout/spacing/colors.** Use a `.module.css` or `globals.css` block for the signature interactions (slide-fill button bg, marquee animation, custom scrollbar) — Tailwind can't express these cleanly.

### SEO is non-negotiable
7. **Every page exports `metadata`** (or `generateMetadata` for dynamic routes). No exceptions.
8. **One `<h1>` per page**, proper h2/h3/h4 hierarchy.
9. **Every internal navigation uses `next/link`**. Every external link uses `<a target="_blank" rel="noopener noreferrer">`.
10. **Every image uses `next/image`** with `width`, `height`, descriptive `alt`, `priority` for above-the-fold.
11. **No `javascript:;` placeholders, no `href="#"`.** If a feature isn't ready, render a real `<button>` opening a placeholder modal or remove it.
12. **JSON-LD on the homepage and every service page** — Organization, Service, FAQPage as appropriate. Helpers live in `lib/schema.ts`.
13. **Run through `SEO_CHECKLIST.md` before marking a page done.**

### Content rules
14. **Don't use the bestseller covers, real authors, or TV show images** from the original (Stephen King, Bridgerton, Beach Read, etc.). The original is using these illegally. Use placeholders or real client work only.
15. **Long descriptions go on the service detail page**, not stuffed into a homepage card. Use `line-clamp-3` on cards + `<Link>` to `/services/[slug]`. This wins on UX and SEO.

### Workflow
16. **One section per session, ideally.** Each section is a discrete deliverable.
17. **Conventional commits** with task IDs: `feat(hero): add section 1 marquee [task 2.1.3]`.
18. **Update `PROGRESS.md` at end of every session.** No exceptions.

## Tailwind config — required tokens

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow:     '#FFB210',
          yellowDark: '#C88800',
          navy:       '#140545',
          ink:        '#0D0D0D',
          gray1:      '#343434',
          gray2:      '#4b4b4b',
          gray3:      '#8A8A8A',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body:    ['var(--font-noto)', 'sans-serif'],
      },
      boxShadow: {
        card:        '0px 13px 37px rgb(0 0 0 / 6%)',
        'card-hover':'0px 11px 13px #0000002c',
        'btn-hover': '0px 15px 25px #0000005e',
        'glow-sm':   '0px 0px 16px #FFB210',
        'glow-md':   '0px 7px 30px #FFB210',
        'glow-lg':   '0px 0px 33px #FFB210',
        'glow-xl':   '0px 0px 42px hsl(41deg 100% 53% / 65%)',
      },
      transitionTimingFunction: {
        'fill-bezier': 'cubic-bezier(0.615, 0, 0.07, 1)',
      },
      borderRadius: {
        pill: '50px',
        card: '20px',
      },
    },
  },
};
export default config;
```

## Definition of "done"

- ✅ Visual matches `reference/screenshot.png` at desktop and mobile
- ✅ All hover states match original timing
- ✅ Lighthouse: 90+ Performance, 95+ Accessibility, 100 Best Practices, 100 SEO
- ✅ `metadata` set with title, description, openGraph, twitter, canonical
- ✅ JSON-LD schema rendered where applicable
- ✅ All images use `next/image` with descriptive alt text
- ✅ All internal links use `next/link`
- ✅ One `<h1>`, valid heading hierarchy
- ✅ No `javascript:;` or `href="#"`
- ✅ Responsive at all breakpoints in `DESIGN_SYSTEM.md` § 13
- ✅ Committed, checked off in `PROGRESS.md`, validated against `SEO_CHECKLIST.md`
