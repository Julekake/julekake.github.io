type Education = {
  school: string;
  track: string;
  period: string;
  skills: string;
};

type Placement = {
  role: string;
  company: string;
  period: string;
  location: string;
  note: string;
  skills?: string;
};

const EDUCATION: Education[] = [
  {
    school: "Tiller Videregående Skole — IM-IT",
    track: "Yrkesfag, Information Technology",
    period: "aug 2024 – jun 2026",
    skills: "Brukerstøtte, IT-Drift, +17 ferdigheter",
  },
  {
    school: "Byåsen Videregående Skole — TIF",
    track: "Yrkesfag",
    period: "2023 – 2024",
    skills: "Boring, Dreiing og fresing +9 ferdigheter",
  },
];

const PLACEMENTS: Placement[] = [
  {
    role: "IT-praktikant",
    company: "Serit Nidaros",
    period: "mar 2026 · 1 mnd",
    location: "Trondheim, Trøndelag, Norge",
    note: "Utplassert hos Serit Nidaros i 2 uker.",
    skills: "Microsoft 365",
  },
  {
    role: "Lokal Service",
    company: "Hemit HF",
    period: "feb 2026 · 1 mnd",
    location: "Trondheim, Trøndelag, Norge · Lokalt",
    note: "Utplassert hos Hemit HF i 2 uker.",
    skills: "Brukerstøtte, Nettverk +1 ferdighet",
  },
  {
    role: "IT-praktikant",
    company: "Serit Nidaros",
    period: "nov 2025 · 1 mnd",
    location: "Trondheim, Trøndelag, Norge · Lokalt",
    note: "Utplassert hos Serit Nidaros i 2 uker.",
    skills: "Microsoft 365",
  },
  {
    role: "Bilmekaniker",
    company: "Bertel O. Steen AS",
    period: "aug 2024 · 1 mnd",
    location: "Trondheim, Trøndelag, Norge",
    note: "Utplassert hos Bertel O. Steen på Tiller i 2 uker.",
  },
  {
    role: "Bilmekaniker",
    company: "Bertel O. Steen AS",
    period: "aug 2023 · 1 mnd",
    location: "Trondheim, Trøndelag, Norge",
    note: "Utplassert hos Bertel O. Steen på Tiller i 1 uke.",
  },
  {
    role: "Betongarbeider",
    company: "RS Gulv AS",
    period: "jun 2022 · 1 mnd",
    location: "Trondheim, Trøndelag, Norge",
    note: "Utplassert hos RS Gulv i Trondheim i 1 uke.",
  },
];

export default function Experience() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
          05 · deployment history
        </p>
        <h1 className="mt-2 font-sans text-2xl font-semibold text-ink sm:text-3xl">
          Education &amp; Experience
        </h1>
        <p className="mt-2 max-w-lg font-sans text-sm text-ink-muted">
          Schools attended, and short-term placements (utplassering / praksisplass)
          along the way.
        </p>

        {/* Education */}
        <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
          education
        </h2>
        <div className="mt-4 space-y-3">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="rounded-md border border-line bg-panel p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-[11px] text-ink-dim">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
                  {edu.period}
                </span>
              </div>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink">{edu.school}</h3>
              <p className="mt-0.5 font-sans text-sm text-ink-muted">{edu.track}</p>
              <p className="mt-2 font-mono text-[11px] text-ink-dim">{edu.skills}</p>
            </div>
          ))}
        </div>

        {/* Placements */}
        <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
          field placements — utplassering
        </h2>
        <div className="mt-4 space-y-3">
          {PLACEMENTS.map((p, i) => (
            <div
              key={i}
              className="rounded-md border border-line bg-panel p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-[11px] text-ink-dim">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                  {p.period}
                </span>
                <span>{p.location}</span>
              </div>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink">
                {p.role} <span className="text-ink-muted">— {p.company}</span>
              </h3>
              <p className="mt-1.5 font-sans text-sm text-ink-muted">{p.note}</p>
              {p.skills && (
                <p className="mt-2 font-mono text-[11px] text-ink-dim">{p.skills}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
