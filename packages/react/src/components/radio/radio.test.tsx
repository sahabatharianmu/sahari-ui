import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Radio } from "./radio";

describe("Radio", () => {
  it("uses a native radio input", async () => {
    const onChange = vi.fn();
    render(<Radio name="format" label="Video call" onChange={onChange} />);

    await userEvent.click(screen.getByRole("radio", { name: "Video call" }));
    expect(onChange).toHaveBeenCalledOnce();
  });
});
