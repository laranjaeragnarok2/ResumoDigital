import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        role: "Líder de Projeto Web e Desenvolvedor Full-Stack",
        company: "Instituto Guardião das Abelhas",
        period: "Freelance | Maio 2025 - Presente",
        description: "Planejamento e desenvolvimento end-to-end do site institucional. Entreguei uma solução web robusta e de alta performance alinhada à causa, com foco em engajamento e captação de recursos para a preservação de abelhas nativas do Cerrado.",
        tags: ["Next.js", "TypeScript", "Vercel", "Gestão de Projetos"]
    },
    {
        role: "Designer Gráfico Sênior & Gerente de Projetos",
        company: "Smart Print Rio Verde",
        period: "Tempo Integral | Jan 2023 - Maio 2025",
        description: "Liderei a equipe de design em uma gráfica, gerenciando o ciclo de vida completo dos projetos, desde a consultoria ao cliente até a entrega final. Atuei diretamente no design visual, produção gráfica e gestão de projetos.",
        tags: ["Design Gráfico", "Gestão de Equipe", "Adobe Suite"]
    }
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
