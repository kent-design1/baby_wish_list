"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabase";

export interface RegistryState {
    claims: Record<string, string>;
    cash: string[];
}

export function useRegistry() {
    const [state, setState] = useState<RegistryState>({ claims: {}, cash: [] });
    const [hydrated, setHydrated] = useState(false);

    // Load all data on mount
    useEffect(() => {
        async function load() {
            const [{ data: claimsData }, { data: cashData }] = await Promise.all([
                supabase.from("claims").select("product_id, nickname"),
                supabase.from("cash_contributors").select("nickname"),
            ]);

            const claims: Record<string, string> = {};
            for (const row of claimsData ?? []) {
                claims[row.product_id] = row.nickname;
            }

            setState({
                claims,
                cash: (cashData ?? []).map((r) => r.nickname),
            });
            setHydrated(true);
        }

        load();

        // Real-time: claims table
        const claimsSub = supabase
            .channel("claims-channel")
            .on("postgres_changes", { event: "*", schema: "public", table: "claims" },
                (payload) => {
                    if (payload.eventType === "INSERT") {
                        const { product_id, nickname } = payload.new as { product_id: string; nickname: string };
                        setState((prev) => ({
                            ...prev,
                            claims: { ...prev.claims, [product_id]: nickname },
                        }));
                    }
                    if (payload.eventType === "DELETE") {
                        const { product_id } = payload.old as { product_id: string };
                        setState((prev) => {
                            const claims = { ...prev.claims };
                            delete claims[product_id];
                            return { ...prev, claims };
                        });
                    }
                }
            )
            .subscribe();

        // Real-time: cash table
        const cashSub = supabase
            .channel("cash-channel")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "cash_contributors" },
                (payload) => {
                    const { nickname } = payload.new as { nickname: string };
                    setState((prev) => ({
                        ...prev,
                        cash: [...prev.cash, nickname],
                    }));
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(claimsSub);
            supabase.removeChannel(cashSub);
        };
    }, []);

    const claimItem = useCallback(async (productId: string, nickname: string) => {
        await supabase.from("claims").upsert({ product_id: productId, nickname });
    }, []);

    const unclaimItem = useCallback(async (productId: string) => {
        await supabase.from("claims").delete().eq("product_id", productId);
    }, []);

    const addCash = useCallback(async (nickname: string) => {
        await supabase.from("cash_contributors").insert({ nickname });
    }, []);

    return { state, hydrated, claimItem, unclaimItem, addCash };
}