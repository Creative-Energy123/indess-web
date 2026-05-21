import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import DisplayHeading from "@/components/DisplayHeading";
import PartnerLogo from "@/components/PartnerLogo";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import { allClientLogos } from "@/pages/clients/data";
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
          <Link to="/partners" className="inline-flex items-center gap-3 mt-8 text-[11px] tracking-editorial uppercase font-medium text-white bg-primary px-6 py-3 hover:bg-primary-dark transition-colors">
            View All Partners <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="overflow-hidden border border-border-soft bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 80}>
              <Link to="/partners" className="group block border-b border-border-soft p-8 transition-colors hover:bg-background-subtle md:p-9 lg:border-r lg:last:border-r-0">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="text-[11px] tracking-editorial uppercase text-gold">PT/{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight size={16} className="text-foreground/35 transition-colors group-hover:text-primary" />
                </div>
                <PartnerLogo name={partner.name} logo={partner.logo} className="mb-7" />
                <h3 className="font-display-light text-[1.55rem] leading-tight text-foreground transition-colors group-hover:text-primary">{partner.name}</h3>
                <p className="mt-3 text-sm font-light text-foreground/65">{partner.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="clients" className="mt-24 pt-16 border-t border-border-soft">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <p className="text-[10px] tracking-editorial uppercase text-gold">Selected Clients</p>
          <Link to="/clients" className="inline-flex items-center gap-2 text-[11px] tracking-editorial uppercase text-foreground/70 hover:text-primary transition-colors">
            View All Clients <ArrowUpRight size={13} />
          </Link>
        </div>

        {(() => {
          const sliderLogos = allClientLogos.length > 0 ? allClientLogos : clients.map((item) => ({ src: item.logo ?? "", label: item.name }));
          const midpoint = Math.ceil(sliderLogos.length / 2);
          const topRow = sliderLogos.slice(0, midpoint).filter((item) => Boolean(item.src));
          const bottomRow = sliderLogos.slice(midpoint).filter((item) => Boolean(item.src));

          return (
        <div className="space-y-4">
          {[topRow, bottomRow].map((row, rowIndex) => (
            <div key={`client-row-${rowIndex}`} className="client-card-marquee">
              <div className={`client-card-marquee-track ${rowIndex === 1 ? "reverse" : ""}`}>
                {[...row, ...row, ...row].map((logo, index) => {
                  return (
                    <Link
                      key={`${logo.label}-${rowIndex}-${index}`}
                      to="/#clients"
                      className="client-card-slide group justify-center"
                    >
                      <img src={logo.src} alt={logo.label} className="max-h-24 w-auto object-contain opacity-85 transition-opacity group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
          );
        })()}
      </div>
    </SectionScaffold>
  );
}
