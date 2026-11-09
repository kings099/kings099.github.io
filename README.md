# Hengyu Jin — Academic Homepage

Personal academic homepage featuring research interests, publications, research
experience, selected projects, education, and awards.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Validation

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

## Updating content

- Main page content: `app/page.tsx`
- Visual design: `app/globals.css`
- Site metadata: `app/layout.tsx`
- Social preview: `public/og.png`
