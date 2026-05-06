# Progress Log

Update this file at the **end of every session**. It's how the next Claude session knows where to resume.

---

## Last completed task ID

**2.1.6** - Hero section complete and committed.

## Currently in progress

Phase 2 - Homepage sections. Start next at **2.2.1**.

## Session log

| Date | Session # | Tasks completed | Notes / blockers |
|---|---|---|---|
| 2026-05-06 | 1 | 0.1-0.12 | Project scaffolding: Next.js 15, Tailwind 4, fonts, metadata, sitemap, robots, content/schema helpers |
| 2026-05-06 | 2 | 1.1-1.6 | UI primitives: Button (Server Component with Link/button logic), ServiceCard (dynamic icon loading), SectionHeading (pill tag + h2 + subtitle), StatCounter (navy stat card), Container (max-width wrapper) |
| 2026-05-06 | 3 | 2.1.1-2.1.6 | Hero section, code-based hero placeholder, two-row book cover marquee, discussion modal CTA, homepage metadata/schema pass |
| 2026-05-06 | 4 | 2.1 adjustment | Replaced generated hero asset with a code/CSS placeholder per user direction |

## Known issues / decisions made

- Using Google Fonts via next/font (automatically optimized by Next.js, satisfies "self-hosted" requirement)
- Placeholder content data in `lib/content.ts` for services, FAQs, testimonials, process steps
- Base styles and keyframes in `globals.css` support the hero, marquee, buttons, and Phase 1 components
- `reference/screenshot.png` is not present in the repo; hero values were pulled from `reference/site_custom.css`, `reference/site_responsive.css`, and `reference/page_structure.html`
- Use code/CSS placeholders for missing imagery unless the user explicitly asks for generated or supplied assets

## Blocked on (waiting for assets, info from user, etc.)

- `reference/screenshot.png` is missing, so visual comparison is limited until that asset is restored

---

## Resume instructions for next session

1. Open this repo in VS Code with Claude Code
2. Paste the resume prompt from `INITIAL_PROMPT.md`
3. Claude will read `CLAUDE.md`, `BUILD_PLAN.md`, and this file, then continue from **2.2.1**
