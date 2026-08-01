import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders variant and size data attributes", () => {
    render(<Button variant="secondary" size="lg">Lanjut</Button>);
    const button = screen.getByRole("button", { name: "Lanjut" });
    expect(button).toHaveAttribute("data-variant", "secondary");
    expect(button).toHaveAttribute("data-size", "lg");
  });

  it("defaults to type button", () => {
    render(<Button>Simpan</Button>);
    expect(screen.getByRole("button", { name: "Simpan" })).toHaveAttribute("type", "button");
  });

  it("disables and marks itself busy while loading", () => {
    render(<Button loading>Simpan</Button>);
    const button = screen.getByRole("button", { name: "Simpan" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });
});
