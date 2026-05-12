type PartnerLogoProps = {
  name: string;
  className?: string;
};

export default function PartnerLogo({ name, className = "" }: PartnerLogoProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className={className}>
      <div className="inline-flex items-center justify-center border border-border-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {initials}
      </div>
    </div>
  );
}
