/**
 * Small status pill for state labels — Verified, Pending, Online, Escalated.
 */
export interface BadgeProps { tone?: "neutral" | "brand" | "success" | "warning" | "danger" | "info"; children?: React.ReactNode; icon?: React.ReactNode; }
