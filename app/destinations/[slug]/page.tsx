"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { destinations, type Destination } from "@/lib/data/destinations";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export interface MomentFort {
  id: number;
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface Package {
  id: string;
  tag: string;
  title: string;
  duration: string;
  hotel: string;
  price: number;
  popular?: boolean;
  features: string[];
}

// Destination de secours si le slug est introuvable
const fallbackDestination: Destination = {
  id: "01",
  name: "New York",
  slug: "new-york",
  country: "États-Unis",
  region: "Amériques",
  price: 18500,
  image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  secondaryImage: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2070&auto=format&fit=crop",
  description:
    "Une immersion totale au cœur de Manhattan, entre gratte-ciels iconiques, musées d'exception, comédies musicales sur Broadway et l'énergie unique de la métropole américaine.",
  prices: { "01": 18500 },
};

// Générateur dynamique des Moments Forts selon la destination
function getMomentsForts(dest: Destination): MomentFort[] {
  if ((dest as any).momentsForts && (dest as any).momentsForts.length > 0) {
    return (dest as any).momentsForts;
  }

  return [
    {
      id: 0,
      number: "01",
      tag: "PANORAMA EXCLUSIF",
      title: `${dest.name} depuis le ciel`,
      description: `Un survol privatif d'exception pour contempler la beauté et les panoramas uniques de ${dest.name}.`,
      image: dest.image,
      alt: `${dest.name} vue du ciel`,
    },
    {
      id: 1,
      number: "02",
      tag: "IMMERSION CULTURELLE",
      title: `Les secrets de ${dest.name}`,
      description: `Accès privilégié aux coulisses, monuments majeurs et trésors cachés de ${dest.country}.`,
      image: dest.secondaryImage || dest.image,
      alt: `Immersion culturelle à ${dest.name}`,
    },
    {
      id: 2,
      number: "03",
      tag: "MOMENT PRIVILÉGIÉ",
      title: "Sérénité & Évasion",
      description: `Un moment magique au lever du jour dans les plus beaux lieux de ${dest.name}, loin de l'agitation.`,
      image: dest.image,
      alt: `Sérénité à ${dest.name}`,
    },
    {
      id: 3,
      number: "04",
      tag: "TABLE PRIVÉE",
      title: `Les adresses secrètes de ${dest.name}`,
      description: `Une promenade gastronomique confidentielle guidée par nos experts locaux.`,
      image: dest.secondaryImage || dest.image,
      alt: `Gastronomie à ${dest.name}`,
    },
  ];
}

// Générateur dynamique des Formules selon la destination
function getPackages(dest: Destination): Package[] {
  if ((dest as any).packages && (dest as any).packages.length > 0) {
    return (dest as any).packages;
  }

  const basePrice = dest.prices?.["01"] || dest.price || 15000;

  return [
    {
      id: "essential",
      tag: "Essentiel",
      title: `L'Essentiel de ${dest.name}`,
      duration: "6 Jours / 5 Nuits",
      hotel: "Boutique Hôtel 4★ (Emplacement central)",
      price: basePrice,
      features: [
        `Vols A/R au départ de Casablanca vers ${dest.country}`,
        "Hébergement 4★ supérieur avec petit-déjeuner",
        `Pass Express Attractions Iconiques de ${dest.name}`,
        "Transferts privés VIP Aéroport – Hôtel",
      ],
    },
    {
      id: "signature",
      tag: "Signature",
      title: `L'Expérience ${dest.name}`,
      duration: "8 Jours / 7 Nuits",
      hotel: "Luxury Hotel 5★ Vue Panoramique",
      price: Math.round(basePrice * 1.55),
      popular: true,
      features: [
        "Vols A/R Classe Affaires / Économie Supérieure",
        `Hébergement 5★ d'exception à ${dest.name}`,
        "Excursion exclusive ou survol panoramique inclus",
        "Billet expérience VIP / spectacle exclusif",
        "Service de conciergerie Adventure dédié 24/7",
      ],
    },
    {
      id: "bespoke",
      tag: "Sur-Mesure",
      title: "Grand Tour Prestige",
      duration: "10 Jours / 9 Nuits",
      hotel: "Suites Privées 5★ & Resorts d'exception",
      price: Math.round(basePrice * 2.25),
      features: [
        "Itinéraire 100% personnalisé selon vos envies",
        `Visites privées d'ateliers & musées à ${dest.name}`,
        "Chauffeur privé à disposition pendant le séjour",
        "Réservations garanties dans les tables étoilées",
      ],
    },
  ];
}

