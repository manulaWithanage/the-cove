"use client";

import { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
    children: ReactNode[];
    /** Tailwind class for slide width on mobile (default: w-[85%]) */
    slideWidthClass?: string;
    /** Extra classes on the track wrapper */
    className?: string;
    /** Color scheme: 'dark' for light arrows on dark bg, 'light' for dark arrows on light bg */
    scheme?: "dark" | "light";
}

export default function MobileCarousel({
    children,
    slideWidthClass = "w-[85%]",
    className = "",
    scheme = "light",
}: MobileCarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);
    const count = children.length;

    const scrollToIndex = useCallback((idx: number) => {
        const track = trackRef.current;
        if (!track) return;
        const slide = track.children[idx] as HTMLElement;
        if (!slide) return;
        track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }, []);

    const prev = () => {
        const next = Math.max(current - 1, 0);
        setCurrent(next);
        scrollToIndex(next);
    };

    const next = () => {
        const n = Math.min(current + 1, count - 1);
        setCurrent(n);
        scrollToIndex(n);
    };

    // Keep current in sync when user manually drags / scrolls
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onScroll = () => {
            const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
            const idx = Math.round(track.scrollLeft / slideWidth);
            setCurrent(Math.max(0, Math.min(idx, count - 1)));
        };

        track.addEventListener("scroll", onScroll, { passive: true });
        return () => track.removeEventListener("scroll", onScroll);
    }, [count]);

    const isDark = scheme === "dark";

    const btnBase =
        "absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 backdrop-blur-sm";
    const btnDark =
        "bg-white/10 border border-white/20 text-white hover:bg-white/20";
    const btnLight =
        "bg-forest-900/10 border border-forest-900/10 text-forest-900 hover:bg-forest-900/20";

    const dotBase = "rounded-full transition-all duration-300";
    const dotActive = isDark ? "bg-sunrise-400 w-5 h-1.5" : "bg-forest-900 w-5 h-1.5";
    const dotInactive = isDark ? "bg-white/30 w-1.5 h-1.5" : "bg-forest-900/20 w-1.5 h-1.5";

    return (
        <div className={`relative pb-4 md:pb-0 ${className}`}>
            {/* Track */}
            <div
                ref={trackRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 -mx-4 px-4"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {children.map((child, idx) => (
                    <div
                        key={idx}
                        className={`flex-none ${slideWidthClass} snap-center`}
                    >
                        {child}
                    </div>
                ))}
                {/* Trailing spacer so last card isn't clipped */}
                <div className="flex-none w-4" aria-hidden="true" />
            </div>

            {/* Prev / Next arrows — only show when there's somewhere to go */}
            {count > 1 && (
                <>
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        aria-label="Previous"
                        className={`${btnBase} -left-3 ${isDark ? btnDark : btnLight} disabled:opacity-0 disabled:pointer-events-none`}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={next}
                        disabled={current === count - 1}
                        aria-label="Next"
                        className={`${btnBase} -right-3 ${isDark ? btnDark : btnLight} disabled:opacity-0 disabled:pointer-events-none`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </>
            )}

            {/* Dot indicators */}
            {count > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    {Array.from({ length: count }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setCurrent(idx); scrollToIndex(idx); }}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`${dotBase} ${idx === current ? dotActive : dotInactive}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
