Mobile-first alternative to `Dialog` for action lists and filters — anchors to the bottom edge with a drag handle instead of centering on screen.

```jsx
<BottomSheet open={open} title="Filter psikolog" onClose={() => setOpen(false)}
  actions={<Button variant="primary">Terapkan</Button>}>
  Konten filter di sini.
</BottomSheet>
```

Prefer `BottomSheet` over `Dialog` for anything reached from a bottom nav or a tap near the bottom of the screen (filters, action sheets, share options) — it keeps the interaction close to the thumb. Reserve `Dialog` for confirmations and short yes/no decisions that benefit from full-screen focus. `actions` stack vertically full-width, unlike `Dialog`'s right-aligned row.
