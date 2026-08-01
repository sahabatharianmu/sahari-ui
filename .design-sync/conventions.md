## Setup — no provider, no wrapper

Sahari UI components are self-contained. There is no `ThemeProvider`/root wrapper to import or forget — just load `styles.css` (the bound copy at `_ds/<folder>/styles.css`) once per page; every component picks up tokens and styling from it automatically.

**Dark mode** is a single attribute, not a component: set `data-theme="dark"` on `<html>` (or any ancestor) to flip the whole token set — colors and shadows both have dark overrides baked into the tokens stylesheet. Omit it (or use `data-theme="light"`) for light mode. Nothing else changes.

## Styling idiom — base class + `data-*` attributes, not utility classes

Every component renders exactly one own class, `sh-<component>` (e.g. `sh-button`, `sh-card`, `sh-badge`), and expresses every variant/size/state as a `data-*` attribute on the root element — never as conditional class names, never as inline styles for variant logic:

```tsx
<button data-variant="primary" data-size="md" className="sh-button">…</button>
<div data-variant="tactile" data-interactive className="sh-card">…</div>
<span data-tone="success" className="sh-badge">…</span>
```

Common attribute vocabulary across the library: `data-variant` (primary/secondary/outline/ghost/danger on Button; flat/tactile on Card), `data-size` (sm/md/lg), `data-tone` (neutral/brand/success/warning/danger/info — Badge, Tag), `data-interactive`, `data-selected`, `data-disabled`. When composing your own layout around these components, follow the same pattern rather than reaching for utility classes — there are none to reach for; Tailwind is only the build tool that compiles `sh-*` component styles, it is not part of the consumer-facing API.

Style everything else — spacing, layout glue you add between components — with the design tokens directly as CSS custom properties, e.g. `padding: var(--space-4)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-card)`, `gap: var(--space-2)`. Common families: colors (`--purple-50`…`--purple-900`, `--neutral-0`…`--neutral-900`, semantic `--bg-surface`, `--bg-surface-sunken`, `--text-primary`, `--text-tertiary`, `--border-default`, `--state-danger-bg`/`-fg`), spacing (`--space-1` 4px … `--space-11` 80px), radius (`--radius-sm/md/lg/xl/pill`), shadow (`--shadow-xs/sm/md/lg`, `--shadow-card`, `--shadow-focus`, and the neumorphic `--shadow-neu-*` family used by elevated/brand surfaces), typography (`--font-display`, `--font-body`, `--fs-body-sm/body/body-lg`, `--fw-semibold`), motion (`--dur-base`, `--dur-fast`, `--ease-standard`).

## Where the truth lives

Read `styles.css` (and its `@import` closure, which pulls in the compiled component CSS and the full token set) before styling anything — it has the authoritative token values and every `sh-*` selector. Each component's own `.d.ts` is its prop contract; its `.prompt.md` has usage notes and variant examples. Don't guess a token or attribute value that isn't visible in one of these — the component's rendered previews are built from this exact bundle, so anything you can't find here isn't real.

## Example

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6)" }}>
  <div data-variant="flat" className="sh-card" style={{ padding: "var(--space-5)" }}>
    <span data-tone="brand" className="sh-badge">Terverifikasi</span>
    <button data-variant="primary" data-size="md" className="sh-button">Mulai</button>
  </div>
</div>
```
