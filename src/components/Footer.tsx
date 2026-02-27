import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicio" },
  { label: "Formación", href: "/formacion" },
  { label: "Experiencia", href: "/experiencia" },
];

const ADDRESS = "Vía 40 con 98 — Parque Logístico LOGIKA";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t-2 border-accent/60 bg-primary text-footer-foreground"
      role="contentinfo"
    >
      {/* Solo móvil: V a todo el ancho como fondo */}
      <div
        className="pointer-events-none absolute inset-0 z-0 md:hidden"
        aria-hidden
        style={{
          WebkitMaskImage: "url('/minmalista.svg')",
          maskImage: "url('/minmalista.svg')",
          WebkitMaskSize: "95%",
          maskSize: "95%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "50% 50%",
          maskPosition: "50% 50%",
          backgroundColor: "var(--footer-foreground)",
          opacity: 0.08,
        }}
      />
      {/* Solo web (lg+): V pequeña, marca de agua a la derecha */}
      <div
        className="pointer-events-none absolute inset-0 z-0 origin-right hidden lg:block"
        aria-hidden
        style={{
          WebkitMaskImage: "url('/minmalista.svg')",
          maskImage: "url('/minmalista.svg')",
          WebkitMaskSize: "22%",
          maskSize: "22%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "95% 50%",
          maskPosition: "95% 50%",
          backgroundColor: "var(--footer-foreground)",
          opacity: 0.08,
        }}
      />
      <div className="relative z-10 max-w-7xl px-6 py-16 lg:mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/VÉRTICE-03.png"
                alt="VÉRTICE"
                width={180}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-footer-muted">
              Consultoría en logística, comercio exterior y gestión del riesgo.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces
            </h3>
            <ul className="space-y-2" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Dirección
            </h3>
            <p className="text-sm text-footer-muted">{ADDRESS}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-footer-muted" role="list">
              <li>
                <a href="mailto:glondono@vertice.com" className="hover:text-white">
                  glondono@vertice.com
                </a>
              </li>
              <li>
                <a href="mailto:cgavilan@vertice.com" className="hover:text-white">
                  cgavilan@vertice.com
                </a>
              </li>
              <li>
                <a href="mailto:pmora@vertice.com" className="hover:text-white">
                  pmora@vertice.com
                </a>
              </li>
              <li>
                <a href="mailto:comercial@vertice.com" className="hover:text-white">
                  comercial@vertice.com
                </a>
              </li>
              <li>
                <a href="tel:+573001234567" className="hover:text-white">
                  +57 300 123 4567
                </a>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/company/vertice-consultoria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de VÉRTICE"
              className="mt-4 inline-flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
