import React from "react";
export function BottomNav({ items = [], active, onChange }) {
  return React.createElement("div", {
    style: {
      display: "flex", justifyContent: "space-around", alignItems: "center", background: "var(--bg-surface)",
      borderTop: "1px solid var(--border-subtle)", padding: "10px 8px", fontFamily: "var(--font-body)",
    },
  },
    items.map(it => {
      const isActive = active === it.value;
      return React.createElement("button", {
        key: it.value, onClick: () => onChange && onChange(it.value),
        style: {
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4, border: "none", cursor: "pointer",
          background: isActive ? "var(--brand-secondary)" : "transparent",
          borderRadius: "var(--radius-md)",
          color: isActive ? "var(--brand-primary)" : "var(--text-tertiary)", fontSize: "var(--fs-caption)", fontWeight: 600, padding: "6px 16px", minWidth: 44,
          transition: "background var(--dur-base) var(--ease-standard)",
        },
      }, it.icon, it.label);
    })
  );
}
