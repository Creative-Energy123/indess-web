import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionScaffold from "@/components/layout/SectionScaffold";
import oasisLogo from "@/assets/oasis.avif";

const OASIS_SERVICES = [
  "Human Resources",
  "HSE Trainings",
  "HSE Consultancy",
  "Trading Services",
] as const;

export default function OasisSection() {
  return (
    <SectionScaffold className="section-space-lg bg-background-subtle">
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="border border-border-soft bg-white p-10 md:p-14">
            <div className="flex min-h-[180px] items-center justify-center bg-white px-8 py-6">
              <img src={oasisLogo} alt="Oasis" className="max-h-28 w-auto object-contain" loading="lazy" />
            </div>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-editorial text-gold">Strategic HSE Alliance</p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">06</span>
            <span className="rule-gold h-px w-10" />
            <span className="text-[11px] uppercase tracking-editorial text-foreground/55">HSE Services & Trainings</span>
          </div>

          <h3 className="font-display-light max-w-4xl text-5xl leading-[1.02] tracking-tight text-foreground md:text-6xl">
            INDESS joins hands with <span className="text-primary italic">Oasis</span> to deliver world-class
            HSE services & trainings.
          </h3>

          <p className="mt-8 max-w-4xl text-[15px] font-light leading-[1.8] text-foreground/70">
            M/s OASIS - Occupational Health and Safety Integrated Services - is a reputable, multi-
            disciplinary company specialising in HSE trainings, Human Resources solutions, Consultancy and
            Trading services for national and international clients across diverse industries.
          </p>

          <div className="mt-8 grid gap-px border border-border-soft bg-border-soft sm:grid-cols-2">
            {OASIS_SERVICES.map((service, index) => (
              <div key={service} className="bg-white px-6 py-5">
                <p className="text-gold mb-2 text-[10px] uppercase tracking-editorial">0/{String(index + 1).padStart(2, "0")}</p>
                <p className="text-xl font-light leading-tight text-foreground/85">{service}</p>
              </div>
            ))}
          </div>

          <a
            href="https://oasispak.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3 text-[11px] uppercase tracking-editorial text-white transition-colors hover:bg-primary-dark"
          >
            Visit oasispak.com <ArrowUpRight size={13} />
          </a>
        </Reveal>
      </div>
    </SectionScaffold>
  );
}
