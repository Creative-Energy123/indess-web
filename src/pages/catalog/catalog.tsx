import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { CATALOG_CATEGORIES, CATALOG_FILTERS } from "./data";

const matchesQuery = (query: string, value: string) => value.toLowerCase().includes(query.toLowerCase());

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchValue, setSearchValue] = useState("");

  const visibleCategories = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return CATALOG_CATEGORIES.filter((category) => activeCategory === "all" || category.key === activeCategory)
      .map((category) => {
        if (!query) {
          return category;
        }

        const cards = category.cards.filter(
          (card) =>
            matchesQuery(query, card.title) || card.products.some((product) => matchesQuery(query, product))
        );

        return {
          ...category,
          cards,
        };
      })
      .filter((category) => category.cards.length > 0);
  }, [activeCategory, searchValue]);

  return (
    <div className="page-enter bg-white">
      <section className="border-b border-border-soft bg-background-subtle pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-primary/80">
                <span>Catalog</span>
                <span className="h-px w-10 bg-secondary" />
                <span>Product Reference</span>
              </div>

              <h1 className="font-display text-5xl font-light leading-[0.95] text-primary-dark md:text-6xl lg:text-7xl">
                Product Catalog
              </h1>

              <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/80 md:text-lg">
                Browse our curated product ranges for industrial energy, marine and process operations. Use
                categories and search to quickly locate relevant supply lines for your projects.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-8">
              <label htmlFor="catalog-search" className="mb-3 block text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60">
                Search Products
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                <input
                  id="catalog-search"
                  type="text"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Search by product or category"
                  className="w-full border border-border-soft bg-white py-4 pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/45 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-border-soft bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {CATALOG_FILTERS.map((filter) => {
              const isActive = activeCategory === filter.key;

              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveCategory(filter.key)}
                  className={
                    isActive
                      ? "shrink-0 bg-primary px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white"
                      : "shrink-0 border border-border-soft bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {visibleCategories.length === 0 && (
              <div className="border border-border-soft bg-background-subtle px-6 py-10 text-center text-foreground/70">
                No catalog items match your search.
              </div>
            )}

            {visibleCategories.map((category) => (
              <article key={category.key}>
                <header className="mb-12 flex items-end gap-4 border-b border-border-soft pb-6">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-secondary">{category.number}</span>
                  <h2 className="font-display text-4xl leading-[0.95] text-primary-dark md:text-5xl">{category.label}</h2>
                </header>

                <div className="grid gap-px bg-border-soft md:grid-cols-2 lg:grid-cols-3">
                  {category.cards.map((card) => (
                    <article key={card.id} className="flex h-full flex-col bg-white">
                      <div className="aspect-[5/4] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-8">
                        <h3 className="font-display text-xl text-primary-dark">{card.title}</h3>
                        <span className="rule-gold mt-4 h-px w-12" />

                        <ul className="mt-6 space-y-2.5 text-[13px] font-light text-foreground/75">
                          {card.products.map((product) => (
                            <li key={product} className="flex items-start gap-2.5">
                              <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 bg-secondary" />
                              <span>{product}</span>
                            </li>
                          ))}
                        </ul>

                        <Link to={`/catalog/${card.id}`} className="mt-8 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.18em] text-primary transition-all hover:translate-x-1 hover:text-secondary">
                          View All
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
