
import { summarizeReadme } from "@/ai/flows/summarize-readme-flow";
import PortfolioPage from "@/components/portfolio-page";
import type { Project } from "@/components/sections/portfolio-section";

// Function to fetch repositories from GitHub API
async function getGithubProjects(username: string): Promise<Project[]> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=9`, {
             next: { revalidate: 3600, tags: ['github-repos'] } 
        });
        if (!res.ok) {
            console.error(`Error fetching repos for ${username}: ${res.statusText}`);
            return [];
        }
        const repos = await res.json();
        
        // Filter out forked repos and map to the Project type
        return repos
            .filter((repo: any) => !repo.fork)
            .map((repo: any) => ({
                title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
                description: repo.description || 'No description provided.',
                image: "https://placehold.co/800x600.png", // Placeholder image
                hint: "code abstract", // Generic hint
                link: repo.html_url,
                tags: repo.topics || [],
                className: "" 
        }));
    } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
        return [];
    }
}

async function getReadmeContent(repoUrl: string): Promise<string | null> {
    try {
        const urlParts = repoUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);
        if (!urlParts) return null;

        const repoPath = urlParts[1];
        const mainBranches = ['main', 'master'];
        
        for (const branch of mainBranches) {
            const readmeUrl = `https://raw.githubusercontent.com/${repoPath}/${branch}/README.md`;
            // Revalidate READMEs less frequently
            const res = await fetch(readmeUrl, { next: { revalidate: 86400, tags: ['github-readme'] } }); 
            
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
    // Fetch projects dynamically from GitHub
    const initialProjects = await getGithubProjects("laranjaeragnarok2");

    const techProjectsWithReadme = await Promise.all(
        initialProjects.map(async (project) => {
            let finalDescription = project.description;
            const readmeContent = await getReadmeContent(project.link);

            if (typeof readmeContent === 'string' && readmeContent.trim().length > 0) {
                try {
                    // Summarize README using Genkit flow
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
