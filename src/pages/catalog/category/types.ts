export type CatalogDetailItem = {
  name: string;
  description: string;
  image: string;
};

export type CatalogDetailPage = {
  slug: string;
  parent: string;
  parentN: string;
  title: string;
  intro: string;
  hero: string;
  items: CatalogDetailItem[];
};
