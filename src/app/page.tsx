import { summarizeReadme } from "@/ai/flows/summarize-readme-flow";
import PortfolioPage from "@/components/portfolio-page";
import { techProjects as initialTechProjects } from "@/components/sections/portfolio-section";

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
        console.warn(`README not found for repo: ${repoUrl}`);
        return null;
    } catch (error) {
        console.error(`Error fetching README for ${repoUrl}:`, error);
        return null;
    }
}

export default async function Home() {
    const techProjectsWithReadme = await Promise.all(
        initialTechProjects.map(async (project) => {
            const readmeContent = await getReadmeContent(project.link);
            let summary = project.description;
            if (readmeContent) {
                try {
                    summary = await summarizeReadme(readmeContent);
                } catch (error) {
                    console.error(`Failed to summarize README for ${project.link}:`, error);
                    // Fallback to original description if summarization fails
                    summary = project.description; 
                }
            }
            return {
                ...project,
                description: summary,
            };
        })
    );

    return <PortfolioPage techProjects={techProjectsWithReadme} />;
}
