# Sahari Design System

Sahari is a mental-health platform for Indonesia combining a supportive social community with verified psychologist discovery, counseling booking, secure payments, notifications, and professional dashboards. This design system was originally a from-scratch foundation built from the brand brief alone; it has since been synced against the production component package (`packages/react/src/components` in the `sahari-ui` repo) so the inventory here matches the real, shipped components rather than a standalone guess.

**Sources provided:**
- `uploads/Icon Container.png` — the Sahari logomark (purple isometric flag/ribbon form), copied to `assets/logo/sahari-mark.png`.
- `uploads/sahari-mascot.svg` — attempted but unusable: the file's `<image>` element has no embedded pixel data (an empty pattern reference), so no mascot artwork could be extracted. Flagged below.
- Brand brief: primary purple `#834CFF` + shades, base background `#F9FBFD`, product tone (calm, trustworthy, warm, non-clinical), and required surfaces (social feed, psychologist discovery, booking/payment, professional dashboard, notifications/messages, admin/moderation).
- Production codebase: `packages/react/src/components` (28 components) and `packages/react/src/styles.css` — the source of truth this system's component previews are now kept in sync with.

## Content fundamentals
- Copy is written in **Bahasa Indonesia**, second person ("kamu", never the more formal "Anda") — warm and peer-like, the way a trusted friend talks, not a clinician.
- No emoji in UI chrome or component copy. Emoji appear only inside user-generated content (feed posts, chat messages) and are never used in system labels, buttons, or errors — mirroring how a support-forward but professional product avoids looking casual in its own voice while allowing users to be themselves.
- Sentence case throughout — no ALL CAPS except tiny uppercase eyebrow labels (e.g. caption-size section tags), never for buttons or headings.
- Error and empty states are phrased gently and instructively, never alarming: "Password must be 8+ characters," not "Invalid password." Payment/legal copy stays plain and reassuring: "Pembayaran aman & terenkripsi" (payment is safe & encrypted) rather than default gateway jargon.
- Sensitive flows (KYC, moderation, reports) use calm, procedural language — "Tinjau" (review), "Setujui" (approve) — avoiding punitive or clinical tone even in admin surfaces.

## Visual foundations
- **Color:** one brand hue (purple, `#834CFF` core) carries almost all emphasis — buttons, links, active states, verified badges. Neutrals are warm, purple-tinted grays (not blue-grays), keeping the whole UI feeling soft rather than corporate. Semantic colors (success/warning/danger/info) are intentionally muted — no saturated alarm red; "danger" is a dusty rose, reserved for destructive confirmations only.
- **Type:** a single family, Plus Jakarta Sans, for both display and body — geometric, rounded terminals, warm without being playful. Sizes stay conservative (body 15px, display 40px) — no oversized hero type; this is a utility/trust product, not a marketing site.
- **Backgrounds:** flat, no gradients, no photography-driven hero sections, no repeating patterns or textures. Sunken purple-tint panels (`--bg-surface-sunken`) stand in for illustration where a moment of warmth is needed (e.g. KYC reminders).
- **Shadows/elevation:** soft and diffuse, tinted slightly purple rather than pure black, at low opacity (`--shadow-sm` → `--shadow-lg`) — never a hard drop shadow.
- **Corners:** generously rounded — 12–16px on cards, full pill radius on buttons/tags/nav. No sharp corners anywhere in the system.
- **Borders:** hairline (1–1.5px), low-contrast neutral by default; brand purple only appears on focus.
- **Motion:** calm and deliberate — `ease-standard` (cubic-bezier(.4,0,.2,1)) or `ease-out`, 120–320ms. No bounce, no spring, no overshoot — motion should never startle in a mental-health context.
- **Elevation rule — "flat for reading, neumorphic for touch":** neumorphism is not a global style, it's reserved for the small set of tactile/primary moments (`Button` primary variant, active `BottomNav`/`Tabs` item, focused inputs, `Card variant="tactile"` for onboarding/empty-state/confirmation cards, `PulseOrb`). Everything read-heavy — feed posts, dashboard stats, lists, forms at rest — uses flat surfaces: `--bg-surface` + a 1px `--border-subtle/default` + `--shadow-card`, so content stays scannable and accessible.
- **Signature motif — "Sahari calm pulse":** a soft purple orb with a breathing glow (`PulseOrb` component), drawn from the logomark's ribbon form. Used only in onboarding hero, loading states, and booking/payment success confirmations — a single memorable moment rather than decoration on every surface.
- **Accessibility:** `Checkbox`/`Radio`/`Switch` are native `<input>` elements (visually hidden, keyboard/screen-reader operable) with a styled sibling, not clickable `<span>`s. Toast close and IconButton are real `<button>`s with `aria-label`. Dialog carries `role="dialog"`/`aria-modal`. Inputs use `<label htmlFor>` association.
- **Theming:** light is the default and primary experience. A dark theme is available by setting `data-theme="dark"` on `<html>` or any container — all semantic tokens (`--bg-*`, `--text-*`, `--border-*`, `--brand-*`, `--state-*-bg/fg`, neumorphic shadow pairs) flip to deep purple-black surfaces (`#161029` base) with lightened purple accents (`--purple-400` becomes the primary brand tone) and softer, lower-contrast neumorphic shadows. Components read only semantic tokens, so they theme automatically with no per-component changes. See the "Light / Dark Theme" card in Colors.
- **Hover/press states:** hover shifts to a slightly deeper tone of the same color (never a color swap); press states scale down slightly (0.98) rather than darkening hard.
- **Transparency/blur:** used sparingly — only on modal scrims (`rgba(25,21,41,0.45)` + light blur) to keep focus on the dialog without harsh black overlays.
- **Imagery:** none provided. Avatars fall back to initials on a light purple tint rather than generic silhouettes or stock photography, keeping the tone personal without requiring real photos.
- **Layout:** mobile-first single-column flows for the consumer app; a simple two-pane sidebar + content shell for the professional/admin web dashboard. Bottom tab bar is the fixed navigation anchor on mobile.

