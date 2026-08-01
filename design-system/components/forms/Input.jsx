import React, { useState } from "react";
export function Input({ label, placeholder, value, onChange, type = "text", error, hint, icon, disabled = false, id }) {
  const [focus, setFocus] = useState(false);
  const inputId = id || label ? `input-${(label || placeholder || "field").replace(/\s+/g, "-").toLowerCase()}` : undefined;
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)", width: "100%" } },
    label && React.createElement("label", { htmlFor: inputId, style: { fontSize: "var(--fs-body-sm)", fontWeight: 600, color: "var(--text-primary)" } }, label),
    React.createElement("div", {
      style: {
        display: "flex", alignItems: "center", gap: 8, height: 48, padding: "0 16px",
        borderRadius: "var(--radius-md)", background: "var(--bg-surface)",
        border: `1.5px solid ${error ? "var(--state-danger-solid)" : focus ? "var(--brand-primary)" : "var(--border-default)"}`,
        boxShadow: focus ? "var(--shadow-neu-inset-sm)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      },
    },
      icon,
      React.createElement("input", {
        id: inputId, type, value, placeholder, disabled,
        onChange: e => onChange && onChange(e.target.value),
        onFocus: () => setFocus(true), onBlur: () => setFocus(false),
        style: { border: "none", outline: "none", flex: 1, background: "transparent", fontSize: "var(--fs-body)", color: "var(--text-primary)", fontFamily: "var(--font-body)" },
      })
    ),
    error ? React.createElement("span", { role: "alert", style: { fontSize: "var(--fs-caption)", color: "var(--state-danger-fg)" } }, error)
      : hint && React.createElement("span", { style: { fontSize: "var(--fs-caption)", color: "var(--text-tertiary)" } }, hint)
  );
}
