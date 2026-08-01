import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("uses a native checkbox", async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Ingat saya" onChange={onChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Ingat saya" });
    await userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledOnce();
  });
});
