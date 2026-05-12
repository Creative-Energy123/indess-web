import cables from "../../assets/catalog/cables.jpg";
import cleaningChemicals from "../../assets/catalog/cleaning-chemicals.jpg";
import compressors from "../../assets/catalog/compressors.jpg";
import controlSystems from "../../assets/catalog/control-systems.jpg";
import controlValves from "../../assets/catalog/control-valves.jpg";
import deck from "../../assets/catalog/deck.jpg";
import drillingFluids from "../../assets/catalog/drilling-fluids.jpg";
import engineRoom from "../../assets/catalog/engine-room.jpg";
import heatExchangers from "../../assets/catalog/heat-exchangers.jpg";
import lightingUps from "../../assets/catalog/lighting-ups.jpg";
import lubricants from "../../assets/catalog/lubricants.jpg";
import motors from "../../assets/catalog/motors.jpg";
import pipes from "../../assets/catalog/pipes.jpg";
import pumps from "../../assets/catalog/pumps.jpg";
import safetyDetection from "../../assets/catalog/safety-detection.jpg";
import safetyNavigation from "../../assets/catalog/safety-navigation.jpg";
import switchgear from "../../assets/catalog/switchgear.jpg";
import transformers from "../../assets/catalog/transformers.jpg";
import transmitters from "../../assets/catalog/transmitters.jpg";
import treatmentChemicals from "../../assets/catalog/treatment-chemicals.jpg";
import valves from "../../assets/catalog/valves.jpg";
import vlcc from "../../assets/catalog/vlcc.jpg";

import type { CatalogCategory } from "./types";

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    key: "mechanical",
    number: "01",
    label: "Mechanical Solutions",
    cards: [
      {
        id: "pumps",
        title: "Pumps",
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
        id: "pipes",
        title: "Pipes & Fittings",
        image: pipes,
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
    key: "chemicals",
    number: "04",
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
    number: "05",
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
