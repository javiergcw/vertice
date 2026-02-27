
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
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Detectar scroll
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

      if (atTop) {
        if (settleTimeoutId) clearTimeout(settleTimeoutId);
        if (rafId !== null) cancelAnimationFrame(rafId);
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

        if (settleTimeoutId) clearTimeout(settleTimeoutId);
        settleTimeoutId = setTimeout(() => {
          if (window.scrollY <= SCROLL_THRESHOLD) setScrolled(false);
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
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${headerScrolled
        ? "border-white/20 bg-primary"
        : "border-border bg-white/95 backdrop-blur"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Inicio">
          <Image
            src={headerScrolled ? "/VÉRTICE-03.png" : "/VÉRTICE-02.png"}
            alt="VÉRTICE"
            width={200}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${active
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

        <div className="flex items-center gap-3">
          <Link
            href="/contactanos"
            className={`hidden rounded-lg px-5 py-2.5 text-sm font-medium transition-colors md:inline-block ${headerScrolled
              ? "bg-accent text-white hover:bg-accent-hover"
              : "bg-primary text-white hover:bg-primary-hover"
              }`}
          >
            Contáctanos
          </Link>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/vertice-consultoria/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de VÉRTICE"
            className={`hidden h-10 w-10 items-center justify-center rounded-lg border transition-colors md:flex ${headerScrolled
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-border text-muted-foreground hover:border-accent/50 hover:text-accent"
              }`}
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Botón hamburguesa */}
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border md:hidden ${headerScrolled
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-border text-muted-foreground hover:bg-surface"
              }`}
            onClick={() => setOpen(!open)}
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

      {/* Mobile menu */}
      {open && (
        <>
          {/* Overlay SIN sombrear header */}
          <div
            className="fixed left-0 right-0 bottom-0 top-[72px] z-40 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Panel menú */}
          <div
            className={`fixed left-0 right-0 top-[72px] z-50 border-t px-6 py-4 shadow-xl md:hidden ${headerScrolled
              ? "border-white/20 bg-primary"
              : "border-border bg-white"
              }`}
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium ${active
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

              <div className="mt-2 flex items-center gap-3">
                <Link
                  href="/contactanos"
                  className={`flex-1 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white ${headerScrolled
                    ? "bg-accent hover:bg-accent-hover"
                    : "bg-primary hover:bg-primary-hover"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  Contáctanos
                </Link>
                <a
                  href="https://www.linkedin.com/company/vertice-consultoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de VÉRTICE"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${headerScrolled
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-border text-muted-foreground hover:border-accent/50 hover:text-accent"
                    }`}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

