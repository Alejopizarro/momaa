"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const alternatePath = pathname.replace(
    `/${locale}`,
    locale === "es" ? "/en" : "/es",
  );
  const alternateLocale = locale === "es" ? "EN" : "ES";
  const currentLocaleLabel = locale === "es" ? "ES" : "EN";

  const navLinks = [
    { href: `/${locale}/projects`, label: t("proyectos") },
    { href: `/${locale}/about`, label: t("sobreNosotros") },
    { href: `/${locale}/news`, label: locale === "es" ? "Noticias" : "News" },
    { href: `/${locale}/contact`, label: t("contacto") },
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[100] bg-white"
        style={{
          boxShadow: scrolled
            ? "0 1px 20px rgba(0,0,0,0.06)"
            : "0 1px 0 rgba(0,0,0,0.06)",
          transition: "box-shadow 500ms ease",
        }}
      >
        <div className="container-momaa h-16 flex items-center justify-between">
          {/* Left: logo + links */}
          <div className="flex items-center gap-12 lg:gap-16">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center"
              aria-label="MoMaA"
            >
              <img
                src="/logo-momaa.svg"
                alt="MoMaA"
                className="h-5 md:h-6 w-auto"
                style={{ filter: "brightness(0)" }}
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.href.startsWith(`/${locale}/`)
                  ? pathname.startsWith(link.href)
                  : pathname === `/${locale}`;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 ${
                      isActive
                        ? "bg-[#E8572A] text-white font-semibold"
                        : "text-black/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: locale + social + hamburger */}
          <div className="flex items-center gap-5 md:gap-6">
            {/* Language switcher — desktop */}
            <div className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-r border-black/10 pr-5 md:pr-6">
              <span className="text-[#E8572A]">{currentLocaleLabel}</span>
              <span className="text-black/20">/</span>
              <Link
                href={alternatePath}
                className="text-black/30 hover:text-[#111111] transition-colors duration-200"
              >
                {alternateLocale}
              </Link>
            </div>

            {/* Social icons — desktop */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://es.linkedin.com/in/andr%C3%A9s-manuel-mateo-fern%C3%A1ndez-388507107"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black/40 hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/momaa_architects/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black/40 hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="mailto:andres@momaa.es"
                aria-label="Email"
                className="text-black/40 hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                >
                  <rect x="2" y="4" width="20" height="16" rx="0" />
                  <path d="M2 4l10 9 10-9" />
                </svg>
              </a>
            </div>

            {/* Hamburger — mobile/tablet */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden p-2 text-black/60 hover:text-black transition-colors duration-200"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                /* X icon */
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path
                    d="M1 1l16 16M17 1L1 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="22" height="14" fill="none" viewBox="0 0 22 14">
                  <path
                    d="M1 1h20M1 7h20M1 13h20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown — panel bajo el navbar */}
      <div
        className={`fixed top-16 left-0 right-0 z-[99] bg-white lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[80vh] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "max-h-0"
        }`}
      >
        <div className="px-8 pt-6 pb-8 flex flex-col gap-6">
          {/* Nav links */}
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-4 text-lg font-display text-[#111111] uppercase tracking-wider border-b border-black/8 last:border-0 hover:text-[#E8572A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Idioma + redes en una fila */}
          <div className="flex items-center justify-between pt-2">
            {/* Language switcher */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#E8572A]">
                {currentLocaleLabel}
              </span>
              <span className="text-black/20 text-xs">·</span>
              <Link
                href={alternatePath}
                className="text-[10px] font-black uppercase tracking-widest text-black/30 hover:text-[#111111] transition-colors duration-200"
              >
                {alternateLocale}
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://es.linkedin.com/in/andr%C3%A9s-manuel-mateo-fern%C3%A1ndez-388507107"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black/40 hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/momaa_architects/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black/40 hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="mailto:andres@momaa.es"
                aria-label="Email"
                className="text-black/40 hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                >
                  <rect x="2" y="4" width="20" height="16" rx="0" />
                  <path d="M2 4l10 9 10-9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
