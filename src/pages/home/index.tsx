import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import DisplayHeading from "../../components/DisplayHeading";
import Layout from "../../components/layout/Layout";
import PartnerLogo from "../../components/PartnerLogo";
import Reveal from "../../components/Reveal";
import SectionLabel from "../../components/SectionLabel";
import hero from "../../assets/cin-hero.jpg";
import imgCEO from "../../assets/cin-ceo.jpg";
import imgLogistics from "../../assets/cin-logistics.jpg";
import imgProcess from "../../assets/cin-process.jpg";
import { clients, industries, partners, products, services } from "./data";

export default function HomePage() {
  return (
    <Layout>
      <div id="top" />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Offshore platform at blue hour" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay hero-overlay-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 via-primary-dark/45 to-primary-dark/85" />

        <div className="absolute inset-x-0 top-24 z-10">
          <div className="page-shell flex items-center justify-between text-[10px] uppercase tracking-editorial text-white/70">
            <span>Company Profile - MMXXV</span>
            <span className="hidden md:inline">Abu Dhabi - United Arab Emirates</span>
          </div>
        </div>

        <div className="page-shell relative z-10 pb-24 md:pb-32">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="text-white lg:col-span-8">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-gold text-[11px] uppercase tracking-editorial">Volume I</span>
                <span className="rule-gold h-px w-12" />
                <span className="text-[11px] uppercase tracking-editorial text-white/60">Industrial Energy Supply</span>
              </div>
              <h1 className="font-display-light hero-title-fluid mb-8 leading-[0.95] tracking-tight text-white">
                Engineering
                <br />
                the foundations of
                <br />
                <span className="text-gold italic">industry.</span>
              </h1>
              <p className="max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg">
                INDESS is a precision supplier of mission-critical equipment to the oil and gas,
                petrochemical, power and marine sectors - sourced globally, delivered locally.
              </p>
            </div>
            <div className="text-[12px] font-light leading-relaxed tracking-wide text-white/80 lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-12">
              <p className="text-gold mb-3 text-[10px] uppercase tracking-editorial">A Note</p>
              <p>This document presents an overview of INDESS - our industries, services and product portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="section-space-lg bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionLabel n="01" label="The Company" />
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <DisplayHeading>A trusted partner for the world&apos;s most demanding industries.</DisplayHeading>
              </div>
              <div className="space-y-6 text-[15px] font-light leading-[1.8] text-foreground/70 lg:col-span-5 lg:pt-6">
                <p>
                  INDESS delivers top-quality equipment sourced from globally renowned manufacturers,
                  selected for performance, durability and efficiency.
                </p>
                <p>
                  Our engineers and supply professionals understand the critical role reliable equipment
                  plays across upstream, midstream and downstream operations.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-24 grid grid-cols-2 border-t border-border-soft md:grid-cols-4">
              {[
                ["20+", "Years in industry"],
                ["500+", "Products supplied"],
                ["50+", "Trusted brands"],
                ["13+", "Marquee clients"],
              ].map(([number, label], index) => (
                <div key={label} className={`border-border-soft py-10 ${index > 0 ? "md:border-l" : ""} ${index % 2 === 1 ? "border-l md:border-l" : ""}`}>
                  <div className="text-primary font-display-light mb-2 text-5xl md:text-6xl">{number}</div>
                  <div className="tracking-editorial text-[10px] uppercase text-foreground/55">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-subtle section-space-lg">
        <div className="page-shell">
          <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-foreground/5">
                <img src={imgCEO} alt="CEO portrait" loading="lazy" className="h-full w-full object-cover grayscale" width={1080} height={1350} />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <SectionLabel n="02" label="Foreword" />
              <p className="font-display-light mb-8 text-3xl leading-[1.25] text-foreground md:text-4xl">
                "At INDESS, quality is not a feature - it is the foundation of reliable operations."
              </p>
              <p className="text-[15px] font-light leading-[1.8] text-foreground/70">
                We combine global sourcing reach, engineering depth and local accountability to deliver
                supply certainty for critical projects.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section id="expertise" className="section-space-lg bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionLabel n="03" label="Industries" />
            <div className="mb-20 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <DisplayHeading>Built for mission-critical sectors.</DisplayHeading>
              </div>
              <div className="text-[15px] font-light leading-[1.8] text-foreground/70 lg:col-span-6 lg:col-start-7 lg:pt-8">
                Our portfolio supports six core industries where reliability, safety and uptime are non-negotiable.
              </div>
            </div>
          </Reveal>

          <div className="grid gap-px bg-border-soft md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Reveal key={industry.title} className="group block bg-white" delay={Number(industry.n) * 60}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={industry.img} alt={industry.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="text-gold text-[11px] uppercase tracking-editorial">{industry.n}</span>
                    <ArrowUpRight size={16} className="text-foreground/30 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="font-display-light mb-3 text-3xl">{industry.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-foreground/65">{industry.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-space-lg relative overflow-hidden text-white">
        <img src={imgProcess} alt="Industrial processing facility" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/55 via-primary-dark/72 to-primary-dark/90" />
        <div className="absolute inset-0 bg-primary-dark/35" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_8%_85%,rgba(209,184,122,0.18),transparent_62%)]" />

        <div className="page-shell relative z-10">
          <Reveal>
            <div className="mb-16 grid gap-12 lg:mb-20 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-gold text-[11px] uppercase tracking-editorial">03</span>
                  <span className="rule-gold h-px w-8" />
                  <span className="text-[11px] uppercase tracking-editorial text-white/65">Our Services</span>
                </div>
                <h2 className="font-display-light max-w-3xl text-5xl leading-[0.98] tracking-tight text-white md:text-6xl lg:text-7xl">
                  A complete supply chain - engineered end to end.
                </h2>
              </div>
              <div className="text-[15px] font-light leading-[1.8] text-white/65 lg:col-span-5 lg:col-start-8 lg:pt-8">
                From initial specification to after-sales continuity, we operate as a single point of
                accountability for our clients&apos; equipment supply needs.
              </div>
            </div>
          </Reveal>

          <div className="grid border border-white/10 bg-white/5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.n} delay={index * 80}>
                <div className="h-full border border-white/10 bg-[hsl(210_100%_14%)]/88 p-10 backdrop-blur-[1px] lg:p-12">
                  <div className="mb-8 flex items-center gap-4">
                    <span className="text-gold text-[11px] uppercase tracking-editorial">{service.n.toLowerCase()}</span>
                    <span className="rule-gold h-px w-8" />
                  </div>
                  <h3 className="font-display-light mb-5 text-4xl leading-tight text-white">{service.title}</h3>
                  <p className="max-w-md text-[14px] font-light leading-[1.85] text-white/68">{service.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section-space-lg bg-white">
        <div className="page-shell mb-24">
          <Reveal>
            <SectionLabel n="05" label="Products" />
            <DisplayHeading>An engineered catalog, sourced with discipline.</DisplayHeading>
            <Link to="/catalog" className="btn btn-primary btn-nav-cta mt-8 inline-flex items-center gap-3">
              View Product Catalog <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-32 lg:space-y-40">
          {products.map((product, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={product.n} className="page-shell">
                <div className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                      <img src={product.img} alt={product.title} className="h-full w-full object-cover" width={1600} height={1200} />
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display-light mb-6 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">{product.title}</h3>
                    <p className="mb-8 text-[15px] font-light leading-[1.8] text-foreground/70">{product.copy}</p>
                    <ul className="border-t border-border-soft">
                      {product.items.map((item) => (
                        <li key={item} className="flex items-center justify-between border-b border-border-soft py-4 text-[13px] font-light text-foreground/80">
                          <span>{item}</span>
                          <span className="rule-gold h-px w-8" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="partners" className="section-space-lg bg-background-subtle">
        <div className="page-shell">
          <Reveal>
          <SectionLabel n="06" label="Partners" />
          </Reveal>
          <div className="grid gap-px border border-border-soft bg-border-soft md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 70}>
              <Link to="/partners" className="group block bg-white p-10 lg:p-12">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-gold text-[11px] uppercase tracking-editorial">PT/{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight size={16} className="text-foreground/30 transition-colors group-hover:text-primary" />
                </div>
                <PartnerLogo name={partner.name} className="mb-6" />
                <h3 className="font-display-light mb-4 text-2xl leading-tight transition-colors group-hover:text-primary md:text-[1.65rem]">{partner.name}</h3>
                <div className="rule-gold mb-4 h-px w-12" />
                <p className="text-sm font-light text-foreground/65">{partner.role}</p>
              </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 border-t border-border-soft pt-16">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
              <p className="text-gold text-[10px] uppercase tracking-editorial">Selected Clients</p>
              <Link to="/clients" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-foreground/70 transition-colors hover:text-primary">
                View All Clients <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px border border-border-soft bg-border-soft md:grid-cols-3 lg:grid-cols-4">
              {clients.map((client) => (
                <div key={client.name} className="group flex aspect-[16/10] items-center justify-center bg-white p-6">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="max-h-16 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100" />
                  ) : (
                    <span className="font-display-light text-xl text-foreground/60 transition-colors group-hover:text-primary md:text-2xl">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space-lg relative overflow-hidden bg-primary-dark text-white">
        <img
          src={imgLogistics}
          alt="Industrial logistics operations"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay hero-overlay-deep" />
        <div className="hero-overlay hero-overlay-brand" />
        <div className="absolute inset-0 bg-primary-dark/65" />
        <div className="page-shell relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl py-8 text-center md:py-16">
              <p className="text-gold mb-7 text-[11px] uppercase tracking-editorial">Get In Touch</p>
              <h2 className="mx-auto max-w-3xl text-5xl leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                Bring INDESS into your next industrial project.
              </h2>
              <Link
                to="/catalog"
                className="btn btn-primary btn-nav-cta mt-10 inline-flex items-center gap-3 px-10 py-4"
              >
                Request Consultation
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
