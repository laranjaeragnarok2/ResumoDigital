import React from 'react';

const Syntax = ({ color, children }: { color: string, children: React.ReactNode }) => (
    <span className={color}>{children}</span>
);

export default function HeroSection() {
    return (
        <pre className="text-sm md:text-base whitespace-pre-wrap leading-loose">
            <code>
                <div>
                    <Syntax color="text-chart-5">import</Syntax> <Syntax color="text-chart-1">HoryuArthur</Syntax> <Syntax color="text-chart-5">from</Syntax> <Syntax color="text-chart-3">'@/portfolio'</Syntax>;
                </div>
                <br />
                <div>
                    <Syntax color="text-chart-5">const</Syntax> <Syntax color="text-chart-2">Bio</Syntax> = () => ({'{'}
                </div>
                <div className="ml-4">
                    <Syntax color="text-chart-1">name</Syntax>: <Syntax color="text-chart-3">'Horyu Arthur'</Syntax>,
                </div>
                <div className="ml-4">
                    <Syntax color="text-chart-1">age</Syntax>: <Syntax color="text-chart-4">30</Syntax>,
                </div>
                <div className="ml-4">
                    <Syntax color="text-chart-1">location</Syntax>: <Syntax color="text-chart-3">'Rio Verde, GO, Brasil'</Syntax>,
                </div>
                <div className="ml-4">
                    <Syntax color="text-chart-1">passions</Syntax>: [<Syntax color="text-chart-3">'Tech'</Syntax>, <Syntax color="text-chart-3">'Audiovisual'</Syntax>, <Syntax color="text-chart-3">'Art'</Syntax>, <Syntax color="text-chart-3">'Culture'</Syntax>],
                </div>
                <div className="ml-4">
                    <Syntax color="text-chart-1">mission</Syntax>: <Syntax color="text-chart-3">"To build bridges between technology and art, creating impactful digital experiences."</Syntax>
                </div>
                <div>{'}'});</div>
                <br />
                <div>
                    <span className="text-muted-foreground">// Scroll to discover my work.</span>
                </div>
            </code>
        </pre>
    );
}
