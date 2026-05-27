import imgCentrifugalCompressor from "@/assets/projects/centrifugal compressors.png";
import imgCentrifugalCompressor2 from "@/assets/projects/centrigual compresso 2.jpg";
import imgCentrifugalAirCompressor from "@/assets/projects/CENTRIFUGAL-AIR-COMPRESSORS.webp";
import imgCentrifugalAirCompressor2 from "@/assets/projects/FS-Elliott-P700 Centrifugal Compressor.png";
import imgProject5 from "@/assets/projects/project 5-2.jpg";
import imgProject6 from "@/assets/projects/project 6.jpg";
import imgProject7 from "@/assets/projects/project 7.png";
import imgProject8 from "@/assets/projects/project 8.png";
import imgProject9 from "@/assets/projects/project 9.jpg";
import imgProject10 from "@/assets/projects/project 10.webp";
import imgProject11 from "@/assets/projects/project 11.jfif";
import imgProject12 from "@/assets/projects/project 12.webp";
import imgProject13 from "@/assets/projects/project 13.webp";
import imgProject14 from "@/assets/projects/project 14.jpg";
import imgProject15 from "@/assets/projects/project 15.webp";
import imgProject16 from "@/assets/projects/project 16.webp";
import imgProject17 from "@/assets/projects/project 17.webp";
import imgProject18 from "@/assets/projects/project 18.jpg";
import imgProject19 from "@/assets/projects/project 19.jpg";

export type ProjectItem = {
  n: string;
  title: string;
  client: string;
  year: string;
  description: string;
  img: string;
  scope?: string;
};

export const projects: ProjectItem[] = [
  {
    n: "PR/01",
    title: "Centrifugal Gas Compressor",
    scope: "Oil & Gas",
    client: "Southwest Institute of Chemical Co., Ltd.",
    year: "2025",
    img: imgCentrifugalCompressor,
    description: "CO2 Centrifugal Compressor Unit, 7898 Nm3/hr, 3.8 MPa(G)",
  },
  {
    n: "PR/02",
    title: "Centrifugal Gas Compressor",
    scope: "Oil & Gas",
    client: "China Pingmei Shenma Energy and Chemical Group Co., Ltd.",
    year: "2025",
    img: imgCentrifugalCompressor2,
    description: "Ammonia Gas Mixture Centrifugal Compressor Unit, 20620 Nm3/hr, 0.417 MPa",
  },
  {
    n: "PR/03",
    title: "Centrifugal Air Compressor",
    scope: "Oil & Gas",
    client: "Lihuayi Weiyuan Chemical Co., Ltd.",
    year: "2025",
    img: imgCentrifugalAirCompressor,
    description: "Air Centrifugal Compressor Unit, 86000 Nm3/hr, 0.85 MPa(A)",
  },
  {
    n: "PR/04",
    title: "Centrifugal Air Compressor",
    scope: "Oil & Gas",
    client: "SINOPEC Materials & Equipment (Dalian) Co., Ltd.",
    year: "2025",
    img: imgCentrifugalAirCompressor2,
    description: "Air Centrifugal Compressor Unit, 200 Nm3/min, 0.75 MPa(G)",
  },
  {
    n: "PR/05",
    title: "McDermott&HHI&L&T Ruya",
    client: "NOC",
    year: "2024",
    img: imgProject5,
    description: "L&T Platform 12: Separators and KOD, Air receiver",
  },
  {
    n: "PR/06",
    title: "McDermott Manatee",
    client: "Shell",
    year: "2024",
    img: imgProject6,
    description: "PWT Vessel & skid, Oil Separator",
  },
  {
    n: "PR/07",
    title: "SBM LIZA 6 WHIPTAIL Jaguar FPSO",
    client: "ExxonMobil",
    year: "2024",
    img: imgProject7,
    description:
      "TEG Vessels, TEG heat exchanger, TEG skid, PWT vessels, Gas Scrubber, Oil Separator, Oil Internals, S&T HEX, Misc Vessels, Chemical Distribution Skid",
  },
  {
    n: "PR/08",
    title: "Modec Raia (BM-C-33) FPSO",
    client: "Equinor",
    year: "2023",
    img: imgProject8,
    description: "TEG Vessels, MISC Vessel, RO Skids, Titanium Tubing",
  },
  {
    n: "PR/09",
    title: "AC BOILER / HP VALVES",
    client: "ADNOC HEAT RECOVERY PJT (WHRP)",
    year: "2022",
    img: imgProject9,
    description: "Gate Valves, Globe Valves, Check Valves",
  },
  {
    n: "PR/10",
    title: "HANWHA POWER SYSTEM",
    client: "ADNOC DALMA IAC PJT",
    year: "2023",
    img: imgProject10,
    description: "Gate Valves, Ball Valves, Check Valves",
  },
  {
    n: "PR/11",
    title: "HANWHA POWER SYSTEM",
    client: "ADNOC MERAM PJT",
    year: "2024",
    img: imgProject11,
    description: "Gate Valves, Globe Valves, Check Valves, Ball Valves",
  },
  {
    n: "PR/12",
    title: "CPECC - ADNOC BAB & BUHASA",
    client: "ADNOC BAB & BUHASA",
    year: "2025",
    img: imgProject12,
    description: "Globe (Needle) Valves",
  },
  {
    n: "PR/13",
    title: "Hyundai ENF CHP Project",
    client: "KR Industry, Korea",
    year: "2024",
    img: imgProject13,
    description: "Ball Valves - API 6D - Up to 12\"",
  },
  {
    n: "PR/14",
    title: "Boryeong New CCPP Project",
    client: "Doosan Enerbility, Korea",
    year: "2024",
    img: imgProject14,
    description: "Flanged Ball Valve",
  },
  {
    n: "PR/15",
    title: "Supply Management Facility 2025 Project",
    client: "KOGAS, Korea",
    year: "2025",
    img: imgProject15,
    description: "Ball Valves - API 6D - Over 12\"",
  },
  {
    n: "PR/16",
    title: "Marafiq STG",
    client: "Doosan Enerbility Co., Ltd.",
    year: "2025",
    img: imgProject16,
    description: "No-Absestos, Insulation Kit, SWG Gaskets",
  },
  {
    n: "PR/17",
    title: "TW Biomass Combined Heat and Power Plant",
    client: "DL E&C",
    year: "2025",
    img: imgProject17,
    description: "SWG, RTJ - Gaskets",
  },
  {
    n: "PR/18",
    title: "S-OIL Gas Turbine Generator Project",
    client: "DL E&C",
    year: "2026",
    img: imgProject18,
    description: "Non-Asbestos, Insulation Kit, SWG - Gaskets",
  },
  {
    n: "PR/19",
    title: "Guam UKUDU CCPP BOP Plant EPC",
    client: "Doosan Enerbility Co., Ltd.",
    year: "2026",
    img: imgProject19,
    description: "RTJ - Gaskets",
  },
];
