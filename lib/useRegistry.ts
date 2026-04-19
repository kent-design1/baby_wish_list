"use client";

import { useState, useEffect, useCallback } from "react";

export interface RegistryState {
  claims: Record<string, string>; // productId -> nickname
  cash: string[];                 // list of cash contributor names
}

const KEY = "registry_july2026_v1";

function loadState(): RegistryState {
  if (typeof window === "undefined") return { claims: {}, cash: [] };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { claims: {}, cash: [] };
  } catch {
    return { claims: {}, cash: [] };
  }
}

function saveState(s: RegistryState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

export function useRegistry() {
  const [state, setState] = useState<RegistryState>({ claims: {}, cash: [] });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  const claimItem = useCallback((productId: string, nickname: string) => {
    setState((prev) => {
      const next = { ...prev, claims: { ...prev.claims, [productId]: nickname } };
      saveState(next);
      return next;
    });
  }, []);

  const unclaimItem = useCallback((productId: string) => {
    setState((prev) => {
      const claims = { ...prev.claims };
      delete claims[productId];
      const next = { ...prev, claims };
      saveState(next);
      return next;
    });
  }, []);

  const addCash = useCallback((nickname: string) => {
    setState((prev) => {
      const next = { ...prev, cash: [...prev.cash, nickname] };
      saveState(next);
      return next;
    });
  }, []);

  return { state, hydrated, claimItem, unclaimItem, addCash };
}
