import { siteConfig } from "@/lib/constants";

export default function StickyCTA() {
    return (
        <div className="fixed bottom-[5.5rem] md:bottom-6 right-4 md:right-6 z-[60] flex flex-col items-end gap-2 text-right">
            {/* Optional gentle hint tooltip */}
            <div className="bg-white text-forest-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg opacity-0 translate-y-2 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 pointer-events-none hidden md:block">
                Chat with us
            </div>

            <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello, I would like to inquire about booking a stay.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="WhatsApp Booking Inquiry"
            >
                {/* Ping animation effect behind the button */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping delay-700 w-full h-full duration-1000"></span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10"
                >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </a>
        </div>
    );
}
