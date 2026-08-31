import { GeekyMatrixBackground } from "@/components/canvas/GeekyMatrixBackground";
import { Hero } from "@/components/sections/Hero";
import { ThesisGameSpotlight } from "@/components/sections/ThesisGameSpotlight";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TechnicalStack } from "@/components/sections/TechnicalStack";
import { Experience } from "@/components/sections/Experience";
import { TerminalContact } from "@/components/ui/TerminalContact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-graphite text-bone space-y-12">
      {/* Ambient Geeky Tensor & Matrix Background */}
      <GeekyMatrixBackground />

      {/* Foreground Content */}
      <div className="relative z-10 space-y-12">
        <Hero />
        <ThesisGameSpotlight />
        <CaseStudies />
        <TechnicalStack />
        <Experience />
        
        {/* Interactive CLI Terminal Contact Section */}
        <section className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto">
          <TerminalContact />
        </section>
      </div>
    </main>
  );
}
