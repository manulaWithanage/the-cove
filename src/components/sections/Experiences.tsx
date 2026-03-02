import Image from "next/image";
import { MapPin } from "lucide-react";
import MobileCarousel from "@/components/ui/MobileCarousel";

export default function Experiences() {
    const experiences = [
        {
            title: "Loolecondera Estate",
            description: "Walk through historic trails and taste Ceylon tea at the place of its birth. The original tea bushes planted by James Taylor still thrive here.",
            distance: "15 km",
            image: "experience_1.png"
        },
        {
            title: "Mandaram Nuwara",
            description: "Often called the 'Misty City', entirely surrounded by mountain peaks and waterfalls. A dramatic landscape perfect for morning excursions.",
            distance: "12 km",
            image: "experience_2.png"
        },
        {
            title: "Randenigala Dam",
            description: "A scenic drive to one of the largest reservoirs in the country, offering breathtaking views and opportunities for endemic wildlife spotting.",
            distance: "25 km",
            image: "experience_3.png"
        }
    ];

    const cards = experiences.map((exp, idx) => (
        <div
            key={idx}
            className="group relative overflow-hidden bg-white border border-sand-200 h-full"
        >
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-sand-200">
                <Image
                    src={`/images/${exp.image}`}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 33vw"
                />
            </div>
            <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-forest-700 font-sans text-xs tracking-wider uppercase mb-4">
                    <MapPin size={14} />
                    <span>{exp.distance}</span>
                </div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">{exp.title}</h3>
                <p className="text-sand-800/70 font-light leading-relaxed">
                    {exp.description}
                </p>
            </div>
        </div>
    ));

    return (
        <section id="experiences" className="py-32 bg-sand-100">
            <div className="container mx-auto px-6 sm:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest-900 mb-6 font-light">
                            Beyond <span className="italic">The Cove at Rikillagaskada</span>
                        </h2>
                        <p className="text-lg text-sand-800/80 font-light leading-relaxed">
                            While it's tempting to stay hidden away, the surrounding central highlands offer rich culture and untouched nature waiting to be explored.
                        </p>
                    </div>
                </div>

                {/* Mobile: full carousel with nav. Desktop: standard 3-col grid */}
                <div className="md:hidden">
                    <MobileCarousel slideWidthClass="w-[80%]" scheme="light">
                        {cards}
                    </MobileCarousel>
                </div>

                <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
                    {cards}
                </div>
            </div>
        </section>
    );
}
