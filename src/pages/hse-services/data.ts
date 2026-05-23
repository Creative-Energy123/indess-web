import { Briefcase, GraduationCap, Package, ShieldCheck } from "lucide-react";

import type { JointVenture, SummaryService } from "./types";

export const summaryServices: SummaryService[] = [
  {
    icon: Briefcase,
    title: "Human Resources",
    copy: "End-to-end recruitment, deployment and workforce management for industrial operators worldwide.",
  },
  {
    icon: GraduationCap,
    title: "HSE Trainings",
    copy: "Certified safety, fire-fighting, first-aid, working-at-height and confined-space training programs.",
  },
  {
    icon: ShieldCheck,
    title: "HSE Consultancy",
    copy: "Risk assessments, audits, policy development and on-site safety advisory for energy and process plants.",
  },
  {
    icon: Package,
    title: "Trading Services",
    copy: "Supply of PPE, safety equipment and industrial consumables to national and international clients.",
  },
];

export const oasisRegions = [
  "United States of America",
  "United Kingdom",
  "Central Asia",
  "Saudi Arabia",
  "Pakistan",
] as const;

export const oasisSpecializations = [
  "Occupational Health & Safety (HSE) Training",
  "QHSE Consultancy & Compliance",
  "Workforce Development",
  "Technical & Skilled Manpower Solutions",
  "International Recruitment Support",
  "Corporate Training Programs",
  "Industrial Safety Consultancy",
  "Overseas Recruitment",
  "International Workforce Mobilization",
  "Skilled & Unskilled Manpower Supply",
  "Visa Processing Coordination",
  "HR Consultancy Services",
  "Employer Support Services",
] as const;

export const visionPoints = [
  "International manpower solutions",
  "HSE competency development",
  "Industrial training services",
  "Global workforce deployment",
  "Professional consultancy services",
] as const;

export const ventures: JointVenture[] = [
  {
    code: "Joint Venture 01",
    title: "OASIS Pvt. Ltd. LLC",
    location: "USA",
    intro:
      "OASIS Pvt. Ltd. LLC is an international Human Resource, HSE Training, Consultancy, and Recruitment Solutions provider operating across Pakistan, the Middle East, the United Kingdom, and the United States. With extensive experience in oil & gas, construction, drilling, engineering and industrial sectors, OASIS delivers professional manpower and safety solutions to international clients.",
    specializations: [...oasisSpecializations],
  },
];
