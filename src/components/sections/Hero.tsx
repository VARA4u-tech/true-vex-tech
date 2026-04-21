import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const STATS = [
  { value: "60%", label: "Data efficiency gain" },
  { value: "40%", label: "User engagement boost" },
  { value: "30%", label: "Cost reduction" },
];

const HEADLINE = "Innovate. Develop. Accelerate. Your future.".split(" ");

export function Hero() {
  return (
    <LampContainer className="pt-8 md:pt-12">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Software Consultancy
          </motion.span>

          <h1 className="font-display mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
            {HEADLINE.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-3 inline-block md:mr-5"
              >
                {word === "Accelerate." ? <span className="text-gradient">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          >
            Leading software consultancy committed to delivering cutting-edge solutions that drive
            business growth and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-primary-glow"
            >
              Get a Quote
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background px-8 py-12 text-center"
            >
              <div className="font-display text-5xl font-bold tracking-tight text-gradient md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </LampContainer>
  );
}
