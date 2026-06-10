import type { LucideIcon } from "lucide-react";

export type Metric = {
  title: string;
  value: string;
  note: string;
  icon: LucideIcon;
  color: string;
};

export type Risk = {
  label: string;
  count: number;
  style: string;
};