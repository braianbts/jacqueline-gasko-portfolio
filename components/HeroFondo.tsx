"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

/* fondo del hero con movimiento: zoom cinematográfico lento, profundidad siguiendo el mouse
   (el fondo va al revés del cursor; la tarjeta, la etiqueta y el nombre van a favor vía las
   variables --mx/--my), desplazamiento más lento al scrollear y una luz cálida que recorre la escena */
export function HeroFondo() {
  const ref = useRef<HTMLDivElement>(null);
  const reducir = useReducedMotion();

  // posición del mouse normalizada (-1 a 1), suavizada con un resorte
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const x = useTransform(sx, (v) => v * -18);
  const y = useTransform([sy, scrollYProgress], ([m, p]: number[]) => m * -12 + p * 120);

  useEffect(() => {
    if (reducir || !window.matchMedia("(pointer: fine)").matches) return;
    const hero = document.getElementById("inicio");

    const mover = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    // las capas de adelante leen estas variables (ver .parallax-* en globals.css)
    const quitarX = sx.on("change", (v) => hero?.style.setProperty("--mx", v.toFixed(3)));
    const quitarY = sy.on("change", (v) => hero?.style.setProperty("--my", v.toFixed(3)));

    window.addEventListener("pointermove", mover);
    return () => {
      window.removeEventListener("pointermove", mover);
      quitarX();
      quitarY();
    };
  }, [reducir, mx, my, sx, sy]);

  return (
    <div ref={ref} className="absolute inset-x-0 top-[14%] bottom-0 overflow-hidden lg:inset-0">
      {/* margen extra para que el desplazamiento nunca deje ver los bordes */}
      <motion.div style={reducir ? undefined : { x, y }} className="absolute -inset-[5%]">
        <motion.div
          animate={reducir ? undefined : { scale: [1, 1.08] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/portadahorizontal.jpeg"
            alt="Shake Gasko Oriz en una sala de reuniones"
            fill
            priority
            /* en pantallas verticales la foto horizontal se dibuja mucho más ancha que la
               pantalla (alto × 1.8) y se recorta: pedir esa resolución para que no pixelee */
            sizes="(orientation: portrait) 170vh, 110vw"
            className="object-cover object-[51%_center]"
          />
        </motion.div>
      </motion.div>

      {/* luz cálida que recorre la escena, como el sol entrando por los ventanales */}
      {!reducir && (
        <motion.div
          aria-hidden
          animate={{ x: ["-15%", "20%", "-15%"], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_35%_60%_at_30%_35%,rgb(255_221_160_/_0.28),transparent_70%)] mix-blend-screen"
        />
      )}
    </div>
  );
}
