import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
    </div>
  );
}
