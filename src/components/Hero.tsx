import { useEffect, useState } from "react";

const BOOT_LINES = [
  "ssh bjorni@station.no",
  "authenticating... ok",
  "mounting profile: IT-Drift / VG3",
  "loading modules: virtualization, networking, web",
  "session ready",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), visibleLines === 0 ? 300 : 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowProfile(true), 300);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="bg-grid relative overflow-hidden border-b border-line px-5 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-md border border-line bg-panel/80 p-5 font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/40 sm:p-6 sm:text-sm">
          <div className="mb-3 flex items-center gap-1.5 border-b border-line pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
            <span className="ml-3 text-ink-dim">terminal — bjorni@station</span>
          </div>

          <div aria-live="polite">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={line} className="text-ink-muted">
                <span className="text-signal">$</span> {line}
                {i === visibleLines - 1 && !showProfile && (
                  <span className="ml-1 inline-block h-3.5 w-2 animate-pulse bg-amber align-middle" />
                )}
              </div>
            ))}
          </div>

          {showProfile && (
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber">
                station identity
              </p>
              <h1 className="mt-2 font-sans text-3xl font-semibold text-ink sm:text-5xl">
                Bjorni
              </h1>
              <p className="mt-2 max-w-xl font-sans text-sm text-ink-muted sm:text-base">
                IT-Drift student in Trøndelag, Norway — building on the network,
                virtualization, and web systems side of operations.
                Starting an apprenticeship on{" "}
                <span className="text-ink">1 September 2026</span>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-ink-dim">
                <span className="rounded border border-line px-2 py-1">proxmox</span>
                <span className="rounded border border-line px-2 py-1">vlan / wifi6</span>
                <span className="rounded border border-line px-2 py-1">react + typescript</span>
                <span className="rounded border border-line px-2 py-1">git</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
