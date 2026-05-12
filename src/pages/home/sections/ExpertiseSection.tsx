import { Cog, FlaskConical, Gauge, Ship, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import Reveal from "@/components/Reveal";
import { expertiseItems } from "@/pages/home/data";

const ICONS = [Cog, Gauge, Zap, FlaskConical, Ship] as const;

export default function ExpertiseSection() {
  return (
    <section id="services" className="section-space-lg relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/90 to-primary-dark" />
      <div className="page-shell relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] tracking-editorial uppercase text-gold">03</span>
              <span className="h-px w-10 rule-gold" />
              <span className="text-[11px] tracking-editorial uppercase text-white/60">Our Expertise</span>
            </div>
            <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Specialised across five core domains.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-8">
            <p className="text-[15px] text-white/70 leading-[1.8] font-light">
              INDESS provides a comprehensive range of products tailored to the unique needs of our clients and engineered for performance, reliability and the highest safety standards.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {expertiseItems.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal key={item.n} delay={index * 70} className="bg-primary-dark p-10">
                <Icon className="text-gold mb-8" size={28} strokeWidth={1.2} />
                <div className="h-px w-10 rule-gold mb-6" />
                <h3 className="font-display-light text-2xl mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-white/70 font-light leading-[1.7]">{item.copy}</p>
              </Reveal>
            );
          })}
          <Reveal delay={expertiseItems.length * 70} className="bg-primary p-10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-editorial uppercase text-gold">E/06</span>
              <h3 className="font-display-light text-3xl mt-6 mb-3 text-white">Browse the Catalog</h3>
              <p className="text-sm text-white/75 font-light leading-[1.7]">Explore our complete product reference with categories, sub-categories and specifications.</p>
            </div>
            <Link to="/catalog" className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-editorial uppercase text-white border-b border-secondary pb-2 w-fit">
              Open Catalog
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
