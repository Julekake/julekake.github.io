const LINKS = [
  {
    label: "email",
    value: "bjorniver1@gmail.com",
    href: "bjorniver1@gmail.com",
  },
  {
    label: "github",
    value: "github.com/bjorniver",
    href: "https://github.com/bjorniver",
  },
  { label: "site", value: "bjorni.tech", href: "https://bjorni.tech" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          06 · open connection
        </p>
        <h2 className="mt-2 font-sans text-2xl font-semibold text-ink sm:text-3xl">
          Contact
        </h2>

        <div className="mt-8 rounded-md border border-line bg-panel p-5 font-mono text-[13px] sm:p-6 sm:text-sm">
          <p className="text-ink-muted">
            <span className="text-signal">$</span> reach bjorni --any-of
          </p>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((link) => (
              <li
                key={link.label}
                className="flex items-baseline gap-2 min-w-0"
              >
                <span className="w-16 shrink-0 text-ink-dim">
                  --{link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex-1 min-w-0 break-words text-ink underline decoration-line-bright decoration-1 underline-offset-4 hover:text-amber hover:decoration-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center font-mono text-[11px] text-ink-dim">
          station uptime · Trøndelag, Norway
        </p>
      </div>
    </section>
  );
}
