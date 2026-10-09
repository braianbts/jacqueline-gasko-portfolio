"use client";

import { useEffect } from "react";

/* marca en <html data-hero> si el hero ocupa la pantalla: mientras tanto el menú es
   transparente (solo texto, ver .site-nav en globals.css) y aparece al pasar a la segunda sección */
export function HeroNavState() {
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const root = document.documentElement;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.intersectionRatio >= 0.55) root.setAttribute("data-hero", "");
        else root.removeAttribute("data-hero");
      },
      { threshold: [0, 0.55, 1] },
    );
    observer.observe(hero);
    return () => {
      observer.disconnect();
      root.removeAttribute("data-hero");
    };
  }, []);

  return null;
}
