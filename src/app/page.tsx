
import PortfolioPage from "@/components/portfolio-page";
import type { Project } from "@/components/sections/portfolio-section";

const techProjects: Project[] = [
    {
        title: "Legado da Ponte de Pedra (Site and Short-film)",
        description: "Este é o repositório oficial do projeto \"Legado da Ponte de Pedra\". Mais do que um site, é uma plataforma de conscientização e mobilização para a preservação de um dos mais importantes patrimônios geológicos, arqueológicos e culturais de Goiás, localizado na divisa entre Rio Verde e Paraúna.",
        image: "https://camo.githubusercontent.com/46bbefc1f593e73f2fc424f03875642b2d6ef5ec4cdcfeebdf328b52b15801ba/68747470733a2f2f692e706f7374696d672e63632f78546758784377502f33646132346535663661633466313838373764303836383832653830632e6a7067",
        hint: "bridge stone",
        link: "https://ponte-de-pedra.vercel.app/",
        specialLink: "https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions",
        specialLinkText: "Assine o Abaixo assinado",
        tags: ["Next.js", "TypeScript", "Vercel"],
        className: "md:col-span-2"
    },
    {
        title: "Medusa Store (E-commerce Headless)",
        description: "Landing page para e-commerce com lista de espera via Formspree, notificações por e-mail, painel de controle, design responsivo com tema escuro e botões flutuantes para contato direto.",
        image: "https://i.postimg.cc/J76DhJGZ/screencapture-medusa-store-sop-2025-06-25-15-43-16.png",
        hint: "medusa store",
        link: "https://github.com/laranjaeragnarok2/medusa-store",
        tags: ["Medusa.js", "Next.js", "PostgreSQL"],
        className: ""
    },
    {
        title: "JWildfire (Generative Art)",
        description: "Software multi-plataforma focado na criação e processamento de imagens, possivelmente fractais ou arte generativa. O JWildfire é uma aplicação baseada em Java que pode ser executada em diversos sistemas operacionais, incluindo Windows, macOS e Linux.",
        image: "https://raw.githubusercontent.com/laranjaeragnarok2/j-wildfire-8.50/master/lib/Captura%20de%20tela%202025-05-25%20043231.png",
        hint: "generative art",
        link: "https://github.com/laranjaeragnarok2/j-wildfire-8.50",
        tags: ["Java", "Arte Generativa", "Fractais"],
        className: ""
    },
    {
        title: "HoryuAI",
        description: "HoryuAI é um bot para Discord com integração à API Gemini para gerar conteúdo dinâmico. Ele foi desenvolvido para trazer recomendações de filmes, gerar imagens a partir de prompts e auxiliar com comandos administrativos como kick e ban, além de enviar notícias semanais (news) de forma automatizada.",
        image: "https://files.realpython.com/media/How-to-Make-a-Discord-Bot-With-Python_Watermarked.23887eee3226.jpg",
        hint: "discord bot ai",
        link: "https://github.com/laranjaeragnarok2/HoryuAI",
        tags: ["Python", "Discord.py", "Gemini API"],
        className: ""
    },
    {
        title: "Liquid Glass React 💧✨",
        description: "Este projeto é uma demonstração interativa do efeito \"liquid glass\" (vidro líquido/fosco) e de personalização de interface do usuário, construído com Next.js, React, ShadCN UI e Tailwind CSS. Explore como diferentes parâmetros visuais podem ser ajustados em tempo real para criar uma experiência de usuário moderna e atraente.",
        image: "https://placehold.co/600x400.png",
        hint: "liquid glass effect",
        link: "https://vidromorfismo.vercel.app/",
        tags: ["Next.js", "React", "ShadCN UI", "Tailwind CSS"],
        className: ""
    },
];

export default function Home() {
    return <PortfolioPage techProjects={techProjects} />;
}
