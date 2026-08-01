function Notifications({ ds }) {
  const { Card, Avatar, Badge } = ds;
  const items = [
    { title: "Pengingat sesi", body: "Sesi dengan Dr. Amara Putri dimulai 1 jam lagi.", time: "1j", tone: "brand" },
    { title: "Pesan baru", body: "Tim Sahari: Pembayaranmu telah dikonfirmasi.", time: "2j", tone: "success" },
    { title: "Dukungan diterima", body: "Rani W. dan 12 lainnya menyukai postinganmu.", time: "5j", tone: "neutral" },
    { title: "Catatan sesi tersedia", body: "Dr. Wisnu membagikan ringkasan sesi terakhirmu.", time: "1h", tone: "info" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((n, i) => (
        <Card key={i} padding={14}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--brand-primary)", marginTop: 6, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{n.title}</span>
                <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{n.time}</span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{n.body}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
window.Notifications = Notifications;
