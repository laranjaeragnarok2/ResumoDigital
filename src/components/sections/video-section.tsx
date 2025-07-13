"use client"
import React from 'react';
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Video } from 'lucide-react';

export type VideoProject = {
    title: string;
    description: string;
    youtubeId: string;
};

const SectionTitle = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="text-center mb-12">
        <Icon className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{description}</p>
    </div>
);

const VideoPlayer = ({ youtubeId, title }: { youtubeId: string, title: string }) => (
    <div className="aspect-video overflow-hidden rounded-lg border">
        <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
        ></iframe>
    </div>
);

interface VideoSectionProps {
    projects: VideoProject[];
}

export default function VideoSection({ projects }: VideoSectionProps) {
    return (
        <section id="videos" className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <SectionTitle
                    icon={Video}
                    title="Narrativas em Movimento"
                    description="Produções audiovisuais que contam histórias, capturam momentos e exploram novas estéticas."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <VideoPlayer youtubeId={project.youtubeId} title={project.title} />
                            <div className="mt-4">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription className="mt-1">{project.description}</CardDescription>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
