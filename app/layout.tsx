import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rihla Travel — Agence de Voyage Casablanca",
  description:
    "Votre agence de voyage à Casablanca. Circuits, séjours et voyages sur mesure au Maroc et à l'international.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#0A0A0B] text-[#F7F5F0] antialiased selection:bg-[#C2714F]/30 selection:text-[#F7F5F0]">
        {children}
      </body>
    </html>
  );
}