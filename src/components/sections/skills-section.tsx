'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Mouse } from 'lucide-react';

const skills = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js'],
    Estilização: ['Tailwind CSS', 'Shadcn/UI', 'Bootstrap', 'CSS-in-JS'],
    Backend: ['Node.js', 'Medusa.js', 'PHP', 'Java', 'Wordpress'],
    'Bancos de Dados': ['PostgreSQL', 'MySQL', 'Firebase'],
    'DevOps & Cloud': ['Git', 'GitHub', 'Vercel', 'Firebase Hosting', 'AWS', 'Google Cloud'],
    Mobile: ['Kotlin', 'Swift 5.3', 'Android Studio', 'Otimização de Sistemas'],
    Software: ['Adobe Suite', 'Office Suite', 'Figma', 'Adobe XD', 'VS Code', 'Capcut', 'OBS'],
    Liderança: ['Liderança de Projetos', 'Gestão de Equipes', 'Ciclo de Vida de Projetos'],
    Marketing: ['Análise de Marketing (Google)', 'SEO', 'Google Ads', 'Meta Ads', 'Funil de Vendas'],
    Produção: ['Produção Cultural', 'Estratégia de Projetos ESG'],
    Criativo: ['Direção de Arte', 'Storytelling', 'Tipografia', 'Fotografia Profissional', 'Produção de Vídeo', 'UI/UX', 'Design Gráfico'],
    'Arte Urbana': ['PIXO', 'Graffiti', 'Rap', 'DJing'],
};

const SkillCard = ({ category, items }: { category: string; items: string[] }) => (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 bg-card border rounded-xl p-8 flex flex-col h-[500px]">
        <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
        <ul className="space-y-4">
            {items.map((skill) => (
                <li key={skill} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default function SkillsSection() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const x = useTransform(scrollYProgress, [0, 1], ['5%', '-95%']);

    return (
        <section ref={targetRef} id="habilidades" className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full px-4 text-center z-10">
                     <h2 className="text-3xl font-bold tracking-tight mb-2 font-headline">Caixa de Ferramentas</h2>
                     <p className="text-muted-foreground">Um conjunto de habilidades multidisciplinares para transformar ideias em realidade.</p>
                </div>
                <motion.div style={{ x }} className="flex gap-8 pl-[20vw]">
                    {Object.entries(skills).map(([category, items]) => (
                        <SkillCard key={category} category={category} items={items} />
                    ))}
                </motion.div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground animate-pulse">
                     <Mouse className="h-8 w-8" />
                     <span className="text-xs font-semibold tracking-widest">ARRASTE</span>
                </div>
            </div>
        </section>
    );
}
