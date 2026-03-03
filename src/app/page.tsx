import { AnimateIn } from "@/components/AnimateIn";
import { Contact } from "@/components/Contact";
import { EQUIPO } from "@/data/team";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MissionVision } from "@/components/MissionVision";
import { TeamCarousel } from "@/components/TeamCarousel";
import { ValueProposition } from "@/components/ValueProposition";
import { WhoWeAre } from "@/components/WhoWeAre";
import { VerticeMethodology } from "@/components/VerticeMethodology";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AnimateIn>
          <Hero />
        </AnimateIn>
        <AnimateIn delay={1}>
          <WhoWeAre />
        </AnimateIn>
        <AnimateIn delay={2}>
          <VerticeMethodology />
        </AnimateIn>
        <AnimateIn delay={2}>
          <MissionVision />
        </AnimateIn>
        <AnimateIn delay={1}>
          <ValueProposition />
        </AnimateIn>
        <AnimateIn delay={2}>
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
        <AnimateIn delay={1}>
          <Location />
        </AnimateIn>
        <AnimateIn delay={2}>
          <Contact />
        </AnimateIn>
      </main>
      <Footer />
    </>
  );
}
