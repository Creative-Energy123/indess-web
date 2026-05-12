import type { ReactNode } from "react";

type DisplayHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function DisplayHeading({ children, className = "" }: DisplayHeadingProps) {
  return (
    <h2 className={`font-display-light text-5xl leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl ${className}`}>
      {children}
    </h2>
  );
}
