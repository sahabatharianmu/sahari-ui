/**
 * Circular icon-only button for toolbars, headers, and card actions.
 */
export interface IconButtonProps {
  icon: React.ReactNode;
  /** @default "surface" */
  variant?: "surface" | "solid" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label": string;
}
