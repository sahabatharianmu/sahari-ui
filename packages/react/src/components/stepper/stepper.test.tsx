import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stepper } from "./stepper";

describe("Stepper", () => {
  it("marks the current step and completed steps as done", () => {
    render(<Stepper steps={["Profil", "Jadwal", "Bayar"]} current={1} />);

    const jadwal = screen.getByText("Jadwal").closest("[data-done]");
    expect(jadwal).toHaveAttribute("data-done", "true");
    expect(jadwal).toHaveAttribute("aria-current", "step");

    const bayar = screen.getByText("Bayar").closest("[data-done]");
    expect(bayar).toHaveAttribute("data-done", "false");
    expect(bayar).not.toHaveAttribute("aria-current");
  });
});
