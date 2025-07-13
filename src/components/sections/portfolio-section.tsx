"use client"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Code, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';

// This is now a type definition, the actual data is in page.tsx
export type Project = {
    title: string;
    description: string;
    image: string;
    hint: string;
    link: string;
    specialLink?: string;
    specialLinkText?: string;
    tags: string[];
    className: string;
};

type AudiovisualProject = {
    title: string;
    images: { src: string; hint: string }[];
    span: string;
};

const audiovisualProjects: AudiovisualProject[] = [
    { title: "Telas Urbanas", images: [{ src: "https://placehold.co/600x800.png", hint: "graffiti wall" }, { src: "https://placehold.co/600x800.png", hint: "street art" }], span: "row-span-2" },
    { title: "Ritmos do Cerrado", images: [{ src: "https://placehold.co/800x600.png", hint: "savanna music" }, { src: "https://placehold.co/800x600.png", hint: "brazilian landscape" }], span: "col-span-1" },
    { title: "DJ Set", images: [{ src: "https://placehold.co/600x600.png", hint: "dj music" }, { src: "https://placehold.co/600x600.png", hint: "dj party" }], span: "col-span-1" },
    { title: "Ensaio Fotográfico", images: [{ src: "https://placehold.co/800x600.png", hint: "photo shoot" }, { src: "https://placehold.co/800x600.png", hint: "fashion model" }], span: "col-span-1" },
    { title: "Videoclipe", images: [{ src: "https://placehold.co/600x600.png", hint: "music video" }, { src: "https://placehold.co/600x600.png", hint: "singer" }], span: "col-span-1" },
    { title: "Curta Metragem", images: [{ src: "https://placehold.co/600x800.png", hint: "short film" }, { src: "https://placehold.co/600x800.png", hint: "movie scene" }], span: "row-span-2" },
    { title: "Documentário", images: [{ src: "https://placehold.co/800x400.png", hint: "documentary film" }, { src: "https://placehold.co/800x400.png", hint: "interview" }], span: "col-span-2" },
    { title: "Arte Generativa", images: [{ src: "https://placehold.co/600x600.png", hint: "generative art" }, { src: "https://placehold.co/600x600.png", hint: "abstract design" }], span: "col-span-1" },
    { title: "Performance Ao Vivo", images: [{ src: "https://placehold.co/600x600.png", hint: "live performance" }, { src: "https://placehold.co/600x600.png", hint: "concert lights" }], span: "col-span-1" },
    { title: "Animação 2D", images: [{ src: "https://placehold.co/600x600.png", hint: "2d animation" }, { src: "https://placehold.co/600x600.png", hint: "cartoon character" }], span: "col-span-1" },
    { title: "Animação 3D", images: [{ src: "https://placehold.co/600x600.png", hint: "3d animation" }, { src: "https://placehold.co/600x600.png", hint: "cgi character" }], span: "col-span-1" },
    { title: "Stop Motion", images: [{ src: "https://placehold.co/600x600.png", hint: "stop motion" }, { src: "https://placehold.co/600x600.png", hint: "claymation" }], span: "col-span-1" },
];


const SectionTitle = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="text-center mb-12">
        <Icon className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{description}</p>
    </div>
);

const ProjectGrid = ({ projects }: { projects: Project[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
        {projects.map((item, index) => (
            <Card key={index} className={`bg-card group overflow-hidden flex flex-col border-2 border-transparent hover:border-primary/80 transition-all duration-300 ${item.className}`}>
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        data-ai-hint={item.hint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-black/50 transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                        <CardTitle className="mb-2">{item.title}</CardTitle>
                        <CardDescription>
                            <p className="text-muted-foreground prose-sm">{item.description}</p>
                        </CardDescription>
                    </div>
                    <CardFooter className="p-0 pt-4 flex justify-between items-center mt-auto">
                        <div className="flex flex-wrap gap-2 items-center">
                            {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                             {item.specialLink && item.specialLinkText && (
                                <Link href={item.specialLink} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden text-xs bg-primary/20 text-primary-foreground/80 px-2 py-1 rounded transition-all duration-300 reflection hover:reflection hover:bg-primary/80 hover:text-primary-foreground hover:-translate-y-px cursor-pointer">
                                  {item.specialLinkText}
                                </Link>
                            )}
                        </div>
                        {item.link && (
                            <Button asChild variant="ghost" size="sm">
                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                    Ver <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                </div>
            </Card>
        ))}
    </div>
);

const MosaicCell = ({ project }: { project: AudiovisualProject }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (!isHovering) {
            const randomDelay = Math.random() * 4000 + 2000; // 2-6 seconds
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % project.images.length);
            }, randomDelay);
        } else {
            stopInterval();
            setCurrentIndex(1 % project.images.length);
        }

        return () => stopInterval();
    }, [isHovering, project.images.length]);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setCurrentIndex(0);
    };

    return (
        <div 
            className={`relative overflow-hidden group ${project.span}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {project.images.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={project.title}
                    fill
                    data-ai-hint={image.hint}
                    className={cn(
                        "object-cover w-full h-full transition-opacity duration-700 ease-in-out",
                        currentIndex === index ? "opacity-100" : "opacity-0",
                        isHovering && "group-hover:opacity-0",
                        isHovering && index === 1 && "group-hover:opacity-100"
                    )}
                />
            ))}
            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/50"></div>
            <div className="absolute bottom-0 left-0 p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="font-bold text-white text-lg">{project.title}</h3>
            </div>
        </div>
    );
};

const AudiovisualMosaic = ({ projects }: { projects: AudiovisualProject[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-1">
        {projects.map((project, index) => (
            <MosaicCell key={index} project={project} />
        ))}
    </div>
);


interface PortfolioSectionProps {
    techProjects: Project[];
}

const INITIAL_VISIBLE_PROJECTS = 3;

export default function PortfolioSection({ techProjects }: PortfolioSectionProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowMore = () => {
        setVisibleCount(techProjects.length);
        setIsExpanded(true);
    };

    const visibleProjects = techProjects.slice(0, visibleCount);
    
    return (
        <section id="portfolio" className="py-16 sm:py-24 space-y-24">
            <div className="bg-background">
                <div className="container mx-auto px-4">
                    <SectionTitle 
                        icon={Code}
                        title="Canvas Digital"
                        description="Uma seleção de meus trabalhos mais recentes e relevantes em desenvolvimento e tecnologia."
                    />
                    <ProjectGrid projects={visibleProjects} />
                    <div className="text-center mt-12">
                        {!isExpanded && techProjects.length > INITIAL_VISIBLE_PROJECTS ? (
                            <Button onClick={handleShowMore} size="lg">
                                Ver Mais Projetos
                            </Button>
                        ) : (
                             <Button asChild size="lg">
                                <Link href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2" />
                                    Ver Todos no GitHub
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-card">
                 <div className="container mx-auto px-4 py-16 sm:py-24">
                    <SectionTitle 
                        icon={Film}
                        title="Lente Criativa"
                        description="Explorações no mundo do audiovisual, da fotografia à produção de experiências"
                    />
                    <AudiovisualMosaic projects={audiovisualProjects} />
                </div>
            </div>
        </section>
    );
}
