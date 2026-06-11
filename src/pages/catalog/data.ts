import cables from "../../assets/catalog/Electric Systems/Cables.jpg";
import cleaningChemicals from "../../assets/catalog/Industrial Chemicals/cleaning chemicals.png";
import compressors from "../../assets/catalog/Mechanical Equipments/Compressors.jpg";
import controlSystems from "../../assets/catalog/Instrumentation & Control/Control Systems.jpg";
import controlValves from "../../assets/catalog/Instrumentation & Control/Control Valves.jpg";
import deck from "../../assets/catalog/Marine & Offshore/Deck Equipment.jpg";
import drillingFluids from "../../assets/catalog/Industrial Chemicals/Drilling Fluids.png";
import engineRoom from "../../assets/catalog/Marine & Offshore/Engine Room Systems.png";
import heatExchangers from "../../assets/catalog/Mechanical Equipments/Heat Exchangers.jpg";
import lightingUps from "../../assets/catalog/Electric Systems/Light & UPS (2).png";
import lubricants from "../../assets/catalog/Industrial Chemicals/Lubricants.png";
import motors from "../../assets/catalog/Electric Systems/Motors.jpg";
import gaskets from "../../assets/catalog/Mechanical Equipments/Gaskets.jfif";
import pumps from "../../assets/catalog/Mechanical Equipments/Pump & Motor.png";
import safetyDetection from "../../assets/catalog/Instrumentation & Control/Safety Detection.jpg";
import safetyNavigation from "../../assets/catalog/Marine & Offshore/Safety & Navigation.png";
import switchgear from "../../assets/catalog/Electric Systems/Switchgear.jpg";
import transformers from "../../assets/catalog/Electric Systems/Transformers.jpg";
import transmitters from "../../assets/catalog/Instrumentation & Control/Transmitters.jpg";
import treatmentChemicals from "../../assets/catalog/Industrial Chemicals/Treatment Chemicals .png";
import valves from "../../assets/catalog/Mechanical Equipments/Valves.jpg";
import vlcc from "../../assets/catalog/Marine & Offshore/VLCC Systems.png";
import pressureVessels from "../../assets/catalog/Mechanical Equipments/Pressure vessel.jpg";
import columnsTowers from "../../assets/catalog/Mechanical Equipments/Columns and towers.png";
import skidPackages from "../../assets/catalog/Mechanical Equipments/Skid Package.png";
import filtrationSystem from "../../assets/catalog/Mechanical Equipments/Filteration System.jpg";
import type { CatalogCategory } from "./types";

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    key: "mechanical",
    number: "01",
    label: "Mechanical Solutions",
    cards: [
      {
        id: "pumps-motors",
        title: "Pumps & Motors",
        image: pumps,
        products: ["Centrifugal Pumps", "Positive Displacement Pumps", "API Process Pumps", "Booster Pumps"],
      },
      {
        id: "valves",
        title: "Valves",
        image: valves,
        products: ["Gate & Globe Valves", "Ball & Butterfly Valves", "Pressure Relief Valves", "Check Valves"],
      },
      {
        id: "compressors",
        title: "Compressors",
        image: compressors,
        products: ["Reciprocating Compressors", "Screw Compressors", "Centrifugal Compressors", "Gas Boosters"],
      },
      {
        id: "gaskets-pipes-fittings-flanges",
        title: "Gaskets, Pipes Fittings & Flanges",
        image: gaskets,
        products: ["Carbon Steel Pipes", "Stainless Steel Fittings", "Flanges", "Gaskets & Fasteners"],
      },
      {
        id: "heat-exchangers",
        title: "Heat Exchangers",
        image: heatExchangers,
        products: ["Shell & Tube", "Plate Heat Exchangers", "Air Cooled Exchangers", "Cooling Modules"],
      },
    ],
  },
  {
    key: "instrumentation",
    number: "02",
    label: "Instrumentation & Control",
    cards: [
      {
        id: "transmitters",
        title: "Transmitters",
        image: transmitters,
        products: ["Pressure Transmitters", "Temperature Transmitters", "Level Transmitters", "Flow Transmitters"],
      },
      {
        id: "control-systems",
        title: "Control Systems",
        image: controlSystems,
        products: ["PLC Systems", "DCS Platforms", "SCADA Integration", "RTU Panels"],
      },
      {
        id: "control-valves",
        title: "Control Valves",
        image: controlValves,
        products: ["Globe Control Valves", "Rotary Control Valves", "Actuators", "Positioners"],
      },
      {
        id: "safety-detection",
        title: "Safety Detection",
        image: safetyDetection,
        products: ["Gas Detectors", "Flame Detectors", "Fire & Gas Panels", "Alarm Beacons"],
      },
    ],
  },
  {
    key: "electrical",
    number: "03",
    label: "Electrical Systems",
    cards: [
      {
        id: "switchgear",
        title: "Switchgear",
        image: switchgear,
        products: ["LV Switchgear", "MV Switchgear", "Protection Relays", "Power Distribution Boards"],
      },
      {
        id: "transformers",
        title: "Transformers",
        image: transformers,
        products: ["Distribution Transformers", "Power Transformers", "Dry-Type Transformers", "Isolation Units"],
      },
      {
        id: "motors",
        title: "Motors",
        image: motors,
        products: ["Induction Motors", "Explosion-Proof Motors", "Servo Motors", "Motor Control Centers"],
      },
      {
        id: "cables",
        title: "Cables",
        image: cables,
        products: ["Power Cables", "Instrumentation Cables", "Fire Resistant Cables", "Cable Glands"],
      },
      {
        id: "lighting-ups",
        title: "Lighting & UPS",
        image: lightingUps,
        products: ["Hazardous Area Lighting", "Emergency Lighting", "UPS Systems", "Battery Banks"],
      },
    ],
  },
  {
    key: "static-equipments",
    number: "04",
    label: "Static Equipments",
    cards: [
      {
        id: "filteration-system",
        title: "Filteration System",
        image: filtrationSystem,
        products: ["Centrifugal Filtration", "Pressure Filtration", "Vacuum Filtration", "Self-Cleaning Filters"],
      },
      {
        id: "pressure-vessels",
        title: "Pressure Vessels",
        image: pressureVessels,
        products: ["Storage Vessels", "Reactor Vessels", "Separators", "Heat Exchangers"],
      },
      {
        id: "colums-towers",
        title: "Colums & Towers",
        image: columnsTowers,
        products: ["Distillation Columns", "Fractionating Towers", "Strippers", "Absorbers"],
      },
      {
        id: "skid-packages",
        title: "Skid Packages",
        image: skidPackages,
        products: ["Chemical Injection Skids", "Metering Skids", "Pump Skids", "Gas Conditioning Skids"],
      },
    ],
  },
  {
    key: "chemicals",
    number: "05",
    label: "Chemical & Process",
    cards: [
      {
        id: "lubricants",
        title: "Lubricants",
        image: lubricants,
        products: ["Industrial Lubricants", "Compressor Oils", "Hydraulic Oils", "Greases"],
      },
      {
        id: "treatment-chemicals",
        title: "Treatment Chemicals",
        image: treatmentChemicals,
        products: ["Corrosion Inhibitors", "Scale Inhibitors", "Biocides", "Demulsifiers"],
      },
      {
        id: "drilling-fluids",
        title: "Drilling Fluids",
        image: drillingFluids,
        products: ["Water-Based Mud", "Oil-Based Mud", "Additives", "Fluid Loss Control"],
      },
      {
        id: "cleaning-chemicals",
        title: "Cleaning Chemicals",
        image: cleaningChemicals,
        products: ["Degreasers", "Tank Cleaning Agents", "Descalers", "Specialty Solvents"],
      },
    ],
  },
  {
    key: "marine",
    number: "06",
    label: "Marine & Offshore",
    cards: [
      {
        id: "vlcc",
        title: "VLCC Systems",
        image: vlcc,
        products: ["Cargo Pumping Packages", "Mooring Equipment", "Deck Instrumentation", "Transfer Hoses"],
      },
      {
        id: "deck",
        title: "Deck Equipment",
        image: deck,
        products: ["Winches", "Cranes", "Capstans", "Hydraulic Power Units"],
      },
      {
        id: "engine-room",
        title: "Engine Room Systems",
        image: engineRoom,
        products: ["Fuel Conditioning", "Cooling Systems", "Auxiliary Pumps", "Monitoring Panels"],
      },
      {
        id: "safety-navigation",
        title: "Safety & Navigation",
        image: safetyNavigation,
        products: ["Bridge Electronics", "Life Saving Appliances", "Navigation Lights", "Marine Radios"],
      },
    ],
  },
];

export const CATALOG_FILTERS = [
  { key: "all", label: "All" },
  ...CATALOG_CATEGORIES.map((category) => ({ key: category.key, label: category.label })),
] as const;
