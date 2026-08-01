import type { Meta, StoryObj } from "@storybook/react-vite";
import { PulseOrb } from "./pulse-orb";

const meta = { title: "Signature/PulseOrb", component: PulseOrb } satisfies Meta<typeof PulseOrb>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CalmPulse: Story = {
  render: () => <PulseOrb size="lg" aria-label="Sahari calm pulse" />,
};
