import * as React from "react";
import { cn } from "../../lib/cn";

export type CardVariant = "flat" | "tactile";
export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: number | string;
  /** Lifts on hover/press for tappable cards, e.g. a feed post. */
  interactive?: boolean;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "flat", padding, interactive, className, style, ...props }, ref) => (
    <div
      ref={ref}
      data-variant={variant}
      data-interactive={interactive || undefined}
      className={cn("sh-card", className)}
      style={{ ...style, ...(padding != null ? { "--sh-card-padding": typeof padding === "number" ? `${padding}px` : padding } : {}) } as React.CSSProperties}
      {...props}
    />
  ),
);
Card.displayName = "Card";
