
const Syntax = ({ color, children }: { color: string, children: React.ReactNode }) => (
    <span className={color}>{children}</span>
);

const experiences = [
    {
        role: "Web Project Lead & Full-Stack Developer",
        company: "Instituto Guardião das Abelhas",
        period: "Freelance | May 2025 - Present",
        description: "End-to-end planning and development of the institutional website. Delivered a robust, high-performance web solution aligned with the cause, focusing on engagement and fundraising for the preservation of native Cerrado bees.",
    },
    {
        role: "Senior Graphic Designer & Project Manager",
        company: "Smart Print Rio Verde",
        period: "Full-Time | Jan 2023 - May 2025",
        description: "Led the design team at a print shop, managing the entire project lifecycle from client consultation to final delivery. Directly involved in visual design, graphic production, and project management.",
    }
];

export default function ExperienceSection() {
    return (
        <div className="font-code text-sm md:text-base">
            <span className="text-muted-foreground">// Professional Experience</span>
            <pre className="whitespace-pre-wrap leading-relaxed mt-4">
                <code>
                    <Syntax color="text-chart-5">const</Syntax> <Syntax color="text-chart-1">workHistory</Syntax> = [
                    {'{'}
                    {experiences.map((exp, index) => (
                        <span key={exp.company} className="ml-4 my-4 border-l border-border/50 pl-4 block">
                            <Syntax color="text-chart-2">role</Syntax>: <Syntax color="text-chart-3">"{exp.role}"</Syntax>,{'\n'}
                            <Syntax color="text-chart-2">company</Syntax>: <Syntax color="text-chart-3">"{exp.company}"</Syntax>,{'\n'}
                            <Syntax color="text-chart-2">period</Syntax>: <Syntax color="text-chart-3">"{exp.period}"</Syntax>,{'\n'}
                            <Syntax color="text-chart-2">details</Syntax>: <Syntax color="text-chart-3">`{exp.description}`</Syntax>{'\n'}
                            {index < experiences.length - 1 && '}, {'\n'}{'{'}
                        </span>
                    ))}
                    {'}'}{'\n'}
                    ];
                </code>
            </pre>
        </div>
    );
}
