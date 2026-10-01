"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

type FilterRegion = "Tout" | "Afrique" | "Europe" | "Asie" | "Amériques";

const regions: FilterRegion[] = ["Tout", "Afrique", "Europe", "Asie", "Amériques"];

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<FilterRegion>("Tout");

  const filteredDestinations =
    selectedRegion === "Tout"
      ? destinations
      : destinations.filter((dest) => dest.region === selectedRegion);

  return (
    <main className="w-full min-h-screen bg-[#F7F5F0] text-[#111110]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#111412] text-[#F7F5F0] flex flex-col justify-between pt-36 pb-12 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#9E988E] font-sans-clean w-fit border border-[#F7F5F0]/10 hover:border-[#C2714F]/50 hover:text-[#F7F5F0] bg-[#1A1D1A] hover:bg-[#1F1F1D] px-4 py-2.5 rounded-full transition-all duration-300"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                &larr;
              </span>
              <span>Adventure</span>
            </Link>
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#C2714F] font-sans-clean">
              Collection Exclusive
            </span>
          </div>

          <div className="flex items-end justify-between border-b border-[#F7F5F0]/10 pb-10">
            <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-normal text-[#F7F5F0] leading-[0.92] tracking-[-0.02em]">
              Nos destinations.
            </h1>
            <span className="font-serif-editorial text-7xl sm:text-8xl font-normal text-[#F7F5F0]/10 leading-none select-none hidden sm:block">
              {String(destinations.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-[#9E988E] font-sans-clean">
              Filtrer par région
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {regions.map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium font-sans-clean rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#C2714F] text-[#F7F5F0] shadow-md"
                        : "bg-[#1A1D1A] text-[#9E988E] hover:text-[#F7F5F0] hover:bg-[#222623] border border-[#F7F5F0]/10"
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRID SECTION */}
      <section className="py-20 sm:py-28 md:py-36">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between border-b border-[#111110]/10 pb-6 mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6F6A63] font-sans-clean">
              Affichage : <strong className="text-[#111110] font-medium">{selectedRegion}</strong>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#6F6A63] font-sans-clean">
              {filteredDestinations.length} {filteredDestinations.length > 1 ? "Destinations" : "Destination"}
            </span>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {filteredDestinations.map((dest, idx) => (
                <article
                  key={dest.id}
                  className="group flex flex-col justify-between bg-transparent border border-[#111110]/10 p-5 sm:p-6 rounded-sm transition-all duration-300 hover:border-[#C2714F]/50 hover:bg-[#EFECE6]/40"
                >
                  <Link href={`/destinations/${dest.slug}`} className="block">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111110]/5 rounded-sm mb-6">
                      <Image
                        src={dest.image}
                        alt={`${dest.name}, ${dest.country}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 right-3 bg-[#111412]/80 backdrop-blur-sm text-[#F7F5F0] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 font-sans-clean font-medium rounded-sm">
                        {dest.region}
                      </span>
                    </div>

                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-[#C2714F] block mb-1 font-sans-clean">
                          {dest.country}
                        </span>
                        <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#111110] leading-tight">
                          {dest.name}
                        </h2>
                      </div>
                      <span className="font-serif-editorial text-2xl font-normal text-[#111110]/20 group-hover:text-[#C2714F] transition-colors duration-300 select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6F6A63] font-light leading-relaxed mb-6 font-sans-clean line-clamp-3">
                      {dest.description}
                    </p>
                  </Link>

                  <div className="pt-4 border-t border-[#111110]/10 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#6F6A63] block font-sans-clean">
                        À partir de
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#111110] font-sans-clean">
                        {dest.prices["01"].toLocaleString("fr-FR")} MAD
                      </span>
                    </div>

                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#111110] group-hover:text-[#C2714F] transition-colors duration-300 font-sans-clean"
                    >
                      <span>Découvrir</span>
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-[#111110]/20 rounded-sm">
              <p className="font-serif-editorial text-3xl text-[#111110] mb-2">
                Aucune destination trouvée.
              </p>
              <p className="text-sm text-[#6F6A63] font-sans-clean font-light mb-6">
                Aucun séjour n&apos;est actuellement disponible pour la région sélectionnée.
              </p>
              <button
                onClick={() => setSelectedRegion("Tout")}
                className="px-6 py-2.5 text-xs uppercase tracking-[0.18em] bg-[#111110] text-[#F7F5F0] hover:bg-[#C2714F] transition-colors font-sans-clean font-medium"
              >
                Afficher toutes les destinations
              </button>
            </div>
          )}
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}