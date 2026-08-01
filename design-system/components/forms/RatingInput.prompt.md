Star picker for rating a completed session, right after booking wraps up.

```jsx
<RatingInput label="Beri rating sesi ini" value={rating} onValueChange={setRating} />
```

Stars fill amber (`--amber-500` — the one place this system departs from pure purple/neutral, since a star rating reads oddly in brand purple) on hover-preview and on selection. Uncontrolled by default (`defaultValue`); pass `value`+`onValueChange` to control it from a form. Use only for post-session/booking feedback — not a generic "rate this" widget elsewhere in the product.
