import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BottomSheet } from "./bottom-sheet";

describe("BottomSheet", () => {
  it("renders modal semantics, focuses the panel, and closes on Escape", async () => {
    const onOpenChange = vi.fn();
    render(<BottomSheet open title="Filter" onOpenChange={onOpenChange}>Pilih rentang harga</BottomSheet>);

    const sheet = screen.getByRole("dialog", { name: "Filter" });
    expect(sheet).toHaveTextContent("Pilih rentang harga");
    expect(sheet).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
