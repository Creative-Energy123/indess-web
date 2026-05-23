import logoDongeun from "@/assets/partners/logo_dongeun.png";
import logoHimile from "@/assets/partners/logo_himile.png";
import logoWooju from "@/assets/partners/logo_wooju.png";
import logoHs from "@/assets/partners/logo_hs.png";
import logoHorizon from "@/assets/partners/logo_horizon.png";
import logoCangzhou from "@/assets/partners/logo_Cangzhou.png";
import logoDifiniti from "@/assets/partners/difiniti.jpeg";

import type { PartnerPageItem } from "./types";

export const partnerPageData: PartnerPageItem[] = [
  {
    code: "PT/01",
    name: "Dongeun Valve Co., Ltd.",
    country: "South Korea",
    logo: logoDongeun,
    summary:
      "A leading Korean manufacturer of high-performance industrial valves engineered for severe service across oil & gas, petrochemical and power generation.",
    highlights: [
      "Forged steel & cast steel valves",
      "API 6D / API 600 certified",
      "Cryogenic & high-pressure service",
      "Custom-engineered solutions",
    ],
  },
  {
    code: "PT/02",
    name: "Himile Mechanical Manufacturing (Shandong) Co., Ltd.",
    country: "China",
    logo: logoHimile,
    summary:
      "Globally recognised precision-engineering group delivering large-scale mechanical components, moulds and integrated industrial manufacturing solutions.",
    highlights: [
      "Precision mechanical components",
      "Industrial moulds & tooling",
      "Heavy machinery sub-assemblies",
      "ISO-certified manufacturing",
    ],
  },
  {
    code: "PT/03",
    name: "Wooju Gaspack Industrial Co., Ltd.",
    country: "South Korea",
    logo: logoWooju,
    summary:
      "Specialist supplier of gas-handling and packaging systems for industrial gases, chemicals and petrochemical applications.",
    highlights: [
      "Gas packaging & containment",
      "High-pressure cylinder systems",
      "Industrial gas equipment",
      "Safety-critical assemblies",
    ],
  },
  {
    code: "PT/04",
    name: "HS Valve Co., Ltd.",
    country: "South Korea",
    logo: logoHs,
    summary:
      "Korean valve manufacturer producing premium ball, gate, globe and check valves for refineries, pipelines and power plants worldwide.",
    highlights: [
      "Ball, gate, globe & check valves",
      "API 6D / 6A certified",
      "Pipeline & refinery service",
      "Carbon, stainless & alloy steel",
    ],
  },
  {
    code: "PT/05",
    name: "Horizon Water Co., Ltd.",
    country: "China",
    logo: logoHorizon,
    summary:
      "Trusted producer of water treatment systems, filtration packages and process chemicals for industrial and municipal applications.",
    highlights: [
      "Water treatment systems",
      "Filtration & purification skids",
      "Process & treatment chemicals",
      "Industrial & municipal projects",
    ],
  },
  {
    code: "PT/06",
    name: "Cangzhou Hongding Pipe Industry Co., Ltd.",
    country: "China",
    logo: logoCangzhou,
    summary:
      "Established manufacturer of seamless and welded steel pipes, fittings and flanges serving oil & gas pipelines and structural applications globally.",
    highlights: [
      "Seamless & welded steel pipes",
      "Pipe fittings & flanges",
      "API 5L / ASTM standards",
      "Pipeline & structural use",
    ],
  },
  {
    code: "PT/07",
    name: "DFINITI Technologies",
    country: "Singapore",
    logo: logoDifiniti,
    summary:
      "Singapore-headquartered process-heating specialist designing and manufacturing industrial heating systems for oil & gas, petrochemical, refinery, power and aerospace applications, supported by an ATIGA-licensed Malaysian LMW facility.",
    highlights: [
      "Electric heating systems & space heaters",
      "Vaporisers & electric steam generation",
      "Bath heating systems & hot water calorifiers",
      "Fired/hot oil, air duct & skid package heaters",
    ],
  },
];
