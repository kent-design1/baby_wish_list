"use client";

import Image from "next/image";
import { useState } from "react";
import { Product, CATEGORIES, REGISTRY_URL } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  claimedBy: string | undefined;
  onClaim: (product: Product) => void;
  onUnclaim: (productId: string) => void;
  style?: React.CSSProperties;
}

export default function ProductCard({
  product,
  claimedBy,
  onClaim,
  onUnclaim,
  style,
}: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const isClaimed = !!claimedBy;
  const cat = CATEGORIES.find((c) => c.id === product.cat);
  const catEmoji = cat?.emoji ?? "🎁";
  const catLabel = cat?.label ?? product.cat;

  return (
    <div
      className={`animate-fade-up flex flex-col overflow-hidden rounded-2xl transition-all duration-200 ${
        isClaimed ? "opacity-85" : "hover:-translate-y-1 hover:shadow-xl"
      }`}
      style={{
        background: isClaimed ? "#f8fdf7" : "var(--white)",
        boxShadow: "0 2px 18px rgba(74,51,40,0.07)",
        border: isClaimed ? "1.5px solid var(--sage)" : "1.5px solid transparent",
        ...style,
      }}
    >
      {/* Image */}
      <div
        className="relative h-48 w-full overflow-hidden"
        style={{ background: "#ffffff" }}
      >
        {product.img && !imgError ? (
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-300 hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl">
            {catEmoji}
          </div>
        )}

        {/* Status badge */}
        <span
          className="absolute right-2.5 top-2.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
          style={
            isClaimed
              ? { background: "var(--sage-lt)", color: "#3d7a3d", border: "1px solid var(--sage)" }
              : { background: "rgba(255,255,255,0.92)", color: "var(--warm)", border: "1px solid var(--caramel)" }
          }
        >
          {isClaimed ? "✓ Reserved" : "Available"}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blush)" }}>
          {catLabel}
        </p>

        <p className="font-display mb-3 flex-1 text-base font-semibold leading-snug" style={{ color: "var(--brown)" }}>
          {product.name}
        </p>

        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-xl font-semibold" style={{ color: "var(--warm)" }}>
            {product.price ?? "See Amazon"}
          </span>
          <span className="text-sm" style={{ color: "var(--mid)" }}>
            <span style={{ color: "#e8a840" }}>★</span> {product.rating}
          </span>
        </div>

        {isClaimed && (
          <div
            className="mb-3 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm"
            style={{ background: "var(--sage-lt)", color: "#3a6b3a" }}
          >
            🎀 Being bought by <strong className="ml-1">{claimedBy}</strong>
          </div>
        )}

        {/* Action buttons */}
        {isClaimed ? (
          <div className="flex gap-2">
            <button
              disabled
              className="flex-1 cursor-default rounded-xl py-2.5 text-sm font-semibold"
              style={{ background: "var(--dust)", color: "var(--mid)" }}
            >
              🎁 Reserved
            </button>
            <button
              onClick={() => onUnclaim(product.id)}
              className="rounded-xl px-3 py-2.5 text-xs font-medium transition-all hover:opacity-80"
              style={{ background: "var(--petal)", color: "var(--rose)" }}
              title="Un-claim this item"
            >
              ↩ Undo
            </button>
          </div>
        ) : (
          <button
            onClick={() => onClaim(product)}
            className="w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--warm), #b8694a)",
              boxShadow: "0 4px 14px rgba(196,122,90,0.35)",
            }}
          >
            + I&apos;ll buy this!
          </button>
        )}

        <a
          href={REGISTRY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-center text-xs opacity-60 transition-opacity hover:opacity-100"
          style={{ color: "var(--mid)" }}
        >
          View on Amazon ↗
        </a>
      </div>
    </div>
  );
}
