function Feed({ ds }) {
  const { Card, Avatar, Badge, IconButton, Tag, Textarea, Button } = ds;
  const [liked, setLiked] = React.useState({});
  const [tag, setTag] = React.useState("Semua");
  const posts = [
    { id: 1, name: "Rani W.", anon: false, time: "2j", tag: "Kecemasan", text: "Hari ini aku coba journaling sebelum tidur, ternyata bikin pikiran lebih tenang. Ada yang punya rutinitas malam serupa?", likes: 24, comments: 6 },
    { id: 2, name: "Anonim", anon: true, time: "5j", tag: "Hubungan", text: "Lagi belajar bilang 'tidak apa-apa untuk tidak baik-baik saja'. Pelan-pelan, tapi progres tetap progres.", likes: 41, comments: 12 },
    { id: 3, name: "Budi S.", anon: false, time: "1h", tag: "Stres Kerja", text: "Psikolog aku bilang istirahat 5 menit tiap jam itu bukan kemalasan, itu perawatan diri. Reminder buat kita semua!", likes: 58, comments: 9 },
  ];
  const filtered = tag === "Semua" ? posts : posts.filter(p => p.tag === tag);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Card style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <Avatar name="Kamu" size="md" />
        <Textarea placeholder="Bagikan perasaanmu hari ini, dengan aman..." rows={2} />
      </Card>
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 2 }}>
        {["Semua","Kecemasan","Hubungan","Stres Kerja"].map(t => (
          <Tag key={t} selected={tag===t} onClick={()=>setTag(t)}>{t}</Tag>
        ))}
      </div>
      {filtered.map(p => (
        <Card key={p.id}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <Avatar name={p.anon ? "?" : p.name} size="sm" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{p.time} · <Badge tone="brand">{p.tag}</Badge></div>
            </div>
          </div>
          <div style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: "var(--lh-body)", marginBottom: 12 }}>{p.text}</div>
          <div style={{ display: "flex", gap: 18, color: "var(--text-secondary)", fontSize: 13 }}>
            <span onClick={() => setLiked(l => ({...l, [p.id]: !l[p.id]}))} style={{ cursor: "pointer", color: liked[p.id] ? "var(--brand-primary)" : "var(--text-secondary)", fontWeight: liked[p.id] ? 700 : 400 }}>♥ {p.likes + (liked[p.id]?1:0)}</span>
            <span>{p.comments} komentar</span>
            <span style={{ marginLeft: "auto" }}>Kirim dukungan →</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
window.Feed = Feed;
