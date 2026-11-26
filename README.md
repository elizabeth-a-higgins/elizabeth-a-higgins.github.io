# elizabeth-a-higgins.github.io

Personal website of Elizabeth A. Higgins. Plain HTML/CSS/JS, no build step, hosted with GitHub Pages.

## Structure

```
index.html                 Home: intro, research & project cards, about
resume.html                Resume (HTML) + PDF download
projects/
  vigilance.html           HAS Lab vigilance research
  airlift-northwest.html   Senior capstone (1st place)
  seattle-childrens.html   PM toolkit internship
css/style.css              All styling (colors at the top)
js/main.js                 Card filter + footer year
assets/
  Elizabeth-Higgins-Resume.pdf
  images/                  Put photos here
.nojekyll                  Tells GitHub Pages to serve files as-is
```

## Common edits

- **Add a project card:** copy one `<a class="card" ...>` block in `index.html`. Set `data-type="research"` or `data-type="project"` so the filter buttons work.
- **Add a detail page:** copy any file in `projects/` and edit the text.
- **Add images:** put them in `assets/images/` and replace the `<svg>` in a card's `card-media` with `<img src="assets/images/your-photo.jpg" alt="">`.
- **Update the resume PDF:** replace `assets/Elizabeth-Higgins-Resume.pdf` with a file of the same name.
- **Change colors:** edit the variables at the top of `css/style.css`.

## Publishing

1. The repository must be named `<your-github-username>.github.io` to be served at `https://<your-github-username>.github.io`.
2. Upload these files to the root of the repo (`index.html` must be at the top level, not inside a subfolder).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
