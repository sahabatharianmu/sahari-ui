import React, { useState } from "react";
export function Tag({ children, selected = false, onClick, removable = false, onRemove }) {
  const [hover, setHover] = useState(false);
  return React.createElement("button", {
    type: "button", onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: "var(--radius-pill)",
      background: selected ? "var(--brand-primary)" : hover && onClick ? "var(--bg-surface-sunken)" : "var(--bg-surface)",
      color: selected ? "#fff" : "var(--text-primary)",
      border: selected ? "none" : "1.5px solid var(--border-default)",
      fontFamily: "var(--font-body)", fontSize: "var(--fs-body-sm)", fontWeight: 500, cursor: onClick ? "pointer" : "default",
      boxShadow: selected ? "var(--shadow-neu-brand)" : "none",
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
    },
  }, children, removable && React.createElement("span", { onClick: e => { e.stopPropagation(); onRemove && onRemove(); }, style: { opacity: 0.7 } }, "✕"));
}
