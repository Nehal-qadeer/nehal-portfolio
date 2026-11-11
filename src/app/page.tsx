import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { InteractiveSkillExplorer } from "@/components/sections/InteractiveSkillExplorer";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";
import { SkillFilterProvider } from "@/context/SkillFilterContext";

export default function Home() {
  return (
    <SkillFilterProvider>
      <div className="relative space-y-4">
        <Hero />
        <AboutSection />
        <InteractiveSkillExplorer />
        <ProjectsSection />
        <ExperienceEducation />
      </div>
    </SkillFilterProvider>
  );
}
