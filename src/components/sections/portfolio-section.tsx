
"use client"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Code, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// This is now a type definition, the actual data is in page.tsx
export type Project = {
    title: string;
    description: string;
    image: string;
    hint: string;
    link: string;
    specialLink?: string;
    specialLinkText?: string;
    tags: string[];
    className: string;
};

type AudiovisualProject = {
    title: string;
    images: { src: string; hint: string }[];
    span: string;
};

const audiovisualProjects: AudiovisualProject[] = [
    { 
        title: "Stance Stickers Design", 
        images: [
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/refs/heads/main/Colab%20com%20a%20%40antinpc_clubObrigado%20pela%20confian%C3%A7a%20irm%C3%A3o%20%40hugoosousa%23carsticker%20%23customstickers%20%23.webp", hint: "car sticker" }, 
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492545810_10212573905940735_4051312092924235796_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHbI_eOj46XZFo0W6tZBfuHVzFjDrZhkWVXMWMOtmGRZegN5anCWOg_vtA5Akm7jik&_nc_ohc=HopDdTVlSWgQ7kNvwHCJjUv&_nc_oc=Adkp468FLBpMEdaWcWB5pfFSa1gCe9ncJx-OeH4GyF2bpyNe5862-nAkXB8jgZ98Ark&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=DPU0fcLvi_MYADPaNp5MKA&oh=00_AfTYufIgbWPrebrz57ysp3Xgk2S8nGwIkV1IMPHZPakhsw&oe=6879099D", hint: "street art" },
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492069908_10212573905100714_6989240701723839438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGxi4biWYS1q1SHPDP6avGgq1H4Cgl5V82rUfgKCXlXzczDHARX5CaToX_yzd4LgJQ&_nc_ohc=80ICiWM4zqQQ7kNvwESB3vS&_nc_oc=AdkLgkd-0XjmarmS7dGkLmk-U_hjWwOIYVoD-BkvVLtcFBUt12e0NAC-BLuDGwcMoQc&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=DViImCGDYXXuInmf7eyvpA&oh=00_AfRXJl5hxUES9MS0idhOOhDWI3jgD_n7F0H3GTYg5pL68w&oe=68790C2B", hint: "car sticker night" }
        ], 
        span: "" 
    },
    { 
        title: "Ensaio Streetwear 064 Camisetas", 
        images: [
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492518015_10212582753001906_1097093899405753835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHm9FsXBsWMrsYs2NKbLmmOq2rKUR7hUJeraspRHuFQlzeL_o6sAMQudgI826RC-og&_nc_ohc=fM8_RjbKUWIQ7kNvwGKNlWo&_nc_oc=AdkNYybb_6_PrtAxEVnE8qD1stmRBfq9zRkplwMHEGxr_SZPnM3KpKz9czZihy8YPr4&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=UGa-lkd3zyLF03ALkaXX1A&oh=00_AfTt_divWj-nMbZCQkuaOVuauCoO1DgXintQrnX-ki1nQg&oe=6878FA40", hint: "photo shoot" }, 
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492463230_10212582756001981_5021368785761829477_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeELJ1HXCpP9e_vhPvxl3U-IA8I9EMQ4HBgDwj0QxDgcGPBL7ysSgLasWqyUrJsYCpA&_nc_ohc=BZWBQqBhqmwQ7kNvwEPAAw6&_nc_oc=Adn-MAC9r8dc_H6iUz9CPC8Xae8vIJw3tP56bllpoMn-ucnSb_7MUGAmz3HScca01rk&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=sD6LXacb7ewo_WfiujKxLg&oh=00_AfSI7DewbN0knqwolv6SE9SzYqeJ1HZaupTNcc1PhevlIg&oe=6878F17B", hint: "fashion model" },
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492685810_10212582755721974_8690676233239382494_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGuOf1ihn4PUImwryilgZ4eFbX3fjYIR4gVtfd-NghHiGZQeeHS3aBmcAp6IMqZF2s&_nc_ohc=8JRtLdPotD0Q7kNvwE9Bq1L&_nc_oc=AdnKioQkrlif4oTPN7ymE5XaohfRgO4z7gJOsZ9gZ9TYpraWJVDF90Gu3VtbQ0NXcKs&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=PjXWfZM_Gg4xWkzoJRwiog&oh=00_AfQCizFoo3sjEnDMUE3tQSjSfX3kWx0ZbfnAKqdw4AbAgQ&oe=6878F201", hint: "fashion model outdoor" }
        ], 
        span: "col-span-1" 
    },
    { 
        title: "Clipe Musical - Cidade", 
        images: [
            { src: "https://i.imgur.com/lRwvrIP.jpeg", hint: "music video city" }, 
            { src: "https://i.imgur.com/CFnCyBb.jpeg", hint: "urban music video" },
            { src: "https://i.imgur.com/dcszmaD.jpeg", hint: "singer city scape" }
        ], 
        span: "col-span-2"
    },
    { 
        title: "Clipe Musical - Cidade (Dropbox)", 
        images: [
            { src: "https://previews.dropbox.com/p/thumb/ACvh4BlKDqFrfFnzXSGgkUCI8nNRR07RmdTFKPRcs6WgfMMTES9HTfJ31KmBeWV0jy9QdVXeNqCrV12t0k-Mjn7hZpv41_Wf2_G2646Fm2eDeSpu7-p-Ka27tJ3Np-tSoIF83Mdlp9DSl1hijtt0I2D__vNiG3wg5R5Jc01p2idOUzA6H3ZKePml3r1qxCddSdram6l0Y3w-osPxgtKOFQkNa5lyya79e9xpUU2VbXltap4CC15VbOzM12O3EN7ygKuFoBQzfAOTkvyThelUnucTJomKrrHhE7GEpvY3pfqVCDr_zqMIT0Pzwehy1zJeoULoOGhkLNTihK_wUWtrpO1V/p.png?is_prewarmed=true", hint: "music video city" }, 
            { src: "https://previews.dropbox.com/p/thumb/ACs8hB8KrB4f6hAMh3bSjWyrXwVGPv_R-sYxGwMPjvv6VQRv-mkzOgta6w8qFhtVuLF32EIfCm4xrUo5WhFXjUaNJ-tHS1yP3XykEL7KQPUuk5iJtPUcjRklw1xSY1tKCR9LiHE2dOSfKw9OxJsvmq_MV4w06rMoWwRoXY_-U9Rtg4GfelX0IX5ag3uv-P6hBe9CQyIDW7Pb3w4a7-Ffh5MLvS40GFKvGYalrSbsJq6uYFL8rl3FnunVgWwpmOoVaBHtGyqn5HvCmKHpn8UDXfD6E3m0x28tANIhhVNH7coohKjo3oymZ7drGO0uhwLzRLw/p.png", hint: "urban music video" },
            { src: "https://previews.dropbox.com/p/thumb/ACtFkkGkMReLYreoQ6ZJmzC_QE2LwYl0hm58cWSH2Yv-CDh0GhJmAwEl9wx8DMZW6Fqh0TZz63wK4bsk7d6ulIPhhcieOeTx9BEQIGC-bmo3TEY0Cg5tO6hR2p3Ak369z0uCIbM2aSJco7WSOdEK4sth-59i3_as2KhEm1ZNjbYgtjL2umuit94xTblYMxH5nk9K8A1p9v_syhiDSy95M1cdTie_JtWgAni7AkeHf6cS5T0DZFuPhm8wuvk5jPOgeQ6S1GCfQTUKKKNzwjCNa2nj1YujbXKzno6CyxQ736IQg5SBTKqX2Zuh2qUsclrYy2A/p.png", hint: "singer city scape" }
        ], 
        span: "col-span-1" 
    },
    { 
        title: "Custom DarkLettering Vinil", 
        images: [
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492360556_10212567868429801_7160581523740932131_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFdeHPlAdzsYNb7RnGpjX1tXq7Co6h1F-1ersKjqHUX7YGt90Ds580qw33ai07f4fI&_nc_ohc=d2vaDxVZ7aAQ7kNvwGhcgdA&_nc_oc=AdnfaY8m9qZTYCJUlBlLtsr-hC0dDBcgjgsZ6rmBFn8B61cPQPXR8gXk2sMdHdy3zSI&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=Lm5hCc2ql9MV7iYF-Ae8aQ&oh=00_AfR6MUx-NbBoMJzELXdZWJ8nSjAMwccx6GMBlckvUIqANw&oe=68791F0B", hint: "custom lettering" }, 
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492516300_10212567869189820_7135244700239007909_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHqumprjG2YtEK-gGyd037n4Bv6mHKb5eXgG_qYcpvl5VKcfTeWh3WWVQwKYsAFEss&_nc_ohc=Z7WqXcyjgqgQ7kNvwGl6hUv&_nc_oc=AdkLNuwScTHFK-TsaIs-7Fi7GUYRdFZMZB91HJ8qvKrClGvw-PrZ3fr6amG8nKFzTqs&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=9LCKIQauajK7wDu9A58COw&oh=00_AfSl5Kd4ehsvtQyBNq81Gf1gJmi6tx2apNX1Pd5oWg-Ajg&oe=68791948", hint: "vinyl sticker" },
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/492527251_10212567867989790_4339247791101849919_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGoanRyLz38rVveBOq5FGp5Co6YaRCNbPgKjphpEI1s-FbZHAZmpF0Pi-2bXW1ZGMU&_nc_ohc=C8nzB2DjhJcQ7kNvwEiEz0R&_nc_oc=AdlLQh_3e-zll-l_4Aw_b7fzF5Z8L4YS5O4cld38C_Sjhw2skE2qZa5EnFsDj7p9f64&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=bofnQIPgG_jbCiMkDtzTvw&oh=00_AfSVr_TsCufx_KDBBDx-OtLUN5MbviDo0UMO6vM_yWFrsw&oe=68792409", hint: "dark lettering car" }
        ], 
        span: "col-span-1" 
    },
    { 
        title: "Clipe Musical - Passado", 
        images: [
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/Contemplem%20a%20fotografia%20por%20tr%C3%A1s%20de%20'%20P%20A%20S%20S%20A%20D%20O%20'%20um%20videoclipe%20do%20single%20do%20meu%20consagrado%20%20(1).jpg", hint: "music video" }, 
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/Contemplem%20a%20fotografia%20por%20tr%C3%A1s%20de%20'%20P%20A%20S%20S%20A%20D%20O%20'%20um%20videoclipe%20do%20single%20do%20meu%20consagrado%20%20(2).jpg", hint: "singer" },
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/Contemplem%20a%20fotografia%20por%20tr%C3%A1s%20de%20'%20P%20A%20S%20S%20A%20D%20O%20'%20um%20videoclipe%20do%20single%20do%20meu%20consagrado%20.jpg", hint: "music video set" }
        ], 
        span: "col-span-1" 
    },
    { 
        title: "Feira Cultural", 
        images: [
            { src: "https://i.imgur.com/d06L9e7.jpeg", hint: "cultural fair" }, 
            { src: "https://i.imgur.com/ODs5LcV.jpeg", hint: "event production" },
            { src: "https://i.imgur.com/UgLz4Zo.jpeg", hint: "event photography" }
        ], 
        span: "col-span-1"
    },
    { title: "Arte Generativa", images: [{ src: "https://placehold.co/600x600.png", hint: "generative art" }, { src: "https://placehold.co/600x600.png", hint: "abstract design" }], span: "col-span-1" },
    { 
        title: "Apresentações Musicais", 
        images: [
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/464413852_10211713131341908_4594013960881120493_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGgYQfX5bB7BQlWV8-6vA6gHbk9v9o6ZhcduT2_2jpmF8icrWWWVTGSIP5fu9bVHdo&_nc_ohc=Oo82voyzYLQQ7kNvwF9B5fi&_nc_oc=Adl3ESW5SsWLzV7jVHA929nxGGG2VvBrmNw6_kY_eUzeCnPcO5CU7a7XMSmfSGl45ag&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=BmdEbmkkzIyFuIWg8fgC5A&oh=00_AfSgxwWPh3vp0gKk6TxD060hWxiqln22uuQpo_bcOLv8KA&oe=68790922", hint: "live music" },
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/464386203_10211713634114477_1531813235054857196_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGbY3Sq8MgW_iq96gpe08tfhyqijkftK7CHKqKOR-0rsE5CsCxT63vcQOWYxJmqMnc&_nc_ohc=9OM9z_jWPL4Q7kNvwHCyIlG&_nc_oc=Admqb75PvEo4CyUzc6rrPUJTR_q-ypcCYc8dumUQxw98mNq-t__o6mxYg_w49RLcxNw&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=ZWL0dagD9i8CDh4eiJ8GQA&oh=00_AfQkfALvKvRpWQS_zSHq0HSdhGMmbdIkaanpLS9KM4p9lw&oe=68791538", hint: "singer stage" },
            { src: "https://scontent-bsb1-1.xx.fbcdn.net/v/t39.30808-6/464736276_10211744043474692_7058248885745509735_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEYlWUpUILJRL99AcwwH5fz_TaO2mfOY0T9No7aZ85jRMaMc-g1yktvdjF5ztt4TxY&_nc_ohc=iSCOLhhQhjYQ7kNvwG5bbK0&_nc_oc=AdmFWwWwF5SzvNX5OD6lPnWB-V5Q1O1jRhMuyG_xsclBsRi5RfiytdpYzoD_No4bg_g&_nc_zt=23&_nc_ht=scontent-bsb1-1.xx&_nc_gid=cGP7rSU2I7KyoGyCm__AuQ&oh=00_AfRdT1Njr1uJplCK2DTOk1ALjcUjZX3wfxTZ4tG3CgBHKA&oe=687913D1", hint: "musician crowd" }
        ], 
        span: "col-span-1" 
    },
    { title: "Animação 2D", images: [{ src: "https://placehold.co/600x600.png", hint: "2d animation" }, { src: "https://placehold.co/600x600.png", hint: "cartoon character" }], span: "col-span-1" },
    { title: "Curta Metragem", images: [{ src: "https://placehold.co/600x800.png", hint: "short film" }, { src: "https://placehold.co/600x800.png", hint: "movie scene" }], span: "" },
];


