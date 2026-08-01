import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

const sizes = { sm: 56, md: 96, lg: 160 } as const;
export type PulseOrbSize = keyof typeof sizes;
export type PulseOrbProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: PulseOrbSize;
  animated?: boolean;
};

export function PulseOrb({ size = "md", animated = true, className, style, ...props }: PulseOrbProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;
  return (
    <div className={cn("sh-pulse-orb", className)} style={{ ...style, "--sh-pulse-size": `${sizes[size]}px` } as React.CSSProperties} {...props}>
      <motion.span
        aria-hidden="true"
        className="sh-pulse-orb__ring"
        animate={shouldAnimate ? { scale: [0.85, 1.35, 1.35], opacity: [0.9, 0, 0] } : undefined}
        transition={shouldAnimate ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" } : undefined}
      />
      <span className="sh-pulse-orb__core" />
    </div>
  );
}
