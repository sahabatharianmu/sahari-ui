import React from "react";
export function Stepper({ steps = [], current = 0 }) {
  return React.createElement("div", { role: "group", "aria-label": "Progres", style: { display: "flex", gap: 6 } },
    steps.map((label, i) => {
      const done = i <= current;
      return React.createElement("div", { key: label, style: { flex: 1, display: "flex", flexDirection: "column", gap: 6 } },
        React.createElement("span", {
          "aria-hidden": true,
          style: { height: 4, borderRadius: "var(--radius-pill)", background: done ? "var(--brand-primary)" : "var(--border-subtle)", transition: "background var(--dur-base) var(--ease-standard)" },
        }),
        React.createElement("span", {
          style: { fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: done ? "var(--text-primary)" : "var(--text-tertiary)" },
        }, label)
      );
    })
  );
}
