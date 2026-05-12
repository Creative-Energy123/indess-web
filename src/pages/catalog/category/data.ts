import imgValves from "../../../assets/catalog/valves.jpg";
import vBall from "../../../assets/catalog/valves/ball.jpg";
import vButterfly from "../../../assets/catalog/valves/butterfly.jpg";
import vBypass from "../../../assets/catalog/valves/bypass.jpg";
import vCheck from "../../../assets/catalog/valves/check.jpg";
import vControl from "../../../assets/catalog/valves/control.jpg";
import vDiaphragm from "../../../assets/catalog/valves/diaphragm.jpg";
import vGate from "../../../assets/catalog/valves/gate.jpg";
import vGlobe from "../../../assets/catalog/valves/globe.jpg";
import vNeedle from "../../../assets/catalog/valves/needle.jpg";
import vPinch from "../../../assets/catalog/valves/pinch.jpg";
import vPlug from "../../../assets/catalog/valves/plug.jpg";
import vRelief from "../../../assets/catalog/valves/pressure-relief.jpg";
import vSafety from "../../../assets/catalog/valves/safety.jpg";
import vSlide from "../../../assets/catalog/valves/slide.jpg";
import vSolenoid from "../../../assets/catalog/valves/solenoid.jpg";
import { CATALOG_CATEGORIES } from "../data";

import type { CatalogDetailPage } from "./types";

type CatalogImageEntry = {
  path: string;
  url: string;
  tokens: string[];
};

const catalogItemImages = import.meta.glob("../../../assets/catalog/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const FOLDER_BY_SLUG: Record<string, string> = {
  pumps: "mechanical",
  compressors: "mechanical",
  pipes: "mechanical",
  "heat-exchangers": "mechanical",
  transmitters: "instrumentation",
  "control-systems": "instrumentation",
  "control-valves": "instrumentation",
  "safety-detection": "instrumentation",
  switchgear: "electrical",
  transformers: "electrical",
  motors: "electrical",
  cables: "electrical",
  "lighting-ups": "electrical",
  lubricants: "chemicals",
  "treatment-chemicals": "chemicals",
  "drilling-fluids": "chemicals",
  "cleaning-chemicals": "chemicals",
};

const STOP_WORDS = new Set([
  "and",
  "for",
  "area",
  "units",
  "system",
  "systems",
  "equipment",
  "chemicals",
  "chemical",
  "industrial",
  "power",
  "control",
  "panels",
  "packages",
]);

const toTokens = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => (token.endsWith("s") && token.length > 4 ? token.slice(0, -1) : token))
    .filter((token) => !STOP_WORDS.has(token));

const imageEntries: CatalogImageEntry[] = Object.entries(catalogItemImages).map(([path, url]) => {
  const fileName = path.split("/").pop() ?? "";

  return {
    path,
    url,
    tokens: toTokens(fileName),
  };
});

const scoreImage = (entry: CatalogImageEntry, productTokens: string[]) => {
  const overlap = productTokens.filter((token) => entry.tokens.includes(token)).length;

  if (!overlap) {
    return 0;
  }

  return overlap * 10 + entry.tokens.length;
};

