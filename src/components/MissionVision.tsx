"use client";

import { Eye, Target } from "lucide-react";

export function MissionVision() {
  return (
    <section
      className="relative overflow-hidden bg-white py-16 md:py-20"
      aria-labelledby="mission-vision-title"
    >
      {/* Degradado sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-surface/80"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 id="mission-vision-title" className="sr-only">
          Misión y Visión
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <article className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Misión
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/90 md:text-lg">
                Impulsar el fortalecimiento estratégico y operativo de las organizaciones mediante soluciones integrales en comercio exterior, logística y cadena de suministro, gestión de riesgos, cumplimiento normativo y formación especializada, apalancadas en conocimiento técnico, experiencia senior y herramientas innovadoras que promuevan la eficiencia, la seguridad y la competitividad empresarial en entornos globales.
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Eye className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Visión
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/90 md:text-lg">
                Ser reconocidos a 2031 como la firma boutique de consultoría líder en la Costa Caribe con proyección nacional e internacional, destacada por su excelencia técnica, enfoque estratégico y capacidad de generar transformación sostenible en las organizaciones, consolidándonos como aliados clave en procesos de internacionalización, seguridad de la cadena de suministro y desarrollo logístico empresarial.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
