"use client"
import React from 'react';
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection, { type Project } from "@/components/sections/portfolio-section";


interface PortfolioPageProps {
  techProjects: Project[];
}

export default function PortfolioPage({ techProjects }: PortfolioPageProps) {

    return (
        <main className="bg-background text-foreground">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection techProjects={techProjects} />
        </main>
    );
}
