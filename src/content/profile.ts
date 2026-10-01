export const site = {
  name: "Sean Langshaw",
  legalName: "Sean D. Langshaw",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sdlangshaw.com",
  email: "sdl@sdlangshaw.com",
  location: "Miami–Fort Lauderdale",
  reach: "Global",
  role: "Founder and developer",
  description:
    "Sean Langshaw builds AI-driven software for treasury operations, tenant-issued stablecoins, and institutions that keep their own keys. Founder of DeFi AI Technologies, KTE, and EcoSip.",
} as const;

export const socials = [
  {
    label: "X",
    handle: "@sdlangshaw",
    href: "https://x.com/sdlangshaw",
  },
  {
    label: "LinkedIn",
    handle: "in/sdlangshaw",
    href: "https://www.linkedin.com/in/sdlangshaw",
  },
  {
    label: "GitHub",
    handle: "SDLangshaw",
    href: "https://github.com/SDLangshaw",
  },
] as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#bench", label: "Bench" },
  { href: "#practice", label: "Practice" },
  { href: "#record", label: "Record" },
  { href: "#contact", label: "Contact" },
] as const;

export type WorkLink = {
  href: string;
  label: string;
};

export type Company = {
  id: string;
  index: string;
  name: string;
  product: string;
  href: string;
  status: string;
  role: string;
  summary: string;
  why: string;
  stack: string[];
  links: WorkLink[];
  featured?: boolean;
};

export const companies: Company[] = [
  {
    id: "defiai",
    index: "01",
    name: "DeFi AI Technologies",
    product: "Sovereign Core OS",
    href: "https://defiai.finance",
    status: "Primary · design-partner phase",
    role: "Founder and architect",
    featured: true,
    summary:
      "An air-gapped financial operating system, already running across 24 internal business units. External institutions enter through design-partner pilots and land on the same system.",
    why: "Institutions are being asked to drop a model into the workflows that move money, then trust a vendor with the prompts, the positions, and the keys. Sovereign Core refuses that trade. Treasury, wallets, escrow, and the trading desk stay with the operator. gUSD and its regional pegs are tenant-issued: the institution signs the mint, rather than renting a stablecoin issuer. Private inference and agent orchestration run inside the same perimeter. When a session has to leave the chat, that context is drafted into a PDF for formal review. Consulting is the onboarding path. The product is the operating system.",
    stack: [
      "Air-gapped and self-hosted deployment",
      "Sovereign-cloud and hybrid custody options",
      "Wallets, treasury, escrow, and a trading desk",
      "Tenant-issued gUSD and regional pegs",
      "Private inference and MCP orchestration",
      "Chat context drafted to PDF for formal review",
      "TypeScript platform, Next.js public site, EVM settlement",
    ],
    links: [
      { href: "https://defiai.finance", label: "defiai.finance" },
      {
        href: "https://defiai.finance/sovereign-core",
        label: "Sovereign Core",
      },
      {
        href: "https://defiai.finance/app",
        label: "Institutional platform",
      },
    ],
  },
  {
    id: "kte",
    index: "02",
    name: "KTE",
    product: "Keeping Table Etiquette",
    href: "https://kte.finance",
    status: "In market",
    role: "Founder and developer",
    summary:
      "A worker-owned notebook for tipped hospitality. Hours, tips, and tip-outs, written down by the person who worked the shift.",
    why: "Tipped work runs on a number the worker rarely controls. The record usually lives in a manager’s drawer or a point-of-sale system they cannot export. KTE keeps a dated ledger, an effective hourly rate, and a file they can hand to a preparer, a manager, or counsel. A chat can draft that same context into a PDF when the conversation has to be reviewed as a document. Operators see location-level risk only in aggregate, so a compliance view never becomes surveillance of a named person. An attorney directory sits beside the record, with no paid placement. I built it because a sovereign treasury and a Friday closeout ask the same question: who holds the number, and can they prove it later.",
    stack: [
      "Next.js and Expo",
      "PostgreSQL and Prisma",
      "Self-hosted authentication",
      "In-app Stripe checkout",
      "k-anonymous operator dashboards",
      "Chat context drafted to PDF for formal review",
    ],
    links: [{ href: "https://kte.finance", label: "kte.finance" }],
  },
  {
    id: "ecosip",
    index: "03",
    name: "EcoSip",
    product: "Reusable cup network",
    href: "https://ecosip.io",
    status: "In market",
    role: "Founder and developer",
    summary:
      "Software for a cup that comes back: registration, refills, rewards, and a console a coffee brand can run.",
    why: "A single-use cup is a waste problem and a brand problem. EcoSip is the operating loop around the other kind of cup. A person registers it, refills it on a program, and can see the waste they avoided. A coffee company runs inventory, deposits, and the environmental record from its own console. The public site, the consumer app, and the business app are separate surfaces in one monorepo, with co-brand theming so a shop can look like itself inside a shared network. I built it to turn a sustainability claim into software a brand can license.",
    stack: [
      "Next.js monorepo on pnpm and Turborepo",
      "PostgreSQL and Prisma",
      "Self-hosted authentication",
      "Consumer, business, and marketing apps",
      "Co-brand theming for coffee operators",
    ],
    links: [{ href: "https://ecosip.io", label: "ecosip.io" }],
  },
];

