import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Reaction } from "./reaction";

describe("Reaction", () => {
  it("toggles pressed state and reports count", async () => {
    const onClick = vi.fn();
    render(<Reaction aria-label="Dukung" icon={<span>♡</span>} activeIcon={<span>♥</span>} count={24} onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Dukung" });
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(button).toHaveTextContent("24");

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
