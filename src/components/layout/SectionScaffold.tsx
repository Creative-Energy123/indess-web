import type { ReactNode } from "react";

type SectionScaffoldProps = {
  id?: string;
  className?: string;
  shellClassName?: string;
  children: ReactNode;
};

export default function SectionScaffold({
  id,
  className = "section-space-lg bg-white",
  shellClassName = "page-shell",
  children,
}: SectionScaffoldProps) {
  return (
    <section id={id} className={className}>
      <div className={shellClassName}>{children}</div>
    </section>
  );
}
