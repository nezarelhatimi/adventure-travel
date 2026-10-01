"use client";

interface Reason {
  id: string;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    id: "01",
    title: "10 ans d'expérience",
    desc: "Plus de 10 ans à organiser des voyages d'exception pour des milliers de voyageurs.",
  },
  {
    id: "02",
    title: "Meilleurs prix garantis",
    desc: "Nous négocions directement avec nos partenaires afin de proposer des tarifs privilégiés.",
  },
  {
    id: "03",
    title: "Voyage 100% sécurisé",
    desc: "Assurance voyage incluse, assistance dédiée et support disponible 24/7.",
  },
  {
    id: "04",
    title: "Sur mesure & flexible",
    desc: "Chaque itinéraire est façonné selon vos envies, vos dates et vos préférences.",
  },
];

export default function Trust() {
  return (
    <section id="confiance" className="bg-[#F7F5F0] text-[#111110] py-16 sm:py-24 md:py-36">
      
      {/* Séparateur Éditorial */}
      <div className="relative w-full mb-12 sm:mb-16 md:mb-24 select-none">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-center relative">
          
          {/* Ligne fine d'arrière-plan */}
          <div className="w-full border-t border-[#111110]/10" />

          {/* Badge Central Épuré */}
          <div className="absolute px-5 py-2 bg-[#EFECE6] border border-[#111110]/10 rounded-full shadow-sm">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-[#C2714F] font-sans-clean block">
              L&apos;Expérience Adventure
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: MAIN TESTIMONIAL */}
          <div className="lg:col-span-7">

            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#C2714F] block mb-2 sm:mb-3 font-sans-clean">
              TÉMOIGNAGES
            </span>

            <blockquote className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#111110] leading-snug tracking-tight mb-6 sm:mb-8">
              &ldquo;Adventure a pensé à chaque détail. Hôtel de luxe, excursions privées, tout était absolument parfait.&rdquo;
            </blockquote>

            <div className="mb-8">
              <p className="text-sm font-medium text-[#111110] font-sans-clean tracking-wide">
                Sara &amp; Youssef
              </p>

              <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-[#C2714F] font-sans-clean mt-1">
                Marrakech · Bali · 10 jours
              </p>
            </div>

            <hr className="border-t border-[#111110]/10 mb-8 max-w-xl" />

            {/* HIGHLIGHTED TESTIMONIAL CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              
              {/* Card 1 */}
              <div className="bg-[#EFECE6] border border-[#111110]/10 p-5 sm:p-6 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-[#C2714F]/40 hover:shadow-md">
                <p className="text-xs sm:text-sm text-[#111110] font-light font-sans-clean leading-relaxed italic mb-6">
                  &ldquo;Voyage parfait du début à la fin. L&apos;équipe Adventure a tout géré avec un grand professionnalisme.&rdquo;
                </p>

                <p className="text-[11px] font-medium text-[#111110] font-sans-clean uppercase tracking-wider border-t border-[#111110]/10 pt-3">
                  Fatima Z. <span className="text-[#C2714F] font-medium">· Casablanca</span>
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#EFECE6] border border-[#111110]/10 p-5 sm:p-6 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-[#C2714F]/40 hover:shadow-md">
                <p className="text-xs sm:text-sm text-[#111110] font-light font-sans-clean leading-relaxed italic mb-6">
                  &ldquo;Des prix avantageux et un service irréprochable du premier contact jusqu&apos;au retour.&rdquo;
                </p>

                <p className="text-[11px] font-medium text-[#111110] font-sans-clean uppercase tracking-wider border-t border-[#111110]/10 pt-3">
                  Karim M. <span className="text-[#C2714F] font-medium">· Rabat</span>
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT: WHY US */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#111110]/10">

            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#6F6A63] block mb-2 sm:mb-3 font-sans-clean">
              POURQUOI NOUS CHOISIR
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#111110] leading-tight mb-8">
              Votre confiance,<br />
              <em className="font-normal italic text-[#C2714F]">
                notre priorité
              </em>.
            </h3>

            <div className="divide-y divide-[#111110]/10 border-t border-b border-[#111110]/10">

              {reasons.map((item) => (
                <div key={item.id} className="py-5 group">

                  <div className="flex items-start gap-4">

                    <span className="font-serif-editorial text-2xl font-normal text-[#111110]/20 group-hover:text-[#C2714F] transition-colors duration-300 select-none shrink-0 leading-none pt-0.5">
                      {item.id}
                    </span>

                    <div>
                      <h4 className="font-sans-clean text-base font-medium text-[#111110] mb-1 tracking-tight group-hover:text-[#C2714F] transition-colors duration-300">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#6F6A63] font-light font-sans-clean leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}