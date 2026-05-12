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
            <SectionLabel n="02" label="A Message From CEO" />
            <p className="font-display-light mb-8 text-3xl leading-[1.25] text-foreground md:text-4xl">
              “At INDESS we believe quality is not a feature - it is the foundation upon which every reliable
              operation is built.”
            </p>
            <div className="space-y-5 text-[15px] font-light leading-[1.8] text-foreground/70">
              <p>
                We are delighted to welcome you to INDESS - your gateway to top-quality oil &amp; gas
                supply equipment. Our commitment is simple: source globally, engineer trust locally, and
                stand behind every shipment we deliver.
              </p>
              <p>
                With a network of trusted manufacturers and a deeply experienced technical team, we
                propel our clients&apos; operations to new heights with cutting-edge equipment and
                unrivalled expertise.
              </p>
            </div>
            <div className="mt-10 border-t border-border-soft pt-6">
              <p className="font-display-light text-2xl">Muhammad Sajjad</p>
              <p className="mt-1 text-[11px] uppercase tracking-editorial text-gold">The Chief Executive</p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionScaffold>
  );
}
