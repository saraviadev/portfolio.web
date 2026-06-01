import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { CertificationsTitles } from "@/components/sections/CertificationsTitles";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WorkflowSection />
      <SkillsSection />
      <EngineeringPhilosophy />
      <CertificationsTitles />
      <Contact />
    </>
  );
}
