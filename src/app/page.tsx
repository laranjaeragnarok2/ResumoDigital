import PortfolioPage from "@/components/portfolio-page";
import { techProjects as initialTechProjects } from "@/components/sections/portfolio-section";

async function getReadmeContent(repoUrl: string) {
    try {
        const urlParts = repoUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);
        if (!urlParts) return null;

        const repoPath = urlParts[1];
        // We try a few common main branch names
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
            const readme = await getReadmeContent(project.link);
            return {
                ...project,
                description: readme || project.description,
            };
        })
    );

    return <PortfolioPage techProjects={techProjectsWithReadme} />;
}
