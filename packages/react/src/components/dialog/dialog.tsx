import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useModalPanel } from "../../lib/use-modal-panel";

export type DialogProps = {
  open: boolean;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function Dialog({ open, title, children, actions, onOpenChange, className }: DialogProps) {
  const titleId = React.useId();
  const panelRef = useModalPanel(open, onOpenChange);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="sh-dialog__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onMouseDown={() => onOpenChange?.(false)}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className={cn("sh-dialog__panel", className)}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="sh-dialog__title">{title}</h2>
            <div className="sh-dialog__body">{children}</div>
            {actions ? <div className="sh-dialog__actions">{actions}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
