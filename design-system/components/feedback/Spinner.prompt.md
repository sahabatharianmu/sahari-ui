Small rotating ring for inline/short waits — inside a loading `Button`, next to a submitting form, or a brief inline fetch.

```jsx
<Spinner size={20} label="Memuat" />
```

Uses `currentColor`, so it inherits whatever text color it's placed in (white inside a primary `Button`, `--text-secondary` inline). Omit `label` when it's purely decorative next to visible loading text (e.g. inside `Button`'s own `loading` state) to avoid a redundant screen-reader announcement; pass one when it stands alone. For anything longer than a couple seconds or shaped like real content, prefer `Skeleton`; for the one signature brand loading moment, use `PulseOrb`.
