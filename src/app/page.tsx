import { summarizeReadme } from "@/ai/flows/summarize-readme-flow";
import PortfolioPage from "@/components/portfolio-page";

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
    {
        title: "Portfolio Pessoal",
        description: "Este próprio site! Um canvas digital construído com Next.js, Shadcn/UI e Genkit para buscar e resumir dinamicamente os READMEs do meu GitHub.",
        image: "https://placehold.co/800x600.png",
        hint: "portfolio website",
        link: "https://github.com/laranjaeragnarok2/horyu-portfolio",
        tags: ["Next.js", "Genkit", "Shadcn/UI"],
        className: ""
    },
    {
        title: "API Bistrô Zen",
        description: "API RESTful para o projeto Bistrô Zen, gerenciando cardápios, eventos e reservas. Construído com NestJS para uma arquitetura escalável e organizada.",
        image: "https://placehold.co/600x600.png",
        hint: "api code",
        link: "https://github.com/laranjaeragnarok2/bistro-zen-api",
        tags: ["NestJS", "TypeScript", "PostgreSQL"],
        className: ""
    },
    {
        title: "App Guardião das Abelhas",
        description: "Protótipo de aplicativo móvel em Kotlin para o Instituto Guardião das Abelhas, com funcionalidades de identificação de espécies e denúncias.",
        image: "https://placehold.co/600x800.png",
        hint: "mobile app nature",
        link: "https://github.com/laranjaeragnarok2/guardian-bees-app",
        tags: ["Kotlin", "Android Studio", "Firebase"],
        className: ""
    },
    {
        title: "Vue Dashboard",
        description: "Template de dashboard administrativo responsivo e customizável construído com Vue.js e Tailwind CSS, focado em visualização de dados.",
        image: "https://placehold.co/800x600.png",
        hint: "dashboard chart",
        link: "https://github.com/laranjaeragnarok2/vue-dashboard",
        tags: ["Vue.js", "TailwindCSS", "Chart.js"],
        className: ""
    },
    {
        title: "Indigo Design System",
        description: "Biblioteca de componentes React para padronização de interfaces, seguindo a identidade visual deste portfólio. Publicado como um pacote NPM.",
        image: "https://placehold.co/600x600.png",
        hint: "design system components",
        link: "https://github.com/laranjaeragnarok2/indigo-design",
        tags: ["React", "Storybook", "NPM"],
        className: ""
    },
    {
        title: "JS Snake Game",
        description: "Uma recriação do clássico jogo da cobrinha utilizando HTML5 Canvas e JavaScript puro, como um exercício de lógica e manipulação do DOM.",
        image: "https://placehold.co/600x600.png",
        hint: "game code",
        link: "https://github.com/laranjaeragnarok2/js-snake",
        tags: ["JavaScript", "HTML5", "CSS3"],
        className: ""
    },
];

async function getReadmeContent(repoUrl: string): Promise<string | null> {
    try {
        const urlParts = repoUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);
        if (!urlParts) return null;

        const repoPath = urlParts[1];
        const mainBranches = ['main', 'master'];
        
        for (const branch of mainBranches) {
            const readmeUrl = `https://raw.githubusercontent.com/${repoPath}/${branch}/README.md`;
            const res = await fetch(readmeUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
            
            if (res.ok) {
                return await res.text();
            }
        }
        console.warn(`README not found in main or master for repo: ${repoUrl}`);
        return null;
    } catch (error) {
        console.error(`Error fetching README for ${repoUrl}:`, error);
        return null;
    }
}

export default async function Home() {
    const techProjectsWithReadme = await Promise.all(
        techProjects.map(async (project) => {
            let summary = project.description;
            try {
                const readmeContent = await getReadmeContent(project.link);
                if (readmeContent) { // Check if readmeContent is not null or empty
                    summary = await summarizeReadme(readmeContent);
                }
            } catch (error) {
                console.error(`Failed to summarize README for ${project.link}:`, error instanceof Error ? error.message : "Unknown error");
                // Fallback to original description if summarization fails
            }
            return {
                ...project,
                description: summary,
            };
        })
    );

    return <PortfolioPage techProjects={techProjectsWithReadme} />;
}
