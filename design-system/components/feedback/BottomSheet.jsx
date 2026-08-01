import React from "react";
export function BottomSheet({ open = true, title, children, actions, onClose }) {
  if (!open) return null;
  return React.createElement("div", {
    role: "dialog", "aria-modal": true,
    style: {
      position: "fixed", inset: 0, background: "rgba(25,21,41,0.45)", backdropFilter: "blur(3px)",
      display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 100,
    },
    onClick: onClose,
  },
    React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: "100%", maxWidth: 480, maxHeight: "85vh", overflowY: "auto",
        background: "var(--bg-surface)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0", boxShadow: "var(--shadow-lg)",
        padding: "12px 22px 26px", fontFamily: "var(--font-body)",
      },
    },
      React.createElement("span", { "aria-hidden": true, style: { display: "block", width: 40, height: 4, margin: "0 auto 14px", borderRadius: "var(--radius-pill)", background: "var(--border-default)" } }),
      React.createElement("div", { style: { fontSize: "var(--fs-h3)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, fontFamily: "var(--font-display)" } }, title),
      React.createElement("div", { style: { fontSize: "var(--fs-body)", color: "var(--text-secondary)", lineHeight: "var(--lh-body)" } }, children),
      actions && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginTop: 20 } }, actions)
    )
  );
}
