import { siteConfig } from "@/lib/constants";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

const navLinks = [
    { label: "Cabanas", href: "#cabanas" },
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Book Now", href: "#booking" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-forest-900 text-white border-t-2 border-sunrise-500/30">
            {/* Main Footer Content */}
            <div className="container mx-auto px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <p className="text-sunrise-400 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-4">
                            The Cove
                        </p>
                        <h3 className="text-2xl font-serif font-light text-white/90 leading-snug mb-6">
                            Rikillagaskada,<br />Sri Lanka
                        </h3>
                        <p className="text-white/50 font-light text-sm leading-relaxed max-w-xs">
                            A sanctuary of calm nestled in the misty highlands. Where stillness finds you.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-8">
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Instagram size={16} className="text-white/70" />
                            </a>
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Facebook size={16} className="text-white/70" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <p className="text-white/40 font-sans text-xs uppercase tracking-widest mb-6">
                            Explore
                        </p>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/60 hover:text-white font-light text-sm transition-colors duration-200 w-fit"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <p className="text-white/40 font-sans text-xs uppercase tracking-widest mb-6">
                            Contact
                        </p>
                        <div className="flex flex-col gap-5">
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="flex items-start gap-3 group"
                            >
                                <Mail size={15} className="text-sunrise-400 mt-0.5 flex-shrink-0" />
                                <span className="text-white/60 group-hover:text-white text-sm font-light transition-colors duration-200">
                                    {siteConfig.contact.email}
                                </span>
                            </a>
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="flex items-start gap-3 group"
                            >
                                <Phone size={15} className="text-sunrise-400 mt-0.5 flex-shrink-0" />
                                <span className="text-white/60 group-hover:text-white text-sm font-light transition-colors duration-200">
                                    {siteConfig.contact.phone}
                                </span>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin size={15} className="text-sunrise-400 mt-0.5 flex-shrink-0" />
                                <span className="text-white/60 text-sm font-light leading-relaxed">
                                    {siteConfig.contact.address}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs font-sans">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs font-sans">
                        Designed with care in Sri Lanka 🌿
                    </p>
                </div>
            </div>
        </footer>
    );
}
