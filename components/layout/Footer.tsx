"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#111412] text-[#F5F3ED] font-sans pt-16 pb-8 border-t border-white/10 select-none-text"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 md:pb-16 border-b border-white/10">
          
          {/* LEFT COLUMN (6 COLS): HEADLINE, CTA, BRAND & NAVIGATION */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            
            {/* HEADLINE & WHATSAPP CTA */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F5F3ED] leading-[1.15] tracking-tight">
                  Planifions votre voyage.
                </h2>
                <p className="text-xs sm:text-sm text-[#9A978F] font-normal leading-relaxed mt-3 max-w-md">
                  Contactez-nous sur WhatsApp ou passez nous voir à Casablanca.
                </p>
              </div>

              <a
                href="https://wa.me/212661000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1C2A22] hover:bg-[#23352B] text-[#F5F3ED] text-xs font-medium px-5 py-3 rounded-full tracking-wider uppercase border border-[#2E4537] transition-all duration-300 group w-fit shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Demander un devis sur WhatsApp</span>
                <span className="text-xs text-[#9A978F] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                  &rarr;
                </span>
              </a>
            </div>

            {/* BRAND & NAVIGATION */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="font-serif text-lg tracking-widest text-[#F5F3ED] block uppercase">
                  Adventure Travel
                </span>
                <p className="text-xs text-[#828078] font-normal leading-relaxed">
                  Votre agence de voyage à Casablanca. Voyages sur mesure au Maroc et à l&apos;international.
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#78766E] block mb-3 font-mono">
                  Navigation
                </span>
                <nav className="flex flex-col space-y-2 text-xs font-medium tracking-widest uppercase text-[#C8C5BB]">
                  <Link href="#destinations" className="hover:text-white transition-colors duration-150">
                    Destinations
                  </Link>
                  <Link href="#packages" className="hover:text-white transition-colors duration-150">
                    Packages
                  </Link>
                  <Link href="#pourquoi" className="hover:text-white transition-colors duration-150">
                    À propos
                  </Link>
                  <Link href="#contact" className="hover:text-white transition-colors duration-150">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (6 COLS): MAP ON TOP, CONTACT INFO & HORAIRES BELOW */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* 1. MAP (TOP) */}
            <div className="relative w-full h-[200px] sm:h-[230px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group bg-[#181C1A]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9!2d-7.6335!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzOCcwMC42Ilc!5e0!3m2!1sfr!2sma!4v1620000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale invert contrast-[1.2] opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                title="Adventure Travel Location Map"
              />
              <a
                href="https://maps.google.com/?q=45+Boulevard+Mohammed+V+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-[#111412]/90 hover:bg-black text-[#F5F3ED] text-[10px] tracking-wider uppercase font-medium px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/15 transition-all duration-200 flex items-center gap-1.5 shadow-md"
              >
                <span>Ouvrir dans Maps</span>
                <span className="text-[10px]">&nearr;</span>
              </a>
            </div>

            {/* 2. CONTACT DETAILS & HORAIRES (DIRECTLY BELOW MAP) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              
              {/* NOUS TROUVER & CONTACT DIRECT */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#78766E] block mb-2 font-mono">
                    Nous trouver
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F3ED] font-medium leading-tight">
                    45 Boulevard Mohammed V
                  </p>
                  <p className="text-xs text-[#828078] mt-0.5">
                    Casablanca, Maroc
                  </p>
                </div>

                <div className="pt-1 space-y-1">
                  <a
                    href="tel:+212661000000"
                    className="block text-xs sm:text-sm text-[#C8C5BB] font-medium hover:text-white transition-colors duration-150"
                  >
                    +212 661 000 000
                  </a>
                  <a
                    href="mailto:contact@adventuretravel.ma"
                    className="block text-xs text-[#828078] hover:text-[#F5F3ED] transition-colors duration-150 underline underline-offset-4 decoration-white/15"
                  >
                    contact@adventuretravel.ma
                  </a>
                </div>
              </div>

              {/* HORAIRES */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#78766E] block mb-2 font-mono">
                  Horaires
                </span>
                <div className="space-y-2 text-xs text-[#C8C5BB]">
                  <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                    <span className="text-[#828078]">Lundi — Vendredi</span>
                    <span className="font-medium text-[#F5F3ED]">9h — 18h</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[#828078]">Samedi</span>
                    <span className="font-medium text-[#F5F3ED]">9h — 13h</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 flex justify-between items-center text-[11px] text-[#63615A] tracking-wider uppercase">
          <p>© 2026 Adventure Travel. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}