import * as React from "react";
import { cn } from "../../lib/cn";

export type ComboboxOption = { label: string; value: string };
export type ComboboxProps = {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  placeholder?: string;
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Fires on every keystroke — hook this up for server-side/async filtering. Local options are still filtered by the built-in query for immediate feedback. */
  onQueryChange?: (query: string) => void;
  emptyMessage?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  className?: string;
  "aria-describedby"?: string;
};

/** Type-to-filter select, e.g. searching a long psychologist or topic list. Implements the ARIA combobox-with-listbox pattern (focus stays on the input; options are highlighted via `aria-activedescendant`). */
export const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  ({ label, hint, error, placeholder, options, value, defaultValue, onValueChange, onQueryChange, emptyMessage = "Tidak ditemukan", disabled, id, className, "aria-describedby": describedBy }, forwardedRef) => {
    const generatedId = React.useId();
    const comboId = id ?? generatedId;
    const labelId = `${comboId}-label`;
    const listboxId = `${comboId}-listbox`;
    const messageId = hint || error ? `${comboId}-message` : undefined;

    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const currentValue = value ?? internalValue;
    const selected = options.find((option) => option.value === currentValue);

    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState(selected?.label ?? "");
    const [highlighted, setHighlighted] = React.useState(0);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(forwardedRef, () => inputRef.current as HTMLInputElement);

    // Keep the displayed text in sync when the committed value changes elsewhere.
    React.useEffect(() => {
      if (!open) setQuery(selected?.label ?? "");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue, open]);

    const filtered = query.trim() && (!selected || query !== selected.label)
      ? options.filter((option) => option.label.toLowerCase().includes(query.trim().toLowerCase()))
      : options;

    const commit = (option: ComboboxOption) => {
      if (value === undefined) setInternalValue(option.value);
      onValueChange?.(option.value);
      setQuery(option.label);
      setOpen(false);
      inputRef.current?.focus();
    };

    const openList = () => { if (!disabled) { setOpen(true); setHighlighted(0); } };

    React.useEffect(() => {
      if (!open) return;
      const onPointerDown = (event: MouseEvent) => {
        if (!containerRef.current?.contains(event.target as Node)) {
          setOpen(false);
          setQuery(selected?.label ?? "");
        }
      };
      document.addEventListener("mousedown", onPointerDown);
      return () => document.removeEventListener("mousedown", onPointerDown);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, selected]);

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!open) { openList(); return; }
        setHighlighted((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlighted((i) => Math.max(i - 1, 0));
      }
      if (event.key === "Enter") {
        event.preventDefault();
        const option = filtered[highlighted];
        if (open && option) commit(option);
      }
      if (event.key === "Escape") {
        if (open) { event.preventDefault(); setOpen(false); setQuery(selected?.label ?? ""); }
      }
    };

    const activeOptionId = open && filtered[highlighted] ? `${comboId}-option-${highlighted}` : undefined;

    return (
      <div className={cn("sh-field", className)} data-invalid={Boolean(error)} ref={containerRef} style={{ position: "relative" }}>
        {label ? <label id={labelId} className="sh-field__label" htmlFor={comboId}>{label}</label> : null}

        <div className="sh-field__control">
          <input
            ref={inputRef}
            id={comboId}
            role="combobox"
            className="sh-field__input"
            autoComplete="off"
            disabled={disabled}
            placeholder={placeholder}
            value={query}
            aria-expanded={open}
            aria-controls={listboxId}
            aria-activedescendant={activeOptionId}
            aria-autocomplete="list"
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={[describedBy, messageId].filter(Boolean).join(" ") || undefined}
            onFocus={openList}
            onClick={openList}
            onChange={(event) => {
              const next = event.target.value;
              setQuery(next);
              setHighlighted(0);
              setOpen(true);
              onQueryChange?.(next);
            }}
            onKeyDown={onKeyDown}
          />
        </div>

        {open ? (
          <ul id={listboxId} role="listbox" aria-labelledby={label ? labelId : undefined} className="sh-select__listbox">
            {filtered.length === 0 ? (
              <li className="sh-select__option" aria-disabled="true" style={{ color: "var(--text-tertiary)", cursor: "default" }}>{emptyMessage}</li>
            ) : (
              filtered.map((option, index) => (
                <li
                  key={option.value}
                  id={`${comboId}-option-${index}`}
                  role="option"
                  aria-selected={option.value === currentValue}
                  data-highlighted={index === highlighted}
                  className="sh-select__option"
                  onMouseEnter={() => setHighlighted(index)}
                  onMouseDown={(event) => { event.preventDefault(); commit(option); }}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        ) : null}

        {error ? <span id={messageId} role="alert" className="sh-field__message" data-tone="danger">{error}</span> : hint ? <span id={messageId} className="sh-field__message">{hint}</span> : null}
      </div>
    );
  },
);
Combobox.displayName = "Combobox";
