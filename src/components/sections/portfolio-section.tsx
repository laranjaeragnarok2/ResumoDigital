
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const portfolioItems = [
    {
        title: "Legado da Ponte de Pedra",
        description: "Landing page for the short film 'Legado da Ponte de Pedra', a socio-environmental project focused on preserving Goiás' historical and geological heritage.",
        image: "https://placehold.co/800x600.png",
        hint: "bridge nature",
        link: "https://github.com/laranjaeragnarok2/ponte-de-pedra",
        tags: ["Next.js", "TypeScript", "Vercel"],
        className: "md:col-span-2"
    },
    {
        title: "Medusa Store (E-commerce)",
        description: "Headless e-commerce backend using Medusa.js, including a landing page and full structure for products, orders, and customers.",
        image: "https://placehold.co/600x800.png",
        hint: "ecommerce code",
        link: "https://github.com/laranjaeragnarok2/medusa-store",
        tags: ["Medusa.js", "PostgreSQL", "Next.js"],
        className: "md:row-span-2"
    },
    {
        title: "JWildfire (Generative Art)",
        description: "Contribution to a multi-platform software for creating generative art and fractals, merging code with artistic creation.",
        image: "https://placehold.co/600x600.png",
        hint: "fractal art",
        link: "https://github.com/laranjaeragnarok2/j-wildfire-8.50",
        tags: ["Java", "Cuda", "Generative Art"],
        className: ""
    },
    {
        title: "Urban Canvas",
        description: "A photo series documenting the vibrant graffiti and street art scene in Rio Verde.",
        image: "https://placehold.co/600x600.png",
        hint: "graffiti wall",
        tags: ["Photography", "Urban Art"],
        className: ""
    },
    {
        title: "Cerrado Rhythms",
        description: "Short film exploring the intersection of traditional music and modern life in the Cerrado.",
        image: "https://placehold.co/800x600.png",
        hint: "film music",
        tags: ["Directing", "Video Editing"],
        className: "md:col-span-2"
    },
     {
        title: "DJ Set - Cultura na Praça",
        description: "Live DJ performance at a local cultural event, mixing Brazilian beats with electronic music.",
        image: "https://placehold.co/600x600.png",
        hint: "dj music",
        tags: ["DJing", "Live Performance"],
        className: ""
    },
];

export default function PortfolioSection() {
    return (
        <section className="bg-background py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{color: 'hsl(var(--accent))'}}>
                        Digital Canvas
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A selection of my work in development and audiovisual arts.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[28rem]">
                    {portfolioItems.map((item, index) => (
                        <Card key={index} className={`bg-card group overflow-hidden flex flex-col ${item.className}`}>
                            <div className="relative overflow-hidden h-1/2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    data-ai-hint={item.hint}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-between items-center">
                                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                                        {item.tags.map(tag => <span key={tag} className="text-xs font-semibold" style={{color: 'hsl(var(--accent))'}}>{tag}</span>)}
                                    </div>
                                    {item.link && (
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                                View <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
