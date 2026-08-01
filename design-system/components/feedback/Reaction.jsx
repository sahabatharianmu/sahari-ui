import React, { useState } from "react";
export function Reaction({ icon, activeIcon, count, active = false, onClick }) {
  const [hover, setHover] = useState(false);
  return React.createElement("button", {
    type: "button", "aria-pressed": active, onClick,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex", alignItems: "center", gap: 6, border: "none", background: hover ? "var(--bg-surface-sunken)" : "transparent",
      padding: "6px 10px", borderRadius: "var(--radius-pill)", color: active ? "var(--state-danger-fg)" : "var(--text-secondary)",
      fontFamily: "var(--font-body)", fontSize: "var(--fs-body-sm)", fontWeight: 600, cursor: "pointer",
      transform: hover ? "scale(1.02)" : "scale(1)",
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    },
  },
    React.createElement("span", { "aria-hidden": true, style: { display: "inline-flex" } }, active && activeIcon ? activeIcon : icon),
    count != null && React.createElement("span", null, count)
  );
}
