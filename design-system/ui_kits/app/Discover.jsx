function Discover({ ds, onSelect }) {
  const { Card, Avatar, Badge, Tag, Input } = ds;
  const [spec, setSpec] = React.useState("Semua");
  const psychologists = [
    { id: 1, name: "Dr. Amara Putri, M.Psi", spec: "Kecemasan", rating: 4.9, sessions: 320, price: "Rp150rb", online: true },
    { id: 2, name: "Dr. Wisnu Prakoso, Psikolog", spec: "Hubungan", rating: 4.8, sessions: 210, price: "Rp180rb", online: true },
    { id: 3, name: "Dr. Sinta Dewi, M.Psi", spec: "Stres Kerja", rating: 5.0, sessions: 450, price: "Rp200rb", online: false },
  ];
  const filtered = spec === "Semua" ? psychologists : psychologists.filter(p => p.spec === spec);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Input placeholder="Cari psikolog atau topik..." />
      <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
        {["Semua","Kecemasan","Hubungan","Stres Kerja"].map(t => (
          <Tag key={t} selected={spec===t} onClick={()=>setSpec(t)}>{t}</Tag>
        ))}
      </div>
      {filtered.map(p => (
        <Card key={p.id} style={{ cursor: "pointer" }} >
          <div onClick={() => onSelect(p)} style={{ display: "flex", gap: 12 }}>
            <Avatar name={p.name} size="lg" online={p.online} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{p.name}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", margin: "2px 0 6px" }}>{p.spec} · ★ {p.rating} · {p.sessions} sesi</div>
              <div style={{ display: "flex", gap: 6 }}>
                <Badge tone="brand">Terverifikasi</Badge>
                {p.online ? <Badge tone="success">Online</Badge> : <Badge tone="neutral">Offline</Badge>}
              </div>
            </div>
            <div style={{ fontWeight: 700, color: "var(--purple-700)", fontSize: 14, alignSelf: "center" }}>{p.price}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
window.Discover = Discover;
