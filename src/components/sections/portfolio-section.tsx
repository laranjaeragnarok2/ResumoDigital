"use client"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Code, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    { title: "Telas Urbanas", images: [{ src: "https://placehold.co/600x800.png", hint: "graffiti wall" }, { src: "https://placehold.co/600x800.png", hint: "street art" }], span: "" },
    { title: "Ritmos do Cerrado", images: [{ src: "https://placehold.co/800x600.png", hint: "savanna music" }, { src: "https://placehold.co/800x600.png", hint: "brazilian landscape" }], span: "col-span-1" },
    { title: "DJ Set", images: [{ src: "https://placehold.co/600x600.png", hint: "dj music" }, { src: "https://placehold.co/600x600.png", hint: "dj party" }], span: "col-span-1" },
    { 
        title: "Ensaio Fotográfico", 
        images: [
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492518015_10212582753001906_1097093899405753835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHm9FsXBsWMrsYs2NKbLmmOq2rKUR7hUJeraspRHuFQlzeL_o6sAMQudgI826RC-og&_nc_ohc=fM8_RjbKUWIQ7kNvwGKNlWo&_nc_oc=AdkNYybb_6_PrtAxEVnE8qD1stmRBfq9zRkplwMHEGxr_SZPnM3KpKz9czZihy8YPr4&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=UGa-lkd3zyLF03ALkaXX1A&oh=00_AfTt_divWj-nMbZCQkuaOVuauCoO1DgXintQrnX-ki1nQg&oe=6878FA40", hint: "photo shoot" }, 
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492463230_10212582756001981_5021368785761829477_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeELJ1HXCpP9e_vhPvxl3U-IA8I9EMQ4HBgDwj0QxDgcGPBL7ysSgLasWqyUrJsYCpA&_nc_ohc=BZWBQqBhqmwQ7kNvwEPAAw6&_nc_oc=Adn-MAC9r8dc_H6iUz9CPC8Xae8vIJw3tP56bllpoMn-ucnSb_7MUGAmz3HScca01rk&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=sD6LXacb7ewo_WfiujKxLg&oh=00_AfSI7DewbN0knqwolv6SE9SzYqeJ1HZaupTNcc1PhevlIg&oe=6878F17B", hint: "fashion model" },
            { src: "https://placehold.co/800x600.png", hint: "fashion model outdoor" }
        ], 
        span: "col-span-1" 
    },
    { 
        title: "Prod S/N", 
        images: [
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/com%201%20passinho%20de%20cadavez%20a%20gente%20vai%20looonge.jpg?raw=true", hint: "documentary film" }, 
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t1.6435-9/119083704_10207387092833649_4569987626614463091_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5bbf69&_nc_eui2=AeGoRiiGyBMrdsR9i_K6W6ppqAeKOzFgEp-oB4o7MWASn26NMhpZ96zBnWrhOHMO9ds&_nc_ohc=dgElFrtw68EQ7kNvwEG6qnK&_nc_oc=AdlZqRn4wzBXbxAb34fErcvtjQ_y3mKwgZiJd2dpGD8VqrBe7_mgOdakJzMQ1kXpcEg&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=tNhH1RtUuaHKd_9WLJm6Qg&oh=00_AfS2MxPLHmX7NJjRGDA4L3a17we8mTkRpcuWGN8cA-e_NQ&oe=689AABFB", hint: "event production" },
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t1.6435-9/122127573_10207527653907588_4576362741580298758_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvo12gSBtMZ5GD-Nl_VnzEdaWVkEA5GZR1pZWQQDkZlDnCFiwmiXXMVqrqtTxEMXc&_nc_ohc=6CgZR19iJtEQ7kNvwFw1oDl&_nc_oc=AdneNjtuHXzraU6WHlsq_WBUmPlI2b55iS1JGK8BKScQuKGRgR-i1E8lESprOJB7zbM&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=QtWBGdRxakoxw2fu2QD5Mw&oh=00_AfR6jWzC8ycqtIE_X5leQ60V-b0GgeGHCeg4kYLjk9hBqQ&oe=689AA974", hint: "event photography" }
        ], 
        span: "col-span-2"
    },
    { title: "Videoclipe", images: [{ src: "https://placehold.co/600x600.png", hint: "music video" }, { src: "https://placehold.co/600x600.png", hint: "singer" }], span: "col-span-1" },
    { title: "Curta Metragem", images: [{ src: "https://placehold.co/600x800.png", hint: "short film" }, { src: "https://placehold.co/600x800.png", hint: "movie scene" }], span: "" },
    { title: "Arte Generativa", images: [{ src: "https://placehold.co/600x600.png", hint: "generative art" }, { src: "https://placehold.co/600x600.png", hint: "abstract design" }], span: "col-span-1" },
    { title: "Performance Ao Vivo", images: [{ src: "https://placehold.co/600x600.png", hint: "live performance" }, { src: "https://placehold.co/600x600.png", hint: "concert lights" }], span: "col-span-1" },
    { title: "Animação 2D", images: [{ src: "https://placehold.co/600x600.png", hint: "2d animation" }, { src: "https://placehold.co/600x600.png", hint: "cartoon character" }], span: "col-span-1" },
    { title: "Animação 3D", images: [{ src: "https://placehold.co/600x600.png", hint: "3d animation" }, { src: "https://placehold.co/600x600.png", hint: "cgi character" }], span: "col-span-1" },
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

