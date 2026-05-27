import Layout from "@/components/layout/Layout";
import { allClientLogos } from "./data";

export default function ClientsPage() {
  return (
    <Layout>
      <section className="bg-primary-dark pt-40 pb-14 text-white md:pt-44 md:pb-16">
        <div className="page-shell">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Clients</span>
            <span className="rule-gold h-px w-12" />
            <span className="text-[11px] uppercase tracking-editorial text-white/60">Selected References</span>
          </div>
          <h1 className="font-display-light max-w-4xl text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
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
          <div className="mb-8 flex flex-wrap items-end gap-6">
            <p className="text-[10px] uppercase tracking-editorial text-gold">Selected Clients</p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-border-soft bg-white md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {allClientLogos.map((logo) => (
              <div key={logo.label} className="group flex aspect-[3/2] items-center justify-center border-b border-r border-border-soft p-6 transition-colors hover:bg-background-subtle">
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-20 w-40 items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.label}
                    className="h-full w-full object-contain opacity-85 transition-opacity group-hover:opacity-100"
                  />
                  </div>
                  <p className="text-sm font-semibold leading-tight text-foreground/90">{logo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
