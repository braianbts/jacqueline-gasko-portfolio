import type { Metadata } from "next";
import { Mrs_Saint_Delafield, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-mrs",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shake Gasko Oriz | Empresaria · Mentora de negocios · Speaker",
  description:
    "Estrategia, mentalidad, marca y acción para transformar tu conocimiento en un negocio que crece.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${poppins.variable} ${script.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
