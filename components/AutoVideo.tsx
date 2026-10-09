"use client";

import { useEffect, useRef } from "react";

/* video mudo en loop pensado para cargar rápido:
   - al abrir la página no descarga nada (solo se ve el poster)
   - cuando está a una pantalla de distancia empieza a descargarse, así al llegar ya está listo
   - se reproduce solo mientras está en pantalla
   Los videos ocultos (por ejemplo la versión mobile en desktop) nunca se descargan */
export function AutoVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // precarga anticipada: una pantalla antes de aparecer
    const precarga = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.preload = "auto";
        video.load();
        precarga.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    precarga.observe(video);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => precarga.disconnect();
    }

    const reproduccion = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    reproduccion.observe(video);

    return () => {
      precarga.disconnect();
      reproduccion.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
