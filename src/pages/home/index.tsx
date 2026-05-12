import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import BrandsSection from "@/pages/home/sections/BrandsSection";
import CeoMessageSection from "@/pages/home/sections/CeoMessageSection";
import CompanyIntroSection from "@/pages/home/sections/CompanyIntroSection";
import ExpertiseSection from "@/pages/home/sections/ExpertiseSection";
import IndustriesSection from "@/pages/home/sections/IndustriesSection";
import PartnersSection from "@/pages/home/sections/PartnersSection";
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
      <IndustriesSection />
      <BrandsSection />
      <PartnersSection />
      <PresenceSection />
    </Layout>
  );
}