## Iconography
- **Hugeicons** is the adopted icon system going forward (Stroke Rounded style, 1.5px stroke, matching the brand's rounded-geometric feel). No Hugeicons files were provided yet, so current component chrome uses temporary stand-ins: plain Unicode glyphs (✓, ▾, ✕, ★) sized as text, and single-letter text badges (e.g. "N" for notifications) in place of icon buttons/nav — both flagged for replacement. Emoji has been removed from all UI chrome to match the no-emoji rule.
- **Next step to finish the swap:** provide the Hugeicons SVG/React package or a Hugeicons Figma link so the actual glyphs can be copied into `assets/icons/` and wired into `IconButton`, `BottomNav`, and UI kit chrome. Until then, treat any glyph/letter in this system as a placeholder for its Hugeicons equivalent.
- No unicode-as-brand-icon system is intended long-term.

## Fonts
No font files were provided. **Plus Jakarta Sans** was chosen as the nearest fit for "warm, modern, trustworthy" — a geometric humanist sans (coincidentally designed with Indonesian roots) loaded from Google Fonts CDN in `tokens/typography.css`. Flagged as a substitution — if the brand has existing licensed fonts, share the files and this will be swapped and self-hosted.

## Intentional additions
Since no component source was attached, the standard primitive set was authored from scratch, sized to the product's needs (forms, feedback, navigation, data display). One addition beyond the standard set: **PulseOrb** — a signature "calm pulse" motion mark (see Visual foundations) used only for onboarding/loading/success/empty-state moments.

## Components
Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, RatingInput, Card, PulseOrb, Avatar, AvatarGroup, Divider, EmptyState, Skeleton, Badge, Tag, Tooltip, Toast, Dialog, BottomSheet, Reaction, Spinner, Tabs, BottomNav, Menu, Stepper.

This inventory now mirrors the production component package at `packages/react/src/components` (28 components) — rebuilt against the real codebase per the note above, rather than the from-scratch set this system originally shipped with.

## Index
- `styles.css` — root stylesheet, imports all tokens.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`.
- `assets/logo/` — Sahari logomark (`sahari-mark.png`).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Motion).
- `components/forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, RatingInput.
- `components/feedback/` — Badge, Tag, Tooltip, Toast, Dialog, BottomSheet, Reaction, Spinner.
- `components/navigation/` — Tabs, BottomNav, Menu, Stepper.
- `components/data-display/` — Card, Avatar, AvatarGroup, Divider, EmptyState, Skeleton.
- `ui_kits/app/` — mobile consumer app: social feed, psychologist discovery, booking + payment flow, messages, notifications, profile settings.
- `ui_kits/dashboard/` — professional web dashboard (schedule, earnings, clients) + admin moderation queue (reported posts, psychologist KYC review).
- `SKILL.md` — portable skill definition for use in Claude Code or other agents.
