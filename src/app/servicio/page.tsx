import { AnimateIn } from "@/components/AnimateIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | VÉRTICE",
  description:
    "Consultoría en seguridad en la cadena de suministros, formación especializada, comercio exterior y trámites aduaneros.",
};

const SERVICES = [
  {
    id: "seguridad-cumplimiento",
    title:
      "Consultoría en Seguridad en la Cadena de Suministros y Gestión de Riesgo, Cumplimiento",
    bullets: [
      "Auditorías de Seguridad en Cadena de Suministro OEA/BASC/ISO 28000 – 28001",
      "Evaluación de asociados de negocio de cadena de suministros para empresas OEA/BASC/ISO 28000 bajo cumplimiento legal.",
      "Diagnóstico de cumplimiento normativo en comercio exterior",
      "Evaluación de riesgos logísticos, operativos y sancionatorios.",
    ],
    hubLabels: ["OEA", "BASC", "ISO 28000"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    imageAlt: "Buque de carga y contenedores en puerto",
  },
  {
    id: "formacion",
    title: "Formación y Capacitación Especializada",
    bullets: [
      "Diseño de programas de formación en comercio exterior y seguridad logística bajo los programas OEA / BASC / ISO 28000 - 28001",
      "Capacitación en normativa aduanera y cumplimiento",
      "Fortalecimiento de competencias técnicas del equipo",
      "Talleres prácticos y casos aplicados",
      "Plataforma Virtual 24/7",
    ],
    hubLabels: ["Programas OEA/BASC/ISO", "Normativa aduanera", "Talleres", "Plataforma 24/7"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    imageAlt: "Capacitación y trabajo en equipo",
  },
  {
    id: "comercio-exterior",
    title: "Comercio Exterior Estratégico y Desarrollo Internacional",
    bullets: [
      "Asesoría estratégica en operaciones de comercio exterior",
      "Optimización de procesos y costos internacionales",
      "Acompañamiento en expansión a mercados internacionales",
      "Soporte en toma de decisiones estratégicas",
      "Revisión de procesos de importación y exportación",
    ],
    hubLabels: ["Estrategia", "Mercados", "Procesos", "Decisiones"],
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    imageAlt: "Contenedores y logística internacional",
  },
  {
    id: "transporte-aduanero",
    title: "Servicio de transporte, D.F.I y trámites aduaneros",
    bullets: [
      "Operación de transporte nacional e internacional",
      "Despacho aduanero (D.F.I) y trámites ante autoridad aduanera",
      "Gestión documental y cumplimiento aduanero",
      "Asesoría en logística de carga y consolidación",
    ],
    hubLabels: ["Transporte", "D.F.I", "Documentación", "Logística"],
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
    imageAlt: "Logística de carga y transporte",
  },
];

function ServiceBlock({
  title,
  bullets,
  hubLabels,
  image,
  imageAlt,
  reverse = false,
}: {
  title: string;
  bullets: string[];
  hubLabels: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
      <div className={reverse ? "lg:order-2" : ""}>
        <h2 className="border-b-2 border-accent pb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        <ul className="mt-6 space-y-3" role="list">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base text-muted-foreground md:text-lg"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
        <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-muted transition-shadow duration-300 hover:border-accent/40 hover:shadow-lg">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm ring-1 ring-black/5">
          {hubLabels.map((label) => (
            <span
              key={label}
              className="inline-flex rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-md hover:-translate-y-0.5"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicioPage() {
  return (
    <>
      <Header />
      <main>
        <AnimateIn>
          <section className="border-b border-border bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h1 className="flex items-start gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-accent md:h-14" aria-hidden />
                <span>Servicios</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                Soluciones integrales en seguridad de la cadena de suministro, cumplimiento, formación especializada, comercio exterior y trámites aduaneros.
              </p>
            </div>
          </section>
        </AnimateIn>

        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="space-y-20 md:space-y-24">
            {SERVICES.map((service, index) => (
              <AnimateIn key={service.id} delay={Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <ServiceBlock
                  title={service.title}
                  bullets={service.bullets}
                  hubLabels={service.hubLabels}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  reverse={index % 2 === 1}
                />
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={1}>
          <section className="border-t border-border bg-surface/80 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <p className="text-muted-foreground md:text-lg">
                ¿Necesita asesoría en alguno de nuestros servicios?
              </p>
              <Link
                href="/contactanos"
                className="mt-4 inline-flex rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Contáctanos
              </Link>
            </div>
          </section>
        </AnimateIn>
      </main>
      <Footer />
    </>
  );
}
