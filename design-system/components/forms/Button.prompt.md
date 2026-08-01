Button is the primary tappable action across Sahari — use for CTAs, form submits, and confirmations.
```jsx
<Button variant="primary" size="md">Book session</Button>
```
Variants: primary (solid purple, filled actions), secondary (soft purple, secondary actions), ghost (text-only, low emphasis), outline (bordered, neutral actions), danger (destructive, e.g. cancel booking). Sizes: sm/md/lg. Always full pill radius — never square. Pass `loading` during an async submit — it swaps `icon` for a spinner and disables the button; don't pass `icon` and `loading` together.