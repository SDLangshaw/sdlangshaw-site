import { companies, site, socials } from "@/content/profile";
import { Outbound } from "@/components/outbound";

export function Hero() {
  return (
    <section className="border-b border-line" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            {site.role}
            <span className="mx-2 text-brass-dim">/</span>
            {site.location}
            <span className="mx-2 text-brass-dim">/</span>
            {site.reach}
          </p>
          <h1
            id="intro-heading"
            className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-paper sm:text-7xl"
          >
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-paper sm:text-3xl">
            I build the software that holds the money, the model, and the
            record.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            Founder and architect of DeFi AI Technologies. The primary build is
            Sovereign Core OS: operator-controlled treasury, tenant-issued
            stablecoins, and private AI inside one system. Alongside it, KTE
            keeps a tipped worker’s shift ledger, and EcoSip runs a reusable
            coffee cup as software a brand can license.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {socials.map((item) => (
              <li key={item.href}>
                <Outbound
                  href={item.href}
                  className="inline-flex border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-brass hover:text-brass"
                >
                  {item.label}
                  <span className="ml-2 text-muted">{item.handle}</span>
                </Outbound>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-5">
          <div className="border border-line bg-panel/80 p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
              Now
            </p>
            <ol className="mt-4 divide-y divide-line">
              {companies.map((company) => (
                <li key={company.id} className="py-4 first:pt-0 last:pb-0">
                  <a href={`#${company.id}`} className="group block">
                    <span className="font-mono text-[11px] text-brass">
                      {company.index}
                    </span>
                    <span className="mt-1 block font-serif text-2xl tracking-tight text-paper group-hover:text-brass">
                      {company.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {company.product}
                    </span>
                    <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-live">
                      {company.status}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            DeFi AI is in a design-partner phase. The operating system is in
            internal production. Full external product rails come next.
          </p>
        </aside>
      </div>
    </section>
  );
}
