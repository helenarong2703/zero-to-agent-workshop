# From Zero to Agent

A one-page documentary site for NYU Shanghai Creative + Innovation's two-day
From Zero to Agent workshop, held September 12–13, 2026 as part of the AI+
initiative.

The site records the workshop's teaching arc, repeatable build loop, five
organizers, group photo, and all 18 student projects. Each project card links to
the student's original Vercel deployment.

## Live site

<https://zero-to-agent-nyushanghai.hrong25.chatgpt.site>

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validate

```bash
npm test
npm run lint
```

`npm test` builds the site and checks the workshop content, project count,
verified project URLs, group photo, and removal of the starter preview.

## Deploy to Vercel

Import the repository as a new Vercel project. The included `vercel.json`
selects the Next.js build automatically; no environment variables are needed.

## Source boundaries

The supplied workshop decks and PDF remain local source material and are not
included in the hosted site. Only the optimized workshop photos are published
with the page.
