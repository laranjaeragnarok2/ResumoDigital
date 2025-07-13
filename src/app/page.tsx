
import PortfolioPage from "@/components/portfolio-page";
import type { Project } from "@/components/sections/portfolio-section";

const techProjects: Project[] = [
    {
        title: "Legado da Ponte de Pedra (Site and Short-film)",
        description: "Este é o repositório oficial do projeto \"Legado da Ponte de Pedra\". Mais do que um site, é uma plataforma de conscientização e mobilização para a preservação de um dos mais importantes patrimônios geológicos, arqueológicos e culturais de Goiás, localizado na divisa entre Rio Verde e Paraúna.",
        image: "https://placehold.co/800x600.png",
        hint: "bridge stone",
        link: "https://github.com/laranjaeragnarok2/ponte-de-pedra",
        tags: ["Next.js", "TypeScript", "Vercel"],
        className: "md:col-span-2"
    },
    {
        title: "Medusa Store (E-commerce Headless)",
        description: "Implementação de uma loja de e-commerce headless utilizando Medusa.js.",
        image: "https://placehold.co/600x600.png",
        hint: "ecommerce code",
        link: "https://github.com/laranjaeragnarok2/medusa-store",
        tags: ["Medusa.js", "Next.js", "PostgreSQL"],
        className: ""
    },
    {
        title: "JWildfire (Generative Art)",
        description: "Explorações em arte generativa utilizando o software JWildfire.",
        image: "https://placehold.co/600x600.png",
        hint: "generative art",
        link: "https://github.com/laranjaeragnarok2/j-wildfire-8.50",
        tags: ["Java", "Arte Generativa", "Fractais"],
        className: ""
    },
];

export default function Home() {
    return <PortfolioPage techProjects={techProjects} />;
}
