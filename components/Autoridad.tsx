"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { Section } from "./ui";

/* 4 · Autoridad / Impacto — las cifras como formas (círculos y cápsulas) amarillas y
   blancas sobre fondo oscuro; una flecha hacia abajo une cada número con su texto. Cada columna mide 230cqw de alto:
   un círculo (100cqw) + una cápsula (130cqw), o una sola cápsula alta. */

type Pieza = { forma: "circulo" | "capsula"; alto: number; contenido: "numero" | "texto" };

type Cifra = {
  valor: number;
  prefijo?: string;
  unidad?: string;
  texto: string;
  color: "amarillo" | "blanco";
  flecha: number; // altura (en cqw) de la unión entre el número y su texto
  piezas: Pieza[];
};

const cifras: Cifra[] = [
  {
    valor: 7000,
    prefijo: "+",
    texto: "Servicios vendidos",
    color: "amarillo",
    flecha: 100,
    piezas: [
      { forma: "circulo", alto: 100, contenido: "numero" },
      { forma: "capsula", alto: 130, contenido: "texto" },
    ],
  },
  {
    valor: 20,
    prefijo: "+",
    texto: "Puestos de trabajo generados",
    color: "blanco",
    flecha: 130,
    piezas: [{ forma: "capsula", alto: 230, contenido: "numero" }],
  },
  {
    valor: 12,
    prefijo: "+",
    unidad: "años",
    texto: "Emprendiendo y construyendo negocios",
    color: "amarillo",
    flecha: 130,
    piezas: [
      { forma: "capsula", alto: 130, contenido: "numero" },
      { forma: "circulo", alto: 100, contenido: "texto" },
    ],
  },
  {
    valor: 6,
    unidad: "proyectos",
    texto: "Creados, desarrollados o potenciados",
    color: "blanco",
    flecha: 100,
    piezas: [
      { forma: "circulo", alto: 100, contenido: "numero" },
      { forma: "capsula", alto: 130, contenido: "texto" },
    ],
  },
];

const formato = new Intl.NumberFormat("es-AR");

/* número que cuenta desde 0 cada vez que entra en pantalla (al salir vuelve a 0).
   Escribe directo en el elemento para no re-renderizar en cada cuadro */
function Contador({ valor }: { valor: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { amount: 0.6 });
  const reducir = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducir) return;
    if (!visible) {
      el.textContent = formato.format(0);
      return;
    }
    const control = animate(0, valor, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = formato.format(Math.round(v));
      },
    });
    return () => control.stop();
  }, [visible, reducir, valor]);

  return <span ref={ref}>{formato.format(reducir ? valor : 0)}</span>;
}

/* flecha hacia abajo en la unión entre el número y su texto: el número "justifica" lo de abajo */
function Flecha({ top }: { top: number }) {
  return (
    <svg
      viewBox="0 0 24 64"
      aria-hidden
      style={{ top: `${top}cqw` }}
      className="absolute left-1/2 z-10 h-[30cqw] -translate-x-1/2 -translate-y-1/2 text-ink"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v56M3 46l9 12 9-12" />
    </svg>
  );
}

export function Autoridad() {
  const reducir = useReducedMotion();

  return (
    <Section id="autoridad" className="frame bg-ink-gradient text-white">
      {/* luces difusas detrás de las formas: el vidrio esmerilado las desenfoca */}
      <motion.div
        aria-hidden
        animate={reducir ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[38%] left-[22%] size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(243_223_107_/_0.55)_0%,rgb(243_223_107_/_0.15)_45%,transparent_70%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={reducir ? undefined : { x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[60%] left-[72%] size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_255_255_/_0.35)_0%,rgb(255_255_255_/_0.08)_45%,transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-6 pb-10 md:px-8 lg:pt-6 lg:pb-6">
        <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] text-white/85 uppercase">
          <span className="size-2 bg-accent" />
          Autoridad / Impacto
        </p>

        {/* título en píldora negra */}
        <motion.h2
          initial={reducir ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-shape glass-yellow glass-text mt-4 rounded-full px-6 py-3 text-center text-base leading-tight tracking-[-0.02em] sm:px-10 sm:py-4 sm:text-xl lg:text-2xl"
        >
          <span className="font-light">Resultados que respaldan</span>{" "}
          <span className="font-bold">mi experiencia</span>
        </motion.h2>

        {/* recorrido: 2 columnas en mobile, 4 en desktop. El ancho se limita por el alto de
            pantalla para que todo entre (cada columna mide 2,3 veces su ancho) */}
        <div className="mt-8 grid w-full max-w-[min(900px,calc((100svh-430px)*1.74+36px))] grid-cols-2 gap-x-3 gap-y-3 lg:mt-9 lg:grid-cols-4">
          {cifras.map((c, i) => (
            <motion.div
              key={c.texto}
              initial={reducir ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              className="@container relative flex flex-col"
            >
              <Flecha top={c.flecha} />

              {c.piezas.map((p, k) => (
                <div
                  key={k}
                  style={{ height: `${p.alto}cqw`, ["--sheen-delay" as string]: `${i * 0.6 + k * 0.3}s` }}
                  className={`glass-shape glass-text flex flex-col items-center rounded-full px-[10cqw] text-center ${
                    c.color === "amarillo" ? "glass-yellow" : "glass-white"
                  } ${p.contenido === "numero" ? "justify-start" : "justify-center"}`}
                >
                  {p.contenido === "numero" ? (
                    /* el número se centra en la primera "cabeza" redonda (100cqw) */
                    <p className="flex h-[100cqw] shrink-0 items-baseline justify-center leading-none font-bold tracking-[-0.05em] whitespace-nowrap">
                      <span className="self-center" style={{ fontSize: `${Math.min(40, 92 / (String(c.valor).length + (c.prefijo ? 1.4 : 0.4)))}cqw` }}>
                        {c.prefijo}
                        <Contador valor={c.valor} />
                      </span>
                    </p>
                  ) : null}

                  {/* texto: va en la pieza "texto" o, si la columna es una sola cápsula, abajo */}
                  {(p.contenido === "texto" || c.piezas.length === 1) && (
                    <div className={c.piezas.length === 1 ? "mt-auto pb-[26cqw]" : ""}>
                      {c.unidad && (
                        <p className="text-[11cqw] leading-none font-semibold tracking-[-0.02em]">
                          {c.unidad}
                        </p>
                      )}
                      <p
                        className="mt-[3cqw] text-[7.5cqw] leading-snug font-medium text-ink/75"
                      >
                        {c.texto}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* frase en píldora al pie */}
        <motion.figure
          initial={reducir ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-shape glass-white glass-text mt-8 max-w-3xl rounded-[28px] px-6 py-4 text-center sm:rounded-full sm:px-10 lg:mt-9"
        >
          <blockquote className="text-sm leading-snug tracking-[-0.01em] sm:text-base lg:text-lg">
            <span className="font-light text-ink/70">“No enseño solamente lo que estudié.</span>{" "}
            <span className="font-semibold text-ink">
              Enseño lo que tuve que construir, ejecutar, vender y sostener.”
            </span>
          </blockquote>
          <figcaption className="mt-1.5 text-[10px] font-medium tracking-[0.14em] text-ink/50 uppercase">
            Shake Gasko Oriz
          </figcaption>
        </motion.figure>
      </div>
    </Section>
  );
}
