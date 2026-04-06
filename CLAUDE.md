# TPX Lab Website Maintenance Guide

This is the source for **energyzhao.github.io** — Bo Zhao's research group site at University of Houston.
Deployed automatically by GitHub Pages on every push to `main`.

## Tech stack

Plain static HTML + CSS + JS. No Jekyll / Hugo / build step.
**To preview locally**: just open any `.html` file in a browser, or run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000`.

## File map

| File | Purpose |
|------|---------|
| `index.html` | Homepage: bio, slideshow, **Group News** table, honors |
| `publications.html` | Full publication list grouped by year + project highlights |
| `research.html` | Research directions |
| `people.html` | Current members + alumni |
| `teaching.html` | Courses |
| `opening.html` | Recruiting / open positions |
| `personal/` | Personal subpages |
| `css/`, `js/`, `images/` | Assets |
| `pdf/` | All paper PDFs linked from `publications.html` and news items |

## Common edits

### 1. Add a news item (index.html)

News lives in a `<table>` starting around **line 189** of `index.html`, newest at top.
Each item is a single `<tr>`:

```html
<tr>
    <td style="width: 100px; vertical-align: top; padding: 2px 5px;">MM/DD/YYYY:</td>
    <td style="vertical-align: top; padding: 2px 5px;"> News text here.</td>
</tr>
```

Conventions:
- **Date format**: `MM/DD/YYYY` (e.g. `02/23/2026`)
- **Highlight important items** (awards, big papers, grants) by wrapping the inner text in `<b>...</b>`
- **Link to papers/press**: `<a href="https://..." target="_blank">Link</a>`
- **Link to local PDF**: `<a href="pdf/filename.pdf" target="_blank">PDF</a>`
- Insert new `<tr>` at the **top of the table**, right after `<table ...>` opening, so newest stays first
- Old items get demoted to the **Archived News** `<details>` block (starts around line 386) when the top list gets too long

### 2. Add a publication (publications.html)

Publications list starts around **line 192** inside `<ol reversed>`.
Each year has a `<h4 class="pub-year-head">YEAR</h4>` divider, then `<li>` entries under it.

Standard entry format:

```html
<li>
    LastName, F., LastName, F., and <b>Zhao, B.</b>, "Paper Title,"
    <em class="journal"> Journal Name</em>, Vol. X, p. Y (YEAR).
    [<a href="pdf/short-name.pdf" target="_blank">PDF</a>]
</li>
```

Author conventions:
- **Bo's name** always bolded: `<b>Zhao, B.</b>`
- **Corresponding author**: append `^` → `<b>Zhao, B.^</b>`
- **Equal contribution**: append `*` → `Noh, B.*, Jafari Ghalekohneh, S.*`
- **Submitted / under review**: use `submitted, (YEAR).` in place of journal info
- **Press coverage**: append `Covered by <a href="...">Outlet</a>, ...` after the citation
- **Patent note**: append `<b>[provisional application submitted]</b>`

Workflow when adding a new paper:
1. Put the PDF in `pdf/` with a short descriptive name (e.g. `Sina_PRR.pdf`, `Bardia_ACSPhotonics.pdf`)
2. Insert `<li>` at the top of the correct year block in `publications.html`
3. If the paper deserves a news item, also add to `index.html` News
4. Commit both changes together

### 3. Add / update a lab member (people.html)

Read `people.html` first — it has both current members and alumni sections. Follow the existing card/row structure. New headshots go in `images/`.

### 4. Update research directions (research.html)

Project cards in `publications.html` also mirror research themes (the `pub-proj-head` h4 blocks at lines 71-160). Keep the two pages consistent when adding a new theme.

## Git workflow

Always run from inside this `website/` directory:

```bash
# 1. Sync latest
git pull

# 2. Make edits

# 3. Check what changed
git status
git diff

# 4. Commit + push
git add -A
git commit -m "update news: <brief description>"
git push
```

GitHub Pages rebuilds automatically within ~1-2 minutes of the push.

### Commit message style

Match existing history (terse, imperative):
- `update news`
- `Update index.html`
- `add publication: Sina PRR 2025`
- `update people: welcome America`

## Gotchas

- **`.DS_Store`** files are currently tracked in this repo (legacy). Don't add more; ideally add a `.gitignore` later.
- **File paths are case-sensitive** on GitHub Pages (Linux) even though macOS is case-insensitive. Double-check `pdf/` filenames match exactly.
- **Closing tag typos**: I noticed some `</td></b>` instead of `</b></td>` in existing news entries. They render fine in browsers but are invalid HTML — don't copy that pattern, use `<td>...<b>...</b></td>` correctly.
- **No build step** means you can't use template variables — every change is a direct HTML edit. When adding many similar items, be careful to keep the `<tr>` / `<li>` structure consistent.
- **Large PDFs**: keep paper PDFs under ~10 MB when possible. GitHub Pages has bandwidth limits.

## Quick commands for Claude

When the user says:
- **"add a news item: ..."** → edit `index.html`, insert `<tr>` at top of news table
- **"add publication: ..."** → add PDF to `pdf/`, edit `publications.html` year block
- **"we have a new student ..."** → edit `people.html`
- **"push the website"** → `git status` → `git add -A` → `git commit -m "..."` → `git push`
- **"pull latest"** → `cd` here → `git pull`

Always show a `git diff` before committing so Bo can sanity-check.
