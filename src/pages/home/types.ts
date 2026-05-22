export type IndustryItem = {
  n: string;
  title: string;
  img: string;
  copy: string;
};

export type ServiceItem = {
  n: string;
  title: string;
  copy: string;
};

export type ExpertiseItem = {
  n: string;
  title: string;
  copy: string;
};

export type ProductItem = {
  n: string;
  slug: string;
  title: string;
  img: string;
  copy: string;
  items: string[];
};

export type PartnerItem = {
  name: string;
  role: string;
  logo?: string;
};

export type ClientItem = {
  name: string;
  logo?: string;
};

export type BrandItem = {
  name: string;
  logo?: string;
};

export type PresenceRegionItem = {
  region: string;
  countries: string[];
};
