# Website of Dr. Rana Salman Anwar

A free website hosted on GitHub Pages, in the Scholar theme. Everything is editable in your web browser. No software is needed.

---

## What is in this folder

| File / folder | What it holds | How often you edit it |
|---|---|---|
| `assets/js/data.js` | **Publications, gallery photos, headline numbers, email, live-Scholar link** | Often |
| `index.html` | Page text: biography, experience, research areas, services, contact details | Sometimes |
| `img/` | All photos | When you add photos |
| `assets/css/style.css` | Colours, fonts, layout (colour codes are at the top) | Rarely |
| `assets/js/main.js` | How the site behaves (tabs, filters, lightbox) | Never |
| `.github/workflows/update-scholar.yml` | Daily automatic Google Scholar update (Part 4) | Never |
| `data/scholar.json` | Latest Scholar numbers, written automatically | Never |

---

## Part 1 — Put the site online (one time, about 10 minutes)

1. Create a free account at **github.com**. Your username becomes part of your web address, for example `ranasalmananwar`.
2. Click **+** (top right) → **New repository**.
   - Name it exactly **`yourusername.github.io`**, e.g. `ranasalmananwar.github.io`.
   - Choose **Public** → **Create repository**.
3. On the next page, click **uploading an existing file**.
4. Open this `rsa-website` folder on your computer. Select **everything inside it** (the `assets`, `img` and `scholar-widget` folders plus all the files) and drag it into the browser window.
   - Upload the contents of the folder, not the folder itself.
5. Wait for the upload to finish, then click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
7. After 1–2 minutes your site is live at **https://yourusername.github.io**.

Individual tabs have their own links, which you can share directly, e.g. `https://yourusername.github.io/#publications` or `#training`.

---

## Part 2 — Edit the site (any time)

To edit any file: open it on github.com → click the **pencil icon** (Edit) → make the change → click **Commit changes**. The live site updates in about a minute; refresh with **Ctrl + F5**.

### Add a new paper
Open `assets/js/data.js`, find `publications: [`, copy any one line, paste it as a new line, and change the values:

```js
{ year: 2027, title: "Your new title", authors: "Anwar, R. S., Ahmed, R. R., & Streimikiene, D.", journal: "Journal name, 12(3), 45–67", doi: "10.1002/xxxx", link: "", tags: ["HEC W", "ABDC A", "IF 8.5"], firstAuthor: true, award: "" },
```

- Keep the comma at the end of the line.
- Your name is made **bold** automatically.
- Papers are sorted newest first automatically, and the total count updates by itself.
- Then also update `articles:` in the numbers block near the top of the same file.

### Update citations / h-index
In `data.js`, change the values under `metrics:`. Or switch on the live box in Part 4 and they update by themselves.

### Add a photo to the gallery
1. Open the `img` folder on github.com → **Add file → Upload files** → drop the photo.
   - Give it a simple name, such as `keynote-2027.jpg`.
2. In `data.js`, add a line under `gallery: [`:

```js
{ file: "keynote-2027.jpg", category: "conf", caption: "Keynote speaker, XYZ Conference, Lahore, 2027" },
```

Categories: `honours`, `training`, `conf` (Conferences & Examinations), `lead` (Academic Leadership), `students`.

Tip: resize photos to about 1400 pixels wide before uploading so the site stays fast.

### Change page text (biography, experience, services…)
Open `index.html`, press **Ctrl + F** in the editor and search for the sentence you want to change. Edit only the words between the tags, e.g. `<p>edit this text</p>`.

Each tab is a block that starts with a comment like `<!-- ============ EXPERIENCE ============ -->`.

### Change colours or fonts
Open `assets/css/style.css`. The first block (`:root{ ... }`) lists every colour:

| Setting | Used for |
|---|---|
| `--navy` | Main dark background (aubergine) |
| `--band` | Second dark background (plum) |
| `--accent` | Gold highlight |
| `--accent-2` | Teal highlight |

Change a hex code and the whole site follows.

---

## Part 3 — Use it with Google Sites

GitHub Pages hosts this design exactly as built. Google Sites cannot host custom HTML files, but you can still use your Google Site:

- **Option A — Link (recommended):** on your Google Site, add a button or menu link to `https://yourusername.github.io`.
- **Option B — Embed the whole site:**
  1. In Google Sites: **Insert → Embed → By URL** → paste `https://yourusername.github.io` → choose **Whole page** → **Insert**.
  2. Drag the corners of the box to full width and a tall height.
  3. Publish.

  The site then appears inside your Google Site. Visitors scroll within the frame, so Option A gives the cleaner experience.
- **Custom domain (optional):** if you buy a domain such as `ranasalmananwar.com`, add it under **Settings → Pages → Custom domain** in GitHub.

---

## Part 4 — Live Google Scholar numbers (automatic)

The file `.github/workflows/update-scholar.yml` makes GitHub read your Google Scholar profile every day at about 06:17 (Pakistan time). It saves the results in `data/scholar.json`. The website then shows your latest citations, h-index and i10-index, plus a "Cited by" count on each paper. The Publications tab also gets a "Most cited" filter.

- **Run it now:** **Actions** tab → **Update Google Scholar data** → **Run workflow**.
- **Check it:** a green tick means success. `data/scholar.json` appears in the repository and the home page shows "Live from Google Scholar · updated …".
- **If Google Scholar blocks a day's read:** the run still shows a tick, with a yellow warning. The site keeps the previous numbers.
- **If the run fails with a red cross mentioning "permission":** go to **Settings → Actions → General → Workflow permissions**, choose **Read and write permissions**, **Save**, and run it again.
- **Manual fallback:** until the first successful run, the site shows the numbers under `metrics:` in `data.js`.

## Part 5 — Enquiry forms (Contact and Training tabs)

Both forms send the enquiry straight to the email set in `data.js` (`email:`), using the free FormSubmit service.

- **One-time activation:** send yourself a test message from the website. FormSubmit then emails you an **Activate Form** link; click it, checking your spam folder too. Until you do, visitors see a message asking them to email you directly.
- **Optional:** after activation, FormSubmit can give you a random code that hides your email address. Add it to `data.js` as `formKey: "the-code",` on a new line under `email:`.

## Notes

- Photos are named by event, such as `phdconv.jpg`, `ural.jpg` and `iqraflyer.jpg`. Their captions are in `data.js`.
- If something breaks after an edit, a missing comma or quote in `data.js` is the usual cause. On GitHub, open the file's **History** to see or restore the previous version.
