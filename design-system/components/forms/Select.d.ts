/**
 * Native dropdown select for short lists — city, specialty, gender, sort order.
 */
export interface SelectOption { label: string; value: string; }
export interface SelectProps {
  label?: string;
  options?: (SelectOption | string)[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
}
