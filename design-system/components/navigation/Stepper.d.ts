export interface StepperProps {
  steps: string[];
  /** 0-based index of the active step. */
  current: number;
}
/** Multi-step progress indicator for flows like booking or KYC. */
export function Stepper(props: StepperProps): JSX.Element;
