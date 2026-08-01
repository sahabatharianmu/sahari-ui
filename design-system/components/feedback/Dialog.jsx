import React from "react";
export function Dialog({ open = true, title, children, onClose, actions }) {
  if (!open) return null;
  return React.createElement("div", {
    role: "dialog", "aria-modal": true,
    style: { position: "fixed", inset: 0, background: "rgba(25,21,41,0.45)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 },
    onClick: onClose,
  },
    React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: { background: "var(--bg-surface)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", padding: 26, width: 380, maxWidth: "90vw", fontFamily: "var(--font-body)" },
    },
      React.createElement("div", { style: { fontSize: "var(--fs-h3)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, fontFamily: "var(--font-display)" } }, title),
      React.createElement("div", { style: { fontSize: "var(--fs-body)", color: "var(--text-secondary)", lineHeight: "var(--lh-body)", marginBottom: 20 } }, children),
      actions && React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } }, actions)
    )
  );
}
