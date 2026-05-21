import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import hero from "@/assets/cin-hero.jpg";
import imgMechanical from "@/assets/cin-mechanical.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgHse from "@/assets/hse-hero.jpg";

type Slide = {
  eyebrow: string;
  volume: string;
  title: ReactNode;
  copy: string;
  image: string;
  cta: { label: string; to: string };
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Industrial Energy Supply",
    volume: "Chapter I",
    title: (
      <>
        Engineering
        <br />
        the foundations of
        <br />
        <span className="text-gold italic font-light">industry.</span>
      </>
    ),
    copy: "INDESS is a precision supplier of mission-critical equipment to the oil & gas, petrochemical, power and marine sectors - sourced globally, delivered locally.",
    image: hero,
    cta: { label: "Discover INDESS", to: "/company" },
  },
  {
    eyebrow: "Products & Catalog",
    volume: "Chapter II",
    title: (
      <>
        A complete portfolio,
        <br />
        <span className="text-gold italic font-light">engineered to spec.</span>
      </>
    ),
    copy: "Mechanical · Instrumentation · Electrical · Industrial Chemicals · Marine - thousands of products from tier-one OEMs, sourced globally and delivered under one roof.",
    image: imgMechanical,
    cta: { label: "Browse Catalog", to: "/catalog" },
  },
  {
    eyebrow: "Industries We Serve",
    volume: "Chapter III",
    title: (
      <>
        Where uptime
        <br />
        is not
        <br />
        <span className="text-gold italic font-light">a feature.</span>
      </>
    ),
    copy: "Oil & Gas · Petrochemical · Power & Utilities · Marine · Aviation - supporting upstream rigs, downstream refineries and critical infrastructure operators across the region.",
    image: imgOilgas,
    cta: { label: "Explore Industries", to: "/#industries" },
  },
  {
    eyebrow: "HSE Services & Trainings",
    volume: "Chapter IV",
    title: (
      <>
        Safety, certified.
        <br />
        <span className="text-gold italic font-light">People, protected.</span>
      </>
    ),
    copy: "In partnership with Oasis - HSE trainings, safety consultancy, audits, certifications and human resource solutions for industrial operators across the region.",
    image: imgHse,
    cta: { label: "Explore HSE Services", to: "/hse-services" },
  },
];

const AUTO_MS = 1800;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused) {
      return;
    }

    startRef.current = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - startRef.current) / AUTO_MS);
      setProgress(p);

      if (p >= 1) {
        setActive((current) => (current + 1) % SLIDES.length);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  const goTo = (index: number) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setProgress(0);
  };

  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden bg-primary-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-anim-skip-children
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === active;

        return (
          <div
            key={slide.eyebrow}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }}
            aria-hidden={!isActive}
          >
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                transform: isActive ? "scale(1.08) translate3d(0,0,0)" : "scale(1) translate3d(0,0,0)",
                transition: "transform 8000ms linear",
              }}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-primary-dark/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 to-transparent" />
          </div>
        );
      })}

      <div className="page-shell relative z-10 pb-32 md:pb-40">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="text-white lg:col-span-9">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.volume}
                className="transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ display: index === active ? "block" : "none" }}
              >
                <h1
                  className="animate-fade-up font-display-light mb-8 text-[clamp(2.5rem,6.6vw,6rem)] leading-[0.96] tracking-tight text-white"
                  style={{ animationDelay: "260ms" }}
                >
                  {slide.title}
                </h1>
                <p
                  className="animate-fade-up mb-10 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg"
                  style={{ animationDelay: "440ms" }}
                >
                  {slide.copy}
                </p>
                <Link
                  to={slide.cta.to}
                  className="animate-fade-up inline-flex items-center gap-3 bg-secondary px-7 py-4 text-[11px] uppercase tracking-editorial text-foreground transition-colors hover:bg-white"
                  style={{ animationDelay: "600ms" }}
                >
                  {slide.cta.label} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-gradient-to-t from-primary-dark/85 to-transparent">
        <div className="page-shell flex items-center gap-8 py-6">
          <div className="tabular-nums text-[10px] uppercase tracking-editorial text-white/65">
            <span className="text-white">{String(active + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-white/40">/</span>
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>

          <div className="flex flex-1 items-center gap-3">
            {SLIDES.map((slide, index) => {
              const isActive = index === active;

              return (
                <button
                  key={slide.volume}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group relative h-px flex-1 py-3"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20 transition-colors group-hover:bg-white/40" />
                  <span
                    className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-secondary transition-[width] duration-150 ease-linear"
                    style={{ width: isActive ? `${progress * 100}%` : index < active ? "100%" : "0%" }}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden max-w-[220px] truncate text-[10px] uppercase tracking-editorial text-white/55 md:block">
            Next · {SLIDES[(active + 1) % SLIDES.length].eyebrow}
          </div>
        </div>
      </div>
    </section>
  );
}
