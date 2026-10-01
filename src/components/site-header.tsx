import { nav, site, socials } from "@/content/profile";
import { Outbound } from "@/components/outbound";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-xl tracking-tight text-brass">
            SL
          </span>
          <span className="text-sm text-paper">{site.name}</span>
        </a>
        <div className="flex flex-col gap-3 sm:items-end">
          <nav aria-label="On this page">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
            {socials.map((item) => (
              <li key={item.href}>
                <Outbound href={item.href} className="hover:text-paper">
                  {item.label}
                </Outbound>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
