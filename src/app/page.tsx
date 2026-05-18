import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { CertificationsTitles } from "@/components/sections/CertificationsTitles";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <EngineeringPhilosophy />
      <CertificationsTitles />
      <TechStack />
      <Contact />
    </>
  );
}
