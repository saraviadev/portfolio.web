import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { CertificationsTitles } from "@/components/sections/CertificationsTitles";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FadeIn><FeaturedProjects /></FadeIn>
      <FadeIn delay={0.2}><EngineeringPhilosophy /></FadeIn>
      <FadeIn delay={0.2}><CertificationsTitles /></FadeIn>
      <FadeIn delay={0.2}><TechStack /></FadeIn>
      <FadeIn delay={0.2}><Contact /></FadeIn>
    </>
  );
}
