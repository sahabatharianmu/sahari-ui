function AdminModeration({ ds }) {
  const { Card, Avatar, Badge, Button, Tag, Dialog } = ds;
  const [openReport, setOpenReport] = React.useState(null);
  const [queue, setQueue] = React.useState("posts");
  const reports = [
    { id: 1, author: "Anonim R.", reason: "Konten memicu (self-harm)", text: "Postingan menyebutkan keinginan menyakiti diri sendiri secara eksplisit.", severity: "danger" },
    { id: 2, author: "Budi S.", reason: "Spam / promosi", text: "Membagikan tautan promosi layanan tidak terverifikasi berulang kali.", severity: "warning" },
    { id: 3, author: "Anonim L.", reason: "Ujaran kasar", text: "Komentar berisi kata-kata kasar terhadap pengguna lain.", severity: "warning" },
  ];
  const kyc = [
    { name: "Dr. Fajar Ramadhan", spec: "Klinis", submitted: "2 hari lalu", status: "Menunggu" },
    { name: "Dr. Nadia Kusuma", spec: "Anak & Remaja", submitted: "5 jam lalu", status: "Menunggu" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Tag selected={queue==="posts"} onClick={()=>setQueue("posts")}>Konten Dilaporkan ({reports.length})</Tag>
        <Tag selected={queue==="kyc"} onClick={()=>setQueue("kyc")}>Verifikasi Psikolog ({kyc.length})</Tag>
      </div>
      {queue === "posts" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {reports.map(r => (
            <Card key={r.id}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Avatar name={r.author} size="sm" />
                  <span style={{ fontWeight: 600, fontSize: 14, color: "var(--text-primary)" }}>{r.author}</span>
                </div>
                <Badge tone={r.severity}>{r.reason}</Badge>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 12 }}>{r.text}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <Button size="sm" variant="secondary" onClick={()=>setOpenReport(r)}>Tinjau</Button>
                <Button size="sm" variant="ghost">Abaikan</Button>
                <Button size="sm" variant="danger">Hapus konten</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
      {queue === "kyc" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {kyc.map((k,i) => (
            <Card key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar name={k.name} size="md" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-primary)" }}>{k.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{k.spec} · diajukan {k.submitted}</div>
                </div>
                <Badge tone="warning">{k.status}</Badge>
                <Button size="sm" variant="secondary">Lihat Dokumen</Button>
                <Button size="sm" variant="primary">Setujui</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
      {openReport && (
        <Dialog title="Tinjau Laporan" onClose={()=>setOpenReport(null)} actions={<>
          <Button variant="ghost" onClick={()=>setOpenReport(null)}>Tutup</Button>
          <Button variant="danger" onClick={()=>setOpenReport(null)}>Hapus & Peringatkan Pengguna</Button>
        </>}>
          Laporan dari sistem: "{openReport.reason}". Tim moderasi meninjau dengan pendekatan suportif — prioritaskan keselamatan pengguna di atas penalti.
        </Dialog>
      )}
    </div>
  );
}
window.AdminModeration = AdminModeration;
