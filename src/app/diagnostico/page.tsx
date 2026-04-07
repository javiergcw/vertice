import { AnimateIn } from "@/components/AnimateIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MMGSCSAutoevaluacionLauncher } from "@/components/MMGSCSAutoevaluacionModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MMGSCS — Modelo de madurez para la seguridad en la cadena de suministros | VÉRTICE",
  description:
    "Herramienta de autoevaluación MMGSCS 1.0: mide y clasifica el comportamiento de su sistema de gestión de seguridad en la cadena de suministros. Cinco niveles de madurez y ocho dimensiones clave.",
};

export default function DiagnosticoPage() {
  return (
    <>
      <Header />
      <main>
        <AnimateIn>
          <section className="border-b border-border bg-white py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl px-6 text-left">
              <h1 className="text-2xl font-bold uppercase leading-snug tracking-tight text-primary md:text-3xl md:leading-tight lg:text-[2rem] lg:leading-tight">
                Modelo de madurez para la gestión de la seguridad en la cadena de suministros
              </h1>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground md:text-lg">
                <p>
                  Es una herramienta de autoevaluación que{" "}
                  <strong>
                    mide y clasifica el comportamiento de un sistema de gestión de seguridad en la
                    cadena de suministros
                  </strong>
                  , permitiendo evaluar las capacidades estratégicas y operativas en organizaciones
                  que gestionan sus riesgos de seguridad a través de una iniciativa o programa
                  internacional de seguridad. Incluye elementos de los marcos de mejores prácticas y
                  modelos de madurez de gestión de riesgos de cadena de suministros existentes.
                </p>
                <p>
                  El <strong>MMGSCS 1.0</strong> clasifica los sistemas en cinco niveles de
                  madurez:{" "}
                  <strong>
                    (1) Pre-Cumplimiento, (2) Cumplimiento, (3) Proactivo, (4) Resiliente y (5)
                    Sostenible
                  </strong>
                  , a través de ocho dimensiones clave que ofrecen una visión general del sistema,
                  en la que se describen e interpretan los avances en cada una de las etapas
                  intermedias o de transición.
                </p>
              </div>

              <div className="mt-10">
                <MMGSCSAutoevaluacionLauncher />
              </div>
            </div>
          </section>
        </AnimateIn>
      </main>
      <Footer />
    </>
  );
}
