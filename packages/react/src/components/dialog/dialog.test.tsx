import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Dialog } from "./dialog";

describe("Dialog", () => {
  it("renders modal semantics, focuses panel, and closes on Escape", async () => {
    const onOpenChange = vi.fn();
    render(<Dialog open title="Konfirmasi" onOpenChange={onOpenChange}>Lanjutkan booking?</Dialog>);

    const dialog = screen.getByRole("dialog", { name: "Konfirmasi" });
    expect(dialog).toHaveTextContent("Lanjutkan booking?");
    expect(dialog).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("traps focus inside the panel", async () => {
    render(
      <Dialog
        open
        title="Konfirmasi"
        actions={(
          <>
            <button type="button">Kembali</button>
            <button type="button">Lanjut bayar</button>
          </>
        )}
      />,
    );

    const first = screen.getByRole("button", { name: "Kembali" });
    const last = screen.getByRole("button", { name: "Lanjut bayar" });

    first.focus();
    await userEvent.tab({ shift: true });
    expect(last).toHaveFocus();

    await userEvent.tab();
    expect(first).toHaveFocus();
  });

  it("restores focus when closed", () => {
    const { rerender } = render(<><button type="button">Buka dialog</button><Dialog open={false} title="Konfirmasi" /></>);
    screen.getByRole("button", { name: "Buka dialog" }).focus();

    rerender(<><button type="button">Buka dialog</button><Dialog open title="Konfirmasi" /></>);
    expect(screen.getByRole("dialog", { name: "Konfirmasi" })).toHaveFocus();

    rerender(<><button type="button">Buka dialog</button><Dialog open={false} title="Konfirmasi" /></>);
    expect(screen.getByRole("button", { name: "Buka dialog" })).toHaveFocus();
  });
});
