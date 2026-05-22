import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import Layout from "@/components/layout/Layout";
import hero from "@/assets/hero-platform.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgMechanical from "@/assets/cin-mechanical.jpg";
import imgElectrical from "@/assets/cin-electrical.jpg";

const projects = [
  { n: "PR/01", title: "Offshore Valve Supply Package", sector: "Oil & Gas - UAE", img: imgOilgas, copy: "Multi-stage supply of high-pressure ball and gate valves for offshore platform retrofit." },
  { n: "PR/02", title: "Refinery Instrumentation Upgrade", sector: "Petrochemical - Oman", img: imgPetro, copy: "Pressure, flow and temperature transmitters with HART communicator integration." },
  { n: "PR/03", title: "LV/MV Switchgear Replacement", sector: "Power Generation - KSA", img: imgPower, copy: "Switchgear, transformers and protection relay supply for substation upgrade." },
  { n: "PR/04", title: "VLCC Spares Continuity Program", sector: "Marine - Qatar", img: imgShip, copy: "Two-year spares continuity contract for crude carrier fleet maintenance." },
  { n: "PR/05", title: "Centrifugal Pump Overhaul Kits", sector: "Oil & Gas - Kuwait", img: imgMechanical, copy: "Sourcing and kitting of OEM-spec mechanical seals, bearings and impellers." },
  { n: "PR/06", title: "Motor & Drive Package", sector: "Industrial - Bahrain", img: imgElectrical, copy: "MV motors with VFDs and soft-starters for process plant expansion." },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_8%)] via-[hsl(210_100%_8%)]/60 to-[hsl(210_100%_8%)]/30" />
        <div className="page-shell relative z-10 pb-16 pt-24 text-white md:pb-20 md:pt-28">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Selected Work</span>
            <span className="rule-gold h-px w-12" />
            <span className="text-[11px] uppercase tracking-editorial text-white/60">Projects</span>
          </div>
          <h1 className="font-display-light max-w-4xl text-[clamp(2.1rem,5.3vw,4.8rem)] leading-[0.98] tracking-tight">
            Engineered supply
            <br />
            for landmark projects.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            A selection of recent engagements across oil & gas, petrochemical, power and marine sectors - delivered on spec, on time and to standard.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="grid gap-px border border-border-soft bg-border-soft md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.n} delay={index * 70} className="group block bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1280}
                    height={960}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="text-gold text-[11px] uppercase tracking-editorial">{project.n}</span>
                    <ArrowUpRight size={16} className="text-foreground/30 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="font-display-light mb-2 text-2xl leading-tight">{project.title}</h3>
                  <p className="mb-4 text-[11px] uppercase tracking-editorial text-foreground/55">{project.sector}</p>
                  <p className="text-sm font-light leading-relaxed text-foreground/70">{project.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;