import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "./combobox";

const topics = [
  { label: "Kecemasan", value: "anxiety" },
  { label: "Hubungan", value: "relationship" },
  { label: "Stres kerja", value: "work-stress" },
  { label: "Kepercayaan diri", value: "self-esteem" },
  { label: "Trauma", value: "trauma" },
  { label: "Manajemen amarah", value: "anger-management" },
  { label: "Gangguan tidur", value: "sleep" },
];

const meta = { title: "Components/Combobox", component: Combobox } satisfies Meta<typeof Combobox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { label: "Cari topik", placeholder: "Ketik untuk mencari...", options: topics },
};

export const Preselected: Story = {
  args: { label: "Topik", options: topics, defaultValue: "trauma" },
};

export const WithHint: Story = {
  name: "With hint",
  args: { label: "Cari psikolog atau topik", placeholder: "mis. kecemasan", options: topics, hint: "Ketik minimal 2 huruf untuk mempersempit hasil." },
};
