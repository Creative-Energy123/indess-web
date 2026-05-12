import type { LucideIcon } from "lucide-react";

export type CompanyValue = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

export type CompanyGoal = {
  code: string;
  title: string;
  copy: string;
};

export type CompanyTestimonial = {
  quote: string;
  author: string;
  company: string;
};

export type CompanyRegion = {
  region: string;
  countries: string;
};
