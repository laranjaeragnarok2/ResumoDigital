
"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import { CodeEditorWindow } from "@/components/code-editor-window";

export default function PortfolioPage() {
  const parentRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("horyu.tsx");

  useEffect(() => {
    const handleScroll = () => {
      const parentContainer = parentRef.current;
      const contentContainer = contentRef.current;
      if (!contentContainer || !parentContainer) return;

      const { top } = parentContainer.getBoundingClientRect();
      const scrollableHeight = parentContainer.offsetHeight - window.innerHeight;
      
      let progress = 0;
      if (top < 0 && top > -scrollableHeight) {
        progress = Math.abs(top) / scrollableHeight;
      } else if (top <= -scrollableHeight) {
        progress = 1;
      }
      
      const numSections = 3;
      const totalWidth = (numSections - 1) * 100;
      contentContainer.style.transform = `translateX(-${progress * totalWidth}vw)`;
      
      // Update active tab based on which section is most visible
      const sectionIndex = Math.round(progress * (numSections-1));
      const tabs = ["horyu.tsx", "skills.ts", "experience.json"];
      setActiveTab(tabs[sectionIndex]);

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background">
      <div ref={parentRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen p-4 md:p-12">
            <CodeEditorWindow activeTab={activeTab}>
                <div ref={contentRef} className="flex w-[300vw] h-full transition-transform duration-300 ease-out">
                    <div className="w-screen h-full overflow-y-auto p-4 md:p-8"><HeroSection/></div>
                    <div className="w-screen h-full overflow-y-auto p-4 md:p-8"><SkillsSection/></div>
                    <div className="w-screen h-full overflow-y-auto p-4 md:p-8"><ExperienceSection/></div>
                </div>
            </CodeEditorWindow>
        </div>
      </div>
      <PortfolioSection />
    </div>
  );
}
