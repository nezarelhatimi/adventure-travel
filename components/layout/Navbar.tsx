"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "#packages" },
  { label: "À propos", href: "#pourquoi" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-white/10 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xs font-medium tracking-[0.25em] text-[#F7F5F0] uppercase flex items-center gap-2"
        >
          ADVENTURE TRAVEL <span className="text-[#C2714F] text-[10px]">●</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-[#F7F5F0]/70 hover:text-[#F7F5F0] transition-colors font-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="https://wa.me/212661000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center border border-white/20 hover:border-[#C2714F] text-[#F7F5F0] hover:text-[#C2714F] text-xs uppercase tracking-[0.15em] px-5 py-2.5 transition-all duration-300"
        >
          Demander un devis
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#F7F5F0]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-[#F7F5F0]/80 hover:text-[#C2714F]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/212661000000"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C2714F] text-[#F7F5F0] text-xs uppercase tracking-[0.15em] py-3 text-center"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
}