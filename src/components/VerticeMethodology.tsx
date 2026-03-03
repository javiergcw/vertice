"use client";

import Image from "next/image";

const METHODOLOGY_ITEMS = [
    {
        letter: "V",
        text: "erificación y Validación de cumplimiento normativo,",
    },
    {
        letter: "E",
        text: "strategia en comercio exterior y cadena de suministro,",
    },
    {
        letter: "R",
        text: "etroalimentación continua y gestión integral de riesgos,",
    },
    {
        letter: "T",
        text: "écnicas especializadas en seguridad logística y aduanas,",
    },
    {
        letter: "I",
        text: "nnovación y mejora en procesos organizacionales,",
    },
    {
        letter: "C",
        text: "apacitación y fortalecimiento de competencias del equipo",
    },
    {
        letter: "E",
        text: "cosistemas de crecimiento internacional y cumplimiento sostenible.",
    },
];

const EXPLANATION_ITEMS = [
    {
        letter: "V",
        text: "Refleja las auditorías y diagnósticos en cumplimiento normativo (OEA, BASC, ISO 28000) y validación de procesos de comercio exterior.",
    },
    {
        letter: "E",
        text: "Representa la asesoría estratégica para la expansión internacional y optimización de costos y procesos.",
    },
    {
        letter: "R",
        text: "Alude a la gestión de riesgos logísticos, operativos y sancionatorios, así como a la retroalimentación para la mejora continua.",
    },
    {
        letter: "T",
        text: "Hace referencia a las técnicas especializadas en seguridad de la cadena de suministro, transporte y trámites aduaneros.",
    },
    {
        letter: "I",
        text: "Corresponde a la innovación y digitalización de procesos, así como al cambio organizacional impulsado por la consultoría.",
    },
    {
        letter: "C",
        text: "Enfatiza la formación y capacitación especializada (presencial y virtual) para el desarrollo del talento humano.",
    },
    {
        letter: "E",
        text: "Simboliza la creación de ecosistemas organizacionales empoderados, orientados al cumplimiento, la eficiencia y crecimiento.",
    },
];

export function VerticeMethodology() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h2 className="flex items-start gap-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                        <span className="mt-1 h-9 w-1 shrink-0 rounded-full bg-accent md:h-10" aria-hidden />
                        <span>Significado de la metodología V.É.R.T.I.C.E.</span>
                    </h2>
                    <div className="relative h-20 w-64 md:h-24 md:w-80">
                        <Image
                            src="/VÉRTICE-02.png"
                            alt="Vértice Logo"
                            fill
                            className="object-contain object-right"
                            priority
                        />
                    </div>
                </div>

                <div className="mt-12 space-y-2 border-l-4 border-accent/20 pl-6 py-2">
                    <p className="text-lg font-medium text-foreground">
                        Basado en los servicios y enfoque estratégico de la firma consultora:
                    </p>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    {METHODOLOGY_ITEMS.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="text-2xl font-bold text-foreground md:text-3xl leading-none">
                                {item.letter}
                            </span>
                            <span className="text-lg text-muted-foreground md:text-xl leading-snug">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 space-y-2 border-l-4 border-accent/20 pl-6 py-2">
                    <p className="text-lg font-medium text-foreground">
                        Explicación del acrónimo alineado con los servicios de VÉRTICE:
                    </p>
                </div>

                <div className="mt-8 space-y-8">
                    {EXPLANATION_ITEMS.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="text-2xl font-bold text-foreground md:text-3xl leading-none">
                                {item.letter}:
                            </span>
                            <span className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