const MosaicCellContent = ({ project }: { project: AudiovisualProject }) => {
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
        if (isHovering && project.images.length > 1) {
            stopInterval();
            setCurrentIndex(1); // Show second image on hover
        } else if (!isHovering) {
            setCurrentIndex(0); // Revert to first image
            const randomDelay = Math.random() * 4000 + 2000; // 2-6 seconds
            stopInterval(); // Clear existing interval before setting a new one
            if (project.images.length > 1) {
                intervalRef.current = setInterval(() => {
                    setCurrentIndex(prev => (prev + 1) % project.images.length);
                }, randomDelay);
            }
        }

        return () => stopInterval();
    }, [isHovering, project.images]);


    const handleMouseEnter = () => {
        if (project.images.length > 1) {
           setIsHovering(true);
        }
    }
    const handleMouseLeave = () => {
        if (project.images.length > 1) {
           setIsHovering(false);
        }
    };

    return (
        <div 
            className={`relative overflow-hidden group h-full w-full cursor-pointer`}
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
                         (isHovering && project.images.length > 1) ? (index === 1 ? 'opacity-100' : 'opacity-0') : (index === 0 ? 'opacity-100' : 'opacity-0')
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


const MosaicCell = ({ project, onSelect }: { project: AudiovisualProject, onSelect: () => void }) => (
    <div className={cn(project.span, 'h-full')} onClick={onSelect}>
        <MosaicCellContent project={project} />
    </div>
)

const AudiovisualMosaic = ({ projects, onProjectSelect }: { projects: AudiovisualProject[], onProjectSelect: (project: AudiovisualProject) => void }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-1">
        {projects.map((project, index) => (
            <MosaicCell key={index} project={project} onSelect={() => onProjectSelect(project)} />
        ))}
    </div>
);

const Lightbox = ({ project, open, onOpenChange }: { project: AudiovisualProject | null; open: boolean; onOpenChange: (open: boolean) => void }) => {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                <Carousel className="w-full">
                    <CarouselContent>
                        {project.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video">
                                    <Image src={image.src} alt={`${project.title} - ${index + 1}`} fill className="object-contain" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
                <DialogClose className="absolute -top-2 -right-2 rounded-full bg-background/50 p-1 text-foreground opacity-100 hover:bg-background/80">
                  <X className="h-4 w-4" />
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};


interface PortfolioSectionProps {
    techProjects: Project[];
}

const INITIAL_VISIBLE_PROJECTS = 3;
const DESKTOP_BREAKPOINT = 1024;

export default function PortfolioSection({ techProjects }: PortfolioSectionProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<AudiovisualProject | null>(null);

    const handleProjectSelect = (project: AudiovisualProject) => {
        setSelectedProject(project);
        setLightboxOpen(true);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            const isDesktopQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
            setIsDesktop(isDesktopQuery.matches);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleShowMore = () => {
        setVisibleCount(techProjects.length);
        setIsExpanded(true);
    };

    const projectsToShow = isDesktop ? techProjects : techProjects.slice(0, visibleCount);
    const showMoreButtonIsVisible = !isDesktop && !isExpanded && techProjects.length > INITIAL_VISIBLE_PROJECTS;
    
    return (
        <>
            <section id="portfolio" className="py-16 sm:py-24 space-y-24">
                <div className="bg-background">
                    <div className="container mx-auto px-4">
                        <SectionTitle 
                            icon={Code}
                            title="Canvas Digital"
                            description="Uma seleção de meus trabalhos mais recentes e relevantes em desenvolvimento e tecnologia."
                        />
                        <ProjectGrid projects={projectsToShow} />
                        <div className="text-center mt-12">
                            {showMoreButtonIsVisible ? (
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
                        <AudiovisualMosaic projects={audiovisualProjects} onProjectSelect={handleProjectSelect} />
                    </div>
                </div>
            </section>
            <Lightbox project={selectedProject} open={lightboxOpen} onOpenChange={setLightboxOpen} />
        </>
    );
}
