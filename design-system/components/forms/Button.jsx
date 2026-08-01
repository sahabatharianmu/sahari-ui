import React, { useState } from "react";
const SIZES = { sm: { h: 36, px: 16, fs: "var(--fs-body-sm)" }, md: { h: 46, px: 22, fs: "var(--fs-body)" }, lg: { h: 54, px: 28, fs: "var(--fs-body-lg)" } };
export function Button({ variant = "primary", size = "md", disabled = false, loading = false, icon = null, children, onClick, style }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const spinnerSize = size === "sm" ? 14 : 16;
  const variants = {
    primary: { bg: "linear-gradient(145deg, var(--purple-400), var(--purple-600))", fg: "#fff", border: "none", shadow: "var(--shadow-neu-brand)", shadowActive: "var(--shadow-neu-brand-inset)", shadowHover: "var(--shadow-neu-brand)" },
    secondary: { bg: "var(--brand-secondary)", fg: "var(--purple-700)", border: "none", shadow: "none", shadowActive: "none", shadowHover: "none" },
    outline: { bg: "var(--bg-surface)", fg: "var(--text-primary)", border: "1px solid var(--border-default)", shadow: "none", shadowActive: "none", shadowHover: "var(--shadow-card)" },
    ghost: { bg: "transparent", fg: "var(--purple-700)", border: "none", shadow: "none", shadowActive: "none", shadowHover: "none" },
    danger: { bg: "var(--state-danger-bg)", fg: "var(--state-danger-fg)", border: "none", shadow: "none", shadowActive: "none", shadowHover: "none" },
  };
  const v = variants[variant] || variants.primary;
  return React.createElement("button", {
    disabled: disabled || loading, onClick, "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true), onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
      height: s.h, padding: `0 ${s.px}px`, borderRadius: "var(--radius-pill)",
      background: disabled || loading ? "var(--bg-surface-sunken)" : v.bg,
      color: disabled || loading ? "var(--text-tertiary)" : v.fg,
      border: v.border,
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: s.fs,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
      transform: active && !disabled && variant === "primary" ? "scale(0.97)" : "scale(1)",
      filter: hover && !disabled && !active && variant === "primary" ? "brightness(1.05)" : "none",
      boxShadow: disabled || loading ? "none" : active ? v.shadowActive : hover ? v.shadowHover : v.shadow,
      ...style,
    },
  },
    loading
      ? React.createElement("span", {
          style: {
            display: "inline-block", width: spinnerSize, height: spinnerSize, borderRadius: "50%",
            border: "2px solid currentColor", borderTopColor: "transparent", opacity: 0.85,
            animation: "sh-spin 0.7s linear infinite",
          },
        })
      : icon,
    children
  );
}
