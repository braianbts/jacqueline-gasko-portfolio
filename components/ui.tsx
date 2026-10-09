import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-svh w-full snap-start items-center overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

/* etiqueta de sección: cuadradito amarillo + texto */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] uppercase ${
        dark ? "text-white/85" : "text-ink/80"
      }`}
    >
      <span className="size-2 shrink-0 bg-accent" />
      {children}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* link externo (WhatsApp, AUGE): abre en otra pestaña */
export const isExternal = (href: string) => href.startsWith("http");

export function Button({
  href,
  children,
  arrow = "right",
}: {
  href: string;
  children: ReactNode;
  arrow?: "right" | "down" | "out";
}) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="btn-accent group inline-flex items-center gap-4 rounded-full py-2 pr-2 pl-6 text-sm font-semibold"
    >
      {children}
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-accent">
        <Arrow
          className={`size-4 transition ${
            arrow === "down"
              ? "rotate-90 group-hover:translate-y-0.5"
              : arrow === "out"
                ? "-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                : "group-hover:translate-x-0.5"
          }`}
        />
      </span>
    </a>
  );
}

/* indicador "Deslizá": línea con un punto que baja, invita a seguir scrolleando */
export function ScrollCue({ className = "" }: { className?: string }) {
  return (
    <a
      href="#servicios"
      aria-label="Seguir bajando"
      className={`flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/70 uppercase transition hover:text-white ${className}`}
    >
      Deslizá
      <span className="relative block h-9 w-px overflow-hidden bg-white/25">
        <span className="scroll-cue-dot absolute left-0 h-3 w-px bg-accent" />
      </span>
    </a>
  );
}

const iconPaths = {
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21m-3 0h6" />
    </>
  ),
  people: (
    <>
      <circle cx="12" cy="8" r="2.6" />
      <circle cx="5.5" cy="10" r="2" />
      <circle cx="18.5" cy="10" r="2" />
      <path d="M7.5 19c0-2.8 2-4.6 4.5-4.6s4.5 1.8 4.5 4.6M2.5 18.5c0-2 1.3-3.4 3-3.4M21.5 18.5c0-2-1.3-3.4-3-3.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <rect x="5.5" y="12" width="3" height="6" rx="0.5" />
      <rect x="10.5" y="8" width="3" height="10" rx="0.5" />
      <rect x="15.5" y="4" width="3" height="14" rx="0.5" />
    </>
  ),
  bulb: (
    <path d="M9 17h6M10 20.5h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17h5.2v-1.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      <circle cx="12" cy="12" r="6.5" />
    </>
  ),
};

export type IconName = keyof typeof iconPaths;

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

export function IconTile({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-ink ${className}`}
    >
      <Icon name={name} className="size-6" />
    </span>
  );
}
