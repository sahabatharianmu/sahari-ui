import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toast, ToastViewport } from "./toast";

describe("Toast", () => {
  it("renders inside a notification viewport", () => {
    render(
      <ToastViewport>
        <Toast tone="success" title="Pembayaran berhasil" description="Sesi masuk jadwal." />
      </ToastViewport>,
    );

    expect(screen.getByRole("region", { name: "Notifikasi" })).toHaveAttribute("data-position", "bottom-right");
    expect(screen.getByRole("status")).toHaveTextContent("Pembayaran berhasil");
  });
});
