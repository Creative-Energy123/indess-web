import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";

export default function CeoMessageSection() {
  return (
    <SectionScaffold className="section-space-lg bg-background-subtle">
      <Reveal>
        <div className="mx-auto max-w-6xl border border-border-soft bg-white p-8 md:p-12 lg:p-14">
          <div className="mb-10 border-b border-border-soft pb-8">
            <SectionLabel n="02" label="A Message From CEO" />
            <div className="mt-6">
              <p className="font-display-light text-4xl leading-[0.95] text-foreground md:text-5xl">M.S AKRAM</p>
              <p className="mt-3 text-[12px] uppercase tracking-editorial text-gold">Chief Executive Officer</p>
            </div>
          </div>

          <div className="mb-5 text-[11px] uppercase tracking-editorial text-foreground/55">Message</div>
          <h3 className="font-display-light mb-8 max-w-5xl text-3xl leading-[1.25] text-foreground md:text-4xl">
            Quality is not a feature - it is the foundation upon which every reliable operation is built.
          </h3>

          <div className="space-y-5 max-w-5xl text-[16px] font-light leading-[1.85] text-foreground/70">
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
        </div>
      </Reveal>
    </SectionScaffold>
  );
}
