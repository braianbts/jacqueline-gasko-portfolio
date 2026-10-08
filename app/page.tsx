import {
  Autoridad,
  CtaFinal,
  Formas,
  Hero,
  Metodo,
  Nav,
  Negocios,
  QuienEs,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Formas />
      <Metodo />
      <Autoridad />
      <Negocios />
      <QuienEs />
      <CtaFinal />
    </main>
  );
}
