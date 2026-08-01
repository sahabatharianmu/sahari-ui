Tappable icon+count control for likes/hearts on feed posts and comments — a lighter-weight sibling of `Tag` for one-tap toggles rather than selection.

```jsx
<Reaction icon={<span>♡</span>} activeIcon={<span>♥</span>} count={12} active={liked} onClick={() => setLiked(v => !v)} />
```

Swaps to `activeIcon` and tints red (`--state-danger-fg`, reused here only for its warmth, not as an error signal) when `active`. Keep `icon`/`activeIcon` outline vs. filled variants of the same glyph so the toggle reads clearly. Never show more than one `Reaction` type per post in this system — no reaction picker/multi-emoji bar, just a single like toggle.
