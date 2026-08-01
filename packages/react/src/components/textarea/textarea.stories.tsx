import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";

const meta = { title: "Components/Textarea", component: Textarea } satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { label: "Catatan", placeholder: "Ceritakan singkat yang ingin kamu bahas.", rows: 3 },
};

export const WithError: Story = {
  name: "With error",
  args: { label: "Catatan", error: "Catatan minimal 10 karakter.", rows: 3 },
};
