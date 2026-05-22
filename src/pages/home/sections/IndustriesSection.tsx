import { ArrowUpRight } from "lucide-react";

import DisplayHeading from "@/components/DisplayHeading";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import { industries } from "@/pages/home/data";

export default function IndustriesSection() {
  return (
    <SectionScaffold id="industries" className="section-space-lg bg-white">
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-5">
          <SectionLabel n="05" label="Industries" />
          <DisplayHeading>Built for mission-critical sectors.</DisplayHeading>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
          <p className="text-[15px] text-foreground/70 leading-[1.8] font-light">
            Our portfolio supports core industries where reliability, safety and uptime are non-negotiable.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-soft">
        {industries.map((industry) => (
          <Reveal key={industry.title} delay={Number(industry.n) * 60} className="bg-white group block">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={industry.img} alt={industry.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={1280} height={960} />
            </div>
            <div className="p-8">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-[11px] tracking-editorial uppercase text-gold">{industry.n}</span>
                <span className="h-px flex-1 mx-4 bg-border-soft" />
                <ArrowUpRight size={16} className="text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display-light text-3xl mb-3">{industry.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed font-light">{industry.copy}</p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={420} className="bg-white">
          <div className="aspect-[4/3] border border-border-soft/60 bg-background-subtle" />
          <div className="p-8">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-[11px] tracking-editorial uppercase text-foreground/35">06</span>
              <span className="h-px flex-1 mx-4 bg-border-soft" />
            </div>
            <h3 className="font-display-light text-3xl mb-3 text-foreground/30">&nbsp;</h3>
            <p className="text-sm leading-relaxed font-light text-foreground/25">&nbsp;</p>
          </div>
        </Reveal>
      </div>
    </SectionScaffold>
  );
}
