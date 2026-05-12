import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import imgCEO from "@/assets/cin-ceo.jpg";

export default function CeoMessageSection() {
  return (
    <SectionScaffold className="section-space-lg bg-background-subtle">
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
    </SectionScaffold>
  );
}
