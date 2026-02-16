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
    name: "Grupo Prodeco",
    description:
      "Empresa del sector minero-energético enfocada en la explotación y comercialización de carbón y gestión logística asociada en Colombia.",
    website: "https://www.grupoprodeco.com.co/",
    logo: "/experience/prodeco.png",
  },
  {
    id: "2",
    name: "Puerto de Barranquilla",
    description:
      "Sociedad portuaria dedicada a la operación logística marítima y fluvial, facilitando comercio exterior y manejo de carga en la región Caribe.",
    website: "https://www.puertodebarranquilla.com/",
    logo: "/experience/puerto_barranquilla.png",
  },
  {
    id: "3",
    name: "Ferrero Rocher",
    description:
      "Marca de confitería del grupo Ferrero dedicada a la producción y comercialización global de chocolates y productos de consumo masivo.",
    website: "https://www.ferrero.com/",
    logo: "/experience/ferrero.png",
  },
  {
    id: "4",
    name: "Sodimac",
    description:
      "Cadena de tiendas de mejoramiento del hogar y materiales de construcción perteneciente al grupo Falabella, con presencia en varios países.",
    website: "https://www.sodimac.com/",
    logo: "/experience/sodimac.png",
  },
  {
    id: "5",
    name: "Puerto Bahía",
    description:
      "Terminal portuario multipropósito en Cartagena orientado a servicios logísticos, almacenamiento y manejo de carga industrial y energética.",
    website: "https://www.puertobahia.com/",
    logo: "/experience/puerto_bahia.png",
  },
  {
    id: "6",
    name: "BITCO",
    description:
      "Operador logístico colombiano especializado en comercio exterior, transporte internacional y soluciones de cadena de suministro.",
    website: "https://www.bitco.co/",
    logo: "/experience/bitco.png",
  },
  {
    id: "7",
    name: "Cannon",
    description:
      "Empresa manufacturera del sector textil enfocada en producción y comercialización de ropa de hogar y productos industriales.",
    website: "https://www.cannon.com.co/",
    logo: "/experience/cannon.png",
  },
  {
    id: "8",
    name: "PazdelRío",
    description:
      "Compañía siderúrgica colombiana dedicada a la producción de acero y materiales para infraestructura y construcción.",
    website: "https://www.pazdelrio.com.co/",
    logo: "/experience/paz_rio.png",
  },
  {
    id: "9",
    name: "AGROlife Colombia",
    description:
      "Empresa del sector agroindustrial orientada a insumos agrícolas, nutrición vegetal y soluciones para productividad del campo.",
    website: "https://agrolifecolombia.com/",
    logo: "/experience/agrolife.png",
  },
  {
    id: "10",
    name: "Procaps",
    description:
      "Compañía farmacéutica colombiana productora de cápsulas blandas y soluciones de salud con presencia internacional.",
    website: "https://www.procapsgroup.com/",
    logo: "/experience/procaps.png",
  },
  {
    id: "11",
    name: "Komatsu",
    description:
      "Fabricante global de maquinaria pesada y soluciones para minería, construcción y logística industrial.",
    website: "https://www.komatsu.com/",
    logo: "/experience/komatsu.png",
  },
  {
    id: "12",
    name: "Eticos",
    description:
      "Operador logístico del sector farmacéutico enfocado en distribución, almacenamiento y comercialización de productos de salud.",
    website: "https://www.eticos.com/",
    logo: "/experience/eticos.png",
  },
  {
    id: "13",
    name: "Daluca International",
    description:
      "Comercializadora internacional enfocada en abastecimiento, importación y gestión de cadenas de suministro globales.",
    website: "https://www.dalucainternational.com/",
    logo: "/experience/daluca.png",
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
