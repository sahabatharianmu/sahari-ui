import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./stepper";

const meta = { title: "Components/Stepper", component: Stepper } satisfies Meta<typeof Stepper>;
export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: { steps: ["Profil", "Jadwal", "Bayar"], current: 1 },
};

export const LastStep: Story = {
  args: { steps: ["Profil", "Jadwal", "Bayar"], current: 2 },
};
