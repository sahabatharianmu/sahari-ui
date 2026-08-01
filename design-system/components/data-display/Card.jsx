import React, { useState } from "react";
export function Card({ children, padding = 20, variant = "flat", interactive = false, onClick, style }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const tactile = variant === "tactile";
  const restShadow = tactile ? "var(--shadow-neu-raised)" : "var(--shadow-card)";
  const hoverShadow = tactile ? "var(--shadow-neu-raised), var(--shadow-card-hover)" : "var(--shadow-card-hover)";
  return React.createElement("div", {
    onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => interactive && setActive(true), onMouseUp: () => setActive(false),
    style: {
      background: tactile ? "var(--neu-surface)" : "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      border: tactile ? "none" : "1px solid var(--border-subtle)",
      boxShadow: interactive && hover ? hoverShadow : restShadow,
      cursor: interactive ? "pointer" : undefined,
      transform: interactive && active ? "translateY(0) scale(0.99)" : interactive && hover ? "translateY(-2px)" : "translateY(0)",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      padding, fontFamily: "var(--font-body)", ...style,
    },
  }, children);
}
