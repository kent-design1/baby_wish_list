"use client";

interface CashSectionProps {
  contributors: string[];
  onAdd: () => void;
}

export default function CashSection({ contributors, onAdd }: CashSectionProps) {
  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <div
        className="rounded-3xl p-10 text-center"
        style={{
          background: "linear-gradient(135deg, #fff5f0, #ffeef5)",
          border: "2px dashed var(--blush)",
        }}
      >
        <span className="mb-4 block text-5xl">💛</span>
        <h2 className="font-display mb-3 text-3xl font-semibold" style={{ color: "var(--brown)" }}>
          Give a Cash Gift
        </h2>
        <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--mid)" }}>
          Prefer to give cash instead? We&apos;d be so grateful! Add your name below
          and Latifa will make sure to thank you with the warmest hug. 🤍
        </p>

        {/* Contributors */}
        <div className="mb-6 flex min-h-8 flex-wrap justify-center gap-2">
          {contributors.length > 0 ? (
            contributors.map((name, i) => (
              <span
                key={i}
                className="rounded-full px-4 py-1.5 text-sm"
                style={{
                  background: "white",
                  border: "1.5px solid var(--petal)",
                  color: "var(--warm)",
                }}
              >
                💛 {name}
              </span>
            ))
          ) : (
            <span className="text-sm" style={{ color: "var(--mid)" }}>
              Be the first to add your name! 💛
            </span>
          )}
        </div>

        <button
          onClick={onAdd}
          className="rounded-2xl px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, var(--rose), #c4607a)",
            boxShadow: "0 4px 16px rgba(212,135,154,0.4)",
          }}
        >
          💌 Add My Name
        </button>
      </div>
    </div>
  );
}
