/**
 * Multi-line text field for posts, session notes, and longer form fields.
 */
export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  rows?: number;
  hint?: string;
  maxLength?: number;
}
