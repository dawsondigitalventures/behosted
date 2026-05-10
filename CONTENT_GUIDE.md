# Be Hosted — Content Editor Guide

This guide covers adding two types of content to the website: **case studies** and **blog posts**. Everything is done through GitHub.

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
2. If a folder for the brand doesn't exist yet, you can create one — click **Add file → Create new file**, type `brand-name/placeholder.txt` as the filename (GitHub requires a file to create a folder)
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

To embed an image within the body of your case study, use this markdown syntax anywhere in the text:

```markdown
![A short description of the image](/images/brand-name/your-image.jpg)
```

The text inside `[...]` is the alt text — a brief description used by screen readers and search engines. Keep it short and descriptive, e.g. `![Styled event table with candles and florals]`.

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

---

## Adding a Blog Post

Blog posts live at `wearebehosted.co.uk/blog/your-post-name/` and are listed on the blog index page at `/blog/`. The process is nearly identical to case studies, with a simpler set of frontmatter fields.

### Step 1 — Create the file in GitHub

1. Go to the repository on GitHub
2. Navigate to `src/content/blog/`
3. Click **Add file → Create new file**
4. Type your filename — same kebab-case rules as case studies, ending in `.md`

| Filename | Live URL |
|---|---|
| `why-tablescaping-matters.md` | `wearebehosted.co.uk/blog/why-tablescaping-matters/` |
| `spring-hosting-guide-2026.md` | `wearebehosted.co.uk/blog/spring-hosting-guide-2026/` |

---

### Step 2 — Add the frontmatter

```yaml
---
title: "Your Post Title"
description: "One or two sentences summarising the post for search engines."
publishDate: 2026-05-10
heroImage: "/images/blog/your-image.jpg"
author: "Your Name"
draft: true
---
```

> Start with `draft: true`. The post won't appear on the site until you change it to `false`.

---

### Step 3 — Write the body

Same as case studies — write your content below the closing `---`. Use `##` for section headings and leave a blank line between paragraphs.

---

### Step 4 — Save the file (commit)

Scroll to the bottom of the GitHub page, optionally add a short commit message, select **Commit directly to the main branch**, and click **Commit changes**.

---

### Step 5 — Add images (if needed)

Upload images to `public/images/blog/` (or a brand-specific subfolder) following the same process as case studies. Reference them in the frontmatter or inline in the body:

```yaml
heroImage: "/images/blog/your-image.jpg"
```

```markdown
![Description of the image](/images/blog/your-image.jpg)
```

---

### Step 6 — Publish

Open the file in GitHub, click the pencil icon to edit, change `draft: true` to `draft: false`, and commit. The post will appear on the live blog listing within a minute or two.

---

## Blog Frontmatter Field Reference

| Field | Required | Type | Purpose |
|---|---|---|---|
| `title` | Yes | text | Page title and main heading |
| `description` | Yes | text | Meta description for search engines (1–2 sentences) |
| `publishDate` | Yes | date (YYYY-MM-DD) | Controls sort order on the blog listing — newest first |
| `heroImage` | No | file path | Path to a hero image, e.g. `/images/blog/image.jpg` |
| `author` | No | text | Author name displayed on the post |
| `draft` | No | true/false | `true` hides the post from the live site |
| `canonical` | No | URL | Custom canonical URL if the content exists elsewhere |
