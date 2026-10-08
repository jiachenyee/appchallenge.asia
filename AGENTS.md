# AGENTS.md

Guidance for AI coding agents working in this repo.

## What this is

Static marketing site for the **Asia Student App Challenge** (appchallenge.asia), run by Swift Students Cafe. Plain HTML + one CSS file + one tiny JS helper. **No build step, no package manager, no framework, no tests.** Served as-is (GitHub Pages, custom domain via `CNAME`).

## Layout

```
index.html        Root landing page (all-Asia), links to city pages
sg/index.html     Singapore  — live, the reference page (lang="en")
my/index.html     Malaysia   — draft, many TODOs (lang="en")
tw/index.html     Taiwan     — Traditional Chinese (lang="zh-Hant-TW"), body.no-image-save
jp/index.html     Japan      — Japanese (lang="ja")
styles.css        Single shared stylesheet (dark theme, mobile-first, max width 560px)
shared.js         randomizeHero(images): picks a random #hero-accessory image
assets/           Hand-drawn PNG/SVG art, named <prefix>.<name>.<ext>
CNAME             appchallenge.asia
```

Asset prefixes: `ww.` shared/worldwide, `sg.` `my.` `tw.` `jp.` `ph.` per country.

## City page structure

Every city page is a copy of the same template. Sections, in order:
hero (accessory + globe + logo, Register button, dates) → What? → Who? → When? (`ol.timeline`) → Not from X? (`hidden`) → Organisers → Questions? → footer → `randomizeHero([...])`.

Keep pages structurally in sync. When changing one section's markup, apply the same change to every city page (`sg`, `my`, `tw`, `jp`) and translate copy for `tw`/`jp` rather than leaving English.

## Conventions

- City pages reference shared files with `../` (`../styles.css`, `../assets/…`, `../shared.js`); root page uses no prefix. `randomizeHero` hardcodes `../assets/`, so it only works from city pages.
- Decorative images: `alt=""` + `aria-hidden="true"`. Meaningful images get real alt text.
- Sections use `aria-labelledby` pointing at their `h2` id.
- British spelling in English copy ("organised", "fulfil").
- Indentation is inconsistent (2 and 4 spaces); match the surrounding block, don't reformat files.
- Placeholder content is marked `<!-- TODO: … -->` (mostly in `my/` and `tw/`). `grep -rn TODO --include=*.html .` lists them. Don't invent real links, emails, or dates — leave TODOs for the organisers.
- Commented-out / `hidden` city cards are intentional: cities go live by uncommenting, not by adding new markup.

## Adding a new city

1. Copy `sg/index.html` to `<cc>/index.html`; set `lang`, `<title>`, meta description.
2. Add `<cc>.logo.svg`, `<cc>.globe.png`, accessory art to `assets/`.
3. Update hero image paths and the `randomizeHero([...])` list.
4. Link it from the `.cities` grid in root `index.html`.

## Verify changes

No test suite. Serve locally and look at it, including at ~375px width:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/ and each city path. Check links with `../` resolve and the hero accessory loads.

## Git

Default branch `main`, work lands via PRs on `github.com/jiachenyee/appchallenge.asia`. Commit style: `feat: …` / `fix: …`.
