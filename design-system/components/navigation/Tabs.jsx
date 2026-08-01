import React from "react";
export function Tabs({ items = [], active, onChange }) {
  return React.createElement("div", { style: { display: "flex", gap: 4, background: "var(--bg-surface-sunken)", borderRadius: "var(--radius-pill)", padding: 4, fontFamily: "var(--font-body)" } },
    items.map(it => {
      const val = it.value ?? it; const isActive = val === active;
      return React.createElement("button", {
        key: val, onClick: () => onChange && onChange(val),
        style: {
          flex: 1, padding: "9px 16px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
          background: isActive ? "var(--bg-surface)" : "transparent",
          color: isActive ? "var(--brand-primary)" : "var(--text-secondary)",
          fontWeight: 600, fontSize: "var(--fs-body-sm)", boxShadow: isActive ? "var(--shadow-card)" : "none",
          transition: "all var(--dur-base) var(--ease-standard)",
        },
      }, it.label ?? it);
    })
  );
}
