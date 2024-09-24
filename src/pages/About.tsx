const FIELDS = [
  { key: "name", value: "Bjørn Iver" },
  { key: "callname", value: "bjorni" },
  { key: "age", value: "18" },
  { key: "gender", value: "Man" },
  { key: "nationality", value: "Norway" },
];

export default function About() {
  return (
    <section className="bg-grid px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">02 · identity</p>
        <h1 className="mt-2 font-sans text-2xl font-semibold text-ink sm:text-3xl">About</h1>

        <div className="mt-8 rounded-md border border-line bg-panel p-5 font-mono text-[13px] sm:p-6 sm:text-sm">
          <p className="text-ink-muted">
            <span className="text-signal">$</span> whoami --verbose
          </p>

          <dl className="mt-5 space-y-2.5">
            {FIELDS.map((field) => (
              <div key={field.key} className="flex flex-wrap items-baseline gap-2">
                <dt className="w-28 shrink-0 text-ink-dim">{field.key}</dt>
                <dd className="text-ink">{field.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-ink-dim">
              <span className="text-signal">$</span> job --current
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
              <span className="text-ink">Nav Lærling</span>
            </div>
            <p className="mt-1.5 ml-3.5 text-ink-muted">
              1 September 2026 → 1 September 2028
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-ink-muted">
          Based in Trøndelag, Norway. Studying IT-Drift, with a particular interest
          in the networking and virtualization side of operations — and building
          things on the web in the time left over.
        </p>
      </div>
    </section>
  );
}