const resolveCatalogItemImage = (
  slug: string,
  productName: string,
  fallbackImage: string,
  usedPaths: Set<string>,
  index: number
) => {
  const preferredFolder = FOLDER_BY_SLUG[slug];
  const preferredEntries = preferredFolder
    ? imageEntries.filter((entry) => entry.path.includes(`/${preferredFolder}/`))
    : imageEntries;

  const productTokens = toTokens(productName);
  const scored = preferredEntries
    .map((entry) => ({ entry, score: scoreImage(entry, productTokens) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  const bestAvailable = scored.find(({ entry }) => !usedPaths.has(entry.path));
  if (bestAvailable) {
    usedPaths.add(bestAvailable.entry.path);
    return bestAvailable.entry.url;
  }

  const fallbackPool = preferredEntries.filter((entry) => !usedPaths.has(entry.path));
  if (fallbackPool.length > 0) {
    const picked = fallbackPool[index % fallbackPool.length];
    usedPaths.add(picked.path);
    return picked.url;
  }

  return fallbackImage;
};

const generatedCatalogDetailPages: Record<string, CatalogDetailPage> = Object.fromEntries(
  CATALOG_CATEGORIES.flatMap((category) =>
    category.cards.map((card) => [
      card.id,
      (() => {
        const usedPaths = new Set<string>();

        return {
        slug: card.id,
        parent: category.label,
        parentN: category.number,
        title: card.title,
        intro: `Explore our ${card.title.toLowerCase()} range for reliable industrial performance, engineered for demanding operations across energy, process and marine sectors.`,
        hero: card.image,
        items: card.products.map((product, index) => ({
          name: product,
          image: resolveCatalogItemImage(card.id, product, card.image, usedPaths, index),
          description: `${product} solutions selected for durability, compliance and dependable field performance.`,
        })),
      } satisfies CatalogDetailPage;
      })(),
    ])
  )
);

const catalogDetailOverrides: Record<string, CatalogDetailPage> = {
  valves: {
    slug: "valves",
    parent: "Mechanical Solutions",
    parentN: "01",
    title: "Valves",
    intro:
      "A complete range of industrial valves engineered for flow control, isolation, and safety across oil and gas, petrochemical, marine, and utility applications.",
    hero: imgValves,
    items: [
      {
        name: "Ball Valves",
        image: vBall,
        description:
          "A ball valve is a shut-off valve that controls the flow of a liquid or gas by means of a rotary ball having a bore.",
      },
      {
        name: "Check Valves",
        image: vCheck,
        description:
          "Check valves provide flow in one direction and help improve process safety and installation reliability.",
      },
      {
        name: "Control Valves",
        image: vControl,
        description:
          "Control valves are used to regulate flow in hydraulic and process circuits across industrial systems.",
      },
      {
        name: "Gate Valves",
        image: vGate,
        description: "Gate valves are used to allow full flow or to isolate flow completely in a line.",
      },
      {
        name: "Globe Valves",
        image: vGlobe,
        description: "Globe valves are suited for throttling and directional flow control in steam and fluid service.",
      },
      {
        name: "Butterfly Valves",
        image: vButterfly,
        description: "Butterfly valves use a rotating disc mounted on a stem for opening and closing.",
      },
      {
        name: "Safety Valves",
        image: vSafety,
        description:
          "Safety valves are pressure relief devices designed to protect life, equipment, and process systems.",
      },
      {
        name: "Needle Valves",
        image: vNeedle,
        description: "Needle valves provide fine flow control through a precision needle-like closure element.",
      },
      {
        name: "Plug Valves",
        image: vPlug,
        description:
          "Plug valves are quarter-turn valves using a cylindrical or tapered plug to start or stop flow.",
      },
      {
        name: "Pressure Relief Valves",
        image: vRelief,
        description:
          "Pressure relief valves protect piping and equipment by releasing pressure during overpressure events.",
      },
      {
        name: "Solenoid Valves",
        image: vSolenoid,
        description:
          "Solenoid valves are electrically actuated valves used for fast, reliable opening and closing control.",
      },
      {
        name: "Slide Valves",
        image: vSlide,
        description: "Slide valves are used for low-pressure flow control of gases, liquids, and suspended solids.",
      },
      {
        name: "Bypass Valves",
        image: vBypass,
        description:
          "Bypass valves provide an alternate route for fluid by diverting part of the main system flow.",
      },
      {
        name: "Pinch Valves",
        image: vPinch,
        description: "Pinch valves are used for shutoff and throttling by constricting flexible flow paths.",
      },
      {
        name: "Diaphragm Valves",
        image: vDiaphragm,
        description: "Diaphragm valves are linear motion valves for starting, regulating, or stopping fluid flow.",
      },
    ],
  },
};

export const CATALOG_DETAIL_PAGES: Record<string, CatalogDetailPage> = {
  ...generatedCatalogDetailPages,
  ...catalogDetailOverrides,
};
