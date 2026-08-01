import React, { useState } from "react";
function StarIcon() {
  return React.createElement("svg", { width: 26, height: 26, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true },
    React.createElement("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21Z" })
  );
}
export function RatingInput({ label, value, defaultValue = 0, onValueChange, max = 5 }) {
  const [internal, setInternal] = useState(defaultValue);
  const [hovered, setHovered] = useState(0);
  const current = value ?? internal;
  const commit = n => { if (value === undefined) setInternal(n); onValueChange && onValueChange(n); };
  const stars = Array.from({ length: max }, (_, i) => max - i);
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" } },
    label && React.createElement("span", { style: { fontSize: "var(--fs-body-sm)", fontWeight: 600, color: "var(--text-primary)" } }, label),
    React.createElement("div", {
      role: "radiogroup", "aria-label": label || "Rating",
      style: { display: "flex", flexDirection: "row-reverse", justifyContent: "center", gap: 2 },
      onMouseLeave: () => setHovered(0),
    },
      stars.map(n => React.createElement("span", {
        key: n, onClick: () => commit(n), onMouseEnter: () => setHovered(n),
        style: {
          display: "inline-flex", padding: 2, borderRadius: "var(--radius-sm)", cursor: "pointer",
          color: n <= (hovered || current) ? "var(--amber-500)" : "var(--border-strong)",
          transition: "color var(--dur-fast) var(--ease-standard)",
        },
      }, React.createElement(StarIcon)))
    )
  );
}
