# @sahari-ui/react

React primitives for Sahari, styled by `@sahari-ui/tokens` and Tailwind v4 CSS.

## Setup

```tsx
import "@sahari-ui/react/styles.css";
```

```tsx
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

## Components

- Avatar
- AvatarGroup
- Badge
- BottomNav
- BottomSheet
- Button
- Card
- Checkbox
- Dialog
- Divider
- EmptyState
- IconButton
- Input
- Menu
- PulseOrb
- Radio
- RatingInput
- Reaction
- Select
- SideNav
- Skeleton
- Spinner
- Stepper
- Switch
- Tabs
- Tag
- Textarea
- Toast
- Tooltip

## Icons

Primitives accept icons as `ReactNode`. Import Hugeicons in the app or story, not inside primitives.

```tsx
<Button icon={<CalendarIcon />}>Pilih jadwal</Button>
```

## Motion

Framer Motion is a peer dependency. Use it only for `Dialog`, `Toast`, `PulseOrb`, and real screen transitions.

## Design rule

Flat for reading; tactile/neumorphic for primary touch moments.

- Feed/list/dashboard cards: `Card variant="flat"`
- Onboarding/success/empty-state moments: `Card variant="tactile"`, `PulseOrb`

## Commands

```sh
pnpm --filter @sahari-ui/react build
pnpm --filter @sahari-ui/react test
pnpm --filter @sahari-ui/react typecheck
```

## Public API

Import from the package root only:

```tsx
import { Button } from "@sahari-ui/react";
```

Deep imports are intentionally not exported yet. Add subpath exports only when bundle analysis proves they are needed.
