import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        role: "Líder de Projeto Web e Desenvolvedor Full-Stack",
        company: "Instituto Guardião das Abelhas (Freelance)",
        period: "2025",
        description: "Planejei e desenvolvi o site institucional de ponta a ponta, entregando uma solução web robusta, alinhada à causa e focada em engajamento para a preservação de abelhas nativas do Cerrado.",
        tags: ["Next.js", "TypeScript", "Vercel", "Gestão de Projetos"]
    },
    {
        role: "Designer Gráfico Sênior & Gerente de Projetos",
        company: "Smart Print Rio Verde",
        period: "2023 - 2025",
        description: "Liderei a equipe de design, gerenciando o ciclo completo dos projetos, desde a consultoria ao cliente até a entrega final, com forte atuação em design visual, produção gráfica e gestão.",
        tags: ["Design Gráfico", "Gestão de Equipe", "Adobe Suite"]
    },
    {
        role: "Sócio-Proprietário & Gestor Criativo",
        company: "Bistrô Zen",
        period: "2022",
        description: "Como cofundador, orquestrei todas as facetas do negócio, desde a curadoria do cardápio e identidade visual até a produção de eventos e programação musical, criando uma experiência cultural única.",
        tags: ["Gestão de Negócios", "Marketing", "Produção de Eventos", "Culinária"]
    },
    {
        role: "Diretor de Produção & SEO",
        company: "Produtora Autônoma",
        period: "2021",
        description: "Atuei como um hub criativo, dirigindo produções musicais como beatmaker e técnico de som, além de gerenciar eventos, design e estratégias de publicidade digital para impulsionar artistas e marcas.",
        tags: ["Produção Musical", "Beatmaking", "SEO", "Direção Criativa"]
    },
    {
        role: "Especialista em SEO",
        company: "Ancestral Studios",
        period: "2020",
        description: "Desenvolvi e executei estratégias de marketing 360 com foco em SEO, otimizando a presença digital de grandes clientes do agronegócio e aumentando significativamente sua visibilidade online.",
        tags: ["Marketing 360", "SEO Avançado", "Agronegócio"]
    },
    {
        role: "Desenvolvedor Web & Especialista em Segurança",
        company: "Agência América",
        period: "2019",
        description: "Criei e mantive sites para mais de 50 clientes de alto perfil, como hospitais e concessionárias. Fui peça-chave na implementação de protocolos de segurança digital para proteger os ativos online dos clientes.",
        tags: ["Desenvolvimento Web", "Segurança Digital", "HTML/CSS", "JavaScript"]
    },
];

export default function ExperienceSection() {
    return (
        <section id="experiencia" className="container mx-auto px-4 py-16 sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-2 font-headline">Posições de Destaque</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Minha trajetória une tecnologia, design e gestão para entregar resultados de impacto.</p>
            
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0 md:flex items-start mb-12 group">
                        <div className="md:w-1/2 md:pr-8 md:text-right">
                           <div className="sticky top-24">
                             <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                             <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                             <p className="font-medium">{exp.company}</p>
                           </div>
                        </div>
                        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background transition-transform group-hover:scale-125" aria-hidden="true"></div>
                        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                            <div className="bg-card p-6 rounded-lg border">
                                <p className="text-card-foreground/80 leading-relaxed">{exp.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
