const BRANDS = [
  "Adidas",
  "Puma",
  "Makro",
  "Cape Union Mart",
  "Cotton On",
  "Superbalist",
  "Sportscene",
  "Totalsports",
  "Mr Price",
  "Game",
];

export function BrandMarquee() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-10">
      <div className="mx-auto mb-6 max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by South Africa&apos;s leading retailers
        </p>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        />
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap px-8">
          {items.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-3xl font-bold uppercase tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground md:text-4xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
