import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://jacquelinegaskopmu.vercel.app";
const title = "Shake Gasko Oriz | Empresaria · Mentora de negocios · Speaker";
const description =
  "De emprendedora a empresaria. Clarity Session con Shake, el programa AUGE y conferencias para transformar tu conocimiento en un negocio que crece, con estrategia, mentalidad, marca y acción.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Shake Gasko Oriz",
    "mentora de negocios",
    "Clarity Session",
    "mentoría estratégica",
    "mentoría para emprendedores",
    "speaker",
    "conferencias de negocios",
    "programa AUGE",
    "estrategia de negocios",
    "emprendedora a empresaria",
    "Casa Shake",
    "Argentina",
  ],
  authors: [{ name: "Jacqueline Shake Gasko Oriz" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Shake Gasko Oriz",
    locale: "es_AR",
    title,
    description:
      "Estrategia, mentalidad, marca y acción para transformar tu conocimiento en un negocio que crece.",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Estrategia, mentalidad, marca y acción para transformar tu conocimiento en un negocio que crece.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
