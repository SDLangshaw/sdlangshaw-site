import { record } from "@/content/profile";

export function Record() {
  return (
    <section id="record" aria-labelledby="record-heading" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
              04 — Record
            </p>
            <h2
              id="record-heading"
              className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
            >
              How this developer was made.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{record.lead}</p>
          </div>
          <ol className="lg:col-span-8">
            {record.chapters.map((chapter) => (
              <li
                key={chapter.title}
                className="border-t border-line py-6 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
                  {chapter.when}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight">
                  {chapter.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  {chapter.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
