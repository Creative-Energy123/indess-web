import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function Reveal({ children, className = "", delay = 0, y = 24 }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    opacity: visible ? 1 : 0,
  };

  return (
    <div
      ref={rootRef}
      style={style}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
