import imgMechanical from "@/assets/cin-mechanical.jpg";
import imgElectrical from "@/assets/cin-electrical.jpg";
import imgInstrumentation from "@/assets/cin-instrumentation.jpg";
import imgLogistics from "@/assets/cin-logistics.jpg";
import imgChemicals from "@/assets/cin-chemicals.jpg";
import imgProcess from "@/assets/cin-process.jpg";
import imgManufacturing from "@/assets/cin-manufacturing.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgAviation from "@/assets/industry-aviation.jpg";
import imgClientNmdc from "@/assets/clients/NMDC.jpg";
import imgClientBorouge from "@/assets/clients/Borouge.jpg";
import imgClientNpcc from "@/assets/clients/NPCC.png";
import imgClientDewa from "@/assets/clients/dewa.jpg";
import imgClientEwec from "@/assets/clients/ewec-300x180.jpeg";
import imgClientG42 from "@/assets/clients/G42.jpg";
import imgClientDpWorld from "@/assets/clients/DP_World.jpg";
import imgClientFertiglobe from "@/assets/clients/fertiglobe.jpg";
import imgClientAbuDhabiPorts from "@/assets/clients/Abu_Dhabi_Ports.jpg";
import imgClientOman from "@/assets/clients/OMAN-300x180.jpeg";
import imgClientGms from "@/assets/clients/GMS-300x180.jpeg";
import imgBrandAbb from "@/assets/clients/abb-asea.jpg";
import imgBrandBanner from "@/assets/clients/banner_more_sensors.jpg";
import imgBrandBosch from "@/assets/clients/bosch.jpg";
import imgBrandEaton from "@/assets/clients/EATON.jpg";
import imgBrandFanuc from "@/assets/clients/FANUC.png";
import imgBrandHoneywell from "@/assets/clients/honey-well.jpg";
import imgBrandLenze from "@/assets/clients/lenze.jpg";
import imgBrandMitsubishi from "@/assets/clients/mitsubishi.jpg";
import imgBrandOmron from "@/assets/clients/omron.jpg";
import imgBrandSchneider from "@/assets/clients/Schneider_Electric.jpg";

import type { BrandItem, ClientItem, ExpertiseItem, IndustryItem, PartnerItem, PresenceRegionItem, ProductItem, ServiceItem } from "@/pages/home/types";

export const industries: IndustryItem[] = [
  { n: "01", title: "Oil & Gas", img: imgOilgas, copy: "Upstream, midstream and downstream operations across the GCC." },
  { n: "02", title: "Petrochemical", img: imgPetro, copy: "Refining, processing and chemical handling infrastructure." },
  { n: "03", title: "Power Generation", img: imgPower, copy: "Generation, transmission and distribution networks." },
  { n: "04", title: "Ship Building", img: imgShip, copy: "Marine-grade systems for shipyards and offshore vessels." },
  { n: "05", title: "Aviation", img: imgAviation, copy: "Engine, avionics and ground support equipment." },
  { n: "06", title: "Manufacturing", img: imgManufacturing, copy: "Heavy industrial assembly and process automation." },
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
  { n: "P/01", title: "Mechanical Equipment", img: imgMechanical, copy: "Pumps, valves, compressors, flanges, fittings and precision-engineered piping systems for high-pressure service.", items: ["Centrifugal & Positive Displacement Pumps", "Ball, Gate, Globe & Check Valves", "Compressors & Heat Exchangers", "Flanges, Fittings & Gaskets"] },
  { n: "P/02", title: "Electrical Systems", img: imgElectrical, copy: "Switchgear, transformers, motors, drives and complete LV/MV electrical distribution infrastructure.", items: ["LV/MV Switchgear & Panels", "Transformers & Reactors", "Motors, Drives & Soft Starters", "Cables, Terminations & Accessories"] },
  { n: "P/03", title: "Instrumentation & Control", img: imgInstrumentation, copy: "Field instruments, control systems and process automation for plant-wide visibility and safety.", items: ["Pressure, Flow & Level Transmitters", "PLC, DCS & SCADA Systems", "Control Valves & Actuators", "Safety & Fire-Gas Detection"] },
  { n: "P/04", title: "Process Equipment", img: imgProcess, copy: "Heat exchangers, separators, vessels and skid-mounted process packages built to specification.", items: ["Pressure Vessels & Separators", "Heat Exchangers & Coolers", "Filtration & Treatment Skids", "Custom-Engineered Packages"] },
  { n: "P/05", title: "Industrial Chemicals", img: imgChemicals, copy: "Lubricants, treatment chemicals and specialty fluids supporting refineries, pipelines and offshore operations.", items: ["Industrial Lubricants & Greases", "Drilling & Completion Fluids", "Corrosion & Scale Inhibitors", "Cleaning & Treatment Chemicals"] },
  { n: "P/06", title: "Logistics & Spares", img: imgLogistics, copy: "Inventory programs, expedited spares and integrated freight to keep operations continuously online.", items: ["OEM Genuine Spare Parts", "Vendor-Managed Inventory", "Expedited Air & Sea Freight", "Project Cargo Coordination"] },
];

export const partners: PartnerItem[] = [
  { name: "Dongeun Valve", role: "Industrial Valves - South Korea" },
  { name: "Himile Mechanical", role: "Precision Engineering - China" },
  { name: "Wooju Gaspack", role: "Gas Handling Systems - South Korea" },
  { name: "HS Valve", role: "Valves & Pipeline - South Korea" },
  { name: "Horizon Water", role: "Water Treatment - China" },
  { name: "Cangzhou Hongding", role: "Pipes & Fittings - China" },
];

export const brands: BrandItem[] = [
  { name: "GE" },
  { name: "Mitsubishi", logo: imgBrandMitsubishi },
  { name: "Schneider", logo: imgBrandSchneider },
  { name: "Honeywell", logo: imgBrandHoneywell },
  { name: "Omron", logo: imgBrandOmron },
  { name: "ABB", logo: imgBrandAbb },
  { name: "Fanuc", logo: imgBrandFanuc },
  { name: "Eaton", logo: imgBrandEaton },
  { name: "Bosch", logo: imgBrandBosch },
  { name: "Lenze", logo: imgBrandLenze },
  { name: "Banner", logo: imgBrandBanner },
  { name: "Siemens" },
];

export const clients: ClientItem[] = [
  { name: "NMDC", logo: imgClientNmdc },
  { name: "ADNOC" },
  { name: "Borouge", logo: imgClientBorouge },
  { name: "NPCC", logo: imgClientNpcc },
  { name: "DEWA", logo: imgClientDewa },
  { name: "EWEC", logo: imgClientEwec },
  { name: "G42", logo: imgClientG42 },
  { name: "DP World", logo: imgClientDpWorld },
  { name: "Fertiglobe", logo: imgClientFertiglobe },
  { name: "Abu Dhabi Ports", logo: imgClientAbuDhabiPorts },
  { name: "Oman Drydock", logo: imgClientOman },
  { name: "GMS", logo: imgClientGms },
];

export const regions: PresenceRegionItem[] = [
  { region: "Middle East", countries: ["United Arab Emirates", "Oman", "Qatar", "Kuwait", "Bahrain", "Saudi Arabia"] },
  { region: "Europe", countries: ["United Kingdom", "Estonia"] },
  { region: "Americas", countries: ["United States"] },
  { region: "Asia Pacific", countries: ["South Korea", "Japan"] },
];
