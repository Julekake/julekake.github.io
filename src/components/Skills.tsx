type Skill = {
  pid: string;
  name: string;
  category: string;
  load: number; // 0-100, proficiency/comfort level
  state: "run" | "grow";
};

const SKILLS: Skill[] = [
  { pid: "1001", name: "Virtualization (Proxmox, LXC)", category: "infra", load: 78, state: "run" },
  { pid: "1002", name: "Networking (VLAN, WiFi 6, mesh, NAS)", category: "infra", load: 74, state: "run" },
  { pid: "1003", name: "React / TypeScript / Vite / Tailwind", category: "web", load: 85, state: "run" },
  { pid: "1004", name: "Git & conventional commits", category: "tooling", load: 82, state: "run" },
  { pid: "1005", name: "Windows & Linux administration", category: "infra", load: 70, state: "run" },
  { pid: "1006", name: "Security awareness & training design", category: "security", load: 66, state: "grow" },
];

function LoadBar({ value }: { value: number }) {
  const color = value >= 80 ? "bg-ok" : value >= 60 ? "bg-amber" : "bg-signal";
  return (
    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-panel-raised sm:w-32">
      <div
        className={`h-full ${color}`}
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">02 · running processes</p>
        <h2 className="mt-2 font-sans text-2xl font-semibold text-ink sm:text-3xl">Skills</h2>
        <p className="mt-2 max-w-lg font-sans text-sm text-ink-muted">
          What's currently active on this station, and how much load each one's carrying.
        </p>

        <div className="mt-8 overflow-x-auto rounded-md border border-line bg-panel">
          <table className="w-full min-w-[560px] font-mono text-[12px] sm:text-sm">
            <thead>
              <tr className="border-b border-line text-left text-ink-dim">
                <th className="px-4 py-3 font-normal">pid</th>
                <th className="px-4 py-3 font-normal">process</th>
                <th className="hidden px-4 py-3 font-normal sm:table-cell">category</th>
                <th className="px-4 py-3 font-normal">load</th>
                <th className="px-4 py-3 font-normal">state</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS.map((skill) => (
                <tr
                  key={skill.pid}
                  className="border-b border-line/60 last:border-none hover:bg-panel-raised/60"
                >
                  <td className="px-4 py-3 text-ink-dim">{skill.pid}</td>
                  <td className="px-4 py-3 text-ink">{skill.name}</td>
                  <td className="hidden px-4 py-3 text-ink-muted sm:table-cell">{skill.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <LoadBar value={skill.load} />
                      <span className="text-ink-dim">{skill.load}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        skill.state === "run"
                          ? "text-ok"
                          : "text-signal"
                      }
                    >
                      {skill.state === "run" ? "running" : "growing"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
