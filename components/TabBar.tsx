"use client";

import { CATEGORIES } from "@/lib/data";

interface TabBarProps {
  active: string;
  onChange: (tab: string) => void;
}

const ALL_TABS = [
  { id: "all", label: "All Items", emoji: "🎁" },
  ...CATEGORIES,
  { id: "cash", label: "Cash Gift", emoji: "💛" },
];

export default function TabBar({ active, onChange }: TabBarProps) {
  return (
    <div
      className="sticky top-0 z-50 shadow-sm"
      style={{ background: "var(--white)", borderBottom: "1px solid var(--dust)" }}
    >
      <div className="tabs-scroll mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pt-4">
        {ALL_TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex-shrink-0 whitespace-nowrap px-4 pb-3 pt-2 text-sm font-medium tracking-wide transition-all duration-200"
              style={{
                fontFamily: "Jost, sans-serif",
                color: isActive ? "var(--warm)" : "var(--mid)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: isActive ? "3px solid var(--warm)" : "3px solid transparent",
                background: "none",
                cursor: "pointer",
              }}
            >
              {tab.emoji} {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
