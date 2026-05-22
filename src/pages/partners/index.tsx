import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import Reveal from "../../components/Reveal";
import { partnerPageData } from "./data";

export default function PartnersPage() {
  return (
    <Layout>
      <section className="bg-[hsl(210_100%_10%)] pt-40 pb-14 text-white md:pt-44 md:pb-16">
        <div className="page-shell">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Partners</span>
            <span className="rule-gold h-px w-12" />
            <span className="text-[11px] uppercase tracking-editorial text-white/60">Volume I · MMXXV</span>
          </div>
          <h1 className="font-display-light max-w-4xl text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
            Engineered alliances with global specialists.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] font-light leading-[1.8] text-white/70">
            INDESS partners with a curated network of manufacturers across Asia and Europe - each chosen
            for engineering excellence, certification rigour and proven field reliability.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display-light max-w-2xl text-4xl leading-tight text-foreground md:text-5xl">
              Partner network at a glance.
            </h2>
            <p className="max-w-xl text-[15px] font-light leading-[1.8] text-foreground/70">
              Six specialist manufacturers, each vetted for product integrity, certifications and lifecycle support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border-soft bg-border-soft md:grid-cols-2 lg:grid-cols-3">
            {partnerPageData.map((partner, index) => (
              <Reveal key={partner.code} delay={index * 80}>
                <article className="group h-full bg-white p-8 transition-colors hover:bg-background-subtle md:p-9">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="text-gold text-[11px] uppercase tracking-editorial">{partner.code}</span>
                    <span className="text-[11px] uppercase tracking-editorial text-foreground/50">{partner.country}</span>
                  </div>
                  <div className="mb-8 flex min-h-[64px] items-center">
                    <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" className="max-h-14 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="font-display-light text-2xl leading-tight text-foreground">{partner.name}</h3>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {partnerPageData.map((partner, index) => (
              <Reveal key={`${partner.code}-details`} delay={index * 65}>
                <article className="h-full border border-border-soft bg-white p-8 md:p-9">
                  <div className="text-gold mb-4 flex items-center gap-3 text-[11px] uppercase tracking-editorial">
                    <MapPin size={13} /> {partner.country}
                  </div>
                  <h3 className="font-display-light mb-4 text-3xl leading-tight text-foreground">{partner.name}</h3>
                  <p className="mb-6 text-[15px] font-light leading-[1.8] text-foreground/70">{partner.summary}</p>
                  <ul className="space-y-3">
                    {partner.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-[14px] font-light text-foreground/80">
                        <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-subtle py-24">
        <div className="page-shell text-center">
          <p className="text-gold mb-6 text-[11px] uppercase tracking-editorial">Become a Partner</p>
          <h3 className="font-display-light mx-auto mb-8 max-w-3xl text-4xl md:text-5xl">
            Building the next chapter of industrial supply - together.
          </h3>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-medium uppercase tracking-editorial text-white transition-colors hover:bg-primary-dark"
          >
            Contact Our Team <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
