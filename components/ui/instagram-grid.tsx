"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { BlurImagePlaceholder } from "@/components/ui/blur-image";

interface InstagramPost {
    id: string;
    video?: string;
    image?: string;
    link: string;
}

export function InstagramGrid({ posts }: { posts: InstagramPost[] }) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate loading time for skeleton display
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {posts.map((post, idx) => (
                <motion.a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative aspect-[9/16] overflow-hidden rounded-[24px] group block shadow-md shadow-[#D9A5B3]/20"
                >
                    {isLoading ? (
                        <div className="w-full h-full bg-[#FDFBF7]/10 animate-pulse flex items-center justify-center">
                           <span className="material-symbols-outlined text-[#FDFBF7]/30 text-[48px]">photo_camera</span>
                        </div>
                    ) : (
                        <>
                            {post.video ? (
                                <video 
                                    src={post.video} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                                />
                            ) : post.image ? (
                                <Image 
                                    src={post.image} 
                                    alt="Instagram Post" 
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    referrerPolicy="no-referrer"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <BlurImagePlaceholder seed={`ig-${post.id}`} icon="photo_camera" />
                            )}
                            <div className="absolute inset-0 bg-[#FDFBF7]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#3B1C32] text-[32px]">favorite</span>
                            </div>
                        </>
                    )}
                </motion.a>
            ))}
        </div>
    );
}
