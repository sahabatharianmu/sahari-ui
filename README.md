# Sahari UI

Design-system workspace for Sahari.

## Packages

| Path | Package | Purpose |
|---|---|---|
| `packages/tokens` | `@sahari-ui/tokens` | Framework-agnostic CSS tokens. |
| `packages/react` | `@sahari-ui/react` | React primitives styled with Sahari tokens + Tailwind v4 CSS. |
| `apps/storybook` | `@sahari-ui/storybook` | Component docs and visual QA. |
| `design-system` | raw reference | Claude-generated reference/moodboard, not production source. |

## Setup

```sh
pnpm install
```

## Commands

```sh
pnpm build
pnpm test
pnpm typecheck
pnpm storybook
pnpm --filter @sahari-ui/storybook build
```

## Usage

```tsx
import "@sahari-ui/react/styles.css";
import { Button, Card, Input } from "@sahari-ui/react";

export function Example() {
  return (
    <Card>
      <Input label="Email" placeholder="nama@email.com" />
      <Button>Mulai</Button>
    </Card>
  );
}
```

## Rules

- Flat surfaces for reading; tactile/neumorphic only for primary touch moments.
- Icons are passed as `ReactNode`; use Hugeicons at app/story level.
- Framer Motion only for dialog, toast, pulse/screen moments.
- Import React components from `@sahari-ui/react`, not component internals.
- Keep raw `design-system/` as reference; production code lives in `packages/`.
