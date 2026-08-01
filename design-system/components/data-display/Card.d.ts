/**
 * Soft-elevated surface container — the base wrapper for posts, psychologist profiles, dashboard panels.
 */
export interface CardProps {
  children?: React.ReactNode;
  padding?: number;
  /** "flat" (default, for reading — feed posts, lists, dashboards) or "tactile" (soft neumorphic lift, reserved for onboarding/empty-state/confirmation moments). @default "flat" */
  variant?: "flat" | "tactile";
  /** Adds hover lift + press feedback and pointer cursor, for tappable cards (list rows, clickable panels). @default false */
  interactive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
