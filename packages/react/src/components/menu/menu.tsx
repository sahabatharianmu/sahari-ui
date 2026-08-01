import * as React from "react";
import { mergeRefs } from "../../lib/merge-refs";

export type MenuItem = {
  label: React.ReactNode;
  icon?: React.ReactNode;
  onSelect: () => void;
  tone?: "default" | "danger";
  disabled?: boolean;
};

export type MenuProps = {
  /** A single focusable element (e.g. `IconButton`) that opens the menu. */
  trigger: React.ReactElement;
  items: MenuItem[];
  align?: "start" | "end";
  /** Accessible name for the menu itself, e.g. "Opsi cerita". */
  label?: string;
};

/** Hand-rolled dropdown action menu (report/delete/share, avatar menu, etc.), same mechanics as `Select`'s listbox. */
export function Menu({ trigger, items, align = "start", label = "Menu" }: MenuProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLElement>(null);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const close = (focusTrigger = true) => {
    setOpen(false);
    if (focusTrigger) triggerRef.current?.focus();
  };

  React.useEffect(() => {
    if (!open) return;
    itemRefs.current.find((el) => el && !el.disabled)?.focus();

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) close(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const focusItem = (index: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    itemRefs.current[clamped]?.focus();
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") { event.preventDefault(); focusItem(index + 1); }
    if (event.key === "ArrowUp") { event.preventDefault(); focusItem(index - 1); }
    if (event.key === "Home") { event.preventDefault(); focusItem(0); }
    if (event.key === "End") { event.preventDefault(); focusItem(items.length - 1); }
    if (event.key === "Escape") { event.preventDefault(); close(); }
    if (event.key === "Tab") close(false);
  };

  const triggerProps = trigger.props as { ref?: React.Ref<HTMLElement>; onClick?: (event: React.MouseEvent) => void };
  const clonedTrigger = React.cloneElement(trigger, {
    ref: mergeRefs(triggerRef, triggerProps.ref),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    onClick: (event: React.MouseEvent) => {
      triggerProps.onClick?.(event);
      setOpen((value) => !value);
    },
  } as Record<string, unknown>);

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-flex" }}>
      {clonedTrigger}
      {open ? (
        <ul role="menu" aria-label={label} className="sh-menu" data-align={align}>
          {items.map((item, index) => (
            <li key={index} role="none">
              <button
                ref={(node) => { itemRefs.current[index] = node; }}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                data-tone={item.tone ?? "default"}
                className="sh-menu__item"
                onClick={() => { item.onSelect(); close(); }}
                onKeyDown={(event) => onItemKeyDown(event, index)}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
