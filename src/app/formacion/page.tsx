import { AnimateIn } from "@/components/AnimateIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProgramasCarousel, type ProgramaItem } from "@/components/ProgramasCarousel";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vertice.com.co";

export const metadata: Metadata = {
  title: "Formación Especializada | Cursos Comercio Exterior, BASC, OEA, ISO 31000, ISO 28000 | VÉRTICE",
  description:
    "Cursos cortos especializados: Comercio Exterior, Gestión de Riesgos ISO 31000, Seguridad Cadena de Suministro (BASC, OEA, ISO 28000), Auditor OEA-BASC, Criterios de Origen. Modalidad sincrónica y asincrónica, plataforma 24/7, capacitadores certificados. VÉRTICE – Costa Caribe.",
  keywords: [
    "formación comercio exterior",
    "cursos BASC OEA",
    "curso ISO 31000",
    "ISO 28000 cadena de suministro",
    "auditor OEA BASC",
    "criterios de origen acuerdos internacionales",
    "capacitación logística",
    "cumplimiento normativo",
    "seguridad logística",
    "cursos cortos especializados",
    "VÉRTICE formación",
  ],
  openGraph: {
    title: "Formación Especializada | Cursos Comercio Exterior, BASC, OEA | VÉRTICE",
    description:
      "Cursos: Comercio Exterior, Gestión de Riesgos ISO 31000, BASC-OEA-ISO 28000, Auditor OEA-BASC, Criterios de Origen. Plataforma 24/7, metodología sincrónica y asincrónica.",
    url: `${SITE_URL}/formacion`,
    type: "website",
    locale: "es",
    siteName: "VÉRTICE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formación Especializada | Cursos BASC, OEA, ISO 31000, ISO 28000 | VÉRTICE",
    description: "Cursos cortos en comercio exterior, logística, seguridad de la cadena de suministro y cumplimiento. Plataforma 24/7.",
  },
  alternates: {
    canonical: `${SITE_URL}/formacion`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const INTRO =
  "En VÉRTICE desarrollamos programas de formación orientados al fortalecimiento de competencias técnicas y estratégicas en comercio exterior, logística, seguridad de la cadena de suministro y cumplimiento normativo, alineados a estándares internacionales y necesidades reales del sector empresarial.";

type CursoConImagen = ProgramaItem & { image: string };

const CURSOS: CursoConImagen[] = [
  {
    title: "Comercio Exterior",
    description:
      "Importación, exportación, normativa aduanera y documentación comercial para optimizar operaciones y cumplimiento.",
    descriptionLista:
      "Formación integral en procesos de importación y exportación, normativa aduanera, logística internacional y documentación comercial, orientada a optimizar operaciones y asegurar cumplimiento regulatorio.",
    icon: "Globe",
    iconColor: "#2563EB",
    image: "/formation/comercio_exterior.png",
  },
  {
    title: "Gestión de Riesgos (ISO 31000)",
    description:
      "Identificación, análisis y tratamiento de riesgos bajo ISO 31000 para decisiones estratégicas y resiliencia.",
    descriptionLista:
      "Programa enfocado en la identificación, análisis y tratamiento de riesgos organizacionales bajo el marco ISO 31000, fortaleciendo la toma de decisiones estratégicas y la resiliencia empresarial.",
    icon: "ShieldAlert",
    iconColor: "#F59E0B",
    image: "/formation/iso.png",
  },
  {
    title: "Seguridad de la Cadena de Suministro (BASC, OEA, ISO 28000)",
    description:
      "Implementación de sistemas de seguridad logística según estándares internacionales y cumplimiento en comercio exterior.",
    descriptionLista:
      "Capacitación en implementación y mantenimiento de sistemas de gestión de seguridad logística basados en estándares internacionales, orientada a proteger operaciones y garantizar cumplimiento en comercio internacional.",
    icon: "PackageCheck",
    iconColor: "#16A34A",
    image: "/formation/cadena.png",
  },
  {
    title: "Curso Auditor OEA-BASC",
    description:
      "Competencias de auditoría en OEA y BASC: evaluación de controles, verificación de cumplimiento e informes técnicos.",
    descriptionLista:
      "Entrenamiento especializado para desarrollar competencias de auditoría en estándares OEA y BASC, incluyendo evaluación de controles, verificación de cumplimiento y elaboración de informes técnicos.",
    icon: "ClipboardCheck",
    iconColor: "#7C3AED",
    image: "/formation/basc.png",
  },
  {
    title: "Aprovechamiento de Acuerdos Internacionales con Criterios de Origen",
    description:
      "Maximizar beneficios arancelarios con tratados comerciales, reglas de origen y gestión documental.",
    descriptionLista:
      "Programa orientado a maximizar beneficios arancelarios mediante el correcto uso de tratados comerciales, aplicación de reglas de origen y gestión documental asociada al comercio exterior.",
    icon: "Handshake",
    iconColor: "#DC2626",
    image: "/formation/acuerdos.png",
  },
];

const METODOLOGIA_ITEMS = [
  <>Modalidad <strong>sincrónica y asincrónica</strong></>,
  "Casos prácticos y talleres aplicados",
  "Enfoque técnico-empresarial",
];

const PLATAFORMA_ITEMS = [
  <>Campus virtual disponible <strong>24/7</strong></>,
  "Acceso a contenidos, grabaciones y material de apoyo",
  "Seguimiento académico permanente",
];

const EQUIPO_ITEMS = [
  <><strong>Capacitadores certificados</strong></>,
  "Expertos en comercio exterior, logística y cumplimiento",
  "Experiencia real en sector empresarial y auditoría internacional",
];

function FormacionJsonLd() {
  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cursos cortos especializados VÉRTICE",
    description: "Oferta de formación en comercio exterior, logística, seguridad de la cadena de suministro y cumplimiento normativo.",
    numberOfItems: CURSOS.length,
    itemListElement: CURSOS.map((curso, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: curso.title,
        description: curso.description,
        provider: {
          "@type": "Organization",
          name: "VÉRTICE",
        },
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Formación Especializada | Cursos Comercio Exterior, BASC, OEA | VÉRTICE",
    description: INTRO,
    mainEntity: {
      "@type": "ItemList",
      name: "Cursos cortos especializados",
      itemListElement: CURSOS.map((curso, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: curso.title,
        description: curso.description,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Formación", item: `${SITE_URL}/formacion` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

export default function FormacionPage() {
  return (
    <>
      <FormacionJsonLd />
      <Header />
      <main role="main">
        <AnimateIn>
          <section
            className="border-b border-border bg-white py-12 md:py-16"
            aria-labelledby="oferta-titulo"
            id="oferta-formacion"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col gap-8 md:gap-12 md:flex-row-reverse md:items-center">
                <div className="relative w-full shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-[48%]">
                  <div className="aspect-[16/10] relative w-full">
                    <Image
                      src="/formation/oferta.png"
                      alt="Oferta de formación especializada VÉRTICE"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 48vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 md:w-[52%]">
                  <h1
                    id="oferta-titulo"
                    className="flex items-start gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
                  >
                    <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-accent md:h-14" aria-hidden />
                    <span>Oferta de formación especializada</span>
                  </h1>
                  <p className="mt-1 max-w-2xl text-base text-muted-foreground md:text-lg">
                    {INTRO}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn delay={1}>
          <section
            className="border-b border-border bg-white py-12 md:py-16"
            aria-labelledby="programas-titulo"
            id="cursos-cortos-especializados"
          >
            <div className="mx-auto max-w-7xl px-6">
              <h2
                id="programas-titulo"
                className="border-b-2 border-accent pb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                Nuestros programas
              </h2>
              <div className="mt-10">
                <ProgramasCarousel items={CURSOS} headingId="programa-actual-titulo" />
              </div>
            </div>
          </section>
        </AnimateIn>

        <section className="bg-surface/80 py-12 md:py-20" aria-labelledby="cursos-titulo" id="cursos-cortos-especializados">
          <div className="mx-auto max-w-7xl px-6">
            <h2
              id="cursos-titulo"
              className="mb-12 flex items-start gap-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
            >
              <span className="mt-1 h-9 w-1 shrink-0 rounded-full bg-accent md:h-10" aria-hidden />
              <span>Cursos cortos especializados</span>
            </h2>
            <div className="flex flex-col gap-20 md:gap-28">
              {CURSOS.map((curso, index) => {
                const isEven = index % 2 === 0;
                return (
                  <AnimateIn
                    key={curso.title}
                    delay={Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5}
                  >
                    <div
                      className={`flex flex-col gap-8 md:gap-12 md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-[48%]">
                        <div className="aspect-[16/10] relative w-full">
                          <Image
                            src={curso.image}
                            alt={curso.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 48vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center gap-4 md:w-[52%]">
                        <div className="flex items-center gap-3">
                          <span className="h-8 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                            Curso
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                          {curso.title}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                          {curso.descriptionLista ?? curso.description}
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        <AnimateIn delay={2}>
          <section
            className="bg-surface/80 py-16 md:py-20"
            aria-label="Metodología, plataforma y equipo docente"
            id="metodologia-plataforma-equipo"
          >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold uppercase tracking-tight text-foreground">
                  Metodología
                </h3>
                <ul className="space-y-4" role="list">
                  {METODOLOGIA_ITEMS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-muted-foreground"
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
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold uppercase tracking-tight text-foreground">
                  Plataforma
                </h3>
                <ul className="space-y-4" role="list">
                  {PLATAFORMA_ITEMS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-muted-foreground"
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
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold uppercase tracking-tight text-foreground">
                  Equipo docente
                </h3>
                <ul className="space-y-4" role="list">
                  {EQUIPO_ITEMS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-muted-foreground"
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
            </div>
          </div>
        </section>
        </AnimateIn>

        <AnimateIn delay={1}>
          <section className="border-t border-border bg-surface/80 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <p className="text-muted-foreground md:text-lg">
                ¿Interesado en nuestra oferta de formación?
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
