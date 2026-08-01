import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

export type ReactionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  count?: number;
  active?: boolean;
};

export const Reaction = React.forwardRef<HTMLButtonElement, ReactionProps>(
  ({ icon, activeIcon, count, active, className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      aria-pressed={!!active}
      data-active={active}
      className={cn("sh-reaction", className)}
      {...props}
    >
      <motion.span
        className="sh-reaction__icon"
        aria-hidden="true"
        animate={active ? { scale: [1, 1.35, 1] } : { scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {active && activeIcon ? activeIcon : icon}
      </motion.span>
      {count != null ? <span className="sh-reaction__count">{count}</span> : null}
    </button>
  ),
);
Reaction.displayName = "Reaction";
