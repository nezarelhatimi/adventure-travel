"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-[#F7F5F0] text-[#111110] py-16 sm:py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        
        {/* Editorial Section Header */}
        <div className="mb-12 sm:mb-20 md:mb-28 max-w-2xl">
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#6F6A63] block mb-2 sm:mb-3 font-sans-clean">
            DESTINATIONS
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-8xl font-normal text-[#111110] leading-[0.95] tracking-[-0.02em]">
            Où partir ?
          </h2>
          <p className="text-sm md:text-base font-light text-[#6F6A63] mt-3 sm:mt-5 font-sans-clean leading-relaxed">
            Des séjours sur mesure pensés autour de vos envies d&apos;évasion.
          </p>
        </div>

        {/* Editorial Alternating Layout */}
        <div className="space-y-16 sm:space-y-28 md:space-y-40">
          {destinations.map((dest, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={dest.name}
                className="pt-10 sm:pt-16 md:pt-24 border-t border-[#111110]/10 first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
                  
                  {/* Image interactive avec lien vers la destination */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <Link 
                      href={`/destinations/${dest.slug}`}
                      className="relative aspect-[4/3] sm:aspect-[3/2] w-full overflow-hidden rounded-sm bg-[#111110]/5 group block"
                    >
                      <Image
                        src={dest.image}
                        alt={`${dest.name}, ${dest.country}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </Link>
                  </div>

                  {/* Contenu textuel */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2 lg:pl-4"
                    }`}
                  >
                    <span className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-normal text-[#111110]/15 select-none leading-none mb-1">
                      {dest.id}
                    </span>

                    <div className="mb-3 sm:mb-4">
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-[#C2714F] block mb-1">
                        {dest.country}
                      </span>
                      <Link href={`/destinations/${dest.slug}`}>
                        <h3 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#111110] leading-tight hover:text-[#C2714F] transition-colors duration-300">
                          {dest.name}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-sm sm:text-base text-[#6F6A63] font-light leading-relaxed mb-6 sm:mb-8 font-sans-clean max-w-md">
                      {dest.description}
                    </p>

                    <div className="flex items-center justify-between sm:justify-start sm:gap-12 pt-4 border-t border-[#111110]/10">
                      <div>
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#6F6A63] block font-sans-clean">
                          À partir de
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#111110] font-sans-clean">
                          {dest.prices?.["01"]?.toLocaleString("fr-FR")} MAD
                        </span>
                      </div>

                      {/* Bouton "Découvrir" pointant vers la page dynamique /destinations/[slug] */}
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#111110] hover:text-[#C2714F] transition-colors duration-300 font-sans-clean font-medium"
                      >
                        <span>Découvrir</span>
                        <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}