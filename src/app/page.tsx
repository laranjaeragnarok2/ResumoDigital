
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
        image: "https://placehold.co/600x600.png",
        hint: "medusa store",
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
