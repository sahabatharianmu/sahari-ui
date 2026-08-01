/* @ds-bundle: {"format":4,"namespace":"SahariDesignSystem_9526ae","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"PulseOrb","sourcePath":"components/data-display/PulseOrb.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data-display/Avatar.jsx":"8f9e05b13bd2","components/data-display/Card.jsx":"86e18a71e535","components/data-display/PulseOrb.jsx":"47ebcebc6a8a","components/feedback/Badge.jsx":"4fcf10c3041c","components/feedback/Dialog.jsx":"ec371d1c488d","components/feedback/Tag.jsx":"517d39b6c0c6","components/feedback/Toast.jsx":"6c94cf2625e6","components/feedback/Tooltip.jsx":"18e609333f49","components/forms/Button.jsx":"76466fb1185c","components/forms/Checkbox.jsx":"b38cdb02c830","components/forms/IconButton.jsx":"2dd69b6ff2b5","components/forms/Input.jsx":"7b5b1daad58e","components/forms/Radio.jsx":"f10d971b56b7","components/forms/Select.jsx":"fa673ebab9e5","components/forms/Switch.jsx":"a17efd0d26dd","components/forms/Textarea.jsx":"12d100bed97a","components/navigation/BottomNav.jsx":"12666da7024d","components/navigation/Tabs.jsx":"b63721d85a85","ui_kits/app/Booking.jsx":"1b41b20e553b","ui_kits/app/Discover.jsx":"666c9211184b","ui_kits/app/Feed.jsx":"5f827a6aa8e6","ui_kits/app/Messages.jsx":"95901aceea29","ui_kits/app/Notifications.jsx":"b2a3bb7f5444","ui_kits/dashboard/AdminModeration.jsx":"d6d4f66dd430","ui_kits/dashboard/ProfessionalDashboard.jsx":"598cc3406963"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SahariDesignSystem_9526ae = window.SahariDesignSystem_9526ae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 88
};
function Avatar({
  src,
  name = "",
  size = "md",
  online
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flexShrink: 0
    }
  }, src ? React.createElement("img", {
    src,
    alt: name,
    style: {
      width: dim,
      height: dim,
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "var(--shadow-neu-raised-sm)"
    }
  }) : React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: "50%",
      background: "var(--purple-100)",
      color: "var(--purple-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-display)",
      fontSize: dim * 0.36,
      boxShadow: "var(--shadow-neu-raised-sm)"
    }
  }, initials), online != null && React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: dim * 0.28,
      height: dim * 0.28,
      borderRadius: "50%",
      background: online ? "var(--state-success-solid)" : "var(--neutral-300)",
      border: "2px solid var(--bg-surface)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function Card({
  children,
  padding = 20,
  variant = "flat",
  style
}) {
  const tactile = variant === "tactile";
  return React.createElement("div", {
    style: {
      background: tactile ? "var(--neu-surface)" : "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      border: tactile ? "none" : "1px solid var(--border-subtle)",
      boxShadow: tactile ? "var(--shadow-neu-raised)" : "var(--shadow-card)",
      padding,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/PulseOrb.jsx
try { (() => {
const SIZES = {
  sm: 56,
  md: 96,
  lg: 160
};
function PulseOrb({
  size = "md",
  animated = true
}) {
  const dim = SIZES[size] || SIZES.md;
  return React.createElement("div", {
    style: {
      width: dim,
      height: dim,
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, animated && React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "radial-gradient(circle, color-mix(in oklch, var(--purple-400) 55%, transparent) 0%, transparent 72%)",
      animation: "sahari-pulse 2.6s var(--ease-standard) infinite"
    }
  }), React.createElement("span", {
    style: {
      width: dim * 0.62,
      height: dim * 0.62,
      borderRadius: "50%",
      background: "linear-gradient(150deg, var(--purple-300), var(--purple-600))",
      boxShadow: "var(--shadow-neu-brand)"
    }
  }));
}
Object.assign(__ds_scope, { PulseOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/PulseOrb.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--neu-surface)",
    fg: "var(--neutral-700)"
  },
  brand: {
    bg: "var(--purple-100)",
    fg: "var(--purple-700)"
  },
  success: {
    bg: "var(--state-success-bg)",
    fg: "var(--state-success-fg)"
  },
  warning: {
    bg: "var(--state-warning-bg)",
    fg: "var(--state-warning-fg)"
  },
  danger: {
    bg: "var(--state-danger-bg)",
    fg: "var(--state-danger-fg)"
  },
  info: {
    bg: "var(--state-info-bg)",
    fg: "var(--state-info-fg)"
  }
};
function Badge({
  tone = "neutral",
  children,
  icon
}) {
  const t = TONES[tone] || TONES.neutral;
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      fontWeight: 600,
      boxShadow: tone === "neutral" ? "var(--shadow-neu-raised-sm)" : "none"
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return React.createElement("div", {
    role: "dialog",
    "aria-modal": true,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(25,21,41,0.45)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      padding: 26,
      width: 340,
      maxWidth: "90vw",
      fontFamily: "var(--font-body)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: 700,
      color: "var(--text-primary)",
      marginBottom: 10,
      fontFamily: "var(--font-display)"
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-body)",
      marginBottom: 20
    }
  }, children), actions && React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "flex-end"
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  children,
  selected = false,
  onClick,
  removable = false,
  onRemove
}) {
  const [hover, setHover] = useState(false);
  return React.createElement("button", {
    type: "button",
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      background: selected ? "var(--brand-primary)" : hover && onClick ? "var(--bg-surface-sunken)" : "var(--bg-surface)",
      color: selected ? "#fff" : "var(--text-primary)",
      border: selected ? "none" : "1.5px solid var(--border-default)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: 500,
      cursor: onClick ? "pointer" : "default",
      boxShadow: selected ? "var(--shadow-neu-brand)" : "none",
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)"
    }
  }, children, removable && React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      opacity: 0.7
    }
  }, "✕"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  success: {
    fg: "var(--state-success-fg)",
    dot: "var(--state-success-solid)"
  },
  info: {
    fg: "var(--state-info-fg)",
    dot: "var(--sky-500)"
  },
  warning: {
    fg: "var(--state-warning-fg)",
    dot: "var(--state-warning-solid)"
  }
};
function Toast({
  tone = "info",
  title,
  description,
  onClose
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: 16,
      maxWidth: 340,
      fontFamily: "var(--font-body)",
      border: "1px solid var(--border-subtle)"
    }
  }, React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: t.dot,
      marginTop: 6,
      flexShrink: 0
    }
  }), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)"
    }
  }, title), description && React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, description)), onClose && React.createElement("button", {
    onClick: onClose,
    "aria-label": "Tutup",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-tertiary)",
      fontSize: 14,
      padding: 0
    }
  }, "✕"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = useState(false);
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--neutral-900)",
      color: "#fff",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: "var(--fs-caption)",
      fontFamily: "var(--font-body)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-lg)",
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: "var(--fs-body-sm)"
  },
  md: {
    h: 46,
    px: 22,
    fs: "var(--fs-body)"
  },
  lg: {
    h: 54,
    px: 28,
    fs: "var(--fs-body-lg)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      bg: "linear-gradient(145deg, var(--purple-400), var(--purple-600))",
      fg: "#fff",
      border: "none",
      shadow: "var(--shadow-neu-brand)",
      shadowActive: "var(--shadow-neu-brand-inset)",
      shadowHover: "var(--shadow-neu-brand)"
    },
    secondary: {
      bg: "var(--brand-secondary)",
      fg: "var(--purple-700)",
      border: "none",
      shadow: "none",
      shadowActive: "none",
      shadowHover: "none"
    },
    outline: {
      bg: "var(--bg-surface)",
      fg: "var(--text-primary)",
      border: "1px solid var(--border-default)",
      shadow: "none",
      shadowActive: "none",
      shadowHover: "var(--shadow-card)"
    },
    ghost: {
      bg: "transparent",
      fg: "var(--purple-700)",
      border: "none",
      shadow: "none",
      shadowActive: "none",
      shadowHover: "none"
    },
    danger: {
      bg: "var(--state-danger-bg)",
      fg: "var(--state-danger-fg)",
      border: "none",
      shadow: "none",
      shadowActive: "none",
      shadowHover: "none"
    }
  };
  const v = variants[variant] || variants.primary;
  return React.createElement("button", {
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: "var(--radius-pill)",
      background: disabled ? "var(--bg-surface-sunken)" : v.bg,
      color: disabled ? "var(--text-tertiary)" : v.fg,
      border: v.border,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: s.fs,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
      transform: active && !disabled && variant === "primary" ? "scale(0.97)" : "scale(1)",
      filter: hover && !disabled && !active && variant === "primary" ? "brightness(1.05)" : "none",
      boxShadow: disabled ? "none" : active ? v.shadowActive : hover ? v.shadowHover : v.shadow,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useId
} = React;
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  const id = useId();
  return React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)"
    }
  }, React.createElement("input", {
    id,
    type: "checkbox",
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      opacity: 0
    }
  }), React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 21,
      height: 21,
      borderRadius: 6,
      flexShrink: 0,
      background: checked ? "var(--brand-primary)" : "var(--bg-surface)",
      border: checked ? "none" : "1.5px solid var(--border-default)",
      outline: "2px solid transparent",
      outlineOffset: 2,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)"
    },
    className: "sahari-focusable"
  }, checked && React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 12,
      lineHeight: 1
    }
  }, "✓")), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  icon,
  variant = "surface",
  size = "md",
  disabled = false,
  onClick,
  "aria-label": ariaLabel
}) {
  const [active, setActive] = useState(false);
  const dim = size === "sm" ? 34 : size === "lg" ? 54 : 46;
  const variants = {
    surface: {
      bg: "var(--neu-surface)",
      fg: "var(--neutral-700)",
      shadow: "var(--shadow-neu-raised-sm)",
      shadowActive: "var(--shadow-neu-inset-sm)"
    },
    solid: {
      bg: "linear-gradient(145deg, var(--purple-400), var(--purple-600))",
      fg: "#fff",
      shadow: "var(--shadow-neu-brand)",
      shadowActive: "var(--shadow-neu-brand-inset)"
    },
    inverse: {
      bg: "rgba(255,255,255,0.15)",
      fg: "#fff",
      shadow: "none",
      shadowActive: "none"
    }
  };
  const v = variants[variant] || variants.surface;
  return React.createElement("button", {
    disabled,
    onClick,
    "aria-label": ariaLabel,
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onMouseLeave: () => setActive(false),
    style: {
      width: dim,
      height: dim,
      borderRadius: "50%",
      border: "none",
      background: v.bg,
      color: disabled ? "var(--text-tertiary)" : v.fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: active ? v.shadowActive : v.shadow,
      transform: active ? "scale(0.96)" : "scale(1)",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)"
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  hint,
  icon,
  disabled = false,
  id
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || label ? `input-${(label || placeholder || "field").replace(/\s+/g, "-").toLowerCase()}` : undefined;
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      width: "100%"
    }
  }, label && React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, label), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 48,
      padding: "0 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--bg-surface)",
      border: `1.5px solid ${error ? "var(--state-danger-solid)" : focus ? "var(--brand-primary)" : "var(--border-default)"}`,
      boxShadow: focus ? "var(--shadow-neu-inset-sm)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
    }
  }, icon, React.createElement("input", {
    id: inputId,
    type,
    value,
    placeholder,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: "none",
      outline: "none",
      flex: 1,
      background: "transparent",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)"
    }
  })), error ? React.createElement("span", {
    role: "alert",
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--state-danger-fg)"
    }
  }, error) : hint && React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const {
  useId
} = React;
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  name
}) {
  const id = useId();
  return React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)"
    }
  }, React.createElement("input", {
    id,
    type: "radio",
    name,
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      opacity: 0
    }
  }), React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 21,
      height: 21,
      borderRadius: "50%",
      flexShrink: 0,
      background: "var(--bg-surface)",
      border: `1.5px solid ${checked ? "var(--brand-primary)" : "var(--border-default)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--dur-fast) var(--ease-standard)"
    }
  }, checked && React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "var(--brand-primary)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select",
  id
}) {
  const [focus, setFocus] = useState(false);
  const selId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      width: "100%"
    }
  }, label && React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, label), React.createElement("div", {
    style: {
      position: "relative"
    }
  }, React.createElement("select", {
    id: selId,
    value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: "100%",
      height: 48,
      padding: "0 38px 0 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--bg-surface)",
      border: `1.5px solid ${focus ? "var(--brand-primary)" : "var(--border-default)"}`,
      appearance: "none",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      outline: "none",
      boxShadow: focus ? "var(--shadow-neu-inset-sm)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
    }
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-tertiary)",
      fontSize: 10
    }
  }, "▾")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useId
} = React;
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  const id = useId();
  return React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement("input", {
    id,
    type: "checkbox",
    role: "switch",
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      opacity: 0
    }
  }), React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 46,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--brand-primary)" : "var(--border-default)",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-standard)",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const {
  useState
} = React;
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  hint,
  maxLength,
  id
}) {
  const [focus, setFocus] = useState(false);
  const taId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      width: "100%"
    }
  }, label && React.createElement("label", {
    htmlFor: taId,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, label), React.createElement("textarea", {
    id: taId,
    value,
    placeholder,
    rows,
    maxLength,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: "vertical",
      padding: "14px 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--bg-surface)",
      border: `1.5px solid ${focus ? "var(--brand-primary)" : "var(--border-default)"}`,
      boxShadow: focus ? "var(--shadow-neu-inset-sm)" : "none",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      outline: "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
    }
  }), hint && React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items = [],
  active,
  onChange
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "var(--bg-surface)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "10px 8px",
      fontFamily: "var(--font-body)"
    }
  }, items.map(it => {
    const isActive = active === it.value;
    return React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        border: "none",
        cursor: "pointer",
        background: isActive ? "var(--brand-secondary)" : "transparent",
        borderRadius: "var(--radius-md)",
        color: isActive ? "var(--brand-primary)" : "var(--text-tertiary)",
        fontSize: "var(--fs-caption)",
        fontWeight: 600,
        padding: "6px 16px",
        minWidth: 44,
        transition: "background var(--dur-base) var(--ease-standard)"
      }
    }, it.icon, it.label);
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      background: "var(--bg-surface-sunken)",
      borderRadius: "var(--radius-pill)",
      padding: 4,
      fontFamily: "var(--font-body)"
    }
  }, items.map(it => {
    const val = it.value ?? it;
    const isActive = val === active;
    return React.createElement("button", {
      key: val,
      onClick: () => onChange && onChange(val),
      style: {
        flex: 1,
        padding: "9px 16px",
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: "pointer",
        background: isActive ? "var(--bg-surface)" : "transparent",
        color: isActive ? "var(--brand-primary)" : "var(--text-secondary)",
        fontWeight: 600,
        fontSize: "var(--fs-body-sm)",
        boxShadow: isActive ? "var(--shadow-card)" : "none",
        transition: "all var(--dur-base) var(--ease-standard)"
      }
    }, it.label ?? it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Booking.jsx
try { (() => {
function Booking({
  ds,
  psychologist,
  onDone,
  onBack
}) {
  const {
    Card,
    Avatar,
    Badge,
    Button,
    Radio,
    Dialog,
    Toast
  } = ds;
  const [step, setStep] = React.useState("profile");
  const [format, setFormat] = React.useState("video");
  const [slot, setSlot] = React.useState("Kamis, 14:00");
  const [showToast, setShowToast] = React.useState(false);
  if (!psychologist) return null;
  const slots = ["Kamis, 14:00", "Kamis, 16:00", "Jumat, 10:00"];
  if (step === "profile") return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    style: {
      alignSelf: "flex-start"
    }
  }, "\u2190 Kembali"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: psychologist.name,
    size: "xl",
    online: psychologist.online
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-primary)"
    }
  }, psychologist.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, psychologist.spec, " \xB7 \u2605 ", psychologist.rating), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Terverifikasi STR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-body)"
    }
  }, "Berpengalaman ", psychologist.sessions, "+ sesi. Pendekatan hangat, mendengarkan tanpa menghakimi, berbasis CBT.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setStep("slot")
  }, "Pilih Jadwal"));
  if (step === "slot") return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setStep("profile"),
    style: {
      alignSelf: "flex-start"
    }
  }, "\u2190 Kembali"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 10,
      color: "var(--text-primary)"
    }
  }, "Format Sesi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Video call",
    checked: format === "video",
    onChange: () => setFormat("video")
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Chat",
    checked: format === "chat",
    onChange: () => setFormat("chat")
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Telepon",
    checked: format === "call",
    onChange: () => setFormat("call")
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 10,
      color: "var(--text-primary)"
    }
  }, "Jadwal Tersedia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, slots.map(s => /*#__PURE__*/React.createElement(Radio, {
    key: s,
    label: s,
    checked: slot === s,
    onChange: () => setSlot(s)
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setStep("pay")
  }, "Lanjut ke Pembayaran"));
  if (step === "pay") return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setStep("slot"),
    style: {
      alignSelf: "flex-start"
    }
  }, "\u2190 Kembali"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 10,
      color: "var(--text-primary)"
    }
  }, "Ringkasan"), /*#__PURE__*/React.createElement(Row, {
    label: "Psikolog",
    value: psychologist.name
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Format",
    value: format
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Jadwal",
    value: slot
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Biaya sesi",
    value: psychologist.price
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Biaya layanan",
    value: "Rp5.000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: 10,
      paddingTop: 10,
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, psychologist.price))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 10,
      color: "var(--text-primary)"
    }
  }, "Metode Pembayaran"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "QRIS",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Virtual Account BCA",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "GoPay",
    checked: false,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => {
      setStep("done");
      setShowToast(true);
    }
  }, "Bayar & Konfirmasi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-tertiary)",
      textAlign: "center"
    }
  }, "\uD83D\uDD12 Pembayaran aman & terenkripsi"));
  if (step === "done") return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "center",
      textAlign: "center",
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: "var(--state-success-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 32
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      color: "var(--text-primary)",
      fontFamily: "var(--font-display)"
    }
  }, "Sesi berhasil dipesan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      maxWidth: 280
    }
  }, "Kamu akan menerima pengingat 1 jam sebelum sesi dengan ", psychologist.name, " pada ", slot, "."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onDone
  }, "Selesai"), showToast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 90,
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Pembayaran berhasil",
    onClose: () => setShowToast(false)
  })));
}
function Row({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "var(--text-secondary)",
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 500
    }
  }, value));
}
window.Booking = Booking;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Discover.jsx
try { (() => {
function Discover({
  ds,
  onSelect
}) {
  const {
    Card,
    Avatar,
    Badge,
    Tag,
    Input
  } = ds;
  const [spec, setSpec] = React.useState("Semua");
  const psychologists = [{
    id: 1,
    name: "Dr. Amara Putri, M.Psi",
    spec: "Kecemasan",
    rating: 4.9,
    sessions: 320,
    price: "Rp150rb",
    online: true
  }, {
    id: 2,
    name: "Dr. Wisnu Prakoso, Psikolog",
    spec: "Hubungan",
    rating: 4.8,
    sessions: 210,
    price: "Rp180rb",
    online: true
  }, {
    id: 3,
    name: "Dr. Sinta Dewi, M.Psi",
    spec: "Stres Kerja",
    rating: 5.0,
    sessions: 450,
    price: "Rp200rb",
    online: false
  }];
  const filtered = spec === "Semua" ? psychologists : psychologists.filter(p => p.spec === spec);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Cari psikolog atau topik..."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto"
    }
  }, ["Semua", "Kecemasan", "Hubungan", "Stres Kerja"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: spec === t,
    onClick: () => setSpec(t)
  }, t))), filtered.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onSelect(p),
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: "lg",
    online: p.online
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      margin: "2px 0 6px"
    }
  }, p.spec, " \xB7 \u2605 ", p.rating, " \xB7 ", p.sessions, " sesi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Terverifikasi"), p.online ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Online") : /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Offline"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--purple-700)",
      fontSize: 14,
      alignSelf: "center"
    }
  }, p.price)))));
}
window.Discover = Discover;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Discover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Feed.jsx
try { (() => {
function Feed({
  ds
}) {
  const {
    Card,
    Avatar,
    Badge,
    IconButton,
    Tag,
    Textarea,
    Button
  } = ds;
  const [liked, setLiked] = React.useState({});
  const [tag, setTag] = React.useState("Semua");
  const posts = [{
    id: 1,
    name: "Rani W.",
    anon: false,
    time: "2j",
    tag: "Kecemasan",
    text: "Hari ini aku coba journaling sebelum tidur, ternyata bikin pikiran lebih tenang. Ada yang punya rutinitas malam serupa?",
    likes: 24,
    comments: 6
  }, {
    id: 2,
    name: "Anonim",
    anon: true,
    time: "5j",
    tag: "Hubungan",
    text: "Lagi belajar bilang 'tidak apa-apa untuk tidak baik-baik saja'. Pelan-pelan, tapi progres tetap progres.",
    likes: 41,
    comments: 12
  }, {
    id: 3,
    name: "Budi S.",
    anon: false,
    time: "1h",
    tag: "Stres Kerja",
    text: "Psikolog aku bilang istirahat 5 menit tiap jam itu bukan kemalasan, itu perawatan diri. Reminder buat kita semua!",
    likes: 58,
    comments: 9
  }];
  const filtered = tag === "Semua" ? posts : posts.filter(p => p.tag === tag);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Kamu",
    size: "md"
  }), /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Bagikan perasaanmu hari ini, dengan aman...",
    rows: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, ["Semua", "Kecemasan", "Hubungan", "Stres Kerja"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tag === t,
    onClick: () => setTag(t)
  }, t))), filtered.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.anon ? "?" : p.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-tertiary)"
    }
  }, p.time, " \xB7 ", /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.tag)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-primary)",
      lineHeight: "var(--lh-body)",
      marginBottom: 12
    }
  }, p.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      color: "var(--text-secondary)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setLiked(l => ({
      ...l,
      [p.id]: !l[p.id]
    })),
    style: {
      cursor: "pointer",
      color: liked[p.id] ? "var(--brand-primary)" : "var(--text-secondary)",
      fontWeight: liked[p.id] ? 700 : 400
    }
  }, "\u2665 ", p.likes + (liked[p.id] ? 1 : 0)), /*#__PURE__*/React.createElement("span", null, p.comments, " komentar"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, "Kirim dukungan \u2192")))));
}
window.Feed = Feed;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Feed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Messages.jsx
try { (() => {
function Messages({
  ds
}) {
  const {
    Card,
    Avatar,
    Badge,
    Input,
    IconButton
  } = ds;
  const [active, setActive] = React.useState(0);
  const threads = [{
    name: "Dr. Amara Putri",
    last: "Sampai jumpa di sesi Kamis ya 😊",
    time: "10:24",
    unread: 2
  }, {
    name: "Dr. Wisnu Prakoso",
    last: "Baik, saya kirimkan ringkasan sesi.",
    time: "Kemarin",
    unread: 0
  }, {
    name: "Tim Sahari",
    last: "Pembayaranmu telah dikonfirmasi.",
    time: "2h",
    unread: 1
  }];
  const chat = [{
    me: false,
    text: "Halo! Bagaimana perasaanmu setelah sesi minggu lalu?"
  }, {
    me: true,
    text: "Lebih baik, aku coba teknik pernapasan yang Ibu ajarkan."
  }, {
    me: false,
    text: "Senang mendengarnya. Sampai jumpa di sesi Kamis ya 😊"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      height: "100%"
    }
  }, active === null ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, threads.map((t, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 12,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)"
    }
  }, t.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.last)), t.unread > 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, t.unread))))), /*#__PURE__*/React.createElement(Card, {
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dr. Amara Putri",
    size: "sm",
    online: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "Dr. Amara Putri")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginBottom: 10
    }
  }, chat.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.me ? "flex-end" : "flex-start",
      background: m.me ? "var(--brand-primary)" : "var(--purple-50)",
      color: m.me ? "#fff" : "var(--text-primary)",
      padding: "8px 14px",
      borderRadius: 16,
      maxWidth: "80%",
      fontSize: 13
    }
  }, m.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Tulis pesan..."
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("span", null, "\u27A4"),
    variant: "solid",
    "aria-label": "Kirim"
  }))));
}
window.Messages = Messages;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Messages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Notifications.jsx
try { (() => {
function Notifications({
  ds
}) {
  const {
    Card,
    Avatar,
    Badge
  } = ds;
  const items = [{
    title: "Pengingat sesi",
    body: "Sesi dengan Dr. Amara Putri dimulai 1 jam lagi.",
    time: "1j",
    tone: "brand"
  }, {
    title: "Pesan baru",
    body: "Tim Sahari: Pembayaranmu telah dikonfirmasi.",
    time: "2j",
    tone: "success"
  }, {
    title: "Dukungan diterima",
    body: "Rani W. dan 12 lainnya menyukai postinganmu.",
    time: "5j",
    tone: "neutral"
  }, {
    title: "Catatan sesi tersedia",
    body: "Dr. Wisnu membagikan ringkasan sesi terakhirmu.",
    time: "1h",
    tone: "info"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map((n, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--brand-primary)",
      marginTop: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)"
    }
  }, n.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, n.body))))));
}
window.Notifications = Notifications;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Notifications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AdminModeration.jsx
try { (() => {
function AdminModeration({
  ds
}) {
  const {
    Card,
    Avatar,
    Badge,
    Button,
    Tag,
    Dialog
  } = ds;
  const [openReport, setOpenReport] = React.useState(null);
  const [queue, setQueue] = React.useState("posts");
  const reports = [{
    id: 1,
    author: "Anonim R.",
    reason: "Konten memicu (self-harm)",
    text: "Postingan menyebutkan keinginan menyakiti diri sendiri secara eksplisit.",
    severity: "danger"
  }, {
    id: 2,
    author: "Budi S.",
    reason: "Spam / promosi",
    text: "Membagikan tautan promosi layanan tidak terverifikasi berulang kali.",
    severity: "warning"
  }, {
    id: 3,
    author: "Anonim L.",
    reason: "Ujaran kasar",
    text: "Komentar berisi kata-kata kasar terhadap pengguna lain.",
    severity: "warning"
  }];
  const kyc = [{
    name: "Dr. Fajar Ramadhan",
    spec: "Klinis",
    submitted: "2 hari lalu",
    status: "Menunggu"
  }, {
    name: "Dr. Nadia Kusuma",
    spec: "Anak & Remaja",
    submitted: "5 jam lalu",
    status: "Menunggu"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: queue === "posts",
    onClick: () => setQueue("posts")
  }, "Konten Dilaporkan (", reports.length, ")"), /*#__PURE__*/React.createElement(Tag, {
    selected: queue === "kyc",
    onClick: () => setQueue("kyc")
  }, "Verifikasi Psikolog (", kyc.length, ")")), queue === "posts" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, reports.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.author,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, r.author)), /*#__PURE__*/React.createElement(Badge, {
    tone: r.severity
  }, r.reason)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginBottom: 12
    }
  }, r.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setOpenReport(r)
  }, "Tinjau"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Abaikan"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "danger"
  }, "Hapus konten"))))), queue === "kyc" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, kyc.map((k, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: k.name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, k.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, k.spec, " \xB7 diajukan ", k.submitted)), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, k.status), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Lihat Dokumen"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Setujui"))))), openReport && /*#__PURE__*/React.createElement(Dialog, {
    title: "Tinjau Laporan",
    onClose: () => setOpenReport(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpenReport(null)
    }, "Tutup"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => setOpenReport(null)
    }, "Hapus & Peringatkan Pengguna"))
  }, "Laporan dari sistem: \"", openReport.reason, "\". Tim moderasi meninjau dengan pendekatan suportif \u2014 prioritaskan keselamatan pengguna di atas penalti."));
}
window.AdminModeration = AdminModeration;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AdminModeration.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ProfessionalDashboard.jsx
try { (() => {
function ProfessionalDashboard({
  ds
}) {
  const {
    Card,
    Avatar,
    Badge,
    Button,
    Tabs
  } = ds;
  const [tab, setTab] = React.useState("upcoming");
  const upcoming = [{
    client: "Anonim K.",
    time: "Hari ini, 14:00",
    format: "Video"
  }, {
    client: "Budi S.",
    time: "Hari ini, 16:30",
    format: "Chat"
  }, {
    client: "Rani W.",
    time: "Besok, 10:00",
    format: "Video"
  }];
  const past = [{
    client: "Sinta D.",
    time: "Kemarin, 11:00",
    format: "Video"
  }, {
    client: "Anonim T.",
    time: "2 hari lalu, 15:00",
    format: "Telepon"
  }];
  const rows = tab === "upcoming" ? upcoming : past;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14
    }
  }, [["Sesi bulan ini", "62"], ["Pendapatan", "Rp9.3jt"], ["Rating", "4.9"], ["Klien aktif", "28"]].map(([l, v]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-tertiary)",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--text-primary)",
      fontFamily: "var(--font-display)"
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-primary)",
      fontSize: 16
    }
  }, "Jadwal Sesi"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      label: "Mendatang",
      value: "upcoming"
    }, {
      label: "Selesai",
      value: "past"
    }],
    active: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: i < rows.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.client,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, r.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, r.time)), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, r.format), tab === "upcoming" ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Mulai") : /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Catatan"))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "var(--purple-50)",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--purple-800)",
      marginBottom: 6
    }
  }, "Verifikasi KYC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--purple-700)"
    }
  }, "STR & SIPP kamu terverifikasi. Perbarui setiap 2 tahun untuk tetap aktif menerima klien.")));
}
window.ProfessionalDashboard = ProfessionalDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ProfessionalDashboard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PulseOrb = __ds_scope.PulseOrb;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
