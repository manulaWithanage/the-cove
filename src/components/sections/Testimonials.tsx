"use client";

import MobileCarousel from "@/components/ui/MobileCarousel";

const testimonials = [
    {
        quote: "Waking up to the view of the valley with mist rolling in was unforgettable. Architecture that respects the earth.",
        author: "Sarah & Mike",
        location: "United Kingdom"
    },
    {
        quote: "The perfect escape from the city noise. The attention to detail and the warm, unobtrusive hospitality were exceptional.",
        author: "Dinuka P.",
        location: "Colombo"
    },
    {
        quote: "If you want pure peace and nature without sacrificing luxury, this hidden gem in Rikillagaskada is the only place.",
        author: "Elena R.",
        location: "Germany"
    }
];

export default function Testimonials() {
    const cards = testimonials.map((t, idx) => (
        <div key={idx} className="flex flex-col border-t-2 border-sunrise-400/40 pt-8 h-full">
            <p className="text-xl lg:text-2xl text-sand-100 mb-10 font-serif font-light leading-relaxed flex-grow">
                &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-[1px] bg-sunrise-400" />
                <div>
                    <p className="font-sans font-semibold tracking-wider uppercase text-xs text-white">{t.author}</p>
                    <p className="text-xs text-sand-400 font-sans tracking-widest uppercase mt-1">{t.location}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <section id="testimonials" className="py-32 bg-forest-900 text-sand-50 relative overflow-hidden">

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-sunrise-400 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-6">
                        Guest Journal
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 font-light">
                        In Their <span className="italic text-sand-400">Words</span>
                    </h2>
                </div>

                {/* Mobile: carousel with dark scheme */}
                <div className="md:hidden">
                    <MobileCarousel slideWidthClass="w-[90%]" scheme="dark">
                        {cards}
                    </MobileCarousel>
                </div>

                {/* Desktop: 3-column grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16">
                    {cards}
                </div>
            </div>
        </section>
    );
}
