"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";
import { Plus, Minus, MapPin, Navigation } from "lucide-react";

export default function LocationFAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        { q: "What are the check-in and check-out times?", a: "Check-in is from 2:00 PM, and check-out is until 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability." },
        { q: "Are meals included in the stay?", a: "Yes, a complimentary daily breakfast is included. We also offer a curated all-day dining menu featuring local and international cuisine." },
        { q: "How do I get to The Cove at Rikillagaskada?", a: "We are located approximately 1.5 hours from Kandy. We can arrange private, comfortable transfers from Kandy station or Colombo airport for an additional fee." },
        { q: "Is the road accessible for standard cars?", a: "Yes, the main approach is fully paved. The final 500 meters is a private estate road, maintained and suitable for all standard vehicles." },
        { q: "Are pets allowed?", a: "To ensure a tranquil environment for all our guests and to protect the local wildlife, we unfortunately do not accommodate pets." },
        { q: "What is your cancellation policy?", a: "Cancellations made 14 days before arrival are fully refunded. Within 14 days, a 50% charge applies. No-shows will be charged in full." }
    ];

    return (
        <section id="location" className="pt-32 pb-16 bg-white selection:bg-sand-100">
            <div className="container mx-auto px-6 sm:px-12 max-w-7xl">

                <div className="mb-16 md:mb-24 text-left md:text-center max-w-2xl md:mx-auto">
                    <p className="text-forest-700 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-4 md:mb-6">
                        Information
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-serif text-sand-900 leading-tight font-light">
                        Location & <span className="italic text-forest-800">Inquiries</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Location Column */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="sticky top-32">
                            <h3 className="text-2xl font-serif text-sand-900 mb-6">Getting Here</h3>
                            <p className="text-sand-800/80 mb-10 leading-relaxed font-light text-lg">
                                Nestled in the serene hills of {siteConfig.contact.address}, {siteConfig.name} offers a secluded escape that remains easily accessible.
                            </p>

                            {/* Refined Map Placeholder */}
                            <div className="w-full aspect-square sm:aspect-video lg:aspect-square bg-sand-50 overflow-hidden relative flex flex-col items-center justify-center mb-8 border border-sand-200 p-8 text-center group">
                                <MapPin size={32} strokeWidth={1.5} className="text-forest-700 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                <span className="text-sand-900 font-serif text-xl mb-2">View on Map</span>
                                <span className="text-sand-500 font-sans text-xs tracking-widest uppercase">Integration Pending</span>
                            </div>

                            <a
                                href="#"
                                className="group flex items-center justify-between w-full border-b border-sand-200 pb-4 text-sm font-sans tracking-[0.1em] uppercase hover:text-forest-700 transition-colors"
                            >
                                <span className="font-semibold text-sand-900 group-hover:text-forest-800 transition-colors">Get Directions</span>
                                <Navigation size={16} className="text-sand-400 group-hover:text-forest-700 transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* FAQ Column */}
                    <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
                        <h3 className="text-2xl font-serif text-sand-900 mb-8 border-b border-sand-200 pb-6">Frequently Asked Questions</h3>

                        <div className="flex flex-col">
                            {faqs.map((faq, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="border-b border-sand-200 transition-all"
                                    >
                                        <button
                                            className="w-full py-6 flex items-start justify-between text-left focus:outline-none group"
                                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        >
                                            <span className={`font-serif text-xl md:text-2xl pr-8 transition-colors ${isOpen ? "text-forest-800" : "text-sand-900 group-hover:text-forest-700"}`}>
                                                {faq.q}
                                            </span>
                                            <div className="text-sand-400 mt-1 flex-shrink-0 group-hover:text-forest-700 transition-colors">
                                                {isOpen ? <Minus size={20} className="text-forest-700" /> : <Plus size={20} />}
                                            </div>
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <p className="text-sand-800/80 font-light leading-relaxed pb-8 pr-12 text-lg">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
