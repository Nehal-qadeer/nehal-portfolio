import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { PipelineStatusPanel } from "@/components/sections/PipelineStatusPanel";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";

export default function Home() {
  return (
    <div className="relative space-y-4">
      <Hero />
      <AboutSection />
      <PipelineStatusPanel />
      <ProjectsSection />
      <ExperienceEducation />
    </div>
  );
}
