export type CatalogCard = {
  id: string;
  title: string;
  image: string;
  products: string[];
};

export type CatalogCategory = {
  key: string;
  number: string;
  label: string;
  cards: CatalogCard[];
};
