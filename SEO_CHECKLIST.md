# SEO Checklist

Run through this **before** marking any page as done. Both Claude and you should verify.

---

## Per-page checks

### Metadata (in `metadata` or `generateMetadata` export)

- [ ] **`title`** — unique, 50–60 chars, primary keyword in first 30 chars
- [ ] **`description`** — unique, 140–160 chars, action-oriented, includes primary keyword
- [ ] **`alternates.canonical`** — absolute URL, points to itself
- [ ] **`openGraph.title`** — can match `title` or be slightly different
- [ ] **`openGraph.description`** — can match `description`
- [ ] **`openGraph.url`** — absolute URL
- [ ] **`openGraph.siteName`** — set globally in layout
- [ ] **`openGraph.images`** — 1200×630 JPEG/PNG, real (not the logo). Inherits from layout if not overridden
- [ ] **`openGraph.type`** — `"website"` for landing pages, `"article"` for blog posts
- [ ] **`twitter.card`** — `"summary_large_image"`
- [ ] **`twitter.title` / `twitter.description` / `twitter.images`** — usually inherits from `openGraph`

### HTML structure

- [ ] **Exactly one `<h1>`** on the page
- [ ] **Headings are hierarchical** — no skipping (no `<h1>` followed by `<h3>` without an `<h2>` between them)
- [ ] **Semantic landmarks** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used appropriately
- [ ] **No `<div>` salad** where a semantic element fits

### Links

- [ ] **All internal nav uses `next/link`**, not `<a>`
- [ ] **No `href="#"`, no `href="javascript:;"`** anywhere
- [ ] **External links** have `target="_blank" rel="noopener noreferrer"`
- [ ] **Link text is descriptive** — no "click here", "learn more" without context
- [ ] **Internal links are abundant** — every section has 2–3 contextual links to related pages

### Images

- [ ] **All images use `next/image`** with `width` and `height` props (or `fill` with sized parent)
- [ ] **`alt` is descriptive**, not "image" or "logo" or empty (decorative images should use `alt=""`, not omit it)
- [ ] **Above-the-fold images have `priority={true}`**
- [ ] **Below-the-fold images are lazy-loaded by default** (next/image does this automatically)

### Structured data (JSON-LD)

Page-type-specific schemas:

- [ ] **Homepage**: `Organization` (or `ProfessionalService`) + `WebSite` schemas
- [ ] **Service detail page**: `Service` schema with `provider`, `serviceType`, `areaServed`, `offers`
- [ ] **FAQ section**: `FAQPage` schema (if there are FAQs on the page)
- [ ] **Testimonials section**: `Review` schemas if testimonials are real and verifiable
- [ ] **Contact page**: `ContactPage` + `Organization` with `contactPoint`
- [ ] All schemas validated at https://validator.schema.org

### Performance (Core Web Vitals affect ranking)

- [ ] **LCP < 2.5s** — Largest Contentful Paint
- [ ] **CLS < 0.1** — Cumulative Layout Shift (next/image with width/height prevents this)
- [ ] **INP < 200ms** — Interaction to Next Paint
- [ ] **No render-blocking JS** — Next.js handles this; avoid client components above the fold

### Accessibility (Google considers this)

- [ ] **Color contrast** — all text passes WCAG AA (yellow on white can fail; check with https://webaim.org/resources/contrastchecker/)
- [ ] **Focus indicators** — keyboard tab through the page, every interactive element has a visible focus state
- [ ] **Form labels** — every input has a `<label>` (visible or sr-only)
- [ ] **Buttons vs links** — `<button>` for actions, `<a>` for navigation. Don't use `<div onClick>`
- [ ] **`aria-label`** on icon-only buttons (e.g., social icons, hamburger menu)

### Crawlability

- [ ] **In `app/sitemap.ts`** — page is listed
- [ ] **Not blocked by `robots.ts`**
- [ ] **No `noindex` meta** unless intentionally hidden
- [ ] **URL is descriptive** — `/services/ghostwriting`, not `/services/12`

### Content quality

- [ ] **Word count** — homepage 800+ words, service pages 1500+ words minimum
- [ ] **Primary keyword density** — natural, ~1–2% of body text
- [ ] **Related keywords** — variations and synonyms appear naturally throughout
- [ ] **No duplicate content** between pages
- [ ] **No thin pages** — every page must have unique substantive content

---

## Site-wide checks (run once, then before launch)

- [ ] **`robots.txt`** is correct and references `sitemap.xml`
- [ ] **`sitemap.xml`** lists every public page with reasonable `lastModified` and `priority`
- [ ] **404 page** exists (`app/not-found.tsx`)
- [ ] **HTTPS only** — no mixed content
- [ ] **`www` vs non-`www`** — pick one, redirect the other
- [ ] **Trailing slashes** — consistent (Next.js default is no trailing slash)
- [ ] **Mobile-friendly** — passes https://search.google.com/test/mobile-friendly
- [ ] **Schema validation** — all pages pass https://validator.schema.org
- [ ] **Rich Results Test** — passes https://search.google.com/test/rich-results
- [ ] **Open Graph preview** — looks right at https://www.opengraph.xyz
- [ ] **Search Console** — site verified, sitemap submitted

---

## Quick reference: useful generators

```ts
// lib/schema.ts examples

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Your Brand',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    telephone: '+1-XXX-XXX-XXXX',
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    sameAs: [
      'https://www.facebook.com/...',
      'https://www.linkedin.com/company/...',
    ],
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: { '@type': 'ProfessionalService', name: 'Your Brand', url: SITE_URL },
    description: service.fullDescription,
    areaServed: { '@type': 'Country', name: 'United States' },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
```

```tsx
// rendering JSON-LD in a page
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
/>
```
