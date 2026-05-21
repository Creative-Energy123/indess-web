import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestPanel from "@/components/QuoteRequestPanel";
import ContactSection from "@/pages/home/sections/ContactSection";
import HomePage from "@/pages/home";
import CompanyPage from "@/pages/company";
import CatalogPage from "@/pages/catalog/catalog";
import CatalogCategoryPage from "@/pages/catalog/category";
import HseServicesPage from "@/pages/hse-services";
import PartnersPage from "@/pages/partners";
import ClientsPage from "@/pages/clients";
import NotFoundPage from "@/pages/not-found";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [quotePanelOpen, setQuotePanelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <ContactSection onRequestQuote={() => setQuotePanelOpen(true)} />

      <Footer />

      <QuoteRequestPanel open={quotePanelOpen} onOpenChange={setQuotePanelOpen} />
    </div>
  );
}