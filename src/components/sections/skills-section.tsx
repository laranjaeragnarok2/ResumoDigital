
const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
    "Styling": ["Tailwind CSS", "Shadcn/UI", "Bootstrap", "CSS-in-JS"],
    "Backend": ["Node.js", "Medusa.js", "PHP", "Java", "Wordpress"],
    "Databases": ["PostgreSQL", "MySQL", "Firebase"],
    "DevOpsCloud": ["Git", "GitHub", "Vercel", "Firebase Hosting", "AWS", "Google Cloud"],
    "Mobile": ["Kotlin", "Swift 5.3", "Android Studio", "System Optimization"],
    "Software": ["Adobe Suite", "Office Suite", "Figma", "Adobe XD", "VS Code", "Capcut", "OBS"],
    "Leadership": ["Project Leadership", "Team Management", "Project Lifecycle"],
    "Marketing": ["Marketing Analysis (Google)", "SEO", "Google Ads", "Meta Ads", "Sales Funnel"],
    "Production": ["Cultural Production", "ESG Project Strategy"],
    "Creative": ["Art Direction", "Storytelling", "Typography", "Pro Photography", "Video Production", "UI/UX", "Graphic Design"],
    "UrbanArt": ["PIXO", "Graffiti", "Rap", "DJing"]
};

const Syntax = ({ color, children }: { color: string, children: React.ReactNode }) => (
    <span className={color}>{children}</span>
);

export default function SkillsSection() {
    return (
        <pre className="text-sm md:text-base whitespace-pre-wrap">
            <code>
                <span className="text-muted-foreground">// Technical & Creative Competencies</span>
                {`\n\n`}
                <Syntax color="text-chart-5">export const</Syntax> <Syntax color="text-chart-1">skills</Syntax> = {'{'}{`\n`}
                {Object.entries(skills).map(([category, items]) => (
                     <div key={category} className="ml-4">
                        <Syntax color="text-chart-2">{category}</Syntax>: [{`\n`}
                        <div className="ml-4 flex flex-wrap gap-x-4 gap-y-1">
                            {items.map((skill, index) => (
                                <span key={skill}>
                                    <Syntax color="text-chart-3">{`'${skill}'`}</Syntax>
                                    {index < items.length - 1 ? ',' : ''}
                                </span>
                            ))}
                        </div>
                        {`],`}{`\n`}
                    </div>
                ))}
                {'}'};
            </code>
        </pre>
    );
}
