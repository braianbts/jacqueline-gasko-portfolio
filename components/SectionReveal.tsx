"use client";

import { useEffect } from "react";

/* aparición escalonada de los elementos de cada sección, cada vez que la sección entra en
   pantalla (y se rearma al salir, para que se repita al volver). Marca automáticamente
   títulos, textos, tarjetas, botones y videos; el estilo está en globals.css (.reveal-ready) */

const candidatos = [
  "h1",
  "h2",
  "h3",
  "p",
  "li",
  "article",
  "figure",
  "blockquote",
  ".btn-accent",
  ".card-glass",
  ".card-glass-dark",
  "[data-reveal]",
].join(",");

export function SectionReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const secciones = [...document.querySelectorAll<HTMLElement>("main > section")].filter(
      // Autoridad ya tiene su propia animación (motion)
      (s) => s.id !== "autoridad",
    );

    for (const seccion of secciones) {
      let orden = 0;
      for (const el of seccion.querySelectorAll<HTMLElement>(candidatos)) {
        // si un contenedor ya aparece entero, sus hijos no se animan por separado
        if (el.parentElement?.closest("[data-r]")) continue;
        if (el.closest("[data-no-reveal]")) continue;
        el.setAttribute("data-r", "");
        el.style.setProperty("--d", `${Math.min(orden, 10) * 80}ms`);
        orden++;
      }
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting && e.intersectionRatio >= 0.2) {
            e.target.classList.add("revealed");
          } else if (!e.isIntersecting) {
            // fuera de pantalla: se rearma para que vuelva a aparecer al regresar
            e.target.classList.remove("revealed");
          }
        }
      },
      { threshold: [0, 0.2] },
    );
    secciones.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
