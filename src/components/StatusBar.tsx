import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/log", label: "log" },
  { to: "/experience", label: "experience" },
  { to: "/contact", label: "contact" },
];

function useTrondheimClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Oslo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const update = () => setTime(formatter.format(new Date()));
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return time;
}

export default function StatusBar() {
  const time = useTrondheimClock();
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const b = setInterval(() => setBlink((v) => !v), 900);
    return () => clearInterval(b);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-2.5 font-mono text-[11px] tracking-wide text-ink-muted sm:text-xs">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full bg-ok ${blink ? "opacity-100" : "opacity-30"}`}
            aria-hidden="true"
          />
          <span className="text-ink">bjorni@station</span>
        </Link>

        <nav className="flex gap-3 overflow-x-auto sm:gap-5">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                  isActive ? "text-amber" : "text-ink-muted"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 text-ink-dim sm:flex">
          <span>TRD</span>
          <span className="text-ink">{time || "--:--"}</span>
        </div>
      </div>
    </header>
  );
}
