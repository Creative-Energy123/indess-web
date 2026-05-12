import { ArrowUpRight } from "lucide-react";

import DisplayHeading from "../../components/DisplayHeading";
import Layout from "../../components/layout/Layout";
import PartnerLogo from "../../components/PartnerLogo";
import SectionLabel from "../../components/SectionLabel";
import { partnerPageData } from "./data";

export default function PartnersPage() {
  return (
    <Layout>
      <section className="border-b border-border-soft bg-background-subtle pt-32 pb-16">
        <div className="page-shell">
          <SectionLabel n="07" label="Partners" />
          <DisplayHeading>Engineered alliances with global specialists.</DisplayHeading>
          <p className="mt-6 max-w-2xl text-[15px] font-light leading-[1.8] text-foreground/70">
            A curated network of manufacturers across Asia and Europe, each chosen for engineering
            excellence, certification rigor and field reliability.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="grid gap-px border border-border-soft bg-border-soft md:grid-cols-2 lg:grid-cols-3">
            {partnerPageData.map((partner) => (
              <article key={partner.code} className="group bg-white p-10 lg:p-12">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-gold text-[11px] uppercase tracking-editorial">{partner.code}</span>
                  <ArrowUpRight size={16} className="text-foreground/30 transition-colors group-hover:text-primary" />
                </div>
                <PartnerLogo name={partner.name} className="mb-6" />
                <h3 className="font-display-light mb-4 text-2xl leading-tight transition-colors group-hover:text-primary md:text-[1.65rem]">
                  {partner.name}
                </h3>
                <div className="rule-gold mb-4 h-px w-12" />
                <p className="text-sm font-light text-foreground/65">{partner.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
