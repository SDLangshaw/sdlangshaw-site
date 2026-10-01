# Sean Langshaw

Personal site for Sean D. Langshaw, founder and developer. It presents DeFi AI Technologies, KTE, and EcoSip, then the unfinished private side projects, then the short record of how the practice was built.

The site is a Next.js App Router application. Copy lives in `src/content/profile.ts`. There is no database. The page is static content, so a Vercel deploy does not need Postgres, Neon, or secrets.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Deploy

Connect this repository to Vercel, or from the project root:

```bash
vercel
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin, without a trailing slash, once the domain is attached. Until then the canonical URL falls back to `https://sdlangshaw.com`.

## Stack

Node.js, TypeScript, Next.js 16, React 19, Tailwind CSS 4, pnpm. PostgreSQL is the database behind KTE and EcoSip. This portfolio does not query one.