export default function DestinationDetailPage({ params }: DestinationPageProps) {
  const resolvedParams = use(params);
  const foundDestination = destinations.find((d) => d.slug === resolvedParams.slug);
  const dest = foundDestination || fallbackDestination;

  const momentsForts = getMomentsForts(dest);
  const packagesList = getPackages(dest);
  const startingPrice = dest.prices?.["01"] || dest.price || 15000;

  const [activeMoment, setActiveMoment] = useState<number>(0);

  return (
    <main className="w-full min-h-screen bg-[#F7F5F0] text-[#111110] selection:bg-[#C2714F] selection:text-[#F7F5F0]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[620px] max-h-[950px] bg-[#111412] text-[#F7F5F0] overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover object-center scale-[1.02] filter brightness-[0.78] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111412] via-[#111412]/40 to-[#111412]/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 flex items-center justify-between">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-[#F7F5F0]/80 font-sans-clean bg-[#111412]/50 hover:bg-[#111412]/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#F7F5F0]/15 hover:border-[#C2714F]/60 transition-all duration-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
            <span>Adventure</span>
          </Link>

          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#C2714F] font-sans-clean bg-[#111412]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C2714F]/30">
            {dest.region}
          </span>
        </div>

        <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <div className="max-w-xl lg:max-w-2xl lg:ml-[6%] text-center sm:text-left transition-all">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-[#C2714F] hidden sm:inline-block" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-[#C2714F] font-sans-clean">
                {dest.country}
              </span>
            </div>

            <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#F7F5F0] leading-[0.88] tracking-[-0.02em] mb-6">
              {dest.name}
            </h1>

            <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-6 pt-2 border-t border-[#F7F5F0]/20 max-w-lg mx-auto sm:mx-0">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#9E988E] font-sans-clean">
                Séjour d&apos;exception à partir de
              </span>
              <span className="font-serif-editorial text-2xl sm:text-3xl text-[#F7F5F0]">
                {startingPrice.toLocaleString("fr-FR")} <span className="text-lg font-sans-clean">MAD</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL SPREAD: L'ESPRIT & MOMENTS FORTS */}
      <section className="relative w-full py-20 sm:py-28 border-b border-[#111110]/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-6 -left-10 select-none pointer-events-none font-serif-editorial text-[14rem] sm:text-[22rem] font-normal text-[#111110]/[0.02] leading-none tracking-tighter uppercase z-0"
        >
          {dest.name}
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* COLUMN GAUCHE */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pr-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.28em] text-[#C2714F] font-sans-clean block mb-4">
                  L&apos;Esprit du Voyage
                </span>

                <h2 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#111110] leading-[0.95] tracking-[-0.015em] mb-6">
                  Capturer l&apos;atmosphère unique de{" "}
                  <em className="italic text-[#C2714F] font-normal block sm:inline">
                    {dest.name}.
                  </em>
                </h2>

                <p className="font-serif-editorial text-lg sm:text-xl text-[#111110]/90 font-normal leading-relaxed italic border-l border-[#C2714F] pl-4 py-0.5 mb-6">
                  {dest.description}
                </p>

                <p className="text-xs sm:text-sm text-[#6F6A63] font-light leading-relaxed font-sans-clean max-w-lg">
                  Adventure conçoit votre séjour à {dest.name} comme une succession d&apos;instants privilégiés. Loin des circuits traditionnels, nous combinons les symboles incontournables de {dest.country} avec des accès privés pour vivre votre voyage dans ce qu&apos;il a de plus raffiné.
                </p>
              </div>

              <div className="pt-4 border-t border-[#111110]/10 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-[#9E988E] font-sans-clean">
                <span>{dest.name.toUpperCase()} &middot; {dest.country.toUpperCase()}</span>
                <span>ADVENTURE SELECTION</span>
              </div>
            </div>

            {/* COLUMN DROITE */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-[#111110]/20">
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.28em] text-[#C2714F] font-sans-clean">
                  Les Moments Forts
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9E988E] font-sans-clean">
                  {String(momentsForts.length).padStart(2, "0")} Moments à vivre
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
                
                <div className="md:col-span-7 divide-y divide-[#111110]/10">
                  {momentsForts.map((moment) => {
                    const isActive = activeMoment === moment.id;
                    return (
                      <div
                        key={moment.id}
                        onMouseEnter={() => setActiveMoment(moment.id)}
                        className={`group cursor-pointer py-5 transition-all duration-300 ${
                          isActive ? "pl-2" : "opacity-85 hover:opacity-100"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5 text-[9px] uppercase tracking-[0.24em] font-sans-clean">
                          <span className="text-[#C2714F] font-medium">{moment.number}</span>
                          <span className="text-[#9E988E]">&middot;</span>
                          <span className="text-[#9E988E] font-medium">{moment.tag}</span>
                        </div>

                        <div className="flex items-baseline justify-between gap-3 mb-2">
                          <h3
                            className={`font-serif-editorial text-xl sm:text-2xl transition-all duration-300 ${
                              isActive ? "text-[#C2714F] translate-x-1" : "text-[#111110] group-hover:text-[#C2714F]"
                            }`}
                          >
                            {moment.title}
                          </h3>
                          <span
                            className={`text-sm text-[#C2714F] transition-all duration-300 shrink-0 ${
                              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                          >
                            &rarr;
                          </span>
                        </div>

                        <p className="text-xs text-[#6F6A63] font-light leading-relaxed font-sans-clean max-w-sm">
                          {moment.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Panneau de prévisualisation */}
                <div className="hidden md:block md:col-span-5 sticky top-32">
                  <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-[#111110]/5 border border-[#111110]/10 shadow-sm">
                    {momentsForts.map((moment) => (
                      <div
                        key={moment.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                          activeMoment === moment.id ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={moment.image}
                          alt={moment.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="absolute inset-0 object-cover object-center filter brightness-[0.92] contrast-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4 text-[#F7F5F0]">
                          <span className="text-[9px] uppercase tracking-[0.2em] font-sans-clean text-[#C2714F] block mb-0.5">
                            {moment.tag}
                          </span>
                          <span className="font-serif-editorial text-sm italic block">
                            {moment.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISUAL BANNER */}
      <section className="w-full py-10 sm:py-14 bg-[#F7F5F0]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="relative w-full aspect-[21/9] min-h-[220px] max-h-[460px] overflow-hidden rounded-sm bg-[#111110]/5 border border-[#111110]/10">
            <Image
              src={dest.secondaryImage || dest.image}
              alt={`${dest.name} - Vue d'exception`}
              fill
              sizes="100vw"
              className="absolute inset-0 object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.01]"
            />
          </div>

          <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-[#6F6A63]">
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium font-sans-clean text-[#111110]">
              {dest.name.toUpperCase()} &middot; {dest.country.toUpperCase()}
            </span>
            <span className="font-serif-editorial italic text-xs sm:text-sm text-[#6F6A63]">
              &ldquo;Un voyage pensé dans les moindres détails.&rdquo;
            </span>
          </div>

        </div>
      </section>

      {/* 4. NOS FORMULES */}
      <section className="w-full py-16 sm:py-24 bg-[#F7F5F0]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

          <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#C2714F] font-sans-clean block mb-2">
              Nos Formules
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#111110] mb-3">
              Nos formules pour <em className="italic text-[#C2714F]">{dest.name}</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A63] font-light font-sans-clean tracking-wide">
              Des séjours d&apos;exception créés sur-mesure pour découvrir {dest.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {packagesList.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-sm bg-[#F7F5F0] border transition-all duration-300 ${
                  pkg.popular
                    ? "border-[#C2714F] shadow-lg shadow-[#C2714F]/5 bg-white/40"
                    : "border-[#111110]/15 hover:border-[#111110]/40"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C2714F] text-[#F7F5F0] text-[9px] uppercase tracking-[0.2em] font-medium font-sans-clean px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C2714F] font-sans-clean">
                      {pkg.tag}
                    </span>
                    <span className="text-xs text-[#6F6A63] font-sans-clean">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#111110] mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#6F6A63] font-sans-clean font-light mb-6 border-b border-[#111110]/10 pb-4">
                    {pkg.hotel}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111110]/80 font-sans-clean font-light">
                        <span className="text-[#C2714F] text-sm leading-none mt-0.5">&bull;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#111110]/10 flex flex-col gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#6F6A63] block font-sans-clean">
                      Tarif par personne
                    </span>
                    <span className="font-serif-editorial text-2xl text-[#111110]">
                      {pkg.price.toLocaleString("fr-FR")} <span className="text-xs font-sans-clean font-normal">MAD</span>
                    </span>
                  </div>

                  <Link
                    href={`https://wa.me/212661000000?text=${encodeURIComponent(
                      `Bonjour, je souhaite réserver la formule "${pkg.title}" pour ${dest.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 text-center text-xs uppercase tracking-[0.18em] font-medium font-sans-clean transition-all duration-300 rounded-sm ${
                      pkg.popular
                        ? "bg-[#C2714F] text-[#F7F5F0] hover:bg-[#a85a3a]"
                        : "bg-[#111110] text-[#F7F5F0] hover:bg-[#C2714F]"
                    }`}
                  >
                    Réserver ce séjour
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}