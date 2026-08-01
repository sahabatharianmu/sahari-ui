import * as React from "react";
import { cn } from "../../lib/cn";

export type IconButtonVariant = "surface" | "solid" | "ghost" | "inverse";
export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: React.ReactNode;
  "aria-label": string;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "surface", size = "md", icon, className, type = "button", ...props }, ref) => (
    <button ref={ref} type={type} data-variant={variant} data-size={size} className={cn("sh-icon-button", className)} {...props}>
      {icon}
    </button>
  ),
);
IconButton.displayName = "IconButton";
