import * as React from "react";
import { cn } from "../../lib/cn";

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21Z" />
    </svg>
  );
}

export type RatingInputProps = {
  label?: React.ReactNode;
  name?: string;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  id?: string;
  className?: string;
};

/** 5-star picker built on native radios, so keyboard/screen-reader support comes for free. */
export function RatingInput({ label, name, value, defaultValue = 0, onValueChange, max = 5, id, className }: RatingInputProps) {
  const generatedId = React.useId();
  const groupId = id ?? generatedId;
  const groupName = name ?? groupId;

  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const current = value ?? internalValue;

  const commit = (next: number) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  };

  const stars = Array.from({ length: max }, (_, i) => max - i);

  return (
    <div className={cn("sh-field", className)} style={{ gap: 6 }}>
      {label ? <span className="sh-field__label">{label}</span> : null}
      <div className="sh-rating" role="radiogroup" aria-label={typeof label === "string" ? label : "Rating"}>
        {stars.map((n) => {
          const starId = `${groupId}-${n}`;
          return (
            <React.Fragment key={n}>
              <input
                type="radio"
                id={starId}
                name={groupName}
                value={n}
                checked={current === n}
                onChange={() => commit(n)}
                className="sh-sr-only"
              />
              <label htmlFor={starId} className="sh-rating__star">
                <StarIcon />
                <span className="sh-sr-only">{n} bintang</span>
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
