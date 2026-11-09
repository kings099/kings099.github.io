import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("statically exports Hengyu Jin's academic homepage", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Hengyu Jin<\/title>/i);
  assert.match(html, /Publications &amp; preprints/);
  assert.match(html, /Final Checkpoints Are Not Enough/);
  assert.match(html, /ACL Rolling Review/);
  assert.match(html, /https:\/\/aclanthology\.org\/2026\.findings-acl\.226\//);
  assert.match(html, /10\.1109\/TAFFC\.2026\.3709312/);
  assert.match(html, /10\.1145\/3772363\.3798333/);
  assert.match(html, /scholar\.google\.com\/citations\?user=R7hqHtEAAAAJ/);
  assert.match(html, /https:\/\/github\.com\/kings099/);
  assert.match(html, /mailto:jhy99@tongji\.edu\.cn/);
  assert.doesNotMatch(html, /hengyuking@gmail\.com/);
  assert.doesNotMatch(html, /Hengyu_Jin_CV\.pdf|Curriculum Vitae|Download CV/i);
  assert.match(html, /Concord: An Interactive Environment/);
  assert.match(html, /RobotAgentBench/);
  assert.match(html, /for Supporting Emotion Regulation/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("does not publish the CV PDF", async () => {
  await assert.rejects(access(new URL("../out/Hengyu_Jin_CV.pdf", import.meta.url)), { code: "ENOENT" });
});
