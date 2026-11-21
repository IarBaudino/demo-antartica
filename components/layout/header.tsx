"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useUiStore } from "@/stores/ui-store";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/antartida", label: "Antártida" },
  { href: "/artico", label: "Ártico" },
  { href: "/viajes", label: "Viajes" },
  { href: "/embarcaciones", label: "Embarcaciones" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUiStore();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-[1.65rem] leading-none tracking-tight text-brand-primary"
          onClick={() => setMobileMenuOpen(false)}
        >
          {brand.agencyName}
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="text-sm font-medium text-brand-secondary hover:text-brand-primary"
          >
            Panel
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-primary lg:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={cn(
          "border-t border-brand-border bg-white lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
        aria-label="Menú móvil"
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-brand-charcoal hover:bg-brand-ice"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/admin"
              className="block rounded-lg px-3 py-2.5 text-brand-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Panel
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
