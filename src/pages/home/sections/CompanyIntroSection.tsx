import { ArrowUpRight } from "lucide-react";

import DisplayHeading from "@/components/DisplayHeading";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import { companyStats } from "@/pages/company/data";
import { industries } from "@/pages/home/data";

export default function CompanyIntroSection() {
  return (
    <SectionScaffold id="company">
      <Reveal>
        <SectionLabel n="01" label="The Company" />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <DisplayHeading>A trusted partner for the world&apos;s most demanding industries.</DisplayHeading>
          </div>
          <div className="space-y-6 text-[15px] font-light leading-[1.8] text-foreground/70 lg:col-span-5 lg:pt-6">
            <p>
              As an established supplier in the energy sector, INDESS delivers top-quality equipment sourced
              from globally renowned manufacturers and selected for performance, durability and efficiency.
            </p>
            <p>
              Our team of experienced engineers and supply professionals understands the critical role
              reliable equipment plays in upstream, midstream and downstream operations.
            </p>
          </div>
        </div>
      </Reveal>

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

      <Reveal delay={120}>
        <div className="mt-24 grid grid-cols-2 border-t border-border-soft md:grid-cols-4">
          {companyStats.map((stat, index) => (
            <div key={stat.label} className={`border-border-soft py-10 pl-8 ${index > 0 ? "md:border-l" : ""} ${index % 2 === 1 ? "border-l md:border-l" : ""}`}>
              <div className="text-primary font-display-light mb-2 text-5xl md:text-6xl">{stat.value}</div>
              <div className="tracking-editorial text-[10px] uppercase text-foreground/55">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionScaffold>
  );
}
