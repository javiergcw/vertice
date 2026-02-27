"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    description: string;
    image: string;
};

type TeamCarouselProps = {
    members: TeamMember[];
};

const AUTOPLAY_INTERVAL = 6000;
const DESKTOP_PAGE_SIZE = 3;

function MemberCard({ member }: { member: TeamMember }) {
    return (
        <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {/* Photo */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                    <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                        {member.role}
                    </span>
                </div>
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {member.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                </p>
            </div>
        </article>
    );
}

export function TeamCarousel({ members }: TeamCarouselProps) {
    // Mobile: index por miembro
    const [mobileIndex, setMobileIndex] = useState(0);
    // Desktop: índice de página (grupo de 3)
    const [desktopPage, setDesktopPage] = useState(0);

    const timerMobileRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const timerDesktopRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const totalDesktopPages = Math.ceil(members.length / DESKTOP_PAGE_SIZE);

    // ── Mobile autoplay ──
    const resetMobileTimer = useCallback(() => {
        if (timerMobileRef.current) clearTimeout(timerMobileRef.current);
        timerMobileRef.current = setTimeout(() => {
            setMobileIndex((c) => (c + 1) % members.length);
        }, AUTOPLAY_INTERVAL);
    }, [members.length]);

    useEffect(() => {
        resetMobileTimer();
        return () => { if (timerMobileRef.current) clearTimeout(timerMobileRef.current); };
    }, [resetMobileTimer, mobileIndex]);

    const mobilePrev = useCallback(() => {
        setMobileIndex((c) => (c - 1 + members.length) % members.length);
    }, [members.length]);

    const mobileNext = useCallback(() => {
        setMobileIndex((c) => (c + 1) % members.length);
    }, [members.length]);

    // ── Desktop autoplay (solo si hay más de 1 página) ──
    const resetDesktopTimer = useCallback(() => {
        if (timerDesktopRef.current) clearTimeout(timerDesktopRef.current);
        if (totalDesktopPages <= 1) return;
        timerDesktopRef.current = setTimeout(() => {
            setDesktopPage((p) => (p + 1) % totalDesktopPages);
        }, AUTOPLAY_INTERVAL);
    }, [totalDesktopPages]);

    useEffect(() => {
        resetDesktopTimer();
        return () => { if (timerDesktopRef.current) clearTimeout(timerDesktopRef.current); };
    }, [resetDesktopTimer, desktopPage]);

    const desktopPrev = useCallback(() => {
        setDesktopPage((p) => (p - 1 + totalDesktopPages) % totalDesktopPages);
    }, [totalDesktopPages]);

    const desktopNext = useCallback(() => {
        setDesktopPage((p) => (p + 1) % totalDesktopPages);
    }, [totalDesktopPages]);

    const visibleDesktop = members.slice(
        desktopPage * DESKTOP_PAGE_SIZE,
        desktopPage * DESKTOP_PAGE_SIZE + DESKTOP_PAGE_SIZE
    );

    return (
        <>
            {/* ══ DESKTOP ══ */}
            <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-6">
                    {visibleDesktop.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>

                {/* Controls — solo si hay más de 1 página */}
                {totalDesktopPages > 1 && (
                    <div className="mt-6 flex items-center justify-between px-1">
                        {/* Dots por página */}
                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalDesktopPages }).map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    aria-label={`Página ${i + 1}`}
                                    onClick={() => { setDesktopPage(i); resetDesktopTimer(); }}
                                    className={`rounded-full transition-all duration-300 ${i === desktopPage
                                            ? "h-2.5 w-8 bg-accent"
                                            : "h-2.5 w-2.5 bg-border hover:bg-accent/40"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => { desktopPrev(); resetDesktopTimer(); }}
                                aria-label="Anterior"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => { desktopNext(); resetDesktopTimer(); }}
                                aria-label="Siguiente"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* ══ MOBILE ══ */}
            <div className="md:hidden">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(calc(-${mobileIndex} * 100%))` }}
                    >
                        {members.map((member) => (
                            <div key={member.id} className="w-full shrink-0">
                                <MemberCard member={member} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots + arrows */}
                <div className="mt-6 flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                        {members.map((m, i) => (
                            <button
                                key={m.id}
                                type="button"
                                aria-label={`Ver ${m.name}`}
                                onClick={() => { setMobileIndex(i); }}
                                className={`rounded-full transition-all duration-300 ${i === mobileIndex
                                        ? "h-2.5 w-8 bg-accent"
                                        : "h-2.5 w-2.5 bg-border hover:bg-accent/40"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button" onClick={mobilePrev} aria-label="Anterior"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button type="button" onClick={mobileNext} aria-label="Siguiente"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
