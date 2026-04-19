"use client";

import { useState, useEffect, useRef } from "react";
import { Product } from "@/lib/data";
import { X } from "lucide-react";

interface ClaimModalProps {
  product: Product | null;
  isCash: boolean;
  onConfirm: (nickname: string) => void;
  onClose: () => void;
}

export default function ClaimModal({ product, isCash, onConfirm, onClose }: ClaimModalProps) {
  const [nick, setNick] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isOpen = !!product || isCash;

  useEffect(() => {
    if (isOpen) {
      setNick("");
      setError(false);
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen, product, isCash]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  function handleConfirm() {
    const trimmed = nick.trim();
    if (!trimmed) { setError(true); inputRef.current?.focus(); return; }
    onConfirm(trimmed);
  }

  const title = isCash ? "💛 Cash Gift" : "Reserve This Gift 🎀";
  const desc = isCash
    ? "Thank you! Leave your name so Latifa knows who to thank."
    : product?.name ?? "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: "rgba(74,51,40,0.4)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="animate-pop-in relative w-full max-w-md rounded-3xl p-8 shadow-2xl"
        style={{ background: "var(--white)" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1.5 transition-all hover:opacity-70"
          style={{ color: "var(--mid)" }}
        >
          <X size={18} />
        </button>

        {/* Thumbnail for product claim */}
        {product?.img && !isCash && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.img}
            alt={product.name}
            className="mb-4 h-16 w-16 rounded-xl object-contain p-1"
            style={{ background: "linear-gradient(135deg,#fdf0ec,#f5ede8)" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        )}

        {isCash && <div className="mb-4 text-4xl">💛</div>}

        <h2 className="font-display mb-2 text-2xl font-semibold" style={{ color: "var(--brown)" }}>
          {title}
        </h2>
        <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--mid)" }}>
          {desc}
        </p>

        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--mid)" }}>
          Your Nickname or Name
        </label>
        <input
          ref={inputRef}
          type="text"
          value={nick}
          onChange={(e) => { setNick(e.target.value); setError(false); }}
          onKeyDown={(e) => { if (e.key === "Enter") handleConfirm(); }}
          placeholder="e.g. Auntie Sarah, The Smiths…"
          maxLength={40}
          className="mb-5 w-full rounded-xl px-4 py-3 text-base outline-none transition-all"
          style={{
            fontFamily: "Jost, sans-serif",
            color: "var(--brown)",
            background: "white",
            border: error ? "2px solid #e07070" : "2px solid var(--dust)",
          }}
          onFocus={(e) => { e.target.style.borderColor = "var(--rose)"; }}
          onBlur={(e) => { if (!error) e.target.style.borderColor = "var(--dust)"; }}
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="rounded-xl px-5 py-3 text-sm font-medium transition-all hover:opacity-80"
            style={{ background: "var(--dust)", color: "var(--mid)" }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 rounded-xl py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--warm), #b8694a)",
              boxShadow: "0 4px 14px rgba(196,122,90,0.35)",
            }}
          >
            {isCash ? "Add My Name 💛" : "Claim It! 🎁"}
          </button>
        </div>
      </div>
    </div>
  );
}
