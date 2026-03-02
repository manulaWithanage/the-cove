import { Sun, Leaf, Sparkles } from "lucide-react";

export default function Highlights() {
    const highlights = [
        {
            title: "Cozy Cabanas",
            description: "Modern comforts wrapped in natural wood, featuring premium bedding and private balconies overlooking the valley.",
            icon: <Leaf className="text-forest-900" size={24} strokeWidth={1.5} />
        },
        {
            title: "Nature's Palette",
            description: "Wake up to misty mornings and golden sunsets. Reconnect with nature without compromising on luxury.",
            icon: <Sun className="text-forest-900" size={24} strokeWidth={1.5} />
        },
        {
            title: "Curated Experiences",
            description: "From tranquil stargazing nights to nearby waterfall hikes, every moment is crafted to help you unwind.",
            icon: <Sparkles className="text-forest-900" size={24} strokeWidth={1.5} />
        }
    ];

    return (
        <section id="highlights" className="py-32 bg-sand-50 relative overflow-hidden">

            {/* Decorative large typographic watermark */}
            <div className="absolute -left-20 top-20 text-[15rem] font-serif italic text-sand-100/50 pointer-events-none select-none z-0">
                Sanctuary
            </div>

            <div className="container mx-auto px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Header Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <p className="text-forest-700 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-6">
                            The Experience
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-serif text-forest-900 mb-8 leading-tight font-light">
                            Disconnect from the noise. <br />
                            <span className="italic text-sand-500">Embrace nature.</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-forest-900/20 mb-8" />
                        <p className="text-lg text-sand-800/80 font-light leading-relaxed max-w-md">
                            A private escape where architectural elegance seamlessly blends with the raw beauty of Sri Lanka's central highlands.
                        </p>
                    </div>

                    {/* Cards Column */}
                    <div className="lg:col-span-7 grid gap-10 lg:pl-12">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col sm:flex-row gap-8 items-start border-b border-sand-200/60 pb-10 last:border-0"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-sand-200 flex items-center justify-center bg-white group-hover:bg-sand-100 transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-forest-900 mb-4 font-normal group-hover:text-forest-700 transition-colors">{item.title}</h3>
                                    <p className="text-sand-800/80 font-light leading-relaxed max-w-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
