import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteRequestPanel from "./components/QuoteRequestPanel";
import HomePage from "./pages/home";
import CatalogPage from "./pages/catalog/catalog";
import CatalogCategoryPage from "./pages/catalog/category";
import PartnersPage from "./pages/partners";
import ClientsPage from "./pages/clients";
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
          <Route path="/catalog" element={<CatalogPage onRequestQuote={() => setQuotePanelOpen(true)} />} />
          <Route path="/catalog/:slug" element={<CatalogCategoryPage onRequestQuote={() => setQuotePanelOpen(true)} />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />

      <QuoteRequestPanel open={quotePanelOpen} onOpenChange={setQuotePanelOpen} />
    </div>
  );
}