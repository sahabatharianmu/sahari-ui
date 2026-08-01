import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { Radio } from "../radio/radio";
import { BottomSheet } from "./bottom-sheet";

const meta = { title: "Components/BottomSheet" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function Demo() {
  const [open, setOpen] = React.useState(false);
  const [format, setFormat] = React.useState("video");

  return (
    <>
      <Button onClick={() => setOpen(true)}>Buka pilihan format</Button>
      <BottomSheet
        open={open}
        title="Pilih format sesi"
        onOpenChange={setOpen}
        actions={<Button onClick={() => setOpen(false)}>Simpan</Button>}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Radio name="sheet-format" label="Video call" checked={format === "video"} onChange={() => setFormat("video")} />
          <Radio name="sheet-format" label="Chat" checked={format === "chat"} onChange={() => setFormat("chat")} />
          <Radio name="sheet-format" label="Telepon" checked={format === "call"} onChange={() => setFormat("call")} />
        </div>
      </BottomSheet>
    </>
  );
}

export const FormatPicker: Story = { render: () => <Demo /> };
