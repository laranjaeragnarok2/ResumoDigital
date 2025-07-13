"use client"
import React from 'react';
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import { useScroll, useTransform, motion } from 'framer-motion';

export default function PortfolioPage() {
    const { scrollY } = useScroll();

    // This is a simplified example. For a real-world implementation,
    // you would likely need to use refs to get the exact start and end points of the section.
    const x = useTransform(scrollY, [0, 1000, 2000], [0, 0, -1000]);


    return (
        <div className="bg-background text-foreground">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection />
        </div>
    );
}
