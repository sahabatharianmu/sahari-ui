import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingInput } from "./rating-input";

const meta = { title: "Components/RatingInput" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <RatingInput label="Seberapa membantu sesi ini?" />,
};

export const Preselected: Story = {
  render: () => <RatingInput label="Rating kamu" defaultValue={4} />,
};
