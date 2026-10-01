import { site, socials } from "@/content/profile";
import { Outbound } from "@/components/outbound";

export function ContactBand() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
          05 — Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-3 max-w-3xl font-serif text-4xl tracking-tight sm:text-6xl"
        >
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-brass/40 underline-offset-8 hover:decoration-brass"
          >
            {site.email}
          </a>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted">
          For a Sovereign Core briefing, start at defiai.finance. Those
          conversations are under NDA. This page is the person who builds the
          system.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {socials.map((item) => (
            <li key={item.href}>
              <Outbound
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper hover:text-brass"
              >
                {item.label}
                <span className="ml-2 text-muted"> {item.handle}</span>
              </Outbound>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
