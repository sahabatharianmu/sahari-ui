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

## Release

Packages publish to npm via GitHub Actions using [npm trusted publishing](https://docs.npmjs.com/trusted-publishers) (OIDC) — no `NPM_TOKEN` secret.

```sh
git tag v0.1.0
git push origin v0.1.0
```

This triggers `.github/workflows/publish.yml`, which builds, tests, typechecks, then publishes `@sahari-ui/tokens` and `@sahari-ui/react` in lockstep (`pnpm publish` rewrites `workspace:*` to the real version automatically). Can also be run manually via the Actions tab (`workflow_dispatch`).

**One-time npm setup** (see `.github/workflows/publish.yml` for the CI side):
1. Create the `sahari-ui` npm organization (or user) so the `@sahari-ui` scope exists.
2. Publish once manually (`npm login`, then `pnpm --filter @sahari-ui/tokens publish --access public` and the same for `react`) to reserve both package names — trusted publishing can only be configured for packages that already exist on the registry.
3. On each package's npm page: Settings → Trusted Publisher → GitHub Actions → repo `sahabatharianmu/sahari-ui`, workflow `publish.yml`, environment `npm-publish`.
4. In the GitHub repo: Settings → Environments → create `npm-publish` (add required reviewers if you want a manual approval gate before publish).

## Rules

- Flat surfaces for reading; tactile/neumorphic only for primary touch moments.
- Icons are passed as `ReactNode`; use Hugeicons at app/story level.
- Framer Motion only for dialog, toast, pulse/screen moments.
- Import React components from `@sahari-ui/react`, not component internals.
- Keep raw `design-system/` as reference; production code lives in `packages/`.
