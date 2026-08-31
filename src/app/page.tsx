import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TechnicalStack } from "@/components/sections/TechnicalStack";
import { NodeConnectCanvas } from "@/components/ui/NodeConnectCanvas";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian text-text space-y-12">
      <Hero />
      <CaseStudies />
      <TechnicalStack />
      <Experience />
      
      {/* Interactive Node Connect Section */}
      <section id="contact" className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto">
        <NodeConnectCanvas />
      </section>
    </main>
  );
}
