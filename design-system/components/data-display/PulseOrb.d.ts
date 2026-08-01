export interface PulseOrbProps {
  /** Orb diameter preset. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Whether the soft outward pulse ring animates. @default true */
  animated?: boolean;
}
export function PulseOrb(props: PulseOrbProps): JSX.Element;
