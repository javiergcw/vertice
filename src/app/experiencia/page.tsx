import { AnimateIn } from "@/components/AnimateIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TeamCarousel, type TeamMember } from "@/components/TeamCarousel";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra experiencia | VÉRTICE",
  description:
    "Empresas y sectores con los que hemos trabajado en consultoría logística, comercio exterior, seguridad de la cadena de suministro y gestión del riesgo.",
};

const EQUIPO: TeamMember[] = [
  {
    id: "pablo-mora",
    name: "Pablo Mora",
    role: "Gerente de Proyecto",
    image: "/experience/team/pablo_mora.png",
    description:
      "Amplia experiencia en procesos logísticos y gestión de la cadena de suministro (SCM), compras, inventarios, almacenamiento, distribución y transporte. Auditor especialista en Seguridad de la Cadena de Suministro Internacional (AES), Operador Económico Autorizado (OEA) e ISO 28000:2022, BASC y PBIP. Candidato a Doctor en Logística y Gestión de la Cadena de Suministros, Magister en Logística Integral y especialista en Logística de la Armada Nacional.",
  },
  {
    id: "claudia-gavilan",
    name: "Claudia Gavilán",
    role: "Gerente de Proyectos",
    image: "/experience/team/claudia_gavilan.png",
    description:
      "Especialista en comercio exterior y gestión de la cadena de suministro con amplia trayectoria en consultoría para empresas del sector logístico, industrial y portuario. Experiencia en procesos de certificación OEA, auditorías BASC y gestión del riesgo en operaciones de comercio internacional.",
  },
  {
    id: "guillermo-londono",
    name: "Guillermo Londoño",
    role: "Gerente de Proyectos",
    image: "/experience/team/guillermo_londonno.png",
    description:
      "Fundador y director de VÉRTICE con más de 20 años de experiencia en consultoría logística, comercio exterior y seguridad de la cadena de suministro. Ha liderado proyectos con empresas de los sectores industrial, portuario, minero-energético y de consumo masivo en Colombia y Latinoamérica.",
  },
];

type Company = {
  name: string;
  logo: string;
  website?: string;
};

type Sector = {
  id: string;
  name: string;
  image: string;
  description: string;
  companies: Company[];
};

