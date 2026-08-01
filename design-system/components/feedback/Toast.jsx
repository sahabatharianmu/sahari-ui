import React from "react";
const TONES = {
  success: { fg: "var(--state-success-fg)", dot: "var(--state-success-solid)" },
  info: { fg: "var(--state-info-fg)", dot: "var(--state-info-fg)" },
  warning: { fg: "var(--state-warning-fg)", dot: "var(--state-warning-solid)" },
};
export function Toast({ tone = "info", title, description, onClose }) {
  const t = TONES[tone] || TONES.info;
  return React.createElement("div", {
    role: "status",
    style: {
      display: "flex", gap: 12, alignItems: "flex-start", background: "var(--bg-surface)", borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)", padding: 16, maxWidth: 340, fontFamily: "var(--font-body)", border: "1px solid var(--border-subtle)",
    },
  },
    React.createElement("span", { "aria-hidden": true, style: { width: 9, height: 9, borderRadius: "50%", background: t.dot, marginTop: 6, flexShrink: 0 } }),
    React.createElement("div", { style: { flex: 1 } },
      React.createElement("div", { style: { fontWeight: 600, fontSize: "var(--fs-body)", color: "var(--text-primary)" } }, title),
      description && React.createElement("div", { style: { fontSize: "var(--fs-body-sm)", color: "var(--text-secondary)", marginTop: 2 } }, description)
    ),
    onClose && React.createElement("button", { onClick: onClose, "aria-label": "Tutup", style: { border: "none", background: "none", cursor: "pointer", color: "var(--text-tertiary)", fontSize: 14, padding: 0 } }, "✕")
  );
}
