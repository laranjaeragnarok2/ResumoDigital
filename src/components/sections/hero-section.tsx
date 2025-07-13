import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center text-center bg-grid-pattern">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Horyu Arthur
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Desenvolvedor, Designer e Criativo. Construindo pontes entre tecnologia e arte para criar experiências digitais de impacto.
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Button asChild>
                            <Link href="#portfolio">Ver Projetos</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="mailto:horyu.arthur@gmail.com">
                                <Mail className="mr-2" /> Contato
                            </Link>
                        </Button>
                    </div>
                     <div className="flex justify-center gap-6 mt-12">
                        <Link href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com/in/horyu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
