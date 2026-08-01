import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { Reaction } from "../components/reaction/reaction";
import { Textarea } from "../components/textarea/textarea";

const meta = { title: "Compositions/Comments" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

type Comment = {
  id: number;
  name: string;
  anon: boolean;
  time: string;
  text: string;
  likes: number;
  replies?: Comment[];
};

const thread: Comment[] = [
  {
    id: 1,
    name: "Anonim",
    anon: true,
    time: "1j",
    text: "Terima kasih sudah berbagi, aku juga sering merasa begini. Pelan-pelan ya.",
    likes: 12,
    replies: [
      { id: 11, name: "Rani Wulandari", anon: false, time: "45m", text: "Makasih banyak, ini bantu banget.", likes: 3 },
    ],
  },
  { id: 2, name: "Budi Santoso", anon: false, time: "2j", text: "Aku coba juga mulai minggu ini, semoga konsisten.", likes: 5 },
];

function CommentRow({ comment, replyDepth = 0 }: { comment: Comment; replyDepth?: number }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <div style={{ display: "flex", gap: 10, marginLeft: replyDepth * 40 }}>
      <Avatar name={comment.anon ? "Anonim" : comment.name} size="sm" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <strong style={{ fontSize: 13, color: "var(--text-primary)" }}>{comment.name}</strong>
          <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{comment.time}</span>
        </div>
        <p style={{ margin: "2px 0 6px", fontSize: 14, color: "var(--text-primary)", lineHeight: "var(--lh-body)" }}>{comment.text}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 2, marginLeft: -10 }}>
          <Reaction
            aria-label={liked ? "Batalkan dukungan" : "Beri dukungan"}
            icon={<span aria-hidden="true">♡</span>}
            activeIcon={<span aria-hidden="true">♥</span>}
            active={liked}
            count={comment.likes + (liked ? 1 : 0)}
            onClick={() => setLiked((v) => !v)}
          />
          <Button variant="ghost" size="sm">Balas</Button>
        </div>

        {comment.replies?.map((reply) => (
          <CommentRow key={reply.id} comment={reply} replyDepth={replyDepth + 1} />
        ))}
      </div>
    </div>
  );
}

function CommentsDemo() {
  return (
    <div style={{ width: 390, display: "flex", flexDirection: "column", gap: 16, background: "var(--bg-base)", padding: 18, fontFamily: "var(--font-body)" }}>
      <Card style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {thread.map((comment) => (
          <CommentRow key={comment.id} comment={comment} />
        ))}
      </Card>

      <Card style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <Avatar name="Kamu" size="sm" />
        <Textarea placeholder="Tulis dukungan yang baik..." rows={1} style={{ flex: 1 }} />
      </Card>
    </div>
  );
}

export const Thread: Story = { render: () => <CommentsDemo /> };
