import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import BrandsSection from "@/pages/home/sections/BrandsSection";
import CeoMessageSection from "@/pages/home/sections/CeoMessageSection";
import CompanyIntroSection from "@/pages/home/sections/CompanyIntroSection";
import ExpertiseSection from "@/pages/home/sections/ExpertiseSection";
import PresenceSection from "@/pages/home/sections/PresenceSection";
import ProductsSection from "@/pages/home/sections/ProductsSection";

export default function HomePage() {
  return (
    <Layout>
      <div id="top" />

      <HeroCarousel />
      <CompanyIntroSection />
      <CeoMessageSection />
      <ExpertiseSection />
      <ProductsSection />
      <BrandsSection />
      <PresenceSection />
    </Layout>
  );
}
