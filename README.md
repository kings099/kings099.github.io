# Hengyu Jin — Academic Homepage

Personal academic homepage featuring research interests, publications, research
experience, a personal portrait, affiliation logos, and visitor statistics.

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

## Visual assets

- Portrait: user-supplied `df3650e055422a5cb7bc402cf1aa78db.JPG`, stored as `public/portrait.jpg`.
- Tongji logo: https://www.tongji.edu.cn/images/logo.png
- Tsinghua University crest (experience only): https://commons.wikimedia.org/wiki/File:Tsinghua_University_Logo.svg (Tsinghua University; public domain).
- Tsinghua Future Laboratory vector logo (top affiliation row): https://thfl.tsinghua.edu.cn/images/logo1.svg
- KAUST bilingual vector wordmark: https://admissions.kaust.edu.sa/images/default-source/interface/site-branding/KAUST_Logo.svg
- Aether AI logo: https://aetherlabsai.github.io/RobotAgentBench/assets/img/aetherai-wordmark-color.svg

White Tongji and Future Laboratory wordmarks are displayed in monochrome using CSS for contrast on the white page.

## Visitor locations

The footer uses a whos.amung.us map generated for this homepage (`d0mhfgjao9`).
It loads after hydration in `app/visitor-map.tsx`, records new visits, and links
to https://whos.amung.us/stats/maps/d0mhfgjao9/. No historical visits are imported.
The provider's optional third-party audience script is disabled in the widget configuration.
