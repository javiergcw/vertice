import { AnimateIn } from "@/components/AnimateIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProgramasCarousel, type ProgramaItem } from "@/components/ProgramasCarousel";
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

const CURSOS: ProgramaItem[] = [
  {
    title: "Comercio Exterior",
    description:
      "Importación, exportación, normativa aduanera y documentación comercial para optimizar operaciones y cumplimiento.",
    descriptionLista:
      "Formación integral en procesos de importación y exportación, normativa aduanera, logística internacional y documentación comercial, orientada a optimizar operaciones y asegurar cumplimiento regulatorio.",
    icon: "Globe",
    iconColor: "#2563EB",
  },
  {
    title: "Gestión de Riesgos (ISO 31000)",
    description:
      "Identificación, análisis y tratamiento de riesgos bajo ISO 31000 para decisiones estratégicas y resiliencia.",
    descriptionLista:
      "Programa enfocado en la identificación, análisis y tratamiento de riesgos organizacionales bajo el marco ISO 31000, fortaleciendo la toma de decisiones estratégicas y la resiliencia empresarial.",
    icon: "ShieldAlert",
    iconColor: "#F59E0B",
  },
  {
    title: "Seguridad de la Cadena de Suministro (BASC, OEA, ISO 28000)",
    description:
      "Implementación de sistemas de seguridad logística según estándares internacionales y cumplimiento en comercio exterior.",
    descriptionLista:
      "Capacitación en implementación y mantenimiento de sistemas de gestión de seguridad logística basados en estándares internacionales, orientada a proteger operaciones y garantizar cumplimiento en comercio internacional.",
    icon: "PackageCheck",
    iconColor: "#16A34A",
  },
  {
    title: "Curso Auditor OEA-BASC",
    description:
      "Competencias de auditoría en OEA y BASC: evaluación de controles, verificación de cumplimiento e informes técnicos.",
    descriptionLista:
      "Entrenamiento especializado para desarrollar competencias de auditoría en estándares OEA y BASC, incluyendo evaluación de controles, verificación de cumplimiento y elaboración de informes técnicos.",
    icon: "ClipboardCheck",
    iconColor: "#7C3AED",
  },
  {
    title: "Aprovechamiento de Acuerdos Internacionales con Criterios de Origen",
    description:
      "Maximizar beneficios arancelarios con tratados comerciales, reglas de origen y gestión documental.",
    descriptionLista:
      "Programa orientado a maximizar beneficios arancelarios mediante el correcto uso de tratados comerciales, aplicación de reglas de origen y gestión documental asociada al comercio exterior.",
    icon: "Handshake",
    iconColor: "#DC2626",
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
              <h1
                id="oferta-titulo"
                className="flex items-start gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-accent md:h-14" aria-hidden />
                <span>Oferta de formación especializada</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                {INTRO}
              </p>
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
              <h2
                id="cursos-titulo"
                className="mt-12 border-b-2 border-accent pb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                Cursos cortos especializados
              </h2>
              <ul className="mt-10 space-y-6">
                {CURSOS.map((curso, index) => (
                  <li
                    key={curso.title}
                    className="rounded-2xl border border-border bg-card-bg p-6 shadow-sm md:p-8"
                  >
                    <h3 className="text-lg font-semibold text-primary md:text-xl">
                      {index + 1}. {curso.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {curso.descriptionLista ?? curso.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimateIn>

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
