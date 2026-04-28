"use client";

import {qrcode} from "@/public";
import Image from "next/image";

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
                    A Little Goes a Long Way
                </h2>

                <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--mid)" }}>
                    Just knowing you&apos;re here celebrating little <em style={{ color: "var(--rose)" }}>Naya</em> with
                    us already means everything. 🥹 Your love and presence is the greatest gift of all.
                </p>

                {/* Three options */}
                <div className="mb-6 space-y-3 text-left">

                    {/* Option 1 */}
                    <div
                        className="rounded-2xl p-4"
                        style={{ background: "rgba(255,255,255,0.75)", border: "1px solid var(--petal)" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--rose)" }}>
                            🛍️ Option 1 — Buy & Ship Directly
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--mid)" }}>
                            Pick any item from the list, buy it on Amazon.de and ship it directly
                            to us in Switzerland. Simple, no middleman — and we&apos;ll know exactly
                            who sent it! 🎁
                        </p>
                    </div>

                    {/* Option 2 */}
                    <div
                        className="rounded-2xl p-4"
                        style={{ background: "rgba(255,255,255,0.75)", border: "1px solid var(--petal)" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--rose)" }}>
                            💸 Option 2 — Send Cash & We'll Handle It
                        </p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--mid)" }}>
                            Prefer to contribute cash? We&apos;ll order everything together in bulk
                            to save on shipping — every franc goes straight to Naya. 🌸
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span>💸</span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "var(--mid)" }}>Twint</p>
                                    <p className="text-sm font-medium" style={{ color: "var(--brown)" }}>+41 XX XXX XX XX</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>🏦</span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "var(--mid)" }}>Bank Transfer</p>
                                    <p className="text-sm font-medium" style={{ color: "var(--brown)" }}>IBAN: CH00 0000 0000 0000 0000 0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Option 3 - QR */}
                    <div
                        className="rounded-2xl p-4 text-center"
                        style={{ background: "rgba(255,255,255,0.75)", border: "1px solid var(--petal)" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--rose)" }}>
                            📲 Scan to Pay
                        </p>
                        <div
                            className="mx-auto w-36 h-36 rounded-2xl overflow-hidden flex items-center justify-center"
                            style={{ background: "white", border: "2px solid var(--petal)" }}
                        >
                            <Image
                                src={qrcode}
                                alt="Payment QR Code"
                                className="w-full h-full object-contain p-2"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                    (e.target as HTMLImageElement).parentElement!.innerHTML =
                                        '<p style="font-size:0.7rem;color:#c0a898;padding:1rem;text-align:center">Add QR code to<br/>public/images/qr-code.png</p>';
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Contributors */}
                <p className="text-xs mb-3" style={{ color: "var(--mid)" }}>
                    Add your name so we know who to squeeze the tightest 💛
                </p>

                <div className="mb-5 flex min-h-8 flex-wrap justify-center gap-2">
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