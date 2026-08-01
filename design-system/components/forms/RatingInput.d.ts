export interface RatingInputProps {
  label?: React.ReactNode;
  value?: number;
  /** @default 0 */
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  /** @default 5 */
  max?: number;
}
/** 5-star picker for post-session feedback. */
export function RatingInput(props: RatingInputProps): JSX.Element;
