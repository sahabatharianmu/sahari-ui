import * as React from "react";
import { cn } from "../../lib/cn";

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";
export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  icon?: React.ReactNode;
};

export function Badge({ tone = "neutral", icon, children, className, ...props }: BadgeProps) {
  return (
    <span data-tone={tone} className={cn("sh-badge", className)} {...props}>
      {icon}
      {children}
    </span>
  );
}
