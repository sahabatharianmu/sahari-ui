import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";

const topics = [
  { label: "Kecemasan", value: "anxiety" },
  { label: "Hubungan", value: "relationship" },
  { label: "Stres kerja", value: "work-stress" },
];

const meta = { title: "Components/Select", component: Select } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: { label: "Topik", placeholder: "Pilih topik", options: topics },
};

export const Preselected: Story = {
  args: { label: "Topik", defaultValue: "anxiety", options: topics },
};

export const WithHint: Story = {
  name: "With hint",
  args: { label: "Topik", placeholder: "Pilih topik", hint: "Bisa diubah kapan saja.", options: topics },
};

export const WithError: Story = {
  name: "With error",
  args: { label: "Topik", placeholder: "Pilih topik", error: "Pilih topik terlebih dahulu.", options: topics },
};

export const Disabled: Story = {
  args: { label: "Metode", defaultValue: "video", disabled: true, options: [{ label: "Video call", value: "video" }] },
};
