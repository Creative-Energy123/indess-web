import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/indess-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[hsl(210_100%_8%)] text-white">
      <div className="page-shell py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logo} alt="INDESS" className="h-16 w-auto" width={220} height={64} />
            <p className="mt-10 max-w-md text-[15px] font-light leading-[1.6] text-white/70">
              Industrial Energy Supply Solutions - engineering trust through precision-sourced equipment for the world's most demanding industries.
            </p>
            <div className="rule-gold mt-10 h-px w-20" />
            <p className="text-gold mt-8 text-[11px] uppercase tracking-editorial">Engineered Confidence</p>
          </div>

          <div className="lg:col-span-2 lg:col-start-5">
            <p className="mb-6 text-[11px] uppercase tracking-editorial text-white/60">Navigate</p>
            <nav className="space-y-4 text-lg font-light text-white/85">
              <Link to="/company" className="block transition-colors hover:text-secondary">
                Company
              </Link>
              <Link to="/catalog" className="block transition-colors hover:text-secondary">
                Catalog
              </Link>
              <Link to="/partners" className="block transition-colors hover:text-secondary">
                Partners
              </Link>
              <Link to="/clients" className="block transition-colors hover:text-secondary">
                Clients
              </Link>
              <Link to="/#contact" className="block transition-colors hover:text-secondary">
                Contact
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-6 text-[11px] uppercase tracking-editorial text-white/60">Headquarters</p>
            <div className="space-y-6 text-base text-white/80">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 shrink-0 text-secondary" />
                <p className="leading-[1.5]">
                  Ahmed Sultan Yousuf Building, Sector M-09, Mussafah Industrial Area, P.O. Box 9101, Abu Dhabi, UAE
                </p>
              </div>

              <a href="mailto:sales@indessuae.com" className="flex items-center gap-4 transition-colors hover:text-white">
                <Mail size={18} className="shrink-0 text-secondary" />
                <span>sales@indessuae.com</span>
              </a>

              <a href="tel:+97126711663" className="flex items-center gap-4 transition-colors hover:text-white">
                <Phone size={18} className="shrink-0 text-secondary" />
                <span>+971 2 671 1663</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-6 text-[11px] uppercase tracking-editorial text-white/60">Follow</p>
            <div className="space-y-4 text-base text-white/80">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="h-1.5 w-1.5 bg-secondary" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="h-1.5 w-1.5 bg-secondary" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
