import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { AISection } from "@/components/sections/AISection";
import { CertificationsTitles } from "@/components/sections/CertificationsTitles";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <FadeIn delay={0.1}>
        <AboutSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <ServicesSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <TechStack />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <FeaturedProjects />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <ExperienceSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <SkillsSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <EngineeringPhilosophy />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <WorkflowSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <AISection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <CertificationsTitles />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <Contact />
      </FadeIn>
    </>
  );
}
