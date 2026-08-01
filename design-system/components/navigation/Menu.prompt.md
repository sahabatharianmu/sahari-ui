Dropdown action menu anchored to a trigger — report/delete/share on a post, the "⋯" on a session card, an avatar menu.

```jsx
<Menu
  trigger={<IconButton aria-label="More" icon={<span>⋯</span>} variant="ghost" />}
  items={[
    { label: "Bagikan", onSelect: () => {} },
    { label: "Simpan", onSelect: () => {} },
    { label: "Laporkan", tone: "danger", onSelect: () => {} },
  ]}
/>
```

`trigger` must be a single focusable element — pass any button-like component (usually `IconButton`), it gets cloned with the open/close wiring. `tone: "danger"` on an item tints it for destructive actions (report, delete, cancel booking) — use sparingly, one per menu. `align="end"` right-aligns the panel to the trigger, for triggers near the right edge (e.g. a card's top-right "⋯").
