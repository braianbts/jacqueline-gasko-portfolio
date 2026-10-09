import { Autoridad } from "@/components/Autoridad";
import { HeroNavState } from "@/components/HeroNavState";
import { SectionReveal } from "@/components/SectionReveal";
import {
  CtaFinal,
  Footer,
  Formas,
  Hero,
  Metodo,
  Nav,
  Negocios,
  QuienEs,
} from "@/components/sections";

/* datos estructurados para buscadores: quién es Shake, su rol y sus negocios */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jacqueline Shake Gasko Oriz",
  alternateName: "Shake Gasko Oriz",
  jobTitle: "Empresaria, mentora de negocios y speaker",
  description:
    "Empresaria y mentora de negocios. Acompaña a profesionales y emprendedores a transformar su conocimiento en negocios sólidos, rentables y escalables.",
  url: "https://jacquelinegaskopmu.vercel.app/",
  image: "https://jacquelinegaskopmu.vercel.app/opengraph-image.jpg",
  sameAs: [
    "https://www.instagram.com/shakegaskooriz.pmu",
    "https://www.instagram.com/casa_shake_",
    "https://www.casashake.com.ar/",
    "https://www.augeprograma.com.ar/",
  ],
  knowsAbout: [
    "Estrategia de negocios",
    "Mentoría empresarial",
    "Emprendimiento",
    "Marca personal",
    "Liderazgo",
    "Ventas",
  ],
  worksFor: { "@type": "Organization", name: "Casa Shake", url: "https://www.casashake.com.ar/" },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SectionReveal />
      <HeroNavState />
      <Nav />
      <Hero />
      <Formas />
      <Metodo />
      <Autoridad />
      <Negocios />
      <QuienEs />
      <CtaFinal />
      <Footer />
    </main>
  );
}
