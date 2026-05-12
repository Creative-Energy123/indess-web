import DisplayHeading from "@/components/DisplayHeading";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";

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

      <Reveal delay={120}>
        <div className="mt-24 grid grid-cols-2 border-t border-border-soft md:grid-cols-4">
          {[
            ["20+", "Years in industry"],
            ["500+", "Products supplied"],
            ["50+", "Trusted brands"],
            ["13+", "Marquee clients"],
          ].map(([number, label], index) => (
            <div key={label} className={`border-border-soft py-10 ${index > 0 ? "md:border-l" : ""} ${index % 2 === 1 ? "border-l md:border-l" : ""}`}>
              <div className="text-primary font-display-light mb-2 text-5xl md:text-6xl">{number}</div>
              <div className="tracking-editorial text-[10px] uppercase text-foreground/55">{label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionScaffold>
  );
}
