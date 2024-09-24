type LogEntry = {
  time: string;
  level: "info" | "notice" | "ok";
  message: string;
};

const ENTRIES: LogEntry[] = [
  { time: "2025", level: "info", message: "started IT-Drift program, VG2" },
  { time: "2025", level: "info", message: "first Proxmox lab, nested inside VirtualBox" },
  { time: "2026-09-01", level: "notice", message: "apprenticeship begins — status changes to active" },
];

const LEVEL_STYLE: Record<LogEntry["level"], string> = {
  info: "text-signal",
  notice: "text-amber",
  ok: "text-ok",
};

export default function Log() {
  return (
    <section id="log" className="border-b border-line px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">04 · journal</p>
        <h2 className="mt-2 font-sans text-2xl font-semibold text-ink sm:text-3xl">Log</h2>
        <p className="mt-2 max-w-lg font-sans text-sm text-ink-muted">
          A running tail of what's happened, in the order it happened.
        </p>

        <div className="mt-8 rounded-md border border-line bg-panel p-5 font-mono text-[12px] leading-relaxed sm:text-sm">
          {ENTRIES.map((entry, i) => (
            <div key={i} className="flex gap-3 py-1.5">
              <span className="w-24 shrink-0 text-ink-dim">{entry.time}</span>
              <span className={`w-16 shrink-0 uppercase ${LEVEL_STYLE[entry.level]}`}>
                {entry.level}
              </span>
              <span className="text-ink-muted">{entry.message}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
