Multi-step progress bar for linear flows — booking (pick psychologist → schedule → pay), KYC verification, onboarding.

```jsx
<Stepper steps={["Jadwal", "Pembayaran", "Konfirmasi"]} current={1} />
```

Segmented bars, not numbered circles — each step gets an equal-width bar plus a caption label underneath, filling brand-purple as steps complete. `current` is 0-based; the current and all prior steps read as "done" (filled). Use for a small, fixed number of steps (2–5) known up front — not for open-ended or branching flows.
