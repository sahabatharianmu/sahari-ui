import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "../icon-button/icon-button";
import { Tooltip } from "./tooltip";

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

const meta = { title: "Components/Tooltip" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const OnIconButton: Story = {
  render: () => (
    <div style={{ padding: 40 }}>
      <Tooltip label="Cerita ini anonim">
        <IconButton aria-label="Info anonim" icon={<InfoIcon />} />
      </Tooltip>
    </div>
  ),
};
