import imgMechanical from "@/assets/MECHANICAL.png";
import imgElectrical from "@/assets/cin-electrical.jpg";
import imgInstrumentation from "@/assets/instumentation and control.png";
import imgChemicals from "@/assets/Chemical Industry.jpg";
import imgProcess from "@/assets/cin-process.jpg";
import imgOilgas from "@/assets/oil and gas.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgAviation from "@/assets/industry-aviation.jpg";
import imgPartnerDongeun from "@/assets/partners/logo_dongeun.png";
import imgPartnerHimile from "@/assets/partners/logo_himile.png";
import imgPartnerWooju from "@/assets/partners/logo_wooju.png";
import imgPartnerHs from "@/assets/partners/logo_hs.png";
import imgPartnerHorizon from "@/assets/partners/logo_horizon.png";
import imgPartnerCangzhou from "@/assets/partners/logo_Cangzhou.png";

import type { BrandItem, ClientItem, ExpertiseItem, IndustryItem, PartnerItem, PresenceRegionItem, ProductItem, ServiceItem } from "@/pages/home/types";

const clientLogoModules = import.meta.glob("../../assets/clients/logo_*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const brandLogoModules = import.meta.glob("../../assets/brands/*.{png,jpg,jpeg,jfif,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const clientLogoBySlug = Object.fromEntries(
  Object.entries(clientLogoModules).map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const slug = fileName.replace(/^logo_/, "").replace(/\.[^.]+$/, "").toLowerCase();
    return [slug, src];
  }),
) as Record<string, string>;

const getClientLogo = (slug: string): string | undefined => clientLogoBySlug[slug.toLowerCase()];

const allBrandLogoItems = Object.entries(brandLogoModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const slug = fileName.replace(/^logo_/, "").replace(/\.[^.]+$/, "").toLowerCase();
    const label = slug.replace(/[_-]+/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());

    return { slug, label, src };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

export const industries: IndustryItem[] = [
  { n: "01", title: "Oil & Gas", img: imgOilgas, copy: "Upstream, midstream and downstream operations across the GCC." },
  { n: "02", title: "Petrochemical", img: imgPetro, copy: "Refining, processing and chemical handling infrastructure." },
  { n: "03", title: "Power Generation", img: imgPower, copy: "Generation, transmission and distribution networks." },
  { n: "04", title: "Ship Building", img: imgShip, copy: "Marine-grade systems for shipyards and offshore vessels." },
  { n: "05", title: "Aviation", img: imgAviation, copy: "Engine, avionics and ground support equipment." },
];

export const services: ServiceItem[] = [
  { n: "S/01", title: "Strategic Sourcing", copy: "Direct partnerships with tier-one OEMs deliver authentic equipment under transparent commercial terms." },
  { n: "S/02", title: "Technical Advisory", copy: "Engineering-led specification, BOM optimization and lifecycle planning for mission-critical systems." },
  { n: "S/03", title: "Logistics & Delivery", copy: "End-to-end freight, customs and on-site delivery across the GCC, MENA and beyond." },
  { n: "S/04", title: "After-Sales Support", copy: "Spares continuity, warranty handling and field-service coordination over the asset lifecycle." },
];

export const expertiseItems: ExpertiseItem[] = [
  { n: "E/01", title: "Mechanical", copy: "Pumps, valves, compressors, heat exchangers and rotating equipment engineered for high-pressure service." },
  { n: "E/02", title: "Instrumentation", copy: "Field instruments, control systems and safety detection that deliver plant-wide visibility." },
  { n: "E/03", title: "Electrical", copy: "LV/MV switchgear, transformers, motors and drives designed for continuous industrial duty." },
  { n: "E/04", title: "Industrial Chemicals", copy: "Lubricants, drilling fluids and treatment chemicals supporting refineries and offshore operations." },
  { n: "E/05", title: "Marine", copy: "Specialised supply for VLCs and VLCCs with pumps, valves and onboard systems for harsh environments." },
];

export const products: ProductItem[] = [
  { n: "P/01", slug: "valves", title: "Mechanical Equipment", img: imgMechanical, copy: "Pumps, valves, compressors, flanges, fittings and precision-engineered piping systems for high-pressure service.", items: ["Centrifugal & Positive Displacement Pumps", "Ball, Gate, Globe & Check Valves", "Compressors & Heat Exchangers", "Flanges, Fittings & Gaskets"] },
  { n: "P/02", slug: "switchgear", title: "Electrical Systems", img: imgElectrical, copy: "Switchgear, transformers, motors, drives and complete LV/MV electrical distribution infrastructure.", items: ["LV/MV Switchgear & Panels", "Transformers & Reactors", "Motors, Drives & Soft Starters", "Cables, Terminations & Accessories"] },
  { n: "P/03", slug: "transmitters", title: "Instrumentation & Control", img: imgInstrumentation, copy: "Field instruments, control systems and process automation for plant-wide visibility and safety.", items: ["Pressure, Flow & Level Transmitters", "PLC, DCS & SCADA Systems", "Control Valves & Actuators", "Safety & Fire-Gas Detection"] },
  { n: "P/04", slug: "heat-exchangers", title: "Process Equipment", img: imgProcess, copy: "Heat exchangers, separators, vessels and skid-mounted process packages built to specification.", items: ["Pressure Vessels & Separators", "Heat Exchangers & Coolers", "Filtration & Treatment Skids", "Custom-Engineered Packages"] },
  { n: "P/05", slug: "treatment-chemicals", title: "Industrial Chemicals", img: imgChemicals, copy: "Lubricants, treatment chemicals and specialty fluids supporting refineries, pipelines and offshore operations.", items: ["Industrial Lubricants & Greases", "Drilling & Completion Fluids", "Corrosion & Scale Inhibitors", "Cleaning & Treatment Chemicals"] },
];

export const partners: PartnerItem[] = [
  { name: "Dongeun Valve", role: "Industrial Valves - South Korea", logo: imgPartnerDongeun },
  { name: "Himile Mechanical", role: "Precision Engineering - China", logo: imgPartnerHimile },
  { name: "Wooju Gaspack", role: "Gas Handling Systems - South Korea", logo: imgPartnerWooju },
  { name: "HS Valve", role: "Valves & Pipeline - South Korea", logo: imgPartnerHs },
  { name: "Horizon Water", role: "Water Treatment - China", logo: imgPartnerHorizon },
  { name: "Cangzhou Hongding", role: "Pipes & Fittings - China", logo: imgPartnerCangzhou },
];

export const brands: BrandItem[] = allBrandLogoItems.map((item) => ({ name: item.label, logo: item.src }));

export const clients: ClientItem[] = [
  { name: "NMDC" },
  { name: "ADNOC", logo: getClientLogo("adnoc") },
  { name: "Borouge", logo: getClientLogo("lyb") },
  { name: "NPCC", logo: getClientLogo("npcc") },
  { name: "DEWA", logo: getClientLogo("dewa") },
  { name: "EWEC" },
  { name: "G42" },
  { name: "DP World", logo: getClientLogo("dpworld") },
  { name: "Fertiglobe", logo: getClientLogo("fertiglobe") },
  { name: "Abu Dhabi Ports", logo: getClientLogo("abudhabiports") },
  { name: "Oman Drydock" },
  { name: "GMS" },
];

export const regions: PresenceRegionItem[] = [
  { region: "Middle East", countries: ["United Arab Emirates", "Oman", "Qatar", "Kuwait", "Bahrain", "Saudi Arabia"] },
  { region: "Europe", countries: ["United Kingdom", "European Union Countries"] },
  { region: "Americas", countries: ["United States"] },
  { region: "Asia Pacific", countries: ["South Korea", "Japan", "Singapore", "China", "Malaysia"] },
  { region: "Central Asia", countries: ["Kazakhstan", "Turkmenistan", "Uzbekistan"] },
];
