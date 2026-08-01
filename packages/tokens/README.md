# @sahari-ui/tokens

Framework-agnostic Sahari design tokens as CSS custom properties.

## Usage

```ts
import "@sahari-ui/tokens";
```

Or import a slice:

```ts
import "@sahari-ui/tokens/colors.css";
import "@sahari-ui/tokens/typography.css";
```

## Exports

| Export | File |
|---|---|
| `@sahari-ui/tokens` | all tokens |
| `@sahari-ui/tokens/colors.css` | color + theme tokens |
| `@sahari-ui/tokens/typography.css` | font/type scale |
| `@sahari-ui/tokens/spacing.css` | spacing/radius/container |
| `@sahari-ui/tokens/elevation.css` | shadows/motion/reduced motion |

## Theme

Dark theme is opt-in:

```html
<div data-theme="dark">...</div>
```

## Rule

Use semantic tokens first: `--bg-surface`, `--text-primary`, `--brand-primary`, `--border-default`. Reach for raw scale tokens only when creating new primitives.
