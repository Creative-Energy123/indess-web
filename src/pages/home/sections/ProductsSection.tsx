import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import DisplayHeading from "@/components/DisplayHeading";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionScaffold from "@/components/layout/SectionScaffold";
import { products } from "@/pages/home/data";

export default function ProductsSection() {
  return (
    <SectionScaffold id="products" className="section-space-lg bg-white" shellClassName="">
      <div className="page-shell mb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <SectionLabel n="04" label="Products" />
            <DisplayHeading>A complete portfolio for industrial operations.</DisplayHeading>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
            <p className="text-[15px] text-foreground/70 leading-[1.8] font-light">
              We provide a comprehensive range of products tailored to client needs and engineered for
              performance, reliability and safety across specialized domains.
            </p>
            <Link to="/catalog" className="inline-flex items-center gap-3 mt-8 text-[11px] tracking-editorial uppercase font-medium text-white bg-primary px-6 py-3 hover:bg-primary-dark transition-colors">
              View Product Catalog <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-32 lg:space-y-40">
        {products.map((product, index) => {
          const reverse = index % 2 === 1;
          return (
            <Reveal key={product.n} className="page-shell" y={48}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                    <img src={product.img} alt={product.title} loading="lazy" className="w-full h-full object-cover" width={1600} height={1200} />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    <div className="absolute top-6 left-6 bg-white px-4 py-2">
                      <span className="text-[10px] tracking-editorial uppercase text-gold">{product.n}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[11px] tracking-editorial uppercase text-gold">Domain</span>
                    <span className="h-px w-10 rule-gold" />
                  </div>
                  <h3 className="font-display-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">{product.title}</h3>
                  <p className="text-[15px] text-foreground/70 leading-[1.8] font-light mb-8">{product.copy}</p>
                  <ul className="border-t border-border-soft">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center justify-between py-4 border-b border-border-soft text-[13px] text-foreground/80 font-light">
                        <span>{item}</span>
                        <span className="h-px w-8 bg-secondary" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionScaffold>
  );
}
