# Be Hosted — Content Editor Guide

This guide is for the Be Hosted team adding new case studies to the website. Everything is done through GitHub — no coding knowledge or local setup needed.

---

## Adding a New Case Study

### Step 1 — Create the file in GitHub

1. Go to the repository on GitHub
2. Navigate to `src/content/case-studies/`
3. Click **Add file → Create new file**
4. In the filename box at the top, type your filename (see naming rules below)

Name the file using **kebab-case** — all lowercase, words separated by hyphens, ending in `.md`. The filename becomes the URL.

| Filename | Live URL |
|---|---|
| `drink-nonni.md` | `wearebehosted.co.uk/case-studies/drink-nonni/` |
| `mama-vino-chalkboard-to-candlelight.md` | `wearebehosted.co.uk/case-studies/mama-vino-chalkboard-to-candlelight/` |

---

### Step 2 — Add the frontmatter

Every case study file must start with a block of metadata between two sets of `---`. This is called **frontmatter**. Paste this template at the very top of the file and fill in the values:

```yaml
---
title: "Brand Name: Subtitle Here"
description: "One or two sentences describing the case study for search engines."
publishDate: 2026-01-15
brandName: "Brand Name"
subtitle: "Subtitle Here"
heroImage: "/images/brand-name/hero-image.jpg"
showHeroOnPage: false
featured: true
draft: true
---
```

> Start with `draft: true` while you're writing. The page won't appear on the live site until you change it to `false`.

---

### Step 3 — Write the body

Directly below the closing `---`, write the case study content. Use `##` for section headings and leave a blank line between paragraphs.

```markdown
---
... frontmatter above ...
---

Opening paragraph here. Set the scene.

## Section heading

More content here.

## Another section

Continue as needed.
```

You can have as many sections as you like. Look at the existing case studies for tone and structure guidance.

---

### Step 4 — Save the file (commit)

When you're done writing, scroll to the bottom of the GitHub page. You'll see a **Commit changes** section:

1. Leave the commit message as-is or write a short note like `Add Drink Nonni case study`
2. Select **Commit directly to the main branch**
3. Click **Commit changes**

The file is now saved. Because `draft: true` is set, nothing will appear on the live site yet.

---

### Step 5 — Add images

To upload images for the case study:

1. In the repository, navigate to `public/images/`
2. If a folder for the brand doesn't exist yet, you can create one — click **Add file → Create new file**, type `brand-name/placeholder.txt` as the filename (GitHub requires a file to create a folder), then delete the placeholder later
3. To upload images, navigate into the brand folder and click **Add file → Upload files**
4. Drag in your images and commit

Organise images like this:

```
public/
  images/
    brand-name/
      hero-image.jpg
      another-image.jpg
```

Then reference them in your frontmatter:

```yaml
heroImage: "/images/brand-name/hero-image.jpg"
```

Images should be JPG or WebP, compressed for web (aim for under 300kb per image).

---

### Step 6 — Publish

When the case study is ready to go live:

1. Open the case study file in GitHub (`src/content/case-studies/your-file.md`)
2. Click the pencil icon to edit
3. Change `draft: true` to `draft: false` (or delete the `draft` line entirely)
4. Commit the change

The site will rebuild automatically within a minute or two and the case study will appear live, including on the homepage if it's one of the three most recent by `publishDate`.

---

## Frontmatter Field Reference

| Field | Required | Type | Purpose |
|---|---|---|---|
| `title` | Yes | text | Full page title — used in the browser tab and search engine results |
| `description` | Yes | text | Short summary shown in search engine results (aim for 1–2 sentences) |
| `publishDate` | Yes | date (YYYY-MM-DD) | Controls the sort order — newer dates appear first on the homepage |
| `brandName` | No | text | Displayed as the main heading (H1) on the page. Use a cleaner short form if your `title` is long |
| `subtitle` | No | text | Displayed below the main heading as a secondary line |
| `heroImage` | No | file path | Path to the hero image, e.g. `/images/nonni/nonni-hero.jpg` |
| `showHeroOnPage` | No | true/false | Set `true` to display the hero image at the top of the case study page |
| `featured` | No | true/false | Mark as featured. Currently all non-draft case studies appear on the homepage |
| `draft` | No | true/false | `true` hides the page from the live site. Remove or set `false` to publish |
| `canonical` | No | URL | Only needed if the content exists elsewhere and you want to specify the canonical URL for SEO |

---

## Real Example

Here is the complete file for the Mama Vino case study:

**Filename:** `mama-vino-chalkboard-to-candlelight.md`

```markdown
---
title: "Mama Vino: Chalkboard to Candlelight"
description: "How Behosted translated Mama Vino's handwritten brand identity into an intimate, community-driven wine tasting experience at Aime Wine Studio."
publishDate: 2025-03-01
heroImage: ""
showHeroOnPage: false
brandName: "Mama Vino"
subtitle: "Chalkboard to Candlelight"
featured: true
draft: false
---

Some brands begin with a strategy deck. Mama Vino began with a chalkboard.

When Ella first designed the Mama Vino logo, it was sketched by hand, slightly messy, full of personality...
```

---

## Quick Reference: Common Issues

**My case study isn't showing on the site**
- Check `draft: false` is set (not `true`)
- Check the `publishDate` is a valid date in `YYYY-MM-DD` format
- Make sure the file is inside `src/content/case-studies/` and ends in `.md`
- The site may take a minute or two to rebuild after committing — wait and refresh

**The URL doesn't look right**
- The URL comes directly from the filename — rename the file in GitHub to fix it
- Use only lowercase letters, numbers, and hyphens in the filename

**The hero image isn't showing**
- Make sure the image file is uploaded to the `public/images/` folder
- The path in `heroImage` must start with `/` (e.g. `/images/brand/image.jpg`)
- Set `showHeroOnPage: true` if you want it displayed on the case study page itself
