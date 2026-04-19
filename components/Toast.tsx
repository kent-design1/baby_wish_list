"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onDone: () => void;
}

export default function Toast({ message, onDone }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); setTimeout(onDone, 300); }, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className={`animate-slide-up fixed bottom-7 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ background: "var(--brown)", whiteSpace: "nowrap" }}
    >
      {message}
    </div>
  );
}
