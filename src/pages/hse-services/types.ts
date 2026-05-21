import type { LucideIcon } from "lucide-react";

export type SummaryService = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

export type JointVenture = {
  code: string;
  title: string;
  location: string;
  intro: string;
  specializations: string[];
};