const SectionTitle = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="text-center mb-12">
        <Icon className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{description}</p>
    </div>
);

const ProjectGrid = ({ projects }: { projects: Project[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
        {projects.map((item, index) => (
            <Card key={index} className={`bg-card group overflow-hidden flex flex-col border-2 border-transparent hover:border-primary/80 transition-all duration-300 ${item.className}`}>
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        data-ai-hint={item.hint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-black/50 transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                        <CardTitle className="mb-2">{item.title}</CardTitle>
                        <CardDescription>
                            <p className="text-muted-foreground prose-sm">{item.description}</p>
                        </CardDescription>
                    </div>
                    <CardFooter className="p-0 pt-4 flex justify-between items-center mt-auto">
                        <div className="flex flex-wrap gap-2 items-center">
                            {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                             {item.specialLink && item.specialLinkText && (
                                <Link href={item.specialLink} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden text-xs bg-primary/20 text-primary-foreground/80 px-2 py-1 rounded transition-all duration-300 reflection hover:reflection hover:bg-primary/80 hover:text-primary-foreground hover:-translate-y-px cursor-pointer">
                                  {item.specialLinkText}
                                </Link>
                            )}
                        </div>
                        {item.link && (
                            <Button asChild variant="ghost" size="sm">
                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                    Ver <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                </div>
            </Card>
        ))}
    </div>
);

const MosaicCellContent = ({ project }: { project: AudiovisualProject }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        stopInterval();
        if (project.images.length > 1) {
            const randomDelay = Math.random() * 4000 + 3000; // 3-7 seconds
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % project.images.length);
            }, randomDelay);
        }
        
        return () => stopInterval();
    }, [project.images]);

    return (
        <div className="relative overflow-hidden group h-full w-full cursor-pointer">
            {project.images.map((image, index) => (
                 <Image
                    key={index}
                    src={image.src}
                    alt={project.title}
                    fill
                    data-ai-hint={image.hint}
                    className={cn(
                        "object-cover w-full h-full transition-opacity duration-700 ease-in-out",
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    )}
                />
            ))}

            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/50"></div>
            <div className="absolute bottom-0 left-0 p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="font-bold text-white text-lg">{project.title}</h3>
            </div>
        </div>
    );
};


const MosaicCell = ({ project, onSelect }: { project: AudiovisualProject, onSelect: () => void }) => (
    <div className={cn(project.span, 'h-full')} onClick={onSelect}>
        <MosaicCellContent project={project} />
    </div>
)

const AudiovisualMosaic = ({ projects, onProjectSelect }: { projects: AudiovisualProject[], onProjectSelect: (project: AudiovisualProject) => void }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-1">
        {projects.map((project, index) => (
            <MosaicCell key={index} project={project} onSelect={() => onProjectSelect(project)} />
        ))}
    </div>
);

const Lightbox = ({ project, open, onOpenChange }: { project: AudiovisualProject | null; open: boolean; onOpenChange: (open: boolean) => void }) => {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                <Carousel className="w-full">
                    <CarouselContent>
                        {project.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video">
                                    <Image src={image.src} alt={`${project.title} - ${index + 1}`} fill className="object-contain" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
                <DialogClose className="absolute -top-2 -right-2 rounded-full bg-background/50 p-1 text-foreground opacity-100 hover:bg-background/80">
                  <X className="h-4 w-4" />
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};


interface PortfolioSectionProps {
    techProjects: Project[];
}

const INITIAL_VISIBLE_PROJECTS = 3;
const DESKTOP_BREAKPOINT = 1024;

export default function PortfolioSection({ techProjects }: PortfolioSectionProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<AudiovisualProject | null>(null);

    const handleProjectSelect = (project: AudiovisualProject) => {
        setSelectedProject(project);
        setLightboxOpen(true);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            const isDesktopQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
            setIsDesktop(isDesktopQuery.matches);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleShowMore = () => {
        setVisibleCount(techProjects.length);
        setIsExpanded(true);
    };

    const projectsToShow = isDesktop ? techProjects : techProjects.slice(0, visibleCount);
    const showMoreButtonIsVisible = !isDesktop && !isExpanded && techProjects.length > INITIAL_VISIBLE_PROJECTS;
    
    return (
        <>
            <section id="portfolio" className="py-16 sm:py-24 space-y-24">
                <div className="bg-background">
                    <div className="container mx-auto px-4">
                        <SectionTitle 
                            icon={Code}
                            title="Canvas Digital"
                            description="Uma seleção de meus trabalhos mais recentes e relevantes em desenvolvimento e tecnologia."
                        />
                        <ProjectGrid projects={projectsToShow} />
                        <div className="text-center mt-12">
                            {showMoreButtonIsVisible ? (
                                <Button onClick={handleShowMore} size="lg">
                                    Ver Mais Projetos
                                </Button>
                            ) : (
                                <Button asChild size="lg">
                                    <Link href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2" />
                                        Ver Todos no GitHub
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-card">
                    <div className="container mx-auto px-4 py-16 sm:py-24">
                        <SectionTitle 
                            icon={Film}
                            title="Lente Criativa"
                            description="Explorações no mundo do audiovisual, da fotografia à produção de experiências"
                        />
                        <AudiovisualMosaic projects={audiovisualProjects} onProjectSelect={handleProjectSelect} />
                    </div>
                </div>
            </section>
            <Lightbox project={selectedProject} open={lightboxOpen} onOpenChange={setLightboxOpen} />
        </>
    );
}
