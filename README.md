# Mussala Insurance Pages

Static GitLab Pages site for the UNIQA x Mussala additional medical insurance reference.

## Structure

- `public/index.html` - localized static site shell.
- `public/content/*.md` - full localized content for `UA`, `EN`, `BG`, and `RU`.
- `public/assets/content-data.js` - generated content bundle used by the static site.
- `public/source/` - original supplied source files preserved for download and audit.
- `public/assets/coverage-overview.png` - preview image rendered from the supplied PDF.
- `scripts/verify-content.mjs` - data-presence checks for all locales.
- `scripts/build-content-data.mjs` - rebuilds the generated content bundle.

## Local Check

```bash
node scripts/build-content-data.mjs
node scripts/verify-content.mjs
python3 -m http.server 4173 --directory public
```

Open `http://localhost:4173`.

## GitLab Pages

GitLab publishes the `public/` directory through the `pages` job in `.gitlab-ci.yml`.
