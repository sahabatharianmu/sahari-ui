import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Badge } from "../components/badge/badge";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { IconButton } from "../components/icon-button/icon-button";
import { Radio } from "../components/radio/radio";
import { Stepper } from "../components/stepper/stepper";
import { Toast, ToastViewport } from "../components/toast/toast";

const meta = { title: "Compositions/Booking" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const psychologist = {
  name: "Dr. Amara Putri, M.Psi",
  spec: "Kecemasan",
  rating: 4.9,
  sessions: 320,
  price: "Rp150rb",
  online: true,
};

const slots = ["Kamis, 14:00", "Kamis, 16:00", "Jumat, 10:00"];
const steps = ["Profil", "Jadwal", "Bayar", "Selesai"] as const;

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", padding: "4px 0" }}>
      <span>{label}</span>
      <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function BookingDemo() {
  const [step, setStep] = React.useState(0);
  const [format, setFormat] = React.useState("video");
  const [slot, setSlot] = React.useState<string>(slots[0]!);
  const [paying, setPaying] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  const pay = () => {
    setPaying(true);
    setTimeout(() => { setPaying(false); setStep(3); setShowToast(true); }, 900);
  };

  return (
    <div style={{ width: 390, minHeight: 560, display: "flex", flexDirection: "column", gap: 16, background: "var(--bg-base)", padding: 18, fontFamily: "var(--font-body)" }}>
      {step < 3 ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <IconButton aria-label="Kembali" variant="ghost" size="sm" icon={<ChevronLeftIcon />} onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} />
            <div style={{ flex: 1 }}><Stepper steps={steps.slice(0, 3)} current={step} /></div>
          </div>

          {step === 0 ? (
            <>
              <Card>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Avatar name={psychologist.name} size="xl" online={psychologist.online} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 17, color: "var(--text-primary)" }}>{psychologist.name}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)", margin: "2px 0 6px" }}>{psychologist.spec} · ★ {psychologist.rating}</div>
                    <Badge tone="brand">Terverifikasi STR</Badge>
                  </div>
                </div>
                <p style={{ margin: "14px 0 0", fontSize: 14, color: "var(--text-secondary)", lineHeight: "var(--lh-body)" }}>
                  Berpengalaman {psychologist.sessions}+ sesi. Pendekatan hangat, mendengarkan tanpa menghakimi, berbasis CBT.
                </p>
              </Card>
              <Button size="lg" onClick={() => setStep(1)} style={{ marginTop: "auto" }}>Pilih jadwal</Button>
            </>
          ) : null}

          {step === 1 ? (
            <>
              <Card>
                <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Format sesi</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Radio name="format" label="Video call" checked={format === "video"} onChange={() => setFormat("video")} />
                  <Radio name="format" label="Chat" checked={format === "chat"} onChange={() => setFormat("chat")} />
                  <Radio name="format" label="Telepon" checked={format === "call"} onChange={() => setFormat("call")} />
                </div>
              </Card>
              <Card>
                <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Jadwal tersedia</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {slots.map((s) => (
                    <Radio key={s} name="slot" label={s} checked={slot === s} onChange={() => setSlot(s)} />
                  ))}
                </div>
              </Card>
              <Button size="lg" onClick={() => setStep(2)} style={{ marginTop: "auto" }}>Lanjut ke pembayaran</Button>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <Card>
                <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Ringkasan</div>
                <Row label="Psikolog" value={psychologist.name} />
                <Row label="Format" value={format === "video" ? "Video call" : format === "chat" ? "Chat" : "Telepon"} />
                <Row label="Jadwal" value={slot} />
                <Row label="Biaya sesi" value={psychologist.price} />
                <Row label="Biaya layanan" value="Rp5.000" />
                <div style={{ borderTop: "1px solid var(--border-subtle)", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", fontWeight: 700, color: "var(--text-primary)" }}>
                  <span>Total</span><span>{psychologist.price}</span>
                </div>
              </Card>
              <Card>
                <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Metode pembayaran</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Radio name="payment" label="QRIS" defaultChecked />
                  <Radio name="payment" label="Virtual Account BCA" />
                  <Radio name="payment" label="GoPay" />
                </div>
              </Card>
              <Button size="lg" loading={paying} onClick={pay} style={{ marginTop: "auto" }}>Bayar &amp; konfirmasi</Button>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "var(--text-tertiary)" }}>
                <LockIcon />
                Pembayaran aman &amp; terenkripsi
              </div>
            </>
          ) : null}
        </>
      ) : (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center", padding: "20px 0" }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, borderRadius: "50%", background: "var(--state-success-bg)", color: "var(--state-success-fg)" }}>
            <CheckIcon />
          </span>
          <strong style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--text-primary)" }}>Sesi berhasil dipesan</strong>
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-secondary)", maxWidth: 280 }}>
            Kamu akan menerima pengingat 1 jam sebelum sesi dengan {psychologist.name} pada {slot}.
          </p>
          <Button size="lg" onClick={() => setStep(0)}>Selesai</Button>
        </div>
      )}

      {showToast ? (
        <ToastViewport position="bottom-center">
          <Toast tone="success" title="Pembayaran berhasil" onClose={() => setShowToast(false)} />
        </ToastViewport>
      ) : null}
    </div>
  );
}

export const BookingFlow: Story = { render: () => <BookingDemo /> };
