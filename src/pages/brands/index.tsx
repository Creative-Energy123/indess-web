import Layout from "@/components/layout/Layout";
import { brands } from "@/pages/home/data";

export default function BrandsPage() {
  return (
    <Layout>
      <section className="bg-primary-dark pb-14 pt-40 text-white md:pb-16 md:pt-44">
        <div className="page-shell">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Brands</span>
            <span className="rule-gold h-px w-12" />
            <span className="text-[11px] uppercase tracking-editorial text-white/60">Global OEM Portfolio</span>
          </div>
          <h1 className="font-display-light max-w-4xl text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
            Trusted brands for mission-critical operations.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] font-light leading-[1.8] text-white/70">
            INDESS represents a curated network of global manufacturers selected for engineering reliability,
            product integrity and long-term field performance.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="mb-8 flex flex-wrap items-end gap-6">
            <p className="text-[10px] uppercase tracking-editorial text-gold">All Brands</p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-border-soft bg-white md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {brands.map((brand) => (
              <div key={brand.name} className="group flex aspect-[3/2] items-center justify-center border-b border-r border-border-soft p-6 transition-colors hover:bg-background-subtle">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain opacity-85 transition-opacity group-hover:opacity-100" />
                ) : (
                  <div className="text-center font-display-light text-xl text-foreground/85">{brand.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
