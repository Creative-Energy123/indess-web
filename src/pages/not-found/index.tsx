import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="page-shell section-space-lg pt-36">
      <p className="text-gold text-[11px] uppercase tracking-editorial">404</p>
      <h1 className="font-display-light mt-4 text-5xl text-primary-dark md:text-6xl">Page Not Found</h1>
      <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.8] text-foreground/70">
        The page you requested does not exist or may have been moved.
      </p>
      <Link to="/" className="btn btn-primary btn-nav-cta mt-10 inline-flex px-6 py-3">
        Back to Home
      </Link>
    </section>
  );
}
