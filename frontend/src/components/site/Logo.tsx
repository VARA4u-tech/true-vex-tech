import logo from "@/assets/logo.png";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <img src={logo} alt="TrueVex Logo" className="h-8 md:h-10 w-auto object-contain" />
      <span className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground">
        TrueVex<span className="text-primary">.</span>
      </span>
    </div>
  );
}
