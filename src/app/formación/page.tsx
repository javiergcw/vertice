import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  BookOpen,
  GraduationCap,
  Globe,
  Shield,
  FileCheck,
  Search,
  LayoutList,
  Laptop,
  Users,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";
const HERO_IMAGE_ALT = "Formación y capacitación profesional";

export const metadata: Metadata = {
  title: "Formación | VÉRTICE",
  description:
    "Oferta de formación especializada en comercio exterior, logística, seguridad de la cadena de suministro y cumplimiento normativo.",
};

const INTRO =
  "En VÉRTICE desarrollamos programas de formación orientados al fortalecimiento de competencias técnicas y estratégicas en comercio exterior, logística, seguridad de la cadena de suministro y cumplimiento normativo, alineados a estándares internacionales y necesidades reales del sector empresarial.";

const CURSOS = [
  {
    title: "Comercio Exterior",
    description:
      "Fundamentos operativos y estratégicos de importaciones y exportaciones, normativa aduanera, regímenes, costos y documentación internacional.",
    icon: Globe,
  },
  {
    title: "Gestión de Riesgos – ISO 31000",
    description:
      "Implementación de modelos de gestión de riesgos bajo estándar ISO 31000 aplicados a operaciones logísticas, comercio exterior y cumplimiento corporativo.",
    icon: Shield,
  },
  {
    title: "Seguridad de la Cadena de Suministro (BASC – OEA – ISO 28000)",
    description:
      "Diseño, implementación y fortalecimiento de sistemas de seguridad logística bajo estándares y programas internacionales.",
    icon: Shield,
  },
  {
    title: "Curso Auditor OEA – BASC",
    description:
      "Formación técnica para la planificación, ejecución y seguimiento de auditorías internas en seguridad de la cadena de suministro y cumplimiento.",
    icon: FileCheck,
  },
  {
    title: "Aprovechamiento de Acuerdos Internacionales – Criterios de Origen",
    description:
      "Aplicación práctica de tratados comerciales, reglas de origen, certificaciones y estrategias para optimización arancelaria.",
    icon: Search,
  },
];

const METODOLOGIA = {
  title: "Metodología",
  items: [
    { label: "Modalidad", value: "Sincrónica y asincrónica" },
    { label: "Contenido", value: "Casos prácticos y talleres aplicados" },
    { label: "Enfoque", value: "Enfoque técnico-empresarial" },
  ],
};

const PLATAFORMA = {
  title: "Plataforma",
  items: [
    { label: "Campus virtual", value: "Disponible 24/7" },
    {
      label: "Acceso a recursos",
      value: "Acceso a contenidos, grabaciones y material de apoyo",
    },
    { label: "Seguimiento", value: "Seguimiento académico permanente" },
  ],
};

const EQUIPO = {
  title: "Equipo docente",
  items: [
    {
      label: "Calificaciones",
      value: "Capacitadores certificados",
      bold: true,
    },
    {
      label: "Experiencia",
      value:
        "Expertos en comercio exterior, logística y cumplimiento",
    },
    {
      label: "Experiencia práctica",
      value:
        "Experiencia real en sector empresarial y auditoría internacional",
    },
  ],
};

const cursoVariants = [
  "border-l-4 border-accent bg-white shadow-sm",
  "border border-border bg-surface",
  "border border-border bg-white shadow-sm",
  "border border-primary/20 bg-primary/5",
  "border-l-4 border-primary bg-white shadow-sm",
] as const;

export default function FormacionPage() {
  const FirstCursoIcon = CURSOS[0].icon;
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-16 md:py-20">
          <span className="absolute left-0 top-0 h-1 w-24 bg-accent" aria-hidden />
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  <GraduationCap className="h-8 w-8 shrink-0 text-white/70 md:h-9 md:w-9" strokeWidth={1.5} aria-hidden />
                  Oferta de formación especializada
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
                  {INTRO}
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 shadow-xl lg:aspect-4/3">
                <Image
                  src={HERO_IMAGE}
                  alt={HERO_IMAGE_ALT}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cursos cortos especializados – dinámico, con iconos y hover */}
        <section className="border-b border-border bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="flex items-center gap-2 border-b-2 border-accent pb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              <BookOpen className="h-6 w-6 shrink-0 text-accent/80 md:h-7 md:w-7" strokeWidth={1.5} aria-hidden />
              Cursos cortos especializados
            </h2>
            <div className="mt-10 flex flex-col gap-6">
              {/* Primer curso: destacado, ancho completo */}
              <article
                className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 md:p-8 ${cursoVariants[0]}`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white" aria-hidden>
                      <FirstCursoIcon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Curso 01</span>
                      <h3 className="mt-0.5 text-lg font-semibold text-primary md:text-xl">
                        {CURSOS[0].title}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-5">
                  {CURSOS[0].description}
                </p>
              </article>
              {/* Grid 2x2 con tarjetas interactivas */}
              <div className="grid gap-6 md:grid-cols-2">
                {CURSOS.slice(1, 5).map((curso, i) => {
                  const Icon = curso.icon;
                  const variant = cursoVariants[(i % 3) + 1];
                  return (
                    <article
                      key={curso.title}
                      className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5 md:p-8 ${variant}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent" aria-hidden>
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Curso {String(i + 2).padStart(2, "0")}
                          </span>
                          <h3 className="mt-0.5 text-lg font-semibold text-primary md:text-xl">
                            {curso.title}
                          </h3>
                          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                            {curso.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Metodología, Plataforma, Equipo – tres bloques con identidad propia */}
        <section className="bg-surface/80 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
              {/* Metodología: barra acento + fondo suave */}
              <div className="rounded-2xl border border-border border-l-4 border-l-accent bg-white p-8 shadow-sm">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold uppercase tracking-tight text-foreground">
                  <LayoutList className="h-5 w-5 shrink-0 text-accent/70" strokeWidth={1.5} aria-hidden />
                  {METODOLOGIA.title}
                </h3>
                <ul className="space-y-4" role="list">
                  {METODOLOGIA.items.map(({ label, value }) => (
                    <li key={label}>
                      <span className="text-sm font-medium text-muted-foreground">
                        {label}:
                      </span>{" "}
                      <span className="text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Plataforma: fondo primary suave */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold uppercase tracking-tight text-primary">
                  <Laptop className="h-5 w-5 shrink-0 text-primary/70" strokeWidth={1.5} aria-hidden />
                  {PLATAFORMA.title}
                </h3>
                <ul className="space-y-4" role="list">
                  {PLATAFORMA.items.map(({ label, value }) => (
                    <li key={label}>
                      <span className="text-sm font-medium text-muted-foreground">
                        {label}:
                      </span>{" "}
                      <span className="text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Equipo: sombra marcada */}
              <div className="rounded-2xl border border-border bg-white p-8 shadow-md">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold uppercase tracking-tight text-foreground">
                  <Users className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  {EQUIPO.title}
                </h3>
                <ul className="space-y-4" role="list">
                  {EQUIPO.items.map(({ label, value, bold }) => (
                    <li key={label}>
                      <span className="text-sm font-medium text-muted-foreground">
                        {label}:
                      </span>{" "}
                      <span
                        className={
                          bold
                            ? "font-semibold text-foreground"
                            : "text-foreground"
                        }
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-muted-foreground md:text-lg">
              ¿Interesado en nuestra oferta de formación?
            </p>
            <Link
              href="/contactanos"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-hover"
            >
              <Mail className="h-4 w-4 shrink-0 opacity-90" strokeWidth={1.5} aria-hidden />
              Contáctanos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
