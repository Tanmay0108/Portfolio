"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="back-to-top fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none"
      style={{
        borderColor: "var(--line)",
        backgroundColor: "color-mix(in srgb, var(--surface) 90%, transparent)",
        backdropFilter: "blur(8px)",
        color: "var(--muted)",
      }}
    >
      <ArrowUp size={17} className="transition-colors hover:text-[var(--accent)]" />
    </button>
  );
}
