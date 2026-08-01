import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { Dialog } from "./dialog";

const meta = { title: "Components/Dialog" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmBooking: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Konfirmasi booking</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Konfirmasi sesi"
          actions={(
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Kembali</Button>
              <Button onClick={() => setOpen(false)}>Lanjut bayar</Button>
            </>
          )}
        >
          Kamu akan memesan sesi video call Kamis, 14:00 dengan Dr. Amara Putri.
        </Dialog>
      </>
    );
  },
};
