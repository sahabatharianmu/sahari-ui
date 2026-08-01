import React from "react";
const TONES = {
  neutral: { bg: "var(--bg-surface-sunken)", fg: "var(--brand-primary)" },
  danger: { bg: "var(--state-danger-bg)", fg: "var(--state-danger-fg)" },
};
export function EmptyState({ icon, title, description, action, tone = "neutral" }) {
  const t = TONES[tone] || TONES.neutral;
  return React.createElement("div", {
    style: {
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6,
      padding: "48px 24px", fontFamily: "var(--font-body)",
    },
  },
    icon && React.createElement("span", {
      "aria-hidden": true,
      style: {
        display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "50%",
        marginBottom: 8, background: t.bg, color: t.fg, fontSize: 24,
      },
    }, icon),
    React.createElement("strong", { style: { color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", fontWeight: 700 } }, title),
    description && React.createElement("p", {
      style: { margin: 0, maxWidth: 320, color: "var(--text-secondary)", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-body)" },
    }, description),
    action && React.createElement("div", { style: { marginTop: 12 } }, action)
  );
}
