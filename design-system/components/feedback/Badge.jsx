import React from "react";
const TONES = {
  neutral: { bg: "var(--bg-surface)", fg: "var(--neutral-700)", border: "1px solid var(--border-subtle)" },
  brand: { bg: "var(--purple-100)", fg: "var(--purple-700)" },
  success: { bg: "var(--state-success-bg)", fg: "var(--state-success-fg)" },
  warning: { bg: "var(--state-warning-bg)", fg: "var(--state-warning-fg)" },
  danger: { bg: "var(--state-danger-bg)", fg: "var(--state-danger-fg)" },
  info: { bg: "var(--state-info-bg)", fg: "var(--state-info-fg)" },
};
export function Badge({ tone = "neutral", children, icon }) {
  const t = TONES[tone] || TONES.neutral;
  return React.createElement("span", {
    style: {
      display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: "var(--radius-pill)",
      background: t.bg, color: t.fg, border: t.border || "none", fontFamily: "var(--font-body)", fontSize: "var(--fs-caption)", fontWeight: 600,
    },
  }, icon, children);
}
