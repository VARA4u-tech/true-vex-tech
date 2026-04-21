type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <div className="flex items-center">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-glow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-foreground"
          >
            <path d="M4 4l8 16 8-16" />
          </svg>
        </div>
      </div>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        TrueVex<span className="text-primary">.</span>
      </span>
    </div>
  );
}
