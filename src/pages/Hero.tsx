import hero from "../assets/cin-hero.jpg";

export default function Hero() {
  const sectionClass = "relative flex min-h-screen items-end overflow-hidden";
  const heroImageClass = "absolute inset-0 h-full w-full object-cover";
  const topBarClass = "page-shell tracking-wide-2 flex items-center justify-between text-[10px] uppercase text-white/70";
  const contentWrapClass = "page-shell relative z-10 pb-24 md:pb-32";
  const contentGridClass = "grid items-end gap-8 lg:grid-cols-12";
  const leftColClass = "text-white lg:col-span-8";
  const introRowClass = "mb-8 flex items-center gap-4";
  const introMetaClass = "tracking-wide-2 text-[11px] uppercase";
  const headingClass = "font-display-light hero-title-fluid mb-8 leading-[0.95] tracking-tight text-white";
  const bodyClass = "max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg";
  const noteColClass = "text-[12px] font-light leading-relaxed tracking-wide text-white/80 lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-12";

  return (
    <section className={sectionClass} id="company">
      <img
        src={hero}
        alt="Offshore platform at blue hour"
        className={heroImageClass}
        width={1920}
        height={1080}
      />
      <div className="hero-overlay hero-overlay-deep" />
      <div className="hero-overlay hero-overlay-brand" />

      <div className="absolute inset-x-0 top-24 z-10">
        <div className={topBarClass}>
          <span>Company Profile · MMXXV</span>
          <span className="hidden md:inline">Abu Dhabi · United Arab Emirates</span>
        </div>
      </div>

      <div className={contentWrapClass}>
        <div className={contentGridClass}>
          <div className={leftColClass}>
            <div className={introRowClass}>
              <span className={`${introMetaClass} text-gold`}>Volume I</span>
              <span className="rule-gold h-px w-12" />
              <span className={`${introMetaClass} text-white/60`}>Industrial Energy Supply</span>
            </div>

            <h1 className={headingClass}>
              Engineering
              <br />
              the foundations of
              <br />
              <span className="text-gold italic">industry.</span>
            </h1>

            <p className={bodyClass}>
              INDESS is a precision supplier of mission-critical equipment to the oil &amp; gas,
              petrochemical, power and marine sectors - sourced globally, delivered locally.
            </p>
          </div>

          <div className={noteColClass}>
            <p className="tracking-wide-2 text-gold mb-3 text-[10px] uppercase">A Note</p>
            <p>
              This document presents an overview of INDESS - our industries, services, product portfolio and
              the partners with whom we engineer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
