import * as React from "react";
import { cn } from "../../lib/cn";

export type SelectOption = { label: React.ReactNode; value: string };
export type SelectProps = {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  "aria-describedby"?: string;
};

/** Custom listbox so the dropdown looks the same on every platform, unlike a native `<select>`. */
export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ label, hint, error, placeholder, options, value, defaultValue, onValueChange, name, disabled, id, className, "aria-describedby": describedBy }, forwardedRef) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const labelId = `${selectId}-label`;
    const messageId = hint || error ? `${selectId}-message` : undefined;
    const listboxId = `${selectId}-listbox`;

    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const currentValue = value ?? internalValue;
    const selected = options.find((option) => option.value === currentValue);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const optionRefs = React.useRef<Array<HTMLLIElement | null>>([]);
    React.useImperativeHandle(forwardedRef, () => triggerRef.current as HTMLButtonElement);

    const commit = (next: string) => {
      if (value === undefined) setInternalValue(next);
      onValueChange?.(next);
    };

    const openListbox = () => {
      if (disabled) return;
      setOpen(true);
    };

    const closeListbox = (focusTrigger = true) => {
      setOpen(false);
      if (focusTrigger) triggerRef.current?.focus();
    };

    React.useEffect(() => {
      if (!open) return;
      const selectedIndex = Math.max(options.findIndex((option) => option.value === currentValue), 0);
      optionRefs.current[selectedIndex]?.focus();

      const onPointerDown = (event: MouseEvent) => {
        if (!containerRef.current?.contains(event.target as Node)) closeListbox(false);
      };
      document.addEventListener("mousedown", onPointerDown);
      return () => document.removeEventListener("mousedown", onPointerDown);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const focusOption = (index: number) => {
      const clamped = Math.max(0, Math.min(options.length - 1, index));
      optionRefs.current[clamped]?.focus();
    };

    const onOptionKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, index: number) => {
      if (event.key === "ArrowDown") { event.preventDefault(); focusOption(index + 1); }
      if (event.key === "ArrowUp") { event.preventDefault(); focusOption(index - 1); }
      if (event.key === "Home") { event.preventDefault(); focusOption(0); }
      if (event.key === "End") { event.preventDefault(); focusOption(options.length - 1); }
      if (event.key === "Escape") { event.preventDefault(); closeListbox(); }
      if (event.key === "Tab") closeListbox(false);
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const option = options[index];
        if (option) { commit(option.value); closeListbox(); }
      }
    };

    return (
      <div className={cn("sh-field", className)} data-invalid={Boolean(error)} ref={containerRef} style={{ position: "relative" }}>
        {label ? <label id={labelId} className="sh-field__label" htmlFor={selectId}>{label}</label> : null}

        <button
          ref={triggerRef}
          type="button"
          id={selectId}
          disabled={disabled}
          className="sh-field__control sh-select-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-labelledby={label ? labelId : undefined}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={[describedBy, messageId].filter(Boolean).join(" ") || undefined}
          onClick={() => (open ? closeListbox() : openListbox())}
          onKeyDown={(event) => {
            if ((event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") && !open) { event.preventDefault(); openListbox(); }
          }}
        >
          <span className="sh-field__input sh-select-trigger__value" data-placeholder={!selected}>{selected ? selected.label : placeholder ?? "Pilih"}</span>
          <svg className="sh-select__chevron" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {name ? <input type="hidden" name={name} value={currentValue} /> : null}

        {open ? (
          <ul id={listboxId} role="listbox" aria-labelledby={label ? labelId : undefined} className="sh-select__listbox">
            {options.map((option, index) => (
              <li
                key={option.value}
                ref={(node) => { optionRefs.current[index] = node; }}
                role="option"
                tabIndex={-1}
                aria-selected={option.value === currentValue}
                className="sh-select__option"
                onClick={() => { commit(option.value); closeListbox(); }}
                onKeyDown={(event) => onOptionKeyDown(event, index)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        ) : null}

        {error ? <span id={messageId} role="alert" className="sh-field__message" data-tone="danger">{error}</span> : hint ? <span id={messageId} className="sh-field__message">{hint}</span> : null}
      </div>
    );
  },
);
Select.displayName = "Select";
