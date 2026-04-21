"use client";

import PlasmaWave from "./PlasmaWave";

interface HeroProps {
    total: number;
    claimed: number;
}

export default function Hero({ total, claimed }: HeroProps) {
    const available = total - claimed;

    return (
        <div className="relative overflow-hidden px-6 py-20 text-center bg-[#0d0a10]">

            {/* 👇 PlasmaWave as full background */}
            <PlasmaWave
                colors={["#f2a8b8", "#e8c49a"]}  // blush pink + caramel — matches your palette
                speed1={0.04}
                speed2={0.03}
                bend1={0.8}
                bend2={0.4}
                focalLength={0.9}
                dir2={-1}
            />

            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-black/50" />

            {/* All your existing content — just add relative + z-10 */}
            <div className="relative z-10">
                <span className="animate-float mb-4 block text-5xl">🌸</span>

                <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl text-white">
                    Welcome to{" "}
                    <em className="not-italic" style={{ color: "#f9c8d4" }}>
                        Naya&apos;s
                    </em>
                    <br />
                    Baby Shower Registry
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-base font-bold leading-relaxed text-white/75 shadow-2xl ">
                    Our little girl is arriving in late July or Early August 2026! 🎀 Browse below, pick something
                    you&apos;d love to give, claim it with your name, and we&apos;ll know exactly
                    who to thank with the biggest hug. Or contribute cash thus, as you wish. Every gesture means
                    the world to us.
                </p>

                {/* Stats */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[
                        { value: total, label: "Items" },
                        { value: claimed, label: "Claimed" },
                        { value: available, label: "Available" },
                    ].map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center rounded-full px-6 py-3 backdrop-blur-sm"
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.3)",
                            }}
                        >
                            <strong className="font-display text-3xl leading-none text-white">
                                {value}
                            </strong>
                            <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                {label}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}