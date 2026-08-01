export interface SpinnerProps {
  /** @default 16 */
  size?: number;
  /** Pass a label to announce this as a standalone loading indicator; omit when decorative inside a labeled control like `Button`. */
  label?: string;
  style?: React.CSSProperties;
}
export function Spinner(props?: SpinnerProps): JSX.Element;
