import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { InteractiveSkillExplorer } from "@/components/sections/InteractiveSkillExplorer";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";

export default function Home() {
  return (
    <div className="relative space-y-4">
      <Hero />
      <AboutSection />
      <InteractiveSkillExplorer />
      <ProjectsSection />
      <ExperienceEducation />
    </div>
  );
}
