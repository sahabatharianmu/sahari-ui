function ProfessionalDashboard({ ds }) {
  const { Card, Avatar, Badge, Button, Tabs } = ds;
  const [tab, setTab] = React.useState("upcoming");
  const upcoming = [
    { client: "Anonim K.", time: "Hari ini, 14:00", format: "Video" },
    { client: "Budi S.", time: "Hari ini, 16:30", format: "Chat" },
    { client: "Rani W.", time: "Besok, 10:00", format: "Video" },
  ];
  const past = [
    { client: "Sinta D.", time: "Kemarin, 11:00", format: "Video" },
    { client: "Anonim T.", time: "2 hari lalu, 15:00", format: "Telepon" },
  ];
  const rows = tab === "upcoming" ? upcoming : past;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        {[["Sesi bulan ini","62"],["Pendapatan","Rp9.3jt"],["Rating","4.9"],["Klien aktif","28"]].map(([l,v]) => (
          <Card key={l} padding={16}>
            <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 4 }}>{l}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{v}</div>
          </Card>
        ))}
      </div>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 16 }}>Jadwal Sesi</div>
          <div style={{ width: 220 }}><Tabs items={[{label:"Mendatang",value:"upcoming"},{label:"Selesai",value:"past"}]} active={tab} onChange={setTab} /></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < rows.length-1 ? "1px solid var(--border-subtle)" : "none" }}>
              <Avatar name={r.client} size="md" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-primary)" }}>{r.client}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{r.time}</div>
              </div>
              <Badge tone="brand">{r.format}</Badge>
              {tab === "upcoming" ? <Button size="sm" variant="secondary">Mulai</Button> : <Button size="sm" variant="ghost">Catatan</Button>}
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ background: "var(--purple-50)", border: "none" }}>
        <div style={{ fontWeight: 700, color: "var(--purple-800)", marginBottom: 6 }}>Verifikasi KYC</div>
        <div style={{ fontSize: 13, color: "var(--purple-700)" }}>STR & SIPP kamu terverifikasi. Perbarui setiap 2 tahun untuk tetap aktif menerima klien.</div>
      </Card>
    </div>
  );
}
window.ProfessionalDashboard = ProfessionalDashboard;
