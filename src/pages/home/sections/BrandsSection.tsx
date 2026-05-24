import DisplayHeading from "@/components/DisplayHeading";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import { brands } from "@/pages/home/data";

export default function BrandsSection() {
  const featuredBrands = brands.slice(0, 12);

  return (
    <SectionScaffold id="brands" className="section-space-lg bg-background-subtle">
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-6">
          <SectionLabel n="05" label="Brands" />
          <DisplayHeading>The world&apos;s most trusted manufacturers under one roof.</DisplayHeading>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
          <p className="text-[15px] text-foreground/70 leading-[1.8] font-light">
            We represent and supply equipment from a curated portfolio of global OEMs selected for
            engineering excellence and proven field reliability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-border-soft bg-white">
        {featuredBrands.map((brand, index) => (
          <div key={brand.name} className="border-r border-b border-border-soft aspect-[3/2] flex items-center justify-center group hover:bg-background-subtle transition-colors p-6">
            <div className="text-center flex flex-col items-center gap-2">
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain" />
              ) : (
                <div className="font-display-light text-2xl md:text-3xl text-foreground/85 group-hover:text-primary transition-colors">{brand.name}</div>
              )}
              <div className="text-[10px] tracking-editorial uppercase text-foreground/50">B/{String(index + 1).padStart(2, "0")}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/brands" className="inline-flex items-center gap-2 border-b border-secondary pb-2 text-[11px] uppercase tracking-editorial text-primary transition-colors hover:text-gold">
          View All Brands <ArrowUpRight size={14} />
        </Link>
      </div>
    </SectionScaffold>
  );
}
