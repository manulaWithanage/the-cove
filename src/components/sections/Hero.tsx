import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import { Mountain, MapPin, Coffee } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-forest-900 selection:bg-white selection:text-forest-900">

            {/* Background Image Container with Pan Animation */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-forest-900 animate-image-pan">
                    <Image
                        src="/images/hero_bg.png"
                        alt="The Cove at Rikillagaskada Sunrise"
                        fill
                        className="object-cover opacity-90"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Refined gradient overlay for depth instead of flat black */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-forest-900/90 via-black/30 to-black/10 mix-blend-multiply" />

            {/* Top gradient specifically to make the Navbar readable against bright skies */}
            <div className="absolute top-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

            <div className="container relative mx-auto px-6 sm:px-12 z-20 flex flex-col items-center justify-center h-full pt-24 pb-12">

                {/* Eyebrow text top */}
                <div className="mb-8 overflow-hidden">
                    <p className="text-sunrise-400 font-sans tracking-[0.2em] text-xs sm:text-sm uppercase font-semibold animate-fade-in-up">
                        Welcome To The Highlands
                    </p>
                </div>

                {/* Massive Serif Main Title */}
                <div className="overflow-hidden pb-4">
                    <h1
                        className="flex flex-col items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-light text-white leading-[1.05] tracking-tight animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="text-center">Escape to <span className="italic">Peace</span></span>
                        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-2 md:mt-4 text-white/90">
                            {siteConfig.name}
                        </span>
                    </h1>
                </div>

                {/* Minimal Subtext */}
                <div className="overflow-hidden mt-6 mb-12">
                    <p
                        className="text-lg md:text-xl text-sand-50/80 max-w-xl mx-auto text-center font-light leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        A modern retreat nestled in the hills of Rikillagaskada.
                        Experience breathtaking views and pure tranquility.
                    </p>
                </div>

                {/* Premium CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <a
                        href="#booking"
                        className="group relative px-8 py-4 bg-white text-forest-900 overflow-hidden rounded-none w-full sm:w-auto flex items-center justify-center transition-transform hover:-translate-y-1"
                    >
                        <span className="relative z-10 font-sans text-sm tracking-[0.15em] uppercase font-bold">Check Availability</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-sand-100 z-0"></div>
                    </a>

                    <a
                        href="#gallery"
                        className="group px-8 py-4 border border-white/30 text-white w-full sm:w-auto flex items-center justify-center transition-all hover:border-white hover:bg-white/5"
                    >
                        <span className="font-sans text-sm tracking-[0.15em] uppercase font-medium">Explore Gallery</span>
                    </a>
                </div>

                {/* Elegant Trust Row placed at absolute bottom */}
                <div className="absolute bottom-8 left-0 w-full px-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <div className="container mx-auto border-t border-white/20 pt-6">
                        <div className="flex flex-row items-center justify-center md:justify-between gap-6 md:gap-0 text-white/60 text-xs tracking-widest uppercase font-semibold flex-wrap">
                            <div className="flex items-center gap-2">
                                <Mountain size={14} className="text-sunrise-500" />
                                <span>Scenic Views</span>
                            </div>
                            <div className="hidden md:block h-3 w-px bg-white/20" />
                            <div className="flex items-center gap-2">
                                <Coffee size={14} className="text-sunrise-500" />
                                <span>Tea Country</span>
                            </div>
                            <div className="hidden md:block h-3 w-px bg-white/20" />
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-sunrise-500" />
                                <span>Rikillagaskada</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
