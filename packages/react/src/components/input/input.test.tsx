import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("associates label, hint, and error", () => {
    render(<Input label="Email" hint="Gunakan email aktif" error="Email wajib diisi" />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAccessibleDescription("Email wajib diisi");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Email wajib diisi");
  });

  it("keeps an explicit id", () => {
    render(<Input id="email-field" label="Email" />);
    expect(screen.getByLabelText("Email")).toHaveAttribute("id", "email-field");
  });
});
