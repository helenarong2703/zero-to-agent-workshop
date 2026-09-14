import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://workshop.test/", {
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

test("server-renders the complete workshop archive", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>From Zero to Agent · NYU Shanghai<\/title>/i);
  assert.match(html, /September 12–13, 2026/);
  assert.match(html, /Creative \+ Innovation’s AI\+ initiative/);
  assert.match(html, /Learn the loop\. Build twice\. Ship something real\./);
  assert.match(html, /Eighteen ideas, live by Sunday/);
  assert.match(html, /24/);
  assert.match(html, /in-person participants/);
  assert.match(html, /60\+/);
  assert.match(html, /interested students/);
  assert.match(html, /Ship one focused, working product/);
  assert.match(html, /Helena Rong/);
  assert.match(html, /Gabrielle Chou/);
  assert.match(html, /Nil Larom/);
  assert.match(html, /Espoir Lumbu/);
  assert.match(html, /Melody Xie/);
  assert.match(html, /grateful for the support of C\+I and NYU Shanghai Arts and Sciences/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);

  assert.ok((html.match(/project-card-overlay/g) ?? []).length >= 18);
  assert.ok((html.match(/Open live project/g) ?? []).length >= 18);
});

test("includes every verified student project", async () => {
  const metadata = JSON.parse(
    await readFile(new URL("./fixtures/project-metadata.json", import.meta.url), "utf8"),
  );
  assert.equal(metadata.length, 18);
  assert.ok(metadata.every((project) => project.ok && project.status === 200));

  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.equal((page.match(/student:\s*"/g) ?? []).length, 18);
  for (const project of metadata) {
    assert.match(page, new RegExp(project.student.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    const hostname = new URL(project.url).hostname;
    assert.match(page, new RegExp(hostname.replaceAll(".", "\\.")));
  }
});

test("uses the supplied group photo and has no starter preview assets", async () => {
  const photoPaths = [
    "group-photo.webp",
    "gallery-01.webp",
    "gallery-02.webp",
    "gallery-03.webp",
    "gallery-04.webp",
    "gallery-05.webp",
    "gallery-06.webp",
  ];
  await Promise.all(
    photoPaths.map((filename) =>
      access(new URL(`../public/images/workshop/${filename}`, import.meta.url)),
    ),
  );
  const [page, gallery, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/PhotoGallery.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(page, /PhotoGallery/);
  assert.match(gallery, /\/images\/workshop\/group-photo\.webp/);
  assert.equal((gallery.match(/src: "\/images\/workshop\//g) ?? []).length, 7);
  assert.deepEqual(
    [...gallery.matchAll(/src: "\/images\/workshop\/([^".]+)\.webp"/g)].map(
      (match) => match[1],
    ),
    ["group-photo", "gallery-06", "gallery-03", "gallery-04", "gallery-02", "gallery-01", "gallery-05"],
  );
  assert.match(gallery, /Previous photo/);
  assert.match(gallery, /Next photo/);
  assert.match(gallery, /gallery-dots/);
  assert.match(layout, /From Zero to Agent · NYU Shanghai/);
  assert.match(packageJson, /"name": "zero-to-agent-workshop"/);
  assert.doesNotMatch(page + layout + packageJson, /_sites-preview|codex-preview|react-loading-skeleton/);
});
