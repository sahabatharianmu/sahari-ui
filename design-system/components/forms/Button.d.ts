/**
 * Pill-shaped call-to-action button, the primary interactive control across Sahari.
 */
export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Shows a spinner in place of `icon` and disables the button. */
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
