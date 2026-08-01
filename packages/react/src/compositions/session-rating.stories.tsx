import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { RatingInput } from "../components/rating-input/rating-input";
import { Tag } from "../components/tag/tag";
import { Textarea } from "../components/textarea/textarea";

const meta = { title: "Compositions/Session Rating" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const tags = ["Mendengarkan dengan baik", "Memberi solusi praktis", "Tepat waktu", "Ruang aman & nyaman"];

function SessionRatingDemo() {
  const [rating, setRating] = React.useState(0);
  const [picked, setPicked] = React.useState<string[]>([]);
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const togglePick = (tag: string) => {
    setPicked((current) => (current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]));
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 800);
  };

  if (done) {
    return (
      <div style={{ width: 390, minHeight: 420, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, textAlign: "center", background: "var(--bg-base)", padding: 18, fontFamily: "var(--font-body)" }}>
        <strong style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--text-primary)" }}>Terima kasih!</strong>
        <p style={{ margin: 0, fontSize: 14, color: "var(--text-secondary)", maxWidth: 280 }}>Masukan kamu membantu psikolog dan komunitas Sahari jadi lebih baik.</p>
      </div>
    );
  }

  return (
    <div style={{ width: 390, display: "flex", flexDirection: "column", gap: 16, background: "var(--bg-base)", padding: 18, fontFamily: "var(--font-body)" }}>
      <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center" }}>
        <Avatar name="Dr. Amara Putri" size="lg" online />
        <div>
          <strong style={{ color: "var(--text-primary)", fontSize: 15 }}>Bagaimana sesi kamu dengan Dr. Amara Putri?</strong>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--text-tertiary)" }}>Kamis, 14:00 · Video call</p>
        </div>
        <RatingInput label="Rating sesi" value={rating} onValueChange={setRating} />
      </Card>

      <Card>
        <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Apa yang membuat sesi ini berkesan?</div>
        <div className="sh-chip-row" style={{ flexWrap: "wrap", overflow: "visible" }}>
          {tags.map((tag) => (
            <Tag key={tag} selected={picked.includes(tag)} onClick={() => togglePick(tag)}>{tag}</Tag>
          ))}
        </div>
      </Card>

      <Card>
        <div style={{ fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>Catatan tambahan (opsional)</div>
        <Textarea placeholder="Ceritakan pengalaman kamu..." rows={3} aria-label="Catatan tambahan" />
      </Card>

      <Button size="lg" disabled={rating === 0} loading={submitting} onClick={submit}>Kirim rating</Button>
    </div>
  );
}

export const RateSession: Story = { render: () => <SessionRatingDemo /> };
