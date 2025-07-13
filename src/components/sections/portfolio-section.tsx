import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const techProjects = [
    {
        title: "Legado da Ponte de Pedra",
        description: "Landing page para o curta-metragem 'Legado da Ponte de Pedra', um projeto socioambiental focado na preservação do patrimônio histórico e geológico de Goiás.",
        image: "https://placehold.co/800x600.png",
        hint: "bridge nature",
        link: "https://github.com/laranjaeragnarok2/ponte-de-pedra",
        tags: ["Next.js", "TypeScript", "Vercel"],
        className: ""
    },
    {
        title: "Medusa Store (E-commerce)",
        description: "Backend de e-commerce headless usando Medusa.js, incluindo landing page e estrutura completa para produtos, pedidos e clientes.",
        image: "https://placehold.co/600x800.png",
        hint: "ecommerce code",
        link: "https://github.com/laranjaeragnarok2/medusa-store",
        tags: ["Medusa.js", "PostgreSQL", "Next.js"],
        className: ""
    },
    {
        title: "JWildfire (Arte Generativa)",
        description: "Contribuição para um software multiplataforma de criação de arte generativa e fractais, unindo código e criação artística.",
        image: "https://placehold.co/600x600.png",
        hint: "fractal art",
        link: "https://github.com/laranjaeragnarok2/j-wildfire-8.50",
        tags: ["Java", "Cuda", "Arte Generativa"],
        className: ""
    },
];

const audiovisualProjects = [
    {
        title: "Telas Urbanas",
        description: "Série fotográfica que documenta a vibrante cena de graffiti e arte de rua em Rio Verde.",
        image: "https://placehold.co/600x600.png",
        hint: "graffiti wall",
        tags: ["Fotografia", "Arte Urbana"],
        className: ""
    },
    {
        title: "Ritmos do Cerrado",
        description: "Curta-metragem que explora a intersecção da música tradicional com a vida moderna no Cerrado.",
        image: "https://placehold.co/800x600.png",
        hint: "film music",
        tags: ["Direção", "Edição de Vídeo"],
        className: "md:col-span-2"
    },
     {
        title: "DJ Set - Cultura na Praça",
        description: "Performance de DJ ao vivo em evento cultural local, misturando batidas brasileiras com música eletrônica.",
        image: "https://placehold.co/600x600.png",
        hint: "dj music",
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

type Project = (typeof techProjects)[0];

const ProjectGrid = ({ projects, variant = 'art' }: { projects: Project[], variant?: 'tech' | 'art' }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[28rem]">
        {projects.map((item, index) => (
            <Card key={index} className={`bg-card group overflow-hidden flex flex-col border-2 border-transparent hover:border-primary/80 transition-all duration-300 ${item.className}`}>
                <div className="relative overflow-hidden h-1/2">
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
                <div className="flex flex-col justify-between flex-1 p-6">
                    <div>
                        <CardTitle className="mb-2">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </div>
                    <CardFooter className="p-0 pt-4 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
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

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-16 sm:py-24 space-y-24">
            <div className="bg-background">
                <div className="container mx-auto px-4">
                    <SectionTitle 
                        icon={Code}
                        title="Canvas Digital"
                        description="Uma seleção de meus trabalhos em desenvolvimento e tecnologia."
                    />
                    <ProjectGrid projects={techProjects} variant="tech" />
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
