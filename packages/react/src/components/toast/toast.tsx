import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

export type ToastTone = "success" | "info" | "warning";
export type ToastProps = {
  tone?: ToastTone;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  id?: string;
};

export type ToastViewportProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "top-right" | "bottom-right" | "bottom-center";
};

export function ToastViewport({ position = "bottom-right", className, ...props }: ToastViewportProps) {
  return <div role="region" aria-label="Notifikasi" data-position={position} className={cn("sh-toast-viewport", className)} {...props} />;
}

export function Toast({ tone = "info", title, description, onClose, className, id }: ToastProps) {
  return (
    <motion.div
      role="status"
      data-tone={tone}
      className={cn("sh-toast", className)}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      id={id}
    >
      <span className="sh-toast__dot" aria-hidden="true" />
      <span style={{ flex: 1 }}>
        <span className="sh-toast__title">{title}</span>
        {description ? <span className="sh-toast__description">{description}</span> : null}
      </span>
      {onClose ? <button type="button" className="sh-toast__close" aria-label="Tutup" onClick={onClose}>✕</button> : null}
    </motion.div>
  );
}
