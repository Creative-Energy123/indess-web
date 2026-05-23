import { ArrowUpRight, Compass, Quote, Target } from "lucide-react";
import { Link } from "react-router-dom";

import DisplayHeading from "../../components/DisplayHeading";
import Layout from "../../components/layout/Layout";
import Reveal from "../../components/Reveal";
import SectionLabel from "../../components/SectionLabel";
import hero from "../../assets/cin-hero.jpg";
import imgManufacturing from "../../assets/cin-manufacturing.jpg";
import { industries } from "../home/data";
import { companyGoals, companyRegions, companyStats, companyTestimonials, companyValues } from "./data";

export default function CompanyPage() {
  const companyCountryCount = companyRegions.reduce(
    (count, region) => count + region.countries.split(",").map((country) => country.trim()).filter(Boolean).length,
    0,
  );

  return (
    <Layout>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <img src={hero} alt="Industrial operations" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay hero-overlay-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/35 via-primary-dark/55 to-primary-dark/75" />

        <div className="page-shell relative z-10 pb-16 pt-24 text-white md:pb-20 md:pt-28">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">About</span>
            <span className="rule-gold h-px w-10" />
            <span className="text-[11px] uppercase tracking-editorial text-white/65">The Company</span>
          </div>
          <h1 className="font-display-light max-w-5xl text-[clamp(2.1rem,5.6vw,4.8rem)] leading-[0.98] tracking-tight">
            Engineering trust for the industries
            <br />
            that power the world.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            INDESS Solutions Trading is a precision supplier of mission-critical equipment to the oil,
            gas, petrochemical, power and marine sectors - sourced globally, delivered locally.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionLabel n="01" label="About INDESS" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <DisplayHeading>A trusted partner for the world&apos;s most demanding industries.</DisplayHeading>
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-[15px] font-light leading-[1.8] text-foreground/70 lg:col-span-5 lg:pt-6">
              <p>
                As an established supplier in the energy sector, INDESS delivers top-quality equipment sourced
                from globally renowned manufacturers and selected for performance, durability and efficiency.
              </p>
              <p>
                Our team of experienced engineers and supply professionals understands the critical role
                reliable equipment plays in upstream, midstream and downstream operations.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 mb-20">
            <Reveal className="mb-10">
              <div className="text-[10px] uppercase tracking-editorial text-gold">Our Industries</div>
            </Reveal>

            <div className="grid gap-px bg-border-soft md:grid-cols-2 lg:grid-cols-5">
              {industries.map((industry) => (
                <Reveal key={industry.title} delay={Number(industry.n) * 60} className="bg-white group block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.img}
                      alt={industry.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={1280}
                      height={960}
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex items-baseline justify-between">
                      <span className="text-[11px] uppercase tracking-editorial text-gold">{industry.n}</span>
                      <span className="mx-4 h-px flex-1 bg-border-soft" />
                      <ArrowUpRight size={16} className="text-foreground/30 transition-colors group-hover:text-primary" />
                    </div>
                    <h3 className="font-display-light mb-3 text-3xl">{industry.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-foreground/65">{industry.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 border-t border-border-soft md:grid-cols-4">
            {companyStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 80}
                className={`border-border-soft py-10 pl-8 ${index > 0 ? "md:border-l" : ""} ${index % 2 === 1 ? "border-l md:border-l" : ""}`}
              >
                <div className="text-primary font-display-light mb-2 text-5xl md:text-6xl">{stat.value}</div>
                <div className="tracking-editorial text-[10px] uppercase text-foreground/55">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-background-subtle">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="border-b border-border-soft pb-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <SectionLabel n="02" label="A Message From CEO" />
              <div className="mt-8">
                <p className="font-display-light text-4xl leading-[0.95] text-foreground md:text-5xl">Muhammad Sajjad</p>
                <p className="mt-3 text-[12px] uppercase tracking-editorial text-gold">Chief Executive Officer</p>
              </div>
            </Reveal>

            <Reveal delay={140} className="border border-border-soft bg-white p-8 md:p-10 lg:col-span-8 lg:p-12">
              <Quote className="text-gold mb-6" size={28} />
              <p className="font-display-light mb-8 text-3xl leading-[1.25] text-foreground md:text-4xl">
                “At INDESS we believe quality is not a feature - it is the foundation upon which every reliable operation is built.”
              </p>
              <div className="space-y-5 text-[15px] font-light leading-[1.8] text-foreground/70">
                <p>
                  We are delighted to welcome you to INDESS - your gateway to top-quality oil &amp; gas
                  supply equipment. Our commitment is simple: source globally, engineer trust locally, and
                  stand behind every shipment we deliver.
                </p>
                <p>
                  With a network of trusted manufacturers and a deeply experienced technical team, we
                  propel our clients&apos; operations to new heights with cutting-edge equipment and
                  unrivalled expertise.
                </p>
              </div>
              <div className="mt-10 border-t border-border-soft pt-6">
                <p className="font-display-light text-2xl">Muhammad Sajjad</p>
                <p className="mt-1 text-[11px] uppercase tracking-editorial text-gold">The Chief Executive</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionLabel n="03" label="Vision & Mission" />
          </Reveal>
          <div className="grid gap-px bg-border-soft lg:grid-cols-2">
            <Reveal className="bg-white p-12 lg:p-16">
              <div className="mb-6 flex items-center gap-3">
                <Compass className="text-primary" size={22} />
                <span className="text-gold text-[10px] uppercase tracking-editorial">Our Vision</span>
              </div>
              <h3 className="font-display-light mb-6 text-4xl leading-[1.1] md:text-5xl">
                To be the most trusted industrial supply partner across the energy sector.
              </h3>
              <p className="text-[15px] font-light leading-[1.8] text-foreground/70">
                A globally connected, regionally rooted partner recognised for engineering integrity,
                precision sourcing and uncompromising quality standards.
              </p>
            </Reveal>

            <Reveal delay={120} className="bg-white p-12 lg:p-16">
              <div className="mb-6 flex items-center gap-3">
                <Target className="text-primary" size={22} />
                <span className="text-gold text-[10px] uppercase tracking-editorial">Our Mission</span>
              </div>
              <h3 className="font-display-light mb-6 text-4xl leading-[1.1] md:text-5xl">
                Deliver mission-critical equipment with precision, accountability and care.
              </h3>
              <p className="text-[15px] font-light leading-[1.8] text-foreground/70">
                We connect clients with world-class manufacturers, optimize specifications and ensure
                on-time delivery supported by lifecycle service and technical guidance.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-background-subtle">
        <div className="page-shell">
          <div className="mb-20 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionLabel n="04" label="Core Values" />
              <DisplayHeading>The principles that guide our work.</DisplayHeading>
            </Reveal>
            <Reveal delay={120} className="text-[15px] font-light leading-[1.8] text-foreground/70 lg:col-span-5 lg:col-start-8 lg:pt-8">
              Every decision at INDESS is anchored in four enduring values that define how we engage with
              clients, partners and the industries we serve.
            </Reveal>
          </div>

          <div className="grid gap-px bg-border-soft md:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="bg-white p-10">
                <value.icon className="text-primary mb-8" size={28} strokeWidth={1.2} />
                <div className="rule-gold mb-6 h-px w-10" />
                <h3 className="font-display-light mb-3 text-2xl">{value.title}</h3>
                <p className="text-sm font-light leading-[1.7] text-foreground/65">{value.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="mb-20 grid items-end gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionLabel n="05" label="Strategic Goals" />
              <DisplayHeading>Where we are heading.</DisplayHeading>
            </Reveal>
            <Reveal delay={120} className="text-[15px] font-light leading-[1.8] text-foreground/70 lg:col-span-5 lg:col-start-8">
              Our roadmap is shaped around regional leadership, global expansion and operational excellence.
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {companyGoals.map((goal, index) => (
              <Reveal key={goal.code} delay={index * 80} className="group relative overflow-hidden">
                <img src={goal.image} alt={goal.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-gold text-[10px] uppercase tracking-editorial">{goal.code}</span>
                    <ArrowUpRight size={16} className="text-white/70 transition-colors group-hover:text-gold" />
                  </div>
                  <h3 className="font-display-light mb-4 text-4xl leading-[1.08] md:text-5xl">{goal.title}</h3>
                  <p className="max-w-xl text-[15px] font-light leading-[1.8] text-white/80">{goal.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionLabel n="06" label="Client Voices" />
            <DisplayHeading className="mb-20 max-w-4xl">What our clients say about working with INDESS.</DisplayHeading>
          </Reveal>

          <div className="grid gap-px bg-border-soft md:grid-cols-3">
            {companyTestimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 100} className="bg-white p-12">
                <Quote className="text-gold mb-8" size={24} />
                <p className="font-display-light mb-8 text-xl leading-[1.4] text-foreground/90 md:text-2xl">
                  "{testimonial.quote}"
                </p>
                <div className="rule-gold mb-4 h-px w-10" />
                <p className="text-[13px] font-medium text-foreground">{testimonial.author}</p>
                <p className="tracking-wide-2 mt-1 text-[11px] uppercase text-foreground/55">{testimonial.company}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/clients" className="inline-flex items-center gap-2 border-b border-secondary pb-2 text-[11px] uppercase tracking-editorial text-primary">
              View All Clients <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space-lg relative overflow-hidden bg-primary-dark text-white">
        <img src={imgManufacturing} alt="Global industrial network" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/92 to-primary-dark" />
        <div className="page-shell relative z-10">
          <div className="mb-16 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-gold text-[11px] uppercase tracking-editorial">07</span>
                <span className="rule-gold h-px w-10" />
                <span className="text-[11px] uppercase tracking-editorial text-white/65">Worldwide Presence</span>
              </div>
              <h2 className="font-display-light text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                A network spanning {companyCountryCount} countries.
              </h2>
            </Reveal>
            <Reveal delay={120} className="text-[15px] font-light leading-[1.8] text-white/70 lg:col-span-5 lg:col-start-8 lg:pt-8">
              From the GCC to Europe, the Americas, Central Asia and Asia Pacific, INDESS partners with manufacturers
              and operators around the globe.
            </Reveal>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-5">
            {companyRegions.map((region, index) => (
              <Reveal key={region.region} delay={index * 80} className="bg-primary-dark p-8">
                <p className="text-gold mb-4 text-[10px] uppercase tracking-editorial">{region.region}</p>
                <p className="text-[13px] font-light leading-[1.7] text-white/80">{region.countries}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
