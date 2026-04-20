type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <div className="flex items-center gap-1">
        {/* Three rounded squares with cut corners — abstract PJN-style mark */}
        <span className="relative block h-6 w-6 rounded-md bg-foreground">
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-tl-md bg-background" />
        </span>
        <span className="relative block h-6 w-6 rounded-md bg-foreground">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-b-md bg-background" />
        </span>
        <span className="relative block h-6 w-6 rounded-md bg-foreground">
          <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-t-md bg-background" />
        </span>
      </div>
      <span className="font-display text-base font-bold tracking-tight">
        PayJustNow
      </span>
    </div>
  );
}
