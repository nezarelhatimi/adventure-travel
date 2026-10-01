"use client";

import { useState } from "react";
import Link from "next/link";

interface Destination {
  id: string;
  code: string;
  name: string;
  videoUrl: string;
  posterUrl: string;
}

const destinations: Destination[] = [
  {
    id: "01",
    code: "MARRAKECH",
    name: "Marrakech",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-resort-and-the-ocean-4122-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "02",
    code: "DUBAI",
    name: "Dubai",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-view-of-beach-and-sea-waves-4121-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "03",
    code: "LE CAIRE",
    name: "Le Caire",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sand-dunes-in-a-desert-41312-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=2000&q=80",
  },
];

export default function Hero() {
  const [activeId, setActiveId] = useState("03"); // Syncs with Egypt / Le Caire imagery

  return (
    <section className="relative w-full h-screen min-h-[760px] flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
      {/* Background Video Layer Syncing with Active State */}
      {destinations.map((dest) => {
        const isActive = dest.id === activeId;
        return (
          <div
            key={dest.id}
            className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-[0.80] contrast-[1.05]"
              poster={dest.posterUrl}
            >
              <source src={dest.videoUrl} type="video/mp4" />
            </video>
          </div>
        );
      })}

      {/* Directional Gradient Shadow (Text contrast layer) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A0A0B]/85 via-[#0A0A0B]/40 to-transparent pointer-events-none" />

      {/* 12-Column Grid Layout with increased edge padding (px-8 md:px-16 lg:px-20) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 h-full grid grid-cols-12 grid-rows-[auto_1fr_auto] pt-28 pb-10">
        
        {/* 1. Origin Stamp */}
        <div className="col-span-12 row-start-1 self-start text-[11px] font-medium tracking-[0.25em] text-[#F7F5F0]/80 uppercase flex items-center gap-2">
          <span>ADVENTURE TRAVEL</span>
          <span className="text-[#C2714F] text-[10px]">·</span>
          <span className="text-[#F7F5F0]/50">DEPUIS CASABLANCA</span>
        </div>

        {/* 2. Unified Vertically-Centered Text Block (Lifts content off bottom ticker) */}
        <div className="col-span-12 lg:col-span-9 row-start-2 self-center flex flex-col justify-center py-4">
          
          {/* Main Headline with generous bottom margin */}
          <h1 className="font-serif-editorial text-6xl sm:text-7xl lg:text-8xl font-normal text-[#F7F5F0] leading-[0.92] tracking-[-0.02em] mb-12 lg:mb-16">
            Le monde<br />
            vous <em className="font-normal italic text-[#F7F5F0]">attend</em>.
          </h1>

          {/* Subhead & CTA Group */}
          <div className="max-w-md">
            {/* Editorial Hairline Mark (20px) */}
            <div className="w-5 h-[1px] bg-[#F7F5F0]/30 mb-6" />
            
            {/* Subtitle with distinct gap below headline and above CTA */}
            <p className="text-sm sm:text-base font-light text-[#F7F5F0]/75 leading-relaxed mb-8 font-sans-clean">
              Voyages sur mesure depuis Casablanca.
            </p>
            
            {/* CTA with expanded top separation */}
            <Link
              href="#packages"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#F7F5F0] font-normal transition-all"
            >
              <span>Découvrir</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5 text-[#F7F5F0]">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 3. Text-Only Destination Ticker */}
        <nav
          aria-label="Destination selector"
          className="col-span-12 row-start-3 pt-6 border-t border-white/10 flex items-center gap-10 overflow-x-auto no-scrollbar pl-1"
        >
          {destinations.map((dest) => {
            const isActive = activeId === dest.id;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveId(dest.id)}
                className={`group relative text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap bg-transparent border-none cursor-pointer py-1 ${
                  isActive
                    ? "text-[#F7F5F0] font-medium"
                    : "text-[#F7F5F0]/40 hover:text-[#F7F5F0]/80"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2714F] inline-block transition-all duration-300" />
                )}
                <span>
                  {dest.id} {dest.code}
                </span>
                
                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C2714F]/60" />
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </section>
  );
}