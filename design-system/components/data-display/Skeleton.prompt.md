Loading placeholder that shimmers left-to-right — use to hold the shape of content (avatar, text lines, card) while it fetches, instead of a spinner, whenever the final layout is known ahead of time.

```jsx
<div style={{ display: "flex", flexDirection: "column", gap: 8, width: 220 }}>
  <Skeleton width={44} height={44} style={{ borderRadius: "50%" }} />
  <Skeleton width="70%" />
  <Skeleton width="40%" />
</div>
```

Stack multiple `Skeleton` blocks to mirror the real content's shape (circle for an avatar via `style`, varying widths for text lines). Prefer `Skeleton` over `Spinner`/`PulseOrb` for list/feed/card loading — reserve `Spinner` for buttons and small inline waits, and `PulseOrb` for the one-off brand moments (onboarding, booking success).
