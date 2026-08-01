Stacked, overlapping avatars with a "+N" overflow — use for "liked by Rani, Budi +12 others" or session participant lists.

```jsx
<AvatarGroup people={[{ name: "Rani" }, { name: "Budi Santoso" }, { name: "Sinta" }]} max={2} size="sm" />
```

Each avatar overlaps the previous by 10px and gets a 2px surface-color ring so they read as a stack, not a pile. Falls back to initials exactly like `Avatar` when no `src` is given. Keep `size` small (sm/md) for inline social-proof rows; only use lg/xl for a small, deliberate group (e.g. a 2-person booking confirmation).
