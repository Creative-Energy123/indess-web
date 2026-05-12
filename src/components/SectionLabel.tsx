type SectionLabelProps = {
  n: string;
  label: string;
};

export default function SectionLabel({ n, label }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-gold tracking-editorial text-[11px] font-medium uppercase">{n}</span>
      <span className="rule-gold h-px w-10" />
      <span className="tracking-editorial text-[11px] uppercase text-foreground/60">{label}</span>
    </div>
  );
}
