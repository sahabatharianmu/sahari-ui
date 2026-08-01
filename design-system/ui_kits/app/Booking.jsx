function Booking({ ds, psychologist, onDone, onBack }) {
  const { Card, Avatar, Badge, Button, Radio, Dialog, Toast } = ds;
  const [step, setStep] = React.useState("profile");
  const [format, setFormat] = React.useState("video");
  const [slot, setSlot] = React.useState("Kamis, 14:00");
  const [showToast, setShowToast] = React.useState(false);
  if (!psychologist) return null;
  const slots = ["Kamis, 14:00", "Kamis, 16:00", "Jumat, 10:00"];

  if (step === "profile") return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Button variant="ghost" size="sm" onClick={onBack} style={{ alignSelf: "flex-start" }}>← Kembali</Button>
      <Card>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Avatar name={psychologist.name} size="xl" online={psychologist.online} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 17, color: "var(--text-primary)" }}>{psychologist.name}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{psychologist.spec} · ★ {psychologist.rating}</div>
            <Badge tone="brand">Terverifikasi STR</Badge>
          </div>
        </div>
        <div style={{ marginTop: 14, fontSize: 14, color: "var(--text-secondary)", lineHeight: "var(--lh-body)" }}>
          Berpengalaman {psychologist.sessions}+ sesi. Pendekatan hangat, mendengarkan tanpa menghakimi, berbasis CBT.
        </div>
      </Card>
      <Button variant="primary" size="lg" onClick={() => setStep("slot")}>Pilih Jadwal</Button>
    </div>
  );

  if (step === "slot") return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Button variant="ghost" size="sm" onClick={() => setStep("profile")} style={{ alignSelf: "flex-start" }}>← Kembali</Button>
      <Card>
        <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Format Sesi</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Radio label="Video call" checked={format==="video"} onChange={()=>setFormat("video")} />
          <Radio label="Chat" checked={format==="chat"} onChange={()=>setFormat("chat")} />
          <Radio label="Telepon" checked={format==="call"} onChange={()=>setFormat("call")} />
        </div>
      </Card>
      <Card>
        <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Jadwal Tersedia</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {slots.map(s => <Radio key={s} label={s} checked={slot===s} onChange={()=>setSlot(s)} />)}
        </div>
      </Card>
      <Button variant="primary" size="lg" onClick={() => setStep("pay")}>Lanjut ke Pembayaran</Button>
    </div>
  );

  if (step === "pay") return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Button variant="ghost" size="sm" onClick={() => setStep("slot")} style={{ alignSelf: "flex-start" }}>← Kembali</Button>
      <Card>
        <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Ringkasan</div>
        <Row label="Psikolog" value={psychologist.name} />
        <Row label="Format" value={format} />
        <Row label="Jadwal" value={slot} />
        <Row label="Biaya sesi" value={psychologist.price} />
        <Row label="Biaya layanan" value="Rp5.000" />
        <div style={{ borderTop: "1px solid var(--border-subtle)", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", fontWeight: 700, color: "var(--text-primary)" }}>
          <span>Total</span><span>{psychologist.price}</span>
        </div>
      </Card>
      <Card>
        <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Metode Pembayaran</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Radio label="QRIS" checked onChange={()=>{}} />
          <Radio label="Virtual Account BCA" checked={false} onChange={()=>{}} />
          <Radio label="GoPay" checked={false} onChange={()=>{}} />
        </div>
      </Card>
      <Button variant="primary" size="lg" onClick={() => { setStep("done"); setShowToast(true); }}>Bayar & Konfirmasi</Button>
      <div style={{ fontSize: 12, color: "var(--text-tertiary)", textAlign: "center" }}>🔒 Pembayaran aman & terenkripsi</div>
    </div>
  );

  if (step === "done") return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", textAlign: "center", padding: "20px 0" }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--state-success-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>✓</div>
      <div style={{ fontWeight: 700, fontSize: 20, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>Sesi berhasil dipesan</div>
      <div style={{ fontSize: 14, color: "var(--text-secondary)", maxWidth: 280 }}>Kamu akan menerima pengingat 1 jam sebelum sesi dengan {psychologist.name} pada {slot}.</div>
      <Button variant="primary" size="lg" onClick={onDone}>Selesai</Button>
      {showToast && <div style={{ position: "fixed", bottom: 90, left: "50%", transform: "translateX(-50%)" }}><Toast tone="success" title="Pembayaran berhasil" onClose={()=>setShowToast(false)} /></div>}
    </div>
  );
}
function Row({ label, value }) {
  return <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", padding: "4px 0" }}><span>{label}</span><span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{value}</span></div>;
}
window.Booking = Booking;
