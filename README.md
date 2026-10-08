# Asia Student App Challenge

Website for the **Asia Student App Challenge** — [appchallenge.asia](https://appchallenge.asia).

Students build an app, individually with Xcode or Swift Playground, that can be experienced in 3 minutes offline and shows excellence in innovation, creativity, social impact, or inclusivity. Runs Nov 2026 – Jan 2027, organised by **Swift Students Cafe** with local Apple Developer communities.

## City sites

| Path | City | Language | Status |
|------|------|----------|--------|
| [`/`](index.html) | All of Asia | English | Live |
| [`/sg/`](sg/index.html) | Singapore | English | Live, registration open |
| [`/my/`](my/index.html) | Kuala Lumpur, Malaysia | English | Draft (TODOs) |
| [`/tw/`](tw/index.html) | Taipei, Taiwan | 繁體中文 | Draft (TODOs) |
| [`/jp/`](jp/index.html) | Tokyo, Japan | 日本語 | Draft |

Singapore and Malaysia are linked from the root page; other cities are commented out until they launch.

## Tech

Plain static HTML/CSS with no build step and no dependencies.

- `styles.css`: one shared stylesheet for every page
- `shared.js`: `randomizeHero()` shows a random hero illustration on city pages
- `assets/`: hand-drawn illustrations (iPad + Apple Pencil), named `<country>.<name>.png`; `ww.` = shared

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Served from `main` via GitHub Pages; `CNAME` points to `appchallenge.asia`. Merge to `main` to publish.

## Contributing

- Each city page is a copy of the same template. When you change one, change all of them, and translate the copy for `tw` and `jp`.
- Unfilled content is marked `<!-- TODO -->`. Find it with `grep -rn TODO --include=*.html .`
- To add a city, see [AGENTS.md](AGENTS.md#adding-a-new-city).

Questions: [hello@swiftinsg.org](mailto:hello@swiftinsg.org)

---

iPhone, iPad, Mac, Swift, Xcode, Swift Playground, Swift Student Challenge, and the Apple Logo are trademarks of Apple Inc., registered in the U.S. and other countries and regions.
