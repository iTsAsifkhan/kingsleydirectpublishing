# Book Publishing Partner — Replica Project Bundle (Next.js)

Self-contained starter pack for building a pixel-perfect SEO-optimized Next.js replica using Claude Code in VS Code.

---

## What's in here

| File | Purpose |
|---|---|
| **`README.md`** | This file — setup walkthrough |
| **`CLAUDE.md`** | Auto-loaded by Claude Code at session start. Stack, conventions, rules. |
| **`BUILD_PLAN.md`** | 8-phase task list, ~70 numbered tasks. Check off as you go. |
| **`PROGRESS.md`** | Session log. Update at end of every session. |
| **`INITIAL_PROMPT.md`** | Copy-paste prompts for kickoff, resume, stuck, SEO audit, end-of-session. |
| **`SEO_CHECKLIST.md`** | Per-page SEO requirements. Runs before any page is "done". |
| `reference/DESIGN_SYSTEM.md` | Every design token — colors, shadows, transitions, hovers |
| `reference/site_custom.css` | Original site's beautified custom CSS |
| `reference/site_responsive.css` | Original media queries |
| `reference/page_structure.html` | Original DOM structure |
| `reference/image_inventory.txt` | Catalog of all images |

**You'll add:**
- `reference/screenshot.png` (the screenshot you took)
- `reference/original_singlefile.html` (optional — your SingleFile capture)

---

## Stack at a glance

- Next.js 15 (App Router) + React 19 + TypeScript strict
- Tailwind CSS 4 + Swiper 11 + Framer Motion + Lucide React
- next/image, next/font, next/link (optimized everything)
- Server Components by default, client only when interactive
- File-based sitemap.ts + robots.ts
- JSON-LD structured data (Organization, Service, FAQPage)
- **Lighthouse target: 90/95/100/100** (Perf / A11y / BP / SEO)

---

## Setup steps (~10 minutes, one-time)

### 1. Install Claude Code in VS Code

If you don't have it yet:
- Open VS Code → Extensions → search "Claude Code" → install
- Sign in with your Anthropic account

### 2. Create the project folder

Pick a location, e.g. `~/projects/bpp-replica/`. **Don't run `create-next-app` yet** — Claude will do it as task 0.1 so you don't have a half-set-up project from your hand vs Claude's hand.

### 3. Drop the bundle into the empty folder

Move the files like this:

```
bpp-replica/
├── README.md                  ← this file
├── CLAUDE.md
├── BUILD_PLAN.md
├── PROGRESS.md
├── INITIAL_PROMPT.md
├── SEO_CHECKLIST.md
└── reference/
    ├── DESIGN_SYSTEM.md
    ├── site_custom.css
    ├── site_responsive.css
    ├── page_structure.html
    ├── image_inventory.txt
    ├── screenshot.png            ← you add (rename your screenshot to this)
    └── original_singlefile.html  ← you add (optional)
```

Move `DESIGN_SYSTEM.md`, `site_custom.css`, `site_responsive.css`, `page_structure.html`, `image_inventory.txt` into a `reference/` subfolder. Keep the rest at the project root.

### 4. Initialize git

In the terminal at your project root:

```bash
git init
git add .
git commit -m "chore: initial project bundle with Next.js plan"
```

### 5. Open in VS Code

```bash
code .
```

### 6. Open Claude Code panel

In VS Code: `Cmd/Ctrl + Shift + P` → "Claude Code: Open Panel" (or click the Claude icon in the sidebar).

### 7. Paste the kickoff prompt

Open `INITIAL_PROMPT.md`, copy the **🚀 First-ever session (kickoff)** prompt, paste into Claude Code.

That's it. Claude will read the project files, scaffold Next.js, configure Tailwind, set up fonts, create the folder structure, write base SEO metadata, and commit. Phase 0 takes ~30 minutes of Claude time.

---

## After the first session

Every subsequent session, paste the **🔄 Resume prompt** from `INITIAL_PROMPT.md`. Claude reads `PROGRESS.md`, sees what's done, and continues from the next task.

Workflow per session:
1. Open VS Code → open Claude Code panel
2. Paste the resume prompt
3. Watch Claude work. Approve file changes, run commands when prompted.
4. **Before closing**: paste the **✋ End-of-session prompt** to force a `PROGRESS.md` update + commit.

---

## How to handle context resets

The whole point of this structure is that **resets don't matter**.

State lives in:
- `PROGRESS.md` (what's done, what's next)
- The git log (how it got here)
- `CLAUDE.md` (the rules)
- `BUILD_PLAN.md` (the plan)
- `reference/` (the design source-of-truth)

If a session ends — whether by your choice, by hitting limits, or because your laptop died — open a fresh session, paste the resume prompt, and you're back exactly where you left off.

**The single most important habit:** update `PROGRESS.md` and commit before closing every session. If you do that, you literally cannot lose progress.

---

## Estimated total work

- Phase 0 (setup): 1 session, ~30 min
- Phase 1 (UI primitives): 1 session, ~45 min
- Phase 2 (9 sections): 9 sessions, ~45 min each
- Phase 3 (header/footer): 1 session
- Phase 4 (5 service pages): 2–3 sessions
- Phase 5 (animations): 1 session
- Phase 6 (responsive): 1–2 sessions
- Phase 7 (SEO finalization): 1 session
- Phase 8 (perf + launch): 1 session

**Total: ~18–20 Claude Code sessions** for a complete, SEO-optimized replica. Realistically 2–4 weeks of part-time work.

---

## Common pitfalls (read once, save yourself debugging)

1. **Claude tries to use jQuery / Slick / Bootstrap** — say "no, those are forbidden in `CLAUDE.md`. Use the modern stack."
2. **Claude invents a hex color** — say "look it up in `reference/DESIGN_SYSTEM.md`."
3. **Claude forgets `next/image`** — say "all raster images use `next/image`. Refactor."
4. **Claude marks a page done without SEO** — say "run through `SEO_CHECKLIST.md` for this page first."
5. **Claude wants to put long descriptions in homepage cards** — say "no, use `line-clamp-3` on cards and put full content on the service detail page. See `CLAUDE.md` § Content rules."
6. **Mid-session feels confused / breaking conventions** — stop, commit what's working, start a new session with the resume prompt.

---

## When you're done

After Phase 8:
- Deploy to Vercel: `npx vercel` (or Cloudflare Pages, or your host of choice)
- Add the production URL to Google Search Console
- Submit `sitemap.xml`
- Wait 1–2 weeks for indexing
- Monitor Search Console for crawl errors and impressions
