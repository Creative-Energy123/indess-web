import { Compass, Gem, Rocket, Target } from "lucide-react";

import type { CompanyGoal, CompanyRegion, CompanyTestimonial, CompanyValue } from "./types";

export const companyValues: CompanyValue[] = [
  {
    icon: Gem,
    title: "Quality First",
    copy: "Every shipment meets the highest engineering and safety standards without compromise.",
  },
  {
    icon: Target,
    title: "Precision",
    copy: "Engineered specifications, accurate sourcing and on-time delivery for every order.",
  },
  {
    icon: Compass,
    title: "Integrity",
    copy: "Transparent partnerships built on trust, accountability and long-term commitment.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    copy: "Continuous adoption of advanced equipment and smarter sourcing pathways.",
  },
];

export const companyGoals: CompanyGoal[] = [
  {
    code: "G/01",
    title: "Regional Leadership",
    copy: "Become the most trusted industrial equipment partner across the GCC by 2030.",
  },
  {
    code: "G/02",
    title: "Global Network",
    copy: "Expand our manufacturer alliances across Europe, Asia Pacific and the Americas.",
  },
  {
    code: "G/03",
    title: "Operational Excellence",
    copy: "Set the regional benchmark for sourcing accuracy, lead-time and after-sales response.",
  },
  {
    code: "G/04",
    title: "Sustainable Supply",
    copy: "Champion energy-efficient equipment and responsible logistics across our portfolio.",
  },
];

export const companyTestimonials: CompanyTestimonial[] = [
  {
    quote: "INDESS has been an exceptional supply partner - their engineering depth and delivery discipline are second to none in the region.",
    author: "Project Director",
    company: "National Energy Operator, UAE",
  },
  {
    quote: "Their ability to source authentic OEM equipment under tight schedules has been critical to keeping our operations online.",
    author: "Procurement Lead",
    company: "Petrochemical Major",
  },
  {
    quote: "A precise, professional and quietly confident partner. We trust INDESS with our most critical equipment programs.",
    author: "Operations Manager",
    company: "Marine Services Group",
  },
];

export const companyRegions: CompanyRegion[] = [
  { region: "Middle East", countries: "UAE, Oman, Qatar, Kuwait, Bahrain, Saudi Arabia" },
  { region: "Europe", countries: "United Kingdom, Estonia" },
  { region: "Americas", countries: "United States" },
  { region: "Asia Pacific", countries: "South Korea, Japan" },
];
