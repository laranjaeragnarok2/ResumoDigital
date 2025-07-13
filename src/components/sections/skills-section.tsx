import { Code, Palette, Server, Database, Cloud, Smartphone, AppWindow, Users, Megaphone, Clapperboard, Sparkles, SprayCan } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


type SkillItem = {
    name: string;
    description: string;
};

const skillsData: {
    icon: React.ElementType;
    category: string;
    description: string;
    items: SkillItem[];
}[] = [
    {
        icon: Code,
        category: 'Frontend',
        description: 'Desenvolvimento de interfaces ricas e responsivas, focadas na experiência do usuário.',
        items: [
            { name: 'HTML5', description: 'Estruturação semântica para conteúdo web acessível e otimizado para SEO.' },
            { name: 'CSS3', description: 'Estilização avançada para layouts modernos, responsivos e com animações fluidas.' },
            { name: 'JavaScript (ES6+)', description: 'Linguagem essencial para interatividade e dinamismo em aplicações web.' },
            { name: 'TypeScript', description: 'Superset do JavaScript que adiciona tipagem estática para um código mais robusto e manutenível.' },
            { name: 'React', description: 'Biblioteca para construir interfaces de usuário componentizadas e reativas.' },
            { name: 'Next.js', description: 'Framework React para produção, com renderização no servidor (SSR) e geração de sites estáticos (SSG).' },
            { name: 'Vue.js', description: 'Framework progressivo para construir interfaces de usuário, conhecido por sua simplicidade e performance.' },
        ],
    },
    {
        icon: Palette,
        category: 'Estilização e UI',
        description: 'Criação de designs consistentes e modernos com as principais ferramentas do mercado.',
        items: [
            { name: 'Tailwind CSS', description: 'Framework CSS utility-first para prototipagem rápida e designs customizáveis.' },
            { name: 'Shadcn/UI', description: 'Coleção de componentes de UI reutilizáveis, construídos com Radix UI e Tailwind CSS.' },
            { name: 'Bootstrap', description: 'Framework popular para desenvolvimento de sites responsivos e mobile-first.' },
            { name: 'CSS-in-JS', description: 'Técnica que permite escrever CSS em JavaScript para componentização de estilos.' },
            { name: 'SASS/SCSS', description: 'Pré-processador CSS que adiciona funcionalidades como variáveis, mixins e aninhamento.' },
            { name: 'Styled Comp.', description: 'Biblioteca CSS-in-JS para React que utiliza template literals para estilizar componentes.' },
        ],
    },
    {
        icon: Server,
        category: 'Backend',
        description: 'Construção de sistemas robustos, escaláveis e seguros para dar vida às aplicações.',
        items: [
            { name: 'Node.js', description: 'Ambiente de execução JavaScript no servidor, ideal para APIs rápidas e escaláveis.' },
            { name: 'Express.js', description: 'Framework minimalista para Node.js, usado para construir APIs e aplicações web.' },
            { name: 'Medusa.js', description: 'Plataforma de e-commerce headless e de código aberto, alternativa ao Shopify.' },
            { name: 'PHP', description: 'Linguagem de script popular para desenvolvimento web, especialmente com sistemas como WordPress.' },
            { name: 'Java', description: 'Linguagem robusta e orientada a objetos, usada em aplicações corporativas de larga escala.' },
            { name: 'Wordpress', description: 'O CMS mais popular do mundo, para criação de blogs, sites institucionais e e-commerces.' },
            { name: 'NestJS', description: 'Framework Node.js progressivo para construir aplicações eficientes, escaláveis e do lado do servidor.' },
        ],
    },
    {
        icon: Database,
        category: 'Bancos de Dados',
        description: 'Modelagem e gerenciamento de dados com tecnologias SQL e NoSQL.',
        items: [
            { name: 'PostgreSQL', description: 'Sistema de gerenciamento de banco de dados relacional objeto, focado em extensibilidade e conformidade SQL.' },
            { name: 'MySQL', description: 'Sistema de gerenciamento de banco de dados relacional de código aberto, amplamente utilizado em aplicações web.' },
            { name: 'Firebase', description: 'Plataforma do Google para desenvolvimento de aplicativos com banco de dados NoSQL em tempo real (Firestore).' },
            { name: 'MongoDB', description: 'Banco de dados NoSQL orientado a documentos, conhecido por sua flexibilidade e escalabilidade.' },
            { name: 'SQLite', description: 'Biblioteca C que implementa um banco de dados SQL autônomo, sem servidor e sem configuração.' },
            { name: 'Supabase', description: 'Alternativa de código aberto ao Firebase, com banco de dados PostgreSQL, autenticação e APIs.' },
        ],
    },
    {
        icon: Cloud,
        category: 'DevOps & Cloud',
        description: 'Automação de processos, integração contínua e implantação em nuvem.',
        items: [
            { name: 'Git', description: 'Sistema de controle de versão distribuído para rastrear mudanças no código-fonte durante o desenvolvimento de software.' },
            { name: 'GitHub Actions', description: 'Plataforma de automação de fluxo de trabalho (CI/CD) integrada ao GitHub.' },
            { name: 'Vercel', description: 'Plataforma de nuvem para hospedar e implantar aplicações frontend, otimizada para Next.js.' },
            { name: 'Firebase Hosting', description: 'Hospedagem rápida e segura para aplicações web com entrega de conteúdo global (CDN).' },
            { name: 'AWS (S3, EC2)', description: 'Serviços da Amazon Web Services para armazenamento de objetos (S3) e capacidade de computação (EC2).' },
            { name: 'Google Cloud', description: 'Plataforma de computação em nuvem do Google, oferecendo uma variedade de serviços de infraestrutura e plataforma.' },
            { name: 'Docker', description: 'Plataforma para desenvolver, enviar e executar aplicações em contêineres.' },
        ],
    },
    {
        icon: Smartphone,
        category: 'Mobile',
        description: 'Desenvolvimento de aplicações para Android e iOS com foco em performance.',
        items: [
            { name: 'Kotlin', description: 'Linguagem de programação moderna e preferida pelo Google para desenvolvimento Android nativo.' },
            { name: 'Swift 5.3', description: 'Linguagem de programação da Apple para desenvolvimento de aplicativos iOS, macOS, watchOS e tvOS.' },
            { name: 'React Native', description: 'Framework para construir aplicativos móveis nativos usando React e JavaScript.' },
            { name: 'Android Studio', description: 'IDE oficial para desenvolvimento de aplicativos Android.' },
            { name: 'Xcode', description: 'IDE da Apple para desenvolvimento de software para macOS, iOS, iPadOS, watchOS e tvOS.' },
            { name: 'Otimização', description: 'Técnicas para melhorar o desempenho, uso de bateria e responsividade de aplicativos móveis.' },
        ],
    },
    {
        icon: AppWindow,
        category: 'Software',
        description: 'Proficiência em ferramentas essenciais para design, desenvolvimento e produtividade.',
        items: [
            { name: 'Adobe Suite', description: 'Conjunto de softwares para design gráfico, edição de vídeo, web design e mais (Photoshop, Illustrator, Premiere).' },
            { name: 'Office Suite', description: 'Pacote de aplicativos de produtividade da Microsoft (Word, Excel, PowerPoint).' },
            { name: 'Figma', description: 'Ferramenta de design de interface colaborativa baseada em navegador.' },
            { name: 'Adobe XD', description: 'Ferramenta de design de UI/UX para criar protótipos de sites e aplicativos móveis.' },
            { name: 'VS Code', description: 'Editor de código-fonte leve e poderoso da Microsoft, com suporte para inúmeras linguagens.' },
            { name: 'Capcut', description: 'Editor de vídeo gratuito para dispositivos móveis, popular para mídias sociais.' },
            { name: 'OBS Studio', description: 'Software de código aberto para gravação de vídeo e transmissão ao vivo.' },
        ],
    },
    {
        icon: Users,
        category: 'Liderança e Gestão',
        description: 'Condução de equipes e projetos com metodologias ágeis para garantir entregas de valor.',
        items: [
            { name: 'Liderança', description: 'Habilidade de motivar e guiar equipes para alcançar objetivos comuns.' },
            { name: 'Gestão de Equipes', description: 'Organização e coordenação de equipes para maximizar a produtividade e a colaboração.' },
            { name: 'Metodologias Ágeis', description: 'Abordagens iterativas para gerenciamento de projetos e desenvolvimento de software (Scrum, Kanban).' },
            { name: 'Scrum', description: 'Framework ágil para gerenciar o desenvolvimento de produtos complexos.' },
            { name: 'Ciclo de Vida', description: 'Gerenciamento de todas as fases de um projeto, desde a concepção até a conclusão e manutenção.' },
        ],
    },
    {
        icon: Megaphone,
        category: 'Marketing Digital',
        description: 'Estratégias para aumentar a visibilidade e o engajamento de marcas e produtos.',
        items: [
            { name: 'Análise (GA4)', description: 'Uso do Google Analytics 4 para medir o tráfego e o engajamento em sites e aplicativos.' },
            { name: 'SEO', description: 'Otimização para motores de busca para aumentar a visibilidade orgânica nos resultados de pesquisa.' },
            { name: 'Google Ads', description: 'Plataforma de publicidade online do Google para criar anúncios de pesquisa, display e vídeo.' },
            { name: 'Meta Ads', description: 'Plataforma de publicidade para veicular anúncios no Facebook, Instagram, Messenger e WhatsApp.' },
            { name: 'Funil de Vendas', description: 'Modelo estratégico que descreve a jornada do cliente desde o primeiro contato até a compra.' },
            { name: 'Inbound MKT', description: 'Metodologia de marketing que visa atrair clientes criando conteúdo e experiências valiosas.' },
        ],
    },
    {
        icon: Clapperboard,
        category: 'Produção Cultural e ESG',
        description: 'Idealização e gestão de projetos culturais alinhados a práticas de sustentabilidade.',
        items: [
            { name: 'Produção Cultural', description: 'Planejamento e execução de eventos e projetos artísticos e culturais.' },
            { name: 'Projetos ESG', description: 'Desenvolvimento de projetos alinhados a critérios ambientais, sociais e de governança.' },
            { name: 'Captação de Recursos', description: 'Busca por financiamento e patrocínio para viabilizar projetos.' },
            { name: 'Gestão de Eventos', description: 'Organização completa de eventos, desde a logística até a programação e divulgação.' },
        ],
    },
    {
        icon: Sparkles,
        category: 'Criatividade e Design',
        description: 'Da concepção à execução, criando narrativas visuais e experiências memoráveis.',
        items: [
            { name: 'Direção de Arte', description: 'Supervisão do estilo visual e das imagens em projetos de mídia.' },
            { name: 'Storytelling', description: 'Arte de contar histórias para criar uma conexão emocional com o público.' },
            { name: 'Tipografia', description: 'A arte e a técnica de arranjar tipos para tornar a linguagem escrita legível, legível e atraente.' },
            { name: 'Fotografia', description: 'Técnica de capturar imagens para fins artísticos, documentais ou comerciais.' },
            { name: 'Produção de Vídeo', description: 'Processo completo de criação de conteúdo em vídeo, da pré-produção à pós-produção.' },
            { name: 'UI/UX Design', description: 'Design de interfaces de usuário (UI) e experiência do usuário (UX) para criar produtos digitais intuitivos e agradáveis.' },
        ],
    },
    {
        icon: SprayCan,
        category: 'Arte Urbana e Música',
        description: 'Expressão artística através de múltiplas linguagens da cultura de rua.',
        items: [
            { name: 'PIXO', description: 'Forma de caligrafia urbana, característica da cultura de rua brasileira.' },
            { name: 'Graffiti', description: 'Expressão artística em espaços públicos, utilizando sprays, estênceis e outras técnicas.' },
            { name: 'Rap', description: 'Gênero musical e cultural que envolve rima, fala rítmica e gíria.' },
            { name: 'DJing', description: 'Arte de mixar e tocar músicas para um público, seja em festas, rádio ou gravações.' },
            { name: 'Produção Musical', description: 'Processo de criação, gravação e mixagem de faixas musicais.' },
            { name: 'Beatmaking', description: 'Criação de instrumentais e batidas, especialmente para gêneros como hip-hop e música eletrônica.' },
        ],
    },
];


const SkillCard = ({ icon: Icon, category, description, items }: { icon: React.ElementType; category: string; description: string; items: SkillItem[] }) => (
    <div className="bg-card border rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold text-foreground">{category}</h3>
        </div>
        <p className="text-muted-foreground mb-6 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
                <Popover key={skill.name}>
                    <PopoverTrigger asChild>
                         <button className="relative overflow-hidden text-xs bg-secondary text-muted-foreground px-2 py-1 rounded transition-all duration-300 reflection hover:reflection hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 cursor-pointer">
                           {skill.name}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-60 text-sm">
                        <h4 className="font-bold mb-1">{skill.name}</h4>
                        <p className="text-muted-foreground">{skill.description}</p>
                    </PopoverContent>
                </Popover>
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
                <p className="text-muted-foreground/50 max-w-2xl mx-auto mt-2 text-xs">
                    clique na ferramenta para saber mais
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
