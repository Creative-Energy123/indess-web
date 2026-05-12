import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Layout from "../../../components/layout/Layout";
import Reveal from "../../../components/Reveal";
import { CATALOG_DETAIL_PAGES } from "./data";

type CatalogCategoryPageProps = {
  onRequestQuote: () => void;
};

export default function CatalogCategoryPage({ onRequestQuote }: CatalogCategoryPageProps) {
  const { slug = "" } = useParams();
  const data = CATALOG_DETAIL_PAGES[slug];

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
      <section className="page-enter border-b border-border-soft bg-background-subtle pt-32 pb-16">
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

              <h1 className="font-display-light text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
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

      <section className="bg-primary-dark py-20 text-white">
        <div className="page-shell text-center">
          <p className="text-gold mb-6 text-[11px] uppercase tracking-editorial">Need Specifications or Pricing?</p>
          <h2 className="font-display-light mb-8 text-3xl md:text-5xl">Speak with our technical team.</h2>
          <button onClick={onRequestQuote} className="inline-flex items-center gap-3 bg-secondary px-8 py-4 text-[11px] uppercase tracking-editorial text-foreground transition-colors hover:bg-white">
            Request a Quote
          </button>
        </div>
      </section>
    </Layout>
  );
}
