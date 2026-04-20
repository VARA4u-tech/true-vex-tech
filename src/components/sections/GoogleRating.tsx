import { motion } from "framer-motion";

function Star({ filled = 1 }: { filled?: number }) {
  return (
    <span className="relative inline-block h-7 w-7 md:h-9 md:w-9">
      <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full text-foreground/15" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
      <span
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${filled * 100}%` }}
      >
        <svg viewBox="0 0 24 24" className="h-full w-full text-primary" fill="currentColor" preserveAspectRatio="xMinYMid meet">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      </span>
    </span>
  );
}

export function GoogleRating() {
  const rating = 4.7;
  const stars = [1, 1, 1, 1, 0.7];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">
              Reviews
            </span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.05] md:text-5xl">
              Our Google rating
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              We&apos;re committed to providing the best interest-free payment
              solution — but don&apos;t just take our word for it. Read over
              5,378 reviews written by shoppers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14"
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--primary)" }}
            />
            <div className="relative">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-7xl font-bold text-gradient md:text-8xl">
                  {rating}
                </span>
                <span className="font-display text-3xl font-medium text-muted-foreground md:text-4xl">
                  / 5
                </span>
              </div>
              <div className="mt-6 flex gap-1.5">
                {stars.map((s, i) => (
                  <Star key={i} filled={s} />
                ))}
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Based on 5,378+ reviews
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
