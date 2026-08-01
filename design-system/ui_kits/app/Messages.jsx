function Messages({ ds }) {
  const { Card, Avatar, Badge, Input, IconButton } = ds;
  const [active, setActive] = React.useState(0);
  const threads = [
    { name: "Dr. Amara Putri", last: "Sampai jumpa di sesi Kamis ya 😊", time: "10:24", unread: 2 },
    { name: "Dr. Wisnu Prakoso", last: "Baik, saya kirimkan ringkasan sesi.", time: "Kemarin", unread: 0 },
    { name: "Tim Sahari", last: "Pembayaranmu telah dikonfirmasi.", time: "2h", unread: 1 },
  ];
  const chat = [
    { me: false, text: "Halo! Bagaimana perasaanmu setelah sesi minggu lalu?" },
    { me: true, text: "Lebih baik, aku coba teknik pernapasan yang Ibu ajarkan." },
    { me: false, text: "Senang mendengarnya. Sampai jumpa di sesi Kamis ya 😊" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
      {active === null ? null : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {threads.map((t, i) => (
            <Card key={i} padding={12} style={{ cursor: "pointer" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Avatar name={t.name} size="md" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{t.name}</span>
                    <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{t.time}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.last}</div>
                </div>
                {t.unread > 0 && <Badge tone="brand">{t.unread}</Badge>}
              </div>
            </Card>
          ))}
        </div>
      )}
      <Card padding={14}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Avatar name="Dr. Amara Putri" size="sm" online />
          <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>Dr. Amara Putri</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
          {chat.map((m, i) => (
            <div key={i} style={{ alignSelf: m.me ? "flex-end" : "flex-start", background: m.me ? "var(--brand-primary)" : "var(--purple-50)", color: m.me ? "#fff" : "var(--text-primary)", padding: "8px 14px", borderRadius: 16, maxWidth: "80%", fontSize: 13 }}>{m.text}</div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Input placeholder="Tulis pesan..." />
          <IconButton icon={<span>➤</span>} variant="solid" aria-label="Kirim" />
        </div>
      </Card>
    </div>
  );
}
window.Messages = Messages;
