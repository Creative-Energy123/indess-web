import imgClientNmdc from "../../assets/clients/NMDC.jpg";
import imgClientBorouge from "../../assets/clients/Borouge.jpg";
import imgClientNpcc from "../../assets/clients/NPCC.png";
import imgClientDewa from "../../assets/clients/dewa.jpg";
import imgClientEwec from "../../assets/clients/ewec-300x180.jpeg";
import imgClientG42 from "../../assets/clients/G42.jpg";
import imgClientDpWorld from "../../assets/clients/DP_World.jpg";
import imgClientFertiglobe from "../../assets/clients/fertiglobe.jpg";
import imgClientAbuDhabiPorts from "../../assets/clients/Abu_Dhabi_Ports.jpg";
import imgClientOman from "../../assets/clients/OMAN-300x180.jpeg";
import imgClientGms from "../../assets/clients/GMS-300x180.jpeg";

import type { ClientPageItem } from "./types";

export const clientPageData: ClientPageItem[] = [
  {
    name: "ADNOC",
    sector: "Oil & Gas",
    project: "Supply of valves, flanges and instrumentation packages for upstream operations.",
  },
  {
    name: "NMDC",
    logo: imgClientNmdc,
    sector: "Marine & Dredging",
    project: "Mechanical and electrical equipment for offshore marine construction projects.",
  },
  {
    name: "Borouge",
    logo: imgClientBorouge,
    sector: "Petrochemical",
    project: "Process equipment and treatment chemicals for polyolefin manufacturing facilities.",
  },
  {
    name: "NPCC",
    logo: imgClientNpcc,
    sector: "EPC / Offshore",
    project: "Pipes, fittings and structural steel for offshore platform fabrication.",
  },
  {
    name: "DEWA",
    logo: imgClientDewa,
    sector: "Power & Water",
    project: "Switchgear, transformers and control systems for utility infrastructure.",
  },
  {
    name: "EWEC",
    logo: imgClientEwec,
    sector: "Power Generation",
    project: "Electrical and instrumentation supply for power and water generation assets.",
  },
  {
    name: "G42",
    logo: imgClientG42,
    sector: "Technology & AI",
    project: "Specialised industrial equipment for data-centre and infrastructure projects.",
  },
  {
    name: "DP World",
    logo: imgClientDpWorld,
    sector: "Ports & Logistics",
    project: "Marine-grade hardware, lubricants and spares for port operations.",
  },
  {
    name: "Fertiglobe",
    logo: imgClientFertiglobe,
    sector: "Fertilizers",
    project: "Process valves, pumps and chemicals for ammonia and urea production.",
  },
  {
    name: "Abu Dhabi Ports",
    logo: imgClientAbuDhabiPorts,
    sector: "Maritime",
    project: "Mechanical and safety equipment for port infrastructure expansion.",
  },
  {
    name: "Oman Drydock",
    logo: imgClientOman,
    sector: "Ship Repair",
    project: "Marine spares, valves and treatment chemicals for VLCC servicing.",
  },
  {
    name: "GMS",
    logo: imgClientGms,
    sector: "Offshore Services",
    project: "Specialty pumps, switchgear and lifting equipment for self-elevating vessels.",
  },
];
