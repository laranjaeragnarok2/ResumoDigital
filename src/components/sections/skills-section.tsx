import { CheckCircle } from "lucide-react";

const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
    "Estilização": ["Tailwind CSS", "Shadcn/UI", "Bootstrap", "CSS-in-JS"],
    "Backend": ["Node.js", "Medusa.js", "PHP", "Java", "Wordpress"],
    "Bancos de Dados": ["PostgreSQL", "MySQL", "Firebase"],
    "DevOps & Cloud": ["Git", "GitHub", "Vercel", "Firebase Hosting", "AWS", "Google Cloud"],
    "Mobile": ["Kotlin", "Swift 5.3", "Android Studio", "Otimização de Sistemas"],
    "Software": ["Adobe Suite", "Office Suite", "Figma", "Adobe XD", "VS Code", "Capcut", "OBS"],
    "Liderança": ["Liderança de Projetos", "Gestão de Equipes", "Ciclo de Vida de Projetos"],
    "Marketing": ["Análise de Marketing (Google)", "SEO", "Google Ads", "Meta Ads", "Funil de Vendas"],
    "Produção": ["Produção Cultural", "Estratégia de Projetos ESG"],
    "Criativo": ["Direção de Arte", "Storytelling", "Tipografia", "Fotografia Profissional", "Produção de Vídeo", "UI/UX", "Design Gráfico"],
    "Arte Urbana": ["PIXO", "Graffiti", "Rap", "DJing"]
};

export default function SkillsSection() {
    return (
        <section id="habilidades" className="bg-card py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-2 font-headline">Caixa de Ferramentas</h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Um conjunto de habilidades multidisciplinares para transformar ideias em realidade.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                            <ul className="space-y-3">
                                {items.map((skill) => (
                                    <li key={skill} className="flex items-center">
                                        <CheckCircle className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                                        <span className="text-muted-foreground">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
