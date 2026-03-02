"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";
import { CalendarDays, Users, Coffee, CheckCircle, ArrowRight } from "lucide-react";

const includes = [
    { icon: CalendarDays, text: "Flexible check-in from 2:00 PM" },
    { icon: Coffee, text: "Daily complimentary breakfast" },
    { icon: Users, text: "Personalised guest experience" },
];

export default function ContactForm() {
    const [state, setState] = useState({ success: false, message: "" });
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        setState({ success: false, message: "" });

        const formData = new FormData(e.currentTarget);

        // Honeypot check
        if (formData.get("bot_field")) {
            setState({ success: true, message: "Thank you for your inquiry." });
            setIsPending(false);
            return;
        }

        const name = formData.get("name");
        const phone = formData.get("phone");
        const dates = formData.get("dates");
        const guests = formData.get("guests");
        const message = formData.get("message");

        // Basic Client-side validation
        if (!name || !phone || !dates || !guests) {
            setState({ success: false, message: "Please fill in all required fields." });
            setIsPending(false);
            return;
        }

        const data = { name, phone, dates, guests, message };

        // TODO: Integrate email provider API here (e.g., Resend, SendGrid) replacing this simulate
        console.log("--- New Booking Inquiry ---");
        console.log(JSON.stringify(data, null, 2));

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        setState({
            success: true,
            message: "Thank you! We have received your inquiry and will contact you shortly via WhatsApp or Phone."
        });
        setIsPending(false);
    }

    return (
        <section id="booking" className="py-24 bg-sand-100">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info Side */}
                    <div className="lg:sticky lg:top-32">
                        <p className="text-sunrise-600 font-sans tracking-[0.2em] text-xs uppercase font-semibold mb-6">
                            Make A Reservation
                        </p>
                        <h2 className="text-5xl md:text-6xl font-serif font-light text-forest-900 leading-tight mb-6">
                            Begin Your <br />
                            <span className="italic text-forest-800/70">Escape</span>
                        </h2>

                        {/* Gold divider */}
                        <div className="w-12 h-px bg-sunrise-500 mb-8" />

                        <p className="text-sand-800/60 font-light text-base leading-relaxed max-w-sm mb-12">
                            Send us your desired dates and preferences. We&apos;ll personally confirm availability and tailor your stay within 24 hours.
                        </p>

                        {/* What's Included */}
                        <div>
                            <p className="text-sand-800/40 font-sans text-xs uppercase tracking-widest mb-5">
                                What&apos;s included
                            </p>
                            <div className="flex flex-col gap-5">
                                {includes.map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-4">
                                        <div className="w-9 h-9 rounded-full bg-forest-900/5 border border-forest-900/10 flex items-center justify-center flex-shrink-0">
                                            <Icon size={15} className="text-forest-700" />
                                        </div>
                                        <span className="font-sans text-sm font-light text-sand-800/70">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Side */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-sand-200/60 px-8 md:px-12 py-12">
                        {state.success && state.message ? (
                            <div className="flex flex-col items-start gap-5 min-h-[400px] justify-center">
                                <div className="w-14 h-14 rounded-full bg-forest-900/5 border border-forest-900/10 flex items-center justify-center">
                                    <CheckCircle size={28} className="text-forest-700" />
                                </div>
                                <h3 className="text-3xl font-serif text-forest-900">Inquiry Received</h3>
                                <p className="text-sand-800/60 font-light leading-relaxed text-sm max-w-sm">{state.message}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-2 flex items-center gap-2 text-sm font-sans tracking-wider uppercase font-semibold text-forest-700 hover:text-forest-900 transition-colors"
                                >
                                    Send Another <ArrowRight size={14} />
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                {/* Honeypot */}
                                <div aria-hidden="true" className="hidden">
                                    <input type="text" name="bot_field" tabIndex={-1} autoComplete="off" />
                                </div>

                                {state.message && !state.success && (
                                    <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">
                                        {state.message}
                                    </div>
                                )}

                                {/* Name & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-xs font-sans tracking-[0.12em] uppercase font-semibold text-sand-500">Full Name *</label>
                                        <input
                                            type="text" id="name" name="name" required
                                            className="w-full bg-transparent border-b border-sand-300 focus:border-forest-700 py-3 text-forest-900 placeholder:text-sand-500 outline-none transition-colors font-light"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-xs font-sans tracking-[0.12em] uppercase font-semibold text-sand-500">WhatsApp / Phone *</label>
                                        <input
                                            type="tel" id="phone" name="phone" required
                                            className="w-full bg-transparent border-b border-sand-300 focus:border-forest-700 py-3 text-forest-900 placeholder:text-sand-400 outline-none transition-colors font-light"
                                            placeholder="+94 77 XXXXXXX"
                                        />
                                    </div>
                                </div>

                                {/* Dates & Guests */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="dates" className="text-xs font-sans tracking-[0.12em] uppercase font-semibold text-sand-500">Desired Dates *</label>
                                        <input
                                            type="text" id="dates" name="dates" required
                                            className="w-full bg-transparent border-b border-sand-300 focus:border-forest-700 py-3 text-forest-900 placeholder:text-sand-400 outline-none transition-colors font-light"
                                            placeholder="Oct 12 – Oct 15"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="guests" className="text-xs font-sans tracking-[0.12em] uppercase font-semibold text-sand-500">Guests *</label>
                                        <select
                                            id="guests" name="guests" required
                                            className="w-full bg-transparent border-b border-sand-300 focus:border-forest-700 py-3 text-forest-900 outline-none transition-colors font-light appearance-none cursor-pointer"
                                        >
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4+">4+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-xs font-sans tracking-[0.12em] uppercase font-semibold text-sand-500">Special Requests</label>
                                    <textarea
                                        id="message" name="message" rows={3}
                                        className="w-full bg-transparent border-b border-sand-300 focus:border-forest-700 py-3 text-forest-900 placeholder:text-sand-500 outline-none transition-colors font-light resize-none"
                                        placeholder="Dietary needs, special occasions, excursion preferences…"
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex flex-col gap-4 pt-2">
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full bg-forest-900 hover:bg-forest-800 text-white py-5 font-sans tracking-[0.15em] uppercase text-xs font-semibold transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-sm"
                                    >
                                        {isPending ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending…
                                            </>
                                        ) : "Send Inquiry"}
                                    </button>
                                    <p className="text-xs text-sand-800/40 font-sans text-center">
                                        We&apos;ll respond personally within 24 hours.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
