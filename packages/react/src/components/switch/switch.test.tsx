import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./switch";

describe("Switch", () => {
  it("uses a native switch input", async () => {
    const onChange = vi.fn();
    render(<Switch label="Notifikasi push" onChange={onChange} />);

    await userEvent.click(screen.getByRole("switch", { name: "Notifikasi push" }));
    expect(onChange).toHaveBeenCalledOnce();
  });
});
