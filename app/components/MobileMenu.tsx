"use client";

import { useTranslation } from "react-i18next";

interface NavLink {
  href: string;
  key: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
        open
          ? "max-h-80 border-b border-grey-200 opacity-100"
          : "max-h-0 border-b border-transparent opacity-0"
      }`}
    >
      <nav
        className="px-[clamp(24px,5vw,80px)] py-8"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block py-2.5 font-sans text-[13px] tracking-[0.1em] uppercase text-grey-500 transition-colors duration-200 hover:text-ocean"
          >
            {t(link.key)}
          </a>
        ))}

      </nav>
    </div>
  );
}
