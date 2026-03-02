"use client";

import Image from "next/image";
import MobileCarousel from "@/components/ui/MobileCarousel";

const images = [
    { src: "gallery_1.png", alt: "Balcony View", colSpan: "md:col-span-8", aspect: "aspect-[16/9]" },
    { src: "gallery_2.png", alt: "Breakfast Setup", colSpan: "md:col-span-4", aspect: "aspect-[3/4]" },
    { src: "gallery_3.png", alt: "Interior Details", colSpan: "md:col-span-4", aspect: "aspect-square" },
    { src: "gallery_4.png", alt: "Surrounding Tea Estate", colSpan: "md:col-span-8", aspect: "aspect-video" },
    { src: "gallery_5.png", alt: "Dusk at the Cabana", colSpan: "md:col-span-12", aspect: "aspect-[21/9]" },
];

export default function Gallery() {
    // All mobile slides share a uniform portrait aspect so they look consistent
    const mobileSlides = images.map((img, idx) => (
        <div key={idx} className="relative aspect-[3/4] w-full overflow-hidden bg-sand-800">
            <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="90vw"
            />
            {/* Label overlay */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white/80 font-sans text-xs tracking-widest uppercase">
                {img.alt}
            </p>
        </div>
    ));

    return (
        <section id="gallery" className="py-32 bg-sand-900 text-sand-50">
            <div className="container mx-auto px-6 sm:px-12 max-w-7xl">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 border-b border-sand-800 pb-12 gap-6 text-center md:text-left">
                    <div>
                        <p className="text-sunrise-400 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-6">
                            Gallery
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-serif text-white font-light">
                            Visual <span className="italic text-sand-400">Journey</span>
                        </h2>
                    </div>
                    <p className="text-sand-400 font-light max-w-sm md:text-right text-lg text-center md:text-right">
                        Glimpses of life at The Cove at Rikillagaskada. Every corner is designed to inspire tranquility.
                    </p>
                </div>

                {/* Mobile: full carousel with portrait slides + dark nav */}
                <div className="md:hidden">
                    <MobileCarousel slideWidthClass="w-[88%]" scheme="dark">
                        {mobileSlides}
                    </MobileCarousel>
                </div>

                {/* Desktop: editorial masonry grid */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 sm:gap-8">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden group bg-sand-800 ${img.colSpan} ${img.aspect}`}
                        >
                            <Image
                                src={`/images/${img.src}`}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 85vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 flex justify-center">
                    <a
                        href="#stay"
                        className="group flex flex-col items-center gap-4 text-xs font-sans tracking-[0.15em] uppercase font-bold text-white hover:text-sunrise-400 transition-colors"
                    >
                        <span>Explore Accommodations</span>
                        <div className="h-8 w-[1px] bg-white group-hover:h-12 group-hover:bg-sunrise-400 transition-all duration-300" />
                    </a>
                </div>

            </div>
        </section>
    );
}
