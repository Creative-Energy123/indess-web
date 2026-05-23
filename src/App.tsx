import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";
import ContactSection from "@/pages/home/sections/ContactSection";
import HomePage from "@/pages/home";
import CompanyPage from "@/pages/company";
import CatalogPage from "@/pages/catalog/catalog";
import CatalogCategoryPage from "@/pages/catalog/category";
import HseServicesPage from "@/pages/hse-services";
import PartnersPage from "@/pages/partners";
import ClientsPage from "@/pages/clients";
import ProjectsPage from "@/pages/projects";
import NotFoundPage from "@/pages/not-found";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/hse-services" element={<HseServicesPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:slug" element={<CatalogCategoryPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <ContactSection />

      <Footer />
    </div>
  );
}