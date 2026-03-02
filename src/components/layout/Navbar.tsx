"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { label: "Stay", href: "#stay" },
        { label: "Gallery", href: "#gallery" },
        { label: "Experiences", href: "#experiences" },
        { label: "Location & FAQ", href: "#location" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b shadow-sm text-forest-900" : "bg-transparent text-white"
                }`}
        >
            <nav className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
                <a href="#" className={`flex flex-col font-serif leading-none transition-colors group ${scrolled ? "text-forest-900" : "text-white"}`}>
                    <span className={`text-2xl md:text-3xl tracking-wide font-medium transition-colors ${scrolled ? "group-hover:text-forest-700" : "group-hover:text-sand-100"}`}>The Cove</span>
                    <span className={`text-[0.7rem] md:text-xs tracking-[0.2em] md:tracking-[0.25em] gap-2 uppercase font-sans font-semibold mt-1 opacity-90 ${scrolled ? "text-forest-600" : "text-sunrise-500"}`}>
                        <span className="opacity-70 lowercase italic mr-1.5 text-[0.6rem] md:text-[0.65rem] font-medium">at</span>
                        Rikillagaskada
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${scrolled ? "text-sand-600 hover:text-forest-700" : "opacity-90 hover:opacity-100 hover:text-sunrise-500"}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 ${scrolled ? "bg-forest-700 text-white hover:bg-forest-800 shadow-md" : "bg-white/10 border border-white/20 hover:bg-white/20 text-white"}`}
                    >
                        Check Availability
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 -mr-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Drawer Slide-in */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMenu}
            />
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-serif text-xl text-forest-900">Menu</span>
                    <button onClick={toggleMenu} className="p-2 text-sand-800">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col p-4 gap-6 mt-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium text-sand-800 hover:text-forest-700"
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-8 border-t pt-8">
                        <a
                            href="#booking"
                            className="w-full inline-flex justify-center bg-forest-700 text-white px-5 py-3 rounded-full text-base font-medium"
                            onClick={toggleMenu}
                        >
                            Check Availability
                        </a>
                    </div>
                </div>
            </div>
        </header >
    );
}
