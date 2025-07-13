import { Code, Palette, Server, Database, Cloud, Smartphone, AppWindow, Users, Megaphone, Clapperboard, Sparkles, SprayCan } from 'lucide-react';

const skillsData = [
    {
        icon: Code,
        category: 'Frontend',
        description: 'Desenvolvimento de interfaces ricas e responsivas, focadas na experiência do usuário.',
        items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Vue.js'],
    },
    {
        icon: Palette,
        category: 'Estilização e UI',
        description: 'Criação de designs consistentes e modernos com as principais ferramentas do mercado.',
        items: ['Tailwind CSS', 'Shadcn/UI', 'Bootstrap', 'CSS-in-JS', 'SASS/SCSS', 'Styled Comp.'],
    },
    {
        icon: Server,
        category: 'Backend',
        description: 'Construção de sistemas robustos, escaláveis e seguros para dar vida às aplicações.',
        items: ['Node.js', 'Express.js', 'Medusa.js', 'PHP', 'Java', 'Wordpress', 'NestJS'],
    },
    {
        icon: Database,
        category: 'Bancos de Dados',
        description: 'Modelagem e gerenciamento de dados com tecnologias SQL e NoSQL.',
        items: ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB', 'SQLite', 'Supabase'],
    },
    {
        icon: Cloud,
        category: 'DevOps & Cloud',
        description: 'Automação de processos, integração contínua e implantação em nuvem.',
        items: ['Git', 'GitHub Actions', 'Vercel', 'Firebase Hosting', 'AWS (S3, EC2)', 'Google Cloud', 'Docker'],
    },
    {
        icon: Smartphone,
        category: 'Mobile',
        description: 'Desenvolvimento de aplicações para Android e iOS com foco em performance.',
        items: ['Kotlin', 'Swift 5.3', 'React Native', 'Android Studio', 'Xcode', 'Otimização de Sistemas'],
    },
    {
        icon: AppWindow,
        category: 'Software',
        description: 'Proficiência em ferramentas essenciais para design, desenvolvimento e produtividade.',
        items: ['Adobe Suite', 'Office Suite', 'Figma', 'Adobe XD', 'VS Code', 'Capcut', 'OBS Studio'],
    },
    {
        icon: Users,
        category: 'Liderança e Gestão',
        description: 'Condução de equipes e projetos com metodologias ágeis para garantir entregas de valor.',
        items: ['Liderança de Projetos', 'Gestão de Equipes', 'Metodologias Ágeis', 'Scrum', 'Ciclo de Vida de Projetos'],
    },
    {
        icon: Megaphone,
        category: 'Marketing Digital',
        description: 'Estratégias para aumentar a visibilidade e o engajamento de marcas e produtos.',
        items: ['Análise de Marketing (GA4)', 'SEO', 'Google Ads', 'Meta Ads', 'Funil de Vendas', 'Inbound MKT'],
    },
    {
        icon: Clapperboard,
        category: 'Produção Cultural e ESG',
        description: 'Idealização e gestão de projetos culturais alinhados a práticas de sustentabilidade.',
        items: ['Produção Cultural', 'Estratégia de Projetos ESG', 'Captação de Recursos', 'Gestão de Eventos'],
    },
    {
        icon: Sparkles,
        category: 'Criatividade e Design',
        description: 'Da concepção à execução, criando narrativas visuais e experiências memoráveis.',
        items: ['Direção de Arte', 'Storytelling', 'Tipografia', 'Fotografia', 'Produção de Vídeo', 'UI/UX Design'],
    },
    {
        icon: SprayCan,
        category: 'Arte Urbana e Música',
        description: 'Expressão artística através de múltiplas linguagens da cultura de rua.',
        items: ['PIXO', 'Graffiti', 'Rap', 'DJing', 'Produção Musical', 'Beatmaking'],
    },
];

const SkillCard = ({ icon: Icon, category, description, items }: { icon: React.ElementType; category: string; description: string; items: string[] }) => (
    <div className="bg-card border rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold text-foreground">{category}</h3>
        </div>
        <p className="text-muted-foreground mb-6 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
                <span key={skill} className="text-xs bg-accent/80 text-accent-foreground px-2 py-1 rounded transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:scale-105">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default function SkillsSection() {
    return (
        <section id="habilidades" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-2 font-headline">Caixa de Ferramentas</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Uma coleção de habilidades multidisciplinares que me permite transitar entre o universo da tecnologia e da arte, transformando ideias em realidade.
                </p>
                <p className="text-muted-foreground/70 max-w-2xl mx-auto mt-2 italic text-sm">
                    (umas podem estar mais afiadas que outras)
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((skill) => (
                    <SkillCard key={skill.category} {...skill} />
                ))}
            </div>
        </section>
    );
}
