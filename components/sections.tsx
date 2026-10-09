import Image from "next/image";
import { AutoVideo } from "./AutoVideo";

import {
  Arrow,
  Button,
  Eyebrow,
  Icon,
  IconTile,
  ScrollCue,
  Section,
  isExternal,
  type IconName,
} from "./ui";

const container = "mx-auto w-full max-w-6xl px-5 md:px-8";

/* WhatsApp de Shake (formato internacional para celulares de Argentina: 54 9 + área + número) */
const whatsapp = (mensaje: string) =>
  `https://wa.me/5493484670258?text=${encodeURIComponent(mensaje)}`;

/* Menú superior: barra oscura flotante que acompaña el marco de las secciones */
const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#negocios", label: "Negocios" },
  { href: "#quien-es", label: "Quién es Shake" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-3 top-3 z-50 rounded-2xl border border-white/10 bg-ink/70 backdrop-blur-xl md:inset-x-5 md:top-4">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
          <span className="size-2 bg-accent" />
          Shake Gasko Oriz
        </a>
        <nav className="hidden items-center gap-8 text-xs text-white/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsapp("Hola Shake, quiero hacerte una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent rounded-full px-4 py-2 text-xs font-semibold"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}

/* 1 · Hero / Portada — foto a pantalla completa con la persona al centro y los textos alrededor */
export function Hero() {
  return (
    <Section id="inicio" className="frame bg-ink text-white">
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#141311_0%,#141311_14%,rgb(20_19_17_/_0.35)_26%,transparent_42%,transparent_55%,rgb(20_19_17_/_0.85)_80%,#141311_100%)] lg:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(20_19_17_/_0.82)_0%,rgb(20_19_17_/_0.55)_25%,transparent_42%,transparent_62%,rgb(20_19_17_/_0.5)_78%,rgb(20_19_17_/_0.8)_100%)] lg:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(0deg,rgb(20_19_17_/_0.55)_0%,transparent_30%,transparent_80%,rgb(20_19_17_/_0.35)_100%)] lg:block" />
      <div className="dots-dark pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8px)] w-full max-w-[1600px] flex-col px-5 pt-24 pb-6 md:min-h-[calc(100svh-14px)] lg:block lg:px-[5vw] lg:pt-0 lg:pb-0">
        {/* nombre: arriba en mobile, a la izquierda de la persona en desktop */}
        <div className="lg:absolute lg:top-[24%] lg:left-[5vw]">
          <Eyebrow dark>Empresaria · Mentora de negocios · Speaker</Eyebrow>
          <h1 className="mt-4 text-[2.7rem] leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-[clamp(3rem,4.8vw,6rem)]">
            <span className="block font-semibold">Shake</span>
            <span className="block font-light text-white/75">Gasko Oriz</span>
          </h1>
        </div>

        {/* etiqueta flotante junto a la mano (desde tablet) */}
        <div className="absolute top-[58%] left-[6%] hidden items-center gap-3 rounded-xl border border-white/30 bg-white/15 py-2 pr-2 pl-4 shadow-[0_12px_30px_-14px_rgb(0_0_0_/_0.5)] backdrop-blur-md sm:flex lg:top-[56%] lg:left-[27%]">
          <p className="text-[11px] leading-tight font-light text-white/85">
            Conocimiento en negocios
            <br />
            <strong className="font-semibold text-white">que genera resultados</strong>
          </p>
          <IconTile name="chart" className="size-9" />
        </div>

        {/* bloque principal: abajo en mobile, a la derecha de la persona en desktop.
            El CTA invita a seguir bajando (no salta al contacto) */}
        <div className="card-glass-dark relative mt-auto w-full max-w-md px-5 py-5 sm:p-6 lg:absolute lg:right-[6vw] lg:bottom-[16%] lg:mt-0 lg:w-[clamp(20rem,26vw,22rem)] lg:p-7">
          <h2 className="text-[1.7rem] leading-[1.1] tracking-[-0.02em] sm:text-3xl lg:text-[2.2rem]">
            <span className="block font-light text-white/80">De emprendedora</span>
            <span className="block font-semibold text-accent">a empresaria.</span>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed font-light text-white/80 sm:text-sm lg:mt-4">
            Estrategia, mentalidad, marca y acción para transformar tu conocimiento en un negocio
            que crece.
          </p>
          <div className="mt-5 lg:mt-6">
            <Button href="#servicios" arrow="down">
              Conocé cómo trabajo
            </Button>
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
  subtitle: string;
  text: string;
  href: string;
  linkLabel: string;
  video: { src: string; poster: string; label: string };
};

const formas: Forma[] = [
  {
    icon: "mic",
    title: "Speaker",
    subtitle: "Conferencias y eventos",
    text: "Conferencias, eventos, capacitaciones y experiencias para movilizar personas, equipos y emprendedores hacia la acción.",
    href: whatsapp("Hola Shake, quiero consultar por una conferencia o evento."),
    linkLabel: "Consultar",
    video: {
      src: "/images/speaker.mp4",
      poster: "/images/speaker-poster.jpg",
      label: "Shake dando una conferencia en un evento",
    },
  },
  {
    icon: "people",
    title: "Clarity Session con Shake",
    subtitle: "Mentoría 1:1",
    text: "Diagnóstico, claridad, destrabe y pasos concretos para accionar, ordenar y crecer.",
    href: whatsapp("Hola Shake, quiero agendar una Clarity Session."),
    linkLabel: "Agendar",
    video: {
      src: "/images/mentoria.mp4",
      poster: "/images/mentoria-poster.jpg",
      label: "Shake en una sesión de mentoría por videollamada",
    },
  },
  {
    icon: "chart",
    title: "AUGE",
    subtitle: "Programa de crecimiento",
    text: "Programa de crecimiento para profesionales y emprendedores que quieren construir un negocio con estrategia, posicionamiento y visión empresarial.",
    href: "https://www.augeprograma.com.ar",
    linkLabel: "Conocé AUGE",
    video: {
      src: "/images/auge.mp4",
      poster: "/images/auge-poster.jpg",
      label: "Comunidad AUGE en la entrega de premios WULOP 2026",
    },
  },
];

function FormaLinkLabel({ forma, className = "" }: { forma: Forma; className?: string }) {
  return (
    <span className={`flex items-center gap-2 text-xs font-semibold ${className}`}>
      {forma.linkLabel}
      <Arrow className="size-5 -rotate-45 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

const linkProps = (f: Forma) => ({
  href: f.href,
  ...(isExternal(f.href) ? { target: "_blank", rel: "noopener noreferrer" } : {}),
});

export function Formas() {
  return (
    <Section id="servicios" className="bg-cream-gradient lg:frame lg:bg-ink-gradient">
      {/* mobile y tablet: tarjetas glass apiladas / en fila */}
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute top-1/2 -left-10 -translate-y-1/2 text-[18vw] leading-[0.85] font-bold select-none lg:hidden"
      >
        SHAKE
        <br />
        SHAKE
      </div>

      <div className={`${container} relative py-20 lg:hidden`}>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">
            <span className="font-semibold">Tres formas</span>{" "}
            <span className="font-light text-soft">de trabajar con Shake</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-sm gap-8 md:max-w-none md:grid-cols-3">
          {formas.map((f) => (
            <a key={f.title} {...linkProps(f)} className="card-glass group flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[20px]">
                <AutoVideo
                  src={f.video.src}
                  poster={f.video.poster}
                  label={f.video.label}
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pt-6 pb-5">
                <IconTile name={f.icon} className="relative z-10 -mt-12 mb-4 ring-4 ring-paper" />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.01em] text-ink">
                  {f.title}
                </h3>
                <p className="mt-1 text-[11px] font-medium tracking-[0.14em] text-accent-dark uppercase">
                  {f.subtitle}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed font-light text-muted">{f.text}</p>
                <FormaLinkLabel forma={f} className="mt-auto justify-end pt-4 text-ink" />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
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
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgb(20_19_17_/_0.95)_0%,rgb(20_19_17_/_0.7)_30%,rgb(20_19_17_/_0.1)_58%,rgb(20_19_17_/_0.55)_100%)] transition duration-700 group-hover:opacity-85" />

            <div className="relative px-[clamp(1.5rem,3vw,3.5rem)] pb-[clamp(2rem,6vh,4.5rem)]">
              <IconTile name={f.icon} className="mb-5" />
              <h3 className="text-[clamp(1.7rem,2.2vw,2.6rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-[11px] font-medium tracking-[0.14em] text-accent uppercase">
                {f.subtitle}
              </p>
              <span className="mt-4 block h-px w-12 bg-white/40 transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed font-light text-white/80">{f.text}</p>
              <FormaLinkLabel forma={f} className="mt-6 text-white" />
            </div>
          </a>
        ))}

        {/* título flotando arriba, sobre los tres videos */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center pt-24 text-center text-white">
          <Eyebrow dark>Servicios</Eyebrow>
          <h2 className="mt-3 text-3xl tracking-[-0.02em]">
            <span className="font-semibold">Tres formas</span>{" "}
            <span className="font-light text-white/55">de trabajar con Shake</span>
          </h2>
          <p className="mt-2 text-[11px] font-medium tracking-[0.14em] text-white/60 uppercase">
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
    <Section id="metodo" className="bg-cream-gradient">
      <div className="flex min-h-svh w-full flex-col">
        <div className="grid flex-1 lg:grid-cols-[46%_54%]">
          {/* el video es protagonista: media pantalla, como tarjeta dentro del marco beige */}
          <div className="relative h-[62svh] overflow-hidden rounded-b-[26px] lg:m-[7px] lg:mr-0 lg:h-auto lg:rounded-[24px]">
            <AutoVideo
              src="/images/empresaria.mp4"
              poster="/images/empresaria-poster.jpg"
              label="Shake con su equipo festejando detrás de escena"
              /* Shake está sobre el borde derecho del video: se amplía anclado a la
                 derecha para recortar la gente del lateral izquierdo */
              className="absolute inset-0 size-full origin-[100%_40%] scale-[1.3] object-cover object-[100%_35%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(20_19_17_/_0.3)_0%,transparent_25%,transparent_70%,rgb(20_19_17_/_0.55)_100%)]" />
            <span className="absolute bottom-6 left-5 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[11px] font-medium tracking-[0.14em] text-white uppercase backdrop-blur-md lg:bottom-8 lg:left-8">
              <span className="size-2 bg-accent" />
              Detrás de escena
            </span>
          </div>

          <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:px-[4vw] lg:pt-24 lg:pb-12">
            <Eyebrow>Propuesta de valor / Método</Eyebrow>

            <h2 className="mt-6 leading-[0.98] tracking-[-0.035em]">
              <span className="block text-[clamp(2.2rem,9vw,5rem)] font-light text-soft lg:text-[clamp(2.6rem,4.4vw,5.2rem)]">
                De emprendedora
              </span>
              <span className="block text-[clamp(2.2rem,9vw,5rem)] font-semibold text-ink lg:text-[clamp(2.6rem,4.4vw,5.2rem)]">
                a empresaria
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed font-light text-ink/75 lg:text-lg">
              Ayudo a profesionales y emprendedores a{" "}
              <strong className="font-semibold text-ink">detectar qué está frenando su crecimiento</strong>,
              ordenar su negocio y convertir ideas en acciones que generen resultados.
            </p>

            {/* método en tres pasos: filete arriba, número chico y título */}
            <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-8">
              {pilares.map((p, i) => (
                <li key={p.title} className="border-t border-dashed border-ink/25 pt-5">
                  <span className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-accent-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon name={p.icon} className="size-4 text-ink/60" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed font-light text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* cinta en movimiento con el recorrido del método */}
        <div className="relative overflow-hidden bg-accent py-4 text-ink lg:py-5">
          <div className="marquee flex w-max text-2xl font-semibold tracking-[0.06em] whitespace-nowrap uppercase lg:text-3xl">
            {[0, 1].map((copy) => (
              <span key={copy} aria-hidden={copy === 1} className="flex gap-10 pr-10">
                {Array.from({ length: 3 }).flatMap((_, k) =>
                  pasosFlujo.map((paso) => (
                    <span key={`${k}-${paso}`} className="flex items-center gap-10">
                      {paso}
                      <span className="size-2.5 bg-ink" />
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
  { value: "+12", unit: "años", label: "Emprendiendo y construyendo negocios" },
  { value: "6", unit: "proyectos", label: "Creados, desarrollados o potenciados" },
];

export function Autoridad() {
  return (
    <Section id="autoridad" className="bg-cream-gradient">
      <div className={`${container} flex flex-col pt-24 pb-16 lg:pt-24 lg:pb-14`}>
        <Eyebrow>Autoridad / Impacto</Eyebrow>
        <h2 className="mt-5 max-w-4xl text-[2.1rem] leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem]">
          <span className="font-semibold text-ink">Resultados que respaldan</span>{" "}
          <span className="font-light text-soft">mi experiencia</span>
        </h2>

        {/* cifras como en una ficha: número grande, línea punteada y etiqueta */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-10">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="leading-none whitespace-nowrap text-ink">
                <span className="text-[2.2rem] font-medium tracking-[-0.04em] sm:text-5xl xl:text-[3.6rem]">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="ml-1.5 text-lg font-light tracking-[-0.02em] text-soft sm:text-2xl">
                    {s.unit}
                  </span>
                )}
              </p>
              <span className="mt-5 block border-t border-dashed border-ink/30" />
              <p className="mt-3 max-w-[14rem] text-[13px] leading-snug font-medium text-ink/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* cita con aire */}
        <figure className="mt-16 flex max-w-3xl gap-5 lg:mt-20">
          <span className="text-6xl leading-[0.8] font-bold text-accent">“</span>
          <div>
            <blockquote className="text-[1.3rem] leading-snug tracking-[-0.01em] sm:text-2xl lg:text-[1.8rem]">
              <span className="font-light text-ink/70">No enseño solamente lo que estudié.</span>{" "}
              <span className="font-semibold text-ink">
                Enseño lo que tuve que construir, ejecutar, vender y sostener.
              </span>
            </blockquote>
            <figcaption className="mt-5 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
              Shake Gasko Oriz
            </figcaption>
          </div>
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
    name: "41 Streetwear",
    role: ["Co-equiper", "Estrategia y desarrollo"],
    video: { src: "/images/streetwear.mp4", poster: "/images/streetwear-poster.jpg" },
  },
  {
    name: "41 Suplementos",
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
    <Section id="negocios" className="frame-y bg-ink-gradient text-white">
      {/* título arriba y debajo los negocios en vertical (9:16, el formato de los videos):
          2 columnas en mobile, 3 en tablet, una fila de 6 en desktop */}
      <div className="flex min-h-[calc(100svh-8px)] w-full flex-col justify-center md:min-h-[calc(100svh-14px)]">
        <div className="flex flex-col items-center px-5 pt-24 pb-8 text-center lg:pt-20 lg:pb-10">
          <Eyebrow dark>CEO de negocios y co-equiper</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            <span className="font-semibold">Negocios que construí,</span>{" "}
            <span className="font-light text-white/55">potencié y acompaño</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3 lg:grid-cols-6">
          {negocios.map((n) => (
            <article
              key={n.name}
              className="group relative flex aspect-[9/16] flex-col justify-end overflow-hidden bg-ink"
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
                  sizes="(min-width: 1024px) 17vw, (min-width: 768px) 33vw, 50vw"
                  className={`object-cover transition duration-[1.2s] ease-out group-hover:scale-105 ${n.image.position}`}
                />
              ) : null}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgb(20_19_17_/_0.92)_0%,rgb(20_19_17_/_0.45)_35%,transparent_65%)] transition duration-700 group-hover:opacity-80" />

              <div className="relative p-4 sm:p-5 lg:p-5 xl:p-6">
                <span className="mb-3 block h-1 w-6 bg-accent transition-all duration-500 group-hover:w-12" />
                <h3 className="text-base leading-tight font-bold text-white sm:text-lg xl:text-xl">
                  {n.name}
                </h3>
                {n.role.map((r) => (
                  <p key={r} className="text-[11px] leading-snug font-light text-white/70">
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
        {/* video vertical con marco fino desplazado detrás */}
        <figure className="mx-auto w-full max-w-sm lg:max-w-[26rem]">
          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[22px] border border-ink/25 lg:translate-x-6 lg:translate-y-6"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-sand">
              <AutoVideo
                src="/images/quien-es.mp4"
                poster="/images/quien-es-poster.jpg"
                label="Shake sentada en un sillón revisando el celular"
                className="absolute inset-0 size-full object-cover object-[40%_center]"
              />
            </div>
          </div>
          <figcaption className="mt-10 flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
            <span className="size-2 bg-accent" />
            Empresaria · Mentora · Speaker
          </figcaption>
        </figure>

        {/* texto como un recorrido: línea vertical con un punto por etapa */}
        <div className="relative border-l border-dashed border-ink/25 pl-8 sm:pl-12">
          <span aria-hidden className="absolute top-1 -left-[5px] size-[9px] bg-accent" />
          <Eyebrow>Quién es Shake</Eyebrow>
          <h2 className="mt-5 text-[2.6rem] leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
            <span className="font-light text-soft">¿Quién es</span>{" "}
            <span className="font-semibold text-ink">Shake?</span>
          </h2>

          <div className="relative mt-10">
            <span
              aria-hidden
              className="absolute top-2 -left-[calc(2rem+4px)] size-[7px] border border-ink/40 bg-paper sm:-left-[calc(3rem+4px)]"
            />
            <p className="max-w-xl text-[15px] leading-[1.85] font-light text-ink/80 first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:text-[4rem] first-letter:leading-[0.8] first-letter:font-semibold first-letter:text-ink">
              Empecé a emprender muy joven y durante más de una década pasé por prácticamente todas
              las etapas de un negocio: vender mi propio trabajo, atender clientes, formar equipos,
              abrir espacios físicos, capacitar profesionales, crear marcas, desarrollar servicios y
              liderar personas. Ese recorrido me enseñó que muchas veces un negocio no necesita más
              información:{" "}
              <strong className="font-semibold text-ink">necesita claridad, decisiones y acción.</strong>{" "}
              Hoy utilizo esa experiencia para acompañar a otros profesionales a transformar su
              conocimiento en negocios más sólidos, rentables y escalables.
            </p>
          </div>

          <blockquote className="relative mt-10">
            <span
              aria-hidden
              className="absolute top-3 -left-[calc(2rem+5px)] size-[9px] bg-accent sm:-left-[calc(3rem+5px)]"
            />
            <p className="max-w-lg text-2xl leading-snug tracking-[-0.02em] lg:text-[1.75rem]">
              <span className="font-light text-ink/70">“Tu negocio no puede crecer mucho más allá</span>{" "}
              <span className="font-semibold text-ink">de la persona que lo lidera.”</span>
            </p>
            <footer className="mt-4 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
              — Shake
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}

/* 7 · CTA final — sobrio: una idea, un botón a WhatsApp */
export function CtaFinal() {
  return (
    <Section id="contacto" className="frame bg-ink-gradient text-white">
      <div className="mx-auto flex min-h-[calc(100svh-8px)] w-full max-w-3xl flex-col items-center justify-center px-5 pt-24 pb-12 text-center md:min-h-[calc(100svh-14px)]">
        <Eyebrow dark>Trabajemos juntos</Eyebrow>

        <h2 className="mt-8 text-[2.1rem] leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem]">
          <span className="font-light text-white/70">Tu próximo nivel no necesita más información.</span>{" "}
          <span className="mt-2 block font-semibold text-accent">Necesita decisión.</span>
        </h2>

        <p className="mt-10 max-w-lg text-[15px] leading-relaxed font-light text-white/75 lg:text-base">
          Si sabés que tu negocio tiene potencial, pero necesitás claridad, estrategia y
          acompañamiento para llevarlo al próximo nivel,{" "}
          <strong className="font-semibold text-white">podemos trabajar juntos.</strong>
        </p>

        <div className="mt-10">
          <Button href={whatsapp("Hola Shake, quiero aplicar para trabajar con vos.")} arrow="out">
            Aplicar para trabajar con Shake
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* pie: crédito del desarrollo en negro sobre el beige */
export function Footer() {
  return (
    <footer className="px-5 pt-2 pb-5 text-center text-[11px] leading-relaxed text-black">
      Desarrollado por Braian Yamil Barrientos · Ing. en Sistemas · MAT. 124335/A
    </footer>
  );
}
