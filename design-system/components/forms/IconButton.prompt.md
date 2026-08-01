IconButton is a circular icon-only tap target — back arrows, header actions, post reactions.
```jsx
<IconButton icon={<Icon name="heart" />} variant="ghost" aria-label="Like" />
```
Always pass aria-label. Variants: surface (default — flat bordered card, use for standalone toolbar/header icons), solid (brand-filled, for a single primary icon action), ghost (transparent, for icons inside already-emphasized rows), inverse (translucent white, for use over photos/dark hero surfaces).