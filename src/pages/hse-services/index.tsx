import { ArrowUpRight, CheckCircle2, Globe } from "lucide-react";

import hero from "@/assets/hse-hero.jpg";
import oasisLogo from "@/assets/oasis.avif";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import { oasisRegions, summaryServices, ventures, visionPoints } from "@/pages/hse-services/data";

export default function HseServicesPage() {
  return (
    <Layout>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-primary-dark/30" />

        <div className="page-shell relative z-10 pb-16 pt-24 text-white md:pb-20 md:pt-28">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-gold text-[11px] uppercase tracking-editorial">Strategic Joint Ventures</span>
            <span className="rule-gold h-px w-12" />
            <span className="text-[11px] uppercase tracking-editorial text-white/60">HSE Services</span>
          </div>
          <h1 className="font-display-light max-w-5xl text-[clamp(2.1rem,5.3vw,4.8rem)] leading-[0.98] tracking-tight">
            HSE services, trainings & workforce solutions.
          </h1>
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            INDESS proudly maintains strategic joint venture partnerships with internationally recognized
            organizations in Human Resource Solutions, Overseas Recruitment, Occupational Health & Safety
            (HSE) Training and Workforce Development.
          </p>
        </div>
      </section>

      <section className="section-space-lg bg-white">
        <div className="page-shell">
          <div className="grid gap-px border border-border-soft bg-border-soft md:grid-cols-2 lg:grid-cols-4">
            {summaryServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 80} className="bg-white p-10">
                <service.icon className="text-primary mb-8" size={28} strokeWidth={1.2} />
                <div className="rule-gold mb-6 h-px w-10" />
                <h3 className="font-display-light mb-3 text-2xl">{service.title}</h3>
                <p className="text-sm font-light leading-[1.7] text-foreground/70">{service.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-background-subtle">
        <div className="page-shell">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="flex aspect-[4/3] items-center justify-center border border-border-soft bg-white p-12 lg:p-16">
                <img src={oasisLogo} alt="OASIS" className="max-h-40 w-auto object-contain" loading="lazy" />
              </div>
              <div className="mt-8 border border-border-soft bg-white p-8">
                <p className="text-gold mb-4 text-[10px] uppercase tracking-editorial">Global Presence</p>
                <ul className="space-y-2">
                  {oasisRegions.map((region) => (
                    <li key={region} className="flex items-center gap-3 text-[13px] font-light text-foreground/80">
                      <Globe size={13} className="text-primary shrink-0" /> {region}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <p className="text-gold mb-6 text-[11px] uppercase tracking-editorial">{ventures[0].code}</p>
              <h2 className="font-display-light mb-6 text-4xl leading-[1.1] tracking-tight md:text-5xl">
                {ventures[0].title} <span className="text-3xl text-foreground/50 md:text-4xl">({ventures[0].location})</span>
              </h2>
              <p className="mb-8 text-[15px] font-light leading-[1.8] text-foreground/70">{ventures[0].intro}</p>
              <p className="mb-4 text-[11px] uppercase tracking-editorial text-foreground/60">Specialisations</p>
              <ul className="mb-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {ventures[0].specializations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] font-light text-foreground/80">
                    <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://oasispak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary px-6 py-3 text-[11px] font-medium uppercase tracking-editorial text-white transition-colors hover:bg-primary-dark"
              >
                Visit oasispak.com <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-[hsl(210_100%_10%)] text-white">
        <div className="page-shell">
          <div className="mb-16 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-gold text-[11px] uppercase tracking-editorial">Vision</span>
                <span className="rule-gold h-px w-10" />
                <span className="text-[11px] uppercase tracking-editorial text-white/60">Partnership</span>
              </div>
              <h2 className="font-display-light text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Strengthening capability through global partnership.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-6">
              <p className="text-[15px] font-light leading-[1.8] text-white/70">
                Through these strategic partnerships, INDESS delivers high-quality professional solutions
                with international standards of safety, compliance and operational excellence.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
            {visionPoints.map((point, index) => (
              <Reveal key={point} delay={index * 70} className="bg-[hsl(210_100%_10%)] p-8">
                <span className="text-gold text-[10px] uppercase tracking-editorial">V/{String(index + 1).padStart(2, "0")}</span>
                <p className="font-display-light mt-6 text-xl leading-tight">{point}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
