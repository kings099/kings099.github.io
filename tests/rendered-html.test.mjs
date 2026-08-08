import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Hengyu Jin's academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hengyu Jin \| Academic Homepage<\/title>/i);
  assert.match(html, /Selected publications/);
  assert.match(html, /Final Checkpoints Are Not Enough/);
  assert.match(html, /https:\/\/aclanthology\.org\/2026\.findings-acl\.226\//);
  assert.match(html, /10\.1109\/TAFFC\.2026\.3709312/);
  assert.match(html, /10\.1145\/3772363\.3798333/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("includes the downloadable CV", async () => {
  await access(new URL("../public/Hengyu_Jin_CV.pdf", import.meta.url));
});
