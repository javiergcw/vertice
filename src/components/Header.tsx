"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicio" },
  { label: "Formación", href: "/formacion" },
  { label: "Experiencia", href: "/experiencia" },
];

const SCROLL_THRESHOLD = 32;
const SCROLL_THROTTLE_MS = 100;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    let rafId: number | null = null;
    let lastCall = 0;

    let settleTimeoutId: ReturnType<typeof setTimeout> | null = null;

    function updateScrolled() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    function onScroll() {
      const y = window.scrollY;
      const atTop = y <= SCROLL_THRESHOLD;

      // Siempre actualizar al llegar al tope (evita bug al subir rápido)
      if (atTop) {
        if (settleTimeoutId) clearTimeout(settleTimeoutId);
        settleTimeoutId = null;
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = null;
        setScrolled(false);
        return;
      }

      const now = Date.now();
      if (now - lastCall < SCROLL_THROTTLE_MS) return;
      lastCall = now;
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateScrolled();
        rafId = null;
        // Verificación final tras el scroll (detecta cuando termina scroll rápido)
        if (settleTimeoutId) clearTimeout(settleTimeoutId);
        settleTimeoutId = setTimeout(() => {
          if (window.scrollY <= SCROLL_THRESHOLD) setScrolled(false);
          settleTimeoutId = null;
        }, 150);
      });
    }

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (settleTimeoutId) clearTimeout(settleTimeoutId);
    };
  }, []);

  const headerScrolled = scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        headerScrolled
          ? "border-white/20 bg-primary"
          : "border-border bg-white/95"
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="VÉRTICE - Inicio"
        >
          <Image
            src={headerScrolled ? "/VÉRTICE-03.png" : "/VÉRTICE-02.png"}
            alt="VÉRTICE - Consultoría especializada en logística, comercio exterior y gestión del riesgo"
            width={200}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "border-b-2 border-accent pb-0.5 text-accent"
                    : headerScrolled
                      ? "text-white/90 hover:text-white"
                      : "text-muted-foreground hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contactanos"
            className={`hidden rounded-lg px-5 py-2.5 text-sm font-medium transition-colors md:inline-block ${
              headerScrolled
                ? "bg-accent text-white hover:bg-accent-hover"
                : "bg-primary text-white hover:bg-primary-hover"
            }`}
          >
            Contáctanos
          </Link>
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border md:hidden ${
              headerScrolled
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-border text-muted-foreground hover:bg-surface"
            }`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`border-t px-6 py-4 md:hidden ${
            headerScrolled
              ? "border-white/20 bg-primary"
              : "border-border bg-white"
          }`}
        >
          <nav className="flex flex-col gap-3" aria-label="Menú móvil">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium ${
                    active
                      ? "text-accent font-semibold"
                      : headerScrolled
                        ? "text-white/90 hover:text-white"
                        : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contactanos"
              className={`mt-2 inline-block rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white ${
                headerScrolled
                  ? "bg-accent hover:bg-accent-hover"
                  : "bg-primary hover:bg-primary-hover"
              }`}
              onClick={() => setOpen(false)}
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
