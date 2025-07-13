import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="sobre" className="bg-card py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-center">
                    <div className="md:col-span-2">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden group">
                             <Image 
                                src="https://placehold.co/800x1000.png"
                                alt="Horyu Arthur"
                                fill
                                data-ai-hint="portrait developer"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 font-headline text-primary">Sobre Mim</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                Sou um profissional multidisciplinar com uma jornada que conecta os universos da <strong>tecnologia</strong>, do <strong>design</strong> e da <strong>cultura</strong>. Minha paixão reside em transformar ideias complexas em experiências digitais que não são apenas funcionais, mas também esteticamente ricas e intuitivas.
                            </p>
                            <p>
                                Com um background que vai do desenvolvimento full-stack à produção de eventos culturais, carrego uma visão holística em cada projeto. Acredito que a melhor solução nasce da empatia com o usuário e da colaboração entre diferentes áreas do conhecimento.
                            </p>
                            <p>
                                Seja codificando uma aplicação, liderando uma equipe de design ou produzindo um videoclipe, meu objetivo é sempre o mesmo: construir pontes, contar histórias e gerar impacto positivo.
                            </p>
                        </div>
                        <div className="mt-8">
                             <Button asChild size="lg" className="bg-gradient-instagram text-white font-bold hover:opacity-90 transition-opacity">
                                <Link href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="mr-2" />
                                    Acesse meu Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}