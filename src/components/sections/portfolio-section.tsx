"use client"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Code, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { useState } from 'react';

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

const audiovisualProjects: Project[] = [
    {
        title: "Telas Urbanas",
        description: "Série fotográfica que documenta a vibrante cena de graffiti e arte de rua em Rio Verde.",
        image: "https://placehold.co/600x600.png",
        hint: "graffiti wall",
        link: "", // No link for this one
        tags: ["Fotografia", "Arte Urbana"],
        className: ""
    },
    {
        title: "Ritmos do Cerrado",
        description: "Curta-metragem que explora a intersecção da música tradicional com a vida moderna no Cerrado.",
        image: "https://placehold.co/800x600.png",
        hint: "film music",
        link: "", // No link for this one
        tags: ["Direção", "Edição de Vídeo"],
        className: "md:col-span-2"
    },
     {
        title: "DJ Set - Cultura na Praça",
        description: "Performance de DJ ao vivo em evento cultural local, misturando batidas brasileiras com música eletrônica.",
        image: "https://placehold.co/600x600.png",
        hint: "dj music",
        link: "", // No link for this one
        tags: ["DJing", "Performance Ao Vivo"],
        className: ""
    },
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

const ProjectGrid = ({ projects, variant = 'art' }: { projects: Project[], variant?: 'tech' | 'art' }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
        {projects.map((item, index) => (
            <Card key={index} className={`bg-card group overflow-hidden flex flex-col border-2 border-transparent hover:border-primary/80 transition-all duration-300 ${item.className}`}>
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        data-ai-hint={item.hint}
                        className={cn(
                            "object-cover transition-transform duration-300",
                            variant === 'art' && "group-hover:scale-105"
                        )}
                    />
                     <div className={cn(
                        "absolute inset-0 transition-colors",
                        variant === 'art' ? "bg-black/20 group-hover:bg-black/40" : "bg-black/50"
                     )} />
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
                        description="Uma seleção de meus trabalhos em desenvolvimento e tecnologia."
                    />
                    <ProjectGrid projects={visibleProjects} variant="tech" />
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
                    <ProjectGrid projects={audiovisualProjects} variant="art" />
                </div>
            </div>
        </section>
    );
}
