Centered placeholder for empty lists, zero search results, or cleared inboxes — gentle and instructive, never alarming.

```jsx
<EmptyState
  icon={<span>💬</span>}
  title="Belum ada pesan"
  description="Percakapanmu dengan psikolog akan muncul di sini setelah booking pertama."
  action={<Button variant="primary" size="sm">Cari psikolog</Button>}
/>
```

`tone="danger"` is reserved for error/failed-load states (icon circle switches to the muted danger tint) — everything else stays neutral. Icon should be a real Hugeicons glyph in production; the emoji/unicode above is a placeholder like the rest of this system. Pair with `PulseOrb` instead of a plain icon for onboarding-flavored empty states (first-run, not "no results").
