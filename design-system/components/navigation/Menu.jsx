import React, { useEffect, useRef, useState } from "react";
export function Menu({ trigger, items = [], align = "start", label = "Menu" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const clonedTrigger = React.cloneElement(trigger, {
    "aria-haspopup": "menu", "aria-expanded": open,
    onClick: e => { trigger.props.onClick && trigger.props.onClick(e); setOpen(v => !v); },
  });

  return React.createElement("div", { ref, style: { position: "relative", display: "inline-flex" } },
    clonedTrigger,
    open && React.createElement("ul", {
      role: "menu", "aria-label": label,
      style: {
        position: "absolute", zIndex: 30, top: "calc(100% + 6px)", [align === "start" ? "left" : "right"]: 0,
        minWidth: 180, margin: 0, padding: 6, listStyle: "none", borderRadius: "var(--radius-md)",
        background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-lg)",
      },
    },
      items.map((item, i) => React.createElement("li", { key: i, role: "none" },
        React.createElement("button", {
          type: "button", role: "menuitem", disabled: item.disabled,
          onClick: () => { item.onSelect && item.onSelect(); setOpen(false); },
          style: {
            display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "10px 12px", border: "none",
            background: "none", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-body)", fontSize: "var(--fs-body)",
            color: item.tone === "danger" ? "var(--state-danger-fg)" : "var(--text-primary)",
            cursor: item.disabled ? "not-allowed" : "pointer", textAlign: "left", opacity: item.disabled ? 0.5 : 1,
          },
        }, item.icon, item.label)
      ))
    )
  );
}
