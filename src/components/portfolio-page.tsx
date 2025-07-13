"use client"
import React, { useRef } from 'react';
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import { useScroll, useTransform, motion } from 'framer-motion';

export default function PortfolioPage() {
    const mainRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: mainRef,
      offset: ["start start", "end end"]
    });

    return (
        <main ref={mainRef} className="bg-background text-foreground">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection />
        </main>
    );
}
