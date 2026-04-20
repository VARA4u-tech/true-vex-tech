import { motion } from "framer-motion";

export function MarketingCTA() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-20"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-10 h-96 w-96 rounded-full bg-black/20 blur-3xl"
          />

          <div className="relative grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Grow your business
              </span>
              <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] text-white md:text-6xl">
                Marketing solutions that put you in front of 2.6M shoppers
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              <p className="max-w-md text-base text-white/90 md:text-right">
                Get noticed by our community and turn interested browsers into
                new customers — across email, app, and on-site placements.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Learn more
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
