import React, { useState } from "react";
export function Select({ label, options = [], value, onChange, placeholder = "Select", id }) {
  const [focus, setFocus] = useState(false);
  const selId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)", width: "100%" } },
    label && React.createElement("label", { htmlFor: selId, style: { fontSize: "var(--fs-body-sm)", fontWeight: 600, color: "var(--text-primary)" } }, label),
    React.createElement("div", { style: { position: "relative" } },
      React.createElement("select", {
        id: selId, value, onFocus: () => setFocus(true), onBlur: () => setFocus(false),
        onChange: e => onChange && onChange(e.target.value),
        style: {
          width: "100%", height: 48, padding: "0 38px 0 16px", borderRadius: "var(--radius-md)",
          background: "var(--bg-surface)", border: `1.5px solid ${focus ? "var(--brand-primary)" : "var(--border-default)"}`, appearance: "none",
          fontSize: "var(--fs-body)", color: "var(--text-primary)", fontFamily: "var(--font-body)", outline: "none",
          boxShadow: focus ? "var(--shadow-neu-inset-sm)" : "none",
          transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
        },
      },
        React.createElement("option", { value: "", disabled: true }, placeholder),
        options.map(o => React.createElement("option", { key: o.value ?? o, value: o.value ?? o }, o.label ?? o))
      ),
      React.createElement("span", { "aria-hidden": true, style: { position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-tertiary)", fontSize: 10 } }, "▾")
    )
  );
}
