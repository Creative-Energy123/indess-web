import { ArrowLeft } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../../../components/layout/Layout";
import Reveal from "../../../components/Reveal";
import { CATALOG_DETAIL_PAGES } from "./data";
import { CATALOG_CATEGORIES, CATALOG_FILTERS } from "../data";

const matchesQuery = (query: string, value: string) => value.toLowerCase().includes(query.toLowerCase());

export default function CatalogCategoryPage() {
  const { slug = "" } = useParams();
  const data = CATALOG_DETAIL_PAGES[slug];
  const currentCategory = CATALOG_CATEGORIES.find((category) => category.cards.some((card) => card.id === slug));
  const [activeCategory, setActiveCategory] = useState<string>(currentCategory?.key ?? "all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setActiveCategory(currentCategory?.key ?? "all");
  }, [currentCategory?.key, slug]);

  const quickNavCards = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return CATALOG_CATEGORIES.filter((category) => activeCategory === "all" || category.key === activeCategory)
      .flatMap((category) => category.cards)
      .filter((card) => !query || matchesQuery(query, card.title) || card.products.some((product) => matchesQuery(query, product)));
  }, [activeCategory, searchValue]);

  if (!data) {
    return (
      <Layout>
        <section className="page-enter bg-white pt-40 pb-32">
          <div className="page-shell text-center">
            <p className="text-gold mb-4 text-[11px] uppercase tracking-editorial">Coming Soon</p>
            <h1 className="font-display-light mb-8 text-4xl md:text-5xl">This sub-catalog is being prepared.</h1>
            <Link to="/catalog" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-primary transition-colors hover:text-gold">
              <ArrowLeft size={14} /> Back to Catalog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page-enter border-b border-border-soft bg-white pt-32 md:pt-36">
        <div className="page-shell pb-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">Product Navigation</p>
              <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-foreground/75">
                Use filters and search to quickly switch to any product sub-category page.
              </p>
            </div>
            <div className="lg:col-span-5">
              <label htmlFor="subcategory-search" className="mb-3 block text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60">
                Search Products
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                <input
                  id="subcategory-search"
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
        <div className="page-shell py-4">
          <div className="mb-4 flex gap-2 overflow-x-auto">
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

          <div className="flex gap-2 overflow-x-auto pb-1">
            {quickNavCards.map((card) => {
              const isCurrent = card.id === slug;

              return (
                <Link
                  key={card.id}
                  to={`/catalog/${card.id}`}
                  className={
                    isCurrent
                      ? "shrink-0 bg-secondary px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground"
                      : "shrink-0 border border-border-soft bg-white px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  }
                >
                  {card.title}
                </Link>
              );
            })}
            {quickNavCards.length === 0 && (
              <span className="text-[11px] uppercase tracking-[0.16em] text-foreground/45">No matching products</span>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border-soft bg-background-subtle py-12 md:py-14">
        <div className="page-shell">
          <Link to="/catalog" className="mb-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-foreground/60 transition-colors hover:text-primary">
            <ArrowLeft size={14} /> Back to Catalog
          </Link>

          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-gold text-[11px] font-medium uppercase tracking-editorial">
                  {data.parentN} - {data.parent}
                </span>
                <span className="rule-gold h-px w-10" />
                <span className="text-[11px] uppercase tracking-editorial text-foreground/60">Sub-Category</span>
              </div>

              <h1 className="font-display-light text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
                {data.title}
              </h1>

              <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.8] text-foreground/70">{data.intro}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={data.hero} alt={data.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="page-shell">
          <div className="mb-12 flex items-baseline gap-6 border-b border-border-soft pb-6">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Range</span>
            <h2 className="font-display-light text-3xl tracking-tight md:text-4xl">All {data.title}</h2>
            <span className="ml-auto text-[11px] uppercase tracking-editorial text-foreground/60">{data.items.length} Types</span>
          </div>

          <div className="grid gap-px bg-border-soft md:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item, index) => (
              <Reveal key={item.name}>
                <article className="group flex h-full flex-col bg-white transition-colors hover:bg-background-subtle">
                  <div className="aspect-[4/3] overflow-hidden bg-background-subtle">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={768}
                      height={576}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex items-baseline gap-3">
                      <span className="text-gold text-[11px] uppercase tracking-editorial">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="font-display-light text-xl tracking-tight">{item.name}</h3>
                    </div>
                    <div className="rule-gold mb-5 h-px w-10" />
                    <p className="text-[13px] font-light leading-[1.8] text-foreground/75">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
