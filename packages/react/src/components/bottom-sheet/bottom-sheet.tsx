import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useModalPanel } from "../../lib/use-modal-panel";

export type BottomSheetProps = {
  open: boolean;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

/** Mobile-first alternative to `Dialog` for actions/filters — slides up from the bottom instead of centering. */
export function BottomSheet({ open, title, children, actions, onOpenChange, className }: BottomSheetProps) {
  const titleId = React.useId();
  const panelRef = useModalPanel(open, onOpenChange);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="sh-sheet__overlay"
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
            className={cn("sh-sheet__panel", className)}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <span className="sh-sheet__handle" aria-hidden="true" />
            <h2 id={titleId} className="sh-sheet__title">{title}</h2>
            <div className="sh-sheet__body">{children}</div>
            {actions ? <div className="sh-sheet__actions">{actions}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
