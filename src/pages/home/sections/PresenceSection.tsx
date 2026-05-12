import Reveal from "@/components/Reveal";
import SectionScaffold from "@/components/layout/SectionScaffold";
import imgManufacturing from "@/assets/cin-manufacturing.jpg";
import { regions } from "@/pages/home/data";

export default function PresenceSection() {
  return (
    <SectionScaffold id="presence" className="section-space-lg relative overflow-hidden bg-primary-dark text-white">
      <img src={imgManufacturing} alt="Industrial global network" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/95 to-primary-dark/90" />

      <div className="relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-editorial uppercase text-gold">08</span>
                <span className="h-px w-10 rule-gold" />
                <span className="text-[11px] tracking-editorial uppercase text-white/60">Worldwide Presence</span>
              </div>
              <h2 className="font-display-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                A global footprint,
                <br />
                locally delivered.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
              <p className="text-[15px] text-white/70 leading-[1.8] font-light">
                INDESS supports projects across the GCC, Europe, the Americas and Asia Pacific with
                sourcing, logistics and after-sales continuity.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[ ["11", "Countries"], ["4", "Regions"], ["24/7", "Support"] ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display-light text-4xl text-gold">{n}</div>
                    <div className="text-[10px] tracking-editorial uppercase text-white/50 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {regions.map((region, index) => (
            <Reveal key={region.region} delay={index * 90}>
              <div className="bg-primary-dark p-10 h-full">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-[11px] tracking-editorial uppercase text-gold">R/{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <h3 className="font-display-light text-3xl mb-6 text-white">{region.region}</h3>
                <ul className="space-y-3">
                  {region.countries.map((country) => (
                    <li key={country} className="text-[13px] text-white/75 font-light">{country}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionScaffold>
  );
}
