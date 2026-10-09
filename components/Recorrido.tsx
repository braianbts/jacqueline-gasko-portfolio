"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";

/* recorrido del método como una frase: las cuatro palabras en gris claro y una a la vez
   se activa (negro, bold) con un trazo amarillo tipo resaltador que se desliza de una a otra */

const pasos = ["Destrabar", "Ordenar", "Accionar", "Crecer"];
const intervalo = 1700; // ms que queda activa cada palabra

export function Recorrido() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.6 });
  const reducir = useReducedMotion();
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    if (!visible || reducir) return;
    const id = setInterval(() => setActivo((a) => (a + 1) % pasos.length), intervalo);
    return () => clearInterval(id);
  }, [visible, reducir]);

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-baseline justify-center gap-x-[0.45em] gap-y-1 px-5 pt-6 pb-8 text-[1.35rem] leading-tight tracking-[-0.03em] sm:text-3xl lg:pt-4 lg:pb-9 lg:text-[2.6rem]"
    >
      {pasos.map((paso, i) => {
        const esActivo = reducir || i === activo;
        return (
          <Fragment key={paso}>
            {i > 0 && (
              <span aria-hidden className="font-light text-soft/70">
                →
              </span>
            )}
            {/* grilla de una celda: la copia bold invisible reserva el ancho y evita saltos */}
            <span className="relative isolate inline-grid">
              <span aria-hidden className="invisible col-start-1 row-start-1 font-semibold">
                {paso}
              </span>
              {esActivo && !reducir && (
                <motion.span
                  layoutId="resaltador"
                  aria-hidden
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="absolute inset-x-[-0.12em] bottom-[0.08em] -z-10 h-[0.36em] bg-accent-grad"
                />
              )}
              <motion.span
                className="col-start-1 row-start-1 text-center"
                animate={{
                  color: esActivo ? "#141311" : "#a3a3a0",
                  fontWeight: esActivo ? 600 : 300,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {paso}
              </motion.span>
            </span>
          </Fragment>
        );
      })}
    </div>
  );
}
