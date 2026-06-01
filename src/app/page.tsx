import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TechStack } from "@/components/sections/TechStack";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { AISection } from "@/components/sections/AISection";
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
      <TechStack />
      <SkillsSection />
      <EngineeringPhilosophy />
      <AISection />
      <CertificationsTitles />
      <Contact />
    </>
  );
}
