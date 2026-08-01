import React, { useState } from "react";
export function Textarea({ label, placeholder, value, onChange, rows = 4, hint, maxLength, id }) {
  const [focus, setFocus] = useState(false);
  const taId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)", width: "100%" } },
    label && React.createElement("label", { htmlFor: taId, style: { fontSize: "var(--fs-body-sm)", fontWeight: 600, color: "var(--text-primary)" } }, label),
    React.createElement("textarea", {
      id: taId, value, placeholder, rows, maxLength,
      onChange: e => onChange && onChange(e.target.value),
      onFocus: () => setFocus(true), onBlur: () => setFocus(false),
      style: {
        resize: "vertical", padding: "14px 16px", borderRadius: "var(--radius-md)", background: "var(--bg-surface)",
        border: `1.5px solid ${focus ? "var(--brand-primary)" : "var(--border-default)"}`,
        boxShadow: focus ? "var(--shadow-neu-inset-sm)" : "none",
        fontSize: "var(--fs-body)", color: "var(--text-primary)", fontFamily: "var(--font-body)", outline: "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      },
    }),
    hint && React.createElement("span", { style: { fontSize: "var(--fs-caption)", color: "var(--text-tertiary)" } }, hint)
  );
}
