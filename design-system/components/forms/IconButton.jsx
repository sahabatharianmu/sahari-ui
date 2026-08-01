import React, { useState } from "react";
export function IconButton({ icon, variant = "surface", size = "md", disabled = false, onClick, "aria-label": ariaLabel }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const dim = size === "sm" ? 34 : size === "lg" ? 54 : 46;
  const variants = {
    surface: { bg: "var(--bg-surface)", fg: "var(--neutral-700)", border: "1px solid var(--border-subtle)", shadow: "var(--shadow-card)", shadowHover: "var(--shadow-card-hover)" },
    solid: { bg: "linear-gradient(145deg, var(--purple-400), var(--purple-600))", fg: "#fff", border: "none", shadow: "var(--shadow-neu-brand)", filterHover: "brightness(1.05)" },
    ghost: { bg: "transparent", fg: "var(--purple-700)", border: "none", shadow: "none", bgHover: "var(--bg-surface-sunken)" },
    inverse: { bg: "rgba(255,255,255,0.15)", fg: "#fff", border: "none", shadow: "none", bgHover: "rgba(255,255,255,0.25)" },
  };
  const v = variants[variant] || variants.surface;
  return React.createElement("button", {
    disabled, onClick, "aria-label": ariaLabel,
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true), onMouseUp: () => setActive(false),
    style: {
      width: dim, height: dim, borderRadius: "50%", border: v.border,
      background: hover && v.bgHover ? v.bgHover : v.bg,
      color: disabled ? "var(--text-tertiary)" : v.fg,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: disabled ? "none" : hover && v.shadowHover ? v.shadowHover : v.shadow,
      filter: hover && !disabled && v.filterHover ? v.filterHover : "none",
      transform: active && !disabled ? "scale(0.96)" : "scale(1)",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)",
    },
  }, icon);
}
