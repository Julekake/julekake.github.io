type Project = {
  name: string;
  port: string;
  status: "online" | "archived";
  shipped: string;
  description: string;
  stack: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Proxmox Lab",
    port: ":8006",
    status: "online",
    shipped: "2026",
    description:
      "VM, containers, scripts, and automation for a home lab running Proxmox on a dedicated server.",
    stack: ["Proxmox", "LXC", "Virtualization", "Home Lab", "Automation"],
  },
  {
    name: "Home Network Design",
    port: ":443",
    status: "online",
    shipped: "2026",
    description:
      "Full home network plan covering VLAN segmentation, WiFi 6 coverage, mesh backhaul, and NAS placement.",
    stack: ["VLAN", "WiFi 6", "Mesh", "NAS"],
  },
  {
    name: "bjorni.tech",
    port: ":443",
    status: "online",
    shipped: "2026",
    description:
      "Personal site and build log — project write-ups, a skills page, and a home for ongoing side projects.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Website"],
    href: "https://bjorni.tech",
  },
    {
    name: "maggieboudrieauthor.no",
    port: ":443",
    status: "online",
    shipped: "2026",
    description:
      "School project i helped working on for an author's website.",
    stack: ["Wordpress", "CSS", "Website"],
    href: "https://maggieboudrieauthor.no",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">03 · deployed services</p>
        <h2 className="mt-2 font-sans text-2xl font-semibold text-ink sm:text-3xl">Projects</h2>
        <p className="mt-2 max-w-lg font-sans text-sm text-ink-muted">
          Things built, shipped, or racked up as coursework and side projects.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-md border border-line bg-panel p-5 transition-colors hover:border-line-bright"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-ink-dim">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "online" ? "bg-ok" : "bg-ink-dim"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{project.status}</span>
                  <span>{project.port}</span>
                </div>
                <span>shipped {project.shipped}</span>
              </div>

              <h3 className="mt-3 font-sans text-lg font-semibold text-ink">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-ink-dim">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded border border-line px-1.5 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
