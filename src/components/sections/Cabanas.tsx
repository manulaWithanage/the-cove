import Image from "next/image";
import { Users, Wifi, User, Coffee } from "lucide-react";

export default function Cabanas() {
  const cabanas = [
    {
      id: "sunrise",
      name: "Sunrise Cabana",
      description: "Perched on the eastern edge of the estate, wake up to panoramic views of the valley painted in morning light. Features a King-sized bed, premium linens, and a wraparound hardwood deck.",
      capacity: 2,
      price: "$120 / night",
      amenities: ["King Bed", "Rain Shower", "Private Deck", "Breakfast Included"],
      image: "cabana_ext.png"
    },
    {
      id: "canopy",
      name: "The Canopy Suite",
      description: "Our largest accommodation, nestled within the forest canopy. Perfect for small families or couples seeking extra space. Includes a separate lounging area and a semi-outdoor stone bath.",
      capacity: 4,
      price: "$180 / night",
      amenities: ["Queen Beds", "Stone Bath", "Lounge Area", "Forest View"],
      image: "cabana_int.png"
    }
  ];

  return (
    <section id="stay" className="py-32 bg-white selection:bg-sand-100">
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl">

        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-start gap-8 md:gap-16 lg:gap-24 border-b border-sand-200/50 pb-12">
          <div className="max-w-xl md:min-w-[400px]">
            <p className="text-forest-700 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-6">
              The Collection
            </p>
            <h2 className="text-5xl lg:text-6xl font-serif text-sand-900 leading-tight font-light">
              Your Alpine <span className="italic text-forest-800">Retreat</span>
            </h2>
          </div>
          <p className="text-lg text-sand-800/70 font-light max-w-md leading-relaxed">
            Intentionally designed spaces that frame the landscape and invite the outside in.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {cabanas.map((cabana, idx) => (
            <div
              key={cabana.id}
              className={`flex gap-12 lg:gap-24 items-center flex-col-reverse lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* Text Content */}
              <div className="w-full lg:w-5/12 flex col flex-col">
                <div className="flex items-center gap-4 mb-6 text-sand-500 font-sans text-sm tracking-wider uppercase">
                  <span>No. 0{idx + 1}</span>
                  <div className="h-[1px] w-12 bg-sand-200"></div>
                </div>

                <h3 className="text-4xl lg:text-5xl font-serif text-sand-900 mb-6">{cabana.name}</h3>

                <p className="text-sand-800/80 leading-relaxed font-light mb-8 text-lg">
                  {cabana.description}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12 py-8 border-y border-sand-100">
                  {cabana.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-sand-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-sunrise-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-sm text-sand-700 font-medium font-sans">
                    <Users size={16} className="text-forest-700" />
                    <span>Up to {cabana.capacity} guests</span>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-start gap-6 md:gap-12">
                  <span className="text-2xl font-serif text-sand-900">{cabana.price}</span>
                  <a
                    href="#booking"
                    className="group flex items-center gap-4 text-sm font-sans tracking-[0.15em] uppercase font-bold text-forest-900 hover:text-forest-700 transition-colors"
                  >
                    Inquire
                    <div className="w-8 h-[1px] bg-forest-900 group-hover:w-12 transition-all duration-300"></div>
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-7/12 relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden group bg-sand-100">
                <Image
                  src={`/images/${cabana.image}`}
                  alt={cabana.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
