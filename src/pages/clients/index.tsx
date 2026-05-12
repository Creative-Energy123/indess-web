import DisplayHeading from "../../components/DisplayHeading";
import Layout from "../../components/layout/Layout";
import SectionLabel from "../../components/SectionLabel";
import { clientPageData } from "./data";

export default function ClientsPage() {
  return (
    <Layout>
      <section className="border-b border-border-soft bg-background-subtle pt-32 pb-16">
        <div className="page-shell">
          <SectionLabel n="08" label="Clients" />
          <DisplayHeading>Selected clients across critical industries.</DisplayHeading>
          <p className="mt-6 max-w-2xl text-[15px] font-light leading-[1.8] text-foreground/70">
            We support leading operators, EPCs and utilities with reliable supply partnerships across
            energy, industrial and marine sectors.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="grid grid-cols-2 gap-px border border-border-soft bg-border-soft md:grid-cols-3 lg:grid-cols-4">
            {clientPageData.map((client) => (
              <div key={client.name} className="group flex aspect-[16/10] items-center justify-center bg-white p-6">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-16 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100"
                  />
                ) : (
                  <span className="font-display-light text-xl text-foreground/60 transition-colors group-hover:text-primary md:text-2xl">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
