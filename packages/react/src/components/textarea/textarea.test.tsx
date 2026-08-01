import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("associates label and error", () => {
    render(<Textarea label="Catatan" error="Catatan terlalu pendek" />);

    const textarea = screen.getByLabelText("Catatan");
    expect(textarea).toHaveAccessibleDescription("Catatan terlalu pendek");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });
});
