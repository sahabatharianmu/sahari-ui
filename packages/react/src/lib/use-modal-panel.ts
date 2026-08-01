import * as React from "react";

const focusableSelector = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

/** Shared focus trap + restore-focus-on-close + Escape-to-close behavior for `Dialog` and `BottomSheet`. */
export function useModalPanel(open: boolean, onOpenChange?: (open: boolean) => void) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    panelRef.current?.focus();
    return () => previousFocusRef.current?.focus();
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange?.(false);
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = [...panel.querySelectorAll<HTMLElement>(focusableSelector)].filter((node) => !node.hasAttribute("disabled") && !node.getAttribute("aria-hidden"));
      if (!focusable.length) { event.preventDefault(); panel.focus(); return; }

      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return panelRef;
}
