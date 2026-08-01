/**
 * Single-line text field with label, hint, and error states.
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}
