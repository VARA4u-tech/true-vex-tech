import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="apply" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-balance text-5xl font-bold leading-[0.98] md:text-7xl"
        >
          Join the PayJustNow <span className="text-gradient">Business</span>{" "}
          Network
        </motion.h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Start offering interest-free instalments to over 2.6 million pre-approved
          shoppers. Get paid upfront and grow your basket sizes today.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-primary-glow"
          >
            Apply now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/10"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
