
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
];

async function getReadmeContent(repoUrl: string): Promise<string | null> {
    try {
        const urlParts = repoUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);
        if (!urlParts) return null;

        const repoPath = urlParts[1];
        const mainBranches = ['main', 'master'];
        
        for (const branch of mainBranches) {
            const readmeUrl = `https://raw.githubusercontent.com/${repoPath}/${branch}/README.md`;
            const res = await fetch(readmeUrl, { next: { revalidate: 3600, tags: ['github-readme'] } }); 
            
            if (res.ok) {
                const text = await res.text();
                return text;
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
            let finalDescription = project.description;
            const readmeContent = await getReadmeContent(project.link);

            // Only try to summarize if readmeContent is a non-empty string
            if (readmeContent && typeof readmeContent === 'string' && readmeContent.trim().length > 0) {
                try {
                    finalDescription = await summarizeReadme(readmeContent);
                } catch (error) {
                    console.error(`Failed to summarize README for ${project.link}:`, error instanceof Error ? error.message : "Unknown error");
                    // Fallback to original description if summarization fails
                    finalDescription = project.description; 
                }
            }
            
            return {
                ...project,
                description: finalDescription,
            };
        })
    );

    return <PortfolioPage techProjects={techProjectsWithReadme} />;
}
