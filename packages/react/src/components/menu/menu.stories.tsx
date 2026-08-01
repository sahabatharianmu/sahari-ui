import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "../icon-button/icon-button";
import { Menu } from "./menu";

const meta = { title: "Components/Menu" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function MoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19" cy="12" r="1.8" />
    </svg>
  );
}

export const PostActions: Story = {
  render: () => (
    <Menu
      label="Opsi cerita"
      align="end"
      trigger={<IconButton aria-label="Opsi lainnya" icon={<MoreIcon />} />}
      items={[
        { label: "Simpan cerita", onSelect: () => {} },
        { label: "Bagikan", onSelect: () => {} },
        { label: "Laporkan", tone: "danger", onSelect: () => {} },
      ]}
    />
  ),
};
