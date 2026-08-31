import { CanvasWrapper } from "@/components/canvas/CanvasWrapper";
import { SandboxHUD } from "@/components/ui/SandboxHUD";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Pinned Fixed 3D Spatial Sandbox Canvas */}
      <CanvasWrapper />

      {/* Interactive 3D Spatial Sandbox HUD Dock */}
      <SandboxHUD />

      {/* Foreground Content Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
