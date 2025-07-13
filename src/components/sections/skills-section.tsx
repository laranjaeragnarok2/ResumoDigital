'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Mouse } from 'lucide-react';

const skills = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Vue.js'],
    Estilização: ['Tailwind CSS', 'Shadcn/UI', 'Bootstrap', 'CSS-in-JS', 'SASS/SCSS', 'Styled Comp.'],
    Backend: ['Node.js', 'Express.js', 'Medusa.js', 'PHP', 'Java', 'Wordpress', 'NestJS'],
    'Bancos de Dados': ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB', 'SQLite', 'Supabase'],
    'DevOps & Cloud': ['Git', 'GitHub Actions', 'Vercel', 'Firebase Hosting', 'AWS (S3, EC2)', 'Google Cloud', 'Docker'],
    Mobile: ['Kotlin', 'Swift 5.3', 'React Native', 'Android Studio', 'Xcode', 'Otimização de Sistemas'],
    Software: ['Adobe Suite', 'Office Suite', 'Figma', 'Adobe XD', 'VS Code', 'Capcut', 'OBS Studio'],
    Liderança: ['Liderança de Projetos', 'Gestão de Equipes', 'Metodologias Ágeis', 'Scrum', 'Ciclo de Vida de Projetos'],
    Marketing: ['Análise de Marketing (GA4)', 'SEO', 'Google Ads', 'Meta Ads', 'Funil de Vendas', 'Inbound MKT'],
    Produção: ['Produção Cultural', 'Estratégia de Projetos ESG', 'Captação de Recursos', 'Gestão de Eventos'],
    Criativo: ['Direção de Arte', 'Storytelling', 'Tipografia', 'Fotografia', 'Produção de Vídeo', 'UI/UX Design'],
    'Arte Urbana': ['PIXO', 'Graffiti', 'Rap', 'DJing', 'Produção Musical', 'Beatmaking'],
};

const SkillCard = ({ category, items }: { category: string; items: string[] }) => (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 bg-card border rounded-xl p-8 flex flex-col h-full">
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
                     <p className="text-muted-foreground max-w-lg mx-auto">Um conjunto de habilidades multidisciplinares para transformar ideias em realidade.</p>
                </div>
                <motion.div style={{ x }} className="flex gap-8 pl-[20vw] items-center">
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
