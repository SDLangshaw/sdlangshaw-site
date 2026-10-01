import { companies, layers } from "@/content/profile";
import { Outbound } from "@/components/outbound";

function StackDiagram() {
  return (
    <ol className="mt-8 border border-line" aria-label="Sovereign Core layers">
      {layers.map((layer, index) => (
        <li
          key={layer.label}
          className="border-b border-line px-4 py-3 last:border-b-0"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
            {String(index + 1).padStart(2, "0")} {layer.label}
          </span>
          <span className="mt-1 block text-sm text-paper">{layer.detail}</span>
        </li>
      ))}
      <li className="bg-ink px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Under the operator’s keys. No vendor telemetry.
      </li>
    </ol>
  );
}

export function Work() {
  const [primary, ...rest] = companies;

  return (
    <section id="work" aria-labelledby="work-heading" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            01 — Work
          </p>
          <h2
            id="work-heading"
            className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Three companies. One builder.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            DeFi AI is the primary project. KTE and EcoSip are the other
            companies in market. Each card leaves this site and opens the
            business.
          </p>
        </div>

        <article
          id={primary.id}
          className="mt-12 scroll-mt-28 border border-line bg-panel/60 p-5 sm:p-8"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
              {primary.index} · {primary.status}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {primary.role}
            </p>
          </div>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="font-serif text-4xl tracking-tight sm:text-5xl">
                {primary.name}
              </h3>
              <p className="mt-2 font-serif text-2xl text-brass">
                {primary.product}
              </p>
              <p className="mt-5 text-base leading-7 text-paper">
                {primary.summary}
              </p>
              <p className="mt-4 text-base leading-7 text-muted">{primary.why}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {primary.links.map((link) => (
                  <li key={link.href}>
                    <Outbound
                      href={link.href}
                      className="inline-flex border border-brass/50 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-ink"
                    >
                      {link.label}
                    </Outbound>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                What the system is
              </p>
              <StackDiagram />
              <ul className="mt-6 space-y-2 text-sm leading-6 text-muted">
                {primary.stack.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-brass">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((company) => (
            <article
              key={company.id}
              id={company.id}
              className="scroll-mt-28 border border-line bg-panel/40 p-5 sm:p-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
                {company.index} · {company.status}
              </p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">
                {company.name}
              </h3>
              <p className="mt-1 text-sm text-brass">{company.product}</p>
              <p className="mt-4 text-base leading-7 text-paper">
                {company.summary}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{company.why}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted">
                {company.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                {company.links.map((link) => (
                  <Outbound
                    key={link.href}
                    href={link.href}
                    className="inline-flex border border-brass/50 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-ink"
                  >
                    {link.label}
                  </Outbound>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
