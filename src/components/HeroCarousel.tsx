import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import hero from "@/assets/cin-hero.jpg";
import imgOilgas from "@/assets/industry-oilgas.jpg";
import imgPower from "@/assets/industry-power.jpg";
import imgShip from "@/assets/industry-shipping.jpg";
import imgPetro from "@/assets/industry-petrochemical.jpg";

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
    copy: "INDESS is a precision supplier of mission-critical equipment to the oil and gas, petrochemical, power and marine sectors - sourced globally, delivered locally.",
    image: hero,
    cta: { label: "Discover INDESS", to: "/company" },
  },
  {
    eyebrow: "Mission-Critical Sectors",
    volume: "Chapter II",
    title: (
      <>
        Where uptime
        <br />
        is not
        <br />
        <span className="text-gold italic font-light">a feature.</span>
      </>
    ),
    copy: "From upstream rigs to downstream refineries, our equipment keeps the world's most demanding operations running safely, reliably and continuously.",
    image: imgOilgas,
    cta: { label: "Explore Industries", to: "/#industries" },
  },
  {
    eyebrow: "Engineered Trust",
    volume: "Chapter III",
    title: (
      <>
        Tier-one OEMs.
        <br />
        <span className="text-gold italic font-light">Zero compromise.</span>
      </>
    ),
    copy: "Direct partnerships with leading manufacturers under transparent terms and engineering-led specification.",
    image: imgPetro,
    cta: { label: "Meet Our Partners", to: "/partners" },
  },
  {
    eyebrow: "Marine & Offshore",
    volume: "Chapter IV",
    title: (
      <>
        Built for
        <br />
        the open
        <br />
        <span className="text-gold italic font-light">ocean.</span>
      </>
    ),
    copy: "Marine-grade systems for shipyards, VLCCs and offshore platforms supplied with the spares continuity that keeps every vessel mission-ready.",
    image: imgShip,
    cta: { label: "Browse Catalog", to: "/catalog" },
  },
  {
    eyebrow: "Worldwide Presence",
    volume: "Chapter V",
    title: (
      <>
        From the Gulf
        <br />
        to every
        <br />
        <span className="text-gold italic font-light">horizon.</span>
      </>
    ),
    copy: "Headquartered in Abu Dhabi and operating across multiple countries to support sourcing, logistics and after-sales continuity.",
    image: imgPower,
    cta: { label: "View Clients", to: "/clients" },
  },
];

const AUTO_MS = 2800;

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
