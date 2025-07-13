import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section 
            id="inicio" 
            className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co/HTsTfPs6/envato-labs-image-edit.png)' }}
        >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-primary tracking-widest uppercase">Horyu Arthur</h2>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
                    Desenvolvedor & Designer Criativo
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Construindo pontes entre tecnologia e arte para criar experiências digitais de impacto.
                </p>
                <div className="flex justify-center items-center gap-4 mb-12">
                    <Button asChild size="lg">
                        <Link href="#portfolio">Ver Projetos</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="mailto:horyu.arthur@gmail.com">
                            <Mail className="mr-2" /> Contato
                        </Link>
                    </Button>
                </div>
                 <div className="flex justify-center gap-6">
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
            <div className="absolute bottom-10 animate-bounce z-10">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
        </section>
    );
}
