import { AnimateIn } from "@/components/AnimateIn";
import { ExperienciaCard, type ExperienciaCardItem } from "@/components/ExperienciaCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra experiencia | VÉRTICE",
  description:
    "Empresas y sectores con los que hemos trabajado en consultoría logística, comercio exterior, seguridad de la cadena de suministro y gestión del riesgo.",
};

const EXPERIENCIA: ExperienciaCardItem[] = [
  {
    id: "1",
    name: "Empresa logística",
    description:
      "Acompañamiento en implementación de estándares de seguridad en cadena de suministro (BASC/OEA) y auditorías de cumplimiento.",
    website: "https://ejemplo-logistica.com",
  },
  {
    id: "2",
    name: "Operador portuario",
    description:
      "Consultoría en comercio exterior, optimización de procesos aduaneros y formación especializada para equipos operativos.",
  },
  {
    id: "3",
    name: "Sector agroindustrial",
    description:
      "Gestión de riesgos (ISO 31000), cumplimiento normativo y fortalecimiento de procesos de exportación.",
    website: "https://ejemplo-agroindustrial.com",
  },
  {
    id: "4",
    name: "Comercializadora internacional",
    description:
      "Asesoría en criterios de origen, aprovechamiento de acuerdos comerciales y documentación internacional.",
  },
  {
    id: "5",
    name: "Manufactura",
    description:
      "Sistemas de seguridad logística (ISO 28000), auditorías internas y capacitación en cumplimiento.",
    website: "https://ejemplo-manufactura.com",
  },
  {
    id: "6",
    name: "Retail y distribución",
    description:
      "Diagnóstico de riesgos en cadena de suministro, evaluación de asociados de negocio y formación en normativa.",
  },
];

export default function ExperienciaPage() {
  return (
    <>
      <Header />
      <main>
        <AnimateIn>
          <section className="border-b border-border bg-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h1 className="flex items-start gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-accent md:h-14" aria-hidden />
                <span>Nuestra experiencia</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                Hemos acompañado a empresas de distintos sectores en logística, comercio exterior, seguridad de la cadena de suministro y gestión del riesgo. Conoce algunos de los ámbitos en los que trabajamos.
              </p>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn delay={1}>
          <section className="bg-surface/80 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {EXPERIENCIA.map((item, index) => (
                  <AnimateIn key={item.id} className="h-full" delay={Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                    <ExperienciaCard item={item} />
                  </AnimateIn>
                ))}
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn delay={2}>
          <section className="border-t border-border bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-muted-foreground md:text-lg">
              ¿Quieres que tu empresa sea parte de nuestra experiencia?
            </p>
            <Link
              href="/contactanos"
              className="mt-4 inline-flex rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
