import type { ClientPageItem } from "./types";

const allClientLogoModules = import.meta.glob("../../assets/clients/logo_*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const clientLogoBySlug = Object.fromEntries(
  Object.entries(allClientLogoModules).map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const slug = fileName.replace(/^logo_/, "").replace(/\.[^.]+$/, "").toLowerCase();
    return [slug, src];
  }),
) as Record<string, string>;

const getClientLogo = (slug: string): string | undefined => clientLogoBySlug[slug.toLowerCase()];

export const allClientLogos = Object.entries(allClientLogoModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const label = fileName
      .replace(/^logo_/, "")
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase());

    return { src, label };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

export const clientPageData: ClientPageItem[] = [
  {
    name: "ADNOC",
    logo: getClientLogo("adnoc"),
    sector: "Oil & Gas",
    project: "Supply of valves, flanges and instrumentation packages for upstream operations.",
  },
  {
    name: "NMDC",
    sector: "Marine & Dredging",
    project: "Mechanical and electrical equipment for offshore marine construction projects.",
  },
  {
    name: "Borouge",
    logo: getClientLogo("lyb"),
    sector: "Petrochemical",
    project: "Process equipment and treatment chemicals for polyolefin manufacturing facilities.",
  },
  {
    name: "NPCC",
    logo: getClientLogo("npcc"),
    sector: "EPC / Offshore",
    project: "Pipes, fittings and structural steel for offshore platform fabrication.",
  },
  {
    name: "DEWA",
    logo: getClientLogo("dewa"),
    sector: "Power & Water",
    project: "Switchgear, transformers and control systems for utility infrastructure.",
  },
  {
    name: "EWEC",
    sector: "Power Generation",
    project: "Electrical and instrumentation supply for power and water generation assets.",
  },
  {
    name: "G42",
    sector: "Technology & AI",
    project: "Specialised industrial equipment for data-centre and infrastructure projects.",
  },
  {
    name: "DP World",
    logo: getClientLogo("dpworld"),
    sector: "Ports & Logistics",
    project: "Marine-grade hardware, lubricants and spares for port operations.",
  },
  {
    name: "Fertiglobe",
    logo: getClientLogo("fertiglobe"),
    sector: "Fertilizers",
    project: "Process valves, pumps and chemicals for ammonia and urea production.",
  },
  {
    name: "Abu Dhabi Ports",
    logo: getClientLogo("abudhabiports"),
    sector: "Maritime",
    project: "Mechanical and safety equipment for port infrastructure expansion.",
  },
  {
    name: "Oman Drydock",
    sector: "Ship Repair",
    project: "Marine spares, valves and treatment chemicals for VLCC servicing.",
  },
  {
    name: "GMS",
    sector: "Offshore Services",
    project: "Specialty pumps, switchgear and lifting equipment for self-elevating vessels.",
  },
];
