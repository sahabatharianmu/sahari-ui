import * as React from "react";

/** SSR-safe `matchMedia` subscription, e.g. `useMediaQuery("(min-width: 768px)")`. */
export function useMediaQuery(query: string): boolean {
  const getSnapshot = React.useCallback(() => typeof window !== "undefined" && window.matchMedia(query).matches, [query]);
  const subscribe = React.useCallback(
    (onChange: () => void) => {
      if (typeof window === "undefined") return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );
  return React.useSyncExternalStore(subscribe, getSnapshot, () => false);
}