const SECTORES: Sector[] = [
  {
    id: "logistico",
    name: "Logístico",
    image: "/sectors/logistico.png",
    description:
      "Hemos acompañado a operadores y empresas en la optimización de sus cadenas de suministro, diseño de redes logísticas, gestión de almacenes y centros de distribución, y eficiencia operacional. Nuestro enfoque combina análisis de procesos con soluciones prácticas adaptadas a la realidad del mercado colombiano y latinoamericano.",
    companies: [
      { name: "BITCO", logo: "/experience/bitco.png", website: "https://www.bitco.co/" },
      { name: "Eticos", logo: "/experience/eticos.png", website: "https://www.eticos.com/" },
      { name: "Daluca International", logo: "/experience/daluca.png", website: "https://www.dalucainternational.com/" },
    ],
  },
  {
    id: "comercio-exterior",
    name: "Comercio Exterior",
    image: "/sectors/comercio_exterior.png",
    description:
      "Apoyamos a importadores, exportadores y agentes de aduanas en la gestión integral del comercio internacional. Desde la optimización de procesos aduaneros hasta el cumplimiento normativo, nuestra experiencia abarca la consultoría en regímenes especiales, licencias, vistos buenos y estrategias de abastecimiento global.",
    companies: [
      { name: "Ferrero Rocher", logo: "/experience/ferrero.png", website: "https://www.ferrero.com/" },
      { name: "Sodimac", logo: "/experience/sodimac.png", website: "https://www.sodimac.com/" },
      { name: "Daluca International", logo: "/experience/daluca.png", website: "https://www.dalucainternational.com/" },
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    image: "/sectors/industrial.png",
    description:
      "Trabajamos con empresas del sector manufacturero e industrial para mejorar la eficiencia de sus operaciones, reducir costos logísticos y fortalecer la seguridad de su cadena de suministro. Nuestros proyectos abarcan desde plantas de producción hasta la gestión de proveedores y abastecimiento estratégico.",
    companies: [
      { name: "Grupo Prodeco", logo: "/experience/prodeco.png", website: "https://www.grupoprodeco.com.co/" },
      { name: "Cannon", logo: "/experience/cannon.png", website: "https://www.cannon.com.co/" },
      { name: "PazdelRío", logo: "/experience/paz_rio.png", website: "https://www.pazdelrio.com.co/" },
      { name: "AGROlife Colombia", logo: "/experience/agrolife.png", website: "https://agrolifecolombia.com/" },
      { name: "Procaps", logo: "/experience/procaps.png", website: "https://www.procapsgroup.com/" },
    ],
  },
  {
    id: "transporte",
    name: "Transporte",
    image: "/sectors/transporte.png",
    description:
      "Hemos asesorado a empresas de transporte terrestre, marítimo y multimodal en la mejora de sus procesos operativos, gestión de flotas, cumplimiento regulatorio y seguridad vial. Buscamos soluciones que integren eficiencia, sostenibilidad y reducción del riesgo en el movimiento de carga.",
    companies: [
      { name: "Komatsu", logo: "/experience/komatsu.png", website: "https://www.komatsu.com/" },
      { name: "Grupo Prodeco", logo: "/experience/prodeco.png", website: "https://www.grupoprodeco.com.co/" },
    ],
  },
  {
    id: "puertos",
    name: "Puertos",
    image: "/sectors/puertos.png",
    description:
      "Contamos con experiencia en proyectos de consultoría para terminales portuarias y sociedades portuarias, apoyando la optimización de operaciones de patio, la gestión de la carga y la implementación de estándares internacionales de seguridad y control en la cadena logística portuaria.",
    companies: [
      { name: "Puerto de Barranquilla", logo: "/experience/puerto_barranquilla.png", website: "https://www.puertodebarranquilla.com/" },
      { name: "Puerto Bahía", logo: "/experience/puerto_bahia.png", website: "https://www.puertobahia.com/" },
    ],
  },
  {
    id: "tecnologia",
    name: "Tecnología",
    image: "/sectors/tecnologia.png",
    description:
      "Acompañamos a empresas tecnológicas y de servicios digitales en la estructuración de sus operaciones logísticas y de distribución. Integramos herramientas de análisis de datos y visibilidad de la cadena de suministro para potenciar la toma de decisiones y mejorar la competitividad en entornos digitales.",
    companies: [
      { name: "Eticos", logo: "/experience/eticos.png", website: "https://www.eticos.com/" },
      { name: "Komatsu", logo: "/experience/komatsu.png", website: "https://www.komatsu.com/" },
    ],
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

        <section className="bg-surface/80 py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-20 md:gap-28">
              {SECTORES.map((sector, index) => {
                const isEven = index % 2 === 0;
                return (
                  <AnimateIn
                    key={sector.id}
                    delay={Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5}
                  >
                    <div
                      className={`flex flex-col gap-8 md:gap-12 md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                      {/* Image */}
                      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-[48%]">
                        <div className="aspect-[16/10] relative w-full">
                          <Image
                            src={sector.image}
                            alt={sector.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 48vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center gap-4 md:w-[52%]">
                        <div className="flex items-center gap-3">
                          <span className="h-8 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                            Sector
                          </span>
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                          {sector.name}
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                          {sector.description}
                        </p>

                        {/* Company logos */}
                        {sector.companies.length > 0 && (
                          <div className="mt-2">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                              Empresas con las que hemos trabajado
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {sector.companies.map((company) => (
                                <a
                                  key={company.name}
                                  href={company.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title={company.name}
                                  className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
                                >
                                  <div className="relative h-full w-full">
                                    <Image
                                      src={company.logo}
                                      alt={company.name}
                                      fill
                                      className="object-contain transition-transform group-hover:scale-105"
                                      sizes="56px"
                                    />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        <AnimateIn delay={1}>
          <section className="border-t border-border bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-10">
                <h2 className="flex items-start gap-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                  <span className="mt-1 h-9 w-1 shrink-0 rounded-full bg-accent md:h-10" aria-hidden />
                  <span>Nuestro equipo</span>
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Profesionales con experiencia en logística, comercio exterior y seguridad de la cadena de suministro.
                </p>
              </div>
              <TeamCarousel members={EQUIPO} />
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
