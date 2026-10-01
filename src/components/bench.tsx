import { bench } from "@/content/profile";
import { Outbound } from "@/components/outbound";

export function Bench() {
  return (
    <section id="bench" aria-labelledby="bench-heading" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            02 — Bench
          </p>
          <h2
            id="bench-heading"
            className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Private work, left unfinished.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            These are original repositories, not the public forks on GitHub.
            They are not companies in market, and their old preview deploys no
            longer serve. REIT DAO and the property network became the Global
            Property Network inside DeFi AI. Chat with PDF became the step, in
            DeFi AI and KTE, that drafts a chat into a PDF for formal review.
          </p>
        </div>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {bench.map((item, index) => (
            <li
              key={item.name}
              className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr] sm:gap-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-hold">
                {String(index + 1).padStart(2, "0")}
                <span className="mt-1 block text-muted">{item.when}</span>
              </p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl tracking-tight">
                    {item.name}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {item.status}
                  </p>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                  {item.summary}
                </p>
                {item.href && item.hrefLabel ? (
                  <p className="mt-3">
                    <Outbound
                      href={item.href}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass hover:text-paper"
                    >
                      {item.hrefLabel}
                    </Outbound>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
