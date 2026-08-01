import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta = { title: "Components/Card", component: Card } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { variant: "flat", interactive: false, children: "Kartu untuk feed, daftar psikolog, dan dashboard." },
};

export const FlatAndTactile: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(2, minmax(220px, 1fr))", maxWidth: 640 }}>
      <Card>
        <strong>Flat card</strong>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>Untuk feed, daftar psikolog, dan dashboard yang perlu mudah dibaca.</p>
      </Card>
      <Card variant="tactile">
        <strong>Tactile card</strong>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>Untuk onboarding, empty state, dan momen sukses.</p>
      </Card>
    </div>
  ),
};
