import { practice } from "@/content/profile";

export function Practice() {
  return (
    <section
      id="practice"
      aria-labelledby="practice-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            03 — Practice
          </p>
          <h2
            id="practice-heading"
            className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Where the work sits.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            AI-driven software, treasury operations, and blockchain settlement.
            The through-line is operator control: the institution, the brand,
            or the worker keeps the record.
          </p>
        </div>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {practice.map((item, index) => (
            <li key={item.title} className="bg-ink p-6">
              <p className="font-mono text-[11px] text-brass-dim">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
