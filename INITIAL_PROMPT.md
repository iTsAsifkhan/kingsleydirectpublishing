# Prompts for Claude Code Sessions

Copy-paste these. Don't improvise — they're tuned to load the right context every time.

---

## 🚀 First-ever session (kickoff)

Use this **once**, the first time you open the project in Claude Code.

```
I'm building a pixel-perfect Next.js replica of bookpublishingpartner.com. 
The full design system has already been extracted and lives in this repo.

Before you do anything, read these files in order:
1. CLAUDE.md — project rules, stack, conventions
2. BUILD_PLAN.md — the task list
3. SEO_CHECKLIST.md — per-page SEO requirements
4. reference/DESIGN_SYSTEM.md — every color, shadow, transition, hover state
5. reference/screenshot.png — what we're building
6. PROGRESS.md — currently empty, you'll be the first to update it

The stack is locked: Next.js 15 App Router + TypeScript + Tailwind 4 + Swiper + Framer Motion. 
No jQuery, no Slick, no WOW.js. Server Components by default, "use client" only when needed.

Once you've read those, confirm you understand the project, then start with Phase 0 
(project setup) in BUILD_PLAN.md. Do tasks 0.1 through 0.12 in this session.

After each task, briefly note what you did. At the end of the session:
- Update PROGRESS.md with what got done
- Commit with a conventional commit message including task IDs
- Tell me what task to start from next time
```

---

## 🔄 Resume prompt (every subsequent session)

Use this **every time** you start a new Claude Code session — including after a context reset, hitting message limits, switching machines, or just coming back the next day.

```
Resuming work on this Next.js project. Read CLAUDE.md, BUILD_PLAN.md, and PROGRESS.md 
to get up to speed.

Then check PROGRESS.md § "Last completed task ID" and continue from the next 
unchecked task in BUILD_PLAN.md. Do as many tasks as fit comfortably in this session — 
don't try to power through a whole phase.

Before you write any code, always check reference/DESIGN_SYSTEM.md and 
reference/site_custom.css for exact values. Don't invent colors, shadows, paddings, 
or timings.

For any new page or section, run through SEO_CHECKLIST.md before marking it done.

At the end of the session: update PROGRESS.md, commit, and tell me what task ID 
to start from next time.
```

---

## 🩹 Stuck-in-the-weeds prompt (when something doesn't look right)

Use this when a section is built but the visuals don't match.

```
The [section name] doesn't match the reference. Compare what's in our code to:
- reference/screenshot.png for the visual target
- reference/site_custom.css — grep for the relevant .index-wrap-N class
- reference/page_structure.html for DOM nesting

Identify the gap and fix it. Don't guess — pull the actual values from the 
reference files.
```

---

## 🔍 SEO audit prompt

Run this after building any page, before committing.

```
Run through SEO_CHECKLIST.md against the [page name] page. For each item:
- Confirm it's in place, OR
- Fix it if it's missing, OR
- Flag it if you can't fix it (e.g., needs an asset I haven't provided)

Show me the final checklist with each item marked ✅, ❌, or ⚠️.
```

---

## 🆘 "I think I lost progress" prompt

```
Run `git log --oneline -20` and tell me what's been committed. Then check 
PROGRESS.md against the actual state of the codebase. If they're out of sync, 
update PROGRESS.md to reflect what's actually built.
```

---

## ✋ End-of-session prompt

Run this **before** you close the chat or hit limits.

```
Wrap up: 
- Commit anything uncommitted with a clear conventional-commit message
- Update PROGRESS.md with what got done this session, what's in progress, 
  and what task ID to start from next time
- List any non-obvious decisions you made
- Note any blockers I need to resolve before next session (missing assets, 
  unclear specs, etc.)
```

---

## 🎯 Single-section build prompt (when you want to do one specific section out of order)

```
Skip ahead and build Section [N] from BUILD_PLAN.md (tasks [N.x.1] through [N.x.N]).

Use:
- reference/screenshot.png for the visual
- reference/site_custom.css — grep for the relevant .index-wrap-N rules
- reference/DESIGN_SYSTEM.md for tokens
- lib/content.ts for data (add new entries if needed)

Don't skip the SEO_CHECKLIST step at the end. Don't invent values.
```

---

## How to NOT lose work

1. **`PROGRESS.md` is sacred.** Update it at the end of every session. If you hit a context limit mid-session, the next session reads this and picks up clean.
2. **Commit after every working chunk.** Even tiny ones. The git log is your real progress record.
3. **Reference files are read-only.** Treat `reference/` as immutable.
4. **Keep this prompt file checked in.** Don't memorize the prompts — copy-paste from the file.
5. **If a session feels off** (Claude is making things up, ignoring conventions, breaking patterns), stop, commit, and start fresh with the resume prompt. A confused session burns budget faster than a clean one.
6. **For tricky sections, screenshot what you're seeing in the browser** and paste it into the chat alongside `reference/screenshot.png` — Claude can compare them visually.
