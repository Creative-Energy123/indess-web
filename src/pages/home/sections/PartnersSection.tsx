import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import DisplayHeading from "@/components/DisplayHeading";
import PartnerLogo from "@/components/PartnerLogo";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import { clients, partners } from "@/pages/home/data";

export default function PartnersSection() {
  return (
    <SectionScaffold id="partners" className="section-space-lg bg-white">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-6">
          <SectionLabel n="07" label="Partners" />
          <DisplayHeading>Engineered alliances with global specialists.</DisplayHeading>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
          <p className="text-[15px] text-foreground/70 leading-[1.8] font-light">
            A curated network of manufacturers across Asia and Europe chosen for engineering excellence,
            certification rigour and field reliability.
          </p>
          <Link to="/#partners" className="inline-flex items-center gap-3 mt-8 text-[11px] tracking-editorial uppercase font-medium text-white bg-primary px-6 py-3 hover:bg-primary-dark transition-colors">
            View All Partners <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-soft border border-border-soft">
        {partners.map((partner, index) => (
          <Reveal key={partner.name} delay={index * 80}>
            <Link to="/#partners" className="bg-white p-10 lg:p-12 group hover:bg-background-subtle transition-colors block h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">PT/{String(index + 1).padStart(2, "0")}</span>
                <ArrowUpRight size={16} className="text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <PartnerLogo name={partner.name} className="mb-6" />
              <h3 className="font-display-light text-2xl md:text-[1.65rem] mb-4 leading-tight group-hover:text-primary transition-colors">{partner.name}</h3>
              <div className="h-px w-12 rule-gold mb-4" />
              <p className="text-sm text-foreground/65 font-light">{partner.role}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <div id="clients" className="mt-24 pt-16 border-t border-border-soft">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <p className="text-[10px] tracking-editorial uppercase text-gold">Selected Clients</p>
          <Link to="/#clients" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-foreground/70 hover:text-primary transition-colors">
            View All Clients <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="space-y-4">
          {[clients.slice(0, 5), clients.slice(5, 10)].map((row, rowIndex) => (
            <div key={`client-row-${rowIndex}`} className="client-card-marquee">
              <div className={`client-card-marquee-track ${rowIndex === 1 ? "reverse" : ""}`}>
                {[...row, ...row, ...row].map((client, index) => {
                  const initials = client.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (
                    <Link
                      key={`${client.name}-${rowIndex}-${index}`}
                      to="/#clients"
                      className="client-card-slide group"
                    >
                      <span className="client-card-initial">{initials}</span>
                      <span className="client-card-name">{client.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionScaffold>
  );
}
