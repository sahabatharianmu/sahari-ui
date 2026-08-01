export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "danger";
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
