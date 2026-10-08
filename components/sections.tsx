import Image from "next/image";
import { AutoVideo } from "./AutoVideo";

import {
  Arrow,
  Eyebrow,
  GoldButton,
  Icon,
  IconTile,
  ScrollCue,
  Section,
  type IconName,
} from "./ui";

const container = "mx-auto w-full max-w-6xl px-5 md:px-8";

/* Menú superior */
const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#negocios", label: "Negocios" },
  { href: "#quien-es", label: "Quién es Shake" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/10 backdrop-blur-xl">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <a href="#inicio" className="font-serif text-sm font-semibold tracking-[0.2em] text-gold">
          SHAKE GASKO ORIZ
        </a>
        <nav className="hidden items-center gap-9 text-xs font-medium text-gold md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-gold-light">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="btn-gold rounded-full px-5 py-2 text-xs font-medium">
          Contacto
        </a>
      </div>
    </header>
  );
}

/* 1 · Hero / Portada — foto a pantalla completa con la persona al centro y los textos alrededor */
export function Hero() {
  return (
    <Section id="inicio" className="bg-ink text-white">
      {/* foto: en mobile arranca más abajo para dejar lugar al nombre arriba */}
      <div className="absolute inset-x-0 top-[14%] bottom-0 lg:inset-0">
        <Image
          src="/images/portadahorizontal.jpeg"
          alt="Shake Gasko Oriz en una sala de reuniones"
          fill
          priority
          /* en pantallas verticales la foto horizontal se dibuja mucho más ancha que la
             pantalla (alto × 1.8) y se recorta: pedir esa resolución para que no pixelee */
          sizes="(orientation: portrait) 160vh, 100vw"
          className="object-cover object-[51%_center]"
        />
      </div>

      {/* velos para que se lea el texto sin tapar a la persona */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#1f1d1a_0%,#1f1d1a_14%,rgb(31_29_26_/_0.35)_26%,transparent_42%,transparent_55%,rgb(31_29_26_/_0.85)_80%,#1f1d1a_100%)] lg:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(31_29_26_/_0.82)_0%,rgb(31_29_26_/_0.55)_25%,transparent_42%,transparent_62%,rgb(31_29_26_/_0.5)_78%,rgb(31_29_26_/_0.8)_100%)] lg:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(0deg,rgb(31_29_26_/_0.55)_0%,transparent_30%,transparent_80%,rgb(31_29_26_/_0.35)_100%)] lg:block" />
      {/* trama de puntos oscuros muy sutil sobre la foto, da profundidad */}
      <div className="dots-dark pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1600px] flex-col px-5 pt-24 pb-6 lg:block lg:px-[5vw] lg:pt-0 lg:pb-0">
        {/* nombre: arriba en mobile, a la izquierda de la persona en desktop */}
        <div className="lg:absolute lg:top-[24%] lg:left-[5vw]">
          <p className="text-[9px] tracking-[0.22em] whitespace-nowrap text-gold-light uppercase sm:text-[10px] lg:text-xs lg:tracking-[0.3em]">
            Empresaria · Mentora de negocios · Speaker
          </p>
          <h1 className="mt-3 font-serif text-[2.6rem] leading-[0.9] font-medium tracking-[0.02em] sm:text-6xl lg:text-[clamp(3.5rem,6vw,7.5rem)]">
            SHAKE
            <br />
            <span className="text-gold-light">GASKO</span> ORIZ
          </h1>
          <span className="mt-6 hidden h-px w-24 bg-gold-light/70 lg:block" />
        </div>

        {/* manuscrito flotando junto a la cabeza */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[37%] right-3 -rotate-12 font-script text-[1.6rem] leading-[1.05] text-white/90 drop-shadow-[0_2px_10px_rgb(0_0_0_/_0.5)] sm:right-[8%] sm:text-4xl lg:top-[14%] lg:right-auto lg:left-[61%] lg:text-5xl"
        >
          <p>Estrategia</p>
          <p className="pl-3 lg:pl-5">Personas</p>
          <p className="pl-6 lg:pl-10">Negocios</p>
          <p className="pl-9 lg:pl-14">Libertad</p>
        </div>

        {/* etiqueta flotante junto a la mano (desde tablet) */}
        <div className="absolute top-[58%] left-[6%] hidden items-center gap-3 rounded-xl border border-white/40 bg-white/20 py-2 pr-2 pl-4 shadow-[0_12px_30px_-14px_rgb(0_0_0_/_0.5)] backdrop-blur-md sm:flex lg:top-[56%] lg:left-[27%]">
          <p className="text-[11px] leading-tight text-white/85">
            Conocimiento en negocios
            <br />
            <strong className="font-semibold text-white">que genera resultados</strong>
          </p>
          <IconTile name="chart" className="size-9" />
        </div>

        {/* bloque principal: abajo en mobile, a la derecha de la persona en desktop.
            El CTA invita a seguir bajando (no salta al formulario) */}
        <div className="card-glass-dark relative mt-auto w-full max-w-md px-5 py-5 sm:p-6 lg:absolute lg:right-[5vw] lg:bottom-[14%] lg:mt-0 lg:w-[min(30vw,26rem)] lg:p-8">
          <h2 className="font-serif text-[1.75rem] leading-[1.05] text-gold-light sm:text-3xl lg:text-5xl">
            De emprendedora
            <br />a empresaria.
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-white/85 sm:text-sm lg:mt-4">
            Estrategia, mentalidad, marca y acción para transformar tu conocimiento en un negocio
            que crece.
          </p>
          <div className="mt-5 lg:mt-6">
            <GoldButton href="#servicios" arrow="down">
              Conocé cómo trabajo
            </GoldButton>
          </div>
        </div>

        <ScrollCue className="mt-5 self-center lg:absolute lg:bottom-6 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2" />
      </div>
    </Section>
  );
}

/* 2 · Tres formas de trabajar */
type Forma = {
  icon: IconName;
  title: string;
  text: string;
  href: string;
  external?: boolean;
  video: { src: string; poster: string; label: string };
};

const formas: Forma[] = [
  {
    icon: "mic",
    title: "Speaker",
    text: "Conferencias, eventos, capacitaciones y experiencias para movilizar personas, equipos y emprendedores hacia la acción.",
    href: "#contacto",
    video: {
      src: "/images/speaker.mp4",
      poster: "/images/speaker-poster.jpg",
      label: "Shake dando una conferencia en un evento",
    },
  },
  {
    icon: "people",
    title: "Mentoría estratégica 1:1",
    text: "Diagnóstico, claridad, destrabe y pasos concretos para accionar, ordenar y crecer.",
    href: "#contacto",
    video: {
      src: "/images/mentoria.mp4",
      poster: "/images/mentoria-poster.jpg",
      label: "Shake en una sesión de mentoría por videollamada",
    },
  },
  {
    icon: "chart",
    title: "AUGE",
    text: "Programa de crecimiento para profesionales y emprendedores que quieren construir un negocio con estrategia, posicionamiento y visión empresarial.",
    href: "https://www.augeprograma.com.ar",
    external: true,
    video: {
      src: "/images/auge.mp4",
      poster: "/images/auge-poster.jpg",
      label: "Comunidad AUGE en la entrega de premios WULOP 2026",
    },
  },
];

function FormaLinkLabel({ forma, className = "" }: { forma: Forma; className?: string }) {
  return (
    <span className={`flex items-center gap-2 text-xs font-medium ${className}`}>
      {forma.external ? "Conocé AUGE" : "Consultar"}
      <Arrow
        className={`size-5 transition ${
          forma.external
            ? "-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "group-hover:translate-x-1"
        }`}
      />
    </span>
  );
}

const linkProps = (f: Forma) => ({
  href: f.href,
  ...(f.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
});

export function Formas() {
  return (
    <Section id="servicios" className="bg-glow lg:bg-ink-gradient">
      {/* mobile y tablet: tarjetas glass apiladas / en fila */}
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute top-1/2 -left-10 -translate-y-1/2 font-serif text-[18vw] leading-[0.85] font-semibold select-none lg:hidden"
      >
        SHAKE
        <br />
        SHAKE
      </div>

      <div className={`${container} relative py-20 lg:hidden`}>
        <div className="flex flex-col items-center text-center">
          <Eyebrow n={2}>Tres formas de trabajar con Shake</Eyebrow>
        </div>

        <div className="mx-auto mt-10 grid max-w-sm gap-8 md:max-w-none md:grid-cols-3">
          {formas.map((f) => (
            <a key={f.title} {...linkProps(f)} className="card-glass group flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[18px]">
                <AutoVideo
                  src={f.video.src}
                  poster={f.video.poster}
                  label={f.video.label}
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pt-6 pb-5">
                <IconTile name={f.icon} className="relative z-10 -mt-12 mb-4 ring-4 ring-white" />
                <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{f.text}</p>
                <FormaLinkLabel forma={f} className="mt-auto justify-end pt-4 text-gold" />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs tracking-[0.2em] text-gold-dark uppercase">
          Mentalidad · Marca · Estrategia · Ventas · Crecimiento
        </p>
      </div>

      {/* desktop: tres paneles a pantalla completa, 33,3% cada uno, video de fondo e info encima */}
      <div className="absolute inset-0 hidden grid-cols-3 lg:grid">
        {formas.map((f, i) => (
          <a
            key={f.title}
            {...linkProps(f)}
            className={`group relative flex flex-col justify-end overflow-hidden ${
              i > 0 ? "border-l border-white/15" : ""
            }`}
          >
            <AutoVideo
              src={f.video.src}
              poster={f.video.poster}
              label={f.video.label}
              className="absolute inset-0 size-full object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
            />
            {/* velo: oscuro abajo para la info, suave arriba para el título */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgb(31_29_26_/_0.95)_0%,rgb(31_29_26_/_0.7)_30%,rgb(31_29_26_/_0.1)_58%,rgb(31_29_26_/_0.55)_100%)] transition duration-700 group-hover:opacity-85" />

            <div className="relative px-[clamp(1.5rem,3vw,3.5rem)] pb-[clamp(2rem,6vh,4.5rem)]">
              <IconTile name={f.icon} className="mb-5" />
              <h3 className="font-serif text-[clamp(2rem,2.6vw,3rem)] leading-[1.05] text-white">
                {f.title}
              </h3>
              <span className="mt-4 block h-px w-12 bg-gold-light/70 transition-all duration-500 group-hover:w-24" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">{f.text}</p>
              <FormaLinkLabel forma={f} className="mt-6 text-gold-light" />
            </div>
          </a>
        ))}

        {/* título y pilares flotando arriba, sobre los tres videos */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center pt-24 text-center">
          <div className="text-gold-light [&_span]:text-gold-light [&_span.h-px]:bg-gold-light/60">
            <Eyebrow n={2}>Tres formas de trabajar con Shake</Eyebrow>
          </div>
          <p className="mt-3 text-[11px] tracking-[0.25em] text-white/70 uppercase">
            Mentalidad · Marca · Estrategia · Ventas · Crecimiento
          </p>
        </div>
      </div>
    </Section>
  );
}

/* 3 · Propuesta de valor / Método */
const pilares: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "bulb",
    title: "Claridad",
    text: "Entender dónde estás, qué querés construir y qué está frenando el negocio.",
  },
  {
    icon: "gear",
    title: "Acción",
    text: "Transformar estrategia en decisiones, prioridades y ejecución.",
  },
  {
    icon: "chart",
    title: "Crecimiento",
    text: "Construir una marca, una oferta y una estructura capaz de vender y evolucionar.",
  },
];

const pasosFlujo = ["Destrabar", "Ordenar", "Accionar", "Crecer"];

export function Metodo() {
  return (
    <Section id="metodo" className="bg-marble">
      <div className="flex min-h-svh w-full flex-col">
        <div className="grid flex-1 lg:grid-cols-[46%_54%]">
          {/* el video es protagonista: media pantalla de borde a borde */}
          <div className="relative h-[62svh] overflow-hidden lg:h-auto">
            <AutoVideo
              src="/images/empresaria.mp4"
              poster="/images/empresaria-poster.jpg"
              label="Shake con su equipo festejando detrás de escena"
              className="absolute inset-0 size-full object-cover object-[50%_35%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(31_29_26_/_0.35)_0%,transparent_25%,transparent_70%,rgb(31_29_26_/_0.55)_100%)]" />
            <p className="absolute bottom-6 left-5 font-script text-4xl text-white/90 drop-shadow-[0_2px_10px_rgb(0_0_0_/_0.5)] lg:bottom-10 lg:left-10 lg:text-6xl">
              Detrás de escena
            </p>
          </div>

          <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:px-[4vw] lg:pt-24 lg:pb-12">
            <Eyebrow n={3}>Propuesta de valor / Método</Eyebrow>

            <h2 className="mt-6 font-serif leading-[0.9] font-normal tracking-[-0.01em] text-ink uppercase">
              <span className="block text-[clamp(1.75rem,8.5vw,5rem)] lg:text-[clamp(2.5rem,4vw,5rem)]">De emprendedora</span>
              <span className="block text-[clamp(1.75rem,8.5vw,5rem)] lg:text-[clamp(2.5rem,4vw,5rem)] text-gold normal-case italic">
                a empresaria
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/80 lg:text-lg">
              Ayudo a profesionales y emprendedores a detectar qué está frenando su crecimiento,
              ordenar su negocio y convertir ideas en acciones que generen resultados.
            </p>

            {/* método en tres pasos numerados */}
            <ol className="relative mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
              <span
                aria-hidden
                className="absolute top-7 right-0 left-0 hidden h-px bg-[linear-gradient(90deg,rgb(179_155_94_/_0.6)_0%,rgb(179_155_94_/_0.6)_85%,transparent)] sm:block"
              />
              {pilares.map((p, i) => (
                <li key={p.title} className="relative">
                  <span className="relative flex items-center gap-3">
                    <span className="text-outline-gold font-serif text-6xl leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-gold/50 bg-paper text-gold">
                      <Icon name={p.icon} className="size-4" />
                    </span>
                  </span>
                  <h3 className="mt-4 font-serif text-2xl tracking-wide text-ink uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* cinta en movimiento con el recorrido del método */}
        <div className="relative overflow-hidden border-y border-gold/30 bg-[linear-gradient(90deg,#0f0d0b_0%,#2c2722_50%,#0f0d0b_100%)] py-4 text-gold-light lg:py-5">
          <div className="marquee flex w-max font-serif text-2xl tracking-[0.2em] whitespace-nowrap uppercase lg:text-3xl">
            {[0, 1].map((copy) => (
              <span key={copy} aria-hidden={copy === 1} className="flex gap-10 pr-10">
                {Array.from({ length: 3 }).flatMap((_, k) =>
                  pasosFlujo.map((paso) => (
                    <span key={`${k}-${paso}`} className="flex items-center gap-10">
                      {paso}
                      <span className="text-base text-gold">✦</span>
                    </span>
                  )),
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 4 · Autoridad / Impacto */
const stats = [
  { value: "+7.000", label: "Servicios vendidos" },
  { value: "+20", label: "Puestos de trabajo generados" },
  { value: "+12 años", label: "Emprendiendo y construyendo negocios" },
  { value: "6 proyectos", label: "Creados, desarrollados o potenciados" },
];

export function Autoridad() {
  return (
    <Section id="autoridad" className="bg-glow">
      <div className={`${container} flex flex-col items-center pt-24 pb-16 text-center lg:pt-24 lg:pb-14`}>
        <Eyebrow n={4}>Autoridad / Impacto</Eyebrow>
        <h2 className="mt-6 max-w-5xl font-serif text-[2rem] leading-tight font-normal text-gold sm:text-4xl lg:text-5xl">
          Resultados que respaldan mi experiencia
        </h2>

        <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:gap-6 lg:mt-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="card-glass px-3 py-7 sm:px-5 lg:py-8">
              <p className="font-serif text-[1.4rem] whitespace-nowrap text-ink sm:text-3xl xl:text-[2.6rem]">
                {s.value}
              </p>
              <span className="mx-auto mt-4 block h-px w-8 bg-gold/50" />
              <p className="mx-auto mt-4 max-w-[13rem] text-[13px] leading-snug text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* cita centrada, con aire, entre filetes dorados */}
        <figure className="mt-14 flex max-w-3xl flex-col items-center lg:mt-14">
          <div className="flex w-full items-center gap-5">
            <span className="h-px flex-1 bg-gold/35" />
            <span className="font-serif text-6xl leading-[0.6] text-gold/70">“</span>
            <span className="h-px flex-1 bg-gold/35" />
          </div>
          <blockquote className="mt-6 font-serif text-[1.4rem] leading-snug text-ink sm:text-2xl lg:text-[2rem]">
            No enseño solamente lo que estudié.
            <br />
            <em className="text-gold">Enseño lo que tuve que construir, ejecutar, vender y sostener.</em>
          </blockquote>
          <figcaption className="mt-6 text-[11px] tracking-[0.3em] text-muted uppercase">
            Shake Gasko Oriz
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

/* 5 · CEO de negocios y co-equiper */
type Negocio = {
  name: string;
  role: string[];
  video?: { src: string; poster: string };
  image?: { src: string; alt: string; position: string };
};

const negocios: Negocio[] = [
  {
    name: "Casa Shake",
    role: ["Founder & CEO"],
    video: { src: "/images/casa-shake.mp4", poster: "/images/casa-shake-poster.jpg" },
  },
  {
    name: "4-1 Streetwear",
    role: ["Co-equiper", "Estrategia y desarrollo"],
    video: { src: "/images/streetwear.mp4", poster: "/images/streetwear-poster.jpg" },
  },
  {
    name: "4-1 Suplementos",
    role: ["Co-equiper", "Estrategia y crecimiento"],
    video: { src: "/images/suplementos.mp4", poster: "/images/suplementos-poster.jpg" },
  },
  {
    name: "Brave Family",
    role: ["Co-equiper"],
    video: { src: "/images/brave.mp4", poster: "/images/brave-poster.jpg" },
  },
  {
    name: "Bohemia Bar",
    role: ["Co-equiper"],
    image: {
      src: "/images/bohemia.jpg",
      alt: "Hamburguesa de Bohemia Burger",
      position: "object-[45%_60%]",
    },
  },
  {
    name: "Digital Growth System",
    role: ["Mano derecha /", "Business & Growth Strategist"],
    video: { src: "/images/digital-growth.mp4", poster: "/images/digital-growth-poster.jpg" },
  },
];

export function Negocios() {
  return (
    <Section id="negocios" className="bg-ink-gradient text-white">
      {/* título arriba y debajo una grilla a todo el ancho: 2 columnas en mobile, 3×2 en desktop */}
      <div className="flex min-h-svh w-full flex-col">
        <div className="flex flex-col items-center px-5 pt-24 pb-8 text-center lg:pt-20 lg:pb-7">
          <div className="[&_span]:text-gold-light [&_span.h-px]:bg-gold-light/60">
            <Eyebrow n={5}>CEO de negocios y co-equiper</Eyebrow>
          </div>
          <h2 className="mt-4 font-serif text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
            Negocios que construí, potencié y acompaño
          </h2>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-px bg-white/10 lg:grid-cols-3 lg:grid-rows-2">
          {negocios.map((n) => (
            <article
              key={n.name}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-ink lg:aspect-auto"
            >
              {n.video ? (
                <AutoVideo
                  src={n.video.src}
                  poster={n.video.poster}
                  label={`Video de ${n.name}`}
                  className="absolute inset-0 size-full object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
                />
              ) : n.image ? (
                <Image
                  src={n.image.src}
                  alt={n.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className={`object-cover transition duration-[1.2s] ease-out group-hover:scale-105 ${n.image.position}`}
                />
              ) : (
                /* sin material todavía: fondo provisorio con el nombre en grande */
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_50%_35%,#3a3128_0%,#1f1d1a_75%)]">
                  <span className="text-outline-light px-4 text-center font-serif text-4xl leading-none lg:text-6xl">
                    {n.name}
                  </span>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgb(31_29_26_/_0.92)_0%,rgb(31_29_26_/_0.45)_35%,transparent_65%)] transition duration-700 group-hover:opacity-80" />

              <div className="relative p-4 sm:p-6 lg:px-8 lg:pb-7">
                <span className="mb-3 block h-px w-8 bg-gold-light/70 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-serif text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
                  {n.name}
                </h3>
                {n.role.map((r) => (
                  <p key={r} className="text-[11px] leading-snug text-white/70 sm:text-xs">
                    {r}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* 6 · Quién es Shake — lámina editorial: video enmarcado + texto como un recorrido */
export function QuienEs() {
  return (
    <Section id="quien-es" className="bg-cream-gradient">
      <div className={`${container} grid items-center gap-14 pt-24 pb-16 lg:grid-cols-[5fr_6fr] lg:gap-[6vw] lg:py-20`}>
        {/* video vertical con marco dorado fino desplazado detrás */}
        <figure className="mx-auto w-full max-w-sm lg:max-w-[26rem]">
          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/45 lg:translate-x-6 lg:translate-y-6"
            />
            <div className="relative aspect-[3/4] overflow-hidden bg-stone">
              <AutoVideo
                src="/images/quien-es.mp4"
                poster="/images/quien-es-poster.jpg"
                label="Shake sentada en un sillón revisando el celular"
                className="absolute inset-0 size-full object-cover object-[40%_center]"
              />
            </div>
          </div>
          <figcaption className="mt-10 flex items-center gap-3 text-[10px] tracking-[0.3em] text-muted uppercase">
            <span className="h-px w-8 bg-gold/60" />
            Empresaria · Mentora · Speaker
          </figcaption>
        </figure>

        {/* texto como un recorrido: línea vertical con un punto por etapa */}
        <div className="relative border-l border-gold/30 pl-8 sm:pl-12">
          <span aria-hidden className="absolute top-1 -left-[5px] size-[9px] rounded-full bg-gold" />
          <Eyebrow n={6}>Quién es Shake</Eyebrow>
          <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.05] font-normal text-ink sm:text-5xl lg:text-6xl">
            ¿Quién es <em className="text-gold">Shake</em>?
          </h2>

          <div className="relative mt-10">
            <span
              aria-hidden
              className="absolute top-2 -left-[calc(2rem+4px)] size-[7px] rounded-full border border-gold bg-paper sm:-left-[calc(3rem+4px)]"
            />
            <p className="max-w-xl text-[15px] leading-[1.85] text-ink/75 first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:text-gold">
              Empecé a emprender muy joven y durante más de una década pasé por prácticamente todas
              las etapas de un negocio: vender mi propio trabajo, atender clientes, formar equipos,
              abrir espacios físicos, capacitar profesionales, crear marcas, desarrollar servicios y
              liderar personas. Ese recorrido me enseñó que muchas veces un negocio no necesita más
              información: necesita claridad, decisiones y acción. Hoy utilizo esa experiencia para
              acompañar a otros profesionales a transformar su conocimiento en negocios más sólidos,
              rentables y escalables.
            </p>
          </div>

          <blockquote className="relative mt-10">
            <span
              aria-hidden
              className="absolute top-3 -left-[calc(2rem+5px)] size-[9px] rounded-full bg-gold sm:-left-[calc(3rem+5px)]"
            />
            <p className="max-w-lg font-serif text-2xl leading-snug text-ink italic lg:text-[1.9rem]">
              “Tu negocio no puede crecer mucho más allá de la persona que lo lidera.”
            </p>
            <footer className="mt-4 text-[11px] tracking-[0.3em] text-gold uppercase">— Shake</footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}

/* 7 · CTA final — sobrio: una idea, un botón */
export function CtaFinal() {
  return (
    <Section id="contacto" className="bg-ink-gradient text-white">
      <div className="relative flex min-h-svh w-full flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pt-24 pb-12 text-center">
          <div className="[&_span]:text-gold-light [&_span.h-px]:bg-gold-light/60">
            <Eyebrow n={7}>Trabajemos juntos</Eyebrow>
          </div>

          <h2 className="mt-8 font-serif text-[2.1rem] leading-[1.12] font-normal text-white sm:text-5xl lg:text-[3.6rem]">
            Tu próximo nivel no necesita más información.
            <em className="mt-2 block text-gold-light">Necesita decisión.</em>
          </h2>

          <span className="mt-10 block h-px w-16 bg-gold-light/60" />

          <p className="mt-10 max-w-lg text-[15px] leading-relaxed text-white/75 lg:text-base">
            Si sabés que tu negocio tiene potencial, pero necesitás claridad, estrategia y
            acompañamiento para llevarlo al próximo nivel, podemos trabajar juntos.
          </p>

          <div className="mt-10">
            <GoldButton href="#contacto">Aplicar para trabajar con Shake</GoldButton>
          </div>
        </div>

        <p className="bg-paper px-5 py-4 text-center text-[11px] leading-relaxed text-black">
          Desarrollado por Braian Yamil Barrientos · Ing. en Sistemas · MAT. 124335/A
        </p>
      </div>
    </Section>
  );
}
