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
- Favicon: `public/favicon.svg` (selected K pixel HJ), with ICO and Apple touch derivatives

## Visual assets

- Portrait: user-supplied `df3650e055422a5cb7bc402cf1aa78db.JPG`, stored as `public/portrait.jpg`.
- Tongji logo: https://www.tongji.edu.cn/images/logo.png
- Tsinghua University crest (experience only): https://commons.wikimedia.org/wiki/File:Tsinghua_University_Logo.svg (Tsinghua University; public domain).
- Tsinghua Future Laboratory vector logo (top affiliation row): https://thfl.tsinghua.edu.cn/images/logo1.svg
- KAUST bilingual vector wordmark: https://admissions.kaust.edu.sa/images/default-source/interface/site-branding/KAUST_Logo.svg
- Aether AI logo: https://aetherlabsai.github.io/RobotAgentBench/assets/img/aetherai-wordmark-color.svg

White Tongji and Future Laboratory wordmarks are displayed in monochrome using CSS for contrast on the white page.

## Visitor locations

The footer uses the site owner's MapMyVisitors globe embed, loaded after hydration
in `app/visitor-map.tsx`. The public widget key is provided by the owner and is
specific to this homepage. Statistics start with visits recorded by this widget;
previous whos.amung.us data is not migrated. Manage the widget at
https://mapmyvisitors.com/ using the owner's account.
