const ITEMS = [
  "Increased traffic",
  "Boosted sales",
  "Zero risk",
  "Higher conversion",
  "Upfront payment",
  "Bigger basket size",
];

export function GrowthMarquee() {
  const items = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-10">
      <div className="mb-4 px-5 text-center md:px-8">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">
          Designed for growth
        </span>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee-fast items-center gap-10 whitespace-nowrap px-6">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-display flex items-center gap-10 text-4xl font-bold tracking-tight md:text-6xl"
            >
              {t}
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
