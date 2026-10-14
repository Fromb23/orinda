# Mr. Orinda — Teacher Portfolio

A responsive professional portfolio for Ogira Mark Orinda, a Mathematics and Physics educator. The site is built with Next.js App Router using JavaScript, JSX and a custom CSS design system.

## Local setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Available scripts

- `npm run dev` — start the local development server.
- `npm run lint` — run the project’s ESLint checks.
- `npm run build` — create an optimised production build.
- `npm start` — serve the production build after running `npm run build`.

## Editing content

Verified profile, contact, experience, education and leadership data is centralised in `src/data/profile.js`. Document titles and URLs are defined in `src/data/documents.js`. Page sections are reusable components under `src/components/`.

The design system and responsive styles live in `src/app/globals.css`. Site metadata is configured in `src/app/layout.js`.

## Assets

- Portrait: `public/images/`
- CV, merged academic documents and individual certificate PDFs: `public/documents/`

All document links use same-origin public URLs, so PDF viewing and downloads do not depend on external services. Replace an asset only with the corresponding verified document and keep its filename or update the matching metadata entry.

## Production check

Run the following before publishing:

```bash
npm run lint
npm run build
```

Deployment configuration is intentionally omitted so the repository can be connected to the chosen platform later.

When a production domain is assigned, set `NEXT_PUBLIC_SITE_URL` to its full HTTPS origin. This gives Open Graph images an absolute URL without hard-coding a deployment domain in the source.
