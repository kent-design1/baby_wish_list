"use client";

interface HeroProps {
    total: number;
    claimed: number;
}

export default function Hero({ total, claimed }: HeroProps) {
    const available = total - claimed;

    return (
        <div
            className="relative overflow-hidden px-6 py-20 text-center"
            style={{ background: "linear-gradient(160deg, #fdf0ec 0%, #fce8ef 45%, #eef5eb 100%)" }}
        >
            {/* Animated blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="blob blob-4" />

            {/* Falling petals */}
            {[...Array(12)].map((_, i) => (
                <div key={i} className={`petal p${i + 1}`} />
            ))}

            {/* Sparkles */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className={`sparkle s${i + 1}`} />
            ))}

            {/* Pulse rings */}
            <div className="ring r1" /><div className="ring r2" /><div className="ring r3" />

            {/* Content */}
            <div className="relative z-10">
                <span className="animate-float mb-4 block text-5xl">🌸</span>

                <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ color: "var(--brown)" }}>
                    Welcome to{" "}
                    <em className="not-italic" style={{ color: "var(--rose)" }}>
                        Naya&apos;s
                    </em>
                    <br />
                    Baby Shower Registry
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed" style={{ color: "var(--mid)" }}>
                    Our little girl is arriving in late July or early August 2026! 🎀 Browse below,
                    pick something you&apos;d love to give, claim it with your name — and we&apos;ll
                    know exactly who to thank with the biggest hug. Or contribute cash. Every gesture
                    means the world to us.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[
                        { value: total, label: "Items" },
                        { value: claimed, label: "Claimed" },
                        { value: available, label: "Available" },
                    ].map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center rounded-full px-6 py-3 backdrop-blur-sm"
                            style={{ background: "rgba(255,255,255,0.75)", border: "1px solid var(--petal)" }}
                        >
                            <strong className="font-display text-3xl leading-none" style={{ color: "var(--warm)" }}>
                                {value}
                            </strong>
                            <span className="mt-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--mid)" }}>
                {label}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}