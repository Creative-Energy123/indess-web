export type QuoteRequestForm = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  productCategory: string;
  message: string;
};

export type CitySuggestion = {
  city: string;
  country: string;
  label: string;
};

export type QuoteRequestPanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
