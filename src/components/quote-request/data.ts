import type { QuoteRequestForm } from "./types";

export const INITIAL_QUOTE_FORM: QuoteRequestForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  productCategory: "",
  budget: "",
  estimatedDeliveryTime: "",
  message: "",
};

export const PRODUCT_CATEGORY_OPTIONS = [
  "Valves",
  "Pumps",
  "Compressors",
  "Pipes & Fittings",
  "Heat Exchangers",
  "Transmitters",
  "Control Systems",
  "Control Valves",
  "Safety & Detection",
  "Switchgear",
  "Transformers",
  "Motors & Drives",
  "Cables & Accessories",
  "Lighting & UPS",
  "Lubricants",
  "Treatment Chemicals",
  "Drilling Fluids",
  "Cleaning Chemicals",
  "Marine Products",
];
