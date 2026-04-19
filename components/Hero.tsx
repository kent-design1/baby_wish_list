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
      {/* Blobs */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full opacity-50 blur-[60px]" style={{ background: "#f2d9d9" }} />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full opacity-50 blur-[60px]" style={{ background: "#ddeeda" }} />
      <div className="pointer-events-none absolute right-[10%] top-6 h-44 w-44 rounded-full opacity-45 blur-[60px]" style={{ background: "#e8c49a" }} />

      <div className="relative">
        <span className="animate-float mb-4 block text-5xl">🌸</span>

        <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ color: "var(--brown)" }}>
          Welcome to{" "}
          <em className="not-italic" style={{ color: "var(--rose)" }}>
            Naya&apos;s
          </em>
          <br />
          Baby Shower Registry
        </h1>

        <p
          className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed"
          style={{ color: "var(--mid)" }}
        >
          Our little girl is arriving in July 2026! 🎀 Browse below, pick something
          you&apos;d love to give, claim it with your name — and we&apos;ll know exactly
          who to thank with the biggest hug. Or contribute cash. Every gesture means
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
                background: "rgba(255,255,255,0.75)",
                border: "1px solid var(--petal)",
              }}
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
