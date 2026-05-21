type PartnerLogoProps = {
  name: string;
  logo?: string;
  className?: string;
};

export default function PartnerLogo({ name, logo, className = "" }: PartnerLogoProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className={className}>
      {logo ? (
        <img src={logo} alt={`${name} logo`} className="h-10 w-auto max-w-[180px] object-contain" loading="lazy" />
      ) : (
        <div className="inline-flex items-center justify-center border border-border-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {initials}
        </div>
      )}
    </div>
  );
}
