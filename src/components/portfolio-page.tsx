"use client"
import React from 'react';
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection, { type Project } from "@/components/sections/portfolio-section";
import VideoSection, { type VideoProject } from "@/components/sections/video-section";


interface PortfolioPageProps {
  techProjects: Project[];
  videoProjects: VideoProject[];
}

export default function PortfolioPage({ techProjects, videoProjects }: PortfolioPageProps) {

    return (
        <main className="bg-background text-foreground">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection techProjects={techProjects} />
            <VideoSection projects={videoProjects} />
        </main>
    );
}
