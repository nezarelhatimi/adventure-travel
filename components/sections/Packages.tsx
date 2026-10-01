"use client";

import { useState } from "react";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";

interface PackageTier {
  id: "01" | "02" | "03";
  name: string;
  tagline: string;
  duration: string;
  featured: boolean;
  badge?: string;
  features: string[];
}

const packageTemplates: PackageTier[] = [
  {
    id: "01",
    name: "L'Échappée",
    tagline: "Voyager malin",
    duration: "5 jours · 4 nuits",
    featured: false,
    badge: "Essentiel",
    features: [
      "Vol aller-retour inclus",
      "Hébergement 2 étoiles",
      "Transferts aéroport",
      "Guide touristique local",
      "Support WhatsApp 7/7",
    ],
  },
  {
    id: "02",
    name: "La Signature",
    tagline: "Le juste équilibre",
    duration: "7 jours · 6 nuits",
    featured: true,
    badge: "Plus populaire",
    features: [
      "Vol aller-retour inclus",
      "Hébergement 4 étoiles",
      "Transferts privés",
      "Guide touristique privé",
      "Assurance voyage incluse",
      "Support dédié 24/7",
    ],
  },
  {
    id: "03",
    name: "Le Privilège",
    tagline: "L'expérience sans compromis",
    duration: "10 jours · 9 nuits",
    featured: false,
    badge: "VIP & Sur Mesure",
    features: [
      "Vol Business Class",
      "Hébergement 5 étoiles & Luxe",
      "Transferts VIP avec chauffeur",
      "Guide privé dédié",
      "Assurance tous risques",
      "Toutes activités incluses",
      "Conciergerie privée 24/7",
    ],
  },
];

export default function Packages() {
  const [selectedDestId, setSelectedDestId] = useState<string>("istanbul");

  const currentDest =
    destinations.find((d) => d.id === selectedDestId) || destinations[0];

  const getWhatsAppLink = (packageName: string, price: number) => {
    const text = `Bonjour, je souhaite réserver la formule "${packageName}" pour ${currentDest.name} (${price.toLocaleString("fr-FR")} MAD/pers.).`;
    return `https://wa.me/212661000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="bg-[#F7F5F0] text-[#111110] py-16 sm:py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#6F6A63] block mb-2 sm:mb-3 font-sans-clean">
            NOS FORMULES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-8xl font-normal text-[#111110] leading-[0.95] tracking-[-0.02em]">
            Choisissez votre<br />
            façon de <em className="font-normal italic text-[#C2714F]">voyager</em>.
          </h2>
          <p className="text-sm md:text-base font-light text-[#6F6A63] mt-3 sm:mt-5 font-sans-clean leading-relaxed">
            Des formules clés en main pensées autour de votre rythme, vos envies et votre budget.
          </p>
        </div>

        {/* Destination selector */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-4 border-b border-[#111110]/10">
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-[#6F6A63] font-sans-clean mr-2">
              Destination :
            </span>
            {destinations.map((dest) => {
              const isSelected = dest.id === selectedDestId;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestId(dest.id)}
                  className={`px-4 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium font-sans-clean rounded-full transition-all duration-300 ${
                    isSelected
                      ? "bg-[#111110] text-[#F7F5F0] shadow-sm scale-[1.02]"
                      : "bg-[#111110]/5 text-[#6F6A63] hover:bg-[#111110]/10 hover:text-[#111110]"
                  }`}
                >
                  {dest.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Offer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {packageTemplates.map((pkg) => {
            const currentPrice = currentDest.prices[pkg.id];

            return (
              <div
                key={pkg.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-sm transition-all duration-300 border ${
                  pkg.featured
                    ? "bg-[#EFECE6] border-[#C2714F]/40 shadow-lg shadow-[#111110]/5 md:-translate-y-2 hover:-translate-y-3"
                    : "bg-transparent border-[#111110]/10 hover:border-[#111110]/30 hover:bg-[#EFECE6]/50 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-px left-6 right-6 h-[2px] bg-[#C2714F]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#111110]/20 group-hover:text-[#C2714F] transition-colors duration-300">
                      {pkg.id}
                    </span>

                    {pkg.badge && (
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.18em] uppercase px-3 py-1 font-sans-clean transition-all duration-300 ${
                          pkg.featured
                            ? "bg-[#C2714F] text-[#F7F5F0]"
                            : "bg-[#111110]/5 text-[#6F6A63] group-hover:bg-[#C2714F]/10 group-hover:text-[#C2714F]"
                        }`}
                      >
                        {pkg.featured && (
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
                          </svg>
                        )}
                        <span>{pkg.badge}</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-[#C2714F] block mb-1 font-sans-clean">
                    {pkg.tagline}
                  </span>

                  <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#111110] leading-tight mb-3">
                    {pkg.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 bg-[#111110]/5 text-[#111110] text-[11px] font-medium px-2.5 py-1 rounded-sm mb-6 font-sans-clean">
                    <svg className="w-3.5 h-3.5 text-[#C2714F] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{pkg.duration}</span>
                  </div>

                  <ul className="space-y-3 pt-5 border-t border-[#111110]/10 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6F6A63] font-light font-sans-clean leading-relaxed">
                        <svg className="w-3.5 h-3.5 text-[#C2714F] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#111110]/10">
                  <div className="mb-5">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#6F6A63] block font-sans-clean mb-1">
                      À partir de
                    </span>

                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#111110] transition-all duration-300">
                        {currentPrice.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-xs font-medium text-[#6F6A63] font-sans-clean">
                        MAD / pers.
                      </span>
                    </div>
                  </div>

                  <Link
                    href={getWhatsAppLink(pkg.name, currentPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 font-sans-clean ${
                      pkg.featured
                        ? "bg-[#111110] text-[#F7F5F0] hover:bg-[#C2714F]"
                        : "border border-[#111110] text-[#111110] hover:bg-[#111110] hover:text-[#F7F5F0]"
                    }`}
                  >
                    <span>Commencer ce voyage</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}