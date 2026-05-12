import { ArrowUpRight } from "lucide-react";

import SectionScaffold from "@/components/layout/SectionScaffold";
import imgLogistics from "@/assets/cin-logistics.jpg";

type ContactSectionProps = {
  onRequestQuote: () => void;
};

export default function ContactSection({ onRequestQuote }: ContactSectionProps) {
  return (
    <SectionScaffold id="contact" className="section-space-lg relative overflow-hidden bg-primary-dark text-white">
      <img src={imgLogistics} alt="Industrial background" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-primary-dark/82 to-primary-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 to-primary-dark/30" />

      <div className="relative z-10 text-center">
        <p className="text-gold mb-7 text-[11px] uppercase tracking-editorial">Work With Us</p>
        <h2 className="font-display-light mx-auto mb-10 max-w-4xl text-5xl leading-[0.96] tracking-tight text-white md:text-6xl lg:text-7xl">
          Bring INDESS into your next industrial project.
        </h2>
        <button
          type="button"
          onClick={onRequestQuote}
          className="btn btn-primary btn-nav-cta inline-flex items-center gap-3 px-10 py-4"
        >
          Request Consultation <ArrowUpRight size={14} />
        </button>
      </div>
    </SectionScaffold>
  );
}
