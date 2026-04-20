type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <div className="flex items-center gap-1">
        <span className="relative block h-6 w-6 rounded-md bg-primary">
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-tl-md bg-background" />
        </span>
        <span className="relative block h-6 w-6 rounded-md bg-primary">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-b-md bg-background" />
        </span>
        <span className="relative block h-6 w-6 rounded-md bg-primary">
          <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-t-md bg-background" />
        </span>
      </div>
      <span className="font-display text-base font-bold tracking-tight text-foreground">
        PayJustNow
      </span>
    </div>
  );
}
