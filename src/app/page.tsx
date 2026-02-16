import { AnimateIn } from "@/components/AnimateIn";
import { Contact } from "@/components/Contact";
import { ExperienceMarquee } from "@/components/ExperienceMarquee";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MissionVision } from "@/components/MissionVision";
import { ValueProposition } from "@/components/ValueProposition";
import { WhoWeAre } from "@/components/WhoWeAre";

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
          <MissionVision />
        </AnimateIn>
        <AnimateIn delay={1}>
          <ValueProposition />
        </AnimateIn>
        <AnimateIn delay={2}>
          <ExperienceMarquee />
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
