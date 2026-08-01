Card is the base rounded, softly-shadowed surface used everywhere content groups together.
```jsx
<Card><h3>Session with Dr. Amara</h3></Card>
```
Always radius-lg (16px), 1px subtle border, shadow-sm — never harsher shadows or square corners. Pass `interactive` + `onClick` when the whole card is tappable (a session in a list, a discovery result) — it adds a hover lift and a press-in on tap; leave it off for cards that just group static content.