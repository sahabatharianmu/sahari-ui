import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./checkbox";
import { Radio } from "../radio/radio";
import { Switch } from "../switch/switch";

const meta = { title: "Components/Choices", component: Checkbox } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Choices: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 14 }}>
      <Checkbox label="Ingat saya" defaultChecked />
      <Radio label="Video call" name="format" defaultChecked />
      <Radio label="Chat" name="format" />
      <Checkbox label="Saya setuju" disabled />
      <Switch label="Notifikasi push" defaultChecked />
      <Switch label="Mode privat" disabled />
    </div>
  ),
};
