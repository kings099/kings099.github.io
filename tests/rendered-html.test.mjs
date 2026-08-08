import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("statically exports Hengyu Jin's academic homepage", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Hengyu Jin \| Academic Homepage<\/title>/i);
  assert.match(html, /Publications &amp; preprints/);
  assert.match(html, /Final Checkpoints Are Not Enough/);
  assert.match(html, /ACL Rolling Review/);
  assert.match(html, /https:\/\/aclanthology\.org\/2026\.findings-acl\.226\//);
  assert.match(html, /10\.1109\/TAFFC\.2026\.3709312/);
  assert.match(html, /10\.1145\/3772363\.3798333/);
  assert.match(html, /scholar\.google\.com\/citations\?user=R7hqHtEAAAAJ/);
  assert.match(html, /https:\/\/github\.com\/kings099/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("includes the downloadable CV", async () => {
  await access(new URL("../out/Hengyu_Jin_CV.pdf", import.meta.url));
});
