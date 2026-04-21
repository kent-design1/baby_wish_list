"use client";

import { useState, useCallback } from "react";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/data";
import { useRegistry } from "@/lib/useRegistry";
import Hero from "@/components/Hero";
import TabBar from "@/components/TabBar";
import ProductCard from "@/components/ProductCard";
import ClaimModal from "@/components/ClaimModal";
import CashSection from "@/components/CashSection";
import Toast from "@/components/Toast";

export default function RegistryPage() {
  const { state, hydrated, claimItem, unclaimItem, addCash } = useRegistry();
  const [activeTab, setActiveTab] = useState("all");
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);
  const [cashModalOpen, setCashModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const totalClaimed = Object.keys(state.claims).length;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  function handleClaim(product: Product) {
    setPendingProduct(product);
  }

  function handleUnclaim(productId: string) {
    unclaimItem(productId);
    showToast("↩ Item un-claimed successfully");
  }

  function handleModalConfirm(nickname: string) {
    if (cashModalOpen) {
      addCash(nickname);
      setCashModalOpen(false);
      showToast(`Thank you, ${nickname}! 💛 So generous!`);
    } else if (pendingProduct) {
      claimItem(pendingProduct.id, nickname);
      setPendingProduct(null);
      showToast(`🎀 Reserved by ${nickname}! Thank you!`);
    }
  }

  function handleModalClose() {
    setPendingProduct(null);
    setCashModalOpen(false);
  }

  // Determine which categories / products to show
  const visibleCats =
    activeTab === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeTab);

  const isCashTab = activeTab === "cash";

  return (
    <>
      <Hero total={PRODUCTS.length} claimed={totalClaimed} />
      <TabBar active={activeTab} onChange={setActiveTab} />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8">
        {isCashTab ? (
          <CashSection
            contributors={state.cash}
            onAdd={() => setCashModalOpen(true)}
          />
        ) : (
          visibleCats.map((cat) => {
            const items = PRODUCTS.filter((p) => p.cat === cat.id);
            if (!items.length) return null;
            return (
              <section key={cat.id} className="mb-12">
                {/* Section heading */}
                <div className="mb-5 flex items-center gap-3">
                  <h2
                    className="font-display text-2xl font-semibold"
                    style={{ color: "var(--brown)" }}
                  >
                    {cat.emoji} {cat.label}
                  </h2>
                  <div className="h-px flex-1" style={{ background: "var(--dust)" }} />
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      claimedBy={hydrated ? state.claims[product.id] : undefined}
                      onClaim={handleClaim}
                      onUnclaim={handleUnclaim}
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      <footer
        className="border-t pb-8 pt-6 text-center font-display italic tracking-wide"
        style={{ borderColor: "var(--dust)", color: "#c0a898", fontSize: "0.95rem" }}
      >
        Made with love for Latifa, Kent &amp; their little girl Naya arriving late July or early August 2026 🌸
      </footer>

      <ClaimModal
        product={pendingProduct}
        isCash={cashModalOpen}
        onConfirm={handleModalConfirm}
        onClose={handleModalClose}
      />

      {toast && (
        <Toast message={toast} onDone={() => setToast(null)} />
      )}
    </>
  );
}
