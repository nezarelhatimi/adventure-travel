"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212661000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0A0A0B]/60 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-[0.15em] text-[#F7F5F0]/70 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all duration-300 group"
      aria-label="Contact WhatsApp"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] opacity-60 group-hover:opacity-100 transition-opacity" />
      <span>WhatsApp</span>
      <span className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}