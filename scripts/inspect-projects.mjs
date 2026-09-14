import fs from "node:fs/promises";

const projects = [
  ["Shan Leo Yong", "https://music-palz.vercel.app/"],
  ["Naomi Chang", "https://intern-job-helper.vercel.app/"],
  ["Michelle Fung", "https://graduate-salary-tracker.vercel.app/"],
  ["Melody Xie", "https://smart-flight-discovery.vercel.app/"],
  ["Echo Fan", "https://echo-sunday.vercel.app/"],
  ["Samira", "https://socratic-debugging-tutor.vercel.app/"],
  ["Yanrou Gao", "https://interactive-resume-eight-sigma.vercel.app/#certificates"],
  ["Danaya", "https://burgas-food-match.vercel.app"],
  ["Sicheng Song", "https://fashion-archive-website.vercel.app?_vercel_share=YO2NaBZbqLSJciUSNPoppSXhNXNCYGr4"],
  ["Matthew", "https://chinese-news-eta.vercel.app/"],
  ["Jae Huang", "https://soundcheck-mvp.vercel.app/"],
  ["Elena Yan", "https://flight-price-explorer.vercel.app/"],
  ["Theo Wu", "https://precimac.vercel.app/"],
  ["Lefei Yu", "https://lefei-tour.vercel.app/"],
  ["Nicholas Linz", "https://indie-film-acquisition-tracker.vercel.app/"],
  ["Sara", "https://a-dcomp.vercel.app/"],
  ["Mailys Oka", "https://perso-projectt.vercel.app/index.html"],
  ["Bo Gu", "https://proptech-brief.vercel.app/"],
];

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function meta(html, key) {
  const patterns = [
    new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${key}["'][^>]*>`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return decode(match[1].trim());
  }
  return "";
}

async function inspect([student, url]) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0 (compatible; workshop-archive-check/1.0)" },
      signal: AbortSignal.timeout(20_000),
    });
    const html = await response.text();
    const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "").trim());
    return {
      student,
      url,
      status: response.status,
      ok: response.ok,
      finalUrl: response.url,
      title,
      description: meta(html, "description") || meta(html, "og:description"),
      ogImage: meta(html, "og:image") || meta(html, "twitter:image"),
    };
  } catch (error) {
    return { student, url, status: 0, ok: false, error: String(error) };
  }
}

const results = await Promise.all(projects.map(inspect));
await fs.writeFile("tmp/project-metadata.json", JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
