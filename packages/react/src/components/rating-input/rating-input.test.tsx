import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RatingInput } from "./rating-input";

describe("RatingInput", () => {
  it("is a radiogroup and reports the chosen star", async () => {
    const onValueChange = vi.fn();
    render(<RatingInput label="Beri rating" onValueChange={onValueChange} />);

    expect(screen.getByRole("radiogroup", { name: "Beri rating" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("radio", { name: "4 bintang" }));
    expect(onValueChange).toHaveBeenCalledWith(4);
    expect(screen.getByRole("radio", { name: "4 bintang" })).toBeChecked();
  });
});
