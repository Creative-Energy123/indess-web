import Layout from "@/components/layout/Layout";
import { clientPageData } from "./data";

export default function ClientsPage() {
  return (
    <Layout>
      <section className="bg-primary-dark pt-40 pb-20 text-white">
        <div className="page-shell">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Clients</span>
            <span className="rule-gold h-px w-12" />
            <span className="text-[11px] uppercase tracking-editorial text-white/60">Selected References</span>
          </div>
          <h1 className="font-display-light max-w-4xl text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Trusted by the operators that power the region.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] font-light leading-[1.8] text-white/70">
            INDESS supports a portfolio of national energy operators, EPC contractors and industrial
            leaders across the GCC and beyond, delivering equipment continuity for mission-critical assets.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <p className="text-[10px] uppercase tracking-editorial text-gold">Selected Clients</p>
            <p className="text-[11px] uppercase tracking-editorial text-foreground/65">View All Clients</p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border-soft bg-border-soft md:grid-cols-2 lg:grid-cols-4">
            {clientPageData.map((client) => (
              <div key={client.name} className="group flex aspect-[16/10] items-center justify-center bg-white p-6 transition-colors hover:bg-background-subtle">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-16 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100" />
                ) : (
                  <span className="font-display-light text-3xl text-foreground/65 transition-colors group-hover:text-primary md:text-4xl">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
