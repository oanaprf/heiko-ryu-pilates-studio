"use client";

import { useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  bookLabel: string;
}

export default function MobileMenu({ open, onClose, links, bookLabel }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-slate/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-8">
          <div className="mb-12 flex items-center justify-between">
            <span className="font-serif text-2xl italic text-slate">Heiko Ryu</span>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-linen"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate transition-colors hover:bg-linen hover:text-ocean"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <a
              href="#contact"
              onClick={onClose}
              className="block rounded-full bg-ocean px-6 py-3.5 text-center text-sm font-medium text-white transition-all hover:bg-ocean-dark"
            >
              {bookLabel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
