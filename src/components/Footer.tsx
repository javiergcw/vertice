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
          </div>
        </div>
      </div>
    </footer>
  );
}