export type BenchItem = {
  name: string;
  when: string;
  status: string;
  summary: string;
  href?: string;
  hrefLabel?: string;
};

export const bench: BenchItem[] = [
  {
    name: "REIT DAO",
    when: "2023",
    status: "Private · unfinished",
    summary:
      "Tokenized real estate. Solidity contracts and a dapp for claim, mint, and stake. The founder work that pointed at real-world assets. The property thread continues inside DeFi AI as the Global Property Network. The original repositories are still private.",
  },
  {
    name: "Global Property Network",
    when: "2024–2025",
    status: "Private · unfinished",
    summary:
      "A property-network application started as its own product. The live direction is the GPN surface inside Sovereign Core, not this standalone repo.",
  },
  {
    name: "Chat with PDF",
    when: "2024",
    status: "Continued in DeFi AI and KTE",
    summary:
      "Started as an AI workspace for uploading documents and talking to them. Unfinished as its own product. The part that held up moved into DeFi AI and KTE: the chat is the working context, and the system drafts that context into a PDF when the record has to be reviewed formally.",
  },
  {
    name: "Co-host",
    when: "2024",
    status: "Private · unfinished",
    summary:
      "Operations software for people co-hosting on Airbnb and other marketplaces.",
  },
  {
    name: "Auto-auction study",
    when: "2024",
    status: "Private · unfinished",
    summary:
      "A study of bid manipulation in online auto auctions. Research software, not a company.",
  },
];

export const practice = [
  {
    title: "Treasury operations",
    body: "Wallets, sweeps, escrow, and the desk an institution actually runs. The product starts at the money, not at a chatbot wrapped around a spreadsheet.",
  },
  {
    title: "Stablecoin settlement",
    body: "Tenant-issued gUSD and regional pegs, same-currency, under the operator’s signature. The issuer is the institution. A third party does not hold the mint.",
  },
  {
    title: "Agentic systems",
    body: "Inference, tool use, and MCP orchestration that stay on hardware the operator controls. Prompts and positions do not phone home.",
  },
  {
    title: "Product engineering",
    body: "TypeScript, Next.js, PostgreSQL, Prisma, self-hosted auth, Stripe, and Expo. One person can hold the public site, the API, the ledger, and the phone app.",
  },
  {
    title: "Honest system status",
    body: "Live desks and environment-gated rails are labeled as what they are. A design-partner pilot is not described as a general launch.",
  },
  {
    title: "Founder range",
    body: "The company, the pricing, the data model, and the interface sit in the same hands. Navy air traffic control before that: procedure, real time, and a record that has to be right.",
  },
] as const;

export const record = {
  lead: "The formal credentials run from January through July 2024: front end, generative AI, AWS, then enterprise architecture. The developer on this page was built by shipping the companies above, on top of a Navy career that was already about high-stakes procedure.",
  chapters: [
    {
      when: "United States Navy",
      title: "Air traffic controller",
      body: "Former Navy AC. The work was real-time judgment, a shared picture, and a record that other people act on. That habit is still the engineering standard: say what is live, say what is waiting, and do not invent a fill.",
    },
    {
      when: "January–February 2024",
      title: "Meta Front-End Developer",
      body: "Meta’s Front-End Developer Specialization, issued February 2024. The track under it: introduction to front-end development, HTML and CSS in depth, JavaScript, version control, React basics, advanced React, principles of UX/UI design, and the front-end capstone.",
    },
    {
      when: "February 2024",
      title: "IBM generative AI",
      body: "Two IBM specializations: Generative AI Fundamentals, and Generative AI for Software Developers. Under them: introduction and applications, prompt engineering, foundation models and platforms, and impact, considerations, and ethics. That is the formal layer under the agent work in DeFi AI and KTE.",
    },
    {
      when: "June 2024",
      title: "AWS cloud",
      body: "Amazon Web Services, from practitioner foundations through architecture. Cloud Practitioner Essentials, Cloud Technical Essentials, the Certified Cloud Practitioner exam prep, Architecting Solutions on AWS, and Introduction to Designing Data Lakes on AWS. Closed with two specializations: AWS Cloud Solutions Architect, and AWS Cloud Technology Consultant.",
    },
    {
      when: "July 2024",
      title: "TOGAF 10 Foundation",
      body: "Issued by EDUCBA. Enterprise architecture, on top of the cloud and software credentials: how a system is structured before it is coded.",
    },
    {
      when: "2023 → now",
      title: "Companies, in order of the work",
      body: "REIT DAO, tokenizing real estate. eMCycles, an electric motorcycle company, including a manufacturing-facility proposal for Miramar. Then the three builds on this page: EcoSip, KTE, and DeFi AI Technologies, where the current architecture work lives.",
    },
  ],
} as const;

export const layers = [
  { label: "Intelligence", detail: "Private inference · MCP · agent runbooks" },
  { label: "Operations", detail: "Treasury · escrow · wallets · trading" },
  { label: "Settlement", detail: "Tenant-issued gUSD · regional pegs · rails" },
] as const;
